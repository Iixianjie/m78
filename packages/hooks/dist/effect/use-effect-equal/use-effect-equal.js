import React, { useEffect, useMemo, useRef } from "react";
import { usePrev } from "../../index.js";
import _isEqualWith from "lodash/isEqualWith.js";
/**
 *  支持对deps进行深度对比的`useEffect`
 *  💡保持deps值结构相对简单能够减少对比深度，从而提高性能
 *  @param effect - 同useEffect参数
 *  @param deps - 依赖数组，用法与useEffect一致，但是会对dep项执行深对比
 *  @param customizer - 可以通过此函数自定义对比方式, 如果相等返回 true，否则返回 false, 返回undefined时使用默认对比方式
 * */ export function useEffectEqual(effect, deps, customizer) {
    var prev = usePrev(deps);
    var dep = useRef(0);
    var isEqual = useMemo(function() {
        return _isEqualWith(deps, prev, customizer);
    }, [
        deps
    ]);
    if (!isEqual) {
        dep.current++;
    }
    useEffect(effect, [
        dep.current
    ]);
}
