(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{"K+nK":function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},yQyW:function(n,e,t){"use strict";t.r(e);var o=t("0Owb"),r=t("q1tI"),l=t.n(r),a=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(a),s=t("5Yjd"),c=t.n(s),m=l.a.memo((function(){var n=t("K+nK"),e=n(t("q1tI")),o=n(t("wP1l")),r=function(){return e["default"].createElement(o["default"],null)};return e["default"].createElement(r)}));e["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"actionsheet-\u64cd\u4f5c\u9762\u677f"},l.a.createElement("a",{"aria-hidden":"true",href:"#actionsheet-\u64cd\u4f5c\u9762\u677f"},l.a.createElement("span",{className:"icon icon-link"})),"ActionSheet \u64cd\u4f5c\u9762\u677f"),l.a.createElement("p",null,"\u5feb\u6377\u7684\u63d0\u793a\u7528\u6237\u8fdb\u884c\u4e00\u7ec4\u64cd\u4f5c"),l.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b"),l.a.createElement("p",null,"\u57fa\u4e8e useFormState  \u5b9e\u73b0\uff0c\u53ef\u4ee5\u5f53\u505a\u5e38\u89c4\u7684\u8868\u5355\u7ec4\u4ef6\u4f7f\u7528")),l.a.createElement(c.a,Object(o["a"])({source:{tsx:"import React, { useState } from 'react';\r\nimport { ActionSheet } from 'm78/action-sheet';\r\nimport 'm78/action-sheet/style';\r\n\r\nimport { Button } from 'm78/button';\r\nimport 'm78/button/style';\r\n\r\nconst options = [\r\n  {\r\n    label: '\u64cd\u4f5c1',\r\n    value: 1,\r\n  },\r\n  {\r\n    label: '\u9ad8\u4eae\u64cd\u4f5c',\r\n    value: 2,\r\n    desc: '\u5bf9\u6b64\u64cd\u4f5c\u7684\u8be6\u7ec6\u63cf\u8ff0',\r\n    highlight: true,\r\n  },\r\n  {\r\n    label: '\u7981\u7528',\r\n    value: 3,\r\n    disabled: true,\r\n  },\r\n  {\r\n    label: '\u64cd\u4f5c4',\r\n    value: 4,\r\n  },\r\n];\r\n\r\nconst Demo = () => {\r\n  const [show, setShow] = useState(false);\r\n\r\n  return (\r\n    <div>\r\n      <ActionSheet<number>\r\n        defaultValue={2}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n        triggerNode={<Button>\u5e38\u89c4\u4f7f\u7528</Button>}\r\n      />\r\n\r\n      <ActionSheet<number>\r\n        confirm={false}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n        triggerNode={<Button>\u76f4\u63a5\u9009\u4e2d\u6a21\u5f0f</Button>}\r\n      />\r\n\r\n      <Button onClick={() => setShow(true)}>\u624b\u52a8\u63a7\u5236show</Button>\r\n      <ActionSheet<number>\r\n        show={show}\r\n        onShowChange={nShow => setShow(nShow)}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n      />\r\n\r\n      <Button\r\n        onClick={() => {\r\n          ActionSheet.api({\r\n            defaultValue: 2,\r\n            options,\r\n            onClose(v, item) {\r\n              console.log(v, item);\r\n\r\n              console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n              item && console.log('\u9009\u9879\u4e3a:', item);\r\n            },\r\n          });\r\n        }}\r\n      >\r\n        \u901a\u8fc7api\u8c03\u7528\r\n      </Button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Demo;\r\n",jsx:"import React, { useState } from 'react';\r\nimport { ActionSheet } from 'm78/action-sheet';\r\nimport 'm78/action-sheet/style';\r\nimport { Button } from 'm78/button';\r\nimport 'm78/button/style';\r\n\r\nconst options = [\r\n  {\r\n    label: '\u64cd\u4f5c1',\r\n    value: 1,\r\n  },\r\n  {\r\n    label: '\u9ad8\u4eae\u64cd\u4f5c',\r\n    value: 2,\r\n    desc: '\u5bf9\u6b64\u64cd\u4f5c\u7684\u8be6\u7ec6\u63cf\u8ff0',\r\n    highlight: true,\r\n  },\r\n  {\r\n    label: '\u7981\u7528',\r\n    value: 3,\r\n    disabled: true,\r\n  },\r\n  {\r\n    label: '\u64cd\u4f5c4',\r\n    value: 4,\r\n  },\r\n];\r\n\r\nconst Demo = () => {\r\n  const [show, setShow] = useState(false);\r\n  return (\r\n    <div>\r\n      <ActionSheet\r\n        defaultValue={2}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n        triggerNode={<Button>\u5e38\u89c4\u4f7f\u7528</Button>}\r\n      />\r\n\r\n      <ActionSheet\r\n        confirm={false}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n        triggerNode={<Button>\u76f4\u63a5\u9009\u4e2d\u6a21\u5f0f</Button>}\r\n      />\r\n\r\n      <Button onClick={() => setShow(true)}>\u624b\u52a8\u63a7\u5236show</Button>\r\n      <ActionSheet\r\n        show={show}\r\n        onShowChange={nShow => setShow(nShow)}\r\n        onClose={(v, item) => {\r\n          console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n          item && console.log('\u9009\u9879\u4e3a:', item);\r\n        }}\r\n        options={options}\r\n      />\r\n\r\n      <Button\r\n        onClick={() => {\r\n          ActionSheet.api({\r\n            defaultValue: 2,\r\n            options,\r\n\r\n            onClose(v, item) {\r\n              console.log(v, item);\r\n              console.log(v ? `\u9009\u4e2d\u503c: ${v}` : '\u5173\u95ed\u4e86ActionSheet');\r\n              item && console.log('\u9009\u9879\u4e3a:', item);\r\n            },\r\n          });\r\n        }}\r\n      >\r\n        \u901a\u8fc7api\u8c03\u7528\r\n      </Button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Demo;\r\n"}},{path:"/_demos/demo-1",dependencies:{},files:{}}),l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement("a",{"aria-hidden":"true",href:"#api"},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"Item"))),l.a.createElement(i.a,{code:"interface ActionSheetItem {\n  /** \u9009\u9879\u540d */\n  label: React.ReactNode;\n  /** \u9009\u9879\u503c, \u9ed8\u8ba4\u4e0elabel\u76f8\u540c */\n  value: ValType;\n  /* \u8be6\u60c5 */\n  desc?: string;\n  /* \u9ad8\u4eae\u8be5\u9879 */\n  highlight?: boolean;\n  /* \u7981\u7528\u8be5\u9879 */\n  disabled?: boolean;\n}\n",lang:"tsx"}),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("code",null,"props"))),l.a.createElement(i.a,{code:"interface ActionSheetProps<Val> extends FormLikeWithExtra<Val, ActionSheetItem> {\n  /** \u64cd\u4f5c\u9879\u914d\u7f6e */\n  options: ActionSheetItem[];\n  /** '\u8bf7\u9009\u62e9' | \u6807\u9898 */\n  title?: string;\n  /** '\u786e\u8ba4' | \u662f\u5426\u5f00\u542f\u9009\u62e9\u6a21\u5f0f\uff0c\u9009\u62e9\u540e\u9700\u8981\u786e\u8ba4\u624d\u4f1a\u8fdb\u884c\u5173\u95ed */\n  confirm?: boolean | string;\n  /** \u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae/\u786e\u8ba4\u6309\u94ae, \u6216\u89e6\u53d1\u4e86clickAway\u65f6\uff0c\u5982\u679c\u662f\u901a\u8fc7\u786e\u8ba4\u6309\u94ae\u70b9\u51fb\u7684\u5207\u9009\u4e2d\u4e86\u503c\uff0citem\u4e3a\u9009\u4e2d\u7684\u503c */\n  onClose?(val: Val, item?: ActionSheetItem): void;\n  /** \u53ef\u9009, \u4f20\u5165\u4e00\u4e2a\u5360\u4f4d\u8282\u70b9\u6765\u4f5c\u4e3a\u7684\u63a7\u5236\u5f00\u5173, \u5728\u975e\u53d7\u63a7\u65f6\u4f1a\u76f4\u63a5\u4ee3\u7406show\u7684\u503c\uff0c\u53d7\u63a7\u65f6\u901a\u8fc7onChange\u56de\u4f20\u6700\u65b0\u72b6\u6001 */\n  triggerNode?: React.ReactElement;\n  /** \u9ed8\u8ba4\u663e\u793a\u72b6\u6001\uff0c\u4e0eshow\u540c\u65f6\u4f7f\u7528\u65f6\u65e0\u6548 */\n  defaultShow?: boolean;\n  /** \u624b\u52a8\u63a7\u5236modal\u7684\u663e\u793a/\u9690\u85cf, \u4e0eonClose\u642d\u914d\u4f5c\u4e3a\u53d7\u63a7\u6a21\u5f0f\u4f7f\u7528 */\n  show?: boolean;\n  /** \u663e\u793a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1 */\n  onShowChange?: (nShow: boolean) => void;\n  /** ======== \u7ee7\u627f\u5c5e\u6027 ======== */\n  /** \u4ee5\u53d7\u63a7\u6a21\u5f0f\u8bbe\u7f6e\u503c */\n  // value?: Val;\n  /** value\u53d1\u751f\u6539\u53d8 */\n  // onChange?: (value: Val, item: ActionSheetItem) => void;\n  /** \u4ee5\u975e\u53d7\u63a7\u6a21\u5f0f\u8bbe\u7f6e\u503c */\n  // defaultValue?: Val;\n}\n",lang:"tsx"})))}}}]);