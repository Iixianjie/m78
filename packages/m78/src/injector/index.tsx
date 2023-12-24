import { AnyFunction, AnyObject, isObject } from "@m78/utils";
import React, { ReactElement, useCallback, useEffect, useMemo } from "react";
import { throwError } from "../common/index.js";

/**
 * 在开发大型组件时, Injector 能帮助你更轻松的拆解和维护组织代码
 *
 * 核心概念:
 * - actuators: 执行器是一个普通的自定义 hooks, 区别是他会返回一个对象, 这个对象称为 deps(依赖), 你可以在组件的其他位置很方便的对其进行访问.
 * - deps: 由 actuators 返回的对象被称为 deps, deps 可以通过 useDeps(Actuator) 在当前组件上下文中访问.
 * - Injector: 挂载根 actuator, 生成渲染组件.
 *
 * @param view - 渲染器, 渲染视图内容, 渲染器是一个特殊的 Actuator, 在其中使用的注入器会被视为根注入器
 * @param config - 其他额外配置
 * */
export function createInjector<Props = any, Def = any>(
  view: (injector: Injector<Props>) => ReactElement | null,
  config: InjectorConfig<Def> = {}
): Injector<Props, Def> {
  /** 用于根据父子关系关联injector */
  const ctx = React.createContext<Context>({
    isDefault: true,
  } as Context);

  const injector = {} as Injector<Props>;

  const injectors = implInjectors(ctx);

  const Component = () => {
    const curCtx = React.useContext(ctx);

    // 每次render清理已执行状态
    curCtx.calledActuator = new Map();
    curCtx.callingActuator = new Map();

    // 清理关联项
    useEffect(() => {
      return () => {
        curCtx.store.clear();
        delete (curCtx as any).store;
        delete (curCtx as any).props;
      };
    }, []);

    return view(injector);
  };

  /** 根, 用于挂载 Provider, 标记当前的注入目标 */
  const Injector = (props: any) => {
    const curCtx = useMemo<Context>(
      () => ({
        store: new Map(),
        calledActuator: null as any,
        callingActuator: null as any,
        props: {} as any,
        isDefault: false,
        callbacks: new Map(),
      }),
      []
    );

    curCtx.props = clearOrNew(curCtx.props, config.defaultProps, props);

    return (
      <ctx.Provider value={curCtx}>
        <Component {...curCtx.props} />
      </ctx.Provider>
    );
  };

  if (config.displayName) {
    Component.displayName = config.displayName;
    Injector.displayName = `Injector(${config.displayName})`;
  }

  return Object.assign(injector, injectors, {
    Component: Injector,
  });
}

function implInjectors<Props = any>(
  ctx: React.Context<Context>
): Injectors<Props> {
  /** 实现 useDeps 和 getDeps */
  const implDepsApi = (c?: Context): Injectors["useDeps"] => {
    return (...args: InjectorActuator[]) => {
      const curCtx = c || React.useContext(ctx);

      if (curCtx.isDefault) {
        throwError(getRuleMsg("useDeps/useAction()"));
      }

      // 处理并获取指定索引项
      const get = (actuator: InjectorActuator) => {
        if (!c) {
          runActuator(actuator, curCtx);
        }

        const item = curCtx.store.get(actuator);

        return item!;
      };

      if (args.length === 1) {
        return get(args[0]);
      }

      return args.map((ac) => get(ac)) as any;
    };
  };

  const useProps: Injectors["useProps"] = () => {
    const curCtx = React.useContext(ctx);

    if (curCtx.isDefault) {
      throwError(getRuleMsg("useProps()"));
    }

    return curCtx.props;
  };

  const useSettle: Injectors["useSettle"] = (actuator, cb) => {
    const curCtx = React.useContext(ctx);

    if (curCtx.isDefault) {
      throwError(getRuleMsg("useSettle()"));
    }

    const list = curCtx.callbacks.get(actuator);

    if (!list) {
      curCtx.callbacks.set(actuator, [cb]);
    } else {
      list.push(cb);
    }

    callOrStoreCallback(actuator, curCtx);
  };

  const useProvider: Injectors["useProvider"] = () => {
    const curCtx = React.useContext(ctx);

    if (curCtx.isDefault) {
      throwError(getRuleMsg("useProvider()"));
    }

    return useCallback(
      ({ children }: { children: React.ReactElement }) => {
        return <ctx.Provider value={curCtx}>{children}</ctx.Provider>;
      },
      [curCtx]
    );
  };

  const useStatic: Injectors["useStatic"] = (cb) => {
    return useMemo(cb, []) as any;
  };

  const useGetter: Injectors["useGetter"] = () => {
    const curCtx = React.useContext(ctx);

    if (curCtx.isDefault) {
      throwError(getRuleMsg("useGetter()"));
    }

    return useMemo(() => {
      return {
        getProps: () => curCtx.props,
        getDeps: implDepsApi(curCtx),
      };
    }, [curCtx]);
  };

  return {
    useDeps: implDepsApi(),
    useProps,
    useSettle,
    useProvider,
    useStatic,
    useGetter,
  };
}

