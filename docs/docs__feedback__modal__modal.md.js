(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101,98,99,100],{"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},QLlT:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),o=n("55Ip"),l=n("q1tI"),i=n.n(l),d=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(d),s=n("5Yjd"),m=n.n(s),c=i.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("t8Ks")),o=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(o)})),u=i.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("uX6x")),o=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(o)})),p=i.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("q8Rn")),o=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(o)}));t["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"modal-\u5f39\u5c42"},i.a.createElement("a",{"aria-hidden":"true",href:"#modal-\u5f39\u5c42"},i.a.createElement("span",{className:"icon icon-link"})),"Modal \u5f39\u5c42"),i.a.createElement("p",null,"Modal \u662f Dialog \u4ee5\u53ca\u5176\u4ed6\u5927\u591a\u6570\u5f39\u5c42\u7c7b\u7ec4\u4ef6\u7684\u5e95\u5c42\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4fbf\u6377\u7684\u521b\u5efa\u63d0\u793a\u5c42, \u6db5\u76d6\u4e86\u5927\u591a\u6570\u5f39\u5c42\u573a\u666f\u6240\u9700\u7684\u529f\u80fd"),i.a.createElement("p",null,"\ud83e\udd14 \u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u5bf9\u8bdd\u6846/\u63d0\u793a\u7ec4\u4ef6\u7b49, \u8bf7\u4f7f\u7528",i.a.createElement(o["a"],{to:"/docs/feedback/dialog"},"Dialog"),"/",i.a.createElement(o["a"],{to:"/docs/feedback/message"},"Message"),"\u7b49\u7ec4\u4ef6, \u5982\u679c\u5bf9\u5f39\u7a97\u6709\u5f88\u5f3a\u7684\u5b9a\u5236\u610f\u613f\uff0c\u8bf7\u4f7f\u7528\u6b64\u7ec4\u4ef6"),i.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u4f7f\u7528"},i.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),i.a.createElement("p",null,"\u53ef\u901a\u8fc7\u56db\u79cd\u65b9\u5f0f\u4f7f\u7528:"),i.a.createElement("ol",null,i.a.createElement("li",null,"\u901a\u8fc7 show/onChange \u624b\u52a8\u63a7\u5236 modal \u663e\u793a\u72b6\u6001"),i.a.createElement("li",null,"\u901a\u8fc7 triggerNode \u914d\u7f6e\u4e00\u4e2a\u8282\u70b9\u7528\u4e8e\u5f00\u5173 Modal"),i.a.createElement("li",null,"\u901a\u8fc7 defaultShow \u8fdb\u884c\u521d\u59cb\u6e32\u67d3\u5e76\u5c06\u63a7\u5236\u6743\u4ea4\u7531\u7ec4\u4ef6\u5185\u90e8(\u4e0d\u6f14\u793a\uff0c\u76f4\u63a5\u4f20 defaultShow \u5373\u53ef)"),i.a.createElement("li",null,"\u901a\u8fc7 Modal.api()\u6765\u8fdb\u884c api \u5f62\u5f0f\u7684\u8c03\u7528"))),i.a.createElement(m.a,Object(a["a"])({source:{tsx:'import React from \'react\';\n\nimport { Modal } from \'m78/modal\';\nimport { Button } from \'m78/button\';\nimport sty from \'./style.module.scss\';\n\nconst Base = () => {\n  const [show, setShow] = React.useState(false);\n\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(true)} type="button">\n          \u901a\u8fc7show/onChange\u4f7f\u7528\n        </Button>\n\n        <Modal show={show} onChange={nShow => setShow(nShow)}>\n          <div className={sty.box}>\u6211\u662f\u901a\u8fc7show/onChange\u4f7f\u7528\u7684\u5f39\u7a97</div>\n        </Modal>\n      </div>\n\n      <div className="mt-32">\n        <Modal triggerNode={<Button type="button">\u901a\u8fc7triggerNode\u4f7f\u7528</Button>}>\n          <div className={sty.box}>\u6211\u662f\u901a\u8fc7triggerNode\u4f7f\u7528\u7684\u5f39\u7a97</div>\n        </Modal>\n      </div>\n\n      <div className="mt-32">\n        <Button\n          type="button"\n          onClick={() => {\n            Modal.api({\n              content: <div className={sty.box}>\u6211\u662f\u901a\u8fc7Modal.api()\u4f7f\u7528\u7684\u5f39\u7a97</div>,\n            });\n          }}\n        >\n          Modal.api()\n        </Button>\n      </div>\n    </div>\n  );\n};\n\nexport default Base;\n',jsx:'import React from \'react\';\nimport { Modal } from \'m78/modal\';\nimport { Button } from \'m78/button\';\nimport sty from \'./style.module.scss\';\n\nconst Base = () => {\n  const [show, setShow] = React.useState(false);\n  return (\n    <div>\n      <div>\n        <Button onClick={() => setShow(true)} type="button">\n          \u901a\u8fc7show/onChange\u4f7f\u7528\n        </Button>\n\n        <Modal show={show} onChange={nShow => setShow(nShow)}>\n          <div className={sty.box}>\u6211\u662f\u901a\u8fc7show/onChange\u4f7f\u7528\u7684\u5f39\u7a97</div>\n        </Modal>\n      </div>\n\n      <div className="mt-32">\n        <Modal triggerNode={<Button type="button">\u901a\u8fc7triggerNode\u4f7f\u7528</Button>}>\n          <div className={sty.box}>\u6211\u662f\u901a\u8fc7triggerNode\u4f7f\u7528\u7684\u5f39\u7a97</div>\n        </Modal>\n      </div>\n\n      <div className="mt-32">\n        <Button\n          type="button"\n          onClick={() => {\n            Modal.api({\n              content: <div className={sty.box}>\u6211\u662f\u901a\u8fc7Modal.api()\u4f7f\u7528\u7684\u5f39\u7a97</div>,\n            });\n          }}\n        >\n          Modal.api()\n        </Button>\n      </div>\n    </div>\n  );\n};\n\nexport default Base;\n'}},{path:"/_demos/base",dependencies:{},files:{"style.module.scss":{path:"./style.module.scss",content:".box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 260px;\n  height: 200px;\n  padding: 20px;\n  border: 4px dashed rgb(251, 97, 97);\n  box-shadow: rgb(97, 251, 246) 0 0 0 6px;\n  border-radius: 2px;\n  background-color: var(--m78-component-bg);\n}\n"}}}),i.a.createElement(c,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u4f4d\u7f6e"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u4f4d\u7f6e"},i.a.createElement("span",{className:"icon icon-link"})),"\u4f4d\u7f6e"),i.a.createElement("p",null,"\u901a\u8fc7 alignment \u6765\u81ea\u7531\u5b9a\u5236\u5f39\u7a97\u51fa\u73b0\u51fa\u73b0\u7684\u4f4d\u7f6e alignment \u662f\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u9879\u7684\u5143\u7ec4\uff0c\u53d6\u503c\u533a\u95f4\u4e3a ",i.a.createElement("code",null,"[0, 0] ~ [1, 1]"),", \u5206\u522b\u4ee3\u8868\u5c4f\u5e55\u7684\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u3001x \u8f74/y \u8f74")),i.a.createElement(m.a,Object(a["a"])({source:{tsx:"import React from 'react';\n\nimport { Modal } from 'm78/modal';\nimport { Button } from 'm78/button';\nimport sty from './style.module.scss';\n\nconst Alignment = () => {\n  return (\n    <div>\n      <Modal alignment={[0, 0]} triggerNode={<Button type=\"button\">[0, 0] \u5de6\u4e0a</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n      <Modal\n        alignment={[0.5, 0.5]}\n        triggerNode={<Button type=\"button\">[0.5, 0.5] \u5c45\u4e2d(\u9ed8\u8ba4)</Button>}\n      >\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n      <Modal alignment={[1, 1]} triggerNode={<Button type=\"button\">[1, 1] \u53f3\u4e0b</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n      <Modal alignment={[1, 0]} triggerNode={<Button type=\"button\">[1, 0] \u53f3\u4e0a</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n    </div>\n  );\n};\n\nexport default Alignment;\n",jsx:"import React from 'react';\nimport { Modal } from 'm78/modal';\nimport { Button } from 'm78/button';\nimport sty from './style.module.scss';\n\nconst Alignment = () => (\n  <div>\n    <Modal alignment={[0, 0]} triggerNode={<Button type=\"button\">[0, 0] \u5de6\u4e0a</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n    <Modal\n      alignment={[0.5, 0.5]}\n      triggerNode={<Button type=\"button\">[0.5, 0.5] \u5c45\u4e2d(\u9ed8\u8ba4)</Button>}\n    >\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n    <Modal alignment={[1, 1]} triggerNode={<Button type=\"button\">[1, 1] \u53f3\u4e0b</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n    <Modal alignment={[1, 0]} triggerNode={<Button type=\"button\">[1, 0] \u53f3\u4e0a</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n  </div>\n);\n\nexport default Alignment;\n"}},{path:"/_demos/alignment",dependencies:{},files:{"style.module.scss":{path:"./style.module.scss",content:".box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 260px;\n  height: 200px;\n  padding: 20px;\n  border: 4px dashed rgb(251, 97, 97);\n  box-shadow: rgb(97, 251, 246) 0 0 0 6px;\n  border-radius: 2px;\n  background-color: var(--m78-component-bg);\n}\n"}}}),i.a.createElement(u,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u52a8\u753b"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u52a8\u753b"},i.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u753b"),i.a.createElement("p",null,"\u5185\u7f6e\u4e86\u5f88\u591a\u52a8\u753b\u6548\u679c\uff0c\u9ed8\u8ba4\u662f\u4ece\u9f20\u6807\u4f4d\u7f6e\u51fa\u73b0\u3001\u9690\u85cf")),i.a.createElement(m.a,Object(a["a"])({source:{tsx:'import React from \'react\';\n\nimport { Modal } from \'m78/modal\';\nimport { Button } from \'m78/button\';\nimport sty from \'./style.module.scss\';\n\nconst Alignment = () => {\n  return (\n    <div>\n      <Modal triggerNode={<Button type="button">fromMouse</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="fade" triggerNode={<Button type="button">fade</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="zoom" triggerNode={<Button type="button">zoom</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="punch" triggerNode={<Button type="button">punch</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="slideLeft" triggerNode={<Button type="button">slideLeft</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="slideRight" triggerNode={<Button type="button">slideRight</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="slideTop" triggerNode={<Button type="button">slideTop</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="slideBottom" triggerNode={<Button type="button">slideBottom</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n\n      <Modal animationType="bounce" triggerNode={<Button type="button">bounce</Button>}>\n        <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n      </Modal>\n    </div>\n  );\n};\n\nexport default Alignment;\n',jsx:'import React from \'react\';\nimport { Modal } from \'m78/modal\';\nimport { Button } from \'m78/button\';\nimport sty from \'./style.module.scss\';\n\nconst Alignment = () => (\n  <div>\n    <Modal triggerNode={<Button type="button">fromMouse</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="fade" triggerNode={<Button type="button">fade</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="zoom" triggerNode={<Button type="button">zoom</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="punch" triggerNode={<Button type="button">punch</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="slideLeft" triggerNode={<Button type="button">slideLeft</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="slideRight" triggerNode={<Button type="button">slideRight</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="slideTop" triggerNode={<Button type="button">slideTop</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="slideBottom" triggerNode={<Button type="button">slideBottom</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n\n    <Modal animationType="bounce" triggerNode={<Button type="button">bounce</Button>}>\n      <div className={sty.box}>\u6211\u662f\u5f39\u5c42\u5185\u5bb9</div>\n    </Modal>\n  </div>\n);\n\nexport default Alignment;\n'}},{path:"/_demos/animation",dependencies:{},files:{"style.module.scss":{path:"./style.module.scss",content:".box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 260px;\n  height: 200px;\n  padding: 20px;\n  border: 4px dashed rgb(251, 97, 97);\n  box-shadow: rgb(97, 251, 246) 0 0 0 6px;\n  border-radius: 2px;\n  background-color: var(--m78-component-bg);\n}\n"}}}),i.a.createElement(p,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u906e\u7f69"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u906e\u7f69"},i.a.createElement("span",{className:"icon icon-link"})),"\u906e\u7f69"),i.a.createElement("h2",{id:"api"},i.a.createElement("a",{"aria-hidden":"true",href:"#api"},i.a.createElement("span",{className:"icon icon-link"})),"API"),i.a.createElement("p",null,i.a.createElement("code",null,"**props**")),i.a.createElement(r.a,{code:"export interface ModalBaseProps extends ComponentBaseProps {\n  /** Modal\u8981\u5c55\u793a\u7684\u5185\u5bb9 */\n  children: React.ReactNode;\n  /** \u9ed8\u8ba4\u663e\u793a\u72b6\u6001\uff0c\u4e0eshow\u540c\u65f6\u4f7f\u7528\u65f6\u65e0\u6548 */\n  defaultShow?: boolean;\n  /** \u624b\u52a8\u63a7\u5236modal\u7684\u663e\u793a/\u9690\u85cf, \u4e0eonClose\u642d\u914d\u4f5c\u4e3a\u53d7\u63a7\u6a21\u5f0f\u4f7f\u7528 */\n  show?: boolean;\n  /** \u663e\u793a\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1 */\n  onChange?: (currentShow: boolean) => void;\n  /** \u53ef\u9009, \u4f20\u5165\u4e00\u4e2a\u5360\u4f4d\u8282\u70b9\u6765\u4f5c\u4e3aModal\u7684\u63a7\u5236\u5f00\u5173, \u5728\u975e\u53d7\u63a7\u65f6\u4f1a\u76f4\u63a5\u4ee3\u7406show\u7684\u503c\uff0c\u53d7\u63a7\u65f6\u901a\u8fc7onChange\u56de\u4f20\u6700\u65b0\u72b6\u6001 */\n  triggerNode?: React.ReactElement;\n  /** MODAL' | \u81ea\u5b9a\u4e49\u6302\u8f7d\u8282\u70b9\u7684\u547d\u540d\u7a7a\u95f4 */\n  namespace?: string;\n  /** 1800 | \u57fa\u51c6zIndex\u503c\uff0c\u9ed8\u8ba4\u4e3aModal\u5c42(1800) */\n  baseZIndex?: number;\n  /** true | \u662f\u5426\u663e\u793a\u906e\u7f69 */\n  mask?: boolean;\n  /** \u8bbe\u7f6e\u5230mask\u8282\u70b9\u4e0a\u7684className */\n  maskClassName?: string;\n  /** true | \u70b9\u51fb\u5185\u5bb9\u533a\u57df\u4ee5\u5916\u662f\u5426\u5173\u95edModal */\n  clickAwayClosable?: boolean;\n  /** 'light' | mask\u4e3b\u9898\u8272 */\n  maskTheme?: 'dark' | 'light';\n  /** [0.5, 0.5] | \u6307\u5b9ax/y\u8f74\u4f4d\u7f6e, \u503c\u4e3a -1 ~ 1, \u4f8b\uff1a[0.5, 0.5] -> \u5c45\u4e2d\uff0c [1, 0] -> \u53f3\u4e0a\uff0c [1, 1] -> \u53f3\u4e0b */\n  alignment?: TupleNumber;\n  /** \u52a8\u753b\u7c7b\u578b, \u9ed8\u8ba4\u4ece\u5149\u6807\u4f4d\u7f6e\u51fa\u73b0 */\n  animationType?: TransitionTypes | 'fromMouse';\n  /** true | \u5f00\u542f\u540e\u5185\u5bb9\u4f1a\u5728Modal\u5f00\u542f\u65f6\u624d\u8fdb\u884c\u6e32\u67d3\uff0c\u5173\u95ed\u540e\u5185\u5bb9\u968fModal\u4e00\u8d77\u6e32\u67d3, \u5e76\u6839\u636eshow\u72b6\u6001\u51b3\u5b9a\u662f\u5426\u663e\u793a */\n  mountOnEnter?: boolean;\n  /** false | Modal\u5173\u95ed\u540e\u662f\u5426\u5378\u8f7d\u5176\u5185\u5bb9 */\n  unmountOnExit?: boolean;\n  /** true | modal\u51fa\u73b0\u65f6\u9501\u5b9a\u6eda\u52a8\u6761 */\n  lockScroll?: boolean;\n}\n\ninterface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n",lang:"ts"}),i.a.createElement("p",null,i.a.createElement("code",null,"**Modal.api()**")," \u63a5\u53e3\u5982\u4e0b"),i.a.createElement(r.a,{code:"interface ModalBaseApi\n  extends Omit<\n    ModalBaseProps,\n    // \u9664\u4e86\u4ee5\u4e0b\u914d\u7f6e\u5916\u7684\u6240\u6709\u914d\u7f6e\u5747\u652f\u6301\u5728api\u4e2d\u4f7f\u7528\n    'children' | 'defaultShow' | 'show' | 'triggerNode' | 'mountOnEnter' | 'unmountOnExit'\n  > {\n  // Modal\u7684\u5185\u5bb9\uff0c\u66ff\u6362\u4e86children\n  content: ModalBaseProps['children'];\n}\n",lang:"ts"})))}},q8Rn:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=n("6RdY"),i=n("uVtn"),d=n("l9W4"),r=n.n(d),s=()=>o.a.createElement("div",null,o.a.createElement(l["a"],{triggerNode:o.a.createElement(i["a"],{type:"button"},"fromMouse")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"fade",triggerNode:o.a.createElement(i["a"],{type:"button"},"fade")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"zoom",triggerNode:o.a.createElement(i["a"],{type:"button"},"zoom")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"punch",triggerNode:o.a.createElement(i["a"],{type:"button"},"punch")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"slideLeft",triggerNode:o.a.createElement(i["a"],{type:"button"},"slideLeft")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"slideRight",triggerNode:o.a.createElement(i["a"],{type:"button"},"slideRight")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"slideTop",triggerNode:o.a.createElement(i["a"],{type:"button"},"slideTop")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"slideBottom",triggerNode:o.a.createElement(i["a"],{type:"button"},"slideBottom")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{animationType:"bounce",triggerNode:o.a.createElement(i["a"],{type:"button"},"bounce")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")));t["default"]=s},t8Ks:function(e,t,n){"use strict";n.r(t);var a=n("tJVT"),o=n("q1tI"),l=n.n(o),i=n("6RdY"),d=n("uVtn"),r=n("l9W4"),s=n.n(r),m=()=>{var e=l.a.useState(!1),t=Object(a["a"])(e,2),n=t[0],o=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d["a"],{onClick:()=>o(!0),type:"button"},"\u901a\u8fc7show/onChange\u4f7f\u7528"),l.a.createElement(i["a"],{show:n,onChange:e=>o(e)},l.a.createElement("div",{className:s.a.box},"\u6211\u662f\u901a\u8fc7show/onChange\u4f7f\u7528\u7684\u5f39\u7a97"))),l.a.createElement("div",{className:"mt-32"},l.a.createElement(i["a"],{triggerNode:l.a.createElement(d["a"],{type:"button"},"\u901a\u8fc7triggerNode\u4f7f\u7528")},l.a.createElement("div",{className:s.a.box},"\u6211\u662f\u901a\u8fc7triggerNode\u4f7f\u7528\u7684\u5f39\u7a97"))),l.a.createElement("div",{className:"mt-32"},l.a.createElement(d["a"],{type:"button",onClick:()=>{i["a"].api({content:l.a.createElement("div",{className:s.a.box},"\u6211\u662f\u901a\u8fc7Modal.api()\u4f7f\u7528\u7684\u5f39\u7a97")})}},"Modal.api()")))};t["default"]=m},uX6x:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=n("6RdY"),i=n("uVtn"),d=n("l9W4"),r=n.n(d),s=()=>o.a.createElement("div",null,o.a.createElement(l["a"],{alignment:[0,0],triggerNode:o.a.createElement(i["a"],{type:"button"},"[0, 0] \u5de6\u4e0a")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{alignment:[.5,.5],triggerNode:o.a.createElement(i["a"],{type:"button"},"[0.5, 0.5] \u5c45\u4e2d(\u9ed8\u8ba4)")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{alignment:[1,1],triggerNode:o.a.createElement(i["a"],{type:"button"},"[1, 1] \u53f3\u4e0b")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")),o.a.createElement(l["a"],{alignment:[1,0],triggerNode:o.a.createElement(i["a"],{type:"button"},"[1, 0] \u53f3\u4e0a")},o.a.createElement("div",{className:r.a.box},"\u6211\u662f\u5f39\u5c42\u5185\u5bb9")));t["default"]=s}}]);