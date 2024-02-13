import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';
import pngIcon from '../../assets/icon.jpg';
import SvgIcon from '../../assets/icon.svg';
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(function (prev) { return prev + 1; });
    };
    if (__PLATFORM__ === 3000) {
        return _jsx("div", { children: "Your platform: Desktop" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "Your platform: Mobile" });
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.increase_block, children: [_jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: '/about', children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: '/shop', children: "Shop" }) })] }), _jsxs("div", { children: [_jsx("img", { src: pngIcon, width: 200, style: { color: 'fff' }, height: 200, alt: "" }), _jsx(SvgIcon, { style: { width: "200px", height: '200px' } })] }), _jsxs("div", { children: ["Count: ", count] }), _jsx("button", { className: styles.btn, onClick: increment, children: "Increment" }), _jsx(Outlet, {})] }) }));
};
