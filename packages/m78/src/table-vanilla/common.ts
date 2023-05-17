import clsx from "clsx";
import { BoundSize, isNumber } from "@m78/utils";
import { TableKey, TablePosition } from "./types.js";

/** 用于在config.el上存储当前实例 */
export const _privateInstanceKey = "__M78TableInstance";

/** 用于在domEl上挂载是否为其是否为内部创建的信息 */
export const _privateScrollerDomKey = "__M78PrivateScrollerDom";

/** 内部会向行数据中注入的一些私有标记 */
export enum RowPrivateProperty {
  fakeData = "__M78TableFakeData",
}

/** 若存在, 从节点的父节点将其删除 */
export function _removeNode(node?: Node) {
  if (!node || !node.parentNode) return;
  node.parentNode.removeChild(node);
}

/** 为节点添加className */
export function _addCls(el: HTMLElement, cls: string) {
  if (!el.className.includes(cls)) {
    el.className = clsx(el.className, cls);
  }
}

/** 解析rowIndex##columnIndex格式的字符串为[rowIndex, columnIndex], 数组长度为2表示解析正常 */
export function _getCellKeyByStr(s?: string) {
  if (!s) return [];
  return s.split("##");
}

/** 根据行列索引获取其字符串形式的ind */
export function _getCellKey(rowKey: TableKey, columnKey: TableKey) {
  return `${rowKey}##${columnKey}`;
}

/** 若是数字, 返回`${size}px`, 是字符串直接返回 */
export function _getSizeString(size: number | string) {
  return isNumber(size) ? `${size}px` : size;
}

/** 根据两个点获取Bound */
export function _getBoundByTwoPoint(
  p1: TablePosition,
  p2: TablePosition
): BoundSize {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  // p1/p2可能存在的点为四个, 左上/右上/左下/右下
  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const maxX = Math.max(x1, x2);
  const maxY = Math.max(y1, y2);

  return {
    left: minX,
    top: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

/** 根据鼠标/触摸/指针事件获取offsetSize, 也就是点击位置相距目标左上角的偏移 */
export function _getOffset(
  e: MouseEvent | TouchEvent | PointerEvent,
  target: HTMLElement
): [number, number] {
  const touch = (e as TouchEvent).changedTouches;
  let clientX = 0;
  let clientY = 0;

  if (touch) {
    clientX = touch[0].clientX;
    clientY = touch[0].clientY;
  } else {
    clientX = (e as MouseEvent).clientX;
    clientY = (e as MouseEvent).clientY;
  }

  const { left, top } = target.getBoundingClientRect();
  return [clientX - left, clientY - top];
}