/* # # # # # # # util # # # # # # # */

// 运行单个Actuator
function runActuator(fn: InjectorActuator, curCtx: Context) {
  const called = curCtx.calledActuator.get(fn);

  // 已执行则跳过
  if (called) return;

  let item = curCtx.store.get(fn);

  // 未执行过, 设为初始值
  if (!item) {
    item = {};
    curCtx.store.set(fn, item);
  }

  curCtx.calledActuator.set(fn, true);
  curCtx.callingActuator.set(fn, true);

  const depObj = clearOrNew(item, fn() || {});

  curCtx.callingActuator.set(fn, false);

  curCtx.store.set(fn, depObj);

  callOrStoreCallback(fn, curCtx);
}

// 若指定actuator已完成, 则立即执行回调, 否则中断等待后续执行
function callOrStoreCallback(actuator: InjectorActuator, curCtx: Context) {
  const called = curCtx.calledActuator.get(actuator);
  const calling = curCtx.callingActuator.get(actuator);

  if (!called) return;

  if (calling) return;

  const list = curCtx.callbacks.get(actuator);

  if (!list?.length) return;

  const deps = curCtx.store.get(actuator);

  list.forEach((cb) => {
    cb(deps);
  });

  list.length = 0;
}

function getRuleMsg(name: string) {
  return `injector: ${name} can only be used in actuators, and without async and conditional statement`;
}

// 清空传入的o并返回或创建一个新的对象, 并将newObj的所有内容合并到返回对象中
function clearOrNew(o: AnyObject | undefined, ...newObj: any[]) {
  let ob: AnyObject;

  if (!o) {
    ob = {};
  } else {
    for (const oKey in o) {
      delete o[oKey];
    }
    ob = o;
  }

  if (newObj.length) {
    Object.assign(ob, ...newObj.filter(isObject));
  }

  return ob;
}

/* # # # # # # # type # # # # # # # */

/** context类型 */
interface Context {
  /** 存储所有实例的deps, key = 组件id */
  store: DepsStore;
  /** 记录已执行过的actuator */
  calledActuator: Map<InjectorActuator, boolean | undefined>;
  /** 记录正在执行尚未完成的 */
  callingActuator: Map<InjectorActuator, boolean | undefined>;
  /** 记录useActuatorDone callback */
  callbacks: Map<InjectorActuator, AnyFunction[]>;
  /** 组件当前的props */
  props: AnyObject;
  /** 是否是默认ctx */
  isDefault: boolean;
}

/** 以actuator函数作为key存储对应的deps */
type DepsStore = Map<Function, AnyObject>;

/**
 * Actuator 用于包含和关联一组逻辑或状态, 可在其中使用useDeps(Actuator)注入依赖项
 *
 * 执行器若返回值, 这些返回会作为deps存储, 可以在其它执行器通过inject(Actuator)访问, 返回类型必须是对象
 *
 * 执行顺序:
 * - 逐个执行 view 中的根执行器
 * - 若根执行器通过 useDeps 依赖其他 actuator, 会自动执行被依赖的 actuator, 待子执行器完成后再继续执行当前 actuator
 *   - 被依赖的 actuator 的若包含其他 actuator, 也遵循此规则依次向下执行
 * */
export interface InjectorActuator {
  (...args: any): AnyObject | void;
}

/** injector配置 */
export interface InjectorConfig<Def = any> {
  /** 默认props */
  defaultProps?: Def;
  /** 组件名称, 用于更好的debug */
  displayName?: string;
}

/** 所有可用的injector */
export interface Injectors<Props = any, Def = any> {
  /**
   * 获取指定Actuator的deps
   *
   * ### **用法:**
   * ```js
   * // 单个
   * const deps = useDeps(Actuator);
   *
   * // 多个
   * const [deps1, deps2] = useDeps(Actuator1, Actuator2);
   * ```
   *
   * ### **限制&规则:**
   * **简单版:**
   *
   * - useDeps与hooks有相同的规则, 不能在任何分支或异步代码内运行
   * - 在包含逆序依赖和使用useStatic的actuator中, 不要使用解构语法来分解 deps, 而是直接通过 deps 引用访问状态
   *
   * **详细版:**
   *
   * - 基本:
   *   - 由于 Actuator 本身是一个react自定义hook, 所以其遵循相同的限制规则, 不可用于条件分支/异步代码内.
   *   - 对同一个 Actuator 的useDeps总是返回相同的对象引用, 你可以通过引用访问避免一些闭包或逆序依赖带来的问题.
   * - 逆序依赖: 如果一个执行器依赖了在其后才会运行的执行器, 称为逆序依赖, 被依赖项由于尚未初始化, `useDeps()` 仅会返回一个空的对象, 并在完成初始化后对其填充, 你不能在 Actuator 内同步的获取到依赖, 解决方式有:
   *   - 不要同步访问依赖, 而是保有 deps 引用, 如: `const state = useDeps(useStateAct)`, 然后在后续的任意非同步代码中通过state使用它.
   *   - 使用 `useSettle(act, cb)` , 并在其回调中访问已经初始化完成的 deps
   * - 解构陷阱: 在以下情况中, 如果你通过解构语法来分解 deps, 可能会拿到陈旧的 deps 或根本拿不到, 应通过直接持有 deps 引用来进行访问:
   *   - 在逆序依赖中解构 deps, 因为 deps 在后续的执行器完成后才会填充, 你通过解构获取的可能是空或者前一次的状态
   *   - 在useStatic的静态内容中访问在其外部解构的 deps, 因为静态内容始终访问的是初次 render 时的deps快照, 如果 deps 在后续的 render 中更新, 你通过解构拿到的永远是第一次 render 的的内容
   * */
  useDeps: InjectorInject;

