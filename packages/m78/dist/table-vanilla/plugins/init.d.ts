import { TablePlugin } from "../plugin.js";
import { TableKey } from "../types/base-type.js";
import { TableConfig } from "../types/config.js";
/**
 * 进行配置整理/预计算等
 * */
export declare class _TableInitPlugin extends TablePlugin {
    init(): void;
    conf(config?: Partial<TableConfig>): TableConfig | undefined;
    fullHandle(): void;
    /** 为当前ctx.data/columns创建索引, 并合并持久化配置 对应TableReloadLevel.index */
    indexHandle(): void;
    /** 基础预处理, 减少后续渲染的计算工作, , 对应TableReloadLevel.base */
    baseHandle(): void;
    /** 拷贝data/columns/persistenceConfig等需要本地化的配置 */
    initHandle(): void;
    /** 将data/columns进行预处理后拷贝到其对应的ctx.xxx, 并对固定项进行处理 */
    fmtDataAndColumns(): void;
    mergePersistenceConfig(): void;
    mergePersistenceConfigAfter(): void;
    /** 处理dataKeyIndexMap/columnKeyIndexMap, 合并persistenceConfig.columns/rows/cells 至ctx上同名配置 */
    updateIndexAndMerge(): void;
    /**
     * row/cells持久化处理通用逻辑, 根据情况备份/还原/合并持久化配置到当前配置
     *
     * @param map 对应的配置, 比如ctx.rows/ctx.cells
     * @param backupMap 对应的备份配置, 比如ctx.backupRows/ctx.backupCells
     * @param backupFirstMap 对应的备份配置, 如backupFirstColumns
     * @param key 对应map中的key
     * @param conf 需要合并的持久化配置
     * @param index 对应map中的index, 如果map是一个数组
     * */
    persistenceConfigHandle(map: any, backupMap: any, backupFirstMap: any, key: TableKey, conf: any, index?: number): void;
    persistenceConfigCleanHandle(obj: any, backup: any, current: any, first: any): void;
    /** 预处理尺寸/固定项相关信息 */
    preHandleSize(): void;
    /** 末尾单元格相关信息计算 */
    preCalcLastInfo(): void;
    /** 预处理合并项, 需要提前计算出合并后的单元格尺寸和被合并项的信息 */
    preHandleMerge(): void;
    /**
     * 合并信息计算, 固定项和普通项交叉时, 不同类的后方项会被忽略
     * - 返回的mergeList为被合并行/列的索引
     * */
    getMergeRange(start: TableKey, mergeNum: number, isRow: boolean): {
        size: number;
        mergeList: TableKey[];
    };
    /** 基础容器创建&初始化 */
    createDomElement(): void;
    /** 合并消息文本 */
    mergeTexts(): void;
}
//# sourceMappingURL=init.d.ts.map