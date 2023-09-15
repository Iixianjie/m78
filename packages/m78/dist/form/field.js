import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormLayoutType } from "./types.js";
import { useSetState } from "@m78/hooks";
import React, { isValidElement, useMemo, useRef } from "react";
import { createRandString, ensureArray, getNamePathValue, isEmpty, isFunction, stringifyNamePath } from "@m78/utils";
import { Lay } from "../lay/index.js";
import { Bubble } from "../bubble/index.js";
import { IconErrorOutline } from "@m78/icons/icon-error-outline.js";
import clsx from "clsx";
import { _useFieldMethods } from "./use-field-methods.js";
import { _useFieldLifeCircle } from "./use-field-life-circle.js";
import { _listLayoutRenderImpl, _listRenderImpl } from "./list.js";
import { requiredValidatorKey } from "@m78/verify";
import { _defaultAdaptor, EMPTY_NAME } from "./common.js";
export function _fieldImpl(ctx) {
    var form = ctx.form;
    /** 实现Field组件 */ form.Field = function(props) {
        var renderWidget = // 渲染表单控件 或 list
        function renderWidget() {
            // 列表渲染
            if (isList) return renderList();
            if (componentRender) {
                return componentRender(methods.getRenderArgs());
            }
            if (!adaptorConf) return null;
            var ele = adaptorConf.component;
            var _formAdaptor = adaptorConf.formAdaptor, formAdaptor = _formAdaptor === void 0 ? _defaultAdaptor : _formAdaptor;
            if (formAdaptor) {
                ele = formAdaptor(methods.getRenderArgs());
            }
            if (!/*#__PURE__*/ isValidElement(ele)) return null;
            var componentProps = getProps("componentProps");
            if (isEmpty(componentProps)) return ele;
            return /*#__PURE__*/ React.cloneElement(ele, _object_spread({}, ele.props, componentProps));
        };
        var renderList = // list渲染逻辑
        function renderList() {
            if (!isList) return null;
            var listProps = props;
            var hasRender = isFunction(listProps.render);
            var hasLayoutRender = isFunction(listProps.layoutRender);
            if (!hasRender && !hasLayoutRender || !(schema === null || schema === void 0 ? void 0 : schema.list)) {
                console.warn('Form: "'.concat(filedCtx.strName, '" - <List/> must passed render or layoutRender, and schema must set list = true'));
                return null;
            }
            var args = _object_spread({
                form: ctx.form,
                config: ctx.config,
                props: props,
                getProps: getProps,
                render: _listRenderImpl(ctx, props)
            }, methods.listApiSimplify(name));
            if (hasRender) {
                return listProps.render(args);
            }
            if (hasLayoutRender) {
                return _listLayoutRenderImpl(filedCtx, methods, schema)(args, listProps.layoutRender);
            }
        };
        var renderError = // 渲染使用气泡展示的错误消息
        function renderError() {
            return /*#__PURE__*/ _jsx("div", {
                className: "m78-form_bubble-error",
                role: "alert",
                style: {
                    opacity: showError ? 1 : 0,
                    visibility: showError ? "visible" : "hidden"
                },
                children: error
            });
        };
        var renderBubbleDescribe = // 渲染气泡形式的描述
        function renderBubbleDescribe() {
            if (!describe || !bubbleDescribe) return null;
            return /*#__PURE__*/ _jsx(Bubble, {
                content: describe,
                children: /*#__PURE__*/ _jsx(IconErrorOutline, {
                    className: "m78-form_describe-icon"
                })
            });
        };
        var renderLayLeading = // 渲染lay组件的leading部分
        function renderLayLeading() {
            var _leftNode = methods.extraNodeRenderHelper(leftNode);
            if (layoutType === FormLayoutType.horizontal && shouldShowLabel) {
                return /*#__PURE__*/ _jsxs("div", {
                    className: "m78-form_label m78-form_horizontal-label",
                    children: [
                        _leftNode,
                        labelNode,
                        bubbleDescribeNode
                    ]
                });
            }
            return _leftNode;
        };
        var renderLayTrailing = // 渲染lay组件的trailing部分
        function renderLayTrailing() {
            return methods.extraNodeRenderHelper(rightNode);
        };
        var customerRender = // 处理customer渲染
        function customerRender(node) {
            var customerList = [
                props.customer,
                schema === null || schema === void 0 ? void 0 : schema.customer,
                ctx.config.customer, 
            ];
            var prevent = false;
            var args = _object_spread_props(_object_spread({}, methods.getRenderArgs()), {
                element: node,
                preventNext: function() {
                    prevent = true;
                }
            });
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = customerList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var cus = _step.value;
                    if (prevent) break;
                    if (cus) {
                        args.element = cus(args);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return args.element;
        };
        var renderMain = // 主内容
        function renderMain() {
            return /*#__PURE__*/ _jsxs(Lay, {
                innerRef: wrapRef,
                crossAlign: crossAlign,
                leading: renderLayLeading(),
                effect: false,
                overflowVisible: true,
                className: clsx("m78-form_field", "__".concat(layoutType), size && "__".concat(size), !spacePadding && "__no-pad", getProps("className")),
                style: _object_spread({
                    maxWidth: methods.getWidth()
                }, getProps("style")),
                trailing: renderLayTrailing(),
                children: [
                    layoutType === FormLayoutType.vertical && shouldShowLabel && /*#__PURE__*/ _jsxs("div", {
                        className: "m78-form_label m78-form_vertical-label",
                        children: [
                            labelNode,
                            bubbleDescribeNode
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "m78-form_unit",
                        children: [
                            renderWidget(),
                            renderError()
                        ]
                    }),
                    !bubbleDescribe && describe && /*#__PURE__*/ _jsx("div", {
                        className: "m78-form_describe",
                        children: describe
                    }),
                    changed && /*#__PURE__*/ _jsx("span", {
                        className: "m78-form_changed-mark"
                    })
                ]
            });
        };
        var _name = props.name, name = _name === void 0 ? EMPTY_NAME : _name;
        var id = useMemo(function() {
            return createRandString(2);
        }, []);
        var ref = _sliced_to_array(useSetState(function() {
            return {
                /** 当前组件的schema */ schema: form.getSchema(name),
                /** 手动更新组件的标记 */ renderKey: Math.random()
            };
        }), 2), state = ref[0], setState = ref[1];
        var schema = state.schema;
        var validator = ensureArray(schema === null || schema === void 0 ? void 0 : schema.validator) || [];
        // 由于 list 和 field 逻辑基本一致, 所以通过私有 props 来区分, 并在内部做特殊处理
        var isList = getNamePathValue(props, "__isList");
        var wrapRef = useRef(null);
        var filedCtx = {
            state: state,
            setState: setState,
            isList: isList,
            props: props,
            name: name,
            wrapRef: wrapRef,
            id: id,
            strName: stringifyNamePath(name)
        };
        // 组件方法
        var methods = _useFieldMethods(ctx, filedCtx);
        // 组件生命周期
        _useFieldLifeCircle(ctx, filedCtx, methods);
        var getProps = methods.getProps;
        var layoutType = getProps("layoutType");
        var label = getProps("label");
        var describe = getProps("describe");
        var size = getProps("size");
        var preventDefaultRenders = getProps("preventDefaultRenders");
        var bubbleDescribe = getProps("bubbleDescribe");
        var leftNode = getProps("leftNode");
        var rightNode = getProps("rightNode");
        var bottomNode = getProps("bottomNode");
        var topNode = getProps("topNode");
        var crossAlign = getProps("crossAlign") || "start";
        var spacePadding = getProps("spacePadding");
        var ref1 = methods.getAdaptor(), adaptorConf = ref1.adaptorConf, componentRender = ref1.componentRender;
        if (spacePadding === undefined) spacePadding = true;
        var touched = form.getTouched(name);
        var changed = form.getChanged(name);
        var error = methods.getError(name);
        // 是否应显示error / 显示何种类型的错误
        var showError = error && touched;
        var hasRequired = useMemo(function() {
            var marker = getProps("requireMarker");
            if (marker === false) return false;
            return validator.find(function(i) {
                return i.key === requiredValidatorKey;
            });
        }, [
            validator
        ]);
        if (!methods.shouldRender()) return null;
        // 无样式渲染
        if (preventDefaultRenders) {
            return renderWidget();
        }
        // 布局渲染
        var bubbleDescribeNode = renderBubbleDescribe();
        // 是否应该显示label容器, 有label或者有气泡描述时显示
        var shouldShowLabel = !!label || !!bubbleDescribe;
        var labelNode = hasRequired ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("span", {
                    className: "color-red fs-md vm mr",
                    children: "*"
                }),
                label
            ]
        }) : label;
        var _topNode = methods.extraNodeRenderHelper(topNode);
        var _bottomNode = methods.extraNodeRenderHelper(bottomNode);
        if (_topNode || _bottomNode) {
            return customerRender(/*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    _topNode,
                    renderMain(),
                    _bottomNode
                ]
            }));
        }
        return customerRender(renderMain());
    };
    form.Field.displayName = "Field";
}
