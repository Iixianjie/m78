(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115,114],{"/6n9":function(e,n,t){"use strict";t.d(n,"a",(function(){return q}));t("iCBh"),t("XD+O");var r=t("0Owb"),i=t("k1fw"),a=t("q1tI"),s=t.n(a),l=t("zdPv"),o=t("wEEd"),c=t("uVtn"),u=t("K3qG"),m=t("kr9X"),d=t("iuhU"),p=t("y4v0"),f=t("i8i4"),h=t.n(f),v={duration:1600,type:"card"};function g(e){var n,t=e.controller,l=Object(o["useTransition"])(t.current,{key:null===(n=t.current)||void 0===n?void 0:n.id,from:{y:"-100%",x:"-50%",opacity:0},enter:{y:"0%",opacity:1},leave:{y:"-100%",opacity:0}}),u=Object(a["useMemo"])(()=>"undefined"!==typeof window&&"ontouchstart"in window,[]),f=Object(p["b"])({onHover(e){var n=e.hovering;n?t.manual():t.auto()},onDrag(e){var n=e.down,r=e.first,i=e.last;r&&n&&!t.isManual&&t.manual(),i&&t.isManual&&t.auto()}},{drag:{filterTaps:!0,enabled:u}});return l((e,n)=>{if(!n)return null;var a=n.actions&&n.actions.length,l=n.prevable&&t.hasPrev(n.id);return s.a.createElement(o["animated"].div,Object(r["a"])({className:Object(d["a"])("m78-tips","__".concat(n.type),n.fitWidth&&"__fitWidth",n.global&&"__global",(a||l||n.nextable||n.actionsNode)&&"__hasAction"),style:Object(i["a"])({width:n.width},e)},f()),s.a.createElement("span",{className:"m78-tips_content"},n.message),s.a.createElement("span",{className:"m78-tips_action"},s.a.createElement(m["Switch"],null,s.a.createElement(m["If"],{when:n.actionsNode},n.actionsNode),s.a.createElement(m["If"],{when:a},()=>{var e;return null===(e=n.actions)||void 0===e?void 0:e.map((e,n)=>s.a.createElement(c["a"],{key:n,text:!0,size:"small",color:e.color,onClick:e.handler},e.text))})),s.a.createElement(m["If"],{when:l},s.a.createElement(c["a"],{text:!0,size:"small",color:"red",onClick:t.prev},"\u4e0a\u4e00\u6761")),s.a.createElement(m["If"],{when:n.nextable},()=>{var e=t.hasNext(n.id);return s.a.createElement(c["a"],{text:!0,size:"small",color:e?"primary":"red",onClick:t.next},e?"\u4e0b\u4e00\u6761":"\u5173\u95ed")})))})}var E=e=>{var n=e||{},t=n.list,r=n.defaultItemOption;return Object(l["useQueue"])({list:t,defaultItemOption:Object(i["a"])(Object(i["a"])({},v),r)})};function b(e){var n=e.item,t=g.useTipsController({defaultItemOption:Object(i["a"])(Object(i["a"])({},v),{},{fitWidth:!0,nextable:!0,global:!0})});return Object(a["useEffect"])(()=>{n&&t.push(n)},[n]),s.a.createElement(g,{controller:t})}g.useTipsController=E,g.push=e=>{h.a.render(s.a.createElement(b,{item:e}),Object(u["k"])("global_tips"))},g.tip=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.duration;g.push({message:e,duration:n})};var q=g},"2pnd":function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),i=t("55Ip"),a=t("q1tI"),s=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(l),c=t("5Yjd"),u=t.n(c),m=s.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),r=e(t("nrC/")),i=function(){return n["default"].createElement(r["default"],null)};return n["default"].createElement(i)}));n["default"]=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"tips-\u8f7b\u63d0\u793a"},s.a.createElement("a",{"aria-hidden":"true",href:"#tips-\u8f7b\u63d0\u793a"},s.a.createElement("span",{className:"icon icon-link"})),"Tips \u8f7b\u63d0\u793a"),s.a.createElement("p",null,"\u7528\u4e8e\u53d1\u51fa\u8f7b\u91cf\u7684\u63d0\u793a\u6d88\u606f"),s.a.createElement("p",null,"\u4e0e",s.a.createElement(i["a"],{to:"/docs/feedback/message"},"Message"),"\u7684\u533a\u522b\u662f:"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u53ef\u7528\u4e8e\u5c40\u90e8\u63d0\u793a\uff0cMessage \u504f\u5411\u4e8e\u5168\u5c40\u63d0\u793a, \u6b64\u7279\u6027\u53ef\u7528\u4e8e\u4e3a\u67d0\u4e9b\u7ec4\u4ef6\u521b\u5efa\u5185\u90e8\u63d0\u793a(\u5982 Scroller \u7ec4\u4ef6)"),s.a.createElement("li",null,"\u540c\u6837\u7ef4\u62a4\u4e00\u4e2a\u961f\u5217\uff0c\u4f46\u662f\u4e0d\u4f1a\u540c\u65f6\u51fa\u73b0\u591a\u6761\uff0c\u800c\u662f\u6839\u636e\u6301\u7eed\u65f6\u95f4\u9010\u6761\u663e\u793a"),s.a.createElement("li",null,"\u53ef\u63d0\u4f9b\u4e00\u7ec4\u5feb\u6377\u64cd\u4f5c")),s.a.createElement("h2",{id:"\u793a\u4f8b"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},s.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),s.a.createElement(u.a,Object(r["a"])({source:{tsx:"import React from 'react';\r\nimport { Tips } from 'm78/tips';\r\nimport { Divider } from 'm78/layout';\r\nimport { Button } from 'm78/button';\r\n\r\nconst TipsDemo = () => {\r\n  const queue = Tips.useTipsController();\r\n\r\n  return (\r\n    <div>\r\n      <div\r\n        style={{\r\n          position: 'relative',\r\n          width: 300,\r\n          height: 400,\r\n          border: '1px solid #ccc',\r\n          overflow: 'hidden',\r\n          padding: 12,\r\n        }}\r\n      >\r\n        <Tips controller={queue} />\r\n\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus\r\n          officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia\r\n          necessitatibus odio possimus. Autem eveniet sequi suscipit?\r\n        </p>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus\r\n          officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia\r\n          necessitatibus odio possimus. Autem eveniet sequi suscipit? Lorem ipsum dolor sit amet,\r\n          consectetur adipisicing elit. Dolorem eum ex incidunt minus officia officiis perspiciatis\r\n          qui sed. Amet cumque impedit, incidunt mollitia necessitatibus odio possimus. Autem\r\n          eveniet sequi suscipit?\r\n        </p>\r\n      </div>\r\n\r\n      <Divider margin={20} />\r\n\r\n      <h3>\u63a7\u5236</h3>\r\n\r\n      <div style={{ lineHeight: 2.6 }}>\r\n        <Button onClick={queue.prev} disabled={!queue.hasPrev()} size=\"small\">\r\n          \u4e0a\u4e00\u6761\r\n        </Button>\r\n        <Button onClick={queue.next} disabled={!queue.hasNext()} size=\"small\">\r\n          \u4e0b\u4e00\u6761\r\n        </Button>\r\n        <Button onClick={queue.clear} size=\"small\">\r\n          \u6e05\u7a7a\u6d88\u606f\r\n        </Button>\r\n        <Button onClick={queue.manual} size=\"small\">\r\n          \u6682\u505c\u8ba1\u65f6\r\n        </Button>\r\n        <Button onClick={queue.auto} disabled={!queue.isManual} size=\"small\">\r\n          \u5f00\u542f\u8ba1\u65f6\r\n        </Button>\r\n      </div>\r\n\r\n      <Divider margin={20} />\r\n\r\n      <h3>\u53d1\u9001\u6d88\u606f</h3>\r\n\r\n      <div style={{ lineHeight: 2.6 }}>\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u666e\u901a\u6d88\u606f\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              type: 'bar',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u901a\u77e5\u680f\u6837\u5f0f\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              nextable: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5173\u95ed\u6309\u94ae/\u4e0b\u4e00\u9875\u6309\u94ae\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              prevable: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u4e0a\u4e00\u9875\u6309\u94ae\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              fitWidth: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u4e0d\u56fa\u5b9a\u5bbd\u5ea6\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u786e\u5b9a\u8981\u8d2d\u4e70\u5417?',\r\n              fitWidth: true,\r\n              actions: [\r\n                {\r\n                  text: '\u7b97\u4e86',\r\n                  color: 'red',\r\n                  handler() {\r\n                    console.log('\u7b97\u4e86');\r\n                  },\r\n                },\r\n                {\r\n                  text: '\u597d\u7684',\r\n                  color: 'blue',\r\n                  handler() {\r\n                    console.log('\u597d\u7684');\r\n                  },\r\n                },\r\n              ],\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u81ea\u5b9a\u4e49\u64cd\u4f5c\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              actionsNode: <span className=\"color-error\">\u64cd\u4f5c\u533a\u5185\u5bb9</span>,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u81ea\u5b9a\u4e49\u64cd\u4f5c\u533a\u5185\u5bb9\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            Tips.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5168\u5c40\u63d0\u793a\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            Tips.tip('\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f');\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5168\u5c40\u63d0\u793a(\u5feb\u6377\u65b9\u5f0f)\r\n        </Button>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default TipsDemo;\r\n",jsx:"import React from 'react';\r\nimport { Tips } from 'm78/tips';\r\nimport { Divider } from 'm78/layout';\r\nimport { Button } from 'm78/button';\r\n\r\nconst TipsDemo = () => {\r\n  const queue = Tips.useTipsController();\r\n  return (\r\n    <div>\r\n      <div\r\n        style={{\r\n          position: 'relative',\r\n          width: 300,\r\n          height: 400,\r\n          border: '1px solid #ccc',\r\n          overflow: 'hidden',\r\n          padding: 12,\r\n        }}\r\n      >\r\n        <Tips controller={queue} />\r\n\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus\r\n          officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia\r\n          necessitatibus odio possimus. Autem eveniet sequi suscipit?\r\n        </p>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus\r\n          officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia\r\n          necessitatibus odio possimus. Autem eveniet sequi suscipit? Lorem ipsum dolor sit amet,\r\n          consectetur adipisicing elit. Dolorem eum ex incidunt minus officia officiis perspiciatis\r\n          qui sed. Amet cumque impedit, incidunt mollitia necessitatibus odio possimus. Autem\r\n          eveniet sequi suscipit?\r\n        </p>\r\n      </div>\r\n\r\n      <Divider margin={20} />\r\n\r\n      <h3>\u63a7\u5236</h3>\r\n\r\n      <div\r\n        style={{\r\n          lineHeight: 2.6,\r\n        }}\r\n      >\r\n        <Button onClick={queue.prev} disabled={!queue.hasPrev()} size=\"small\">\r\n          \u4e0a\u4e00\u6761\r\n        </Button>\r\n        <Button onClick={queue.next} disabled={!queue.hasNext()} size=\"small\">\r\n          \u4e0b\u4e00\u6761\r\n        </Button>\r\n        <Button onClick={queue.clear} size=\"small\">\r\n          \u6e05\u7a7a\u6d88\u606f\r\n        </Button>\r\n        <Button onClick={queue.manual} size=\"small\">\r\n          \u6682\u505c\u8ba1\u65f6\r\n        </Button>\r\n        <Button onClick={queue.auto} disabled={!queue.isManual} size=\"small\">\r\n          \u5f00\u542f\u8ba1\u65f6\r\n        </Button>\r\n      </div>\r\n\r\n      <Divider margin={20} />\r\n\r\n      <h3>\u53d1\u9001\u6d88\u606f</h3>\r\n\r\n      <div\r\n        style={{\r\n          lineHeight: 2.6,\r\n        }}\r\n      >\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u666e\u901a\u6d88\u606f\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              type: 'bar',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u901a\u77e5\u680f\u6837\u5f0f\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              nextable: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5173\u95ed\u6309\u94ae/\u4e0b\u4e00\u9875\u6309\u94ae\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              prevable: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u4e0a\u4e00\u9875\u6309\u94ae\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              fitWidth: true,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u4e0d\u56fa\u5b9a\u5bbd\u5ea6\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u786e\u5b9a\u8981\u8d2d\u4e70\u5417?',\r\n              fitWidth: true,\r\n              actions: [\r\n                {\r\n                  text: '\u7b97\u4e86',\r\n                  color: 'red',\r\n\r\n                  handler() {\r\n                    console.log('\u7b97\u4e86');\r\n                  },\r\n                },\r\n                {\r\n                  text: '\u597d\u7684',\r\n                  color: 'blue',\r\n\r\n                  handler() {\r\n                    console.log('\u597d\u7684');\r\n                  },\r\n                },\r\n              ],\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u81ea\u5b9a\u4e49\u64cd\u4f5c\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            queue.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f',\r\n              actionsNode: <span className=\"color-error\">\u64cd\u4f5c\u533a\u5185\u5bb9</span>,\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u81ea\u5b9a\u4e49\u64cd\u4f5c\u533a\u5185\u5bb9\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            Tips.push({\r\n              message: '\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f',\r\n            });\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5168\u5c40\u63d0\u793a\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            Tips.tip('\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f');\r\n          }}\r\n          size=\"small\"\r\n        >\r\n          \u5168\u5c40\u63d0\u793a(\u5feb\u6377\u65b9\u5f0f)\r\n        </Button>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default TipsDemo;\r\n"}},{path:"/_demos/demo-10",dependencies:{},files:{}}),s.a.createElement(m,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"api"},s.a.createElement("a",{"aria-hidden":"true",href:"#api"},s.a.createElement("span",{className:"icon icon-link"})),"API"),s.a.createElement("p",null,s.a.createElement("strong",null,s.a.createElement("code",null,"<Tips />"))),s.a.createElement(o.a,{code:"interface TipsProps {\n  controller: ReturnType<typeof Tips.useTipsController>;\n}\n",lang:"tsx"}),s.a.createElement("p",null,s.a.createElement("strong",null,s.a.createElement("code",null,"Tips.useTipsController"))),s.a.createElement(o.a,{code:"const tipsController = Tips.useTipsController(config);\n",lang:"tsx"}),s.a.createElement("p",null,s.a.createElement("strong",null,s.a.createElement("code",null,"config"))),s.a.createElement(o.a,{code:"interface UseQueueConfig<ItemOption> {\n  /** \u521d\u59cb\u5217\u8868 */\n  list?: TipsItem[];\n  /** \u9ed8\u8ba4\u9879\u914d\u7f6e */\n  defaultItemOption?: Partial<TipsItem>;\n}\n",lang:"tsx"}),s.a.createElement("p",null,s.a.createElement("strong",null,s.a.createElement("code",null,"tipsController"))),s.a.createElement(o.a,{code:"interface TipsController {\n  /**\n   * \u63a8\u5165\u4e00\u4e2a\u65b0\u9879\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u9009\u4e2d\u9879\uff0c\u81ea\u52a8\u6267\u884cnext()\n   * @param opt - \u8981\u6dfb\u52a0\u7684\u65b0\u9879\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u9879\u914d\u7f6e\u6216\u914d\u7f6e\u6570\u7ec4\n   * */\n  push(item | item[]),\n  /** \u663e\u793a\u4e0a\u4e00\u9879 */\n  prev(),\n  /**\n   * \u5173\u95ed\u5f53\u524d\u9879, \u7136\u540e\u9009\u4e2d\u5217\u8868\u4e0b\u4e00\u9879\n   * \u5982\u679c\u914d\u7f6e\u4e86duration, \u8bbe\u7f6e\u5012\u8ba1\u65f6\uff0c\u8ba1\u65f6\u7ed3\u675f\u540e\u62c9\u53d6\u4e0b\u4e00\u9879\u8fdb\u884c\u663e\u793a, \u76f4\u5230\u961f\u5217\u4e3a\u7a7a\n   * */\n  next(),\n  /** \u662f\u5426\u6709\u4e0b\u4e00\u9879, \u4e0d\u4f20id\u67e5\u5f53\u524d\u9879 */\n  hasNext(id),\n  /** \u662f\u5426\u6709\u4e0a\u4e00\u9879, \u4e0d\u4f20id\u67e5\u5f53\u524d\u9879 */\n  hasPrev(id),\n  /** \u6e05\u7a7a\u961f\u5217 */\n  clear,\n  /** \u6839\u636eid\u67e5\u8be2\u7d22\u5f15 */\n  findIndexById(id),\n  /** \u662f\u5426\u5904\u4e8e\u6682\u505c\u72b6\u6001 */\n  isPause: state.isPause,\n  /** \u5f53\u524d\u9879 */\n  current: state.current,\n  /** \u6682\u505c\u65f6\uff0c\u91cd\u65b0\u542f\u7528 */\n  start(),\n  /** \u6682\u505c\uff0c\u505c\u6b62\u6240\u6709\u8ba1\u65f6\uff0c\u4f9d\u7136\u53ef\u4ee5\u901a\u8fc7push/next/prev\u7b49\u5207\u6362\u9879\uff0c\u5982\u679c\u8981\u7981\u6b62\u5207\u6362\uff0c\u4f7f\u7528isPause\u5e2e\u52a9\u5224\u65ad */\n  pause(),\n  /** \u5f53\u524d\u6240\u6709\u9879(\u4e0d\u8981\u624b\u52a8\u64cd\u4f5c) */\n  list,\n  /** \u5f53\u524d\u9879\u6240\u5728\u7d22\u5f15 */\n  index,\n}\n",lang:"tsx"}),s.a.createElement("p",null,s.a.createElement("strong",null,s.a.createElement("code",null,"\u6d88\u606f\u914d\u7f6e\u9879"))),s.a.createElement(o.a,{code:"interface UseQueueItem {\n  /** \u5982\u679c\u4f20\u5165\uff0c\u4f1a\u5728\u6307\u5b9a\u5ef6\u8fdfms\u540e\u81ea\u52a8\u8df3\u8f6c\u5230\u4e0b\u4e00\u6761 */\n  duration?: number;\n}\n\ninterface TipsItem extends UseQueueItem {\n  /** \u6d88\u606f\u5185\u5bb9 */\n  message?: React.ReactNode;\n  /** \u663e\u793a\u5173\u95ed\u6309\u94ae, \u5982\u679c\u6709\u4e0b\u4e00\u6761\u6d88\u606f\uff0c\u663e\u793a\u6587\u672c\u4e3a`\u4e0b\u4e00\u6761` */\n  nextable?: boolean;\n  /** \u662f\u5426\u53ef\u5207\u6362\u4e0a\u4e00\u6761 */\n  prevable?: boolean;\n  /** 'card' | \u663e\u793a\u7c7b\u578b, \u9ed8\u8ba4\u663e\u793a\u4e3a\u72b6\u6001\u680f\u6837\u5f0f */\n  type?: 'card' | 'bar';\n  /** \u6700\u5c0f\u5bbd\u5ea6\u4e14\u6587\u672c\u4e0d\u6362\u884c\uff0c\u9ed8\u8ba4\u662f\u6839\u636e\u5bb9\u5668\u5bbd\u5ea6\u62c9\u4f38\u3002\u5efa\u8bae\u5728`card`\u7c7b\u578b\u4e0b\u4f7f\u7528 */\n  fitWidth?: boolean;\n  /** \u5bbd\u5ea6 */\n  width?: string | number;\n  /** \u4e00\u7ec4\u64cd\u4f5c */\n  actions?: {\n    /** \u6587\u672c */\n    text: React.ReactNode;\n    /** \u989c\u8272 */\n    color?: ButtonProps['color'];\n    /** \u70b9\u51fb\u5904\u7406\u51fd\u6570 */\n    handler?: AnyFunction;\n  }[];\n  /** \u64cd\u4f5c\u533a\u57df\u5185\u5bb9, \u8986\u76d6actions */\n  actionsNode?: React.ReactNode;\n  /** \u662f\u5426\u7528\u4e8e\u5168\u5c40\u663e\u793a(\u6302\u8f7d\u5230\u6839\u8282\u70b9)\uff0c\u5b9a\u4f4d\u65b9\u5f0f\u4f1a\u7a0d\u6709\u4e0d\u540c */\n  global?: boolean;\n}\n",lang:"tsx"})))}},"6WJu":function(e,n,t){"use strict";t("iCBh"),t("QyJt")},C5yf:function(e,n,t){"use strict";t("6WJu");var r=t("OnHz");t.d(n,"Grid",(function(){return r["a"]}));var i=t("cx4E");t.d(n,"AspectRatio",(function(){return i["a"]}));var a=t("tP0F");t.d(n,"Center",(function(){return a["a"]}));var s=t("LlIc");t.d(n,"Divider",(function(){return s["a"]}));var l=t("dEM7");t.d(n,"Spacer",(function(){return l["a"]}));var o=t("GmgH");t.d(n,"Tile",(function(){return o["a"]}));var c=t("Seep");t.d(n,"Column",(function(){return c["a"]})),t.d(n,"Flex",(function(){return c["b"]})),t.d(n,"Row",(function(){return c["c"]}));t("D7SN")},D7SN:function(e,n){},GmgH:function(e,n,t){"use strict";var r=t("0Owb"),i=t("PpiC"),a=t("q1tI"),s=t.n(a),l=t("C5yf"),o=t("iuhU"),c=e=>{var n=e.className,t=e.title,a=e.desc,c=e.leading,u=e.trailing,m=e.crossAlign,d=e.innerRef,p=Object(i["a"])(e,["className","title","desc","leading","trailing","crossAlign","innerRef"]);return s.a.createElement(l["Row"],Object(r["a"])({},p,{innerRef:d,className:Object(o["a"])("m78-tile",n),crossAlign:m}),c&&s.a.createElement("div",{className:"m78-tile_leading"},c),s.a.createElement("div",{className:"m78-tile_main"},t&&s.a.createElement("div",{className:"m78-tile_title"},t),a&&s.a.createElement("div",{className:"m78-tile_desc"},a)),u&&s.a.createElement("div",{className:"m78-tile_trailing"},u))};n["a"]=c},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},LlIc:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("iuhU"),s=e=>{var n=e.vertical,t=e.width,r=e.height,s=e.color,l=e.margin,o=void 0===l?12:l,c=n?"0 ".concat(o,"px"):"".concat(o,"px 0");return i.a.createElement("div",{className:Object(a["a"])("m78-divider",n&&"__vertical"),style:{width:t,height:r,backgroundColor:s,margin:c}})};n["a"]=s},OnHz:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("iuhU"),s=t("K3qG"),l=t("C5yf"),o={count:3,children:[],aspectRatio:1,border:!0},c=e=>{var n=e.count,t=e.children,r=e.crossSpacing,o=e.mainSpacing,c=e.spacing,u=e.size,m=e.aspectRatio,d=e.complete,p=void 0===d||d,f=e.border,h=e.borderColor,v=e.className,g=e.style,E=e.contClassName,b=e.contStyle,q=Object(s["r"])(t)?[...t]:[t],C=[...q],B=r||c,x=o||c,k=C.length%n,y=100/n;if(p&&0!==k&&n-k>0)for(var N=0;N<n-k;N++)q.push(i.a.createElement("div",null));return i.a.createElement("div",{className:Object(a["a"])("m78-grid",v),style:g},q.map((e,t)=>{var r=t+1,s=r%n===0,o=(r-1)%n===0,c=t<n,d=C.length-r<(k||n),p=x&&!s,v=x?(n-1)*x/n:0;return i.a.createElement(u?"div":l["AspectRatio"],{ratio:m,key:t,style:{color:h,border:f?void 0:"none",width:x?"calc(".concat(y,"% - ").concat(v,"px)"):"".concat(y,"%"),height:u||void 0,marginBottom:!d&&B?B:void 0,marginRight:p?x:void 0},className:Object(a["a"])("m78-grid_item",{__topBorder:f&&(c||B),__leftBorder:f&&(o||x)})},i.a.createElement("div",{className:Object(a["a"])("m78-grid_cont",E),style:b},e))}))};c.defaultProps=o,n["a"]=c},QyJt:function(e,n,t){},Seep:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t("k1fw"),i=t("0Owb"),a=t("PpiC"),s=t("q1tI"),l=t.n(s),o=t("iuhU");function c(e,n){var t={};return e&&(t["m78-main-".concat(e)]=!0),n&&(t["m78-cross-".concat(n)]=!0),t}var u=e=>{var n=e.children,t=e.style,r=e.className,s=e.mainAlign,u=e.crossAlign,m=e.innerRef,d=Object(a["a"])(e,["children","style","className","mainAlign","crossAlign","innerRef"]);return l.a.createElement("div",Object(i["a"])({},d,{className:Object(o["a"])("m78-column",r,c(s,u)),style:t,ref:m}),n)},m=e=>{var n=e.children,t=e.style,r=e.className,s=e.mainAlign,u=e.crossAlign,m=void 0===u?"start":u,d=e.innerRef,p=Object(a["a"])(e,["children","style","className","mainAlign","crossAlign","innerRef"]);return l.a.createElement("div",Object(i["a"])({},p,{ref:d,className:Object(o["a"])("m78-row",r,c(s,m)),style:t}),n)},d=e=>{var n=e.flex,t=void 0===n?1:n,s=e.children,c=e.order,u=e.style,m=e.className,d=e.align,p=Object(a["a"])(e,["flex","children","order","style","className","align"]);return l.a.createElement("div",Object(i["a"])({},p,{className:Object(o["a"])(m,d&&"m78-self-".concat(d)),style:Object(r["a"])({flex:t,order:c},u)}),s)}},"XD+O":function(e,n,t){},cx4E:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("iuhU"),s=e=>{var n=e.ratio,t=void 0===n?1:n,r=e.children,s=e.className,l=e.style;return i.a.createElement("div",{className:Object(a["a"])("m78-aspect-ratio",s),style:l},i.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*t,"%")}}),r)};n["a"]=s},dEM7:function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("iuhU"),s=t("K3qG"),l=e=>{var n,t,r=e.width,o=e.height,c=e.children;if(r&&!o&&(n=r),o&&!r&&(t=o),t||n||(t=16),c&&Object(s["r"])(c)){var u=c.reduce((e,n,t)=>(e.push(n),t!==c.length-1&&e.push(i.a.createElement(l,{key:t+Math.random(),width:r,height:o})),e),[]);return u}return i.a.createElement("div",{className:Object(a["a"])("m78-spacer",!!n&&"__inline"),style:{width:n,height:t}})};n["a"]=l},"nrC/":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),a=t("/6n9"),s=t("C5yf"),l=t("uVtn"),o=()=>{var e=a["a"].useTipsController();return i.a.createElement("div",null,i.a.createElement("div",{style:{position:"relative",width:300,height:400,border:"1px solid #ccc",overflow:"hidden",padding:12}},i.a.createElement(a["a"],{controller:e}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia necessitatibus odio possimus. Autem eveniet sequi suscipit?"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia necessitatibus odio possimus. Autem eveniet sequi suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum ex incidunt minus officia officiis perspiciatis qui sed. Amet cumque impedit, incidunt mollitia necessitatibus odio possimus. Autem eveniet sequi suscipit?")),i.a.createElement(s["Divider"],{margin:20}),i.a.createElement("h3",null,"\u63a7\u5236"),i.a.createElement("div",{style:{lineHeight:2.6}},i.a.createElement(l["a"],{onClick:e.prev,disabled:!e.hasPrev(),size:"small"},"\u4e0a\u4e00\u6761"),i.a.createElement(l["a"],{onClick:e.next,disabled:!e.hasNext(),size:"small"},"\u4e0b\u4e00\u6761"),i.a.createElement(l["a"],{onClick:e.clear,size:"small"},"\u6e05\u7a7a\u6d88\u606f"),i.a.createElement(l["a"],{onClick:e.manual,size:"small"},"\u6682\u505c\u8ba1\u65f6"),i.a.createElement(l["a"],{onClick:e.auto,disabled:!e.isManual,size:"small"},"\u5f00\u542f\u8ba1\u65f6")),i.a.createElement(s["Divider"],{margin:20}),i.a.createElement("h3",null,"\u53d1\u9001\u6d88\u606f"),i.a.createElement("div",{style:{lineHeight:2.6}},i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f"})},size:"small"},"\u666e\u901a\u6d88\u606f"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f",type:"bar"})},size:"small"},"\u901a\u77e5\u680f\u6837\u5f0f"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f",nextable:!0})},size:"small"},"\u5173\u95ed\u6309\u94ae/\u4e0b\u4e00\u9875\u6309\u94ae"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f",prevable:!0})},size:"small"},"\u4e0a\u4e00\u9875\u6309\u94ae"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f",fitWidth:!0})},size:"small"},"\u4e0d\u56fa\u5b9a\u5bbd\u5ea6"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u786e\u5b9a\u8981\u8d2d\u4e70\u5417?",fitWidth:!0,actions:[{text:"\u7b97\u4e86",color:"red",handler(){console.log("\u7b97\u4e86")}},{text:"\u597d\u7684",color:"blue",handler(){console.log("\u597d\u7684")}}]})},size:"small"},"\u81ea\u5b9a\u4e49\u64cd\u4f5c"),i.a.createElement(l["a"],{onClick:()=>{e.push({message:"\u8fd9\u662f\u4e00\u6761\u6d88\u606f",actionsNode:i.a.createElement("span",{className:"color-error"},"\u64cd\u4f5c\u533a\u5185\u5bb9")})},size:"small"},"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u533a\u5185\u5bb9"),i.a.createElement(l["a"],{onClick:()=>{a["a"].push({message:"\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f"})},size:"small"},"\u5168\u5c40\u63d0\u793a"),i.a.createElement(l["a"],{onClick:()=>{a["a"].tip("\u8fd9\u662f\u4e00\u6761\u5168\u5c40\u6d88\u606f")},size:"small"},"\u5168\u5c40\u63d0\u793a(\u5feb\u6377\u65b9\u5f0f)")))};n["default"]=o},tP0F:function(e,n,t){"use strict";var r=t("k1fw"),i=t("q1tI"),a=t.n(i),s=t("iuhU"),l=e=>{var n=e.children,t=e.attach,i=e.className,l=e.style;return a.a.createElement("div",{className:Object(s["a"])("m78-center",i,l),style:Object(r["a"])({position:t?"absolute":void 0},l)},n)};n["a"]=l}}]);