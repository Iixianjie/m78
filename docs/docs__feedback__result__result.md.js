(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58,57],{"1p7j":function(e,t,n){"use strict";n("GTID"),n("TcRa");var i=n("ZSGz");n.d(t,"default",(function(){return i["a"]}))},"9+HG":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),l=(n("iCBh"),n("Z9fy"),n("Rz6r")),o=n("kr9X"),r=n("pMrh"),c=n("9RZ+"),s=n("TSYQ"),u=n.n(s),m=["notFound","serverError","notAuth"],d=e=>{var t=e.type,n=void 0===t?"success":t,i=e.title,s=void 0===i?"\u64cd\u4f5c\u6210\u529f!":i,d=e.desc,p=e.children,f=e.actions,h=e.show,v=void 0===h||h,E=e.fixed,g=void 0!==E&&E,B=l["statusIcons"][n];function y(){return a.a.createElement(c["a"],{type:g?"zoom":"fade",toggle:v,config:c["c"].stiff,mountOnEnter:!0,unmountOnExit:!0,className:u()("fr-result",{__fixed:g})},a.a.createElement("div",{className:"fr-result_cont"},a.a.createElement("div",{className:u()("fr-result_icon",{__waiting:"waiting"===n})},a.a.createElement(B,{type:n,className:u()({"fr-result_status-img":m.includes(n)})})),a.a.createElement(o["default"].If,{when:s},a.a.createElement("div",{className:"fr-result_title"},s)),a.a.createElement(o["default"].If,{when:!!d},a.a.createElement("div",{className:"fr-result_desc"},d)),a.a.createElement(o["default"].If,{when:!!p},a.a.createElement("div",{className:"fr-result_extra"},p)),a.a.createElement(o["default"].If,{when:!!f},a.a.createElement("div",{className:"fr-result_btns"},f))))}return g?a.a.createElement(r["default"],null,y()):y()},p=d,f=p,h=n("uVtn"),v=()=>a.a.createElement("div",null,a.a.createElement(f,{type:"success",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"primary"},"\u786e\u8ba4"))}),a.a.createElement(f,{type:"error",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"red"},"\u786e\u8ba4"))},a.a.createElement("div",null,"Lorem Facere minus, modi? illo"),a.a.createElement("div",null,"ipsum dolor sit amet, consectetur adipisicing elit.")),a.a.createElement(f,{type:"warning",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"yellow"},"\u786e\u8ba4"))},a.a.createElement("div",null,"Lorem Facere minus, modi? illo"),a.a.createElement("div",null,"ipsum dolor sit amet, consectetur adipisicing elit.")),a.a.createElement(f,{type:"waiting",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"blue"},"\u8fd4\u56de\u9996\u9875"))},a.a.createElement("div",null,"Lorem Facere minus, modi? illo"),a.a.createElement("div",null,"ipsum dolor sit amet, consectetur adipisicing elit.")),a.a.createElement(f,{type:"notFound",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"blue"},"\u8fd4\u56de\u9996\u9875"))},a.a.createElement("div",null,"Lorem Facere minus, modi? illo"),a.a.createElement("div",null,"ipsum dolor sit amet, consectetur adipisicing elit.")),a.a.createElement(f,{type:"serverError",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"blue"},"\u8fd4\u56de\u9996\u9875"))},a.a.createElement("div",null,"Lorem Facere minus, modi? illo"),a.a.createElement("div",null,"ipsum dolor sit amet, consectetur adipisicing elit.")),a.a.createElement(f,{type:"notAuth",title:"Adipisci animi architecto t?",desc:"Lorem ipsum dolor sit amelit. Adipisci animi architecto t?",actions:a.a.createElement(a.a.Fragment,null,a.a.createElement(h["default"],null,"\u5173\u95ed"),a.a.createElement(h["default"],{color:"blue"},"\u8fd4\u56de\u9996\u9875"))}));t["default"]=v},B68Z:function(e,t,n){"use strict";var i=n("0Owb"),a=n("PpiC"),l=n("k1fw"),o=n("q1tI"),r=n.n(o),c=n("1p7j"),s=(n("iCBh"),n("K3qG")),u=n("TSYQ"),m=n.n(u),d={large:18,small:14,mini:12},p=/.?(Outlined|Filled|TwoTone|Icon)$/;function f(e){return Object(s["g"])(e)?e.map((t,n)=>{var i,a,o,c=null===(i=t)||void 0===i?void 0:i.type,s="";c&&(s=(null===(a=c.render)||void 0===a?void 0:a.displayName)||(null===(o=c.render)||void 0===o?void 0:o.name)||c.name);if(s&&r.a.isValidElement(t)&&p.test(s)){var u={marginLeft:8,marginRight:8};0===n&&(u={marginRight:8}),n===e.length-1&&(u={marginLeft:8});var m=Object(l["a"])(Object(l["a"])({},t.props.style),u);return r.a.cloneElement(t,{style:m,key:n})}return t}):e}var h=e=>{var t=e.size,n=e.color,l=e.circle,s=e.outline,u=e.block,p=e.link,h=e.icon,v=e.disabled,E=e.loading,g=e.md,B=e.win,y=e.children,b=e.className,w=e.href,A=Object(a["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),_=m()(b,"fr-btn","fr-effect",{["__".concat(n)]:n,["__".concat(t)]:t,__circle:l,__outline:s,__block:u,__link:p,__icon:h,__md:g,__win:B,__light:!!n&&!p&&!h,__disabled:v||E}),R=Object(o["useMemo"])(()=>f(y),[y]);return r.a.createElement("button",Object(i["a"])({type:"button"},A,{className:_,disabled:!!v||!!E}),p&&r.a.createElement("a",{className:"fr-btn__link",href:w}),r.a.createElement(c["default"],{style:{fontSize:t?d[t]:14,color:"#333"},show:!!E,full:!0,text:""}),r.a.createElement("span",null,R))};t["a"]=h},BO4J:function(e,t){},Ctpu:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var i=n("q1tI"),a=n.n(i),l=n("K3qG"),o=()=>null,r=e=>{var t=e.when,n=e.children;t=!!t;var i=Object(l["j"])(n);return t&&(i?n():n)},c=e=>{var t=e.when,n=e.children;function i(){return a.a.cloneElement(n,{style:{display:"none"}})}return t?n:i()},s=e=>{var t=e.children,n=a.a.Children.toArray(t),i=n.reduce((e,t)=>{if(t.type!==r&&t.type!==c)return e;var n="when"in t.props,i=!!t.props.when;return n||e.notWhen||(e.notWhen=a.a.cloneElement(t,{when:!0})),i&&!e.showEl&&(e.showEl=t),e},{showEl:null,notWhen:null});return i.showEl||i.notWhen||null};t["d"]=o},GTID:function(e,t,n){"use strict";n("iCBh"),n("pF+1")},Jiyh:function(e,t){},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},Q4Of:function(e,t,n){"use strict";n.r(t);var i=n("0Owb"),a=n("q1tI"),l=n.n(a),o=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(o),c=n("5Yjd"),s=n.n(c),u=l.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),i=e(n("9+HG")),a=function(){return t["default"].createElement(i["default"],null)};return t["default"].createElement(a)}));t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"result-\u7ed3\u679c"},l.a.createElement("a",{"aria-hidden":"true",href:"#result-\u7ed3\u679c"},l.a.createElement("span",{className:"icon icon-link"})),"Result \u7ed3\u679c"),l.a.createElement("p",null,"\u7528\u4e8e\u5bf9\u7528\u6237\u64cd\u4f5c\u7ed3\u679c\u8fdb\u884c\u53cd\u9988\u6216\u63d0\u793a\u8fdb\u884c\u67d0\u7c7b\u64cd\u4f5c"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"message \u7ec4\u4ef6\u57fa\u4e8e render-api \u5b9e\u73b0\uff0c\u5305\u542b\u8f7b\u63d0\u793a\u3001\u52a0\u8f7d\u4e2d\u3001\u6d88\u606f\u6846\u4e09\u79cd\u7528\u6cd5")),l.a.createElement(s.a,Object(i["a"])({source:{tsx:'import React from \'react\';\n\nimport Result from \'@lxjx/fr/lib/result\';\nimport Button from \'@lxjx/fr/lib/button\';\n\nconst Demo = () => (\n  <div>\n    <Result\n      type="success"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="primary">\u786e\u8ba4</Button>\n        </>\n      }\n    />\n\n    <Result\n      type="error"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="red">\u786e\u8ba4</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="warning"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="yellow">\u786e\u8ba4</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="waiting"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="notFound"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="serverError"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="notAuth"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    />\n  </div>\n);\n\nexport default Demo;\n',jsx:'import React from \'react\';\nimport Result from \'@lxjx/fr/lib/result\';\nimport Button from \'@lxjx/fr/lib/button\';\n\nconst Demo = () => (\n  <div>\n    <Result\n      type="success"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="primary">\u786e\u8ba4</Button>\n        </>\n      }\n    />\n\n    <Result\n      type="error"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="red">\u786e\u8ba4</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="warning"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="yellow">\u786e\u8ba4</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="waiting"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="notFound"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="serverError"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    >\n      <div>Lorem Facere minus, modi? illo</div>\n      <div>ipsum dolor sit amet, consectetur adipisicing elit.</div>\n    </Result>\n\n    <Result\n      type="notAuth"\n      title="Adipisci animi architecto t?"\n      desc="Lorem ipsum dolor sit amelit. Adipisci animi architecto t?"\n      actions={\n        <>\n          <Button>\u5173\u95ed</Button>\n          <Button color="blue">\u8fd4\u56de\u9996\u9875</Button>\n        </>\n      }\n    />\n  </div>\n);\n\nexport default Demo;\n'}},{path:"/_demos/demo-7",dependencies:{},files:{}}),l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement("a",{"aria-hidden":"true",href:"#api"},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(r.a,{code:"type ResultTypes =\n  | 'success'\n  | 'error'\n  | 'warning'\n  | 'waiting'\n  | 'notFound'\n  | 'serverError'\n  | 'notAuth';\n\nexport interface ResultProps {\n  /** true | \u7ec4\u4ef6\u5f00\u5173\uff0c\u4efb\u610ffalsy\u6216truthy\u503c */\n  show?: boolean;\n  /** 'success' | \u7c7b\u578b */\n  type?: ResultTypes;\n  /** '\u64cd\u4f5c\u6210\u529f' | \u6807\u9898 */\n  title?: string;\n  /** \u63cf\u8ff0 */\n  desc?: string;\n  /** \u5b50\u5143\u7d20\u4f1a\u4f5c\u4e3a\u8bf4\u660e\u533a\u57df\u663e\u793a */\n  children?: React.ReactNode;\n  /** \u64cd\u4f5c\u533a\uff0c\u4e00\u822c\u4f1a\u4f20\u9012\u4e00\u7ec4\u6309\u94ae\u6216\u8fde\u63a5 */\n  actions?: React.ReactNode;\n  /** false | \u6d6e\u52a8\u6a21\u5f0f\uff0c\u8131\u79bb\u6587\u6863\u6d41\u5168\u5c4f\u8fdb\u884c\u5c55\u793a */\n  fixed?: boolean;\n}\n",lang:"tsx"})))}},QjBK:function(e,t,n){"use strict";n("iCBh"),n("tU1D")},TcRa:function(e,t){},Z9fy:function(e,t,n){},ZSGz:function(e,t,n){"use strict";var i=n("0Owb"),a=n("PpiC"),l=n("q1tI"),o=n.n(l),r=n("Rz6r"),c=n("tJVT"),s=n("lgaZ");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2?arguments[2]:void 0,i=n||{},a=i.disabled,o=i.deps,r=void 0===o?[]:o,u=i.extraDelay,m=void 0===u?0:u,d=Object(l["useState"])(!!a&&e),p=Object(c["a"])(d,2),f=p[0],h=p[1],v=Object(s["h"])({toggleTimer:null});return Object(l["useEffect"])(()=>{if(t&&!a){if(e!==f)return v.toggleTimer=setTimeout(()=>{h(e)},t+m),()=>{v.toggleTimer&&clearTimeout(v.toggleTimer)}}else h(e)},[e,...r]),f}var m=n("9RZ+"),d=n("TSYQ"),p=n.n(d),f=e=>{var t=e.size,n=e.inline,l=e.text,c=void 0===l?"\u52a0\u8f7d\u4e2d":l,s=e.full,d=e.dark,f=e.show,h=void 0===f||f,v=e.className,E=e.loadingDelay,g=void 0===E?0:E,B=Object(a["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),y=u(h,g);return o.a.createElement(m["a"],Object(i["a"])({toggle:y,type:"fade",mountOnEnter:!0,unmountOnExit:!0},B,{config:m["c"].stiff,className:p()(v,"fr-spin",{["__".concat(t)]:!!t,__inline:n,__full:s,__dark:d})}),o.a.createElement(r["WindmillIcon"],{className:"fr-spin_unit"}),c&&o.a.createElement("span",{className:"fr-spin_text"},c,o.a.createElement("span",{className:"fr-spin_ellipsis"})))};t["a"]=f},kr9X:function(e,t,n){"use strict";var i=n("Ctpu"),a=n("Jiyh");n.o(a,"If")&&n.d(t,"If",(function(){return a["If"]})),n.o(a,"Switch")&&n.d(t,"Switch",(function(){return a["Switch"]})),n.o(a,"Toggle")&&n.d(t,"Toggle",(function(){return a["Toggle"]})),n.d(t,"If",(function(){return i["a"]})),n.d(t,"Switch",(function(){return i["b"]})),n.d(t,"Toggle",(function(){return i["c"]}));var l=i["d"];l.If=i["a"],l.Toggle=i["c"],l.Switch=i["b"],t["default"]=l},"pF+1":function(e,t,n){},tU1D:function(e,t,n){},uVtn:function(e,t,n){"use strict";n("QjBK"),n("BO4J");var i=n("B68Z");n.d(t,"default",(function(){return i["a"]}))}}]);