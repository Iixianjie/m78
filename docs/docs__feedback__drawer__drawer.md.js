(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93,92],{"/FQm":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d}));var a=n("Kq/o"),r=576,o=1400,i=1800,c=2200,l=(a["b"].small,a["b"].large,a["b"].big,{onClick(e){e.stopPropagation()}});function d(e,t){throw new Error("M78 -> ".concat(t?"".concat(t," -> "):""," ").concat(e))}},"6RdY":function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));n("iCBh"),n("CiMt");var a=n("PpiC"),r=n("k1fw"),o=n("tJVT"),i=n("q1tI"),c=n.n(i),l=n("pMrh"),d=n("/FQm"),s=n("jNhd"),u=n("9RZ+"),m=n("zdPv"),f=n("wEEd"),g=n("iuhU"),w=n("LUSG"),v=n("M5fq"),h=n("+NKj"),p=n("hEdC"),b=n("sEfC"),E=n.n(b);function O(e,t){var n=e.props,a=e.modalSize,r=n.onRemove,c=n.onRemoveDelay,l=void 0===c?800:c,d=Object(o["a"])(a,2),s=d[0],u=d[1];Object(m["useLockBodyScroll"])(e.lockScroll&&e.show),Object(h["a"])(e.contRef,()=>{e.show&&(e.clickAwayClosable&&!e.mask||e.refState.shouldTriggerClose&&!e.refState.maskShouldShow)&&setTimeout(t.close,150)}),Object(p["a"])(()=>{e.show||r&&setTimeout(r,l)},[e.show]),Object(i["useEffect"])(()=>{t.calcPos()},[s,u]),Object(i["useEffect"])(()=>{var e=E()(()=>{t.calcPos()},500);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[])}var y=n("WmNS"),j=n.n(y),N=n("9og8");function S(e,t){var n=Object(o["a"])(t,2),a=n[0],r=n[1],i=Object(o["a"])(e,2),c=i[0],l=i[1],d=a*c,s=r*l;return[d,s]}var D="FR_LAST_CLICK_POSITION_X",C="FR_LAST_CLICK_POSITION_Y";function k(){return window[D]}function x(){return window[C]}var B=null;function P(e){B&&clearTimeout(B);var t=e.x||e.screenX,n=e.y||e.screenY;window[D]=t,window[C]=n,B=setTimeout(()=>{window[D]=void 0,window[C]=void 0},500)}function I(){window.removeEventListener("click",P,!0),window.addEventListener("click",P,!0)}function R(e,t,n){var a=e.show,c=e.mountOnEnter,l=e.unmountOnExit,d=e.contRef,s=e.self,u=e.animationConfig,m=Object(f["useSpring"])(()=>({x:0,y:0,scale:0,opacity:1})),g=Object(o["a"])(m,2),v=g[0],h=g[1],p=Object(w["b"])(a,{mountOnEnter:c,unmountOnExit:l}),b=Object(o["a"])(p,2),E=b[0],O=b[1],y=Object(w["a"])(a,1,{trailing:!1,leading:!0,disabled:!n});return Object(i["useEffect"])(()=>{n&&a&&O(!0)},[a]),Object(i["useEffect"])(()=>{if(n&&d.current)if(a){t.calcPos();var o=k(),i=x();s.pointX=o,s.pointY=i,s.x=o||s.px||0,s.y=i||s.px||0,s.startXPos=s.x-s.px-d.current.offsetWidth/2,s.startYPos=s.y-s.py-d.current.offsetHeight/2;var c=!i&&!o;h({to:function(){var e=Object(N["a"])(j.a.mark((function e(t){return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t({x:c?0:s.startXPos,y:c?-100:s.startYPos,scale:c?1:0,opacity:c?0:1,immediate:!0,default:!0});case 2:return e.next=4,t({x:0,y:0,scale:1,opacity:1,immediate:!1,config:Object(r["a"])(Object(r["a"])({},u),{},{clamp:!1}),reset:!1,default:!0});case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()})}else{var l=!s.pointY&&!s.pointX;h({x:l?0:s.startXPos,y:l?-100:s.startYPos,scale:l?1:0,opacity:l?0:1,immediate:!1,config:Object(r["a"])(Object(r["a"])({},u),{},{clamp:!0}),reset:!1,default:!0,onRest(){e.refState.show||O(!1)}}),s.x=0,s.y=0}},[y]),[v,E]}function T(e){var t=e.instances,n=e.clickAwayClosable,a=e.namespace,r=e.mask,i=e.show,c=e.cIndex,l=e.contRef,d=e.alignment,s=e.setPos,u=e.setShow,m=e.onClose,f=e.triggerNode,g=e.modalSize,w=e.self;function v(e){return e.filter(e=>e.meta.namespace=a)}function h(){if(!r||!i)return!1;var e=t.slice(0,c),n=v(e).some(e=>e.meta.mask);return!n}function p(){if(!i||!n)return!1;var e=t.slice(c+1),a=v(e).some(e=>e.meta.clickAwayClosable);return!a}function b(){var e=l.current?l.current.offsetWidth:g[0],t=l.current?l.current.offsetHeight:g[1],n=[window.innerWidth-e,window.innerHeight-t],a=S(d,n);s(a);var r=Object(o["a"])(a,2),i=r[0],c=r[1];w.px=i,w.py=c}function E(){e.refState.shouldTriggerClose&&(u(!1),null===m||void 0===m||m())}function O(){u(!0)}function y(t){var n,a;null===f||void 0===f||null===(n=f.props)||void 0===n||null===(a=n.onClick)||void 0===a||a.call(n,t),e.refState.show?E():O()}return{maskShouldShow:h,shouldTriggerClose:p,calcPos:b,close:E,open:O,onTriggerNodeClick:y}}var _=[.5,.5];I();var M=e=>{var t=e.namespace,n=void 0===t?"MODAL":t,a=e.alignment,v=void 0===a?_:a,h=e.mask,p=void 0===h||h,b=e.maskClassName,E=e.animationType,y=void 0===E?"fromMouse":E,j=e.mountOnEnter,N=void 0===j||j,S=e.unmountOnExit,D=void 0!==S&&S,C=e.clickAwayClosable,k=void 0===C||C,x=e.lockScroll,B=void 0===x||x,P=e.className,I=e.style,M=e.onClose,K=e.children,z=e.triggerNode,F=e.baseZIndex,L=void 0===F?d["d"]:F,Y=e.animationConfig,A=void 0===Y?u["config"].stiff:Y,X=e.alpha,q=e.innerRef,W=e.maxWidth,V=Object(i["useRef"])(null),Z=q||V,J=Object(m["useFormState"])(e,!1,{defaultValueKey:"defaultShow",triggerKey:"onChange",valueKey:"show"}),Q=Object(o["a"])(J,2),H=Q[0],U=Q[1],G=Object(w["a"])(H,1,{trailing:!0,leading:!1}),$=Object(m["useSameState"])("fr_modal_metas",{enable:G,meta:{mask:p,clickAwayClosable:k,namespace:n}}),ee=Object(o["a"])($,2),te=ee[0],ne=ee[1],ae=-1===te?L:te+L,re=Object(s["a"])(),oe=Object(o["a"])(re,2),ie=oe[0],ce=oe[1],le=ce.width,de=ce.height,se=Object(i["useState"])([0,0]),ue=Object(o["a"])(se,2),me=ue[0],fe=ue[1],ge=Object(m["useSelf"])({x:0,y:0,px:0,py:0,pointX:0,pointY:0,startXPos:0,startYPos:0}),we={cIndex:te,instances:ne,namespace:n,mask:p,show:H,clickAwayClosable:k,contRef:Z,alignment:v,setPos:fe,refState:null,setShow:U,onClose:M,triggerNode:z,lockScroll:B,modalSize:[le,de],props:e,self:ge,mountOnEnter:N,unmountOnExit:D,animationConfig:A},ve=T(we);O(we,ve),we.refState=Object(m["useRefize"])({show:H,maskShouldShow:ve.maskShouldShow(),shouldTriggerClose:ve.shouldTriggerClose()});var he="fromMouse"===y,pe=R(we,ve,he),be=Object(o["a"])(pe,2),Ee=be[0],Oe=be[1];function ye(){return he?Oe&&c.a.createElement(f["animated"].div,{ref:Z,className:Object(g["a"])("m78-modal",P),style:Object(r["a"])(Object(r["a"])({},I),{},{left:me[0],top:me[1],zIndex:ae,transform:Object(f["to"])([Ee.x,Ee.y,Ee.scale],(e,t,n)=>"translate3d(".concat(e,"px,").concat(t,"px,0px) scale3d(").concat(n,",").concat(n,",").concat(n,")")),opacity:Ee.opacity,display:Ee.opacity.to(e=>e<=.2?"none":"")})},c.a.createElement("div",{className:"m78-modal_calc-node",ref:ie}),K):c.a.createElement(u["Transition"],{toggle:H,type:y,config:A,mountOnEnter:N,unmountOnExit:D,innerRef:Z,className:Object(g["a"])("m78-modal",P),alpha:X,style:Object(r["a"])(Object(r["a"])({maxWidth:W},I),{},{left:me[0],top:me[1],zIndex:ae})},c.a.createElement("div",{className:"m78-modal_calc-node",ref:ie}),K)}return c.a.createElement(c.a.Fragment,null,z&&c.a.cloneElement(z,{onClick:ve.onTriggerNodeClick}),c.a.createElement(l["Portal"],{namespace:n},we.refState.maskShouldShow&&p&&c.a.createElement(u["Transition"],{onClick:k?ve.close:void 0,toggle:H,type:"fade",mountOnEnter:!0,unmountOnExit:!0,className:Object(g["a"])("m78-mask",b),style:{zIndex:ae},reset:!0}),ye()))},K=Object(v["a"])(M,{namespace:"MODAL"}),z=e=>{var t=e.content,n=Object(a["a"])(e,["content"]);return K(Object(r["a"])(Object(r["a"])({},n),{},{children:t,triggerNode:null}))},F=Object.assign(M,{api:z}),L=F},CiMt:function(e,t,n){},Fi4M:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),r=n("55Ip"),o=n("q1tI"),i=n.n(o),c=(n("B2uJ"),n("+su7"),n("qOys")),l=n.n(c),d=n("5Yjd"),s=n.n(d),u=i.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("POCF")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"drawer-\u62bd\u5c49"},i.a.createElement("a",{"aria-hidden":"true",href:"#drawer-\u62bd\u5c49"},i.a.createElement("span",{className:"icon icon-link"})),"Drawer \u62bd\u5c49"),i.a.createElement("p",null,"\u4e0e Dialog \u7c7b\u4f3c\uff0c\u5728\u4e0d\u8df3\u8f6c\u9875\u9762\u7684\u60c5\u51b5\u4e0b\u5411\u7528\u6237\u5c55\u793a\u4e00\u7ec4\u5185\u5bb9, \u533a\u522b\u662f\u5b83\u4ece\u7a97\u4f53\u8fb9\u7f18\u52a8\u753b\u8fdb\u5165"),i.a.createElement("p",null,"\ud83d\udca1 \u901a\u8fc7 ",i.a.createElement(r["a"],{to:"/feedback/modal"},"Modal")," \u4f5c\u4e3a\u5e95\u5c42\u5b9e\u73b0, \u57fa\u672c\u7684\u7528\u6cd5\u5982\u663e\u793a/\u9690\u85cf\u7684\u4e0d\u540c\u63a7\u5236\u65b9\u5f0f\u3001mask\u3001\u4f4d\u7f6e\u3001\u52a8\u753b\u3001\u6e32\u67d3\u7279\u6027\u7b49\u8bf7\u67e5\u9605\u5176\u6587\u6863"),i.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u793a\u4f8b"},i.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b")),i.a.createElement(s.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport { Drawer } from 'm78/drawer';\nimport { Button } from 'm78/button';\n\nconst Demo = () => {\n  return (\n    <div>\n      <div>\n        <Drawer direction=\"left\" style={{ width: '40%' }} triggerNode={<Button>left</Button>}>\n          <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n        </Drawer>\n        <Drawer direction=\"top\" style={{ height: '40%' }} triggerNode={<Button>top</Button>}>\n          <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n        </Drawer>\n        <Drawer direction=\"right\" style={{ width: '40%' }} triggerNode={<Button>right</Button>}>\n          <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n        </Drawer>\n        <Drawer direction=\"bottom\" style={{ height: '40%' }} triggerNode={<Button>bottom</Button>}>\n          <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n        </Drawer>\n        <Drawer fullScreen direction=\"bottom\" triggerNode={<Button>fullScreen</Button>}>\n          <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n        </Drawer>\n        <Drawer direction=\"right\" style={{ width: '40%' }} triggerNode={<Button>nest</Button>}>\n          <div>\n            \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n            <Drawer\n              direction=\"right\"\n              style={{ width: '40%' }}\n              triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n            >\n              <div>\n                \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n                <Drawer\n                  direction=\"right\"\n                  style={{ width: '40%' }}\n                  triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n                >\n                  <div>\n                    \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n                    <Drawer\n                      direction=\"right\"\n                      style={{ width: '40%' }}\n                      triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n                    >\n                      <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n                    </Drawer>\n                  </div>\n                </Drawer>\n              </div>\n            </Drawer>\n          </div>\n        </Drawer>\n      </div>\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport { Drawer } from 'm78/drawer';\nimport { Button } from 'm78/button';\n\nconst Demo = () => (\n  <div>\n    <div>\n      <Drawer\n        direction=\"left\"\n        style={{\n          width: '40%',\n        }}\n        triggerNode={<Button>left</Button>}\n      >\n        <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n      </Drawer>\n      <Drawer\n        direction=\"top\"\n        style={{\n          height: '40%',\n        }}\n        triggerNode={<Button>top</Button>}\n      >\n        <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n      </Drawer>\n      <Drawer\n        direction=\"right\"\n        style={{\n          width: '40%',\n        }}\n        triggerNode={<Button>right</Button>}\n      >\n        <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n      </Drawer>\n      <Drawer\n        direction=\"bottom\"\n        style={{\n          height: '40%',\n        }}\n        triggerNode={<Button>bottom</Button>}\n      >\n        <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n      </Drawer>\n      <Drawer fullScreen direction=\"bottom\" triggerNode={<Button>fullScreen</Button>}>\n        <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n      </Drawer>\n      <Drawer\n        direction=\"right\"\n        style={{\n          width: '40%',\n        }}\n        triggerNode={<Button>nest</Button>}\n      >\n        <div>\n          \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n          <Drawer\n            direction=\"right\"\n            style={{\n              width: '40%',\n            }}\n            triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n          >\n            <div>\n              \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n              <Drawer\n                direction=\"right\"\n                style={{\n                  width: '40%',\n                }}\n                triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n              >\n                <div>\n                  \u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9\n                  <Drawer\n                    direction=\"right\"\n                    style={{\n                      width: '40%',\n                    }}\n                    triggerNode={<Button>\u6253\u5f00\u5d4c\u5957\u5185\u5bb9</Button>}\n                  >\n                    <div>\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9</div>\n                  </Drawer>\n                </div>\n              </Drawer>\n            </div>\n          </Drawer>\n        </div>\n      </Drawer>\n    </div>\n  </div>\n);\n\nexport default Demo;\n"}},{path:"/_demos/demo-5",dependencies:{},files:{}}),i.a.createElement(u,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"api"},i.a.createElement("a",{"aria-hidden":"true",href:"#api"},i.a.createElement("span",{className:"icon icon-link"})),"API"),i.a.createElement("p",null,"\u8be5\u7ec4\u4ef6 props \u7ee7\u627f\u81f3 ModalBaseProps \u7684\u5b50\u96c6, \u5b8c\u6574\u914d\u7f6e\u7b49\u8bf7\u53c2\u8003 ",i.a.createElement(r["a"],{to:"/feedback/modal"},"Modal")),i.a.createElement(l.a,{code:"type OmitModalSpecific = Omit<\n  ModalBaseProps,\n  | 'baseZIndex'\n  | 'namespace'\n  | 'alignment'\n  | 'animationType'\n  | 'onRemove'\n  | 'onRemoveDelay'\n  | 'config'\n  | 'innerRef'\n>;\n\nexport interface DrawerProps extends OmitModalSpecific {\n  /** \u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae */\n  closeIcon?: boolean;\n  /** \u65b9\u5411 */\n  direction?: 'bottom' | 'left' | 'right' | 'top';\n  /** \u5168\u5c4f */\n  fullScreen?: boolean;\n}\n",lang:"tsx"})))}},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},POCF:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("bj9i"),i=n("uVtn"),c=()=>r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o["a"],{direction:"left",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"left")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9")),r.a.createElement(o["a"],{direction:"top",style:{height:"40%"},triggerNode:r.a.createElement(i["a"],null,"top")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9")),r.a.createElement(o["a"],{direction:"right",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"right")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9")),r.a.createElement(o["a"],{direction:"bottom",style:{height:"40%"},triggerNode:r.a.createElement(i["a"],null,"bottom")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9")),r.a.createElement(o["a"],{fullScreen:!0,direction:"bottom",triggerNode:r.a.createElement(i["a"],null,"fullScreen")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9")),r.a.createElement(o["a"],{direction:"right",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"nest")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9",r.a.createElement(o["a"],{direction:"right",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"\u6253\u5f00\u5d4c\u5957\u5185\u5bb9")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9",r.a.createElement(o["a"],{direction:"right",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"\u6253\u5f00\u5d4c\u5957\u5185\u5bb9")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9",r.a.createElement(o["a"],{direction:"right",style:{width:"40%"},triggerNode:r.a.createElement(i["a"],null,"\u6253\u5f00\u5d4c\u5957\u5185\u5bb9")},r.a.createElement("div",null,"\u8fd9\u91cc\u662f\u6e32\u67d3\u7684\u5185\u5bb9"))))))))));t["default"]=c},ZMQu:function(e,t,n){"use strict";n("iCBh"),n("vbCR")},bj9i:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));n("ZMQu");var a=n("0Owb"),r=n("k1fw"),o=n("tJVT"),i=n("PpiC"),c=n("q1tI"),l=n.n(c),d=n("6RdY"),s=n("uVtn"),u=n("Rz6r"),m=n("kr9X"),f=n("6acW"),g=n.n(f),w=n("iuhU"),v=n("zdPv"),h=n("/FQm"),p={top:[0,0],right:[1,0],bottom:[0,1],left:[0,0]},b={clamp:!0},E=e=>{var t=e.closeIcon,n=void 0!==t&&t,f=e.direction,E=void 0===f?"bottom":f,O=e.fullScreen,y=void 0!==O&&O,j=e.className,N=e.style,S=e.children,D=Object(i["a"])(e,["closeIcon","direction","fullScreen","className","style","children"]),C=Object(v["useFormState"])(e,!1,{defaultValueKey:"defaultShow",triggerKey:"onChange",valueKey:"show"}),k=Object(o["a"])(C,2),x=k[0],B=k[1],P=Object(v["useSameState"])("fr_drawer_metas",{enable:x,meta:{direction:E}}),I=Object(o["a"])(P,3),R=I[0],T=I[1],_=I[2],M=T.filter(e=>e.meta.direction===E&&!y),K=Object(c["useMemo"])(()=>{if(!x||!M.length)return 0;var e=M.findIndex(e=>e.id===_),t=M.slice(e+1);return t.length>0?t.length:0},[M,R]),z=g()(E),F="left";"bottom"!==E&&"top"!==E||(F="top");var L=!y&&x&&K>0?{["margin".concat(g()(F))]:"right"===E||"bottom"===E?50*-K:50*K}:{};function Y(){var t;B(!1),null===(t=e.onClose)||void 0===t||t.call(e)}function A(){return l.a.createElement(d["a"],Object(a["a"])({},D,{namespace:"drawer",className:Object(w["a"])("m78-drawer",{"__full-screen":y},E&&!y&&"__".concat(E),j),style:Object(r["a"])(Object(r["a"])({},N),L),baseZIndex:h["b"],show:x,onChange:e=>B(e),animationType:"slide".concat(z)||!1,alignment:p[E],animationConfig:b,alpha:!1}),l.a.createElement(m["If"],{when:n||y},l.a.createElement("div",{className:"m78-drawer_close"},l.a.createElement(s["a"],{icon:!0,onClick:Y,size:"small"},l.a.createElement(u["CloseOutlined"],{className:"m78-close-icon"})))),S)}return A()},O=E},vbCR:function(e,t,n){}}]);