(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47,8,45,46],{"+EgR":function(e,n,t){"use strict";t.r(n);var a=t("wx14"),o=t("q1tI"),i=t.n(o),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r),l=t("5Yjd"),s=t.n(l),u=i.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("xCdP")),o=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(o)})),f=i.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("5DGV")),o=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(o)}));n["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"message-\u6d88\u606f\u63d0\u9192"},i.a.createElement("a",{"aria-hidden":"true",href:"#message-\u6d88\u606f\u63d0\u9192"},i.a.createElement("span",{className:"icon icon-link"})),"Message \u6d88\u606f\u63d0\u9192"),i.a.createElement("p",null,"\u7528\u4e8e\u5bf9\u7528\u6237\u64cd\u4f5c\u8fdb\u884c\u53cd\u9988"),i.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u793a\u4f8b"},i.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b"),i.a.createElement("p",null,"message \u7ec4\u4ef6\u57fa\u4e8e render-api \u5b9e\u73b0\uff0c\u5305\u542b\u8f7b\u63d0\u793a\u3001\u52a0\u8f7d\u4e2d\u3001\u6d88\u606f\u6846\u4e09\u79cd\u7528\u6cd5")),i.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React, { useEffect } from 'react';\nimport message from '@lxjx/fr/lib/message';\nimport Button from '@lxjx/fr/lib/button';\n\nconst type = ['success', 'error', 'warning', undefined];\n\nfunction messageTest() {\n  setTimeout(() => {\n    const [ref, id] = message.tips({\n      content: '\u63d0\u793a',\n      duration: Math.floor(Math.random() * 5000) + 500,\n      // @ts-ignore\n      type: type[Math.floor(Math.random() * 4)],\n    });\n\n    console.log(111, ref, id);\n  });\n}\n\nfunction loadingTest() {\n  const [ref, id] = message.loading();\n\n  setTimeout(() => {\n    ref.close(id);\n  }, 400);\n}\n\nfunction notifyTest() {\n  message.notify({\n    title: '\u6807\u9898\u6807\u9898',\n    desc:\n      '\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0',\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n  });\n}\n\nconst Demo = () => {\n  useEffect(() => {\n    // messageTest();\n  }, []);\n\n  return (\n    <div>\n      <Button onClick={messageTest}>message</Button>\n      <Button onClick={loadingTest}>loading</Button>\n      <Button onClick={notifyTest}>notify</Button>\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import React, { useEffect } from 'react';\nimport message from '@lxjx/fr/lib/message';\nimport Button from '@lxjx/fr/lib/button';\n\nconst type = ['success', 'error', 'warning', undefined];\n\nfunction messageTest() {\n  setTimeout(() => {\n    const [ref, id] = message.tips({\n      content: '\u63d0\u793a',\n      duration: Math.floor(Math.random() * 5000) + 500,\n      // @ts-ignore\n      type: type[Math.floor(Math.random() * 4)],\n    });\n    console.log(111, ref, id);\n  });\n}\n\nfunction loadingTest() {\n  const [ref, id] = message.loading();\n  setTimeout(() => {\n    ref.close(id);\n  }, 400);\n}\n\nfunction notifyTest() {\n  message.notify({\n    title: '\u6807\u9898\u6807\u9898',\n    desc:\n      '\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0',\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n  });\n}\n\nconst Demo = () => {\n  useEffect(() => {\n    // messageTest();\n  }, []);\n  return (\n    <div>\n      <Button onClick={messageTest}>message</Button>\n      <Button onClick={loadingTest}>loading</Button>\n      <Button onClick={notifyTest}>notify</Button>\n    </div>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/message-demo",dependencies:{},files:{}}),i.a.createElement(u,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("p",null,"\ud83d\udd3a \u5f53\u64cd\u4f5c\u5728\u5f88\u5feb\u7684\u65f6\u95f4\u5185\u5f97\u5230\u4e86\u54cd\u5e94\u65f6\uff0cloading \u4f1a\u4e00\u95ea\u800c\u8fc7\uff0c\u8fd9\u6837\u4f1a\u6bd4\u4e0d\u4f7f\u7528 loading \u4f53\u9a8c\u66f4\u5dee\uff0c\u6240\u4ee5\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cloading \u5305\u542b\u4e00\u4e2a 300ms \u7684\u663e\u793a/\u9690\u85cf\u5ef6\u8fdf"),i.a.createElement("h2",{id:"\u5e95\u5c42-api"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5e95\u5c42-api"},i.a.createElement("span",{className:"icon icon-link"})),"\u5e95\u5c42 api"),i.a.createElement("p",null,"\u4e0a\u4f8b\u4e2d\u7528\u5230\u4e86",i.a.createElement("code",null,"message.tips()")," ",i.a.createElement("code",null,"message.loading()")," ",i.a.createElement("code",null,"message.notify()"),"\u65b9\u6cd5\uff0c\u7c7b\u4f3c\u4e8e",i.a.createElement("code",null,"$.ajax()"),"\u548c",i.a.createElement("code",null,"$.get()")," ",i.a.createElement("code",null,"$.post()"),"\u7684\u5173\u7cfb\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7\u5e95\u5c42\u65b9\u6cd5",i.a.createElement("code",null,"message()"),"\u6765\u5b9e\u73b0")),i.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport message from '@lxjx/fr/lib/message';\nimport '@lxjx/fr/lib/message/style';\n\nimport Button from '@lxjx/fr/lib/button';\nimport '@lxjx/fr/lib/button/style';\n\nconst type = ['success', 'error', 'warning', undefined];\n\nfunction messageTest() {\n  message({\n    content: '\u63d0\u793a',\n    duration: Math.floor(Math.random() * 5000) + 500,\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n  });\n}\n\nfunction loadingTest() {\n  const [ref, id] = message({\n    loading: true,\n  });\n\n  setTimeout(() => {\n    ref.close(id);\n  }, 2000);\n}\n\nfunction notifyTest() {\n  const [res, id] = message({\n    title: '\u6807\u9898\u6807\u9898',\n    desc:\n      '\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0',\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n    duration: Infinity,\n    hasCancel: true,\n    content: (\n      <div className=\"fr-message_notification\">\n        <div className=\"fr-message_notification_title\">\u6211\u662f\u6807\u9898</div>\n        <div className=\"fr-message_notification_desc\">\n          \u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\n        </div>\n        <div className=\"fr-message_notification_foot\">\n          <Button>\u53d6\u6d88</Button>\n          <Button color=\"blue\" onClick={() => res.close(id)}>\n            \u786e\u8ba4\n          </Button>\n        </div>\n      </div>\n    ),\n    loading: false,\n  });\n}\n\nconst Demo = () => (\n  <div>\n    <Button onClick={messageTest}>message</Button>\n    <Button onClick={loadingTest}>loading</Button>\n    <Button onClick={notifyTest}>notify</Button>\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport message from '@lxjx/fr/lib/message';\nimport '@lxjx/fr/lib/message/style';\nimport Button from '@lxjx/fr/lib/button';\nimport '@lxjx/fr/lib/button/style';\n\nconst type = ['success', 'error', 'warning', undefined];\n\nfunction messageTest() {\n  message({\n    content: '\u63d0\u793a',\n    duration: Math.floor(Math.random() * 5000) + 500,\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n  });\n}\n\nfunction loadingTest() {\n  const [ref, id] = message({\n    loading: true,\n  });\n  setTimeout(() => {\n    ref.close(id);\n  }, 2000);\n}\n\nfunction notifyTest() {\n  const [res, id] = message({\n    title: '\u6807\u9898\u6807\u9898',\n    desc:\n      '\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0',\n    // @ts-ignore\n    type: type[Math.floor(Math.random() * 4)],\n    duration: Infinity,\n    hasCancel: true,\n    content: (\n      <div className=\"fr-message_notification\">\n        <div className=\"fr-message_notification_title\">\u6211\u662f\u6807\u9898</div>\n        <div className=\"fr-message_notification_desc\">\n          \u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\n        </div>\n        <div className=\"fr-message_notification_foot\">\n          <Button>\u53d6\u6d88</Button>\n          <Button color=\"blue\" onClick={() => res.close(id)}>\n            \u786e\u8ba4\n          </Button>\n        </div>\n      </div>\n    ),\n    loading: false,\n  });\n}\n\nconst Demo = () => (\n  <div>\n    <Button onClick={messageTest}>message</Button>\n    <Button onClick={loadingTest}>loading</Button>\n    <Button onClick={notifyTest}>notify</Button>\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/message-demo2",dependencies:{},files:{}}),i.a.createElement(f,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"api"},i.a.createElement("a",{"aria-hidden":"true",href:"#api"},i.a.createElement("span",{className:"icon icon-link"})),"API"),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("code",null,"message(option)"))),i.a.createElement(c.a,{code:"interface MessageOption extends ReactRenderApiExtraProps {\n  /** \u63d0\u793a\u6846\u7684\u5185\u5bb9 */\n  content?: React.ReactNode;\n  /** \u72b6\u6001\u7c7b\u578b */\n  type?: 'success' | 'error' | 'warning';\n  /** \u6301\u7eed\u65f6\u95f4\uff0c\u5982\u679c\u8981\u4e00\u76f4\u5b58\u5728\uff0c\u4f20Infinity */\n  duration?: number;\n  /** \u662f\u5426\u542f\u7528\u906e\u7f69\u5c42 */\n  mask?: boolean;\n  /** \u8bbe\u7f6e\u4e3a\u52a0\u8f7d\u72b6\u6001 */\n  loading?: boolean;\n  /** \u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae */\n  hasCancel?: boolean;\n  /** 300 | \u5ef6\u8fdf\u663e\u793a/\u9690\u85cfloading\u7684\u6beb\u79d2\u6570 */\n  loadingDelay?: number;\n}\n",lang:"tsx"}),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("code",null,"tips(option)"))),i.a.createElement(c.a,{code:"interface TipsOption extends ReactRenderApiExtraProps {\n  /** \u63d0\u793a\u6846\u7684\u5185\u5bb9 */\n  content?: React.ReactNode;\n  /** \u72b6\u6001\u7c7b\u578b */\n  type?: 'success' | 'error' | 'warning';\n  /** \u6301\u7eed\u65f6\u95f4\uff0c\u5982\u679c\u8981\u4e00\u76f4\u5b58\u5728\uff0c\u4f20Infinity */\n  duration?: number;\n  /** \u662f\u5426\u542f\u7528\u906e\u7f69\u5c42 */\n  mask?: boolean;\n}\n",lang:"tsx"}),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("code",null,"loading(option?)"))),i.a.createElement(c.a,{code:"interface LoadingOption extends ReactRenderApiExtraProps {\n  /** \u63d0\u793a\u6846\u7684\u5185\u5bb9 */\n  content?: React.ReactNode;\n  /** \u6301\u7eed\u65f6\u95f4\uff0c\u5982\u679c\u8981\u4e00\u76f4\u5b58\u5728\uff0c\u4f20Infinity */\n  duration?: number;\n  /** \u662f\u5426\u542f\u7528\u906e\u7f69\u5c42 */\n  mask?: boolean;\n  /** 300 | \u5ef6\u8fdf\u663e\u793aloading\u7684\u6beb\u79d2\u6570 */\n  loadingDelay?: number;\n}\n",lang:"tsx"}),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("code",null,"notify(option)"))),i.a.createElement(c.a,{code:"interface NotifyOption extends ReactRenderApiExtraProps {\n  /** \u63d0\u793a\u6846\u7684\u5185\u5bb9 */\n  content?: React.ReactNode;\n  /** \u72b6\u6001\u7c7b\u578b */\n  type?: 'success' | 'error' | 'warning';\n  /** \u6301\u7eed\u65f6\u95f4\uff0c\u5982\u679c\u8981\u4e00\u76f4\u5b58\u5728\uff0c\u4f20Infinity */\n  duration?: number;\n  /** \u662f\u5426\u542f\u7528\u906e\u7f69\u5c42 */\n  mask?: boolean;\n  /** \u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae */\n  hasCancel?: boolean;\n  /** \u6807\u9898 */\n  title?: React.ReactNode;\n  /** \u8be6\u7ec6\u5185\u5bb9 */\n  desc?: React.ReactNode;\n  /** \u5e95\u90e8\u663e\u793a\u7684\u5185\u5bb9 */\n  foot?: React.ReactNode;\n}\n",lang:"tsx"}),i.a.createElement("p",null,i.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),i.a.createElement(c.a,{code:"interface ReactRenderApiExtraProps {\n  /** \u76f8\u540capi\u4e0b\u6bcf\u6b21\u53ea\u4f1a\u5b58\u5728\u4e00\u4e2a\u5b9e\u4f8b */\n  singleton?: boolean;\n}\n",lang:"tsx"})))}},"+mIV":function(e,n,t){"use strict";t("iCBh"),t("5Xa9")},"1p7j":function(e,n,t){"use strict";t("GTID"),t("TcRa");var a=t("ZSGz");t.d(n,"default",(function(){return a["a"]}))},"5DGV":function(e,n,t){"use strict";t.r(n);var a=t("ODXe"),o=t("q1tI"),i=t.n(o),r=t("FnWK"),c=(t("+mIV"),t("uVtn")),l=(t("QjBK"),["success","error","warning",void 0]);function s(){Object(r["default"])({content:"\u63d0\u793a",duration:Math.floor(5e3*Math.random())+500,type:l[Math.floor(4*Math.random())]})}function u(){var e=Object(r["default"])({loading:!0}),n=Object(a["a"])(e,2),t=n[0],o=n[1];setTimeout(()=>{t.close(o)},2e3)}function f(){var e=Object(r["default"])({title:"\u6807\u9898\u6807\u9898",desc:"\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0",type:l[Math.floor(4*Math.random())],duration:1/0,hasCancel:!0,content:i.a.createElement("div",{className:"fr-message_notification"},i.a.createElement("div",{className:"fr-message_notification_title"},"\u6211\u662f\u6807\u9898"),i.a.createElement("div",{className:"fr-message_notification_desc"},"\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0"),i.a.createElement("div",{className:"fr-message_notification_foot"},i.a.createElement(c["default"],null,"\u53d6\u6d88"),i.a.createElement(c["default"],{color:"blue",onClick:()=>t.close(o)},"\u786e\u8ba4"))),loading:!1}),n=Object(a["a"])(e,2),t=n[0],o=n[1]}var m=()=>i.a.createElement("div",null,i.a.createElement(c["default"],{onClick:s},"message"),i.a.createElement(c["default"],{onClick:u},"loading"),i.a.createElement(c["default"],{onClick:f},"notify"));n["default"]=m},"5Xa9":function(e,n,t){},B68Z:function(e,n,t){"use strict";var a=t("wx14"),o=t("Ff2n"),i=t("VTBJ"),r=t("q1tI"),c=t.n(r),l=t("1p7j"),s=(t("iCBh"),t("K3qG")),u=t("TSYQ"),f=t.n(u),m={large:18,small:14,mini:12},d=/.?(Outlined|Filled|TwoTone|Icon)$/;function g(e){return Object(s["g"])(e)?e.map((n,t)=>{var a,o,r,l=null===(a=n)||void 0===a?void 0:a.type,s="";l&&(s=(null===(o=l.render)||void 0===o?void 0:o.displayName)||(null===(r=l.render)||void 0===r?void 0:r.name)||l.name);if(s&&c.a.isValidElement(n)&&d.test(s)){var u={marginLeft:8,marginRight:8};0===t&&(u={marginRight:8}),t===e.length-1&&(u={marginLeft:8});var f=Object(i["a"])(Object(i["a"])({},n.props.style),u);return c.a.cloneElement(n,{style:f,key:t})}return n}):e}var p=e=>{var n=e.size,t=e.color,i=e.circle,s=e.outline,u=e.block,d=e.link,p=e.icon,h=e.disabled,v=e.loading,b=e.md,E=e.win,y=e.children,j=e.className,O=e.href,w=Object(o["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),T=f()(j,"fr-btn","fr-effect",{["__".concat(t)]:t,["__".concat(n)]:n,__circle:i,__outline:s,__block:u,__link:d,__icon:p,__md:b,__win:E,__light:!!t&&!d&&!p,__disabled:h||v}),_=Object(r["useMemo"])(()=>g(y),[y]);return c.a.createElement("button",Object(a["a"])({type:"button"},w,{className:T,disabled:!!h||!!v}),d&&c.a.createElement("a",{className:"fr-btn__link",href:O}),c.a.createElement(l["default"],{style:{fontSize:n?m[n]:14,color:"#333"},show:!!v,full:!0,text:""}),c.a.createElement("span",null,_))};n["a"]=p},BO4J:function(e,n){},Ctpu:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l}));var a=t("q1tI"),o=t.n(a),i=t("K3qG"),r=()=>null,c=e=>{var n=e.when,t=e.children;n=!!n;var a=Object(i["j"])(t);return n&&(a?t():t)},l=e=>{var n=e.when,t=e.children;function a(){return o.a.cloneElement(t,{style:{display:"none"}})}return n?t:a()},s=e=>{var n=e.children,t=o.a.Children.toArray(n),a=t.reduce((e,n)=>{if(n.type!==c&&n.type!==l)return e;var t="when"in n.props,a=!!n.props.when;return t||e.notWhen||(e.notWhen=o.a.cloneElement(n,{when:!0})),a&&!e.showEl&&(e.showEl=n),e},{showEl:null,notWhen:null});return a.showEl||a.notWhen||null};n["d"]=r},DfK8:function(e,n){},FnWK:function(e,n,t){"use strict";t("+mIV");var a=t("cfDW"),o=(t("DfK8"),Object.assign(a["a"],{tips:a["d"],loading:a["b"],notify:a["c"]}));n["default"]=o},GTID:function(e,n,t){"use strict";t("iCBh"),t("pF+1")},Jiyh:function(e,n){},M5fq:function(e,n,t){"use strict";var a=t("Ff2n"),o=t("rePB"),i=t("KQm4"),r=t("ODXe"),c=t("q1tI"),l=t.n(c),s=t("i8i4"),u=t.n(s),f=t("K3qG");function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(o["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.wrap,o=n.maxInstance,s=void 0===o?1/0:o,m=n.namespace,g=l.a.createRef(),p=Object(c["forwardRef"])((function(n,t){var o=Object(c["useState"])([]),u=Object(r["a"])(o,2),f=u[0],g=u[1];function p(e){setTimeout((function(){g((function(n){return n.filter((function(n){var t=n.id!==e;return!t&&n.onRemove&&n.onRemove(),t}))}))}))}function h(){setTimeout((function(){return g((function(e){return e.forEach((function(e){e.onRemove&&e.onRemove()})),[]}))}))}function v(e){setTimeout((function(){return y(e)}))}function b(){setTimeout((function(){return y()}))}function E(e,n){g((function(t){return t.map((function(t){return t.id===e&&(t=d({},t,{},n)),t}))}))}function y(e){g((function(n){return n.map((function(n){var t=d({},n);return e?n.id===e&&t.show&&(t.show=!1,t.onClose&&t.onClose()):t.show&&(t.show=!1,t.onClose&&t.onClose()),t}))}))}return Object(c["useImperativeHandle"])(t,(function(){return{close:v,closeAll:b,remove:p,removeAll:h,update:E}})),Object(c["useEffect"])((function(){n.isInit||g((function(e){if(e.length>=s&&e.length>0){var t=e.findIndex((function(e){return e.show}));e[t].show=!1}return[].concat(Object(i["a"])(e),[d({},n,{show:!("show"in n)||n.show})])}))}),[n]),f.map((function(n){var t=n.id,o=(n.isInit,Object(a["a"])(n,["id","isInit"]));return l.a.createElement(e,Object.assign({},o,{key:t,namespace:m,onClose:v.bind(null,t),onRemove:p.bind(null,t)}))}))}));function h(e){var n=e.singleton,o=Object(a["a"])(e,["singleton"]),i=Object(f["b"])(2),r=d({},o,{id:i}),c=g.current&&g.current.closeAll;n&&c&&c();var s=l.a.createElement(p,Object.assign({ref:g},r));return u.a.render(t?l.a.createElement(t,null,s):s,Object(f["e"])(m)),[g.current,i]}return h({show:!1,isInit:!0}),h}n["a"]=g},QjBK:function(e,n,t){"use strict";t("iCBh"),t("tU1D")},TcRa:function(e,n){},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},ZSGz:function(e,n,t){"use strict";var a=t("wx14"),o=t("Ff2n"),i=t("q1tI"),r=t.n(i),c=t("Rz6r"),l=t("ODXe"),s=t("lgaZ");function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2?arguments[2]:void 0,a=t||{},o=a.disabled,r=a.deps,c=void 0===r?[]:r,u=a.extraDelay,f=void 0===u?0:u,m=Object(i["useState"])(!!o&&e),d=Object(l["a"])(m,2),g=d[0],p=d[1],h=Object(s["h"])({toggleTimer:null});return Object(i["useEffect"])(()=>{if(n&&!o){if(e!==g)return h.toggleTimer=setTimeout(()=>{p(e)},n+f),()=>{h.toggleTimer&&clearTimeout(h.toggleTimer)}}else p(e)},[e,...c]),g}var f=t("9RZ+"),m=t("TSYQ"),d=t.n(m),g=e=>{var n=e.size,t=e.inline,i=e.text,l=void 0===i?"\u52a0\u8f7d\u4e2d":i,s=e.full,m=e.dark,g=e.show,p=void 0===g||g,h=e.className,v=e.loadingDelay,b=void 0===v?0:v,E=Object(o["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),y=u(p,b);return r.a.createElement(f["a"],Object(a["a"])({toggle:y,type:"fade",mountOnEnter:!0,unmountOnExit:!0},E,{config:f["c"].stiff,className:d()(h,"fr-spin",{["__".concat(n)]:!!n,__inline:t,__full:s,__dark:m})}),r.a.createElement(c["WindmillIcon"],{className:"fr-spin_unit"}),l&&r.a.createElement("span",{className:"fr-spin_text"},l,r.a.createElement("span",{className:"fr-spin_ellipsis"})))};n["a"]=g},cfDW:function(e,n,t){"use strict";t.d(n,"d",(function(){return N})),t.d(n,"b",(function(){return B})),t.d(n,"c",(function(){return R}));var a=t("Ff2n"),o=t("VTBJ"),i=t("wx14"),r=t("q1tI"),c=t.n(r),l=t("M5fq"),s=t("o0o1"),u=t.n(s),f=t("HaE+"),m=t("ODXe"),d=t("wEEd"),g=t("pMrh"),p=t("Rz6r"),h=t("1p7j"),v=t("kr9X"),b=t("jNhd"),E=t("9RZ+"),y=t("TSYQ"),j=t.n(y),O=t("lgaZ"),w=t("uVtn");function T(e){var n=e.children;return c.a.createElement("div",{className:"fr-message"},c.a.createElement("div",{className:"fr-message_cont"},n))}var _=e=>{var n=e.content,t=e.duration,i=void 0===t?600:t,l=e.mask,s=void 0!==l&&l,y=e.type,T=e.loading,_=void 0!==T&&T,x=e.hasCancel,k=e.show,N=void 0===k||k,B=e.onClose,R=e.onRemove,C=e.loadingDelay,M=void 0===C?300:C,I=Object(O["h"])({showTimer:null,hideTimer:null,lastShowTime:0}),D=Object(d["d"])(()=>({opacity:0,height:0,transform:"scale3d(0, 0, 0)",life:100,config:Object(o["a"])({},d["b"].stiff)})),S=Object(m["a"])(D,2),q=S[0],P=q.life,K=Object(a["a"])(q,["life"]),F=S[1],V=Object(r["useState"])(s),A=Object(m["a"])(V,2),z=A[0],G=A[1],W=Object(b["a"])(),J=Object(m["a"])(W,2),X=J[0],Z=J[1].height;function Q(){F({to:function(){var e=Object(f["a"])(u.a.mark((function e(n){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return G(!1),e.next=3,n({opacity:0,height:0,config:d["b"].stiff});case 3:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),onRest(){R&&R()}})}Object(r["useEffect"])(()=>{if(N)return Z&&N&&(I.showTimer=setTimeout(()=>{I.lastShowTime=Date.now(),F({to:function(){var e=Object(f["a"])(u.a.mark((function e(n){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n({opacity:1,height:Z+(x?60:36),life:100,transform:"scale3d(1, 1 ,1)"});case 2:return e.next=4,n({opacity:1,life:0,config:{duration:i}});case 4:Q();case 5:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()})},_?M:0)),()=>{I.showTimer&&clearTimeout(I.showTimer),I.hideTimer&&clearTimeout(I.hideTimer)};var e=Date.now()-I.lastShowTime;I.hideTimer=setTimeout(Q,_&&e>0?e+M+300:0)},[N,Z]);var Y=p["statusIcons"][y||"success"];return c.a.createElement(d["a"].div,{style:K,className:"fr-message_item"},c.a.createElement(g["default"],null,c.a.createElement(E["a"],{className:"fr-mask",toggle:z,type:"fade",mountOnEnter:!0,unmountOnExit:!0})),c.a.createElement("div",{ref:X,className:j()("fr-message_item-cont",{__loading:_,__notification:x})},c.a.createElement(v["If"],{when:x},()=>c.a.createElement(w["default"],{onClick:B,className:"fr-message_close",icon:!0,size:"small"},c.a.createElement(p["CloseOutlined"],null))),c.a.createElement(v["Toggle"],{when:y&&!_},c.a.createElement("div",{className:"fr-message_icon"},c.a.createElement(Y,null))),c.a.createElement(v["If"],{when:_},c.a.createElement("div",{className:"fr-message_loading"},c.a.createElement(h["default"],{show:!0,loadingDelay:0,text:n}))),c.a.createElement(v["If"],{when:!_},c.a.createElement("span",null,n)),c.a.createElement(v["If"],{when:!_&&i<1e6},()=>c.a.createElement(d["a"].div,{style:{width:P?P.interpolate(e=>"".concat(e.toFixed(2),"%")):0},className:"fr-message_process"}))))},x=_,k=Object(l["a"])(x,{wrap:T,maxInstance:7,namespace:"MESSAGE"}),N=e=>{var n=Object(i["a"])({},e);return k(Object(o["a"])(Object(o["a"])({},n),{},{hasCancel:!1,loading:!1}))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(i["a"])({},e);return k(Object(o["a"])(Object(o["a"])({hasCancel:!1,duration:1/0},n),{},{loading:!0}))},R=e=>{var n=e.title,t=e.desc,i=e.foot,r=e.content,l=Object(a["a"])(e,["title","desc","foot","content"]);return k(Object(o["a"])(Object(o["a"])({duration:4e3,hasCancel:!0,content:r||c.a.createElement("div",{className:"fr-message_notification"},n&&c.a.createElement("div",{className:"fr-message_notification_title"},n),t&&c.a.createElement("div",{className:"fr-message_notification_desc"},t),i&&c.a.createElement("div",{className:"fr-message_notification_foot"},i))},l),{},{loading:!1}))};n["a"]=k},jNhd:function(e,n,t){"use strict";var a=t("q1tI"),o=t("bdgK"),i=function(){var e=Object(a["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),n=e[0],t=e[1],i=Object(a["useState"])((function(){return new o["a"]((function(e){var n=e[0];n&&t(n.contentRect)}))}))[0],r=Object(a["useCallback"])((function(e){i.disconnect(),e&&i.observe(e)}),[i]);return[r,n]};n["a"]=i},kr9X:function(e,n,t){"use strict";var a=t("Ctpu"),o=t("Jiyh");t.o(o,"If")&&t.d(n,"If",(function(){return o["If"]})),t.o(o,"Switch")&&t.d(n,"Switch",(function(){return o["Switch"]})),t.o(o,"Toggle")&&t.d(n,"Toggle",(function(){return o["Toggle"]})),t.d(n,"If",(function(){return a["a"]})),t.d(n,"Switch",(function(){return a["b"]})),t.d(n,"Toggle",(function(){return a["c"]}));var i=a["d"];i.If=a["a"],i.Toggle=a["c"],i.Switch=a["b"],n["default"]=i},"pF+1":function(e,n,t){},tU1D:function(e,n,t){},uVtn:function(e,n,t){"use strict";t("QjBK"),t("BO4J");var a=t("B68Z");t.d(n,"default",(function(){return a["a"]}))},xCdP:function(e,n,t){"use strict";t.r(n);var a=t("ODXe"),o=t("q1tI"),i=t.n(o),r=t("FnWK"),c=t("uVtn"),l=["success","error","warning",void 0];function s(){setTimeout(()=>{var e=r["default"].tips({content:"\u63d0\u793a",duration:Math.floor(5e3*Math.random())+500,type:l[Math.floor(4*Math.random())]}),n=Object(a["a"])(e,2),t=n[0],o=n[1];console.log(111,t,o)})}function u(){var e=r["default"].loading(),n=Object(a["a"])(e,2),t=n[0],o=n[1];setTimeout(()=>{t.close(o)},400)}function f(){r["default"].notify({title:"\u6807\u9898\u6807\u9898",desc:"\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\uff0c\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0\u63cf\u8ff0",type:l[Math.floor(4*Math.random())]})}var m=()=>(Object(o["useEffect"])(()=>{},[]),i.a.createElement("div",null,i.a.createElement(c["default"],{onClick:s},"message"),i.a.createElement(c["default"],{onClick:u},"loading"),i.a.createElement(c["default"],{onClick:f},"notify")));n["default"]=m}}]);