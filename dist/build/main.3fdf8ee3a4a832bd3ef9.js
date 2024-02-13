var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.3fdf8ee3a4a832bd3ef9.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 448: function (e, t, n) { var r = n(294), a = n(840); function l(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var o = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            o.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {}; function m(e, t, n, r, a, l, o) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), z = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var N = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var M = Symbol.iterator; function O(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = M && e[M] || e["@@iterator"]) ? e : null; } var F, U = Object.assign; function I(e) { if (void 0 === F)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                F = t && t[1] || "";
            } return "\n" + F + e; } var j = !1; function A(e, t) { if (!e || j)
            return ""; j = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];)
                    i--;
                for (; 1 <= o && 0 <= i; o--, i--)
                    if (a[o] !== l[i]) {
                        if (1 !== o || 1 !== i)
                            do {
                                if (o--, 0 > --i || a[o] !== l[i]) {
                                    var u = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= o && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            j = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? I(e) : ""; } function B(e) { switch (e.tag) {
            case 5: return I(e.type);
            case 16: return I("Lazy");
            case 13: return I("Suspense");
            case 19: return I("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function $(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case E: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case x: return "StrictMode";
            case T: return "Suspense";
            case R: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case L:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case D: return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
                case z:
                    t = e._payload, e = e._init;
                    try {
                        return $(e(t));
                    }
                    catch (e) { }
            } return null; } function H(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return $(t);
            case 8: return t === x ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function V(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function W(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function Q(e) { e._valueTracker || (e._valueTracker = function (e) { var t = W(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, l = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, l.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = V(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function G(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function J(e, t) { G(e, t); var n = V(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(l(91)); return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(l(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(l(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: V(n) }; } function le(e, t) { var n = V(t.value), r = V(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function oe(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, de = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function fe(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ye(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(l(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(l(62));
        } } function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, Ee = null, xe = null; function Ce(e) { if (e = ba(e)) {
            if ("function" != typeof Se)
                throw Error(l(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function _e(e) { Ee ? xe ? xe.push(e) : xe = [e] : Ee = e; } function Pe() { if (Ee) {
            var e = Ee, t = xe;
            if (xe = Ee = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } } function Le(e, t) { return e(t); } function Te() { } var Re = !1; function De(e, t, n) { if (Re)
            return e(t, n); Re = !0; try {
            return Le(e, t, n);
        }
        finally {
            Re = !1, (null !== Ee || null !== xe) && (Te(), Pe());
        } } function ze(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(l(231, t, typeof n)); return n; } var Ne = !1; if (c)
            try {
                var Me = {};
                Object.defineProperty(Me, "passive", { get: function () { Ne = !0; } }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me);
            }
            catch (ce) {
                Ne = !1;
            } function Oe(e, t, n, r, a, l, o, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Fe = !1, Ue = null, Ie = !1, je = null, Ae = { onError: function (e) { Fe = !0, Ue = e; } }; function Be(e, t, n, r, a, l, o, i, u) { Fe = !1, Ue = null, Oe.apply(Ae, arguments); } function $e(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 != (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function He(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function Ve(e) { if ($e(e) !== e)
            throw Error(l(188)); } function We(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = $e(e)))
                throw Error(l(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === n)
                        return Ve(a), e;
                    if (o === r)
                        return Ve(a), t;
                    o = o.sibling;
                }
                throw Error(l(188));
            }
            if (n.return !== r.return)
                n = a, r = o;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = o;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            i = !0, n = o, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = o, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(l(189));
                }
            }
            if (n.alternate !== r)
                throw Error(l(190));
        } if (3 !== n.tag)
            throw Error(l(188)); return n.stateNode.current === n ? e : t; }(e)) ? Qe(e) : null; } function Qe(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Qe(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var qe = a.unstable_scheduleCallback, Ke = a.unstable_cancelCallback, Ye = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Ge = a.unstable_now, Je = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, lt = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (it(e) / ut | 0) | 0; }, it = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function dt(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function ft(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, l = e.pingedLanes, o = 268435455 & n; if (0 !== o) {
            var i = o & ~a;
            0 !== i ? r = dt(i) : 0 != (l &= o) && (r = dt(l));
        }
        else
            0 != (o = n & ~a) ? r = dt(o) : 0 !== l && (r = dt(l)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 != (4194240 & l)))
            return t; if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ht(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = st; return 0 == (4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var bt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1; } var kt, St, Et, xt, Ct, _t = !1, Pt = [], Lt = null, Tt = null, Rt = null, Dt = new Map, zt = new Map, Nt = [], Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Ot(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Lt = null;
                break;
            case "dragenter":
            case "dragleave":
                Tt = null;
                break;
            case "mouseover":
            case "mouseout":
                Rt = null;
                break;
            case "pointerover":
            case "pointerout":
                Dt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": zt.delete(t.pointerId);
        } } function Ft(e, t, n, r, a, l) { return null === e || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ut(e) { var t = ya(e.target); if (null !== t) {
            var n = $e(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = He(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { Et(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function It(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function jt(e, t, n) { It(e) && n.delete(t); } function At() { _t = !1, null !== Lt && It(Lt) && (Lt = null), null !== Tt && It(Tt) && (Tt = null), null !== Rt && It(Rt) && (Rt = null), Dt.forEach(jt), zt.forEach(jt); } function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function $t(e) { function t(t) { return Bt(t, e); } if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
                var r = Pt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Lt && Bt(Lt, e), null !== Tt && Bt(Tt, e), null !== Rt && Bt(Rt, e), Dt.forEach(t), zt.forEach(t), n = 0; n < Nt.length; n++)
            (r = Nt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn;)
            Ut(n), null === n.blockedOn && Nt.shift(); } var Ht = w.ReactCurrentBatchConfig, Vt = !0; function Wt(e, t, n, r) { var a = bt, l = Ht.transition; Ht.transition = null; try {
            bt = 1, qt(e, t, n, r);
        }
        finally {
            bt = a, Ht.transition = l;
        } } function Qt(e, t, n, r) { var a = bt, l = Ht.transition; Ht.transition = null; try {
            bt = 4, qt(e, t, n, r);
        }
        finally {
            bt = a, Ht.transition = l;
        } } function qt(e, t, n, r) { if (Vt) {
            var a = Yt(e, t, n, r);
            if (null === a)
                Vr(e, t, r, Kt, n), Ot(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Lt = Ft(Lt, e, t, n, r, a), !0;
                case "dragenter": return Tt = Ft(Tt, e, t, n, r, a), !0;
                case "mouseover": return Rt = Ft(Rt, e, t, n, r, a), !0;
                case "pointerover":
                    var l = a.pointerId;
                    return Dt.set(l, Ft(Dt.get(l) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return l = a.pointerId, zt.set(l, Ft(zt.get(l) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Ot(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                for (; null !== a;) {
                    var l = ba(a);
                    if (null !== l && kt(l), null === (l = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n), l === a)
                        break;
                    a = l;
                }
                null !== a && r.stopPropagation();
            }
            else
                Vr(e, t, r, null, n);
        } } var Kt = null; function Yt(e, t, n, r) { if (Kt = null, null !== (e = ya(e = ke(r))))
            if (null === (t = $e(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = He(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Kt = e, null; } function Xt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Je()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Gt = null, Jt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Jt, r = n.length, a = "value" in Gt ? Gt.value : Gt.textContent, l = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, l) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return U(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var ln, on, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), dn = U({}, sn, { view: 0, detail: 0 }), fn = an(dn), pn = U({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (ln = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = ln = 0, un = e), ln); }, movementY: function (e) { return "movementY" in e ? e.movementY : on; } }), hn = an(pn), mn = an(U({}, pn, { dataTransfer: 0 })), vn = an(U({}, dn, { relatedTarget: 0 })), gn = an(U({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = U({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = an(yn), wn = an(U({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, En = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function xn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]; } function Cn() { return xn; } var _n = U({}, dn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Pn = an(_n), Ln = an(U({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Tn = an(U({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), Rn = an(U({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Dn = U({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), zn = an(Dn), Nn = [9, 13, 27, 32], Mn = c && "CompositionEvent" in window, On = null; c && "documentMode" in document && (On = document.documentMode); var Fn = c && "TextEvent" in window && !On, Un = c && (!Mn || On && 8 < On && 11 >= On), In = String.fromCharCode(32), jn = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== Nn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Bn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var $n = !1, Hn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Vn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Hn[e.type] : "textarea" === t; } function Wn(e, t, n, r) { _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Qn = null, qn = null; function Kn(e) { Ir(e, 0); } function Yn(e) { if (q(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Gn = !1; if (c) {
            var Jn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Jn = Zn;
            }
            else
                Jn = !1;
            Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null); } function nr(e) { if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Wn(t, qn, e, ke(e)), De(Kn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn); } function lr(e, t) { if ("click" === e)
            return Yn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Yn(t); } var ir = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (ir(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function fr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function hr(e) { var t = fr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, l = Math.min(r.start, a);
                    r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                    var o = cr(n, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Er = {}, xr = {}; function Cr(e) { if (Er[e])
            return Er[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in xr)
                return Er[e] = n[t]; return e; } c && (xr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var _r = Cr("animationend"), Pr = Cr("animationiteration"), Lr = Cr("animationstart"), Tr = Cr("transitionend"), Rr = new Map, Dr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function zr(e, t) { Rr.set(e, t), u(t, [e]); } for (var Nr = 0; Nr < Dr.length; Nr++) {
            var Mr = Dr[Nr];
            zr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        } zr(_r, "onAnimationEnd"), zr(Pr, "onAnimationIteration"), zr(Lr, "onAnimationStart"), zr("dblclick", "onDoubleClick"), zr("focusin", "onFocus"), zr("focusout", "onBlur"), zr(Tr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or)); function Ur(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, o, i, u, s) { if (Be.apply(this, arguments), Fe) {
            if (!Fe)
                throw Error(l(198));
            var c = Ue;
            Fe = !1, Ue = null, Ie || (Ie = !0, je = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function Ir(e, t) { t = 0 != (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Ur(a, i, s), l = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Ur(a, i, s), l = u;
                    }
            }
        } if (Ie)
            throw e = je, Ie = !1, je = null, e; } function jr(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || (Hr(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), Hr(n, e, r, t); } var Br = "_reactListening" + Math.random().toString(36).slice(2); function $r(e) { if (!e[Br]) {
            e[Br] = !0, o.forEach((function (t) { "selectionchange" !== t && (Fr.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || (t[Br] = !0, Ar("selectionchange", !1, t));
        } } function Hr(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Wt;
                break;
            case 4:
                a = Qt;
                break;
            default: a = qt;
        } n = a.bind(null, t, n, e), a = void 0, !Ne || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Vr(e, t, n, r, a) { var l = r; if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var u = o.tag;
                            if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== i;) {
                        if (null === (o = ya(i)))
                            return;
                        if (5 === (u = o.tag) || 6 === u) {
                            r = l = o;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } De((function () { var r = l, a = ke(n), o = []; e: {
            var i = Rr.get(e);
            if (void 0 !== i) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = Pn;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Tn;
                        break;
                    case _r:
                    case Pr:
                    case Lr:
                        u = gn;
                        break;
                    case Tr:
                        u = Rn;
                        break;
                    case "scroll":
                        u = fn;
                        break;
                    case "wheel":
                        u = zn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Ln;
                }
                var c = 0 != (4 & t), d = !c && "scroll" === e, f = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== f && null != (m = ze(h, f)) && c.push(Wr(h, m, p))), d)
                        break;
                    h = h.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), o.push({ event: i, listeners: c }));
            }
        } if (0 == (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (d = $e(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == u ? i : wa(u), p = null == s ? i : wa(s), (i = new c(m, h + "leave", u, n, a)).target = d, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(f, h + "enter", s, n, a)).target = p, c.relatedTarget = d, m = c), d = m, u && s)
                    e: {
                        for (f = s, h = 0, p = c = u; p; p = qr(p))
                            h++;
                        for (p = 0, m = f; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            f = qr(f), p--;
                        for (; h--;) {
                            if (c === f || null !== f && c === f.alternate)
                                break e;
                            c = qr(c), f = qr(f);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Kr(o, i, u, c, !1), null !== s && null !== d && Kr(o, d, s, c, !0);
            }
            if ("select" === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Xn;
            else if (Vn(i))
                if (Gn)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = lr);
            switch (v && (v = v(e, r)) ? Wn(o, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Vn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(o, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(o, n, a);
            }
            var y;
            if (Mn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                $n ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Un && "ko" !== n.locale && ($n || "onCompositionStart" !== b ? "onCompositionEnd" === b && $n && (y = en()) : (Jt = "value" in (Gt = a) ? Gt.value : Gt.textContent, $n = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({ event: b, listeners: g }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = Fn ? function (e, t) { switch (e) {
                case "compositionend": return Bn(t);
                case "keypress": return 32 !== t.which ? null : (jn = !0, In);
                case "textInput": return (e = t.data) === In && jn ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if ($n)
                return "compositionend" === e || !Mn && An(e, t) ? (e = en(), Zt = Jt = Gt = null, $n = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Un && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({ event: a, listeners: r }), a.data = y);
        } Ir(o, t); })); } function Wr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Qr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, l = a.stateNode;
            5 === a.tag && null !== l && (a = l, null != (l = ze(e, n)) && r.unshift(Wr(e, l, a)), null != (l = ze(e, t)) && r.push(Wr(e, l, a))), e = e.return;
        } return r; } function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Kr(e, t, n, r, a) { for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = ze(n, l)) && o.unshift(Wr(n, u, i)) : a || null != (u = ze(n, l)) && o.push(Wr(n, u, i))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Gr(e) { return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, ""); } function Jr(e, t, n) { if (t = Gr(t), Gr(e) !== t && n)
            throw Error(l(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, la = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== la ? function (e) { return la.resolve(null).then(e).catch(ia); } : ra; function ia(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void $t(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); $t(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var da = Math.random().toString(36).slice(2), fa = "__reactFiber$" + da, pa = "__reactProps$" + da, ha = "__reactContainer$" + da, ma = "__reactEvents$" + da, va = "__reactListeners$" + da, ga = "__reactHandles$" + da; function ya(e) { var t = e[fa]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ha] || n[fa]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[fa])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ba(e) { return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(l(33)); } function ka(e) { return e[pa] || null; } var Sa = [], Ea = -1; function xa(e) { return { current: e }; } function Ca(e) { 0 > Ea || (e.current = Sa[Ea], Sa[Ea] = null, Ea--); } function _a(e, t) { Ea++, Sa[Ea] = e.current, e.current = t; } var Pa = {}, La = xa(Pa), Ta = xa(!1), Ra = Pa; function Da(e, t) { var n = e.type.contextTypes; if (!n)
            return Pa; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, l = {}; for (a in n)
            l[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l; } function za(e) { return null != e.childContextTypes; } function Na() { Ca(Ta), Ca(La); } function Ma(e, t, n) { if (La.current !== Pa)
            throw Error(l(168)); _a(La, t), _a(Ta, n); } function Oa(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(l(108, H(e) || "Unknown", a)); return U({}, n, r); } function Fa(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Ra = La.current, _a(La, e), _a(Ta, Ta.current), !0; } function Ua(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(l(169)); n ? (e = Oa(e, t, Ra), r.__reactInternalMemoizedMergedChildContext = e, Ca(Ta), Ca(La), _a(La, e)) : Ca(Ta), _a(Ta, n); } var Ia = null, ja = !1, Aa = !1; function Ba(e) { null === Ia ? Ia = [e] : Ia.push(e); } function $a() { if (!Aa && null !== Ia) {
            Aa = !0;
            var e = 0, t = bt;
            try {
                var n = Ia;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                Ia = null, ja = !1;
            }
            catch (t) {
                throw null !== Ia && (Ia = Ia.slice(e + 1)), qe(Ze, $a), t;
            }
            finally {
                bt = t, Aa = !1;
            }
        } return null; } var Ha = [], Va = 0, Wa = null, Qa = 0, qa = [], Ka = 0, Ya = null, Xa = 1, Ga = ""; function Ja(e, t) { Ha[Va++] = Qa, Ha[Va++] = Wa, Wa = e, Qa = t; } function Za(e, t, n) { qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Ya = e; var r = Xa; e = Ga; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var l = 32 - ot(t) + a; if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Xa = 1 << 32 - ot(t) + a | n << a | r, Ga = l + e;
        }
        else
            Xa = 1 << l | n << a | r, Ga = e; } function el(e) { null !== e.return && (Ja(e, 1), Za(e, 1, 0)); } function tl(e) { for (; e === Wa;)
            Wa = Ha[--Va], Ha[Va] = null, Qa = Ha[--Va], Ha[Va] = null; for (; e === Ya;)
            Ya = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null; } var nl = null, rl = null, al = !1, ll = null; function ol(e, t) { var n = zs(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function il(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? { id: Xa, overflow: Ga } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
            default: return !1;
        } } function ul(e) { return 0 != (1 & e.mode) && 0 == (128 & e.flags); } function sl(e) { if (al) {
            var t = rl;
            if (t) {
                var n = t;
                if (!il(e, t)) {
                    if (ul(e))
                        throw Error(l(418));
                    t = sa(n.nextSibling);
                    var r = nl;
                    t && il(e, t) ? ol(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e);
                }
            }
            else {
                if (ul(e))
                    throw Error(l(418));
                e.flags = -4097 & e.flags | 2, al = !1, nl = e;
            }
        } } function cl(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; nl = e; } function dl(e) { if (e !== nl)
            return !1; if (!al)
            return cl(e), al = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
            if (ul(e))
                throw fl(), Error(l(418));
            for (; t;)
                ol(e, t), t = sa(t.nextSibling);
        } if (cl(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(l(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                rl = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                rl = null;
            }
        }
        else
            rl = nl ? sa(e.stateNode.nextSibling) : null; return !0; } function fl() { for (var e = rl; e;)
            e = sa(e.nextSibling); } function pl() { rl = nl = null, al = !1; } function hl(e) { null === ll ? ll = [e] : ll.push(e); } var ml = w.ReactCurrentBatchConfig; function vl(e, t) { if (e && e.defaultProps) {
            for (var n in t = U({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var gl = xa(null), yl = null, bl = null, wl = null; function kl() { wl = bl = yl = null; } function Sl(e) { var t = gl.current; Ca(gl), e._currentValue = t; } function El(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function xl(e, t) { yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wi = !0), e.firstContext = null); } function Cl(e) { var t = e._currentValue; if (wl !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === bl) {
                if (null === yl)
                    throw Error(l(308));
                bl = e, yl.dependencies = { lanes: 0, firstContext: e };
            }
            else
                bl = bl.next = e; return t; } var _l = null; function Pl(e) { null === _l ? _l = [e] : _l.push(e); } function Ll(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Pl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Tl(e, r); } function Tl(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Rl = !1; function Dl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function zl(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function Nl(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Ml(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 != (2 & Tu)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Tl(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Pl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Tl(e, n); } function Ol(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } function Fl(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === l ? a = l = o : l = l.next = o, n = n.next;
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t;
            }
            else
                a = l = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function Ul(e, t, n, r) { var a = e.updateQueue; Rl = !1; var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === o ? l = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, i = l;;) {
                var f = i.lane, p = i.eventTime;
                if ((r & f) === f) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var h = e, m = i;
                        switch (f = t, p = n, m.tag) {
                            case 1:
                                if ("function" == typeof (h = m.payload)) {
                                    d = h.call(p, d, f);
                                    break e;
                                }
                                d = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null == (f = "function" == typeof (h = m.payload) ? h.call(p, d, f) : h))
                                    break e;
                                d = U({}, d, f);
                                break e;
                            case 2: Rl = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [i] : f.push(i));
                }
                else
                    p = { eventTime: p, lane: f, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = d) : c = c.next = p, o |= f;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (f = i).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
                }
            }
            if (null === c && (u = d), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === l && (a.shared.lanes = 0);
            Uu |= o, e.lanes = o, e.memoizedState = d;
        } } function Il(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(l(191, a));
                    a.call(r);
                }
            } } var jl = (new r.Component).refs; function Al(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : U({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var Bl = { isMounted: function (e) { return !!(e = e._reactInternals) && $e(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Nl(r, a); l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = Nl(r, a); l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Ol(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = Nl(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Ml(e, a, r)) && (rs(t, e, r, n), Ol(t, e, r)); } }; function $l(e, t, n, r, a, l, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, l)); } function Hl(e, t, n) { var r = !1, a = Pa, l = t.contextType; return "object" == typeof l && null !== l ? l = Cl(l) : (a = za(t) ? Ra : La.current, l = (r = null != (r = t.contextTypes)) ? Da(e, a) : Pa), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t; } function Vl(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null); } function Wl(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = jl, Dl(e); var l = t.contextType; "object" == typeof l && null !== l ? a.context = Cl(l) : (l = za(t) ? Ra : La.current, a.context = Da(e, l)), a.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (Al(e, t, l, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bl.enqueueReplaceState(a, a.state, null), Ul(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function Ql(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(l(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(l(147, e));
                var a = r, o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) { var t = a.refs; t === jl && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e; }, t._stringRef = o, t);
            }
            if ("string" != typeof e)
                throw Error(l(284));
            if (!n._owner)
                throw Error(l(290, e));
        } return e; } function ql(e, t) { throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Kl(e) { return (0, e._init)(e._payload); } function Yl(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Ms(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var l = n.type; return l === E ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === z && Kl(l) === t.type) ? ((r = a(t, n.props)).ref = Ql(e, t, n), r.return = e, r) : ((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = js(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function d(e, t, n, r, l) { return null === t || 7 !== t.tag ? ((t = Fs(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t); } function f(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = Is("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(e, null, t), n.return = e, n;
                case S: return (t = js(t, e.mode, n)).return = e, t;
                case z: return f(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || O(t))
                return (t = Fs(t, e.mode, n, null)).return = e, t;
            ql(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case z: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || O(n))
                return null !== a ? null : d(e, t, n, r, null);
            ql(e, n);
        } return null; } function h(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case z: return h(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || O(r))
                return d(t, e = e.get(n) || null, r, a, null);
            ql(t, r);
        } return null; } function m(a, l, i, u) { for (var s = null, c = null, d = l, m = l = 0, v = null; null !== d && m < i.length; m++) {
            d.index > m ? (v = d, d = null) : v = d.sibling;
            var g = p(a, d, i[m], u);
            if (null === g) {
                null === d && (d = v);
                break;
            }
            e && d && null === g.alternate && t(a, d), l = o(g, l, m), null === c ? s = g : c.sibling = g, c = g, d = v;
        } if (m === i.length)
            return n(a, d), al && Ja(a, m), s; if (null === d) {
            for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) && (l = o(d, l, m), null === c ? s = d : c.sibling = d, c = d);
            return al && Ja(a, m), s;
        } for (d = r(a, d); m < i.length; m++)
            null !== (v = h(d, a, m, i[m], u)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), l = o(v, l, m), null === c ? s = v : c.sibling = v, c = v); return e && d.forEach((function (e) { return t(a, e); })), al && Ja(a, m), s; } function v(a, i, u, s) { var c = O(u); if ("function" != typeof c)
            throw Error(l(150)); if (null == (u = c.call(u)))
            throw Error(l(151)); for (var d = c = null, m = i, v = i = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, s);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(a, m), i = o(b, i, v), null === d ? c = b : d.sibling = b, d = b, m = g;
        } if (y.done)
            return n(a, m), al && Ja(a, v), c; if (null === m) {
            for (; !y.done; v++, y = u.next())
                null !== (y = f(a, y.value, s)) && (i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y);
            return al && Ja(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = u.next())
            null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y); return e && m.forEach((function (e) { return t(a, e); })), al && Ja(a, v), c; } return function e(r, l, o, u) { if ("object" == typeof o && null !== o && o.type === E && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
                case k:
                    e: {
                        for (var s = o.key, c = l; null !== c;) {
                            if (c.key === s) {
                                if ((s = o.type) === E) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (l = a(c, o.props.children)).return = r, r = l;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === z && Kl(s) === c.type) {
                                    n(r, c.sibling), (l = a(c, o.props)).ref = Ql(r, c, o), l.return = r, r = l;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        o.type === E ? ((l = Fs(o.props.children, r.mode, u, o.key)).return = r, r = l) : ((u = Os(o.type, o.key, o.props, null, r.mode, u)).ref = Ql(r, l, o), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = o.key; null !== l;) {
                            if (l.key === c) {
                                if (4 === l.tag && l.stateNode.containerInfo === o.containerInfo && l.stateNode.implementation === o.implementation) {
                                    n(r, l.sibling), (l = a(l, o.children || [])).return = r, r = l;
                                    break e;
                                }
                                n(r, l);
                                break;
                            }
                            t(r, l), l = l.sibling;
                        }
                        (l = js(o, r.mode, u)).return = r, r = l;
                    }
                    return i(r);
                case z: return e(r, l, (c = o._init)(o._payload), u);
            }
            if (te(o))
                return m(r, l, o, u);
            if (O(o))
                return v(r, l, o, u);
            ql(r, o);
        } return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, o)).return = r, r = l) : (n(r, l), (l = Is(o, r.mode, u)).return = r, r = l), i(r)) : n(r, l); }; } var Xl = Yl(!0), Gl = Yl(!1), Jl = {}, Zl = xa(Jl), eo = xa(Jl), to = xa(Jl); function no(e) { if (e === Jl)
            throw Error(l(174)); return e; } function ro(e, t) { switch (_a(to, t), _a(eo, e), _a(Zl, Jl), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ca(Zl), _a(Zl, t); } function ao() { Ca(Zl), Ca(eo), Ca(to); } function lo(e) { no(to.current); var t = no(Zl.current), n = ue(t, e.type); t !== n && (_a(eo, e), _a(Zl, n)); } function oo(e) { eo.current === e && (Ca(Zl), Ca(eo)); } var io = xa(0); function uo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var so = []; function co() { for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null; so.length = 0; } var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null, yo = !1, bo = !1, wo = 0, ko = 0; function So() { throw Error(l(321)); } function Eo(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n]))
                return !1; return !0; } function xo(e, t, n, r, a, o) { if (ho = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bo) {
            o = 0;
            do {
                if (bo = !1, wo = 0, 25 <= o)
                    throw Error(l(301));
                o += 1, go = vo = null, t.updateQueue = null, fo.current = si, e = n(r, a);
            } while (bo);
        } if (fo.current = oi, t = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, t)
            throw Error(l(300)); return e; } function Co() { var e = 0 !== wo; return wo = 0, e; } function _o() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? mo.memoizedState = go = e : go = go.next = e, go; } function Po() { if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var t = null === go ? mo.memoizedState : go.next; if (null !== t)
            go = t, vo = e;
        else {
            if (null === e)
                throw Error(l(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? mo.memoizedState = go = e : go = go.next = e;
        } return go; } function Lo(e, t) { return "function" == typeof t ? t(e) : t; } function To(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== a) {
                var i = a.next;
                a.next = o.next, o.next = i;
            }
            r.baseQueue = a = o, n.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var u = i = null, s = null, c = o;
            do {
                var d = c.lane;
                if ((ho & d) === d)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = f, i = r) : s = s.next = f, mo.lanes |= d, Uu |= d;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                o = a.lane, mo.lanes |= o, Uu |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function Ro(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, o = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                o = e(o, i.action), i = i.next;
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; } function Do() { } function zo(e, t) { var n = mo, r = Po(), a = t(), o = !ir(r.memoizedState, a); if (o && (r.memoizedState = a, wi = !0), r = r.queue, Vo(Oo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
            if (n.flags |= 2048, jo(9, Mo.bind(null, n, r, a, t), void 0, null), null === Ru)
                throw Error(l(349));
            0 != (30 & ho) || No(n, t, a);
        } return a; } function No(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Mo(e, t, n, r) { t.value = n, t.getSnapshot = r, Fo(t) && Uo(e); } function Oo(e, t, n) { return n((function () { Fo(t) && Uo(e); })); } function Fo(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !ir(e, n);
        }
        catch (e) {
            return !0;
        } } function Uo(e) { var t = Tl(e, 1); null !== t && rs(t, e, 1, -1); } function Io(e) { var t = _o(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lo, lastRenderedState: e }, t.queue = e, e = e.dispatch = ni.bind(null, mo, e), [t.memoizedState, e]; } function jo(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Ao() { return Po().memoizedState; } function Bo(e, t, n, r) { var a = _o(); mo.flags |= e, a.memoizedState = jo(1 | t, n, void 0, void 0 === r ? null : r); } function $o(e, t, n, r) { var a = Po(); r = void 0 === r ? null : r; var l = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (l = o.destroy, null !== r && Eo(r, o.deps))
                return void (a.memoizedState = jo(t, n, l, r));
        } mo.flags |= e, a.memoizedState = jo(1 | t, n, l, r); } function Ho(e, t) { return Bo(8390656, 8, e, t); } function Vo(e, t) { return $o(2048, 8, e, t); } function Wo(e, t) { return $o(4, 2, e, t); } function Qo(e, t) { return $o(4, 4, e, t); } function qo(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Ko(e, t, n) { return n = null != n ? n.concat([e]) : null, $o(4, 4, qo.bind(null, t, e), n); } function Yo() { } function Xo(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Go(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Eo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Jo(e, t, n) { return 0 == (21 & ho) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), mo.lanes |= n, Uu |= n, e.baseState = !0), t); } function Zo(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, po.transition = r;
        } } function ei() { return Po().memoizedState; } function ti(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ri(e) ? ai(t, n) : null !== (n = Ll(e, t, n, r)) && (rs(n, e, r, ts()), li(n, t, r)); } function ni(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (ri(e))
            ai(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, i = l(o, n);
                    if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Pl(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Ll(e, t, a, r)) && (rs(n, e, r, a = ts()), li(n, t, r));
        } } function ri(e) { var t = e.alternate; return e === mo || null !== t && t === mo; } function ai(e, t) { bo = yo = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function li(e, t, n) { if (0 != (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } var oi = { readContext: Cl, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ii = { readContext: Cl, useCallback: function (e, t) { return _o().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: Cl, useEffect: Ho, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Bo(4194308, 4, qo.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Bo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Bo(4, 2, e, t); }, useMemo: function (e, t) { var n = _o(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _o(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ti.bind(null, mo, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _o().memoizedState = e; }, useState: Io, useDebugValue: Yo, useDeferredValue: function (e) { return _o().memoizedState = e; }, useTransition: function () { var e = Io(!1), t = e[0]; return e = Zo.bind(null, e[1]), _o().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = mo, a = _o(); if (al) {
                if (void 0 === n)
                    throw Error(l(407));
                n = n();
            }
            else {
                if (n = t(), null === Ru)
                    throw Error(l(349));
                0 != (30 & ho) || No(r, t, n);
            } a.memoizedState = n; var o = { value: n, getSnapshot: t }; return a.queue = o, Ho(Oo.bind(null, r, o, e), [e]), r.flags |= 2048, jo(9, Mo.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = _o(), t = Ru.identifierPrefix; if (al) {
                var n = Ga;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - ot(Xa) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = ko++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ui = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Go, useReducer: To, useRef: Ao, useState: function () { return To(Lo); }, useDebugValue: Yo, useDeferredValue: function (e) { return Jo(Po(), vo.memoizedState, e); }, useTransition: function () { return [To(Lo)[0], Po().memoizedState]; }, useMutableSource: Do, useSyncExternalStore: zo, useId: ei, unstable_isNewReconciler: !1 }, si = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Go, useReducer: Ro, useRef: Ao, useState: function () { return Ro(Lo); }, useDebugValue: Yo, useDeferredValue: function (e) { var t = Po(); return null === vo ? t.memoizedState = e : Jo(t, vo.memoizedState, e); }, useTransition: function () { return [Ro(Lo)[0], Po().memoizedState]; }, useMutableSource: Do, useSyncExternalStore: zo, useId: ei, unstable_isNewReconciler: !1 }; function ci(e, t) { try {
            var n = "", r = t;
            do {
                n += B(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function di(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function fi(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pi = "function" == typeof WeakMap ? WeakMap : Map; function hi(e, t, n) { (n = Nl(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Wu || (Wu = !0, Qu = r), fi(0, t); }, n; } function mi(e, t, n) { (n = Nl(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { fi(0, t); };
        } var l = e.stateNode; return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () { fi(0, t), "function" != typeof r && (null === qu ? qu = new Set([this]) : qu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e)); } function gi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function yi(e, t, n, r, a) { return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Nl(-1, 1)).tag = 2, Ml(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); } var bi = w.ReactCurrentOwner, wi = !1; function ki(e, t, n, r) { t.child = null === e ? Gl(t, null, n, r) : Xl(t, e.child, n, r); } function Si(e, t, n, r, a) { n = n.render; var l = t.ref; return xl(t, a), r = xo(e, t, n, r, l, a), n = Co(), null === e || wi ? (al && n && el(t), t.flags |= 1, ki(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function Ei(e, t, n, r, a) { if (null === e) {
            var l = n.type;
            return "function" != typeof l || Ns(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, xi(e, t, l, r, a));
        } if (l = e.child, 0 == (e.lanes & a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                return Wi(e, t, a);
        } return t.flags |= 1, (e = Ms(l, r)).ref = t.ref, e.return = t, t.child = e; } function xi(e, t, n, r, a) { if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
                if (wi = !1, t.pendingProps = r = l, 0 == (e.lanes & a))
                    return t.lanes = e.lanes, Wi(e, t, a);
                0 != (131072 & e.flags) && (wi = !0);
            }
        } return Pi(e, t, n, r, a); } function Ci(e, t, n) { var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _a(Mu, Nu), Nu |= n;
            else {
                if (0 == (1073741824 & n))
                    return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _a(Mu, Nu), Nu |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== l ? l.baseLanes : n, _a(Mu, Nu), Nu |= r;
            }
        else
            null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, _a(Mu, Nu), Nu |= r; return ki(e, t, a, n), t.child; } function _i(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Pi(e, t, n, r, a) { var l = za(n) ? Ra : La.current; return l = Da(t, l), xl(t, a), n = xo(e, t, n, r, l, a), r = Co(), null === e || wi ? (al && r && el(t), t.flags |= 1, ki(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function Li(e, t, n, r, a) { if (za(n)) {
            var l = !0;
            Fa(t);
        }
        else
            l = !1; if (xl(t, a), null === t.stateNode)
            Vi(e, t), Hl(t, n, r), Wl(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode, i = t.memoizedProps;
            o.props = i;
            var u = o.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? Cl(s) : Da(t, s = za(n) ? Ra : La.current);
            var c = n.getDerivedStateFromProps, d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && Vl(t, o, r, s), Rl = !1;
            var f = t.memoizedState;
            o.state = f, Ul(t, r, o, a), u = t.memoizedState, i !== r || f !== u || Ta.current || Rl ? ("function" == typeof c && (Al(t, n, c, r), u = t.memoizedState), (i = Rl || $l(t, n, i, r, f, u, s)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            o = t.stateNode, zl(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : vl(t.type, i), o.props = s, d = t.pendingProps, f = o.context, u = "object" == typeof (u = n.contextType) && null !== u ? Cl(u) : Da(t, u = za(n) ? Ra : La.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== d || f !== u) && Vl(t, o, r, u), Rl = !1, f = t.memoizedState, o.state = f, Ul(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || Ta.current || Rl ? ("function" == typeof p && (Al(t, n, p, r), h = t.memoizedState), (s = Rl || $l(t, n, s, r, f, h, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Ti(e, t, n, r, l, a); } function Ti(e, t, n, r, a, l) { _i(e, t); var o = 0 != (128 & t.flags); if (!r && !o)
            return a && Ua(t, n, !1), Wi(e, t, l); r = t.stateNode, bi.current = t; var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && o ? (t.child = Xl(t, e.child, null, l), t.child = Xl(t, null, i, l)) : ki(e, t, i, l), t.memoizedState = r.state, a && Ua(t, n, !0), t.child; } function Ri(e) { var t = e.stateNode; t.pendingContext ? Ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(0, t.context, !1), ro(e, t.containerInfo); } function Di(e, t, n, r, a) { return pl(), hl(a), t.flags |= 256, ki(e, t, n, r), t.child; } var zi, Ni, Mi, Oi, Fi = { dehydrated: null, treeContext: null, retryLane: 0 }; function Ui(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function Ii(e, t, n) { var r, a = t.pendingProps, o = io.current, i = !1, u = 0 != (128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), _a(io, 1 & o), null === e)
            return sl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 0 == (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Us(u, a, 0, null), e = Fs(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ui(n), t.memoizedState = Fi, e) : ji(t, u)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, t, n, r, a, o, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Ai(e, t, i, r = di(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Us({ mode: "visible", children: r.children }, a, 0, null), (o = Fs(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 != (1 & t.mode) && Xl(t, e.child, null, i), t.child.memoizedState = Ui(i), t.memoizedState = Fi, o); if (0 == (1 & t.mode))
                return Ai(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Ai(e, t, i, r = di(o = Error(l(419)), r, void 0));
            } if (u = 0 != (i & e.childLanes), wi || u) {
                if (null !== (r = Ru)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Tl(e, a), rs(r, e, a, -1));
                }
                return vs(), Ai(e, t, i, r = di(Error(l(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ls.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rl = sa(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = t), (t = ji(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, o, n); if (i) {
            i = a.fallback, u = t.mode, r = (o = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 0 == (1 & u) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Ms(o, s)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Ms(r, i) : (i = Fs(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Ui(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Fi, a;
        } return e = (i = e.child).sibling, a = Ms(i, { mode: "visible", children: a.children }), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function ji(e, t) { return (t = Us({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Ai(e, t, n, r) { return null !== r && hl(r), Xl(t, e.child, null, n), (e = ji(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Bi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), El(e.return, t, n); } function $i(e, t, n, r, a) { var l = e.memoizedState; null === l ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a); } function Hi(e, t, n) { var r = t.pendingProps, a = r.revealOrder, l = r.tail; if (ki(e, t, r.children, n), 0 != (2 & (r = io.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bi(e, n, t);
                    else if (19 === e.tag)
                        Bi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (_a(io, r), 0 == (1 & t.mode))
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === uo(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $i(t, !1, a, n, l);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === uo(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    $i(t, !0, n, null, l);
                    break;
                case "together":
                    $i(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; } function Vi(e, t) { 0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Wi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Uu |= t.lanes, 0 == (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(l(153)); if (null !== t.child) {
            for (n = Ms(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Ms(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Qi(e, t) { if (!al)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function qi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Ki(e, t, n) { var r = t.pendingProps; switch (tl(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return qi(t), null;
            case 1:
            case 17: return za(t.type) && Na(), qi(t), null;
            case 3: return r = t.stateNode, ao(), Ca(Ta), Ca(La), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ll && (is(ll), ll = null))), Ni(e, t), qi(t), null;
            case 5:
                oo(t);
                var a = no(to.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Mi(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(l(166));
                        return qi(t), null;
                    }
                    if (e = no(Zl.current), dl(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[fa] = t, r[pa] = o, e = 0 != (1 & t.mode), n) {
                            case "dialog":
                                jr("cancel", r), jr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                jr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Or.length; a++)
                                    jr(Or[a], r);
                                break;
                            case "source":
                                jr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                jr("error", r), jr("load", r);
                                break;
                            case "details":
                                jr("toggle", r);
                                break;
                            case "input":
                                X(r, o), jr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, jr("invalid", r);
                                break;
                            case "textarea": ae(r, o), jr("invalid", r);
                        }
                        for (var u in ye(n, o), a = null, o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && jr("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Q(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                Q(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[fa] = t, e[pa] = r, zi(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = be(n, r), n) {
                                case "dialog":
                                    jr("cancel", e), jr("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    jr("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Or.length; a++)
                                        jr(Or[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    jr("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    jr("error", e), jr("load", e), a = r;
                                    break;
                                case "details":
                                    jr("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), jr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = U({}, r, { value: void 0 }), jr("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), jr("invalid", e);
                            }
                            for (o in ye(n, a), s = a)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && jr("scroll", e) : null != c && b(e, o, c, u));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return qi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Oi(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(l(166));
                    if (n = no(to.current), no(Zl.current), dl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = nl))
                            switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 != (1 & e.mode));
                            }
                        o && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r;
                }
                return qi(t), null;
            case 13:
                if (Ca(io), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (al && null !== rl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                        fl(), pl(), t.flags |= 98560, o = !1;
                    else if (o = dl(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(l(318));
                            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                                throw Error(l(317));
                            o[fa] = t;
                        }
                        else
                            pl(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qi(t), o = !1;
                    }
                    else
                        null !== ll && (is(ll), ll = null), o = !0;
                    if (!o)
                        return 65536 & t.flags ? t : null;
                }
                return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & io.current) ? 0 === Ou && (Ou = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);
            case 4: return ao(), Ni(e, t), null === e && $r(t.stateNode.containerInfo), qi(t), null;
            case 10: return Sl(t.type._context), qi(t), null;
            case 19:
                if (Ca(io), null === (o = t.memoizedState))
                    return qi(t), null;
                if (r = 0 != (128 & t.flags), null === (u = o.rendering))
                    if (r)
                        Qi(o, !1);
                    else {
                        if (0 !== Ou || null !== e && 0 != (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (u = uo(e))) {
                                    for (t.flags |= 128, Qi(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return _a(io, 1 & io.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Ge() > Hu && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = uo(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !al)
                                return qi(t), null;
                        }
                        else
                            2 * Ge() - o.renderingStartTime > Hu && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u);
                }
                return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ge(), t.sibling = null, n = io.current, _a(io, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);
            case 22:
            case 23: return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Nu) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;
            case 24:
            case 25: return null;
        } throw Error(l(156, t.tag)); } function Yi(e, t) { switch (tl(t), t.tag) {
            case 1: return za(t.type) && Na(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ao(), Ca(Ta), Ca(La), co(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return oo(t), null;
            case 13:
                if (Ca(io), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(l(340));
                    pl();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ca(io), null;
            case 4: return ao(), null;
            case 10: return Sl(t.type._context), null;
            case 22:
            case 23: return fs(), null;
            default: return null;
        } } zi = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Ni = function () { }, Mi = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, no(Zl.current);
            var l, o = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), o = [];
                    break;
                case "select":
                    a = U({}, a, { value: void 0 }), r = U({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (l in u)
                            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (l in u)
                                !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in s)
                                s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
                        }
                        else
                            n || (o || (o = []), o.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && jr("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
            }
            n && (o = o || []).push("style", n);
            var c = o;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Oi = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xi = !1, Gi = !1, Ji = "function" == typeof WeakSet ? WeakSet : Set, Zi = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    Cs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            Cs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var l = a.destroy;
                    a.destroy = void 0, void 0 !== l && tu(t, n, l);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function lu(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function ou(e) { var t = e.alternate; null !== t && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ma], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function iu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || iu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var du = null, fu = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            hu(e, t, n), n = n.sibling; } function hu(e, t, n) { if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
                lt.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Gi || eu(n, t);
            case 6:
                var r = du, a = fu;
                du = null, pu(e, t, n), fu = a, null !== (du = r) && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : du.removeChild(n.stateNode));
                break;
            case 18:
                null !== du && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), $t(e)) : ua(du, n.stateNode));
                break;
            case 4:
                r = du, a = fu, du = n.stateNode.containerInfo, fu = !0, pu(e, t, n), du = r, fu = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Gi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var l = a, o = l.destroy;
                        l = l.tag, void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && tu(n, t, o), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Gi && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        Cs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Gi = (r = Gi) || null !== n.memoizedState, pu(e, t, n), Gi = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function mu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ji), t.forEach((function (t) { var r = Ts.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var o = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                du = u.stateNode, fu = !1;
                                break e;
                            case 3:
                            case 4:
                                du = u.stateNode.containerInfo, fu = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === du)
                        throw Error(l(160));
                    hu(o, i, a), du = null, fu = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    Cs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), yu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        fe(a, "");
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, i = null !== n ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === o.type && null != o.name && G(a, o), be(u, i);
                            var c = be(u, o);
                            for (i = 0; i < s.length; i += 2) {
                                var d = s[i], f = s[i + 1];
                                "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c);
                            }
                            switch (u) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    le(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? ne(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (t) {
                            Cs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), yu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(l(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        $t(t.containerInfo);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), yu(e);
                break;
            case 13:
                vu(t, e), yu(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || ($u = Ge())), 4 & r && mu(e);
                break;
            case 22:
                if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gi = (c = Gi) || d, vu(t, e), Gi = c) : vu(t, e), yu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                        for (Zi = e, d = e.child; null !== d;) {
                            for (f = Zi = d; null !== Zi;) {
                                switch (h = (p = Zi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (e) {
                                                Cs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(f);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Zi = h) : Su(f);
                            }
                            d = d.sibling;
                        }
                    e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                            if (null === d) {
                                d = f;
                                try {
                                    a = f.stateNode, c ? "function" == typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = f.stateNode, i = null != (s = f.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === f.tag) {
                            if (null === d)
                                try {
                                    f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                        }
                        else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e)
                            break e;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === e)
                                break e;
                            d === f && (d = null), f = f.return;
                        }
                        d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19: vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
        } } function yu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(l(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        su(e, uu(e), o);
                        break;
                    default: throw Error(l(161));
                }
            }
            catch (t) {
                Cs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function bu(e, t, n) { Zi = e, wu(e, t, n); } function wu(e, t, n) { for (var r = 0 != (1 & e.mode); null !== Zi;) {
            var a = Zi, l = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Xi;
                if (!o) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Gi;
                    i = Xi;
                    var s = Gi;
                    if (Xi = o, (Gi = u) && !s)
                        for (Zi = a; null !== Zi;)
                            u = (o = Zi).child, 22 === o.tag && null !== o.memoizedState ? Eu(a) : null !== u ? (u.return = o, Zi = u) : Eu(a);
                    for (; null !== l;)
                        Zi = l, wu(l, t, n), l = l.sibling;
                    Zi = a, Xi = i, Gi = s;
                }
                ku(e);
            }
            else
                0 != (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Zi = l) : ku(e);
        } } function ku(e) { for (; null !== Zi;) {
            var t = Zi;
            if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 != (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gi || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Gi)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = t.updateQueue;
                                null !== o && Il(t, o, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    Il(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var d = c.memoizedState;
                                        if (null !== d) {
                                            var f = d.dehydrated;
                                            null !== f && $t(f);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(l(163));
                        }
                    Gi || 512 & t.flags && lu(t);
                }
                catch (e) {
                    Cs(t, t.return, e);
                }
            }
            if (t === e) {
                Zi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Su(e) { for (; null !== Zi;) {
            var t = Zi;
            if (t === e) {
                Zi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Eu(e) { for (; null !== Zi;) {
            var t = Zi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            Cs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                Cs(t, a, e);
                            }
                        }
                        var l = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, l, e);
                        }
                        break;
                    case 5:
                        var o = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, o, e);
                        }
                }
            }
            catch (e) {
                Cs(t, t.return, e);
            }
            if (t === e) {
                Zi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Zi = i;
                break;
            }
            Zi = t.return;
        } } var xu, Cu = Math.ceil, _u = w.ReactCurrentDispatcher, Pu = w.ReactCurrentOwner, Lu = w.ReactCurrentBatchConfig, Tu = 0, Ru = null, Du = null, zu = 0, Nu = 0, Mu = xa(0), Ou = 0, Fu = null, Uu = 0, Iu = 0, ju = 0, Au = null, Bu = null, $u = 0, Hu = 1 / 0, Vu = null, Wu = !1, Qu = null, qu = null, Ku = !1, Yu = null, Xu = 0, Gu = 0, Ju = null, Zu = -1, es = 0; function ts() { return 0 != (6 & Tu) ? Ge() : -1 !== Zu ? Zu : Zu = Ge(); } function ns(e) { return 0 == (1 & e.mode) ? 1 : 0 != (2 & Tu) && 0 !== zu ? zu & -zu : null !== ml.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type); } function rs(e, t, n, r) { if (50 < Gu)
            throw Gu = 0, Ju = null, Error(l(185)); gt(e, n, r), 0 != (2 & Tu) && e === Ru || (e === Ru && (0 == (2 & Tu) && (Iu |= n), 4 === Ou && us(e, zu)), as(e, r), 1 === n && 0 === Tu && 0 == (1 & t.mode) && (Hu = Ge() + 500, ja && $a())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
            var o = 31 - ot(l), i = 1 << o, u = a[o];
            -1 === u ? 0 != (i & n) && 0 == (i & r) || (a[o] = pt(i, t)) : u <= t && (e.expiredLanes |= i), l &= ~i;
        } }(e, t); var r = ft(e, e === Ru ? zu : 0); if (0 === r)
            null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ke(n), 1 === t)
                0 === e.tag ? function (e) { ja = !0, Ba(e); }(ss.bind(null, e)) : Ba(ss.bind(null, e)), oa((function () { 0 == (6 & Tu) && $a(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Rs(n, ls.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function ls(e, t) { if (Zu = -1, es = 0, 0 != (6 & Tu))
            throw Error(l(327)); var n = e.callbackNode; if (Es() && e.callbackNode !== n)
            return null; var r = ft(e, e === Ru ? zu : 0); if (0 === r)
            return null; if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Tu;
            Tu |= 2;
            var o = ms();
            for (Ru === e && zu === t || (Vu = null, Hu = Ge() + 500, ps(e, t));;)
                try {
                    bs();
                    break;
                }
                catch (t) {
                    hs(e, t);
                }
            kl(), _u.current = o, Tu = a, null !== Du ? t = 0 : (Ru = null, zu = 0, t = Ou);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = ht(e)) && (r = a, t = os(e, a)), 1 === t)
                throw n = Fu, ps(e, 0), us(e, r), as(e, Ge()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, 0 == (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], l = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!ir(l(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) && (2 === (t = gs(e, r)) && 0 !== (o = ht(e)) && (r = o, t = os(e, o)), 1 === t))
                    throw n = Fu, ps(e, 0), us(e, r), as(e, Ge()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(l(345));
                    case 2:
                    case 5:
                        Ss(e, Bu, Vu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = $u + 500 - Ge())) {
                            if (0 !== ft(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Vu), t);
                            break;
                        }
                        Ss(e, Bu, Vu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - ot(r);
                            o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Vu), r);
                            break;
                        }
                        Ss(e, Bu, Vu);
                        break;
                    default: throw Error(l(329));
                }
            }
        } return as(e, Ge()), e.callbackNode === n ? ls.bind(null, e) : null; } function os(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Bu, Bu = n, null !== t && is(t)), e; } function is(e) { null === Bu ? Bu = e : Bu.push.apply(Bu, e); } function us(e, t) { for (t &= ~ju, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (0 != (6 & Tu))
            throw Error(l(327)); Es(); var t = ft(e, 0); if (0 == (1 & t))
            return as(e, Ge()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = os(e, r));
        } if (1 === n)
            throw n = Fu, ps(e, 0), us(e, t), as(e, Ge()), n; if (6 === n)
            throw Error(l(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Bu, Vu), as(e, Ge()), null; } function cs(e, t) { var n = Tu; Tu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Tu = n) && (Hu = Ge() + 500, ja && $a());
        } } function ds(e) { null !== Yu && 0 === Yu.tag && 0 == (6 & Tu) && Es(); var t = Tu; Tu |= 1; var n = Lu.transition, r = bt; try {
            if (Lu.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Lu.transition = n, 0 == (6 & (Tu = t)) && $a();
        } } function fs() { Nu = Mu.current, Ca(Mu); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Du)
            for (n = Du.return; null !== n;) {
                var r = n;
                switch (tl(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Na();
                        break;
                    case 3:
                        ao(), Ca(Ta), Ca(La), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        Ca(io);
                        break;
                    case 10:
                        Sl(r.type._context);
                        break;
                    case 22:
                    case 23: fs();
                }
                n = n.return;
            } if (Ru = e, Du = e = Ms(e.current, null), zu = Nu = t, Ou = 0, Fu = null, ju = Iu = Uu = 0, Bu = Au = null, null !== _l) {
            for (t = 0; t < _l.length; t++)
                if (null !== (r = (n = _l[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, l = n.pending;
                    if (null !== l) {
                        var o = l.next;
                        l.next = a, r.next = o;
                    }
                    n.pending = r;
                }
            _l = null;
        } return e; } function hs(e, t) { for (;;) {
            var n = Du;
            try {
                if (kl(), fo.current = oi, yo) {
                    for (var r = mo.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yo = !1;
                }
                if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Pu.current = null, null === n || null === n.return) {
                    Ou = 1, Fu = t, Du = null;
                    break;
                }
                e: {
                    var o = e, i = n.return, u = n, s = t;
                    if (t = zu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, d = u, f = d.tag;
                        if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                            var p = d.alternate;
                            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var h = gi(i);
                        if (null !== h) {
                            h.flags &= -257, yi(h, i, u, 0, t), 1 & h.mode && vi(o, c, t), s = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                m.add(s);
                            break e;
                        }
                        if (0 == (1 & t)) {
                            vi(o, c, t), vs();
                            break e;
                        }
                        s = Error(l(426));
                    }
                    else if (al && 1 & u.mode) {
                        var g = gi(i);
                        if (null !== g) {
                            0 == (65536 & g.flags) && (g.flags |= 256), yi(g, i, u, 0, t), hl(ci(s, u));
                            break e;
                        }
                    }
                    o = s = ci(s, u), 4 !== Ou && (Ou = 2), null === Au ? Au = [o] : Au.push(o), o = i;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t, Fl(o, hi(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = o.type, b = o.stateNode;
                                if (0 == (128 & o.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t, Fl(o, mi(o, u, t));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                ks(n);
            }
            catch (e) {
                t = e, Du === n && null !== n && (Du = n = n.return);
                continue;
            }
            break;
        } } function ms() { var e = _u.current; return _u.current = oi, null === e ? oi : e; } function vs() { 0 !== Ou && 3 !== Ou && 2 !== Ou || (Ou = 4), null === Ru || 0 == (268435455 & Uu) && 0 == (268435455 & Iu) || us(Ru, zu); } function gs(e, t) { var n = Tu; Tu |= 2; var r = ms(); for (Ru === e && zu === t || (Vu = null, ps(e, t));;)
            try {
                ys();
                break;
            }
            catch (t) {
                hs(e, t);
            } if (kl(), Tu = n, _u.current = r, null !== Du)
            throw Error(l(261)); return Ru = null, zu = 0, Ou; } function ys() { for (; null !== Du;)
            ws(Du); } function bs() { for (; null !== Du && !Ye();)
            ws(Du); } function ws(e) { var t = xu(e.alternate, e, Nu); e.memoizedProps = e.pendingProps, null === t ? ks(e) : Du = t, Pu.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 == (32768 & t.flags)) {
                if (null !== (n = Ki(n, t, Nu)))
                    return void (Du = n);
            }
            else {
                if (null !== (n = Yi(n, t)))
                    return n.flags &= 32767, void (Du = n);
                if (null === e)
                    return Ou = 6, void (Du = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (Du = t);
            Du = t = e;
        } while (null !== t); 0 === Ou && (Ou = 5); } function Ss(e, t, n) { var r = bt, a = Lu.transition; try {
            Lu.transition = null, bt = 1, function (e, t, n, r) { do {
                Es();
            } while (null !== Yu); if (0 != (6 & Tu))
                throw Error(l(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(l(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), l = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l;
            } }(e, o), e === Ru && (Du = Ru = null, zu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Ku || (Ku = !0, Rs(tt, (function () { return Es(), null; }))), o = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || o) {
                o = Lu.transition, Lu.transition = null;
                var i = bt;
                bt = 1;
                var u = Tu;
                Tu |= 4, Pu.current = null, function (e, t) { if (ea = Vt, pr(e = fr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, o.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, d = 0, f = e, p = null;
                                t: for (;;) {
                                    for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (u = i + a), f !== o || 0 !== r && 3 !== f.nodeType || (s = i + r), 3 === f.nodeType && (i += f.nodeValue.length), null !== (h = f.firstChild);)
                                        p = f, f = h;
                                    for (;;) {
                                        if (f === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === o && ++d === r && (s = i), null !== (h = f.nextSibling))
                                            break;
                                        p = (f = p).parentNode;
                                    }
                                    f = h;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Vt = !1, Zi = t; null !== Zi;)
                    if (e = (t = Zi).child, 0 != (1028 & t.subtreeFlags) && null !== e)
                        e.return = t, Zi = e;
                    else
                        for (; null !== Zi;) {
                            t = Zi;
                            try {
                                var m = t.alternate;
                                if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(l(163));
                                    }
                            }
                            catch (e) {
                                Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zi = e;
                                break;
                            }
                            Zi = t.return;
                        } m = nu, nu = !1; }(e, n), gu(n, e), hr(ta), Vt = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Tu = u, bt = i, Lu.transition = o;
            }
            else
                e.current = n; if (Ku && (Ku = !1, Yu = e, Xu = a), 0 === (o = e.pendingLanes) && (qu = null), function (e) { if (lt && "function" == typeof lt.onCommitFiberRoot)
                try {
                    lt.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Ge()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Wu)
                throw Wu = !1, e = Qu, Qu = null, e; 0 != (1 & Xu) && 0 !== e.tag && Es(), 0 != (1 & (o = e.pendingLanes)) ? e === Ju ? Gu++ : (Gu = 0, Ju = e) : Gu = 0, $a(); }(e, t, n, r);
        }
        finally {
            Lu.transition = a, bt = r;
        } return null; } function Es() { if (null !== Yu) {
            var e = wt(Xu), t = Lu.transition, n = bt;
            try {
                if (Lu.transition = null, bt = 16 > e ? 16 : e, null === Yu)
                    var r = !1;
                else {
                    if (e = Yu, Yu = null, Xu = 0, 0 != (6 & Tu))
                        throw Error(l(331));
                    var a = Tu;
                    for (Tu |= 4, Zi = e.current; null !== Zi;) {
                        var o = Zi, i = o.child;
                        if (0 != (16 & Zi.flags)) {
                            var u = o.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zi = c; null !== Zi;) {
                                        var d = Zi;
                                        switch (d.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, d, o);
                                        }
                                        var f = d.child;
                                        if (null !== f)
                                            f.return = d, Zi = f;
                                        else
                                            for (; null !== Zi;) {
                                                var p = (d = Zi).sibling, h = d.return;
                                                if (ou(d), d === c) {
                                                    Zi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Zi = p;
                                                    break;
                                                }
                                                Zi = h;
                                            }
                                    }
                                }
                                var m = o.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zi = o;
                            }
                        }
                        if (0 != (2064 & o.subtreeFlags) && null !== i)
                            i.return = o, Zi = i;
                        else
                            e: for (; null !== Zi;) {
                                if (0 != (2048 & (o = Zi).flags))
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, o, o.return);
                                    }
                                var y = o.sibling;
                                if (null !== y) {
                                    y.return = o.return, Zi = y;
                                    break e;
                                }
                                Zi = o.return;
                            }
                    }
                    var b = e.current;
                    for (Zi = b; null !== Zi;) {
                        var w = (i = Zi).child;
                        if (0 != (2064 & i.subtreeFlags) && null !== w)
                            w.return = i, Zi = w;
                        else
                            e: for (i = b; null !== Zi;) {
                                if (0 != (2048 & (u = Zi).flags))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        Cs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Zi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zi = k;
                                    break e;
                                }
                                Zi = u.return;
                            }
                    }
                    if (Tu = a, $a(), lt && "function" == typeof lt.onPostCommitFiberRoot)
                        try {
                            lt.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Lu.transition = t;
            }
        } return !1; } function xs(e, t, n) { e = Ml(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function Cs(e, t, n) { if (3 === e.tag)
            xs(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    xs(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Ml(t, e = mi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function _s(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Ru === e && (zu & n) === n && (4 === Ou || 3 === Ou && (130023424 & zu) === zu && 500 > Ge() - $u ? ps(e, 0) : ju |= n), as(e, t); } function Ps(e, t) { 0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = ts(); null !== (e = Tl(e, t)) && (gt(e, t, n), as(e, n)); } function Ls(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Ps(e, n); } function Ts(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(l(314));
        } null !== r && r.delete(t), Ps(e, n); } function Rs(e, t) { return qe(e, t); } function Ds(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function zs(e, t, n, r) { return new Ds(e, t, n, r); } function Ns(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Ms(e, t) { var n = e.alternate; return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Os(e, t, n, r, a, o) { var i = 2; if (r = e, "function" == typeof e)
            Ns(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case E: return Fs(n.children, a, o, t);
                case x:
                    i = 8, a |= 8;
                    break;
                case C: return (e = zs(12, n, t, 2 | a)).elementType = C, e.lanes = o, e;
                case T: return (e = zs(13, n, t, a)).elementType = T, e.lanes = o, e;
                case R: return (e = zs(19, n, t, a)).elementType = R, e.lanes = o, e;
                case N: return Us(n, a, o, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case L:
                                i = 11;
                                break e;
                            case D:
                                i = 14;
                                break e;
                            case z:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(l(130, null == e ? e : typeof e, ""));
            } return (t = zs(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t; } function Fs(e, t, n, r) { return (e = zs(7, e, r, t)).lanes = n, e; } function Us(e, t, n, r) { return (e = zs(22, e, r, t)).elementType = N, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function Is(e, t, n) { return (e = zs(6, e, null, t)).lanes = n, e; } function js(e, t, n) { return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Bs(e, t, n, r, a, l, o, i, u) { return e = new As(e, t, n, i, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = zs(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dl(l), e; } function $s(e) { if (!e)
            return Pa; e: {
            if ($e(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(l(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (za(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(l(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (za(n))
                return Oa(e, n, t);
        } return t; } function Hs(e, t, n, r, a, l, o, i, u) { return (e = Bs(n, r, !0, e, 0, l, 0, i, u)).context = $s(null), n = e.current, (l = Nl(r = ts(), a = ns(n))).callback = null != t ? t : null, Ml(n, l, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Vs(e, t, n, r) { var a = t.current, l = ts(), o = ns(a); return n = $s(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Nl(l, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ml(a, t, o)) && (rs(e, a, o, l), Ol(e, a, o)), o; } function Ws(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Qs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function qs(e, t) { Qs(e, t), (e = e.alternate) && Qs(e, t); } xu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current)
                wi = !0;
            else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return wi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Ri(t), pl();
                            break;
                        case 5:
                            lo(t);
                            break;
                        case 1:
                            za(t.type) && Fa(t);
                            break;
                        case 4:
                            ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            _a(gl, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (_a(io, 1 & io.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Ii(e, t, n) : (_a(io, 1 & io.current), null !== (e = Wi(e, t, n)) ? e.sibling : null);
                            _a(io, 1 & io.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r)
                                    return Hi(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(io, io.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Ci(e, t, n);
                    } return Wi(e, t, n); }(e, t, n);
                wi = 0 != (131072 & e.flags);
            }
        else
            wi = !1, al && 0 != (1048576 & t.flags) && Za(t, Qa, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Vi(e, t), e = t.pendingProps;
                var a = Da(t, La.current);
                xl(t, n), a = xo(null, t, r, e, a, n);
                var o = Co();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, za(r) ? (o = !0, Fa(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Dl(t), a.updater = Bl, t.stateNode = a, a._reactInternals = t, Wl(t, r, e, n), t = Ti(null, t, r, !0, o, n)) : (t.tag = 0, al && o && el(t), ki(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Vi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ns(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === L)
                            return 11;
                        if (e === D)
                            return 14;
                    } return 2; }(r), e = vl(r, e), a) {
                        case 0:
                            t = Pi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Li(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Si(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ei(null, t, r, vl(r.type, e), n);
                            break e;
                    }
                    throw Error(l(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Li(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 3:
                e: {
                    if (Ri(t), null === e)
                        throw Error(l(387));
                    r = t.pendingProps, a = (o = t.memoizedState).element, zl(e, t), Ul(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Di(e, t, r, n, a = ci(Error(l(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Di(e, t, r, n, a = ci(Error(l(424)), t));
                            break e;
                        }
                        for (rl = sa(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Gl(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (pl(), r === a) {
                            t = Wi(e, t, n);
                            break e;
                        }
                        ki(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return lo(t), null === e && sl(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), _i(e, t), ki(e, t, i, n), t.child;
            case 6: return null === e && sl(t), null;
            case 13: return Ii(e, t, n);
            case 4: return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xl(t, null, r, n) : ki(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 7: return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, _a(gl, r._currentValue), r._currentValue = i, null !== o)
                        if (ir(o.value, i)) {
                            if (o.children === a.children && !Ta.current) {
                                t = Wi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var u = o.dependencies;
                                if (null !== u) {
                                    i = o.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === o.tag) {
                                                (s = Nl(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? s.next = s : (s.next = d.next, d.next = s), c.pending = s;
                                                }
                                            }
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), El(o.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    i = o.type === t.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (i = o.return))
                                        throw Error(l(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), El(i, n, t), i = o.sibling;
                                }
                                else
                                    i = o.child;
                                if (null !== i)
                                    i.return = o;
                                else
                                    for (i = o; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (o = i.sibling)) {
                                            o.return = i.return, i = o;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                o = i;
                            }
                    ki(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, xl(t, n), r = r(a = Cl(a)), t.flags |= 1, ki(e, t, r, n), t.child;
            case 14: return a = vl(r = t.type, t.pendingProps), Ei(e, t, r, a = vl(r.type, a), n);
            case 15: return xi(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), Vi(e, t), t.tag = 1, za(r) ? (e = !0, Fa(t)) : e = !1, xl(t, n), Hl(t, r, a), Wl(t, r, a, n), Ti(null, t, r, !0, e, n);
            case 19: return Hi(e, t, n);
            case 22: return Ci(e, t, n);
        } throw Error(l(156, t.tag)); }; var Ks = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ys(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var l = n._reactRootContainer; if (l) {
            var o = l;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Ws(o); i.call(e); };
            }
            Vs(t, o, e, a);
        }
        else
            o = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var l = r;
                    r = function () { var e = Ws(o); l.call(e); };
                }
                var o = Hs(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = o, e[ha] = o.current, $r(8 === e.nodeType ? e.parentNode : e), ds(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Ws(u); i.call(e); };
            } var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ha] = u.current, $r(8 === e.nodeType ? e.parentNode : e), ds((function () { Vs(t, u, n, r); })), u; }(n, t, e, a, r); return Ws(o); } Xs.prototype.render = Ys.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(l(409)); Vs(e, t, null, null); }, Xs.prototype.unmount = Ys.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ds((function () { Vs(null, e, null, null); })), t[ha] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = xt();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++)
                ;
            Nt.splice(n, 0, e), 0 === n && Ut(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = dt(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), as(t, Ge()), 0 == (6 & Tu) && (Hu = Ge() + 500, $a()));
                }
                break;
            case 13: ds((function () { var t = Tl(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), qs(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Tl(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
        } }, Et = function (e) { if (13 === e.tag) {
            var t = ns(e), n = Tl(e, t);
            null !== n && rs(n, e, t, ts()), qs(e, t);
        } }, xt = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(l(90));
                            q(r), J(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                le(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Le = cs, Te = ds; var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, _e, Pe, cs] }, nc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = We(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), lt = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Gs(t))
            throw Error(l(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Gs(e))
            throw Error(l(299)); var n = !1, r = "", a = Ks; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bs(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Ys(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(l(188));
            throw e = Object.keys(e).join(","), Error(l(268, e));
        } return null === (e = We(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return ds(e); }, t.hydrate = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Gs(e))
            throw Error(l(405)); var r = null != n && n.hydratedSources || null, a = !1, o = "", i = Ks; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Hs(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[ha] = t.current, $r(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Js(t))
            throw Error(l(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Js(e))
            throw Error(l(40)); return !!e._reactRootContainer && (ds((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Js(n))
            throw Error(l(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(l(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 745: function (e, t, n) { var r = n(935); t.s = r.createRoot, r.hydrateRoot; }, 935: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(448); }, 251: function (e, t, n) { var r = n(294), a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 }; function s(e, t, n) { var r, l = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === l[r] && (l[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: l, _owner: i.current }; } t.Fragment = l, t.jsx = s, t.jsxs = s; }, 408: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, E = { current: null }, x = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, l = {}, o = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)
                S.call(t, a) && !x.hasOwnProperty(a) && (l[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            l.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            l.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === l[a] && (l[a] = u[a]); return { $$typeof: n, type: e, key: o, ref: i, props: l, _owner: E.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function L(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function T(e, t, a, l, o) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return o = o(u = e), e = "" === l ? "." + L(u, 0) : l, k(o) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), T(o, t, a, "", (function (e) { return e; }))) : null != o && (_(o) && (o = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1; if (u = 0, l = "" === l ? "." : l + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = l + L(i = e[s], s);
                u += T(i, t, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += T(i = i.value, t, a, c = l + L(i, s++), o);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function R(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return T(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function D(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var z = { current: null }, N = { transition: null }, M = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: N, ReactCurrentOwner: E }; t.Children = { map: R, forEach: function (e, t, n) { R(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return R(e, (function () { t++; })), t; }, toArray: function (e) { return R(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), l = e.key, o = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, i = E.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !x.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: l, ref: o, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: D }; }, t.memo = function (e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = N.transition; N.transition = {}; try {
            e();
        }
        finally {
            N.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return z.current.useCallback(e, t); }, t.useContext = function (e) { return z.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return z.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return z.current.useEffect(e, t); }, t.useId = function () { return z.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return z.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return z.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return z.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return z.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return z.current.useReducer(e, t, n); }, t.useRef = function (e) { return z.current.useRef(e); }, t.useState = function (e) { return z.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return z.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return z.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, n) { e.exports = n(408); }, 893: function (e, t, n) { e.exports = n(251); }, 53: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < l(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > l(u, n))
                    s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > l(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function l(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], d = 1, f = null, p = 3, h = !1, m = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !m)
            if (null !== r(s))
                m = !0, N(S);
            else {
                var t = r(c);
                null !== t && M(k, t.startTime - e);
            } } function S(e, n) { m = !1, v && (v = !1, y(_), _ = -1), h = !0; var l = p; try {
            for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || e && !T());) {
                var o = f.callback;
                if ("function" == typeof o) {
                    f.callback = null, p = f.priorityLevel;
                    var i = o(f.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? f.callback = i : f === r(s) && a(s), w(n);
                }
                else
                    a(s);
                f = r(s);
            }
            if (null !== f)
                var u = !0;
            else {
                var d = r(c);
                null !== d && M(k, d.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            f = null, p = l, h = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var E, x = !1, C = null, _ = -1, P = 5, L = -1; function T() { return !(t.unstable_now() - L < P); } function R() { if (null !== C) {
            var e = t.unstable_now();
            L = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? E() : (x = !1, C = null);
            }
        }
        else
            x = !1; } if ("function" == typeof b)
            E = function () { b(R); };
        else if ("undefined" != typeof MessageChannel) {
            var D = new MessageChannel, z = D.port2;
            D.port1.onmessage = R, E = function () { z.postMessage(null); };
        }
        else
            E = function () { g(R, 0); }; function N(e) { C = e, x || (x = !0, E()); } function M(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, N(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, l) { var o = t.unstable_now(); switch (l = "object" == typeof l && null !== l && "number" == typeof (l = l.delay) && 0 < l ? o + l : o, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: d++, callback: a, priorityLevel: e, startTime: l, expirationTime: i = l + i, sortIndex: -1 }, l > o ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, M(k, l - o))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, N(S))), e; }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 840: function (e, t, n) { e.exports = n(53); } }, l = {};
    function o(e) { var t = l[e]; if (void 0 !== t)
        return t.exports; var n = l[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var l = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((function (e) { return l[e] = function () { return n[e]; }; })); return l.default = function () { return n; }, o.d(a, l), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce((function (t, n) { return (o.f[n](e, t), t); }), [])); }, o.u = function (e) { return e + "." + { 314: "8b71e3666602b385b386", 989: "0b0a2bdaa3af9d68a569" }[e] + ".js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "webpack-course:", o.l = function (e, t, a, l) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var d = s[c];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                    i = d;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var f = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(f.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), u && document.head.appendChild(i);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && !e;)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 179: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var l = o.p + o.u(t), i = new Error;
            o.l(l, (function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", i.name = "ChunkLoadError", i.type = a, i.request = l, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, l = n[0], i = n[1], u = n[2], s = 0; if (l.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            o.o(i, r) && (o.m[r] = i[r]);
        u && u(o);
    } for (t && t(n); s < l.length; s++)
        a = l[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkwebpack_course = self.webpackChunkwebpack_course || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e, t = o(893), n = o(294), r = o.t(n, 2), a = o(935), l = o.t(a, 2); function i() { return i = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, i.apply(this, arguments); } !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {})); var u = "popstate"; function s(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function c(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function d(e, t) { return { usr: e.state, key: e.key, idx: t }; } function f(e, t, n, r) { return void 0 === n && (n = null), i({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? h(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function p(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function h(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var m; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(m || (m = {})); var v = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function g(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var l = __spreadArray(__spreadArray([], n, true), [a], false), o = "string" == typeof e.id ? e.id : l.join("-"); if (s(!0 !== e.index || !e.children, "Cannot specify children on an index route"), s(!r[o], 'Found a route id collision on id "' + o + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = i({}, e, t(e), { id: o });
        return r[o] = n_2, n_2;
    } {
        var n_3 = i({}, e, t(e), { id: o, children: void 0 });
        return r[o] = n_3, e.children && (n_3.children = g(e.children, t, l, r)), n_3;
    } })); } function y(e, t, n) { void 0 === n && (n = "/"); var r = z(("string" == typeof t ? h(t) : t).pathname || "/", n); if (null == r)
        return null; var a = b(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var l = null; for (var e_1 = 0; null == l && e_1 < a.length; ++e_1)
        l = T(a[e_1], D(r)); return l; } function b(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, l) { var o = { relativePath: void 0 === l ? e.path || "" : l, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (s(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var i = O([r, o.relativePath]), u = n.concat(o); e.children && e.children.length > 0 && (s(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), b(e.children, t, u, i)), (null != e.path || e.index) && t.push({ path: i, score: L(i, e.index), routesMeta: u }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = w(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function w(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), l = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [l, ""] : [l]; var o = w(r.join("/")), i = []; return i.push.apply(i, o.map((function (e) { return "" === e ? l : [l, e].join("/"); }))), a && i.push.apply(i, o), i.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var k = /^:\w+$/, S = 3, E = 2, x = 1, C = 10, _ = -2, P = function (e) { return "*" === e; }; function L(e, t) { var n = e.split("/"), r = n.length; return n.some(P) && (r += _), t && (r += E), n.filter((function (e) { return !P(e); })).reduce((function (e, t) { return e + (k.test(t) ? S : "" === t ? x : C); }), r); } function T(e, t) { var n = e.routesMeta, r = {}, a = "/", l = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var o_1 = n[e_2], i_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = R({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        l.push({ params: r, pathname: O([a, s_1.pathname]), pathnameBase: F(O([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = O([a, s_1.pathnameBase]));
    } return l; } function R(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (function (e, t, n) { return (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push({ paramName: "*" }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce((function (e, t, n) { var r = t.paramName, a = t.isOptional; if ("*" === r) {
            var e_3 = i[n] || "";
            o = l.slice(0, l.length - e_3.length).replace(/(.)\/+$/, "$1");
        } var u = i[n]; return e[r] = a && !u ? void 0 : function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(u || "", r), e; }), {}), pathname: l, pathnameBase: o, pattern: e }; } function D(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function z(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function N(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function M(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } var O = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, F = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, U = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, I = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var j = /** @class */ (function () {
            function j(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return j;
        }()); function A(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var B = ["post", "put", "patch", "delete"], $ = new Set(B), H = __spreadArray(["get"], B, true), V = new Set(H), W = new Set([301, 302, 303, 307, 308]), Q = new Set([307, 308]), q = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, K = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Y = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, X = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, G = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }, J = "remix-router-transitions"; function Z(e, t, n, r, a, l, o, u) { var c, d; if (o) {
        c = [];
        for (var _b = 0, t_1 = t; _b < t_1.length; _b++) {
            var e_4 = t_1[_b];
            if (c.push(e_4), e_4.route.id === o) {
                d = e_4;
                break;
            }
        }
    }
    else
        c = t, d = t[t.length - 1]; var f = function (e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = h(e) : (a = i({}, e), s(!a.pathname || !a.pathname.includes("?"), N("?", "pathname", "search", a)), s(!a.pathname || !a.pathname.includes("#"), N("#", "pathname", "hash", a)), s(!a.search || !a.search.includes("#"), N("#", "search", "hash", a))); var l, o = "" === e || "" === a.pathname, u = o ? "/" : a.pathname; if (null == u)
        l = n;
    else if (r) {
        var e_5 = 0 === t.length ? [] : t[t.length - 1].replace(/^\//, "").split("/");
        if (u.startsWith("..")) {
            var t_2 = u.split("/");
            for (; ".." === t_2[0];)
                t_2.shift(), e_5.pop();
            a.pathname = t_2.join("/");
        }
        l = "/" + e_5.join("/");
    }
    else {
        var e_6 = t.length - 1;
        if (u.startsWith("..")) {
            var t_3 = u.split("/");
            for (; ".." === t_3[0];)
                t_3.shift(), e_6 -= 1;
            a.pathname = t_3.join("/");
        }
        l = e_6 >= 0 ? t[e_6] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? h(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, l = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: l, search: U(r), hash: I(a) }; }(a, l), d = u && "/" !== u && u.endsWith("/"), f = (o || "." === u) && n.endsWith("/"); return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c; }(a || ".", function (e, t) { var n = M(e); return t ? n.map((function (t, n) { return n === e.length - 1 ? t.pathname : t.pathnameBase; })) : n.map((function (e) { return e.pathnameBase; })); }(c, l), z(e.pathname, n) || e.pathname, "path" === u); return null == a && (f.search = e.search, f.hash = e.hash), null != a && "" !== a && "." !== a || !d || !d.route.index || Se(f.search) || (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (f.pathname = "/" === f.pathname ? n : O([n, f.pathname])), p(f); } function ee(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !V.has(a.toLowerCase())))
        return { path: n, error: pe(405, { method: r.formMethod }) }; var a; var l, o, i = function () { return ({ path: n, error: pe(400, { type: "invalid-body" }) }); }, u = r.formMethod || "get", c = e ? u.toUpperCase() : u.toLowerCase(), d = me(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!be(c))
                return i();
            var e_7 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: c, formAction: d, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_7 } };
        }
        if ("application/json" === r.formEncType) {
            if (!be(c))
                return i();
            try {
                var e_8 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: c, formAction: d, formEncType: r.formEncType, formData: void 0, json: e_8, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (s("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        l = ie(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        l = ie(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        l = r.body, o = ue(l);
    else if (null == r.body)
        l = new URLSearchParams, o = new FormData;
    else
        try {
            l = new URLSearchParams(r.body), o = ue(l);
        }
        catch (e) {
            return i();
        } var f = { formMethod: c, formAction: d, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (be(f.formMethod))
        return { path: n, submission: f }; var m = h(n); return t && m.search && Se(m.search) && l.append("index", ""), m.search = "?" + l, { path: p(m), submission: f }; } function te(e, t, n, r, a, l, o, u, s, c, d, f, p, h, m, v) { var g = v ? Object.values(v)[0] : m ? Object.values(m)[0] : void 0, b = e.createURL(t.location), w = e.createURL(a), k = v ? Object.keys(v)[0] : void 0, S = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, k).filter((function (e, n) { if (l)
        return function (e, t) { return !!t.loader && (!!t.loader.hydrate || void 0 === e.loaderData[t.id] && (!e.errors || void 0 === e.errors[t.id])); }(t, e.route); if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || u.some((function (t) { return t === e.route.id; })))
        return !0; var a = t.matches[n], s = e; return re(e, i({ currentUrl: b, currentParams: a.params, nextUrl: w, nextParams: s.params }, r, { actionResult: g, defaultShouldRevalidate: o || b.pathname + b.search === w.pathname + w.search || b.search !== w.search || ne(a, s) })); })), E = []; return d.forEach((function (e, a) { if (l || !n.some((function (t) { return t.route.id === e.routeId; })) || c.has(a))
        return; var u = y(p, e.path, h); if (!u)
        return void E.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var d = t.fetchers.get(a), m = Ee(u, e.path), v = !1; v = !f.has(a) && (!!s.includes(a) || (d && "idle" !== d.state && void 0 === d.data ? o : re(m, i({ currentUrl: b, currentParams: t.matches[t.matches.length - 1].params, nextUrl: w, nextParams: n[n.length - 1].params }, r, { actionResult: g, defaultShouldRevalidate: o })))), v && E.push({ key: a, routeId: e.routeId, path: e.path, matches: u, match: m, controller: new AbortController }); })), [S, E]; } function ne(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function re(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function ae(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, l, e_9, t_4; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    s(a, "No route found in manifest");
                    l = {};
                    for (e_9 in r) {
                        t_4 = void 0 !== a[e_9] && "hasErrorBoundary" !== e_9;
                        c(!t_4, 'Route "' + a.id + '" has a static property "' + e_9 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_9 + '" will be ignored.'), t_4 || v.has(e_9) || (l[e_9] = r[e_9]);
                    }
                    Object.assign(a, l), Object.assign(a, i({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function le(e, t, n, r, a, l, o, i, u) {
        return __awaiter(this, void 0, void 0, function () { var c, d, f, p, r_3, e_12, t_5, e_13, r_4, e_14, e_10, e_15, a_1, e_16, n_6, r_5, a_2, t_6, _b, e_11, h, v, g; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    void 0 === u && (u = {});
                    p = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return f = function () { return r(); }, t.signal.addEventListener("abort", f), Promise.race([e({ request: t, params: n.params, context: u.requestContext }), a]); };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([p(r_3).catch((function (t) { e_12 = t; })), ae(n.route, l, a)])];
                case 2:
                    t_5 = _c.sent();
                    if (e_12)
                        throw e_12;
                    d = t_5[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, ae(n.route, l, a)];
                case 4:
                    if (_c.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_13 = new URL(t.url), r_4 = e_13.pathname + e_13.search;
                            throw pe(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: m.data, data: void 0 }];
                    }
                    return [4 /*yield*/, p(r_3)];
                case 5:
                    d = _c.sent();
                    _c.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_14 = new URL(t.url);
                        throw pe(404, { pathname: e_14.pathname + e_14.search });
                    }
                    return [4 /*yield*/, p(r_3)];
                case 8:
                    d = _c.sent();
                    _c.label = 9;
                case 9:
                    s(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_10 = _c.sent();
                    c = m.error, d = e_10;
                    return [3 /*break*/, 12];
                case 11:
                    f && t.signal.removeEventListener("abort", f);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (h = d) && "number" == typeof h.status && "string" == typeof h.statusText && "object" == typeof h.headers && void 0 !== h.body)) return [3 /*break*/, 20];
                    a_1 = d.status;
                    if (W.has(a_1)) {
                        e_16 = d.headers.get("Location");
                        if (s(e_16, "Redirects returned/thrown from loaders/actions must have a Location header"), X.test(e_16)) {
                            if (!u.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_16.startsWith("//") ? new URL(n_6.protocol + e_16) : new URL(e_16), a_2 = null != z(r_5.pathname, o);
                                r_5.origin === n_6.origin && a_2 && (e_16 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_16 = Z(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_16, i);
                        if (u.isStaticRequest)
                            throw d.headers.set("Location", e_16), d;
                        return [2 /*return*/, { type: m.redirect, status: a_1, location: e_16, revalidate: null !== d.headers.get("X-Remix-Revalidate"), reloadDocument: null !== d.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (u.isRouteRequest)
                        throw { type: c === m.error ? m.error : m.data, response: d };
                    _c.label = 13;
                case 13:
                    _c.trys.push([13, 18, , 19]);
                    t_6 = d.headers.get("Content-Type");
                    if (!(t_6 && /\bapplication\/json\b/.test(t_6))) return [3 /*break*/, 15];
                    return [4 /*yield*/, d.json()];
                case 14:
                    _b = _c.sent();
                    return [3 /*break*/, 17];
                case 15: return [4 /*yield*/, d.text()];
                case 16:
                    _b = _c.sent();
                    _c.label = 17;
                case 17:
                    e_15 = _b;
                    return [3 /*break*/, 19];
                case 18:
                    e_11 = _c.sent();
                    return [2 /*return*/, { type: m.error, error: e_11 }];
                case 19: return [2 /*return*/, c === m.error ? { type: c, error: new j(a_1, d.statusText, e_15), headers: d.headers } : { type: m.data, data: e_15, statusCode: d.status, headers: d.headers }];
                case 20: return [2 /*return*/, c === m.error ? { type: c, error: d } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(d) ? { type: m.deferred, deferredData: d, statusCode: null == (v = d.init) ? void 0 : v.status, headers: (null == (g = d.init) ? void 0 : g.headers) && new Headers(d.init.headers) } : { type: m.data, data: d }];
            }
        }); });
    } function oe(e, t, n, r) { var a = e.createURL(me(t)).toString(), l = { signal: n }; if (r && be(r.formMethod)) {
        var e_17 = r.formMethod, t_7 = r.formEncType;
        l.method = e_17.toUpperCase(), "application/json" === t_7 ? (l.headers = new Headers({ "Content-Type": t_7 }), l.body = JSON.stringify(r.json)) : "text/plain" === t_7 ? l.body = r.text : "application/x-www-form-urlencoded" === t_7 && r.formData ? l.body = ie(r.formData) : l.body = r.formData;
    } return new Request(a, l); } function ie(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function ue(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function se(e, t, n, r, a, l, o, u) {
        var _b;
        var _c = function (e, t, n, r, a) { var l, o = {}, i = null, u = !1, c = {}; return n.forEach((function (n, d) { var f = t[d].route.id; if (s(!ye(n), "Cannot handle redirect results in processLoaderData"), ge(n)) {
            var t_8 = de(e, f), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_8.route.id] && (i[t_8.route.id] = a_3), o[f] = void 0, u || (u = !0, l = A(n.error) ? n.error.status : 500), n.headers && (c[f] = n.headers);
        }
        else
            ve(n) ? (a.set(f, n.deferredData), o[f] = n.deferredData.data) : o[f] = n.data, null == n.statusCode || 200 === n.statusCode || u || (l = n.statusCode), n.headers && (c[f] = n.headers); })), r && (i = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: c }; }(t, n, r, a, u), c = _c.loaderData, d = _c.errors;
        for (var t_9 = 0; t_9 < l.length; t_9++) {
            var _d = l[t_9], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            s(void 0 !== o && void 0 !== o[t_9], "Did not find corresponding fetcher result");
            var u_2 = o[t_9];
            if (!a_4 || !a_4.signal.aborted)
                if (ge(u_2)) {
                    var t_10 = de(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    d && d[t_10.route.id] || (d = i({}, d, (_b = {}, _b[t_10.route.id] = u_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (ye(u_2))
                    s(!1, "Unhandled fetcher revalidation redirect");
                else if (ve(u_2))
                    s(!1, "Unhandled fetcher deferred data");
                else {
                    var t_11 = Pe(u_2.data);
                    e.fetchers.set(n_9, t_11);
                }
        }
        return { loaderData: c, errors: d };
    } function ce(e, t, n, r) { var a = i({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var l_1 = n_10[_b];
        var n_11 = l_1.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && l_1.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function de(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function fe(e) { var t = 1 === e.length ? e[0] : e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function pe(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, l = _b.type, o = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === l ? i = "defer() is not supported in actions" : "invalid-body" === l && (i = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new j(e || 500, o, new Error(i), !0); } function he(e) { for (var t_12 = e.length - 1; t_12 >= 0; t_12--) {
        var n_12 = e[t_12];
        if (ye(n_12))
            return { result: n_12, idx: t_12 };
    } } function me(e) { return p(i({}, "string" == typeof e ? h(e) : e, { hash: "" })); } function ve(e) { return e.type === m.deferred; } function ge(e) { return e.type === m.error; } function ye(e) { return (e && e.type) === m.redirect; } function be(e) { return $.has(e.toLowerCase()); } function we(e, t, n, r, a, l) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var i_2, u_3, c_2, d_1, e_18;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    i_2 = n[o_2], u_3 = t[o_2];
                                    if (!u_3)
                                        return [2 /*return*/, "continue"];
                                    c_2 = e.find((function (e) { return e.route.id === u_3.route.id; })), d_1 = null != c_2 && !ne(c_2, u_3) && void 0 !== (l && l[u_3.route.id]);
                                    if (!(ve(i_2) && (a || d_1))) return [3 /*break*/, 2];
                                    e_18 = r[o_2];
                                    s(e_18, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, ke(i_2, e_18, a).then((function (e) { e && (n[o_2] = e || n[o_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function ke(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: m.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: m.error, error: e }];
                            }
                        return [2 /*return*/, { type: m.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function Se(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function Ee(e, t) { var n = "string" == typeof t ? h(t).search : t.search; if (e[e.length - 1].route.index && Se(n || ""))
        return e[e.length - 1]; var r = M(e); return r[r.length - 1]; } function xe(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, l = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != l ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; } function Ce(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function _e(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function Pe(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function Le() { return Le = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Le.apply(this, arguments); } Symbol("deferred"); var Te = n.createContext(null), Re = n.createContext(null), De = n.createContext(null), ze = n.createContext(null), Ne = n.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Me = n.createContext(null); function Oe() { return null != n.useContext(ze); } function Fe(t, r, a, l) { Oe() || s(!1); var o = n.useContext(De).navigator, i = n.useContext(Ne).matches, u = i[i.length - 1], c = u ? u.params : {}, d = (u && u.pathname, u ? u.pathnameBase : "/"); u && u.route; var f, p = (Oe() || s(!1), n.useContext(ze).location); if (r) {
        var m;
        var e_19 = "string" == typeof r ? h(r) : r;
        "/" === d || (null == (m = e_19.pathname) ? void 0 : m.startsWith(d)) || s(!1), f = e_19;
    }
    else
        f = p; var v = f.pathname || "/", g = y(t, { pathname: "/" === d ? v : v.slice(d.length) || "/" }), b = function (e, t, r, a) { var l; if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === a && (a = null), null == e) {
        var o;
        if (null == (o = r) || !o.errors)
            return null;
        e = r.matches;
    } var i = e, u = null == (l = r) ? void 0 : l.errors; if (null != u) {
        var e_20 = i.findIndex((function (e) { return e.route.id && (null == u ? void 0 : u[e.route.id]); }));
        e_20 >= 0 || s(!1), i = i.slice(0, Math.min(i.length, e_20 + 1));
    } var c = !1, d = -1; if (r && a && a.v7_partialHydration)
        for (var e_21 = 0; e_21 < i.length; e_21++) {
            var t_13 = i[e_21];
            if ((t_13.route.HydrateFallback || t_13.route.hydrateFallbackElement) && (d = e_21), t_13.route.loader && t_13.route.id && void 0 === r.loaderData[t_13.route.id] && (!r.errors || void 0 === r.errors[t_13.route.id])) {
                c = !0, i = d >= 0 ? i.slice(0, d + 1) : [i[0]];
                break;
            }
        } return i.reduceRight((function (e, a, l) { var o, s = !1, f = null, p = null; var h; r && (o = u && a.route.id ? u[a.route.id] : void 0, f = a.route.errorElement || Ie, c && (d < 0 && 0 === l ? ($e[h = "route-fallback"] || ($e[h] = !0), s = !0, p = null) : d === l && (s = !0, p = a.route.hydrateFallbackElement || null))); var m = t.concat(i.slice(0, l + 1)), v = function () { var t; return t = o ? f : s ? p : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(Ae, { match: a, routeContext: { outlet: e, matches: m, isDataRoute: null != r }, children: t }); }; return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? n.createElement(je, { location: r.location, revalidation: r.revalidation, component: f, error: o, children: v(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : v(); }), null); }(g && g.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, c, e.params), pathname: O([d, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? d : O([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), i, a, l); return r && b ? n.createElement(ze.Provider, { value: { location: Le({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: e.Pop } }, b) : b; } function Ue() { var e = function () { var e; var t = n.useContext(Me), r = function (e) { var t = n.useContext(Re); return t || s(!1), t; }(Be.UseRouteError), a = function (e) { var t = function (e) { var t = n.useContext(Ne); return t || s(!1), t; }(), r = t.matches[t.matches.length - 1]; return r.route.id || s(!1), r.route.id; }(Be.UseRouteError); return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[a]; }(), t = A(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? n.createElement("pre", { style: a }, r) : null, null); } var Ie = n.createElement(Ue, null);
        var je = /** @class */ (function (_super) {
            __extends(je, _super);
            function je(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            je.getDerivedStateFromError = function (e) { return { error: e }; };
            je.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            je.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            je.prototype.render = function () { return void 0 !== this.state.error ? n.createElement(Ne.Provider, { value: this.props.routeContext }, n.createElement(Me.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return je;
        }(n.Component)); function Ae(e) { var t = e.routeContext, r = e.match, a = e.children, l = n.useContext(Te); return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(Ne.Provider, { value: t }, a); } var Be = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Be || {}); var $e = {}; function He(t) { var _b = t.basename, r = _b === void 0 ? "/" : _b, _c = t.children, a = _c === void 0 ? null : _c, l = t.location, _d = t.navigationType, o = _d === void 0 ? e.Pop : _d, i = t.navigator, _f = t.static, u = _f === void 0 ? !1 : _f, c = t.future; Oe() && s(!1); var d = r.replace(/^\/*/, "/"), f = n.useMemo((function () { return ({ basename: d, navigator: i, static: u, future: Le({ v7_relativeSplatPath: !1 }, c) }); }), [d, c, i, u]); "string" == typeof l && (l = h(l)); var _g = l.pathname, p = _g === void 0 ? "/" : _g, _h = l.search, m = _h === void 0 ? "" : _h, _j = l.hash, v = _j === void 0 ? "" : _j, _k = l.state, g = _k === void 0 ? null : _k, _m = l.key, y = _m === void 0 ? "default" : _m, b = n.useMemo((function () { var e = z(p, d); return null == e ? null : { location: { pathname: e, search: m, hash: v, state: g, key: y }, navigationType: o }; }), [d, p, m, v, g, y, o]); return null == b ? null : n.createElement(De.Provider, { value: f }, n.createElement(ze.Provider, { children: a, value: b })); } function Ve() { return Ve = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Ve.apply(this, arguments); } function We(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_14 = t; _b < t_14.length; _b++) {
        var _c = t_14[_b], e_22 = _c[0], r_9 = _c[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_22] = new j(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_15 = window[r_9.__subType];
                if ("function" == typeof t_15)
                    try {
                        var a_5 = new t_15(r_9.message);
                        a_5.stack = "", n[e_22] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_22]) {
                var t_16 = new Error(r_9.message);
                t_16.stack = "", n[e_22] = t_16;
            }
        }
        else
            n[e_22] = r_9;
    } return n; } r.startTransition, new Promise((function () { })), n.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); var Qe = n.createContext({ isTransitioning: !1 }), qe = n.createContext(new Map), Ke = r.startTransition, Ye = l.flushSync; function Xe(e) { Ye ? Ye(e) : e(); }
        var Ge = /** @class */ (function () {
            function Ge() {
                var _this = this;
                this.status = "pending", this.promise = new Promise((function (e, t) { _this.resolve = function (t) { "pending" === _this.status && (_this.status = "resolved", e(t)); }, _this.reject = function (e) { "pending" === _this.status && (_this.status = "rejected", t(e)); }; }));
            }
            return Ge;
        }()); function Je(e) { var t = e.routes, n = e.future, r = e.state; return Fe(t, void 0, r, n); } var Ze, et, tt; "undefined" != typeof window && void 0 !== window.document && window.document.createElement, (tt = Ze || (Ze = {})).UseScrollRestoration = "useScrollRestoration", tt.UseSubmit = "useSubmit", tt.UseSubmitFetcher = "useSubmitFetcher", tt.UseFetcher = "useFetcher", tt.useViewTransitionState = "useViewTransitionState", function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(et || (et = {})), o.p; var nt, rt, at = o(745), lt = (0, n.lazy)((function () { return o.e(314).then(o.bind(o, 314)); })), ot = (0, n.lazy)((function () { return o.e(989).then(o.bind(o, 989)); })), it = (nt = [{ path: "/", element: (0, t.jsx)((function () { var e = (0, n.useState)(0); return e[0], e[1], (0, t.jsx)("div", { children: "Your platform: Mobile" }); }), {}), children: [{ path: "/about", element: (0, t.jsx)(n.Suspense, { fallback: "Loading...", children: (0, t.jsx)(lt, {}) }) }, { path: "/shop", element: (0, t.jsx)(n.Suspense, { fallback: "Loading...", children: (0, t.jsx)(ot, {}) }) }] }], function (t) {
        var _b;
        var n = t.window ? t.window : "undefined" != typeof window ? window : void 0, r = void 0 !== n && void 0 !== n.document && void 0 !== n.document.createElement, a = !r;
        var l;
        if (s(t.routes.length > 0, "You must provide a non-empty routes array to createRouter"), t.mapRouteProperties)
            l = t.mapRouteProperties;
        else if (t.detectErrorBoundary) {
            var e_23 = t.detectErrorBoundary;
            l = function (t) { return ({ hasErrorBoundary: e_23(t) }); };
        }
        else
            l = G;
        var o, u, d = {}, p = g(t.routes, l, void 0, d), h = t.basename || "/", v = i({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_partialHydration: !1, v7_prependBasename: !1, v7_relativeSplatPath: !1 }, t.future), b = null, w = new Set, k = null, S = null, E = null, x = null != t.hydrationData, C = y(p, t.history.location, h), _ = null;
        if (null == C) {
            var e_24 = pe(404, { pathname: t.history.location.pathname }), _c = fe(p), n_13 = _c.matches, r_10 = _c.route;
            C = n_13, _ = (_b = {}, _b[r_10.id] = e_24, _b);
        }
        var P, L = C.some((function (e) { return e.route.lazy; })), T = C.some((function (e) { return e.route.loader; }));
        if (L)
            u = !1;
        else if (T)
            if (v.v7_partialHydration) {
                var e_25 = t.hydrationData ? t.hydrationData.loaderData : null, n_14 = t.hydrationData ? t.hydrationData.errors : null;
                u = C.every((function (t) { return t.route.loader && !0 !== t.route.loader.hydrate && (e_25 && void 0 !== e_25[t.route.id] || n_14 && void 0 !== n_14[t.route.id]); }));
            }
            else
                u = null != t.hydrationData;
        else
            u = !0;
        var R, D = { historyAction: t.history.action, location: t.history.location, matches: C, initialized: u, navigation: q, restoreScrollPosition: null == t.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: t.hydrationData && t.hydrationData.loaderData || {}, actionData: t.hydrationData && t.hydrationData.actionData || null, errors: t.hydrationData && t.hydrationData.errors || _, fetchers: new Map, blockers: new Map }, N = e.Pop, M = !1, O = !1, F = new Map, U = null, I = !1, j = !1, A = [], B = [], $ = new Map, H = 0, V = -1, W = new Map, ne = new Set, re = new Map, ae = new Map, ie = new Set, ue = new Map, me = new Map, Se = !1;
        function Le(e, t) { void 0 === t && (t = {}), D = i({}, D, e); var n = [], r = []; v.v7_fetcherPersist && D.fetchers.forEach((function (e, t) { "idle" === e.state && (ie.has(t) ? r.push(t) : n.push(t)); })), __spreadArray([], w, true).forEach((function (e) { return e(D, { deletedFetchers: r, unstable_viewTransitionOpts: t.viewTransitionOpts, unstable_flushSync: !0 === t.flushSync }); })), v.v7_fetcherPersist && (n.forEach((function (e) { return D.fetchers.delete(e); })), r.forEach((function (e) { return Ue(e); }))); }
        function Te(n, r, a) { var l, u; var s, c = (void 0 === a ? {} : a).flushSync, d = null != D.actionData && null != D.navigation.formMethod && be(D.navigation.formMethod) && "loading" === D.navigation.state && !0 !== (null == (l = n.state) ? void 0 : l._isRedirect); s = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : d ? D.actionData : null; var f = r.loaderData ? ce(D.loaderData, r.loaderData, r.matches || [], r.errors) : D.loaderData, h = D.blockers; h.size > 0 && (h = new Map(h), h.forEach((function (e, t) { return h.set(t, Y); }))); var m, v = !0 === M || null != D.navigation.formMethod && be(D.navigation.formMethod) && !0 !== (null == (u = n.state) ? void 0 : u._isRedirect); if (o && (p = o, o = void 0), I || N === e.Pop || (N === e.Push ? t.history.push(n, n.state) : N === e.Replace && t.history.replace(n, n.state)), N === e.Pop) {
            var e_26 = F.get(D.location.pathname);
            e_26 && e_26.has(n.pathname) ? m = { currentLocation: D.location, nextLocation: n } : F.has(n.pathname) && (m = { currentLocation: n, nextLocation: D.location });
        }
        else if (O) {
            var e_27 = F.get(D.location.pathname);
            e_27 ? e_27.add(n.pathname) : (e_27 = new Set([n.pathname]), F.set(D.location.pathname, e_27)), m = { currentLocation: D.location, nextLocation: n };
        } Le(i({}, r, { actionData: s, loaderData: f, historyAction: N, location: n, initialized: !0, navigation: q, revalidation: "idle", restoreScrollPosition: qe(n, r.matches || D.matches), preventScrollReset: v, blockers: h }), { viewTransitionOpts: m, flushSync: !0 === c }), N = e.Pop, M = !1, O = !1, I = !1, j = !1, A = [], B = []; }
        function Re(n, r, a) {
            return __awaiter(this, void 0, void 0, function () {
                var u, s, c, f, e_28, _b, t_17, n_15, g, b, w, S, x, t_18, _c, C, _, P;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            R && R.abort(), R = null, N = n, I = !0 === (a && a.startUninterruptedRevalidation), function (e, t) { if (k && E) {
                                var n_16 = Qe(e, t);
                                k[n_16] = E();
                            } }(D.location, D.matches), M = !0 === (a && a.preventScrollReset), O = !0 === (a && a.enableViewTransition);
                            u = o || p, s = a && a.overrideNavigation, c = y(u, r, h), f = !0 === (a && a.flushSync);
                            if (!c) {
                                e_28 = pe(404, { pathname: r.pathname }), _b = fe(u), t_17 = _b.matches, n_15 = _b.route;
                                return [2 /*return*/, (We(), void Te(r, { matches: t_17, loaderData: {}, errors: (_d = {}, _d[n_15.id] = e_28, _d) }, { flushSync: f }))];
                            }
                            if (D.initialized && !j && (g = D.location, b = r, g.pathname === b.pathname && g.search === b.search && ("" === g.hash ? "" !== b.hash : g.hash === b.hash || "" !== b.hash)) && !(a && a.submission && be(a.submission.formMethod)))
                                return [2 /*return*/, void Te(r, { matches: c }, { flushSync: f })];
                            R = new AbortController;
                            x = oe(t.history, r, R.signal, a && a.submission);
                            if (!(a && a.pendingError)) return [3 /*break*/, 1];
                            S = (_f = {}, _f[de(c).route.id] = a.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(a && a.submission && be(a.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (t, n, r, a, o) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var i, u, s, e_29, t_19;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === o && (o = {}), Ne();
                                                    u = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(n, r);
                                                    Le({ navigation: u }, { flushSync: !0 === o.flushSync });
                                                    s = Ee(a, n);
                                                    if (!(s.route.action || s.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, le("action", t, s, a, d, l, h, v.v7_relativeSplatPath)];
                                                case 1:
                                                    if (i = _d.sent(), t.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    i = { type: m.error, error: pe(405, { method: t.method, pathname: n.pathname, routeId: s.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!ye(i)) return [3 /*break*/, 5];
                                                    e_29 = o && null != o.replace ? o.replace : i.location === D.location.pathname + D.location.search;
                                                    return [4 /*yield*/, De(D, i, { submission: r, replace: e_29 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (ge(i)) {
                                                        t_19 = de(a, s.route.id);
                                                        return [2 /*return*/, (!0 !== (o && o.replace) && (N = e.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[t_19.route.id] = i.error, _b) })];
                                                    }
                                                    if (ve(i))
                                                        throw pe(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[s.route.id] = i.data, _c) }];
                                            }
                                        });
                                    });
                                }(x, r, a.submission, c, { replace: a.replace, flushSync: f })];
                        case 2:
                            t_18 = _g.sent();
                            if (t_18.shortCircuited)
                                return [2 /*return*/];
                            w = t_18.pendingActionData, S = t_18.pendingActionError, s = Ce(r, a.submission), f = !1, x = new Request(x.url, { signal: x.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (e, n, r, a, l, u, s, c, d, f, m) {
                                return __awaiter(this, void 0, void 0, function () { var g, y, b, _b, w, k, e_30, e_31, S, _c, E, x, C, _, e_32, _d, P, L, T, z; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            g = a || Ce(n, l), y = l || u || xe(g), b = o || p, _b = te(t.history, D, r, y, n, v.v7_partialHydration && !0 === c, j, A, B, ie, re, ne, b, h, f, m), w = _b[0], k = _b[1];
                                            if (We((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || w && w.some((function (t) { return t.route.id === e; })); })), V = ++H, 0 === w.length && 0 === k.length) {
                                                e_30 = Ae();
                                                return [2 /*return*/, (Te(n, i({ matches: r, loaderData: {}, errors: m || null }, f ? { actionData: f } : {}, e_30 ? { fetchers: new Map(D.fetchers) } : {}), { flushSync: d }), { shortCircuited: !0 })];
                                            }
                                            if (!(I || v.v7_partialHydration && c)) {
                                                k.forEach((function (e) { var t = D.fetchers.get(e.key), n = _e(void 0, t ? t.data : void 0); D.fetchers.set(e.key, n); }));
                                                e_31 = f || D.actionData;
                                                Le(i({ navigation: g }, e_31 ? 0 === Object.keys(e_31).length ? { actionData: null } : { actionData: e_31 } : {}, k.length > 0 ? { fetchers: new Map(D.fetchers) } : {}), { flushSync: d });
                                            }
                                            k.forEach((function (e) { $.has(e.key) && Ie(e.key), e.controller && $.set(e.key, e.controller); }));
                                            S = function () { return k.forEach((function (e) { return Ie(e.key); })); };
                                            R && R.signal.addEventListener("abort", S);
                                            return [4 /*yield*/, ze(D.matches, r, w, k, e)];
                                        case 1:
                                            _c = _f.sent(), E = _c.results, x = _c.loaderResults, C = _c.fetcherResults;
                                            if (e.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            R && R.signal.removeEventListener("abort", S), k.forEach((function (e) { return $.delete(e.key); }));
                                            _ = he(E);
                                            if (!_) return [3 /*break*/, 3];
                                            if (_.idx >= w.length) {
                                                e_32 = k[_.idx - w.length].key;
                                                ne.add(e_32);
                                            }
                                            return [4 /*yield*/, De(D, _.result, { replace: s })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = se(D, r, w, x, m, k, C, ue), P = _d.loaderData, L = _d.errors;
                                            ue.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && ue.delete(t); })); }));
                                            T = Ae(), z = Be(V);
                                            return [2 /*return*/, i({ loaderData: P, errors: L }, T || z || k.length > 0 ? { fetchers: new Map(D.fetchers) } : {})];
                                    }
                                }); });
                            }(x, r, c, s, a && a.submission, a && a.fetcherSubmission, a && a.replace, a && !0 === a.initialHydration, f, w, S)];
                        case 4:
                            _c = _g.sent(), C = _c.shortCircuited, _ = _c.loaderData, P = _c.errors;
                            C || (R = null, Te(r, i({ matches: c }, w ? { actionData: w } : {}, { loaderData: _, errors: P })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function De(a, l, o) {
            return __awaiter(this, void 0, void 0, function () { var _b, u, c, d, p, e_33, r_11, m, _c, v, g, y, b, e_34; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === o ? {} : o, u = _b.submission, c = _b.fetcherSubmission, d = _b.replace;
                        l.revalidate && (j = !0);
                        p = f(a.location, l.location, { _isRedirect: !0 });
                        if (s(p, "Expected a location on the redirect navigation"), r) {
                            e_33 = !1;
                            if (l.reloadDocument)
                                e_33 = !0;
                            else if (X.test(l.location)) {
                                r_11 = t.history.createURL(l.location);
                                e_33 = r_11.origin !== n.location.origin || null == z(r_11.pathname, h);
                            }
                            if (e_33)
                                return [2 /*return*/, void (d ? n.location.replace(l.location) : n.location.assign(l.location))];
                        }
                        R = null;
                        m = !0 === d ? e.Replace : e.Push, _c = a.navigation, v = _c.formMethod, g = _c.formAction, y = _c.formEncType;
                        !u && !c && v && g && y && (u = xe(a.navigation));
                        b = u || c;
                        if (!(Q.has(l.status) && b && be(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, Re(m, p, { submission: i({}, b, { formAction: l.location }), preventScrollReset: M })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_34 = Ce(p, u);
                        return [4 /*yield*/, Re(m, p, { overrideNavigation: e_34, fetcherSubmission: c, preventScrollReset: M })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function ze(e, n, r, a, o) {
            return __awaiter(this, void 0, void 0, function () { var i, u, s; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return le("loader", o, e, n, d, l, h, v.v7_relativeSplatPath); })), true), a.map((function (e) { return e.matches && e.match && e.controller ? le("loader", oe(t.history, e.path, e.controller.signal), e.match, e.matches, d, l, h, v.v7_relativeSplatPath) : { type: m.error, error: pe(404, { pathname: e.path }) }; })), true))];
                    case 1:
                        i = _b.sent(), u = i.slice(0, r.length), s = i.slice(r.length);
                        return [4 /*yield*/, Promise.all([we(e, r, u, u.map((function () { return o.signal; })), !1, D.loaderData), we(e, a.map((function (e) { return e.match; })), s, a.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: i, loaderResults: u, fetcherResults: s })];
                }
            }); });
        }
        function Ne() { j = !0, A.push.apply(A, We()), re.forEach((function (e, t) { $.has(t) && (B.push(t), Ie(t)); })); }
        function Me(e, t, n) { void 0 === n && (n = {}), D.fetchers.set(e, t), Le({ fetchers: new Map(D.fetchers) }, { flushSync: !0 === (n && n.flushSync) }); }
        function Oe(e, t, n, r) {
            var _b;
            void 0 === r && (r = {});
            var a = de(D.matches, t);
            Ue(e), Le({ errors: (_b = {}, _b[a.route.id] = n, _b), fetchers: new Map(D.fetchers) }, { flushSync: !0 === (r && r.flushSync) });
        }
        function Fe(e) { return v.v7_fetcherPersist && (ae.set(e, (ae.get(e) || 0) + 1), ie.has(e) && ie.delete(e)), D.fetchers.get(e) || K; }
        function Ue(e) { var t = D.fetchers.get(e); !$.has(e) || t && "loading" === t.state && W.has(e) || Ie(e), re.delete(e), W.delete(e), ne.delete(e), ie.delete(e), D.fetchers.delete(e); }
        function Ie(e) { var t = $.get(e); s(t, "Expected fetch controller: " + e), t.abort(), $.delete(e); }
        function je(e) { for (var _b = 0, e_35 = e; _b < e_35.length; _b++) {
            var t_20 = e_35[_b];
            var e_36 = Pe(Fe(t_20).data);
            D.fetchers.set(t_20, e_36);
        } }
        function Ae() { var e = [], t = !1; for (var _b = 0, ne_1 = ne; _b < ne_1.length; _b++) {
            var n_17 = ne_1[_b];
            var r_12 = D.fetchers.get(n_17);
            s(r_12, "Expected fetcher: " + n_17), "loading" === r_12.state && (ne.delete(n_17), e.push(n_17), t = !0);
        } return je(e), t; }
        function Be(e) { var t = []; for (var _b = 0, W_1 = W; _b < W_1.length; _b++) {
            var _c = W_1[_b], n_18 = _c[0], r_13 = _c[1];
            if (r_13 < e) {
                var e_37 = D.fetchers.get(n_18);
                s(e_37, "Expected fetcher: " + n_18), "loading" === e_37.state && (Ie(n_18), W.delete(n_18), t.push(n_18));
            }
        } return je(t), t.length > 0; }
        function $e(e) { D.blockers.delete(e), me.delete(e); }
        function He(e, t) { var n = D.blockers.get(e) || Y; s("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(D.blockers); r.set(e, t), Le({ blockers: r }); }
        function Ve(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === me.size)
            return; me.size > 1 && c(!1, "A router only supports one blocker at a time"); var a = Array.from(me.entries()), _b = a[a.length - 1], l = _b[0], o = _b[1], i = D.blockers.get(l); return i && "proceeding" === i.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? l : void 0; }
        function We(e) { var t = []; return ue.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), ue.delete(r)); })), t; }
        function Qe(e, t) { return S && S(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, D.loaderData); }))) || e.key; }
        function qe(e, t) { if (k) {
            var n_19 = Qe(e, t), r_14 = k[n_19];
            if ("number" == typeof r_14)
                return r_14;
        } return null; }
        return P = { get basename() { return h; }, get future() { return v; }, get state() { return D; }, get routes() { return p; }, get window() { return n; }, initialize: function () { if (b = t.history.listen((function (e) { var n = e.action, r = e.location, a = e.delta; if (Se)
                return void (Se = !1); c(0 === me.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var l = Ve({ currentLocation: D.location, nextLocation: r, historyAction: n }); return l && null != a ? (Se = !0, t.history.go(-1 * a), void He(l, { state: "blocked", location: r, proceed: function () { He(l, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), t.history.go(a); }, reset: function () { var e = new Map(D.blockers); e.set(l, Y), Le({ blockers: e }); } })) : Re(n, r); })), r) {
                !function (e, t) { try {
                    var n_20 = e.sessionStorage.getItem(J);
                    if (n_20) {
                        var e_38 = JSON.parse(n_20);
                        for (var _b = 0, _c = Object.entries(e_38 || {}); _b < _c.length; _b++) {
                            var _d = _c[_b], n_21 = _d[0], r_15 = _d[1];
                            r_15 && Array.isArray(r_15) && t.set(n_21, new Set(r_15 || []));
                        }
                    }
                }
                catch (e) { } }(n, F);
                var e_39 = function () { return function (e, t) { if (t.size > 0) {
                    var n_22 = {};
                    for (var _b = 0, t_21 = t; _b < t_21.length; _b++) {
                        var _c = t_21[_b], e_40 = _c[0], r_16 = _c[1];
                        n_22[e_40] = __spreadArray([], r_16, true);
                    }
                    try {
                        e.sessionStorage.setItem(J, JSON.stringify(n_22));
                    }
                    catch (e) {
                        c(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").");
                    }
                } }(n, F); };
                n.addEventListener("pagehide", e_39), U = function () { return n.removeEventListener("pagehide", e_39); };
            } return D.initialized || Re(e.Pop, D.location, { initialHydration: !0 }), P; }, subscribe: function (e) { return w.add(e), function () { return w.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (k = e, E = t, S = n || null, !x && D.navigation === q) {
                x = !0;
                var e_41 = qe(D.location, D.matches);
                null != e_41 && Le({ restoreScrollPosition: e_41 });
            } return function () { k = null, E = null, S = null; }; }, navigate: function n(r, a) {
                return __awaiter(this, void 0, void 0, function () { var l, _b, o, u, s, c, d, p, m, g, y, b; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof r)
                                return [2 /*return*/, void t.history.go(r)];
                            l = Z(D.location, D.matches, h, v.v7_prependBasename, r, v.v7_relativeSplatPath, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative), _b = ee(v.v7_normalizeFormMethod, !1, l, a), o = _b.path, u = _b.submission, s = _b.error, c = D.location, d = f(D.location, o, a && a.state);
                            d = i({}, d, t.history.encodeLocation(d));
                            p = a && null != a.replace ? a.replace : void 0, m = e.Push;
                            !0 === p ? m = e.Replace : !1 === p || null != u && be(u.formMethod) && u.formAction === D.location.pathname + D.location.search && (m = e.Replace);
                            g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0, y = !0 === (a && a.unstable_flushSync), b = Ve({ currentLocation: c, nextLocation: d, historyAction: m });
                            if (!!b) return [3 /*break*/, 2];
                            return [4 /*yield*/, Re(m, d, { submission: u, pendingError: s, preventScrollReset: g, replace: a && a.replace, enableViewTransition: a && a.unstable_viewTransition, flushSync: y })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            He(b, { state: "blocked", location: d, proceed: function () { He(b, { state: "proceeding", proceed: void 0, reset: void 0, location: d }), n(r, a); }, reset: function () { var e = new Map(D.blockers); e.set(b, Y), Le({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (e, n, r, i) { if (a)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); $.has(e) && Ie(e); var u = !0 === (i && i.unstable_flushSync), c = o || p, f = Z(D.location, D.matches, h, v.v7_prependBasename, r, v.v7_relativeSplatPath, n, null == i ? void 0 : i.relative), m = y(c, f, h); if (!m)
                return void Oe(e, n, pe(404, { pathname: f }), { flushSync: u }); var _b = ee(v.v7_normalizeFormMethod, !0, f, i), g = _b.path, b = _b.submission, w = _b.error; if (w)
                return void Oe(e, n, w, { flushSync: u }); var k = Ee(m, g); M = !0 === (i && i.preventScrollReset), b && be(b.formMethod) ? function (e, n, r, a, i, u, c) {
                return __awaiter(this, void 0, void 0, function () {
                    var t_22, f, m, g, b, w, k, S, E, x, C, _, _b, P, L, T, _c, z, M, O, F, e_42, _d, U, I, t_23;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (Ne(), re.delete(e), !a.route.action && !a.route.lazy) {
                                    t_22 = pe(405, { method: c.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void Oe(e, n, t_22, { flushSync: u })];
                                }
                                f = D.fetchers.get(e);
                                Me(e, function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(c, f), { flushSync: u });
                                m = new AbortController, g = oe(t.history, r, m.signal, c);
                                $.set(e, m);
                                b = H;
                                return [4 /*yield*/, le("action", g, a, i, d, l, h, v.v7_relativeSplatPath)];
                            case 1:
                                w = _g.sent();
                                if (g.signal.aborted)
                                    return [2 /*return*/, void ($.get(e) === m && $.delete(e))];
                                if (ie.has(e))
                                    return [2 /*return*/, void Me(e, Pe(void 0))];
                                if (ye(w))
                                    return [2 /*return*/, ($.delete(e), V > b ? void Me(e, Pe(void 0)) : (ne.add(e), Me(e, _e(c)), De(D, w, { fetcherSubmission: c })))];
                                if (ge(w))
                                    return [2 /*return*/, void Oe(e, n, w.error)];
                                if (ve(w))
                                    throw pe(400, { type: "defer-action" });
                                k = D.navigation.location || D.location, S = oe(t.history, k, m.signal), E = o || p, x = "idle" !== D.navigation.state ? y(E, D.navigation.location, h) : D.matches;
                                s(x, "Didn't find any matches after fetcher action");
                                C = ++H;
                                W.set(e, C);
                                _ = _e(c, w.data);
                                D.fetchers.set(e, _);
                                _b = te(t.history, D, x, c, k, !1, j, A, B, ie, re, ne, E, h, (_f = {}, _f[a.route.id] = w.data, _f), void 0), P = _b[0], L = _b[1];
                                L.filter((function (t) { return t.key !== e; })).forEach((function (e) { var t = e.key, n = D.fetchers.get(t), r = _e(void 0, n ? n.data : void 0); D.fetchers.set(t, r), $.has(t) && Ie(t), e.controller && $.set(t, e.controller); })), Le({ fetchers: new Map(D.fetchers) });
                                T = function () { return L.forEach((function (e) { return Ie(e.key); })); };
                                m.signal.addEventListener("abort", T);
                                return [4 /*yield*/, ze(D.matches, x, P, L, S)];
                            case 2:
                                _c = _g.sent(), z = _c.results, M = _c.loaderResults, O = _c.fetcherResults;
                                if (m.signal.aborted)
                                    return [2 /*return*/];
                                m.signal.removeEventListener("abort", T), W.delete(e), $.delete(e), L.forEach((function (e) { return $.delete(e.key); }));
                                F = he(z);
                                if (F) {
                                    if (F.idx >= P.length) {
                                        e_42 = L[F.idx - P.length].key;
                                        ne.add(e_42);
                                    }
                                    return [2 /*return*/, De(D, F.result)];
                                }
                                _d = se(D, D.matches, P, M, void 0, L, O, ue), U = _d.loaderData, I = _d.errors;
                                if (D.fetchers.has(e)) {
                                    t_23 = Pe(w.data);
                                    D.fetchers.set(e, t_23);
                                }
                                Be(C), "loading" === D.navigation.state && C > V ? (s(N, "Expected pending action"), R && R.abort(), Te(D.navigation.location, { matches: x, loaderData: U, errors: I, fetchers: new Map(D.fetchers) })) : (Le({ errors: I, loaderData: ce(D.loaderData, U, x, I), fetchers: new Map(D.fetchers) }), j = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, g, k, m, u, b) : (re.set(e, { routeId: n, path: g }), function (e, n, r, a, o, i, u) {
                return __awaiter(this, void 0, void 0, function () { var c, f, p, m, g, _b, _c, _d; return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            c = D.fetchers.get(e);
                            Me(e, _e(u, c ? c.data : void 0), { flushSync: i });
                            f = new AbortController, p = oe(t.history, r, f.signal);
                            $.set(e, f);
                            m = H;
                            return [4 /*yield*/, le("loader", p, a, o, d, l, h, v.v7_relativeSplatPath)];
                        case 1:
                            g = _f.sent();
                            _b = ve(g);
                            if (!_b) return [3 /*break*/, 3];
                            return [4 /*yield*/, ke(g, p.signal, !0)];
                        case 2:
                            _b = (g = (_f.sent()) || g);
                            _f.label = 3;
                        case 3:
                            if (!(_b, $.get(e) === f && $.delete(e), !p.signal.aborted)) return [3 /*break*/, 10];
                            if (!!ie.has(e)) return [3 /*break*/, 9];
                            if (!ye(g)) return [3 /*break*/, 7];
                            if (!(V > m)) return [3 /*break*/, 4];
                            _d = void Me(e, Pe(void 0));
                            return [3 /*break*/, 6];
                        case 4:
                            ne.add(e);
                            return [4 /*yield*/, De(D, g)];
                        case 5:
                            _d = (void (_f.sent()));
                            _f.label = 6;
                        case 6:
                            _c = _d;
                            return [3 /*break*/, 8];
                        case 7:
                            _c = void (ge(g) ? Oe(e, n, g.error) : (s(!ve(g), "Unhandled fetcher deferred data"), Me(e, Pe(g.data))));
                            _f.label = 8;
                        case 8: return [2 /*return*/, _c];
                        case 9:
                            Me(e, Pe(void 0));
                            _f.label = 10;
                        case 10: return [2 /*return*/];
                    }
                }); });
            }(e, n, g, k, m, u, b)); }, revalidate: function () { Ne(), Le({ revalidation: "loading" }), "submitting" !== D.navigation.state && ("idle" !== D.navigation.state ? Re(N || D.historyAction, D.navigation.location, { overrideNavigation: D.navigation }) : Re(D.historyAction, D.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (e) { return t.history.createHref(e); }, encodeLocation: function (e) { return t.history.encodeLocation(e); }, getFetcher: Fe, deleteFetcher: function (e) { if (v.v7_fetcherPersist) {
                var t_24 = (ae.get(e) || 0) - 1;
                t_24 <= 0 ? (ae.delete(e), ie.add(e)) : ae.set(e, t_24);
            }
            else
                Ue(e); Le({ fetchers: new Map(D.fetchers) }); }, dispose: function () { b && b(), U && U(), w.clear(), R && R.abort(), D.fetchers.forEach((function (e, t) { return Ue(t); })), D.blockers.forEach((function (e, t) { return $e(t); })); }, getBlocker: function (e, t) { var n = D.blockers.get(e) || Y; return me.get(e) !== t && me.set(e, t), n; }, deleteBlocker: $e, _internalFetchControllers: $, _internalActiveDeferreds: ue, _internalSetRoutes: function (e) { d = {}, o = g(e, l, void 0, d); } }, P;
    }({ basename: void 0, future: Ve({}, void 0, { v7_prependBasename: !0 }), history: (rt = { window: void 0 }, void 0 === rt && (rt = {}), function (t, n, r, a) { void 0 === a && (a = {}); var _b = a.window, l = _b === void 0 ? document.defaultView : _b, _c = a.v5Compat, o = _c === void 0 ? !1 : _c, c = l.history, h = e.Pop, m = null, v = g(); function g() { return (c.state || { idx: null }).idx; } function y() { h = e.Pop; var t = g(), n = null == t ? null : t - v; v = t, m && m({ action: h, location: w.location, delta: n }); } function b(e) { var t = "null" !== l.location.origin ? l.location.origin : l.location.href, n = "string" == typeof e ? e : p(e); return s(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, c.replaceState(i({}, c.state, { idx: v }), "")); var w = { get action() { return h; }, get location() { return t(l, c); }, listen: function (e) { if (m)
                throw new Error("A history only accepts one active listener"); return l.addEventListener(u, y), m = e, function () { l.removeEventListener(u, y), m = null; }; }, createHref: function (e) { return n(l, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (t, n) { h = e.Push; var a = f(w.location, t, n); r && r(a, t), v = g() + 1; var i = d(a, v), u = w.createHref(a); try {
                c.pushState(i, "", u);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                l.location.assign(u);
            } o && m && m({ action: h, location: w.location, delta: 1 }); }, replace: function (t, n) { h = e.Replace; var a = f(w.location, t, n); r && r(a, t), v = g(); var l = d(a, v), i = w.createHref(a); c.replaceState(l, "", i), o && m && m({ action: h, location: w.location, delta: 0 }); }, go: function (e) { return c.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return f("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : p(t); }), null, rt)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = Ve({}, t, { errors: We(t.errors) })), t; }(), routes: nt, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: n.createElement(e.Component), Component: void 0 }), e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: n.createElement(e.HydrateFallback), HydrateFallback: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: n.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; }, window: void 0 }).initialize()); at.s(document.getElementById("root")).render((0, t.jsx)(n.StrictMode, { children: (0, t.jsx)((function (e) {
            var _this = this;
            var t = e.fallbackElement, r = e.router, a = e.future, _b = n.useState(r.state), l = _b[0], o = _b[1], _c = n.useState(), i = _c[0], u = _c[1], _d = n.useState({ isTransitioning: !1 }), s = _d[0], c = _d[1], _f = n.useState(), d = _f[0], f = _f[1], _g = n.useState(), p = _g[0], h = _g[1], _h = n.useState(), m = _h[0], v = _h[1], g = n.useRef(new Map), y = (a || {}).v7_startTransition, b = n.useCallback((function (e) { y ? function (e) { Ke ? Ke(e) : e(); }(e) : e(); }), [y]), w = n.useCallback((function (e, t) { var n = t.deletedFetchers, a = t.unstable_flushSync, l = t.unstable_viewTransitionOpts; n.forEach((function (e) { return g.current.delete(e); })), e.fetchers.forEach((function (e, t) { void 0 !== e.data && g.current.set(t, e.data); })); var i = null == r.window || "function" != typeof r.window.document.startViewTransition; if (l && !i) {
                if (a) {
                    Xe((function () { p && (d && d.resolve(), p.skipTransition()), c({ isTransitioning: !0, flushSync: !0, currentLocation: l.currentLocation, nextLocation: l.nextLocation }); }));
                    var t_25 = r.window.document.startViewTransition((function () { Xe((function () { return o(e); })); }));
                    return t_25.finished.finally((function () { Xe((function () { f(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })); })), void Xe((function () { return h(t_25); }));
                }
                p ? (d && d.resolve(), p.skipTransition(), v({ state: e, currentLocation: l.currentLocation, nextLocation: l.nextLocation })) : (u(e), c({ isTransitioning: !0, flushSync: !1, currentLocation: l.currentLocation, nextLocation: l.nextLocation }));
            }
            else
                a ? Xe((function () { return o(e); })) : b((function () { return o(e); })); }), [r.window, p, d, g, b]);
            n.useLayoutEffect((function () { return r.subscribe(w); }), [r, w]), n.useEffect((function () { s.isTransitioning && !s.flushSync && f(new Ge); }), [s]), n.useEffect((function () { if (d && i && r.window) {
                var e_43 = i, t_26 = d.promise, n_23 = r.window.document.startViewTransition((function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            b((function () { return o(e_43); }));
                            return [4 /*yield*/, t_26];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                }); }); }));
                n_23.finished.finally((function () { f(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })), h(n_23);
            } }), [b, i, d, r.window]), n.useEffect((function () { d && i && l.location.key === i.location.key && d.resolve(); }), [d, p, l.location, i]), n.useEffect((function () { !s.isTransitioning && m && (u(m.state), c({ isTransitioning: !0, flushSync: !1, currentLocation: m.currentLocation, nextLocation: m.nextLocation }), v(void 0)); }), [s.isTransitioning, m]), n.useEffect((function () { }), []);
            var k = n.useMemo((function () { return ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: function (e) { return r.navigate(e); }, push: function (e, t, n) { return r.navigate(e, { state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); }, replace: function (e, t, n) { return r.navigate(e, { replace: !0, state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); } }); }), [r]), S = r.basename || "/", E = n.useMemo((function () { return ({ router: r, navigator: k, static: !1, basename: S }); }), [r, k, S]);
            return n.createElement(n.Fragment, null, n.createElement(Te.Provider, { value: E }, n.createElement(Re.Provider, { value: l }, n.createElement(qe.Provider, { value: g.current }, n.createElement(Qe.Provider, { value: s }, n.createElement(He, { basename: S, location: l.location, navigationType: l.historyAction, navigator: k, future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath } }, l.initialized || r.future.v7_partialHydration ? n.createElement(Je, { routes: r.routes, future: r.future, state: l }) : t))))), null);
        }), { router: it }) })); })();
})();
