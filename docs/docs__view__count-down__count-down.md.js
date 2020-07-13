(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110,108,109],{"+DRe":function(e,t,n){},"/590":function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("q1tI"),o=n.n(r),c=(n("B2uJ"),n("+su7"),n("qOys")),i=n.n(c),l=n("5Yjd"),s=n.n(l),u=o.a.memo((function(){var e=n("TqRt"),t=e(n("q1tI")),a=e(n("RTWq")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)})),m=o.a.memo((function(){var e=n("TqRt"),t=e(n("q1tI")),a=e(n("r7At")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"countdown-\u5012\u8ba1\u65f6"},o.a.createElement("a",{"aria-hidden":"true",href:"#countdown-\u5012\u8ba1\u65f6"},o.a.createElement("span",{className:"icon icon-link"})),"CountDown \u5012\u8ba1\u65f6"),o.a.createElement("p",null,"\u5bf9\u67d0\u4e2a\u65f6\u95f4\u8ddd\u79bb\u5f53\u524d\u65f6\u95f4\u7684\u8be6\u7ec6\u65f6\u95f4\u8fdb\u884c\u5c55\u793a"),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),o.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport CountDown from '@lxjx/fr/lib/count-down';\nimport '@lxjx/fr/lib/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <h3>\u5927\u4e8e30\u5929: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth() + 2, 1)} />\n\n    <h3 className=\"mt-24\">10\u5929\u540e: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10)} />\n\n    <h3 className=\"mt-24\">\u8d85\u65f6: </h3>\n    <CountDown date=\"2008-08-08\" />\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport CountDown from '@lxjx/fr/lib/count-down';\nimport '@lxjx/fr/lib/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <h3>\u5927\u4e8e30\u5929: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth() + 2, 1)} />\n\n    <h3 className=\"mt-24\">10\u5929\u540e: </h3>\n    <CountDown date={new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10)} />\n\n    <h3 className=\"mt-24\">\u8d85\u65f6: </h3>\n    <CountDown date=\"2008-08-08\" />\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/count-down-demo",dependencies:{},files:{}}),o.a.createElement(u,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u683c\u5f0f"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u5b9a\u4e49\u683c\u5f0f"},o.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u683c\u5f0f")),o.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport CountDown from '@lxjx/fr/lib/count-down';\nimport '@lxjx/fr/lib/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <CountDown\n      date={new Date(d.getFullYear(), d.getMonth() + 2, 1)}\n      format={meta => `\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59${meta.d}\u5929${meta.d}\u65e5${meta.h}\u65f6${meta.m}\u5206${meta.s}\u79d2`}\n    />\n  </div>\n);\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport CountDown from '@lxjx/fr/lib/count-down';\nimport '@lxjx/fr/lib/count-down/style';\n\nconst d = new Date();\n\nconst Demo = () => (\n  <div>\n    <CountDown\n      date={new Date(d.getFullYear(), d.getMonth() + 2, 1)}\n      format={meta => `\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59${meta.d}\u5929${meta.d}\u65e5${meta.h}\u65f6${meta.m}\u5206${meta.s}\u79d2`}\n    />\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/count-down-format",dependencies:{},files:{}}),o.a.createElement(m,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"props"},o.a.createElement("a",{"aria-hidden":"true",href:"#props"},o.a.createElement("span",{className:"icon icon-link"})),"props"),o.a.createElement(i.a,{code:"interface CountDownProps extends ExtCls, ComponentBaseProps {\n  /** \u76ee\u6807\u65f6\u95f4 */\n  date?: string | Date;\n  /** \u66ff\u6362\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u8fd4\u56de\u5b57\u7b26\u4e32\u4f1a\u66ff\u6362\u9ed8\u8ba4\u7684\u65f6\u95f4\u5b57\u7b26\uff0c\u8c03\u7528triggerFinish()\u53ef\u4ee5\u6e05\u9664\u5012\u8ba1\u65f6\u8ba1\u65f6\u5668 */\n  format?(meta: TimeMeta, triggerFinish: () => void): string;\n  /** \u6bcf\u6b21\u65f6\u95f4\u5b57\u7b26\u6539\u53d8\u65f6\u89e6\u53d1 */\n  onChange?(meta: TimeMeta): void;\n  /** \u66f4\u65b0\u9891\u7387\uff0c\u9ed8\u8ba41000ms */\n  frequency?: number;\n}\n",lang:"tsx"}),o.a.createElement("p",null,o.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),o.a.createElement(i.a,{code:'interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n\ninterface ExtCls {\n  /** \u5b57\u7b26"xx\u5929xx\u65f6xx\u5206"\u4e2d\u7684xx\u6240\u5728\u5305\u88f9\u5143\u7d20\u7684\u989d\u5916\u7c7b\u540d */\n  textClassName?: string;\n  /** \u5b57\u7b26"xx\u5929xx\u65f6xx\u5206"\u4e2d\u7684\u5929\u3001\u65f6\u3001\u5206\u7b49\u63cf\u8ff0\u6587\u5b57\u7684\u989d\u5916\u7c7b\u540d */\n  timeClassName?: string;\n}\n',lang:"tsx"})))}},"/FQm":function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u}));var a={onClick(e){e.stopPropagation()}},r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};function o(e,t){if(e)return e.currentStyle||window.getComputedStyle?e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e)[t]:null}function c(e){var t=null;function n(e){var a=e.parentNode;if(a){var r=a,c=r.offsetHeight,i=r.scrollHeight;if(i>c){var l=o(r,"overflow");if("scroll"===l||"auto"===l)return void(t=r)}n(r)}}return n(e),t}function i(e,t){var n=t||{},a=n.fullVisible,r=void 0!==a&&a,o=n.wrapEl,c=0,i=0,l=window.innerHeight,s=window.innerWidth;if(o){var u=o.getBoundingClientRect(),m=u.top,d=u.left,f=u.bottom,w=u.right;c+=m,i+=d,l-=l-f,s-=s-w}var p=e.getBoundingClientRect(),v=p.top,h=p.left,x=p.bottom,g=p.right,E=(r?x:v)<l,D=(r?v:x)>c,C=(r?h:g)>i,b=(r?g:h)<s;return D&&b&&E&&C}function l(e){return!!e||0===e}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,r=t;a<r.length;a++){var o=r[a];if(l(o))return o}return!1}function u(e,t,n){var a=!1,r=0;function o(e){if((!n||(r++,r!==n))&&e){var c=e.parentNode;if(c){var i=t(c);if(i)return void(a=!0)}o(c)}}return o(e),a}},"0epQ":function(e,t,n){"use strict";n("iCBh"),n("+DRe")},A4jb:function(e,t,n){},B9oH:function(e,t,n){},PAy8:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("oMDT");var a=n("VTBJ"),r=n("q1tI"),o=n.n(r),c=n("K3qG"),i=n("lgaZ"),l=n("/FQm"),s=n("TSYQ"),u=n.n(s),m=(e,t)=>{var n=e.textClassName,a=e.timeClassName;return+e.d>30?(t&&t(),"".concat(d(e.d,a)).concat(f("\u5929\u540e",n))):(e.timeOut&&t&&t(),(+e.d?d(e.d,a)+f("\u5929",n):"")+d(e.h,a)+f("\u65f6",n)+d(e.m,a)+f("\u5206",n)+d(e.s,a)+f("\u79d2",n))};function d(e,t){return'<span class="'.concat(u()("fr-count-down_time",t),'">').concat(e,"</span>")}function f(e,t){return'<span class="'.concat(u()("fr-count-down_text",t),'">').concat(e,"</span>")}var w=e=>{var t=e.date,n=e.textClassName,s=e.timeClassName,d=e.format,f=void 0===d?m:d,w=e.onChange,p=void 0===w?l["b"]:w,v=e.frequency,h=void 0===v?1e3:v,x=e.className,g=e.style,E=Object(r["useRef"])(null),D=Object(i["h"])({timer:0});function C(){var e=Object(a["a"])(Object(a["a"])({},Object(c["d"])(t)),{},{textClassName:n,timeClassName:s});p(e),E.current.innerHTML="".concat(f(e,()=>{D.timer&&window.clearInterval(D.timer)}))}return Object(r["useEffect"])(()=>(t&&(C(),D.timer=window.setInterval(()=>{C()},h)),()=>{D.timer&&window.clearInterval(D.timer)}),[t]),o.a.createElement("span",{className:u()("fr-count-down",x),style:g,ref:E})},p=w},RTWq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("PAy8"),c=(n("oMDT"),new Date),i=()=>r.a.createElement("div",null,r.a.createElement("h3",null,"\u5927\u4e8e30\u5929: "),r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth()+2,1)}),r.a.createElement("h3",{className:"mt-24"},"10\u5929\u540e: "),r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth(),c.getDate()+10)}),r.a.createElement("h3",{className:"mt-24"},"\u8d85\u65f6: "),r.a.createElement(o["a"],{date:"2008-08-08"}));t["default"]=i},TqRt:function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},VDNK:function(e,t,n){},iCBh:function(e,t,n){"use strict";n("6Hk/"),n("B9oH");var a=n("DjD+"),r=n("kDG4");new a["a"],Object(r["b"])()},jq6b:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));n("0epQ");var a=n("ODXe"),r=n("q1tI"),o=n.n(r),c=n("6y2Z"),i=n("hEdC"),l=n("lgaZ"),s=n("9RZ+"),u=n("pMrh"),m=n("TSYQ"),d=n.n(m),f=e=>{var t=e.mask,n=void 0===t||t,r=e.visible,m=void 0===r||r,f=e.maskClosable,w=void 0===f||f,p=e.show,v=void 0!==p&&p,h=e.onClose,x=e.onRemove,g=e.onRemoveDelay,E=void 0===g?800:g,D=e.unlockDelay,C=void 0===D?360:D,b=e.portal,y=void 0===b||b,N=e.className,j=e.style,O=e.children,T=e.namespace,k=e.dark,_=Object(c["a"])(v),I=Object(a["a"])(_,2),R=I[0],q=I[1];function F(){return o.a.createElement("div",{className:d()("fr-mask_wrap",N),style:j},n&&o.a.createElement("div",{className:"fr-mask_inner",style:{opacity:m?1:0}},o.a.createElement(s["a"],{onClick:w?h:void 0,toggle:v,type:"fade",className:d()("fr-mask-node",k?"fr-mask-b":"fr-mask"),mountOnEnter:!0,unmountOnExit:!0})),O)}return Object(l["e"])(R),Object(i["a"])((function(){!v&&x&&setTimeout(x,E),v&&q(!0),v||setTimeout(()=>{q(!1)},C)}),[v]),y?o.a.createElement(u["default"],{namespace:T},F()):F()},w=f},kDG4:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return D}));n("iCBh"),n("VDNK");var a=n("wx14"),r=n("VTBJ"),o=n("o0o1"),c=n.n(o),i=n("HaE+"),l=n("ODXe"),s=n("Ff2n"),u=n("q1tI"),m=n.n(u),d=n("wEEd"),f=n("lgaZ"),w=n("jq6b"),p=n("/FQm"),v=n("TSYQ"),h=n.n(v),x=e=>{var t=e.children,n=e.className,o=e.contClassName,v=e.contStyle,x=Object(s["a"])(e,["children","className","contClassName","contStyle"]),g=x.show,E=Object(f["h"])({x:0,y:0}),D=Object(d["d"])(()=>({x:0,y:0,scale:0})),C=Object(l["a"])(D,2),b=C[0],y=C[1];return Object(u["useEffect"])(()=>{g?(E.x=window.FR_LAST_CLICK_POSITION_X||0,E.y=window.FR_LAST_CLICK_POSITION_Y||0,y({to:function(){var e=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({x:E.x,y:E.y,scale:0,immediate:!0,reset:!0});case 2:return e.next=4,t({x:0,y:0,scale:1,immediate:!1,config:d["b"].stiff,reset:!1});case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()})):(y({x:E.x,y:E.y,scale:0,immediate:!1,config:d["b"].stiff,reset:!1}),E.x=0,E.y=0)},[g]),m.a.createElement(w["a"],Object(a["a"])({className:h()("fr-sfm",n)},x),m.a.createElement(d["a"].div,Object(a["a"])({className:h()(o,"fr-sfm_cont"),style:Object(r["a"])({transform:Object(d["c"])([b.x,b.y,b.scale],(e,t,n)=>"translate3d(".concat(e,"px,").concat(t,"px, 0px) scale3d(").concat(n,",").concat(n,",").concat(n,")")),opacity:b.scale},v)},p["g"]),t))};function g(e){var t=e.x||e.screenX,n=e.y||e.screenY,a=window.innerHeight/2,r=window.innerWidth/2;window.FR_LAST_CLICK_POSITION_X=t-r,window.FR_LAST_CLICK_POSITION_Y=n-a}function E(){window.removeEventListener("click",g,!0),window.addEventListener("click",g,!0)}var D=x},oMDT:function(e,t,n){"use strict";n("iCBh"),n("A4jb")},pMrh:function(e,t,n){"use strict";n.r(t);var a=n("i8i4"),r=n.n(a),o=n("K3qG"),c=e=>{var t=e.children,n=e.namespace;return r.a.createPortal(t,Object(o["e"])(n))},i=c;t["default"]=i},r7At:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("PAy8"),c=(n("oMDT"),new Date),i=()=>r.a.createElement("div",null,r.a.createElement(o["a"],{date:new Date(c.getFullYear(),c.getMonth()+2,1),format:e=>"\u8ddd\u79bb\u6d3b\u52a8\u7ed3\u675f\u5269\u4f59".concat(e.d,"\u5929").concat(e.d,"\u65e5").concat(e.h,"\u65f6").concat(e.m,"\u5206").concat(e.s,"\u79d2")}));t["default"]=i}}]);