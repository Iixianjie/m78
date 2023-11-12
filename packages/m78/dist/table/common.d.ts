import { TablePluginContext } from "../table-vanilla/types/context.js";
import { RCTableProps } from "./types.js";
import { TablePlugin } from "../table-vanilla/plugin.js";
/** 需要忽略的table-vanilla配置 */
export declare const _tableOmitConfig: readonly ["el", "emptyNode", "emptySize", "interactiveRender", "viewEl", "viewContentEl", "eventCreator"];
/** 需要在变更时更新到table实例的props key */
export declare const _tableChangedListenKeys: readonly ["data", "columns", "rows", "cells", "height", "width", "autoSize", "rowHeight", "columnWidth", "stripe", "persistenceConfig", "rowSelectable", "cellSelectable", "dragSortRow", "dragSortColumn", "interactive", "schema"];
/** 同_tableChangedListenKeys, 可能是基础类型, 也可能是引用类型的字段, 若是基础类型则校验, 否则跳过 */
export declare const _tableChangedMixTypeConfig: readonly ["rowSelectable", "cellSelectable", "interactive"];
/** 合并处理_tableChangedListenKeys & _tableChangedMixTypeConfig */
export declare const _tableChangedIncludeChecker: (key: string, value: any) => boolean;
/** 从table实例中获取tableContext */
export declare const _getTableCtx: (instance: any) => TablePluginContext;
/** 由于plugin.rcRuntime等api必须与组件同步运行(包含hooks), 在初始化时将RCTablePlugin插件进行预先实例化 */
export declare const preInstantiationRCPlugin: (plugins: NonNullable<RCTableProps["plugins"]>) => (typeof TablePlugin | TablePlugin)[];
//# sourceMappingURL=common.d.ts.map