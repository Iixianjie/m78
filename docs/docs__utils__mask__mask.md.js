(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98,97],{"1p7j":function(e,n,t){"use strict";t("GTID"),t("TcRa");var a=t("ZSGz");t.d(n,"default",(function(){return a["a"]}))},B68Z:function(e,n,t){"use strict";var a=t("0Owb"),o=t("PpiC"),r=t("k1fw"),l=t("q1tI"),i=t.n(l),s=t("1p7j"),c=(t("iCBh"),t("K3qG")),m=t("TSYQ"),d=t.n(m),u={large:18,small:14,mini:12},f=/.?(Outlined|Filled|TwoTone|Icon)$/;function p(e){return Object(c["g"])(e)?e.map((n,t)=>{var a,o,l,s=null===(a=n)||void 0===a?void 0:a.type,c="";s&&(c=(null===(o=s.render)||void 0===o?void 0:o.displayName)||(null===(l=s.render)||void 0===l?void 0:l.name)||s.name);if(c&&i.a.isValidElement(n)&&f.test(c)){var m={marginLeft:8,marginRight:8};0===t&&(m={marginRight:8}),t===e.length-1&&(m={marginLeft:8});var d=Object(r["a"])(Object(r["a"])({},n.props.style),m);return i.a.cloneElement(n,{style:d,key:t})}return n}):e}var b=e=>{var n=e.size,t=e.color,r=e.circle,c=e.outline,m=e.block,f=e.link,b=e.icon,h=e.disabled,k=e.loading,x=e.md,v=e.win,g=e.children,w=e.className,E=e.href,S=Object(o["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),_=d()(w,"fr-btn","fr-effect",{["__".concat(t)]:t,["__".concat(n)]:n,__circle:r,__outline:c,__block:m,__link:f,__icon:b,__md:x,__win:v,__light:!!t&&!f&&!b,__disabled:h||k}),j=Object(l["useMemo"])(()=>p(g),[g]);return i.a.createElement("button",Object(a["a"])({type:"button"},S,{className:_,disabled:!!h||!!k}),f&&i.a.createElement("a",{className:"fr-btn__link",href:E}),i.a.createElement(s["default"],{style:{fontSize:n?u[n]:14,color:"#333"},show:!!k,full:!0,text:""}),i.a.createElement("span",null,j))};n["a"]=b},BO4J:function(e,n){},GTID:function(e,n,t){"use strict";t("iCBh"),t("pF+1")},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},QjBK:function(e,n,t){"use strict";t("iCBh"),t("tU1D")},TcRa:function(e,n){},ZSGz:function(e,n,t){"use strict";var a=t("0Owb"),o=t("PpiC"),r=t("q1tI"),l=t.n(r),i=t("Rz6r"),s=t("tJVT"),c=t("lgaZ");function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2?arguments[2]:void 0,a=t||{},o=a.disabled,l=a.deps,i=void 0===l?[]:l,m=a.extraDelay,d=void 0===m?0:m,u=Object(r["useState"])(!!o&&e),f=Object(s["a"])(u,2),p=f[0],b=f[1],h=Object(c["h"])({toggleTimer:null});return Object(r["useEffect"])(()=>{if(n&&!o){if(e!==p)return h.toggleTimer=setTimeout(()=>{b(e)},n+d),()=>{h.toggleTimer&&clearTimeout(h.toggleTimer)}}else b(e)},[e,...i]),p}var d=t("9RZ+"),u=t("TSYQ"),f=t.n(u),p=e=>{var n=e.size,t=e.inline,r=e.text,s=void 0===r?"\u52a0\u8f7d\u4e2d":r,c=e.full,u=e.dark,p=e.show,b=void 0===p||p,h=e.className,k=e.loadingDelay,x=void 0===k?0:k,v=Object(o["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),g=m(b,x);return l.a.createElement(d["a"],Object(a["a"])({toggle:g,type:"fade",mountOnEnter:!0,unmountOnExit:!0},v,{config:d["c"].stiff,className:f()(h,"fr-spin",{["__".concat(n)]:!!n,__inline:t,__full:c,__dark:u})}),l.a.createElement(i["WindmillIcon"],{className:"fr-spin_unit"}),s&&l.a.createElement("span",{className:"fr-spin_text"},s,l.a.createElement("span",{className:"fr-spin_ellipsis"})))};n["a"]=p},lGvo:function(e,n,t){"use strict";t.r(n);var a=t("tJVT"),o=t("k1fw"),r=t("PpiC"),l=t("q1tI"),i=t.n(l),s=t("jq6b"),c=(t("0epQ"),t("uVtn")),m=(t("QjBK"),{position:"fixed",left:"50%",top:"50%",width:240,height:240,margin:"-120px 0 0 -120px",lineHeight:"240px",textAlign:"center",border:"4px solid #fb6161",boxShadow:"0 0 0 6px #61fbf6",borderRadius:2,backgroundColor:"#fff",transition:"transform 0.3s",zIndex:1001}),d={transform:"scale(1)"},u={transform:"scale(0)"},f=e=>{var n=e.children,t=Object(r["a"])(e,["children"]);return i.a.createElement(s["a"],t,i.a.createElement("div",{style:Object(o["a"])(Object(o["a"])({},m),t.show?d:u)},n))},p=()=>{var e=Object(l["useState"])(!1),n=Object(a["a"])(e,2),t=n[0],o=n[1];return i.a.createElement("div",null,i.a.createElement(f,{show:t,onClose:()=>o(!1)},i.a.createElement("div",null,"mask content")),i.a.createElement(c["default"],{onClick:()=>o(e=>!e)},"toggle | ",t.toString()))};n["default"]=p},n9PC:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),o=t("q1tI"),r=t.n(o),l=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(l),s=t("5Yjd"),c=t.n(s),m=r.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("lGvo")),o=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(o)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"mask-\u906e\u7f69"},r.a.createElement("a",{"aria-hidden":"true",href:"#mask-\u906e\u7f69"},r.a.createElement("span",{className:"icon icon-link"})),"Mask \u906e\u7f69"),r.a.createElement("p",null,"\u4e0e RenderApi \u914d\u5408\u4f7f\u7528, \u4e3a\u5f39\u5c42\u7c7b\u7ec4\u4ef6\u63d0\u4f9b mask \u5e76\u4e14\u652f\u6301\u4ee3\u7406 RenderApi \u7684\u90e8\u5206\u64cd\u4f5c"),r.a.createElement("ul",null,r.a.createElement("li",null,"mask \u5c42\u548c\u5185\u5bb9\u662f\u5206\u5f00\u6e32\u67d3\u7684\uff0c\u5426\u5219 mask \u7684 fade \u52a8\u753b\u4f1a\u5f71\u54cd\u5230\u5185\u5bb9"),r.a.createElement("li",null,"mask \u4e0d\u4f1a\u5904\u7406\u5185\u5bb9\u7684\u52a8\u753b\u3001\u663e\u793a\u9690\u85cf\u7b49\uff0c\u9700\u8981\u81ea\u884c\u5b9e\u73b0"),r.a.createElement("li",null,"\u900f\u4f20\u7ec4\u4ef6\u7684 ReactRenderApiProps \u5230 mask\uff0c\u4f7f\u5176\u80fd\u591f\u5728\u5408\u9002\u65f6\u673a\u5904\u7406 api \u5185\u90e8\u65b9\u6cd5\u7684\u8c03\u7528")),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement("p",null,"\u4e0b\u4f8b\u521b\u5efa\u4e00\u4e2a modal \u7ec4\u4ef6\u6765\u6f14\u793a Mask \u7684\u57fa\u672c\u7528\u6cd5")),r.a.createElement(c.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport Mask from '@lxjx/fr/lib/mask';\nimport '@lxjx/fr/lib/mask/style';\n\nimport Button from '@lxjx/fr/lib/button';\nimport '@lxjx/fr/lib/button/style';\n\nimport { ReactRenderApiProps } from '@lxjx/react-render-api';\n\ninterface MaskDemo extends ReactRenderApiProps {\n  /* \u6e32\u67d3\u7684\u5185\u5bb9 */\n  children: React.ReactNode;\n}\n\nconst box: React.CSSProperties = {\n  position: 'fixed',\n  left: '50%',\n  top: '50%',\n  width: 240,\n  height: 240,\n  margin: '-120px 0 0 -120px',\n  lineHeight: '240px',\n  textAlign: 'center',\n  border: '4px solid #fb6161',\n  boxShadow: '0 0 0 6px #61fbf6',\n  borderRadius: 2,\n  backgroundColor: '#fff',\n  transition: 'transform 0.3s',\n  zIndex: 1001,\n};\n\nconst inStyle: React.CSSProperties = {\n  transform: 'scale(1)',\n};\n\nconst outStyle: React.CSSProperties = {\n  transform: 'scale(0)',\n};\n\nconst MaskDemo: React.FC<MaskDemo> = ({ children, ...props }) => (\n  <Mask {...props}>\n    <div style={{ ...box, ...(props.show ? inStyle : outStyle) }}>{children}</div>\n  </Mask>\n);\n\nconst Demo = () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <div>\n      <MaskDemo show={show} onClose={() => setShow(false)}>\n        <div>mask content</div>\n      </MaskDemo>\n      <Button onClick={() => setShow(prev => !prev)}>toggle | {show.toString()}</Button>\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import React, { useState } from 'react';\nimport Mask from '@lxjx/fr/lib/mask';\nimport '@lxjx/fr/lib/mask/style';\nimport Button from '@lxjx/fr/lib/button';\nimport '@lxjx/fr/lib/button/style';\n\nconst box = {\n  position: 'fixed',\n  left: '50%',\n  top: '50%',\n  width: 240,\n  height: 240,\n  margin: '-120px 0 0 -120px',\n  lineHeight: '240px',\n  textAlign: 'center',\n  border: '4px solid #fb6161',\n  boxShadow: '0 0 0 6px #61fbf6',\n  borderRadius: 2,\n  backgroundColor: '#fff',\n  transition: 'transform 0.3s',\n  zIndex: 1001,\n};\nconst inStyle = {\n  transform: 'scale(1)',\n};\nconst outStyle = {\n  transform: 'scale(0)',\n};\n\nconst MaskDemo = ({ children, ...props }) => (\n  <Mask {...props}>\n    <div style={{ ...box, ...(props.show ? inStyle : outStyle) }}>{children}</div>\n  </Mask>\n);\n\nconst Demo = () => {\n  const [show, setShow] = useState(false);\n  return (\n    <div>\n      <MaskDemo show={show} onClose={() => setShow(false)}>\n        <div>mask content</div>\n      </MaskDemo>\n      <Button onClick={() => setShow(prev => !prev)}>toggle | {show.toString()}</Button>\n    </div>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-15",dependencies:{},files:{}}),r.a.createElement(m,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"props"},r.a.createElement("a",{"aria-hidden":"true",href:"#props"},r.a.createElement("span",{className:"icon icon-link"})),"Props"),r.a.createElement(i.a,{code:"interface MaskProps extends ComponentBaseProps, ReactRenderApiProps {\n  /** \u662f\u5426\u663e\u793amask */\n  mask?: boolean;\n  /** \u662f\u5426\u5141\u8bb8\u70b9\u51fbmask\u8fdb\u884c\u5173\u95ed */\n  maskClosable?: boolean;\n  /** 800 | \u5f53\u4f20\u5165onRemove\u65f6\uff0c\u4f1a\u5bf9\u5176\u8fdb\u884c\u4ee3\u7406\uff0c\u5f53show\u4e3afalse\u5728\u6307\u5b9a\u5ef6\u8fdf\u5185\u8c03\u7528onRemove */\n  onRemoveDelay?: number;\n  /** 360 | \u9ed8\u8ba4\u4f1a\u5728mask\u51fa\u73b0\u65f6\u9501\u5b9abody\u7684\u6eda\u52a8\u6761\u9632\u6b62\u9875\u9762\u6296\u52a8\uff0c\u6b64\u5ef6\u8fdf\u7528\u4e8e\u6062\u590d\u6eda\u52a8\u6761\u7684\u5ef6\u8fdf\u65f6\u95f4(\u5e94\u8be5\u6839\u636e\u52a8\u753b\u65f6\u95f4\u7ed9\u51fa\u4e00\u4e2a\u5408\u7406\u7684\u65f6\u95f4) */\n  unlockDelay?: number;\n  /** true | \u662f\u5426\u4ee5portal\u6a21\u5f0f\u6302\u8f7d\u5230body\u4e0b\u6307\u5b9a\u5143\u7d20\u4e0b */\n  portal?: boolean;\n  /** \u9ed1\u8272\u4e3b\u9898 */\n  dark?: boolean;\n}\n",lang:"tsx"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),r.a.createElement(i.a,{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n\ninterface ReactRenderApiProps {\n  /** \u5b9e\u4f8b\u7ec4\u4ef6\u662f\u5426\u663e\u793a */\n  show?: boolean;\n  /** \u4ece\u5b9e\u4f8b\u5217\u8868\u79fb\u9664\u6307\u5b9a\u5b9e\u4f8b, \u5982\u679c\u7ec4\u4ef6\u5e26\u5173\u95ed\u52a8\u753b\uff0c\u8bf7\u5148\u4f7f\u7528onClose\uff0c\u7136\u540e\u5728show = false\u65f6\u6267\u884c\u5173\u95ed\u52a8\u753b\u5e76\u5728\u5408\u9002\u7684\u65f6\u673a\u6267\u884c\u6b64\u65b9\u6cd5\u6765\u79fb\u9664\u5b9e\u4f8b */\n  onRemove?: () => void;\n  /** \u5c06\u8be5\u9879\u7684show\u8bbe\u7f6e\u4e3afalse */\n  onClose?: () => void;\n  /** \u6b64\u53c2\u6570\u900f\u4f20\u81f3createRenderApi(options)\u4e2d\u7684option.namespace\uff0c\u7528\u4e8e\u5e2e\u52a9\u7ec4\u4ef6\u6e32\u67d3\u5230\u81ea\u5b9a\u4e49\u547d\u540d\u7684\u8282\u70b9\u4e0b\n   *  \u7528\u4e8e\u67d0\u4e9b\u53ef\u80fd\u4f1a\u5b58\u5728\u7ec4\u4ef6\u5f62\u5f0f\u4e0eapi\u5f62\u5f0f\u4e00\u8d77\u4f7f\u7528\u7684\u7ec4\u4ef6(\u5982modal)\uff0c\u540c\u8282\u70b9\u4e0b\u6e32\u67d3\u4e24\u79cd\u7ec4\u4ef6\u4f1a\u9020\u6210react\u6e32\u67d3\u51b2\u7a81\u3002\n   * */\n  namespace?: string;\n}\n",lang:"tsx"})))}},"pF+1":function(e,n,t){},tU1D:function(e,n,t){},uVtn:function(e,n,t){"use strict";t("QjBK"),t("BO4J");var a=t("B68Z");t.d(n,"default",(function(){return a["a"]}))}}]);