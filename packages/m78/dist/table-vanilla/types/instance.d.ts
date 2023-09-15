import { TableSelect } from "../plugins/select.js";
import { TableEvent } from "../plugins/event.js";
import { TableHistory } from "../plugins/history.js";
import { TableGetter } from "../plugins/getter.js";
import { TableLife } from "../plugins/life.js";
import { TableMutation } from "../plugins/mutation.js";
import { TableHighlight } from "../plugins/highlight.js";
import { TableRender } from "../plugins/render.js";
import { TableIs } from "../plugins/is.js";
import { TableSetter } from "../plugins/setter.js";
import { TableConfigInstance } from "../plugins/config.js";
import { TableForm } from "../plugins/form.js";
import { TableKeyboardInteraction } from "../plugins/keyboard-interaction.js";
/** table实例 */
export interface TableInstance extends TableSelect, TableLife, TableEvent, TableHistory, TableMutation, TableHighlight, TableRender, TableGetter, TableSetter, TableIs, TableConfigInstance, TableForm, TableKeyboardInteraction {
}
//# sourceMappingURL=instance.d.ts.map