  /** 获取组件props */
  useProps: () => Props & Def;

  /** 在指定的actuator每次执行完成后立即进行回调, 可以用来解决逆序依赖获取的问题 */
  useSettle<T extends InjectorActuator = InjectorActuator>(
    actuator: T,
    cb: (deps: ReturnType<T>) => void
  ): void;

  /**
   * 在子组件包含其他相同Injector创建的实例时, 手动将上下文调整回当前组件实例
   *
   * ```jsx
   * // 假设useRenderAct在一个名为MyInjector组件作用域内
   * function useRenderAct() {
   *   const Provider = injector.useProvider();
   *
   *   // MyInjector 组件内部又使用了另一个 MyInjector 实例
   *   // 这种情况下, 子级的 MyInjector 实例内使用的injectors获取的是子 MyInjector 的上下文
   *   // 通过 useProvider 可以让你把上下文调整回父级作用域
   *   return (
   *     <MyInjector>
   *       <Provider>
   *         <div>xx</div>
   *       </Provider>
   *     </MyInjector>
   *   );
   * }
   * ```
   * */
  useProvider(): React.FC<{
    children: React.ReactElement;
  }>;

  /**
   * 注入静态内容, 它永远返回第一次render时的结果
   *
   * ```js
   * const useStaticAct = () => {
   *   return useStatic(() => ({
   *     MAX: 5,
   *     add(a, b) {
   *       return a + b;
   *     },
   *   }));
   * };
   * ```
   * */
  useStatic<T extends InjectorActuator = InjectorActuator>(
    cb: T
  ): InjectType<T>;

  /** 可以通过此api获取的getter, 在组件上下文之外访问deps或props */
  useGetter: () => {
    /** 与useDeps完全相同, 但是可以在任意位置使用, 你可以将其传递给外部功能代码或在异步代码中使用 */
    getDeps: InjectorInject;
    /** 与useProps完全相同, 但是可以在任意位置使用, 你可以将其传递给外部功能代码或在异步代码中使用 */
    getProps: () => Props;
  };
}

/** 一个injector实例 */
export interface Injector<Props = any, Def = any>
  extends Injectors<Props, Def> {
  Component: React.FC<Props>;
}

/** 用于根据单个actuator获取其返回的deps类型 */
export type InjectType<
  T extends InjectorActuator = InjectorActuator,
  T2 = ReturnType<T>
> = T2;

/**
 * inject函数类型声明
 * */
export interface InjectorInject {
  /** 单个注入, 单个返回 */ <
    T extends InjectorActuator = InjectorActuator,
    T2 = ReturnType<T>
  >(
    actuator: T
  ): T2;

  /** 复数形式, 最多支持5个参数 */ <
    T1 extends InjectorActuator = InjectorActuator,
    T1R = ReturnType<T1>,
    T2 extends InjectorActuator = InjectorActuator,
    T2R = ReturnType<T2>
  >(
    ...args: [T1, T2]
  ): [T1R, T2R];

  <
    T1 extends InjectorActuator = InjectorActuator,
    T1R = ReturnType<T1>,
    T2 extends InjectorActuator = InjectorActuator,
    T2R = ReturnType<T2>,
    T3 extends InjectorActuator = InjectorActuator,
    T3R = ReturnType<T3>
  >(
    ...args: [T1, T2, T3]
  ): [T1R, T2R, T3R];

  <
    T1 extends InjectorActuator = InjectorActuator,
    T1R = ReturnType<T1>,
    T2 extends InjectorActuator = InjectorActuator,
    T2R = ReturnType<T2>,
    T3 extends InjectorActuator = InjectorActuator,
    T3R = ReturnType<T3>,
    T4 extends InjectorActuator = InjectorActuator,
    T4R = ReturnType<T4>
  >(
    ...args: [T1, T2, T3, T4]
  ): [T1R, T2R, T3R, T4R];

  <
    T1 extends InjectorActuator = InjectorActuator,
    T1R = ReturnType<T1>,
    T2 extends InjectorActuator = InjectorActuator,
    T2R = ReturnType<T2>,
    T3 extends InjectorActuator = InjectorActuator,
    T3R = ReturnType<T3>,
    T4 extends InjectorActuator = InjectorActuator,
    T4R = ReturnType<T4>,
    T5 extends InjectorActuator = InjectorActuator,
    T5R = ReturnType<T5>
  >(
    ...args: [T1, T2, T3, T4, T5]
  ): [T1R, T2R, T3R, T4R, T5R];
}
