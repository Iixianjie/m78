/// <reference types="lodash" />
import { TablePlugin } from "../plugin.js";
import { AnyFunction, CustomEvent, EmptyFunction } from "@m78/utils";
import { WheelEvent } from "react";
import { TableCell } from "../types/items.js";
import { TableMutationEvent } from "./mutation.js";
import { TableReloadOptions } from "./life.js";
/**
 * 内部事件绑定, 外部事件派发
 * */
export declare class _TableEventPlugin extends TablePlugin {
    /** 在某些时候可以通过此项禁用内部的scroll监听, 防止重复触发 */
    disableScrollListener: boolean;
    initialized(): void;
    beforeDestroy(): void;
    onContext: (e: MouseEvent) => void;
    onClick: (e: MouseEvent) => void;
    /** 滚动 */
    onWheel: (e: WheelEvent) => void;
    /** 操作滚动条时同步滚动位置 */
    onScroll: () => void;
    /** 延迟100毫秒后将disableScrollListener设置为false, 内置防抖逻辑, 可以多次调用 */
    scrollEndTrigger: import("lodash").DebouncedFunc<() => void>;
    /** 用于手动设置滚动位置时, 在回调期间内防止触发内部onScroll事件 */
    scrollAction: (cb: AnyFunction) => void;
}
export interface TableEvents {
    /**
     * 内部抛出的一些提示性错误, 比如 "粘贴内容与选中单元格不匹配" 等
     * - 注意: 某些运行时错误, 比如未正确配置key等会直接crash而不是通过error提示
     * */
    error: CustomEvent<(msg: string) => void>;
    /** 点击, event为原始事件对象, 可能是MouseEvent/PointerEvent */
    click: CustomEvent<(cell: TableCell, event: Event) => void>;
    /** 表格容器尺寸/所在窗口位置变更时, 这对插件作者应该会有用 */
    resize: CustomEvent<ResizeObserverCallback>;
    /** 任意选中项变更 */
    select: CustomEvent<EmptyFunction>;
    /** 开始选取 */
    selectStart: CustomEvent<EmptyFunction>;
    /** 行选中变更 */
    rowSelect: CustomEvent<EmptyFunction>;
    /** 单元格选中变更 */
    cellSelect: CustomEvent<EmptyFunction>;
    /** 配置/数据等变更, 通常意味需要持久化的一些信息发生了改变 */
    mutation: CustomEvent<(event: TableMutationEvent) => void>;
    /** 单元格的挂载状态变更 (mount状态可以理解为单元格是否在表格视口内并被渲染, 可通过cell.isMount获取) */
    mountChange: CustomEvent<(cell: TableCell) => void>;
    /** 初始化阶段触发 */
    init: CustomEvent<EmptyFunction>;
    /** 初始化完成触发 */
    initialized: CustomEvent<EmptyFunction>;
    /** 首次渲染完成 */
    mounted: CustomEvent<EmptyFunction>;
    /** 渲染中, 本阶段内部渲染基本上已完成, 可以再次附加自定义的渲染 */
    rendering: CustomEvent<EmptyFunction>;
    /** 每次渲染完成后触发 */
    rendered: CustomEvent<EmptyFunction>;
    /** 重载表格时触发 */
    reload: CustomEvent<(opt: TableReloadOptions) => void>;
    /** 卸载前触发 */
    beforeDestroy: CustomEvent<EmptyFunction>;
}
export interface TableEvent {
    /** 所有可用事件 */
    event: TableEvents;
}
//# sourceMappingURL=event.d.ts.map