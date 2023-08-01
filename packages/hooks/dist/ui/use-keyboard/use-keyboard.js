import { useEffect, useRef } from "react";
import { createKeyboardHelper } from "@m78/utils";
export { KeyboardHelperTriggerType, KeyboardHelperModifier } from "@m78/utils";
/** subscribe keyboard event */ export function useKeyboard(option) {
    var helper = useRef(null);
    if (helper.current) {
        helper.current.update(option);
    }
    useEffect(function() {
        helper.current = createKeyboardHelper(option);
        return function() {
            var ref;
            (ref = helper.current) === null || ref === void 0 ? void 0 : ref.destroy();
        };
    }, []);
}
