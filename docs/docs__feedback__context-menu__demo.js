(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{"/suJ":function(e,t){},"1wBN":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("0Owb"),c=a("tJVT"),r=a("q1tI"),i=a.n(r),l=a("UBUc"),s=a("C5yf"),o=a("iuhU"),m=a("K3qG"),u=e=>{var t=e.content;return i.a.createElement("div",{onContextMenu:e=>e.preventDefault(),className:Object(o["a"])("m78-context-menu",e.classNamePassToCustomer,e.stylePassToCustomer),onClick:()=>e.setShow(!1)},Object(m["v"])(t)?t(e):t)},d=e=>{var t=e.content,a=e.customer,n=e.className,s=e.style,o=e.children,m=Object(r["useState"])(),d=Object(c["a"])(m,2),v=d[0],f=d[1],h=Object(r["useState"])(!1),b=Object(c["a"])(h,2),g=b[0],E=b[1];function p(e){return e.preventDefault(),f({left:e.clientX,top:e.clientY,right:e.clientX,bottom:e.clientY}),!g&&E(!0),!1}return i.a.createElement(i.a.Fragment,null,i.a.createElement(l["a"],{show:g,type:"popper",target:v,trigger:"subClick",direction:l["b"].rightStart,offset:0,content:t,customer:a||u,onChange:E,classNamePassToCustomer:n,stylePassToCustomer:s}),i.a.cloneElement(o,{onContextMenu:p}))},v=e=>i.a.createElement(s["Tile"],Object(n["a"])({},e,{className:Object(o["a"])("m78-context-menu_item",e.className,e.disabled&&"__disabled")}));d.Item=v,t["b"]=d},"6WJu":function(e,t,a){"use strict";a("iCBh"),a("QyJt")},"6pIP":function(e,t,a){},C5yf:function(e,t,a){"use strict";a("6WJu");var n=a("OnHz");a.d(t,"Grid",(function(){return n["a"]}));var c=a("cx4E");a.d(t,"AspectRatio",(function(){return c["a"]}));var r=a("tP0F");a.d(t,"Center",(function(){return r["a"]}));var i=a("LlIc");a.d(t,"Divider",(function(){return i["a"]}));var l=a("dEM7");a.d(t,"Spacer",(function(){return l["a"]}));var s=a("GmgH");a.d(t,"Tile",(function(){return s["a"]}));var o=a("Seep");a.d(t,"Column",(function(){return o["a"]})),a.d(t,"Flex",(function(){return o["b"]})),a.d(t,"Row",(function(){return o["c"]}));a("D7SN")},D7SN:function(e,t){},GmgH:function(e,t,a){"use strict";var n=a("0Owb"),c=a("PpiC"),r=a("q1tI"),i=a.n(r),l=a("C5yf"),s=a("iuhU"),o=e=>{var t=e.className,a=e.title,r=e.desc,o=e.leading,m=e.trailing,u=e.crossAlign,d=e.extra,v=Object(c["a"])(e,["className","title","desc","leading","trailing","crossAlign","extra"]);return i.a.createElement(l["Row"],Object(n["a"])({},v,{className:Object(s["a"])("m78-tile",t),crossAlign:u}),o&&i.a.createElement("div",{className:"m78-tile_leading"},o),i.a.createElement("div",{className:"m78-tile_main"},a&&i.a.createElement("div",{className:"m78-tile_title"},a),r&&i.a.createElement("div",{className:"m78-tile_desc"},r)),m&&i.a.createElement("div",{className:"m78-tile_trailing"},m),d)};t["a"]=o},LlIc:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=e=>{var t=e.vertical,a=e.width,n=e.height,i=e.color,l=e.margin,s=void 0===l?12:l,o=t?"0 ".concat(s,"px"):"".concat(s,"px 0");return c.a.createElement("div",{className:Object(r["a"])("m78-divider",t&&"__vertical"),style:{width:a,height:n,backgroundColor:i,margin:o}})};t["a"]=i},OnHz:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=a("K3qG"),l=a("C5yf"),s={count:3,children:[],aspectRatio:1,border:!0},o=e=>{var t=e.count,a=e.children,n=e.crossSpacing,s=e.mainSpacing,o=e.spacing,m=e.size,u=e.aspectRatio,d=e.complete,v=void 0===d||d,f=e.border,h=e.borderColor,b=e.className,g=e.style,E=e.contClassName,p=e.contStyle,N=Object(i["r"])(a)?[...a]:[a],C=[...N],O=n||o,y=s||o,j=C.length%t,x=100/t;if(v&&0!==j&&t-j>0)for(var I=0;I<t-j;I++)N.push(c.a.createElement("div",null));return c.a.createElement("div",{className:Object(r["a"])("m78-grid",b),style:g},N.map((e,a)=>{var n=a+1,i=n%t===0,s=(n-1)%t===0,o=a<t,d=C.length-n<(j||t),v=y&&!i,b=y?(t-1)*y/t:0;return c.a.createElement(m?"div":l["AspectRatio"],{ratio:u,key:a,style:{color:h,border:f?void 0:"none",width:y?"calc(".concat(x,"% - ").concat(b,"px)"):"".concat(x,"%"),height:m||void 0,marginBottom:!d&&O?O:void 0,marginRight:v?y:void 0},className:Object(r["a"])("m78-grid_item",{__topBorder:f&&(o||O),__leftBorder:f&&(s||y)})},c.a.createElement("div",{className:Object(r["a"])("m78-grid_cont",E),style:p},e))}))};o.defaultProps=s,t["a"]=o},QyJt:function(e,t,a){},Seep:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a("k1fw"),c=a("0Owb"),r=a("PpiC"),i=a("q1tI"),l=a.n(i),s=a("iuhU");function o(e,t){var a={};return e&&(a["m78-main-".concat(e)]=!0),t&&(a["m78-cross-".concat(t)]=!0),a}var m=e=>{var t=e.children,a=e.style,n=e.className,i=e.mainAlign,m=e.crossAlign,u=Object(r["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(c["a"])({},u,{className:Object(s["a"])("m78-column",n,o(i,m)),style:a}),t)},u=e=>{var t=e.children,a=e.style,n=e.className,i=e.mainAlign,m=e.crossAlign,u=void 0===m?"start":m,d=Object(r["a"])(e,["children","style","className","mainAlign","crossAlign"]);return l.a.createElement("div",Object(c["a"])({},d,{className:Object(s["a"])("m78-row",n,o(i,u)),style:a}),t)},d=e=>{var t=e.flex,a=void 0===t?1:t,i=e.children,o=e.order,m=e.style,u=e.className,d=e.align,v=Object(r["a"])(e,["flex","children","order","style","className","align"]);return l.a.createElement("div",Object(c["a"])({},v,{className:Object(s["a"])(u,d&&"m78-self-".concat(d)),style:Object(n["a"])({flex:a,order:o},m)}),i)}},cx4E:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=e=>{var t=e.ratio,a=void 0===t?1:t,n=e.children,i=e.className,l=e.style;return c.a.createElement("div",{className:Object(r["a"])("m78-aspect-ratio",i),style:l},c.a.createElement("div",{className:"m78-aspect-ratio_scaffold",style:{paddingTop:"".concat(100*a,"%")}}),n)};t["a"]=i},dEM7:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("iuhU"),i=a("K3qG"),l=e=>{var t,a,n=e.width,s=e.height,o=e.children;if(n&&!s&&(t=n),s&&!n&&(a=s),a||t||(a=16),o&&Object(i["r"])(o)){var m=o.reduce((e,t,a)=>(e.push(t),a!==o.length-1&&e.push(c.a.createElement(l,{key:a+Math.random(),width:n,height:s})),e),[]);return m}return c.a.createElement("div",{className:Object(r["a"])("m78-spacer",!!t&&"__inline"),style:{width:t,height:a}})};t["a"]=l},kb3x:function(e,t,a){"use strict";a("tlNG");var n=a("1wBN");a.d(t,"ContextMenuItem",(function(){return n["a"]})),a.d(t,"ContextMenu",(function(){return n["b"]}));a("/suJ")},tP0F:function(e,t,a){"use strict";var n=a("k1fw"),c=a("q1tI"),r=a.n(c),i=a("iuhU"),l=e=>{var t=e.children,a=e.attach,c=e.className,l=e.style;return r.a.createElement("div",{className:Object(i["a"])("m78-center",c,l),style:Object(n["a"])({position:a?"absolute":void 0},l)},t)};t["a"]=l},tlNG:function(e,t,a){"use strict";a("iCBh"),a("6pIP")},uMxv:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),r=a("C5yf"),i=a("uVtn"),l=a("kb3x"),s=a("Kq/o"),o=()=>c.a.createElement("div",null,c.a.createElement(l["ContextMenu"],{content:c.a.createElement("div",null,c.a.createElement(l["ContextMenuItem"],{title:"\u67e5\u770b"}),c.a.createElement(l["ContextMenuItem"],{title:"\u5237\u65b0"}),c.a.createElement(l["ContextMenuItem"],{title:"\u6392\u5e8f\u65b9\u5f0f"}),c.a.createElement(l["ContextMenuItem"],{title:"\u901a\u8fc7VS CODE\u6253\u5f00",disabled:!0}),c.a.createElement(l["ContextMenuItem"],{title:"\u5206\u7ec4\u4f9d\u636e",trailing:"action"}),c.a.createElement(r["Divider"],null),c.a.createElement(l["ContextMenuItem"],{title:"\u2702 \u590d\u5236"}),c.a.createElement(l["ContextMenuItem"],{title:"\ud83d\udcdc \u7c98\u8d34"}),c.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaTXT"}),c.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaDOC",desc:"\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e\u5594"}),c.a.createElement(l["ContextMenuItem"],{title:"\u65b0\u5efaEXCEL"}))},c.a.createElement(i["a"],{size:s["d"].large},"\u9f20\u6807\u53f3\u952e\u70b9\u6211 \ud83d\ude1b")));t["default"]=o}}]);