(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[223],{"3owj":function(e,t,r){"use strict";r.r(t);var n=r("WmNS"),a=r.n(n),c=r("9og8"),s=r("tJVT"),i=r("q1tI"),o=r.n(i),u=r("LG7E"),p=r("K3qG"),l=r("zdPv"),h=r("gSkz"),w=r.n(h),d=5;function m(e){return new Promise((t,r)=>{setTimeout(()=>{Math.random()>.9?r():t(Array.from({length:e>=d?5:12}).map(()=>"\u7b2c".concat(e,"\u9875 - ").concat(Object(p["b"])())))},1e3)})}var f=()=>{var e=Object(l["useSetState"])({page:1,list:[]}),t=Object(s["a"])(e,2),r=t[0],n=t[1];function i(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark((function e(t){var c,s,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.isRefresh,s=void 0!==c&&c,i=s?r.page:r.page+1,e.next=4,m(i);case 4:return o=e.sent,n({page:i,list:[...r.list,...o]}),e.abrupt("return",o.length/12);case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var h=r.page/d;return o.a.createElement("div",null,o.a.createElement(u["Scroller"],{yProgress:1===h?void 0:h,onPullUp:i,onPullDown:function(){var e=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n({page:1,list:[]}),t(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),backTop:!0,hideScrollbar:!0,progressBar:!0,style:{width:300,height:400,border:"1px solid #ccc"}},r.list.map(e=>o.a.createElement("div",{key:e,className:w.a.Item},e))))};t["default"]=f}}]);