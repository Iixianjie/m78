import { FullSize } from 'm78/common';
import React, { useState, useEffect } from 'react';
import { useSelf } from '@lxjx/hooks';

/** 与style库同步，用于js代码的常用屏幕尺寸 */
export const SM = 576;
export const MD = 768;
export const LG = 992;
export const XL = 1200;

/** 与style库同步，用于js代码的z-index预设值 */
export const Z_INDEX = 1000; // 基准显示层级, 所有弹层层级应不低于/等于1000, 因为1000是m78约定的内容和弹层中间的层级, 用于放置mask等
export const Z_INDEX_DRAWER = 1400;
export const Z_INDEX_MODAL = 1800;
export const Z_INDEX_MESSAGE = 2200;

/** size */
export const SIZE_MAP = {
  default: 32,
  [FullSize.small]: 24,
  [FullSize.large]: 40,
  [FullSize.big]: 60,
};

/** 禁止冒泡的便捷扩展对象 */
export const stopPropagation = {
  onClick(e: React.SyntheticEvent) {
    e.stopPropagation();
  },
};

export const MASK_NAMESPACE = 'M78-MASK';

/** throw error */
export function throwError(errorMsg: string, namespace?: string): never {
  throw new Error(`M78💥 -> ${namespace ? `${namespace} -> ` : ''} ${errorMsg}`);
}

export function sendWarning(msg: string, namespace?: string) {
  console.log(`M78💢 -> ${namespace ? `${namespace} -> ` : ''} ${msg}`);
}

export function useDelayToggle(
  toggle: boolean,
  options?: {
    /** 300 | 开启延迟，默认为delay的值, 设置为0禁用 */
    leading?: number;
    /** 600 | 离场延迟，默认为delay的值, 设置为0禁用 */
    trailing?: number;
  },
): boolean {
  const { leading = 300, trailing = 600 } = options || {};

  const isDisabled = !trailing && !leading;

  // 初始值在禁用或未开启前导延迟时为toggle本身，否则为false
  const [innerState, setInnerState] = useState(!leading ? toggle : false);

  const self = useSelf({
    toggleTimer: null as any,
  });

  useEffect(() => {
    if (isDisabled) return;

    if ((toggle && !leading) || (!toggle && !trailing)) {
      toggle !== innerState && setInnerState(toggle);
      return;
    }

    const d = toggle ? leading : trailing;

    self.toggleTimer = setTimeout(() => {
      setInnerState(toggle);
    }, d);

    return () => {
      self.toggleTimer && clearTimeout(self.toggleTimer);
    };
  }, [toggle]);

  return isDisabled ? toggle : innerState;
}
