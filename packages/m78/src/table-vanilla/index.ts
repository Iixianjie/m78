import "./index.scss";

export { _createTable as createTable } from "./table.js";

export * from "./types/base-type.js";
export * from "./types/config.js";
export type { TablePluginContext } from "./types/context.js";
export * from "./types/instance.js";
export * from "./types/items.js";

export { TablePlugin } from "./plugin.js";

export { tableDefaultTexts } from "./common.js";

export { levelFullConfigKeys } from "./plugins/config.js";

export type { TableConfigInstance } from "./plugins/config.js";
export type { TableDisable } from "./plugins/disable.js";
export type { TableDragMove } from "./plugins/drag-move.js";
export type { TableDragSortConfig } from "./plugins/drag-sort.js";
export type { TableEmptyConfig } from "./plugins/empty.js";
export type { TableEvents, TableEvent } from "./plugins/event.js";

export { TableFeedback } from "./plugins/feedback.js";
export type { TableFeedbackEvent } from "./plugins/feedback.js";

export type { TableGetter, TableAttachData } from "./plugins/getter.js";
export type { TableHighlight } from "./plugins/highlight.js";
export type { TableHistory } from "./plugins/history.js";
export type {
  TableInteractiveConfig,
  TableInteractiveDone,
  TableInteractiveRenderArg,
} from "./plugins/interactive.js";
export type { TableIs, TableIsConfig } from "./plugins/is.js";
export type { TableHistoryConfig } from "./plugins/history.js";
export type { TableKeyboardInteraction } from "./plugins/keyboard-interaction.js";

export { TableReloadLevel } from "./plugins/life.js";

export type {
  TableReloadLevelKeys,
  TableReloadLevelUnion,
  TableReloadOptions,
  TableLife,
} from "./plugins/life.js";

export {
  TableMutationType,
  TableMutationDataType,
} from "./plugins/mutation.js";
export type {
  TableMutationEvent,
  TableMutationConfigEvent,
  TableMutationDataEvent,
  TableMutationValueEvent,
} from "./plugins/mutation.js";

export type { TableRender } from "./plugins/render.js";

export type { TableSelectConfig, TableSelect } from "./plugins/select.js";

export type { TableSetter } from "./plugins/setter.js";

export type { TableSoftRemove } from "./plugins/soft-remove.js";

export type { TableSortColumn } from "./plugins/sort-column.js";

export type {
  TableDataStatus,
  TableDataLists,
  TableForm,
  TableFormConfig,
  TableFormMarkConfig,
} from "./plugins/form/types.js";
