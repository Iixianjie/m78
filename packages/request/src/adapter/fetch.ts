import { BaseRequestOptions } from "../interfaces";
import { Response } from "../response";
import { ResponseError } from "../response-error";
import qs from "query-string";

export interface FetchOptions<Ext = {}>
  extends Omit<RequestInit, "body" | "headers">,
    BaseRequestOptions<Ext> {}

/** fetch适配 */
export function fetchAdapter(opt: FetchOptions) {
  return fetch(`${opt.url}${qs.stringify(opt.query)}`, opt)
    .then(async (res) => {
      const response = new Response();

      response.message = res.statusText;
      response.code = res.status;

      const h: any = {};

      for (const [k, v] of res.headers.entries()) {
        h[k] = v;
      }

      response.headers = h;

      const type = h["content-type"] || h["Content-Type"];

      if (type.includes("application/json")) {
        response.data = await res.json();
      }

      if (type.includes("text/")) {
        response.data = await res.text();
      }

      response.original = res;
      return response;
    })
    .catch((err) => {
      return Promise.reject(
        new ResponseError(`${err.name}: ${err.message}` || "")
      );
    });
}