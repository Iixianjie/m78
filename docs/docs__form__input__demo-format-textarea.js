(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{"2Ubi":function(e,t,n){"use strict";n("sV0e");var a=n("q9w6");n.d(t,"Input",(function(){return a["a"]}));n("peN0");var r=n("gN1c");n.d(t,"formatMoney",(function(){return r["b"]}))},eXs7:function(e,t,n){},gN1c:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return u}));var a={phone:{delimiter:" ",pattern:"3,4",lastRepeat:!0},idCard:{delimiter:" ",pattern:"3,3,4",lastRepeat:!0},money:{delimiter:"'",pattern:"5,3",lastRepeat:!0},bankCard:{delimiter:" ",pattern:"3,4",lastRepeat:!0}};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"'",n=e.indexOf(".");if(-1===n)return e;var a=e.slice(0,n-1),r=e.slice(n-1).replace(new RegExp(t,"g"),"");return a+r}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=e.replace(/[^(0-9|.)]/g,""),"."===e[0]&&(e=e.slice(1));var t=e.match(/(\.)/g);if(t&&t.length>1){var n=e.indexOf("."),a=e.slice(0,n+1),r=e.slice(n+1).replace(".","");e=a+r}return e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[\D]/g,"")}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[\W]/g,"")}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.slice(0,t)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Number(e);return Number.isNaN(a)?e:n&&a<t||!n&&a>t?String(t):e}},peN0:function(e,t){},q9w6:function(e,t,n){"use strict";var a=n("k1fw"),r=n("tJVT"),i=n("PpiC"),o=n("q1tI"),c=n.n(o),l=n("Rz6r"),u=n("1p7j"),s=n("uVtn"),m=n("kr9X"),d=n("K3qG"),f=n("iuhU"),p=n("zdPv"),v=n("9RZ+"),b=n("hEdC"),g=n("gN1c"),h=c.a.forwardRef((e,t)=>{var n=e.className,h=e.style,O=e.disabled,j=void 0!==O&&O,w=e.readOnly,E=void 0!==w&&w,x=e.loading,_=void 0!==x&&x,y=e.blockLoading,C=void 0!==y&&y,N=e.type,S=void 0===N?"text":N,R=e.size,I=e.allowClear,k=void 0===I||I,D=e.onFocus,B=void 0===D?d["f"]:D,P=e.onBlur,z=void 0===P?d["f"]:P,F=e.onKeyDown,L=void 0===F?d["f"]:F,V=e.onPressEnter,q=void 0===V?d["f"]:V,A=e.value,K=e.defaultValue,T=e.onChange,J=e.status,M=e.notBorder,U=e.underline,X=e.format,G=e.formatPattern,H=e.formatDelimiter,W=void 0===H?" ":H,Z=e.formatRepeat,Q=void 0!==Z&&Z,Y=e.formatLastRepeat,$=void 0!==Y&&Y,ee=e.formatter,te=e.parser,ne=e.maxLength,ae=e.min,re=e.max,ie=e.search,oe=void 0!==ie&&ie,ce=e.onSearch,le=void 0===ce?d["f"]:ce,ue=e.prefix,se=e.suffix,me=e.prefixBtn,de=e.suffixBtn,fe=e.textArea,pe=e.autoSize,ve=void 0===pe||pe,be=e.charCount,ge=void 0!==be&&be,he=e.innerRef,Oe=e.onClear,je=Object(i["a"])(e,["className","style","disabled","readOnly","loading","blockLoading","type","size","allowClear","onFocus","onBlur","onKeyDown","onPressEnter","value","defaultValue","onChange","status","notBorder","underline","format","formatPattern","formatDelimiter","formatRepeat","formatLastRepeat","formatter","parser","maxLength","min","max","search","onSearch","prefix","suffix","prefixBtn","suffixBtn","textArea","autoSize","charCount","innerRef","onClear"]);Object(d["f"])(A,K,T);var we=Object(o["useMemo"])(()=>{if(X&&g["a"][X]){var e=g["a"][X],t=e.pattern,n=Object(i["a"])(e,["pattern"]);return[t,n]}return!!G&&(!!d["D"].test(G)&&[G,{delimiter:W,repeat:Q,lastRepeat:$}])},[]),Ee=Object(p["useSelf"])({hasComposing:!1}),xe=Object(o["useMemo"])(()=>X,[]),_e=Object(p["useFormState"])(e,""),ye=Object(r["a"])(_e,2),Ce=ye[0],Ne=ye[1],Se=Object(o["useState"])(""),Re=Object(r["a"])(Se,2),Ie=Re[0],ke=Re[1],De=Object(o["useState"])(!1),Be=Object(r["a"])(De,2),Pe=Be[0],ze=Be[1],Fe=Object(p["useDerivedStateFromProps"])(j),Le=Object(r["a"])(Fe,1),Ve=Le[0],qe=Object(p["useDerivedStateFromProps"])(E),Ae=Object(r["a"])(qe,1),Ke=Ae[0],Te=Object(p["useDerivedStateFromProps"])(_),Je=Object(r["a"])(Te,1),Me=Je[0],Ue=Object(p["useDerivedStateFromProps"])(C),Xe=Object(r["a"])(Ue,1),Ge=Xe[0],He=Object(p["useDerivedStateFromProps"])(S),We=Object(r["a"])(He,2),Ze=We[0],Qe=We[1];Object(o["useEffect"])(()=>{"money"===xe&&Qe("number")},[xe]),Object(o["useEffect"])(()=>{"number"!==Ze&&"integer"!==Ze&&(Object(d["w"])(ae)||Object(d["w"])(re))&&Qe("number")},[ae,re]);var Ye=Object(o["useRef"])(null),$e=he||Ye;Object(o["useImperativeHandle"])(t,()=>({el:$e.current}));var et=Object(o["useRef"])();function tt(e){Ve||Ke||(B(e),ze(!0))}function nt(e){z(e),ze(!1)}function at(e){L(e),13===e.keyCode&&(ct(),q(e))}function rt(){Qe(e=>"password"===e?"text":"password")}function it(t){var n=t.target,a=n.value,r=n.selectionStart,i=n.value.length;if(!Ee.hasComposing){var o,c=ut(a);if("value"in e)dt(Ce,!0),null===(o=e.onChange)||void 0===o||o.call(e,c);else dt(c);"number"===typeof r&&n.setSelectionRange&&setTimeout(()=>{var e=n.value.length-i;n.setSelectionRange(r+e,r+e)}),lt()}}function ot(){dt(""),null===Oe||void 0===Oe||Oe(),setTimeout(()=>{ct(),lt()}),$e.current.focus()}function ct(){le($e.current.value)}function lt(){if(fe&&ve&&et.current){var e=$e.current;et.current.value=Object(d["w"])(ne)?Object(g["e"])(e.value,ne):e.value,ke("".concat(et.current.scrollHeight,"px"))}}function ut(e){var t,n=we?e.replace(new RegExp(null===we||void 0===we||null===(t=we[1])||void 0===t?void 0:t.delimiter,"g"),""):e;return"number"===Ze&&(n=Object(g["f"])(n)),"integer"===Ze&&(n=Object(g["d"])(n)),"general"===S&&(n=Object(g["c"])(n)),Object(d["w"])(ne)&&(n=Object(g["e"])(n,ne)),Object(d["w"])(ae)&&(n=Object(g["g"])(n,ae)),Object(d["w"])(re)&&(n=Object(g["g"])(n,re,!1)),te?te(n):n}function st(e){return"number"===e||"integer"===e?"tel":e}function mt(e){var t=we&&e?Object(d["g"])(e,...we):e;return we&&"money"===xe&&(t=Object(g["b"])(t)),ee?ee(t):t}function dt(e,t){!t&&Ne(e);var n=mt(e);n!==$e.current.value&&($e.current.value=mt(e))}Object(o["useEffect"])(()=>{if(fe&&ve){et.current=$e.current.cloneNode(),et.current.style.position="absolute",et.current.style.visibility="hidden";var e=$e.current.parentNode;e&&e.appendChild(et.current),lt()}},[]),Object(b["a"])(()=>{dt(Ce||"",!0)},[Ce]);var ft=Ve||Ge,pt=k&&Ce&&Ce.length>3&&!ft&&!Ke;return c.a.createElement("span",{className:Object(f["a"])("m78-input_wrap",n,J&&"__".concat(J),R&&"__".concat(R),{"__not-border":!fe&&M,__underline:!fe&&U,__focus:Pe,__disabled:ft,__readonly:Ke,__matter:"money"===X,__textarea:fe}),style:h},c.a.createElement(m["If"],{when:me&&!fe},()=>c.a.cloneElement(me,{className:"m78-input_prefix-btn"})),c.a.createElement(m["If"],{when:ue&&!fe},c.a.createElement("span",{className:"m78-input_prefix"},ue)),c.a.createElement(fe?"textarea":"input",Object(a["a"])(Object(a["a"])({},je),{},{ref:$e,className:"m78-input",type:st(Ze),onFocus:tt,onBlur:nt,onKeyDown:at,disabled:ft,readOnly:Ke,defaultValue:mt(Ce),onChange:it,onCompositionStart(){Ee.hasComposing=!0},onCompositionEnd(e){Ee.hasComposing=!1,it(e)},style:fe?{height:Ie,overflow:ve?"hidden":"auto",resize:ve?"none":void 0}:{}})),(Me||Ge)&&c.a.createElement(u["a"],{className:"m78-input_loading",size:"small",text:"",full:Ge}),c.a.createElement(m["If"],{when:pt},c.a.createElement(l["CloseCircleOutlined"],{onClick:ot,className:"m78-input_icon m78-input_icon-clear"})),c.a.createElement(m["If"],{when:"password"===S&&!fe},"password"===Ze?c.a.createElement(l["EyeOutlined"],{onClick:rt,className:"m78-input_icon"}):c.a.createElement(l["EyeInvisibleOutlined"],{onClick:rt,className:"m78-input_icon"})),c.a.createElement(m["If"],{when:se&&!fe},c.a.createElement("span",{className:"m78-input_suffix"},se)),c.a.createElement(m["If"],{when:(fe||ge)&&Ce},()=>c.a.createElement("span",{className:"m78-input_tip-text"},Ce.length,ne?"/".concat(ne):"\u5b57")),c.a.createElement(v["TransitionBase"],{style:{position:"relative"},toggle:oe&&!!Ce&&!fe,mountOnEnter:!0,appear:!1,from:{width:0,left:6},to:{width:28,left:0}},c.a.createElement(s["a"],{className:"m78-input_search-icon",icon:!0,win:!0,size:"small",onClick:ct},c.a.createElement(l["SearchOutlined"],null))),c.a.createElement(m["If"],{when:de&&!fe},()=>c.a.cloneElement(de,{className:"m78-input_suffix-btn"})))});h.displayName="FrInput",t["a"]=h},sV0e:function(e,t,n){"use strict";n("iCBh"),n("eXs7")},uuGS:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("2Ubi"),o=()=>r.a.createElement("div",{style:{maxWidth:576}},r.a.createElement("div",{className:"mt-16"},r.a.createElement(i["Input"],{placeholder:"\u591a\u884c\u8f93\u5165+\u6700\u5927\u957f\u5ea6+\u81ea\u52a8\u8ba1\u7b97\u9ad8\u5ea6",textArea:!0,maxLength:400,status:"error"})),r.a.createElement("div",{className:"mt-16"},r.a.createElement(i["Input"],{placeholder:"\u5173\u95ed\u81ea\u52a8\u9ad8\u5ea6",textArea:!0,autoSize:!1,status:"success"})));t["default"]=o}}]);