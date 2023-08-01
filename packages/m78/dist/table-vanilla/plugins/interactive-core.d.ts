import { TablePlugin } from "../plugin.js";
import { TableCell } from "../types/items.js";
import { KeyboardMultipleHelper } from "@m78/utils";
interface TableInteractiveItem {
    cell: TableCell;
    node: HTMLElement;
    mounted?: boolean;
    unmounted?: boolean;
    done(isSubmit?: boolean): void;
}
/**
 * 表格的编辑/交互功能, 通常用于实现单元格编辑, 提供的功能仅能满足简单的编辑需求, 通常需要基于使用的框架如react加上本插件提供的核心功能
 * 来进行扩展实现, 添加诸如验证, 编辑反馈和更丰富的表单控件支持
 *
 * interactive 并非一定表示单元格编辑, 也可以纯展示的其他交互组件
 * */
export declare class _TableInteractiveCorePlugin extends TablePlugin {
    items: TableInteractiveItem[];
    wrapNode: HTMLElement;
    doubleClickLastCell: TableCell | null;
    doubleClickTimer: any;
    lastDownTime: number;
    multipleHelper: KeyboardMultipleHelper;
    mounted(): void;
    beforeDestroy(): void;
    rendering(): void;
    private getKeydownOptions;
    private initDom;
    private onAttachClick;
    private onClick;
    isInteractive(cell: TableCell): boolean;
    /** 使一个单元格进入交互状态, 可通过defaultValue设置交互后的起始默认值, 默认为当前单元格value */
    private interactive;
    updateNode(): void;
    private closeAll;
    private createAttachNode;
    private onTabDown;
    private onEnterDown;
    private onEscDown;
    private isJustDoneExecuted;
}
/** 表示交互完成后要执行的操作 */
export declare type TableInteractiveDone = (isSubmit: boolean) => void | Promise<void>;
/** 交互组件渲染参数 */
export interface TableInteractiveRenderArg {
    /** 触发交互的单元格 */
    cell: TableCell;
    /** 用于挂载交互组件 */
    node: HTMLElement;
    /** 表单控件应显示的默认值, 通常与单元格当前值一致, 若用户在选中单元格上直接键入, 则会替换为用户键入的第一个常规字符([A-Za-z0-9_]) */
    value: any;
    /** isSubmit = true | 手动结束交互, 比如在用户按下enter时
     * isSubmit为true时表示应对单元格值进行更新, done应该在事件回调等位置调用, 不能在render流程中调用
     * */
    done: (isSubmit?: boolean) => void;
}
export interface TableInteractiveCoreConfig {
    /** 控制单元格是否可交互 */
    interactive?: boolean | ((cell: TableCell) => boolean);
    /**
     * 渲染交互组件, 交互组件挂载于attachNode上, 并且应在交互完成或关闭时调用done来结束交互状态
     *
     * 返回的TableInteractiveDone会在交互结束清理attachNode前执行, 可用于实际更新值或者执行清理操作, 如果清理需要异步完成, 或者
     * 包含关闭动画, 可以返回一个Promise, 内部将等待Promise完成后再清理attachNode
     *
     * arg.done和TableInteractiveDone.done都接收isSubmit参数, 用于识别是更新值还是取消
     * */
    interactiveRender?: (arg: TableInteractiveRenderArg) => TableInteractiveDone;
}
export {};
//# sourceMappingURL=interactive-core.d.ts.map