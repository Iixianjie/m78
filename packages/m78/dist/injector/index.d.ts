import { AnyObject } from "@m78/utils";
import React from "react";
/**
 * 更好和更轻松的组织和维护你的hooks和其他代码
 *
 * 核心概念:
 * - actuators: 执行器是一个普通的函数, 用于包含和关联一组逻辑或状态, 可以在其中使用 inject(Actuator)注入依赖项.
 * - deps: 由 actuators 返回的对象被称为 deps, deps 可以通过 inject(Actuator) 在不同的 actuators 之间访问.
 * - injector: 管理多个根 actuator, 生成渲染组件.
 *
 * @param view - 渲染器, 渲染视图内容, 在渲染器内注入的 Actuator 为根 Actuator
 * @param config - 其他额外配置
 * */
export declare function createInjector<Props = any>(view: (props: Props) => React.ReactElement | null, config?: InjectorConfig): InjectorComponent<Props>;
/**
 * 获取指定Actuator的deps
 *
 * ### **用法:**
 * ```js
 * // 单个
 * const deps = inject(Actuator);
 *
 * // 多个
 * const [deps1, deps2] = inject(Actuator1, Actuator2);
 * ```
 *
 * ### **限制&规则:**
 * **省心版:**
 *
 * - 总是将注入器放在 actuator 的顶部
 * - 在逆序依赖和静态执行器中, 不要使用解构语法来分解 deps, 而是直接通过 deps 引用访问状态
 *
 * **详细版:**
 *
 * - 基本: 必须在 Actuator 内调用, 不可用于条件分支/异步代码内, 同一个 Actuator 总是返回相同的对象引用, 你可以通过引用访问避免一些闭包或逆序依赖带来的问题
 * - 逆序依赖: 如果一个执行器依赖了在其后才会运行的执行器, 称为逆序依赖, 被依赖项由于尚未执行, `inject()` 仅会返回一个空的对象, 并在完成初始化后对其填充, 你不能在 Actuator 内同步的获取到依赖, 解决方式有:
 *   - 不要同步访问依赖, 而是保有 deps 引用, 如: `const state = inject(useState)`, 然后在后续的任意非同步代码中使用它.
 *   - 使用 `injectCallback(cb)` , 并在其回调中访问已经初始化的 deps
 * - 解构陷阱: 在以下情况中, 如果你通过解构语法来分解 deps, 可能会拿到陈旧的 deps 或根本拿不到, 应通过直接持有 deps 引用来进行访问:
 *   - 在静态执行器中解构 deps, 因为静态执行器只会在初次 render 时执行, 而 deps 会在后续的 render 中更新, 你通过解构拿到的永远是第一次 render 的快照
 *   - 在逆序依赖中解构 deps, 因为 deps 在后续的执行器完成后才会填充, 你通过解构获取的可能是空或者前一次的状态
 * */
export declare const inject: InjectorInject;
/** 获取组件props */
export declare const injectProps: <T = any>() => T;
/** 在指定的actuator每次执行完成后立即进行回调, 可以用来解决逆序依赖的问题 */
export declare const injectCallback: <T extends InjectorActuator = InjectorActuator>(actuator: T, cb: (deps: ReturnType<T>) => void) => void;
/**
 * Actuator 用于包含和关联一组逻辑或状态, 可在其中使用inject(Actuator)注入依赖项
 *
 * 执行器若返回值, 这些返回会作为deps存储, 可以在其它执行器通过inject(Actuator)访问, 返回类型必须是对象
 *
 * 执行顺序:
 * - 逐个执行 view 中的根执行器
 * - 若根执行器通过 inject 依赖其他 actuator, 会自动执行被依赖的 actuator, 待子执行器完成后再继续执行当前 actuator
 *   - 被依赖的 actuator 的若包含其他 actuator, 也遵循此规则依次向下执行
 *
 * 执行器种类:
 * - 默认为运行时执行器, 可以在其中使用hooks api, 运行时执行器会在组件每一次render时执行
 * - 执行器static属性设置为true时, 作为静态执行器, 仅在组件初始化阶段运行一次, 静态执行器总是在运行时执行器之前初始化
 * */
export interface InjectorActuator {
    (...args: any): AnyObject | void;
    /** 若设置为true, 改执行器被视为静态执行器 */
    static?: boolean;
}
/** injector配置 */
export interface InjectorConfig<Props = any> {
    /** 默认props */
    defaultProps?: Partial<Props>;
    /** 组件名称, 用于更好的debug */
    displayName?: string;
}
/** 经由injector管理后的组件, 可以直接作为成品组件使用 */
export declare type InjectorComponent<Props = any> = React.FC<Props>;
/**
 * inject函数类型声明
 * */
export interface InjectorInject {
    /** 单个注入, 单个返回 */ <T extends InjectorActuator = InjectorActuator, T2 = ReturnType<T>>(actuator: T): T2;
    /** 复数形式, 最多支持5个参数 */ <T1 extends InjectorActuator = InjectorActuator, T1R = ReturnType<T1>, T2 extends InjectorActuator = InjectorActuator, T2R = ReturnType<T2>>(...args: [T1, T2]): [T1R, T2R];
    <T1 extends InjectorActuator = InjectorActuator, T1R = ReturnType<T1>, T2 extends InjectorActuator = InjectorActuator, T2R = ReturnType<T2>, T3 extends InjectorActuator = InjectorActuator, T3R = ReturnType<T3>>(...args: [T1, T2, T3]): [T1R, T2R, T3R];
    <T1 extends InjectorActuator = InjectorActuator, T1R = ReturnType<T1>, T2 extends InjectorActuator = InjectorActuator, T2R = ReturnType<T2>, T3 extends InjectorActuator = InjectorActuator, T3R = ReturnType<T3>, T4 extends InjectorActuator = InjectorActuator, T4R = ReturnType<T4>>(...args: [T1, T2, T3, T4]): [T1R, T2R, T3R, T4R];
    <T1 extends InjectorActuator = InjectorActuator, T1R = ReturnType<T1>, T2 extends InjectorActuator = InjectorActuator, T2R = ReturnType<T2>, T3 extends InjectorActuator = InjectorActuator, T3R = ReturnType<T3>, T4 extends InjectorActuator = InjectorActuator, T4R = ReturnType<T4>, T5 extends InjectorActuator = InjectorActuator, T5R = ReturnType<T5>>(...args: [T1, T2, T3, T4, T5]): [T1R, T2R, T3R, T4R, T5R];
}
//# sourceMappingURL=index.d.ts.map