(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[140],{"2Ubi":function(e,t,a){"use strict";a("sV0e");var n=a("q9w6");a.d(t,"Input",(function(){return n["a"]}));a("peN0");var r=a("gN1c");a.d(t,"formatMoney",(function(){return r["b"]}))},eXs7:function(e,t,a){},g6WJ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("2Ubi"),c=a("uVtn"),i=()=>r.a.createElement("div",null,r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9",autoFocus:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u641c\u7d22\u6846",search:!0,onSearch:e=>console.log(e)})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u524d\u7f6e\u4e0e\u540e\u7f6e\u5185\u5bb9",prefix:"\ud83c\udf40",suffix:"\u2728"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u4efb\u610f\u5408\u6cd5\u7684ReactNode",prefix:"\u90ae\u7bb1",suffix:"@qq.com"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u4e00\u6bb5\u5bc6\u7801",type:"password"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u52a0\u8f7d\u72b6\u6001",loading:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u963b\u585e\u578b\u52a0\u8f7d",blockLoading:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{defaultValue:"readOnly",readOnly:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u7981\u7528",type:"text",disabled:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u5f3a\u8c03",status:"info"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u6210\u529f",status:"success"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u8b66\u544a",status:"warning"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u5931\u8d25",status:"error"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u6211\u5f88\u5c0f",size:"small",suffix:"\u4e00\u5bb6\u4eba"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u521a\u597d\u591f\u7528",suffix:"\u6700\u91cd\u8981\u7684"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u6211\u8d85\u5927",size:"large",suffix:"\u662f\u6574\u6574\u9f50\u9f50"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u8bf7\u8f93\u5165\u5546\u54c1\u91d1\u989d",type:"number",size:"big",prefix:"\uffe5",format:"money"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{suffixBtn:r.a.createElement(c["a"],{color:"primary"},"\u540e\u7f6e\u6309\u94ae123")})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{prefixBtn:r.a.createElement(c["a"],{color:"primary"},"\u524d\u7f6e\u6309\u94ae")})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u65e0\u8fb9\u6846",notBorder:!0})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(l["Input"],{placeholder:"\u4e0b\u8fb9\u6846",underline:!0,status:"error"})));t["default"]=i},gN1c:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return s}));var n={phone:{delimiter:" ",pattern:"3,4",lastRepeat:!0},idCard:{delimiter:" ",pattern:"3,3,4",lastRepeat:!0},money:{delimiter:"'",pattern:"5,3",lastRepeat:!0},bankCard:{delimiter:" ",pattern:"3,4",lastRepeat:!0}};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"'",a=e.indexOf(".");if(-1===a)return e;var n=e.slice(0,a-1),r=e.slice(a-1).replace(new RegExp(t,"g"),"");return n+r}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=e.replace(/[^(0-9|.)]/g,""),"."===e[0]&&(e=e.slice(1));var t=e.match(/(\.)/g);if(t&&t.length>1){var a=e.indexOf("."),n=e.slice(0,a+1),r=e.slice(a+1).replace(".","");e=n+r}return e}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[\D]/g,"")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[\W]/g,"")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.slice(0,t)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Number(e);return Number.isNaN(n)?e:a&&n<t||!a&&n>t?String(t):e}},peN0:function(e,t){},q9w6:function(e,t,a){"use strict";var n=a("k1fw"),r=a("tJVT"),l=a("PpiC"),c=a("q1tI"),i=a.n(c),o=a("Rz6r"),s=a("1p7j"),u=a("uVtn"),m=a("kr9X"),d=a("K3qG"),p=a("iuhU"),f=a("zdPv"),v=a("9RZ+"),b=a("hEdC"),E=a("gN1c"),h=i.a.forwardRef((e,t)=>{var a=e.className,h=e.style,g=e.disabled,O=void 0!==g&&g,j=e.readOnly,N=void 0!==j&&j,w=e.loading,x=void 0!==w&&w,y=e.blockLoading,I=void 0!==y&&y,_=e.type,C=void 0===_?"text":_,R=e.size,S=e.allowClear,B=void 0===S||S,k=e.onFocus,z=void 0===k?d["f"]:k,D=e.onBlur,F=void 0===D?d["f"]:D,P=e.onKeyDown,V=void 0===P?d["f"]:P,q=e.onPressEnter,L=void 0===q?d["f"]:q,J=e.value,K=e.defaultValue,T=e.onChange,M=e.status,U=e.notBorder,X=e.underline,A=e.format,H=e.formatPattern,W=e.formatDelimiter,G=void 0===W?" ":W,Z=e.formatRepeat,Q=void 0!==Z&&Z,Y=e.formatLastRepeat,$=void 0!==Y&&Y,ee=e.formatter,te=e.parser,ae=e.maxLength,ne=e.min,re=e.max,le=e.search,ce=void 0!==le&&le,ie=e.onSearch,oe=void 0===ie?d["f"]:ie,se=e.prefix,ue=e.suffix,me=e.prefixBtn,de=e.suffixBtn,pe=e.textArea,fe=e.autoSize,ve=void 0===fe||fe,be=e.charCount,Ee=void 0!==be&&be,he=e.innerRef,ge=e.onClear,Oe=Object(l["a"])(e,["className","style","disabled","readOnly","loading","blockLoading","type","size","allowClear","onFocus","onBlur","onKeyDown","onPressEnter","value","defaultValue","onChange","status","notBorder","underline","format","formatPattern","formatDelimiter","formatRepeat","formatLastRepeat","formatter","parser","maxLength","min","max","search","onSearch","prefix","suffix","prefixBtn","suffixBtn","textArea","autoSize","charCount","innerRef","onClear"]);Object(d["f"])(J,K,T);var je=Object(c["useMemo"])(()=>{if(A&&E["a"][A]){var e=E["a"][A],t=e.pattern,a=Object(l["a"])(e,["pattern"]);return[t,a]}return!!H&&(!!d["D"].test(H)&&[H,{delimiter:G,repeat:Q,lastRepeat:$}])},[]),Ne=Object(f["useSelf"])({hasComposing:!1}),we=Object(c["useMemo"])(()=>A,[]),xe=Object(f["useFormState"])(e,""),ye=Object(r["a"])(xe,2),Ie=ye[0],_e=ye[1],Ce=Object(c["useState"])(""),Re=Object(r["a"])(Ce,2),Se=Re[0],Be=Re[1],ke=Object(c["useState"])(!1),ze=Object(r["a"])(ke,2),De=ze[0],Fe=ze[1],Pe=Object(f["useDerivedStateFromProps"])(O),Ve=Object(r["a"])(Pe,1),qe=Ve[0],Le=Object(f["useDerivedStateFromProps"])(N),Je=Object(r["a"])(Le,1),Ke=Je[0],Te=Object(f["useDerivedStateFromProps"])(x),Me=Object(r["a"])(Te,1),Ue=Me[0],Xe=Object(f["useDerivedStateFromProps"])(I),Ae=Object(r["a"])(Xe,1),He=Ae[0],We=Object(f["useDerivedStateFromProps"])(C),Ge=Object(r["a"])(We,2),Ze=Ge[0],Qe=Ge[1];Object(c["useEffect"])(()=>{"money"===we&&Qe("number")},[we]),Object(c["useEffect"])(()=>{"number"!==Ze&&"integer"!==Ze&&(Object(d["w"])(ne)||Object(d["w"])(re))&&Qe("number")},[ne,re]);var Ye=Object(c["useRef"])(null),$e=he||Ye;Object(c["useImperativeHandle"])(t,()=>({el:$e.current}));var et=Object(c["useRef"])();function tt(e){qe||Ke||(z(e),Fe(!0))}function at(e){F(e),Fe(!1)}function nt(e){V(e),13===e.keyCode&&(it(),L(e))}function rt(){Qe(e=>"password"===e?"text":"password")}function lt(t){var a=t.target,n=a.value,r=a.selectionStart,l=a.value.length;if(!Ne.hasComposing){var c,i=st(n);if("value"in e)dt(Ie,!0),null===(c=e.onChange)||void 0===c||c.call(e,i);else dt(i);"number"===typeof r&&a.setSelectionRange&&setTimeout(()=>{var e=a.value.length-l;a.setSelectionRange(r+e,r+e)}),ot()}}function ct(){dt(""),null===ge||void 0===ge||ge(),setTimeout(()=>{it(),ot()}),$e.current.focus()}function it(){oe($e.current.value)}function ot(){if(pe&&ve&&et.current){var e=$e.current;et.current.value=Object(d["w"])(ae)?Object(E["e"])(e.value,ae):e.value,Be("".concat(et.current.scrollHeight,"px"))}}function st(e){var t,a=je?e.replace(new RegExp(null===je||void 0===je||null===(t=je[1])||void 0===t?void 0:t.delimiter,"g"),""):e;return"number"===Ze&&(a=Object(E["f"])(a)),"integer"===Ze&&(a=Object(E["d"])(a)),"general"===C&&(a=Object(E["c"])(a)),Object(d["w"])(ae)&&(a=Object(E["e"])(a,ae)),Object(d["w"])(ne)&&(a=Object(E["g"])(a,ne)),Object(d["w"])(re)&&(a=Object(E["g"])(a,re,!1)),te?te(a):a}function ut(e){return"number"===e||"integer"===e?"tel":e}function mt(e){var t=je&&e?Object(d["g"])(e,...je):e;return je&&"money"===we&&(t=Object(E["b"])(t)),ee?ee(t):t}function dt(e,t){!t&&_e(e);var a=mt(e);a!==$e.current.value&&($e.current.value=mt(e))}Object(c["useEffect"])(()=>{if(pe&&ve){et.current=$e.current.cloneNode(),et.current.style.position="absolute",et.current.style.visibility="hidden";var e=$e.current.parentNode;e&&e.appendChild(et.current),ot()}},[]),Object(b["a"])(()=>{dt(Ie||"",!0)},[Ie]);var pt=qe||He,ft=B&&Ie&&Ie.length>3&&!pt&&!Ke;return i.a.createElement("span",{className:Object(p["a"])("m78-input_wrap",a,M&&"__".concat(M),R&&"__".concat(R),{"__not-border":!pe&&U,__underline:!pe&&X,__focus:De,__disabled:pt,__readonly:Ke,__matter:"money"===A,__textarea:pe}),style:h},i.a.createElement(m["If"],{when:me&&!pe},()=>i.a.cloneElement(me,{className:"m78-input_prefix-btn"})),i.a.createElement(m["If"],{when:se&&!pe},i.a.createElement("span",{className:"m78-input_prefix"},se)),i.a.createElement(pe?"textarea":"input",Object(n["a"])(Object(n["a"])({},Oe),{},{ref:$e,className:"m78-input",type:ut(Ze),onFocus:tt,onBlur:at,onKeyDown:nt,disabled:pt,readOnly:Ke,defaultValue:mt(Ie),onChange:lt,onCompositionStart(){Ne.hasComposing=!0},onCompositionEnd(e){Ne.hasComposing=!1,lt(e)},style:pe?{height:Se,overflow:ve?"hidden":"auto",resize:ve?"none":void 0}:{}})),(Ue||He)&&i.a.createElement(s["a"],{className:"m78-input_loading",size:"small",text:"",full:He}),i.a.createElement(m["If"],{when:ft},i.a.createElement(o["CloseCircleOutlined"],{onClick:ct,className:"m78-input_icon m78-input_icon-clear"})),i.a.createElement(m["If"],{when:"password"===C&&!pe},"password"===Ze?i.a.createElement(o["EyeOutlined"],{onClick:rt,className:"m78-input_icon"}):i.a.createElement(o["EyeInvisibleOutlined"],{onClick:rt,className:"m78-input_icon"})),i.a.createElement(m["If"],{when:ue&&!pe},i.a.createElement("span",{className:"m78-input_suffix"},ue)),i.a.createElement(m["If"],{when:(pe||Ee)&&Ie},()=>i.a.createElement("span",{className:"m78-input_tip-text"},Ie.length,ae?"/".concat(ae):"\u5b57")),i.a.createElement(v["TransitionBase"],{style:{position:"relative"},toggle:ce&&!!Ie&&!pe,mountOnEnter:!0,appear:!1,from:{width:0,left:6},to:{width:28,left:0}},i.a.createElement(u["a"],{className:"m78-input_search-icon",icon:!0,win:!0,size:"small",onClick:it},i.a.createElement(o["SearchOutlined"],null))),i.a.createElement(m["If"],{when:de&&!pe},()=>i.a.cloneElement(de,{className:"m78-input_suffix-btn"})))});h.displayName="FrInput",t["a"]=h},sV0e:function(e,t,a){"use strict";a("iCBh"),a("eXs7")}}]);