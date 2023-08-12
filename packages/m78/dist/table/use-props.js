import { usePropsChange } from "@m78/hooks";
import { _tableOmitChangeChecker, _tableOmitConfig } from "./common.js";
import { useEffect } from "react";
import { omit } from "@m78/utils";
import { level2ConfigKeys } from "../table-vanilla/index.js";
/** 处理props变更, 尽可能减少不必要的更新, 特别是引用类型的props */ export function _usePropsEffect(props, cb) {
    var omitProps = omit(props, _tableOmitConfig);
    var changedProps = usePropsChange(omitProps, {
        omit: _tableOmitChangeChecker
    });
    useEffect(function() {
        if (!changedProps) return;
        var needFullReload = Object.keys(changedProps).some(function(key) {
            return level2ConfigKeys.includes(key);
        });
        cb(changedProps, needFullReload);
    }, [
        changedProps
    ]);
    return changedProps;
}