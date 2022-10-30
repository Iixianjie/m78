import { isObject } from "@m78/utils";
import { Meta, Validator } from "../types";

export const objectValidatorKey = "verifyObject";

/**
 * 必须是严格的对象类型 [Object objcet], 如果是[Object regexp]等特殊内置对象则不会通过检测
 * */
export const object = () => {
  const objectValidator: Validator = ({ value, config }: Meta) => {
    if (!isObject(value)) return config.languagePack.object;
  };

  objectValidator.key = objectValidatorKey;

  return objectValidator;
};
