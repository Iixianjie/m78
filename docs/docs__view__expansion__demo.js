(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[207],{"/FQm":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return o}));var n=a("Kq/o"),c=576,r=1400,i=1800,l=2200,s=(n["b"].small,n["b"].large,n["b"].big,{onClick(e){e.stopPropagation()}});function o(e,t){throw new Error("M78 -> ".concat(t?"".concat(t," -> "):""," ").concat(e))}},"27lO":function(e,t,a){"use strict";a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return x}));a("iCBh"),a("pGBw");var n=a("k1fw"),c=a("PpiC"),r=a("q1tI"),i=a.n(r),l=a("zdPv"),s=a("iuhU"),o=i.a.createContext({checker:null,accordion:!1}),u=o.Provider;o.Consumer;function m(){return Object(r["useContext"])(o)}var d=e=>{var t=e.opens,a=e.defaultOpens,o=e.onChange,m=e.accordion,d=void 0!==m&&m,v=e.children,b=e.className,p=e.style,h=Object(c["a"])(e,["opens","defaultOpens","onChange","accordion","children","className","style"]),f=Object(r["useMemo"])(()=>{var n={onChange(e){null===o||void 0===o||o(e)}};return"opens"in e&&(n.value=t),"defaultOpens"in e&&(n.defaultValue=a),n},[e]),g=Object(l["useCheck"])(f),O=Object(n["a"])(Object(n["a"])({transition:!0,accordion:d},h),{},{checker:g});return i.a.createElement(u,{value:O},i.a.createElement("div",{className:Object(s["a"])("m78-expansion",!e.noStyle&&"__style",b),style:p},v))},v=d,b=a("0Owb"),p=a("tJVT"),h=a("K3qG"),f=a("uVtn"),g=a("Rz6r"),O=a("kr9X"),E=a("/FQm"),y=a("wEEd"),j=a("hvrV"),N=e=>{var t=m(),a=t.checker,o=t.accordion,u=Object(c["a"])(t,["checker","accordion"]),d=Object(r["useMemo"])(()=>{var t=e.name;return a&&t?Object(n["a"])(Object(n["a"])(Object(n["a"])({},u),e),{},{open:a.isChecked(t),onChange(n){var c;null===(c=e.onChange)||void 0===c||c.call(e,n),o?a.setChecked(n?[t]:[]):a.setCheckBy(t,n)}}):e},[u,e]),v=d.expandIconPosition,N=void 0===v?j["a"].left:v,x=d.headerNode,C=d.disabled,S=d.expandIcon,_=d.noStyle,w=d.transition,J=void 0===w||w,k=d.mountOnEnter,A=d.unmountOnExit,V=d.className,I=d.style,q=Object(l["useFormState"])(d,!1,{valueKey:"open",defaultValueKey:"defaultOpen"}),R=Object(p["a"])(q,2),K=R[0],M=R[1],T=Object(l["useSelf"])({firstOpen:K}),P=Object(l["useMeasure"])(),G=Object(p["a"])(P,2),U=G[0],z=G[1].height,B=Object(l["useMountExist"])({toggle:K,mountOnEnter:k,unmountOnExit:A,exitDelay:800}),D=Object(p["a"])(B,1),F=D[0],W=Object(y["useSpring"])({height:K?z:0,config:Object(n["a"])(Object(n["a"])({},y["config"].stiff),{},{clamp:!0}),immediate:!J||T.firstOpen,onRest(){T.firstOpen=!1}});function H(){C||M(e=>!e)}function Q(e){return Object(h["v"])(S)?S(K,e):S}function L(){if(null===x)return null;if(i.a.isValidElement(x))return i.a.cloneElement(x,{onClick:H});var t=Object(s["a"])("m78-expansion_header-leading",{__right:N===j["a"].right,__open:K});return i.a.createElement("div",{className:"m78-expansion_header",onClick:H},i.a.createElement(O["If"],{when:N===j["a"].left||N===j["a"].right},Q(t)||i.a.createElement("div",{className:t},i.a.createElement(g["CaretRightOutlined"],null))),i.a.createElement("div",{className:"m78-expansion_header-body"},e.header),e.actions&&i.a.createElement("div",Object(b["a"])({className:"m78-expansion_header-action"},E["e"]),e.actions))}return i.a.createElement("div",{className:Object(s["a"])("m78-expansion_item",V,{__active:K,__disabled:C,__style:!_}),style:I},N===j["a"].bottom&&(Q("m78-expansion_bottom-flag")||i.a.createElement("div",{title:K?"\u6536\u8d77":"\u5c55\u5f00",className:"m78-expansion_bottom-flag",onClick:H},i.a.createElement(f["a"],{text:!0},K?i.a.createElement(g["CaretUpOutlined"],null):i.a.createElement(g["CaretDownOutlined"],null)))),L(),i.a.createElement(y["animated"].div,{className:"m78-expansion_content-wrap",style:W},i.a.createElement("div",{className:"m78-expansion_content"},i.a.createElement("div",{className:"m78-expansion_calc-node",ref:U}),F&&e.children)))},x=N},"5AbO":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),c=a("q1tI"),r=a.n(c),i=a("27lO"),l=a("C5yf"),s=a("Rz6r"),o=a("eg8z"),u=o["a"].slice(0,4),m=()=>{var e=Object(c["useState"])(["Dart"]),t=Object(n["a"])(e,2),a=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"\u975e\u53d7\u63a7\u6a21\u5f0f"),r.a.createElement(i["a"],{defaultOpens:["Vanilla JS"]},u.map(e=>r.a.createElement(i["b"],{key:e.label,name:e.label,header:e.label},e.text))),r.a.createElement(l["Spacer"],{height:60}),r.a.createElement("h3",null,"\u53d7\u63a7\u6a21\u5f0f"),r.a.createElement(i["a"],{opens:a,onChange:o},u.map(e=>r.a.createElement(i["b"],{key:e.label,name:e.label,header:e.label},e.text))),r.a.createElement(l["Spacer"],{height:60}),r.a.createElement("h3",null,"\u5e26\u64cd\u4f5c\u533a"),r.a.createElement(i["a"],null,u.map(e=>r.a.createElement(i["b"],{key:e.label,name:e.label,header:e.label,actions:r.a.createElement(s["SettingOutlined"],null)},e.text))))};t["default"]=m},"6WJu":function(e,t,a){"use strict";a("iCBh"),a("QyJt")},C5yf:function(e,t,a){"use strict";a("6WJu");var n=a("OnHz");a.d(t,"Grid",(function(){return n["a"]}));var c=a("cx4E");a.d(t,"AspectRatio",(function(){return c["a"]}));var r=a("tP0F");a.d(t,"Center",(function(){return r["a"]}));var i=a("LlIc");a.d(t,"Divider",(function(){return i["a"]}));var l=a("dEM7");a.d(t,"Spacer",(function(){return l["a"]}));var s=a("GmgH");a.d(t,"Tile",(function(){return s["a"]}));var o=a("Seep");a.d(t,"Column",(function(){return o["a"]})),a.d(t,"Flex",(function(){return o["b"]})),a.d(t,"Row",(function(){return o["c"]}));a("D7SN")},D7SN:function(e,t){},GmgH:function(e,t,a){"use strict";var n=a("0Owb"),c=a("PpiC"),r=a("q1tI"),i=a.n(r),l=a("C5yf"),s=a("iuhU"),o=e=>{var t=e.className,a=e.title,r=e.desc,o=e.leading,u=e.trailing,m=e.crossAlign,d=e.extra,v=Object(c["a"])(e,["className","title","desc","leading","trailing","crossAlign","extra"]);return i.a.createElement(l["Row"],Object(n["a"])({},v,{className:Object(s["a"])("m78-tile",t),crossAlign:m}),o&&i.a.createElement("div",{className:"m78-tile_leading"},o),i.a.createElement("div",{className:"m78-tile_main"},a&&i.a.createElement("div",{className:"m78-tile_title"},a),r&&i.a.createElement("div",{className:"m78-tile_desc"},r)),u&&i.a.createElement("div",{className:"m78-tile_trailing"},u),d)};t["a"]=o},LlIc:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=e=>{var t=e.vertical,a=e.width,n=e.height,i=e.color,l=e.margin,s=void 0===l?12:l,o=t?"0 ".concat(s,"px"):"".concat(s,"px 0");return c.a.createElement("div",{className:Object(r["a"])("m78-divider",t&&"__vertical"),style:{width:a,height:n,backgroundColor:i,margin:o}})};t["a"]=i},OnHz:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=a("K3qG"),l=a("C5yf"),s={count:3,children:[],aspectRatio:1,border:!0},o=e=>{var t=e.count,a=e.children,n=e.crossSpacing,s=e.mainSpacing,o=e.spacing,u=e.size,m=e.aspectRatio,d=e.complete,v=void 0===d||d,b=e.border,p=e.borderColor,h=e.className,f=e.style,g=e.contClassName,O=e.contStyle,E=Object(i["r"])(a)?[...a]:[a],y=[...E],j=n||o,N=s||o,x=y.length%t,C=100/t;if(v&&0!==x&&t-x>0)for(var S=0;S<t-x;S++)E.push(c.a.createElement("div",null));return c.a.createElement("div",{className:Object(r["a"])("m78-grid",h),style:f},E.map((e,a)=>{var n=a+1,i=n%t===0,s=(n-1)%t===0,o=a<t,d=y.length-n<(x||t),v=N&&!i,h=N?(t-1)*N/t:0;return c.a.createElement(u?"div":l["AspectRatio"],{ratio:m,key:a,style:{color:p,border:b?void 0:"none",width:N?"calc(".concat(C,"% - ").concat(h,"px)"):"".concat(C,"%"),height:u||void 0,marginBottom:!d&&j?j:void 0,marginRight:v?N:void 0},className:Object(r["a"])("m78-grid_item",{__topBorder:b&&(o||j),__leftBorder:b&&(s||N)})},c.a.createElement("div",{className:Object(r["a"])("m78-grid_cont",g),style:O},e))}))};o.defaultProps=s,t["a"]=o},QyJt:function(e,t,a){},Seep:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a("k1fw"),c=a("0Owb"),r=a("PpiC"),i=a("q1tI"),l=a.n(i),s=a("iuhU");function o(e,t){var a={};return e&&(a["m78-main-".concat(e)]=!0),t&&(a["m78-cross-".concat(t)]=!0),a}var u=e=>{var t=e.children,a=e.style,n=e.className,i=e.mainAlign,u=e.crossAlign,m=Object(r["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(c["a"])({},m,{className:Object(s["a"])("m78-column",n,o(i,u)),style:a}),t)},m=e=>{var t=e.children,a=e.style,n=e.className,i=e.mainAlign,u=e.crossAlign,m=void 0===u?"start":u,d=Object(r["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(c["a"])({},d,{className:Object(s["a"])("m78-row",n,o(i,m)),style:a}),t)},d=e=>{var t=e.flex,a=void 0===t?1:t,i=e.children,o=e.order,u=e.style,m=e.className,d=e.align,v=Object(r["a"])(e,["flex","children","order","style","className","align"]);return l.a.createElement("div",Object(c["a"])({},v,{className:Object(s["a"])(m,d&&"m78-self-".concat(d)),style:Object(n["a"])({flex:a,order:o},u)}),i)}},cx4E:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=e=>{var t=e.ratio,a=void 0===t?1:t,n=e.children,i=e.className,l=e.style;return c.a.createElement("div",{className:Object(r["a"])("m78-aspect-ratio",i),style:l},c.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*a,"%")}}),n)};t["a"]=i},dEM7:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=a("K3qG"),l=e=>{var t,a,n=e.width,s=e.height,o=e.children;if(n&&!s&&(t=n),s&&!n&&(a=s),a||t||(a=16),o&&Object(i["r"])(o)){var u=o.reduce((e,t,a)=>(e.push(t),a!==o.length-1&&e.push(c.a.createElement(l,{key:a+Math.random(),width:n,height:s})),e),[]);return u}return c.a.createElement("div",{className:Object(r["a"])("m78-spacer",!!t&&"__inline"),style:{width:t,height:a}})};t["a"]=l},eg8z:function(e,t,a){"use strict";t["a"]=[{label:"Vanilla JS",text:"\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\uff0c\u4f7f\u7528\u5e7f\u6cdb\u7684\u6846\u67b6"},{label:"Dart",text:"Dart\u662f\u9762\u5411\u5bf9\u8c61\u7684\u3001\u7c7b\u5b9a\u4e49\u7684\u3001\u5355\u7ee7\u627f\u7684\u8bed\u8a00\u3002\u5b83\u7684\u8bed\u6cd5\u7c7b\u4f3cC\u8bed\u8a00\uff0c\u53ef\u4ee5\u8f6c\u8bd1\u4e3aJavaScript\uff0c\u652f\u6301\u63a5\u53e3(interfaces)\u3001\u6df7\u5165(mixins)\u3001\u62bd\u8c61\u7c7b(abstract classes)\u3001\u5177\u4f53\u5316\u6cdb\u578b(reified generics)\u3001\u53ef\u9009\u7c7b\u578b(optional typing)\u548csound type system"},{label:"Node",text:"Node.js \u662f\u4e00\u4e2a\u57fa\u4e8e Chrome V8 \u5f15\u64ce\u7684 JavaScript \u8fd0\u884c\u73af\u5883\u3002 Node.js \u4f7f\u7528\u4e86\u4e00\u4e2a\u4e8b\u4ef6\u9a71\u52a8\u3001\u975e\u963b\u585e\u5f0f I/O \u7684\u6a21\u578b\u3002"},{label:"Kotlin",text:"Kotlin\u53ef\u4ee5\u7f16\u8bd1\u6210Java\u5b57\u8282\u7801\uff0c\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u6210JavaScript\uff0c\u65b9\u4fbf\u5728\u6ca1\u6709JVM\u7684\u8bbe\u5907\u4e0a\u8fd0\u884c\u3002\u9664\u6b64\u4e4b\u5916Kotlin\u8fd8\u53ef\u4ee5\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\u4ee3\u7801\u76f4\u63a5\u8fd0\u884c\u5728\u673a\u5668\u4e0a\uff08\u4f8b\u5982\u5d4c\u5165\u5f0f\u8bbe\u5907\u6216 iOS\uff09\u3002"},{label:"TypeScript",text:"TypeScript\u662f\u4e00\u79cd\u7531\u5fae\u8f6f\u5f00\u53d1\u7684\u5f00\u6e90\u3001\u8de8\u5e73\u53f0\u7684\u7f16\u7a0b\u8bed\u8a00\u3002\u5b83\u662fJavaScript\u7684\u8d85\u96c6\uff0c\u6700\u7ec8\u4f1a\u88ab\u7f16\u8bd1\u4e3aJavaScript\u4ee3\u7801\u3002TypeScript\u6dfb\u52a0\u4e86\u53ef\u9009\u7684\u9759\u6001\u7c7b\u578b\u7cfb\u7edf\u3001\u5f88\u591a\u5c1a\u672a\u6b63\u5f0f\u53d1\u5e03\u7684ECMAScript\u65b0\u7279\u6027\uff08\u5982\u88c5\u9970\u5668 [1] \uff09\u30022012\u5e7410\u6708\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86\u9996\u4e2a\u516c\u5f00\u7248\u672c\u7684TypeScript\uff0c2013\u5e746\u670819\u65e5\uff0c\u5728\u7ecf\u5386\u4e86\u4e00\u4e2a\u9884\u89c8\u7248\u4e4b\u540e\u5fae\u8f6f\u6b63\u5f0f\u53d1\u5e03\u4e86\u6b63\u5f0f\u7248TypeScript\u3002\u5f53\u524d\u6700\u65b0\u7248\u672c\u4e3aTypeScript4.0"},{label:"Kotlin",text:"Kotlin\u53ef\u4ee5\u7f16\u8bd1\u6210Java\u5b57\u8282\u7801\uff0c\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u6210JavaScript\uff0c\u65b9\u4fbf\u5728\u6ca1\u6709JVM\u7684\u8bbe\u5907\u4e0a\u8fd0\u884c\u3002\u9664\u6b64\u4e4b\u5916Kotlin\u8fd8\u53ef\u4ee5\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\u4ee3\u7801\u76f4\u63a5\u8fd0\u884c\u5728\u673a\u5668\u4e0a\uff08\u4f8b\u5982\u5d4c\u5165\u5f0f\u8bbe\u5907\u6216 iOS\uff09\u3002"},{label:"React",text:"\u7531\u4e8e React\u7684\u8bbe\u8ba1\u601d\u60f3\u6781\u5176\u72ec\u7279\uff0c\u5c5e\u4e8e\u9769\u547d\u6027\u521b\u65b0\uff0c\u6027\u80fd\u51fa\u4f17\uff0c\u4ee3\u7801\u903b\u8f91\u5374\u975e\u5e38\u7b80\u5355\u3002\u6240\u4ee5\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u5f00\u59cb\u5173\u6ce8\u548c\u4f7f\u7528\uff0c\u8ba4\u4e3a\u5b83\u53ef\u80fd\u662f\u5c06\u6765 Web \u5f00\u53d1\u7684\u4e3b\u6d41\u5de5\u5177\u3002"},{label:"Vue",text:"Vue (\u8bfb\u97f3 /vju\u02d0/\uff0c\u7c7b\u4f3c\u4e8e view) \u662f\u4e00\u5957\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u6e10\u8fdb\u5f0fJavaScript\u6846\u67b6\u3002\u4e0e\u5176\u5b83\u5927\u578b\u6846\u67b6\u4e0d\u540c\u7684\u662f\uff0cVue \u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u81ea\u5e95\u5411\u4e0a\u9010\u5c42\u5e94\u7528\u3002Vue \u7684\u6838\u5fc3\u5e93\u53ea\u5173\u6ce8\u89c6\u56fe\u5c42\uff0c\u65b9\u4fbf\u4e0e\u7b2c\u4e09\u65b9\u5e93\u6216\u65e2\u6709\u9879\u76ee\u6574\u5408\u3002"},{label:"Vue",text:"Vue (\u8bfb\u97f3 /vju\u02d0/\uff0c\u7c7b\u4f3c\u4e8e view) \u662f\u4e00\u5957\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u6e10\u8fdb\u5f0fJavaScript\u6846\u67b6\u3002\u4e0e\u5176\u5b83\u5927\u578b\u6846\u67b6\u4e0d\u540c\u7684\u662f\uff0cVue \u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u81ea\u5e95\u5411\u4e0a\u9010\u5c42\u5e94\u7528\u3002Vue \u7684\u6838\u5fc3\u5e93\u53ea\u5173\u6ce8\u89c6\u56fe\u5c42\uff0c\u65b9\u4fbf\u4e0e\u7b2c\u4e09\u65b9\u5e93\u6216\u65e2\u6709\u9879\u76ee\u6574\u5408\u3002"},{label:"Angular",text:'Angular (\u901a\u5e38\u662f\u6307 "Angular 2+" \u6216 "Angular v2 \u53ca\u66f4\u9ad8\u7248\u672c")\u3002\u662f\u4e00\u4e2a\u57fa\u4e8e TypeScript \u7684 \u5f00\u6e90 Web \u5e94\u7528\u6846\u67b6\uff0c \u7531 Google \u7684 Angular \u56e2\u961f\u4ee5\u53ca\u793e\u533a\u5171\u540c\u9886\u5bfc\u3002Angular \u662f\u7531 AngularJS \u7684\u540c\u4e00\u4e2a\u5f00\u53d1\u56e2\u961f\u5b8c\u5168\u91cd\u5199\u7684\u3002'},{label:"Java",text:"Java\u662f\u4e00\u95e8\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\uff0c\u4e0d\u4ec5\u5438\u6536\u4e86C++\u8bed\u8a00\u7684\u5404\u79cd\u4f18\u70b9\uff0c\u8fd8\u6452\u5f03\u4e86C++\u91cc\u96be\u4ee5\u7406\u89e3\u7684\u591a\u7ee7\u627f\u3001\u6307\u9488\u7b49\u6982\u5ff5\uff0c\u56e0\u6b64Java\u8bed\u8a00\u5177\u6709\u529f\u80fd\u5f3a\u5927\u548c\u7b80\u5355\u6613\u7528\u4e24\u4e2a\u7279\u5f81\u3002Java\u8bed\u8a00\u4f5c\u4e3a\u9759\u6001\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\u7684\u4ee3\u8868\uff0c\u6781\u597d\u5730\u5b9e\u73b0\u4e86\u9762\u5411\u5bf9\u8c61\u7406\u8bba\uff0c\u5141\u8bb8\u7a0b\u5e8f\u5458\u4ee5\u4f18\u96c5\u7684\u601d\u7ef4\u65b9\u5f0f\u8fdb\u884c\u590d\u6742\u7684\u7f16\u7a0b"},{label:"Wasm",text:"Java\u662f\u4e00\u95e8\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\uff0c\u4e0d\u4ec5\u5438\u6536\u4e86C++\u8bed\u8a00\u7684\u5404\u79cd\u4f18\u70b9\uff0c\u8fd8\u6452\u5f03\u4e86C++\u91cc\u96be\u4ee5\u7406\u89e3\u7684\u591a\u7ee7\u627f\u3001\u6307\u9488\u7b49\u6982\u5ff5\uff0c\u56e0\u6b64Java\u8bed\u8a00\u5177\u6709\u529f\u80fd\u5f3a\u5927\u548c\u7b80\u5355\u6613\u7528\u4e24\u4e2a\u7279\u5f81\u3002Java\u8bed\u8a00\u4f5c\u4e3a\u9759\u6001\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\u7684\u4ee3\u8868\uff0c\u6781\u597d\u5730\u5b9e\u73b0\u4e86\u9762\u5411\u5bf9\u8c61\u7406\u8bba\uff0c\u5141\u8bb8\u7a0b\u5e8f\u5458\u4ee5\u4f18\u96c5\u7684\u601d\u7ef4\u65b9\u5f0f\u8fdb\u884c\u590d\u6742\u7684\u7f16\u7a0b"}]},hvrV:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e["left"]="left",e["bottom"]="bottom",e["right"]="right"}(n||(n={}))},pGBw:function(e,t,a){},tP0F:function(e,t,a){"use strict";var n=a("k1fw"),c=a("q1tI"),r=a.n(c),i=a("iuhU"),l=e=>{var t=e.children,a=e.attach,c=e.className,l=e.style;return r.a.createElement("div",{className:Object(i["a"])("m78-center",c,l),style:Object(n["a"])({position:a?"absolute":void 0},l)},t)};t["a"]=l}}]);