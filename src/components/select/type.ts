import React from 'react';
import { FormLikeWithExtra } from '@lxjx/hooks';
import { PopperDirectionEnum, PopperDirectionKeys, PopperTriggerType } from 'm78/popper';
import { ComponentBaseProps, FullSizeKeys, StatusKeys } from 'm78/types';

export interface SelectOptionItem {
  /** 类目名, 如果不传入，将使用value作为label */
  label?: string;
  /** 值 */
  value?: any;
  /** 特殊的选项类型 */
  type?: 'title' | 'divider';
  /** 前置内容 */
  prefix?: React.ReactNode;
  /** 后置内容 */
  suffix?: React.ReactNode;

  [key: string]: any;
}

export interface SelectProps<ValType, Options = any>
  extends ComponentBaseProps,
    FormLikeWithExtra<ValType, Options> {
  /** [] | 选项数组 */
  options?: SelectOptionItem[];
  /** 输入框默认显示的文本 */
  placeholder?: string;
  /** 'label' | 配置如何从options项中获取选项名 */
  labelKey?: string;
  /** 'value' | 配置如何从options项中获取值 */
  valueKey?: string;
  /** 手动控制显示 */
  show?: boolean;
  /** 是否默认显示 */
  defaultShow?: boolean;
  /** show触发改变, 类似表单控件onChange用法 */
  onShowChange?(show: boolean): void;
  /** 通常不会传入，传入时，select会作为下拉菜单使用，并且部分针对输入框的选项会失效 */
  children?: React.ReactNode;

  /* ================= 多选 ================ */
  /** false | 开启多选 */
  multiple?: boolean;
  /** true | 当multiple启用时，是否使用tag作为选中项显示 */
  showTag?: boolean;
  /** false | 从选项中隐藏已选中项 */
  hideSelected?: boolean;
  /** 8 | 最大显示的 多选元素/标签 数量 */
  multipleMaxShowLength?: number;
  /**
   * 用于在value中包含options中不存在的值时进行获取
   * eg. 通过value传入了[1, 5, 7], 但是options中不存在value为1, 5的选项，就会通过此方法传入[1, 5]来帮助进行查询并合并选项
   * options中不存在的值不会再已选值中以字符或标签形式显示，直到这些选项被添加
   * 每个不存在的值只会被回传一次
   * */
  notExistValueTrigger?(val: ValType): void;
  /** 定制tag样式 */
  customTag?: SelectCustomTag;
  /** 最大选中条数 */
  maxLength?: number;

  /* ================= 工具栏 ================ */
  /** false | 是否显示toolbar, 单选时无效 */
  toolbar?: boolean;
  /** 定制toolbar的样式, 传入时toolbar默认开启, 不受单选限制。内置toolbar(ReactElement)会作为参数传入 */
  customToolBar?: SelectCustomToolbar;

  /* ================= loading ================ */
  /** 列表/输入框加载状态 */
  loading?: boolean;
  /** 选项列表加载状态 */
  listLoading?: boolean;
  /** 输入框加载状态 */
  inputLoading?: boolean;
  /** 输入框阻断式的加载状态 */
  blockLoading?: boolean;

  /* ================= 搜索 ================ */
  /** 是否开启搜索 */
  search?: boolean;
  /** 300 | 搜索防抖延迟 */
  debounceTime?: number;
  /** 关键词变更时触发，用于从服务端查询数据并同步到options中 */
  onSearch?(key: string): void;
  /**
   * 当用户触发新增标签时触发(包含keyword时按下Enter/点击添加按钮)
   * check用于组件为非受控使用时在合并新tag到options后传入选项值对其进行选中，
   * 如果作为受控组件使用，直接更改value绑定的值即可
   * */
  onAddTag?(key: string, check: (val: any) => void): void;

  /* ================= 样式/定制 ================ */
  /** 为列表设置style */
  listStyle?: React.CSSProperties;
  /** 为列表设置className */
  listClassName?: string;
  /** 无边框 */
  notBorder?: boolean;
  /** 只有下边框 */
  underline?: boolean;
  /** 列表宽度，默认与输入框等宽(非dropdown模式下) */
  listWidth?: number | string;
  /** 320 | 列表最大高度, 超出时出现滚动条 */
  listMaxHeight?: number | string;
  /** 32 | 虚拟滚动需要确定的高度(px)，如果列表项通过其他配置修改过，通过此项设置修改后的高度 */
  listItemHeight?: number;
  /** bottomStart | 列表展开方向 */
  direction?: PopperDirectionKeys | PopperDirectionEnum;
  /** 'click' | 气泡的触发方式 */
  trigger?: PopperTriggerType | PopperTriggerType[];
  /** 是否显示气泡箭头 */
  arrow?: boolean;
  /** true | 是否显示选中的勾选图标, 传入children时不显示 */
  checkIcon?: boolean;

  /* ================= 态 ================ */
  /** 设置为禁用状态 */
  disabled?: boolean;
  /** 禁用指定选项 */
  disabledOption?: any[];
  /** 尺寸 */
  size?: FullSizeKeys;
  /** 状态，不同状态会以不同的功能色展示 */
  status?: StatusKeys;
}

/** 约定内部选项Item的入参 */
export interface RenderItemData {
  listItemHeight: number | string;
  isChecked(val: any): boolean;
  isDisabled(val: any): boolean;
  onCheckItem(val?: any): void;
  options: SelectOptionItem[];
  labelKey: string;
  valueKey: string;
  checkIcon?: boolean;
}

export interface SelectCustomTagMeta {
  /** 该标签对应的选项 */
  option: SelectOptionItem;
  /** 标签label */
  label: string;
  /** 删除该值 */
  del(): void;
  /** 该标签在数组中的索引 */
  index: number;
  /** 透传给标签的className，包含size/disabled等用于定制的定制状态类 */
  className?: string;
  /** 选项的value，可作为key使用 */
  key: any;
}

export interface SelectCustomTag {
  (meta: SelectCustomTagMeta, props: SelectProps<any>): React.ReactElement;
}

/** 定制toolbar, node为内置toolbar */
export interface SelectCustomToolbar {
  (node?: React.ReactElement): React.ReactNode;
}
