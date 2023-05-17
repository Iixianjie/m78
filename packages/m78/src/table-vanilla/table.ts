import { TablePlugin } from "./plugin.js";
import { TableConfig, TableInstance } from "./types.js";
import { _TableInitPlugin } from "./plugins/init.js";
import { _TableViewportPlugin } from "./plugins/viewport.js";

import "./index.scss";
import { _TableZoomPlugin } from "./plugins/zoom.js";
import { getNamePathValue, setNamePathValue } from "@m78/utils";
import { _privateInstanceKey } from "./common.js";
import { _TableLifePlugin } from "./plugins/life.js";
import { _TableGetterPlugin } from "./plugins/getter.js";
import { _TableEventPlugin } from "./plugins/event.js";
import { _TableHeaderPlugin } from "./plugins/header.js";

export function createTable(config: TableConfig): TableInstance {
  const defaultConfig: Partial<TableConfig> = {
    data: [],
    columns: [],
    rows: {},
    cells: {},
    plugins: [],
    rowHeight: 32,
    columnWidth: 100,
    autoSize: true,
  };

  // 根据dom上挂载的私有实例信息判断是否需要创建实例, 防止热重载等场景下反复创建
  const ins: TableInstance | undefined = getNamePathValue(
    config.el,
    _privateInstanceKey
  );

  // 已存在实例时, 直接返回
  if (ins) {
    ins.render();
    return ins as TableInstance;
  }

  const conf = { ...defaultConfig, ...config };

  const context: any = {};

  // 不完整的实例
  const instance = {} as any as TableInstance;

  // 插件创建配置
  const pluginConfig = {
    table: instance,
    plugins: [] as TablePlugin[],
    context,
    config: conf,
  };

  // 内置插件
  // 注意: 在实现上, 鉴于完整功能的复杂度, 内部插件之间并不是完全解耦的, 插件之间会互相访问状态/方法
  // 比如初始化阶段, 不同插件可能都需要对配置和数据进行遍历, 预计算等, 这些操作应该在单次完成, 避免重复计算.
  const plugins = [
    new _TableInitPlugin(pluginConfig),
    new _TableGetterPlugin(pluginConfig),
    new _TableEventPlugin(pluginConfig),
    new _TableHeaderPlugin(pluginConfig),
    new _TableViewportPlugin(pluginConfig),
    new _TableZoomPlugin(pluginConfig),
  ];

  // 用户插件
  pluginConfig.plugins.push(
    ...plugins,
    // 因为涉及销毁操作, 需要在所有插件之后执行, 防止插件的前后依赖导致异常
    new _TableLifePlugin(pluginConfig)
  );

  // 用户插件
  const customPlugins = conf.plugins!.map((Plugin) => {
    return new Plugin(pluginConfig);
  });

  pluginConfig.plugins.push(...customPlugins);

  /* # # # # # # # init # # # # # # # */
  pluginConfig.plugins.forEach((plugin) => {
    plugin.init?.();
  });

  console.log(context);

  /* # # # # # # # initialized # # # # # # # */
  pluginConfig.plugins.forEach((plugin) => {
    plugin.initialized?.();
  });

  instance.render();

  /* # # # # # # # mount # # # # # # # */
  pluginConfig.plugins.forEach((plugin) => {
    plugin.mount?.();
  });

  return instance;
}
