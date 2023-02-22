import _defaultsDeep from "lodash/defaultsDeep.js";
import { defaultConfig } from "./default-config.js";
import { getCheckApi } from "./check.js";
import { simplifiedChinese, english } from "./language-pack.js";
function createVerify(config) {
    var conf = _defaultsDeep({
        languagePack: config === null || config === void 0 ? void 0 : config.extendLanguagePack
    }, config, defaultConfig);
    var verify = {
        languagePack: conf.languagePack
    };
    return Object.assign(verify, getCheckApi(conf, verify));
}
export { simplifiedChinese, english, createVerify };
export * from "./types.js";
export * from "./error.js";
export * from "./validator/required.js";
export * from "./validator/object.js";
export * from "./validator/bool.js";
export * from "./validator/string.js";
export * from "./validator/array.js";
export * from "./validator/fn.js";
export * from "./validator/number.js";
export * from "./validator/symbol.js";
export * from "./validator/regexp.js";
export * from "./validator/regexp-string.js";
export * from "./validator/pattern.js";
export * from "./validator/specific.js";
export * from "./validator/equality.js";
export * from "./validator/within.js";
export * from "./validator/without.js";
export * from "./validator/url.js";
export * from "./validator/email.js";
export * from "./validator/date.js";
export * from "./validator/match.js";
export * from "./validator/list.js";
