(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[138],{XC7U:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("q9wp"),m=a("2Ubi"),o=a("uVtn"),i=()=>n.a.createElement(r["Form"],{onFinish:e=>{alert(JSON.stringify(e,null,4))}},n.a.createElement(r["Form"].Item,{label:"\u901a\u8fc7rules\u9a8c\u8bc1",name:"rules",rules:[{required:!0,max:10,min:2}]},n.a.createElement(m["Input"],{placeholder:"\u968f\u4fbf\u8f93\u5165\u70b9\u4ec0\u4e48"})),n.a.createElement(r["Form"].Item,{label:"\u901a\u8fc7flat props\u9a8c\u8bc1",name:"flat",type:"string",required:!0,max:10,min:2},n.a.createElement(m["Input"],{placeholder:"\u968f\u4fbf\u8f93\u5165\u70b9\u4ec0\u4e48"})),n.a.createElement(r["Form"].Item,{label:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u5668",name:"validator",validator:(e,t)=>new Promise((e,a)=>{t||a("\u8be5\u9879\u5fc5\u586b"),(t.length>10||t.length<2)&&a("\u957f\u5ea6\u4e3a2-10\u4e4b\u95f4"),e()})},n.a.createElement(m["Input"],{placeholder:"\u968f\u4fbf\u8f93\u5165\u70b9\u4ec0\u4e48"})),n.a.createElement(r["Form"].Item,{label:"\u5f02\u6b65\u9a8c\u8bc1\u5668",name:"asyncValidator",validator:(e,t)=>new Promise((e,a)=>{setTimeout(()=>{t?((t.length>10||t.length<2)&&a("\u957f\u5ea6\u4e3a2-10\u4e4b\u95f4"),e()):a("\u8be5\u9879\u5fc5\u586b")},1e3)})},n.a.createElement(m["Input"],{placeholder:"\u968f\u4fbf\u8f93\u5165\u70b9\u4ec0\u4e48"})),n.a.createElement(r["Form"].Actions,null,n.a.createElement(o["a"],{type:"submit",color:"blue"},"\u63d0\u4ea4")));t["default"]=i}}]);