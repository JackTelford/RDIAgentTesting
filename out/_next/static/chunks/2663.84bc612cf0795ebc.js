(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2663],
    {
        86010: function (t, e, i) {
            "use strict";
            function o() {
                for (var t, e, i = 0, o = ""; i < arguments.length;)
                    (t = arguments[i++]) &&
                        (e = (function t(e) {
                            var i,
                                o,
                                r = "";
                            if ("string" == typeof e || "number" == typeof e) r += e;
                            else if ("object" == typeof e) {
                                if (Array.isArray(e)) for (i = 0; i < e.length; i++) e[i] && (o = t(e[i])) && (r && (r += " "), (r += o));
                                else for (i in e) e[i] && (r && (r += " "), (r += i));
                            }
                            return r;
                        })(t)) &&
                        (o && (o += " "), (o += e));
                return o;
            }
            i.r(e),
                i.d(e, {
                    clsx: function () {
                        return o;
                    },
                }),
                (e.default = o);
        },
        92703: function (t, e, i) {
            "use strict";
            var o = i(50414);
            function r() { }
            function n() { }
            (n.resetWarningCache = r),
                (t.exports = function () {
                    function t(t, e, i, r, n, s) {
                        if (s !== o) {
                            var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw ((a.name = "Invariant Violation"), a);
                        }
                    }
                    function e() {
                        return t;
                    }
                    t.isRequired = t;
                    var i = {
                        array: t,
                        bigint: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: n,
                        resetWarningCache: r,
                    };
                    return (i.PropTypes = i), i;
                });
        },
        45697: function (t, e, i) {
            t.exports = i(92703)();
        },
        50414: function (t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        75668: function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "DraggableCore", {
                    enumerable: !0,
                    get: function () {
                        return p.default;
                    },
                }),
                (e.default = void 0);
            var o = (function (t, e) {
                if (t && t.__esModule) return t;
                if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
                var i = c(void 0);
                if (i && i.has(t)) return i.get(t);
                var o = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in t)
                    if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
                        var s = r ? Object.getOwnPropertyDescriptor(t, n) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, n, s) : (o[n] = t[n]);
                    }
                return (o.default = t), i && i.set(t, o), o;
            })(i(67294)),
                r = d(i(45697)),
                n = d(i(73935)),
                s = d(i(86010)),
                a = i(81825),
                h = i(2849),
                l = i(9280),
                p = d(i(80783)),
                u = d(i(55904));
            function d(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function c(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap(),
                    i = new WeakMap();
                return (c = function (t) {
                    return t ? i : e;
                })(t);
            }
            function f() {
                return (f = Object.assign
                    ? Object.assign.bind()
                    : function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function g(t, e, i) {
                var o;
                return (
                    (e =
                        "symbol" ==
                            typeof (o = (function (t, e) {
                                if ("object" != typeof t || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var o = i.call(t, e || "default");
                                    if ("object" != typeof o) return o;
                                    throw TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(e, "string"))
                            ? o
                            : String(o)) in t
                        ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = i),
                    t
                );
            }
            class m extends o.Component {
                static getDerivedStateFromProps(t, e) {
                    let { position: i } = t,
                        { prevPropsPosition: o } = e;
                    return i && (!o || i.x !== o.x || i.y !== o.y) ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", { position: i, prevPropsPosition: o }), { x: i.x, y: i.y, prevPropsPosition: { ...i } }) : null;
                }
                constructor(t) {
                    super(t),
                        g(this, "onDragStart", (t, e) => {
                            if (((0, u.default)("Draggable: onDragStart: %j", e), !1 === this.props.onStart(t, (0, h.createDraggableData)(this, e)))) return !1;
                            this.setState({ dragging: !0, dragged: !0 });
                        }),
                        g(this, "onDrag", (t, e) => {
                            if (!this.state.dragging) return !1;
                            (0, u.default)("Draggable: onDrag: %j", e);
                            let i = (0, h.createDraggableData)(this, e),
                                o = { x: i.x, y: i.y, slackX: 0, slackY: 0 };
                            if (this.props.bounds) {
                                let { x: t, y: e } = o;
                                (o.x += this.state.slackX), (o.y += this.state.slackY);
                                let [r, n] = (0, h.getBoundPosition)(this, o.x, o.y);
                                (o.x = r), (o.y = n), (o.slackX = this.state.slackX + (t - o.x)), (o.slackY = this.state.slackY + (e - o.y)), (i.x = o.x), (i.y = o.y), (i.deltaX = o.x - this.state.x), (i.deltaY = o.y - this.state.y);
                            }
                            if (!1 === this.props.onDrag(t, i)) return !1;
                            this.setState(o);
                        }),
                        g(this, "onDragStop", (t, e) => {
                            if (!this.state.dragging || !1 === this.props.onStop(t, (0, h.createDraggableData)(this, e))) return !1;
                            (0, u.default)("Draggable: onDragStop: %j", e);
                            let i = { dragging: !1, slackX: 0, slackY: 0 };
                            if (this.props.position) {
                                let { x: t, y: e } = this.props.position;
                                (i.x = t), (i.y = e);
                            }
                            this.setState(i);
                        }),
                        (this.state = {
                            dragging: !1,
                            dragged: !1,
                            x: t.position ? t.position.x : t.defaultPosition.x,
                            y: t.position ? t.position.y : t.defaultPosition.y,
                            prevPropsPosition: { ...t.position },
                            slackX: 0,
                            slackY: 0,
                            isElementSVG: !1,
                        }),
                        t.position &&
                        !(t.onDrag || t.onStop) &&
                        console.warn(
                            "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
                        );
                }
                componentDidMount() {
                    void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
                }
                componentWillUnmount() {
                    this.setState({ dragging: !1 });
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current) && void 0 !== t ? t : n.default.findDOMNode(this);
                }
                render() {
                    let { axis: t, bounds: e, children: i, defaultPosition: r, defaultClassName: n, defaultClassNameDragging: l, defaultClassNameDragged: u, position: d, positionOffset: c, scale: g, ...m } = this.props,
                        b = {},
                        y = null,
                        v = !d || this.state.dragging,
                        w = d || r,
                        S = { x: (0, h.canDragX)(this) && v ? this.state.x : w.x, y: (0, h.canDragY)(this) && v ? this.state.y : w.y };
                    this.state.isElementSVG ? (y = (0, a.createSVGTransform)(S, c)) : (b = (0, a.createCSSTransform)(S, c));
                    let z = (0, s.default)(i.props.className || "", n, { [l]: this.state.dragging, [u]: this.state.dragged });
                    return o.createElement(
                        p.default,
                        f({}, m, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
                        o.cloneElement(o.Children.only(i), { className: z, style: { ...i.props.style, ...b }, transform: y })
                    );
                }
            }
            (e.default = m),
                g(m, "displayName", "Draggable"),
                g(m, "propTypes", {
                    ...p.default.propTypes,
                    axis: r.default.oneOf(["both", "x", "y", "none"]),
                    bounds: r.default.oneOfType([r.default.shape({ left: r.default.number, right: r.default.number, top: r.default.number, bottom: r.default.number }), r.default.string, r.default.oneOf([!1])]),
                    defaultClassName: r.default.string,
                    defaultClassNameDragging: r.default.string,
                    defaultClassNameDragged: r.default.string,
                    defaultPosition: r.default.shape({ x: r.default.number, y: r.default.number }),
                    positionOffset: r.default.shape({ x: r.default.oneOfType([r.default.number, r.default.string]), y: r.default.oneOfType([r.default.number, r.default.string]) }),
                    position: r.default.shape({ x: r.default.number, y: r.default.number }),
                    className: l.dontSetMe,
                    style: l.dontSetMe,
                    transform: l.dontSetMe,
                }),
                g(m, "defaultProps", {
                    ...p.default.defaultProps,
                    axis: "both",
                    bounds: !1,
                    defaultClassName: "react-draggable",
                    defaultClassNameDragging: "react-draggable-dragging",
                    defaultClassNameDragged: "react-draggable-dragged",
                    defaultPosition: { x: 0, y: 0 },
                    scale: 1,
                });
        },
        80783: function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
            var o = (function (t, e) {
                if (t && t.__esModule) return t;
                if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
                var i = u(void 0);
                if (i && i.has(t)) return i.get(t);
                var o = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in t)
                    if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
                        var s = r ? Object.getOwnPropertyDescriptor(t, n) : null;
                        s && (s.get || s.set) ? Object.defineProperty(o, n, s) : (o[n] = t[n]);
                    }
                return (o.default = t), i && i.set(t, o), o;
            })(i(67294)),
                r = p(i(45697)),
                n = p(i(73935)),
                s = i(81825),
                a = i(2849),
                h = i(9280),
                l = p(i(55904));
            function p(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function u(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap(),
                    i = new WeakMap();
                return (u = function (t) {
                    return t ? i : e;
                })(t);
            }
            function d(t, e, i) {
                var o;
                return (
                    (e =
                        "symbol" ==
                            typeof (o = (function (t, e) {
                                if ("object" != typeof t || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var o = i.call(t, e || "default");
                                    if ("object" != typeof o) return o;
                                    throw TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(e, "string"))
                            ? o
                            : String(o)) in t
                        ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = i),
                    t
                );
            }
            let c = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } },
                f = c.mouse;
            class g extends o.Component {
                constructor() {
                    super(...arguments),
                        d(this, "dragging", !1),
                        d(this, "lastX", NaN),
                        d(this, "lastY", NaN),
                        d(this, "touchIdentifier", null),
                        d(this, "mounted", !1),
                        d(this, "handleDragStart", (t) => {
                            if ((this.props.onMouseDown(t), !this.props.allowAnyClick && "number" == typeof t.button && 0 !== t.button)) return !1;
                            let e = this.findDOMNode();
                            if (!e || !e.ownerDocument || !e.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
                            let { ownerDocument: i } = e;
                            if (
                                this.props.disabled ||
                                !(t.target instanceof i.defaultView.Node) ||
                                (this.props.handle && !(0, s.matchesSelectorAndParentsTo)(t.target, this.props.handle, e)) ||
                                (this.props.cancel && (0, s.matchesSelectorAndParentsTo)(t.target, this.props.cancel, e))
                            )
                                return;
                            "touchstart" === t.type && t.preventDefault();
                            let o = (0, s.getTouchIdentifier)(t);
                            this.touchIdentifier = o;
                            let r = (0, a.getControlPosition)(t, o, this);
                            if (null == r) return;
                            let { x: n, y: h } = r,
                                p = (0, a.createCoreData)(this, n, h);
                            (0, l.default)("DraggableCore: handleDragStart: %j", p),
                                (0, l.default)("calling", this.props.onStart),
                                !1 !== this.props.onStart(t, p) &&
                                !1 !== this.mounted &&
                                (this.props.enableUserSelectHack && (0, s.addUserSelectStyles)(i),
                                    (this.dragging = !0),
                                    (this.lastX = n),
                                    (this.lastY = h),
                                    (0, s.addEvent)(i, f.move, this.handleDrag),
                                    (0, s.addEvent)(i, f.stop, this.handleDragStop));
                        }),
                        d(this, "handleDrag", (t) => {
                            let e = (0, a.getControlPosition)(t, this.touchIdentifier, this);
                            if (null == e) return;
                            let { x: i, y: o } = e;
                            if (Array.isArray(this.props.grid)) {
                                let t = i - this.lastX,
                                    e = o - this.lastY;
                                if ((([t, e] = (0, a.snapToGrid)(this.props.grid, t, e)), !t && !e)) return;
                                (i = this.lastX + t), (o = this.lastY + e);
                            }
                            let r = (0, a.createCoreData)(this, i, o);
                            if (((0, l.default)("DraggableCore: handleDrag: %j", r), !1 === this.props.onDrag(t, r) || !1 === this.mounted)) {
                                try {
                                    this.handleDragStop(new MouseEvent("mouseup"));
                                } catch (e) {
                                    let t = document.createEvent("MouseEvents");
                                    t.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(t);
                                }
                                return;
                            }
                            (this.lastX = i), (this.lastY = o);
                        }),
                        d(this, "handleDragStop", (t) => {
                            if (!this.dragging) return;
                            let e = (0, a.getControlPosition)(t, this.touchIdentifier, this);
                            if (null == e) return;
                            let { x: i, y: o } = e;
                            if (Array.isArray(this.props.grid)) {
                                let t = i - this.lastX || 0,
                                    e = o - this.lastY || 0;
                                ([t, e] = (0, a.snapToGrid)(this.props.grid, t, e)), (i = this.lastX + t), (o = this.lastY + e);
                            }
                            let r = (0, a.createCoreData)(this, i, o);
                            if (!1 === this.props.onStop(t, r) || !1 === this.mounted) return !1;
                            let n = this.findDOMNode();
                            n && this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(n.ownerDocument),
                                (0, l.default)("DraggableCore: handleDragStop: %j", r),
                                (this.dragging = !1),
                                (this.lastX = NaN),
                                (this.lastY = NaN),
                                n && ((0, l.default)("DraggableCore: Removing handlers"), (0, s.removeEvent)(n.ownerDocument, f.move, this.handleDrag), (0, s.removeEvent)(n.ownerDocument, f.stop, this.handleDragStop));
                        }),
                        d(this, "onMouseDown", (t) => ((f = c.mouse), this.handleDragStart(t))),
                        d(this, "onMouseUp", (t) => ((f = c.mouse), this.handleDragStop(t))),
                        d(this, "onTouchStart", (t) => ((f = c.touch), this.handleDragStart(t))),
                        d(this, "onTouchEnd", (t) => ((f = c.touch), this.handleDragStop(t)));
                }
                componentDidMount() {
                    this.mounted = !0;
                    let t = this.findDOMNode();
                    t && (0, s.addEvent)(t, c.touch.start, this.onTouchStart, { passive: !1 });
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    let t = this.findDOMNode();
                    if (t) {
                        let { ownerDocument: e } = t;
                        (0, s.removeEvent)(e, c.mouse.move, this.handleDrag),
                            (0, s.removeEvent)(e, c.touch.move, this.handleDrag),
                            (0, s.removeEvent)(e, c.mouse.stop, this.handleDragStop),
                            (0, s.removeEvent)(e, c.touch.stop, this.handleDragStop),
                            (0, s.removeEvent)(t, c.touch.start, this.onTouchStart, { passive: !1 }),
                            this.props.enableUserSelectHack && (0, s.removeUserSelectStyles)(e);
                    }
                }
                findDOMNode() {
                    var t, e;
                    return null !== (t = this.props) && void 0 !== t && t.nodeRef ? (null === (e = this.props) || void 0 === e || null === (e = e.nodeRef) || void 0 === e ? void 0 : e.current) : n.default.findDOMNode(this);
                }
                render() {
                    return o.cloneElement(o.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
                }
            }
            (e.default = g),
                d(g, "displayName", "DraggableCore"),
                d(g, "propTypes", {
                    allowAnyClick: r.default.bool,
                    children: r.default.node.isRequired,
                    disabled: r.default.bool,
                    enableUserSelectHack: r.default.bool,
                    offsetParent: function (t, e) {
                        if (t[e] && 1 !== t[e].nodeType) throw Error("Draggable's offsetParent must be a DOM Node.");
                    },
                    grid: r.default.arrayOf(r.default.number),
                    handle: r.default.string,
                    cancel: r.default.string,
                    nodeRef: r.default.object,
                    onStart: r.default.func,
                    onDrag: r.default.func,
                    onStop: r.default.func,
                    onMouseDown: r.default.func,
                    scale: r.default.number,
                    className: h.dontSetMe,
                    style: h.dontSetMe,
                    transform: h.dontSetMe,
                }),
                d(g, "defaultProps", { allowAnyClick: !1, disabled: !1, enableUserSelectHack: !0, onStart: function () { }, onDrag: function () { }, onStop: function () { }, onMouseDown: function () { }, scale: 1 });
        },
        61193: function (t, e, i) {
            "use strict";
            let { default: o, DraggableCore: r } = i(75668);
            (t.exports = o), (t.exports.default = o), (t.exports.DraggableCore = r);
        },
        81825: function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.addClassName = l),
                (e.addEvent = function (t, e, i, o) {
                    if (!t) return;
                    let r = { capture: !0, ...o };
                    t.addEventListener ? t.addEventListener(e, i, r) : t.attachEvent ? t.attachEvent("on" + e, i) : (t["on" + e] = i);
                }),
                (e.addUserSelectStyles = function (t) {
                    if (!t) return;
                    let e = t.getElementById("react-draggable-style-el");
                    e ||
                        (((e = t.createElement("style")).type = "text/css"),
                            (e.id = "react-draggable-style-el"),
                            (e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
                            (e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
                            t.getElementsByTagName("head")[0].appendChild(e)),
                        t.body && l(t.body, "react-draggable-transparent-selection");
                }),
                (e.createCSSTransform = function (t, e) {
                    let i = h(t, e, "px");
                    return { [(0, r.browserPrefixToKey)("transform", r.default)]: i };
                }),
                (e.createSVGTransform = function (t, e) {
                    return h(t, e, "");
                }),
                (e.getTouch = function (t, e) {
                    return (t.targetTouches && (0, o.findInArray)(t.targetTouches, (t) => e === t.identifier)) || (t.changedTouches && (0, o.findInArray)(t.changedTouches, (t) => e === t.identifier));
                }),
                (e.getTouchIdentifier = function (t) {
                    return t.targetTouches && t.targetTouches[0] ? t.targetTouches[0].identifier : t.changedTouches && t.changedTouches[0] ? t.changedTouches[0].identifier : void 0;
                }),
                (e.getTranslation = h),
                (e.innerHeight = function (t) {
                    let e = t.clientHeight,
                        i = t.ownerDocument.defaultView.getComputedStyle(t);
                    return (e -= (0, o.int)(i.paddingTop)), (e -= (0, o.int)(i.paddingBottom));
                }),
                (e.innerWidth = function (t) {
                    let e = t.clientWidth,
                        i = t.ownerDocument.defaultView.getComputedStyle(t);
                    return (e -= (0, o.int)(i.paddingLeft)), (e -= (0, o.int)(i.paddingRight));
                }),
                (e.matchesSelector = a),
                (e.matchesSelectorAndParentsTo = function (t, e, i) {
                    let o = t;
                    do {
                        if (a(o, e)) return !0;
                        if (o === i) break;
                        o = o.parentNode;
                    } while (o);
                    return !1;
                }),
                (e.offsetXYFromParent = function (t, e, i) {
                    let o = e === e.ownerDocument.body ? { left: 0, top: 0 } : e.getBoundingClientRect();
                    return { x: (t.clientX + e.scrollLeft - o.left) / i, y: (t.clientY + e.scrollTop - o.top) / i };
                }),
                (e.outerHeight = function (t) {
                    let e = t.clientHeight,
                        i = t.ownerDocument.defaultView.getComputedStyle(t);
                    return e + ((0, o.int)(i.borderTopWidth) + (0, o.int)(i.borderBottomWidth));
                }),
                (e.outerWidth = function (t) {
                    let e = t.clientWidth,
                        i = t.ownerDocument.defaultView.getComputedStyle(t);
                    return e + ((0, o.int)(i.borderLeftWidth) + (0, o.int)(i.borderRightWidth));
                }),
                (e.removeClassName = p),
                (e.removeEvent = function (t, e, i, o) {
                    if (!t) return;
                    let r = { capture: !0, ...o };
                    t.removeEventListener ? t.removeEventListener(e, i, r) : t.detachEvent ? t.detachEvent("on" + e, i) : (t["on" + e] = null);
                }),
                (e.removeUserSelectStyles = function (t) {
                    if (t)
                        try {
                            if ((t.body && p(t.body, "react-draggable-transparent-selection"), t.selection)) t.selection.empty();
                            else {
                                let e = (t.defaultView || window).getSelection();
                                e && "Caret" !== e.type && e.removeAllRanges();
                            }
                        } catch (t) { }
                });
            var o = i(9280),
                r = (function (t, e) {
                    if (t && t.__esModule) return t;
                    if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
                    var i = n(void 0);
                    if (i && i.has(t)) return i.get(t);
                    var o = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var a = r ? Object.getOwnPropertyDescriptor(t, s) : null;
                            a && (a.get || a.set) ? Object.defineProperty(o, s, a) : (o[s] = t[s]);
                        }
                    return (o.default = t), i && i.set(t, o), o;
                })(i(38650));
            function n(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap(),
                    i = new WeakMap();
                return (n = function (t) {
                    return t ? i : e;
                })(t);
            }
            let s = "";
            function a(t, e) {
                return (
                    s ||
                    (s = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (e) {
                        return (0, o.isFunction)(t[e]);
                    })),
                    !!(0, o.isFunction)(t[s]) && t[s](e)
                );
            }
            function h(t, e, i) {
                let { x: o, y: r } = t,
                    n = "translate(".concat(o).concat(i, ",").concat(r).concat(i, ")");
                if (e) {
                    let t = "".concat("string" == typeof e.x ? e.x : e.x + i),
                        o = "".concat("string" == typeof e.y ? e.y : e.y + i);
                    n = "translate(".concat(t, ", ").concat(o, ")") + n;
                }
                return n;
            }
            function l(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e));
            }
            function p(t, e) {
                t.classList ? t.classList.remove(e) : (t.className = t.className.replace(RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), ""));
            }
        },
        38650: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.browserPrefixToKey = r),
                (e.browserPrefixToStyle = function (t, e) {
                    return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
                }),
                (e.default = void 0),
                (e.getPrefix = o);
            let i = ["Moz", "Webkit", "O", "ms"];
            function o() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" == typeof window) return "";
                let o = null === (t = window.document) || void 0 === t || null === (t = t.documentElement) || void 0 === t ? void 0 : t.style;
                if (!o || e in o) return "";
                for (let t = 0; t < i.length; t++) if (r(e, i[t]) in o) return i[t];
                return "";
            }
            function r(t, e) {
                return e
                    ? "".concat(e).concat(
                        (function (t) {
                            let e = "",
                                i = !0;
                            for (let o = 0; o < t.length; o++) i ? ((e += t[o].toUpperCase()), (i = !1)) : "-" === t[o] ? (i = !0) : (e += t[o]);
                            return e;
                        })(t)
                    )
                    : t;
            }
            e.default = o();
        },
        55904: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = function () { });
        },
        2849: function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.canDragX = function (t) {
                    return "both" === t.props.axis || "x" === t.props.axis;
                }),
                (e.canDragY = function (t) {
                    return "both" === t.props.axis || "y" === t.props.axis;
                }),
                (e.createCoreData = function (t, e, i) {
                    let r = !(0, o.isNum)(t.lastX),
                        s = n(t);
                    return r ? { node: s, deltaX: 0, deltaY: 0, lastX: e, lastY: i, x: e, y: i } : { node: s, deltaX: e - t.lastX, deltaY: i - t.lastY, lastX: t.lastX, lastY: t.lastY, x: e, y: i };
                }),
                (e.createDraggableData = function (t, e) {
                    let i = t.props.scale;
                    return { node: e.node, x: t.state.x + e.deltaX / i, y: t.state.y + e.deltaY / i, deltaX: e.deltaX / i, deltaY: e.deltaY / i, lastX: t.state.x, lastY: t.state.y };
                }),
                (e.getBoundPosition = function (t, e, i) {
                    var s;
                    if (!t.props.bounds) return [e, i];
                    let { bounds: a } = t.props;
                    a = "string" == typeof a ? a : { left: (s = a).left, top: s.top, right: s.right, bottom: s.bottom };
                    let h = n(t);
                    if ("string" == typeof a) {
                        let t;
                        let { ownerDocument: e } = h,
                            i = e.defaultView;
                        if (!((t = "parent" === a ? h.parentNode : e.querySelector(a)) instanceof i.HTMLElement)) throw Error('Bounds selector "' + a + '" could not find an element.');
                        let n = i.getComputedStyle(h),
                            s = i.getComputedStyle(t);
                        a = {
                            left: -h.offsetLeft + (0, o.int)(s.paddingLeft) + (0, o.int)(n.marginLeft),
                            top: -h.offsetTop + (0, o.int)(s.paddingTop) + (0, o.int)(n.marginTop),
                            right: (0, r.innerWidth)(t) - (0, r.outerWidth)(h) - h.offsetLeft + (0, o.int)(s.paddingRight) - (0, o.int)(n.marginRight),
                            bottom: (0, r.innerHeight)(t) - (0, r.outerHeight)(h) - h.offsetTop + (0, o.int)(s.paddingBottom) - (0, o.int)(n.marginBottom),
                        };
                    }
                    return (
                        (0, o.isNum)(a.right) && (e = Math.min(e, a.right)), (0, o.isNum)(a.bottom) && (i = Math.min(i, a.bottom)), (0, o.isNum)(a.left) && (e = Math.max(e, a.left)), (0, o.isNum)(a.top) && (i = Math.max(i, a.top)), [e, i]
                    );
                }),
                (e.getControlPosition = function (t, e, i) {
                    let o = "number" == typeof e ? (0, r.getTouch)(t, e) : null;
                    if ("number" == typeof e && !o) return null;
                    let s = n(i),
                        a = i.props.offsetParent || s.offsetParent || s.ownerDocument.body;
                    return (0, r.offsetXYFromParent)(o || t, a, i.props.scale);
                }),
                (e.snapToGrid = function (t, e, i) {
                    return [Math.round(e / t[0]) * t[0], Math.round(i / t[1]) * t[1]];
                });
            var o = i(9280),
                r = i(81825);
            function n(t) {
                let e = t.findDOMNode();
                if (!e) throw Error("<DraggableCore>: Unmounted during event!");
                return e;
            }
        },
        9280: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.dontSetMe = function (t, e, i) {
                    if (t[e]) return Error("Invalid prop ".concat(e, " passed to ").concat(i, " - do not set this, set it on the child."));
                }),
                (e.findInArray = function (t, e) {
                    for (let i = 0, o = t.length; i < o; i++) if (e.apply(e, [t[i], i, t])) return t[i];
                }),
                (e.int = function (t) {
                    return parseInt(t, 10);
                }),
                (e.isFunction = function (t) {
                    return "function" == typeof t || "[object Function]" === Object.prototype.toString.call(t);
                }),
                (e.isNum = function (t) {
                    return "number" == typeof t && !isNaN(t);
                });
        },
        42663: function (t, e, i) {
            "use strict";
            i.d(e, {
                s: function () {
                    return C;
                },
            });
            var o,
                r,
                n = i(67294),
                s = i(61193),
                a = i.n(s),
                h = i(73935),
                l =
                    ((o = function (t, e) {
                        return (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            })(t, e);
                    }),
                        function (t, e) {
                            function i() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        }),
                p = function () {
                    return (p =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, o = arguments.length; i < o; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t;
                        }).apply(this, arguments);
                },
                u = { width: "100%", height: "10px", top: "0px", left: "0px", cursor: "row-resize" },
                d = { width: "10px", height: "100%", top: "0px", left: "0px", cursor: "col-resize" },
                c = { width: "20px", height: "20px", position: "absolute" },
                f = {
                    top: p(p({}, u), { top: "-5px" }),
                    right: p(p({}, d), { left: void 0, right: "-5px" }),
                    bottom: p(p({}, u), { top: void 0, bottom: "-5px" }),
                    left: p(p({}, d), { left: "-5px" }),
                    topRight: p(p({}, c), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
                    bottomRight: p(p({}, c), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
                    bottomLeft: p(p({}, c), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
                    topLeft: p(p({}, c), { left: "-10px", top: "-10px", cursor: "nw-resize" }),
                },
                g = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.onMouseDown = function (t) {
                                e.props.onResizeStart(t, e.props.direction);
                            }),
                            (e.onTouchStart = function (t) {
                                e.props.onResizeStart(t, e.props.direction);
                            }),
                            e
                        );
                    }
                    return (
                        l(e, t),
                        (e.prototype.render = function () {
                            return n.createElement(
                                "div",
                                {
                                    className: this.props.className || "",
                                    style: p(p({ position: "absolute", userSelect: "none" }, f[this.props.direction]), this.props.replaceStyles || {}),
                                    onMouseDown: this.onMouseDown,
                                    onTouchStart: this.onTouchStart,
                                },
                                this.props.children
                            );
                        }),
                        e
                    );
                })(n.PureComponent),
                m =
                    ((r = function (t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            })(t, e);
                    }),
                        function (t, e) {
                            function i() {
                                this.constructor = t;
                            }
                            r(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        }),
                b = function () {
                    return (b =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, o = arguments.length; i < o; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t;
                        }).apply(this, arguments);
                },
                y = { width: "auto", height: "auto" },
                v = function (t, e, i) {
                    return Math.max(Math.min(t, i), e);
                },
                w = function (t, e) {
                    return Math.round(t / e) * e;
                },
                S = function (t, e) {
                    return RegExp(t, "i").test(e);
                },
                z = function (t) {
                    return !!(t.touches && t.touches.length);
                },
                x = function (t, e, i) {
                    void 0 === i && (i = 0);
                    var o = e.reduce(function (i, o, r) {
                        return Math.abs(o - t) < Math.abs(e[i] - t) ? r : i;
                    }, 0),
                        r = Math.abs(e[o] - t);
                    return 0 === i || r < i ? e[o] : t;
                },
                D = function (t) {
                    return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : t + "px";
                },
                P = function (t, e, i, o) {
                    if (t && "string" == typeof t) {
                        if (t.endsWith("px")) return Number(t.replace("px", ""));
                        if (t.endsWith("%")) {
                            var r = Number(t.replace("%", "")) / 100;
                            return e * r;
                        }
                        if (t.endsWith("vw")) {
                            var r = Number(t.replace("vw", "")) / 100;
                            return i * r;
                        }
                        if (t.endsWith("vh")) {
                            var r = Number(t.replace("vh", "")) / 100;
                            return o * r;
                        }
                    }
                    return t;
                },
                R = [
                    "as",
                    "style",
                    "className",
                    "grid",
                    "snap",
                    "bounds",
                    "boundsByDirection",
                    "size",
                    "defaultSize",
                    "minWidth",
                    "minHeight",
                    "maxWidth",
                    "maxHeight",
                    "lockAspectRatio",
                    "lockAspectRatioExtraWidth",
                    "lockAspectRatioExtraHeight",
                    "enable",
                    "handleStyles",
                    "handleClasses",
                    "handleWrapperStyle",
                    "handleWrapperClass",
                    "children",
                    "onResizeStart",
                    "onResize",
                    "onResizeStop",
                    "handleComponent",
                    "scale",
                    "resizeRatio",
                    "snapGap",
                ],
                M = "__resizable_base__",
                E = (function (t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return (
                            (i.ratio = 1),
                            (i.resizable = null),
                            (i.parentLeft = 0),
                            (i.parentTop = 0),
                            (i.resizableLeft = 0),
                            (i.resizableRight = 0),
                            (i.resizableTop = 0),
                            (i.resizableBottom = 0),
                            (i.targetLeft = 0),
                            (i.targetTop = 0),
                            (i.appendBase = function () {
                                if (!i.resizable || !i.window) return null;
                                var t = i.parentNode;
                                if (!t) return null;
                                var e = i.window.document.createElement("div");
                                return (
                                    (e.style.width = "100%"),
                                    (e.style.height = "100%"),
                                    (e.style.position = "absolute"),
                                    (e.style.transform = "scale(0, 0)"),
                                    (e.style.left = "0"),
                                    (e.style.flex = "0 0 100%"),
                                    e.classList ? e.classList.add(M) : (e.className += M),
                                    t.appendChild(e),
                                    e
                                );
                            }),
                            (i.removeBase = function (t) {
                                var e = i.parentNode;
                                e && e.removeChild(t);
                            }),
                            (i.ref = function (t) {
                                t && (i.resizable = t);
                            }),
                            (i.state = {
                                isResizing: !1,
                                width: void 0 === (i.propsSize && i.propsSize.width) ? "auto" : i.propsSize && i.propsSize.width,
                                height: void 0 === (i.propsSize && i.propsSize.height) ? "auto" : i.propsSize && i.propsSize.height,
                                direction: "right",
                                original: { x: 0, y: 0, width: 0, height: 0 },
                                backgroundStyle: { height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0)", cursor: "auto", opacity: 0, position: "fixed", zIndex: 9999, top: "0", left: "0", bottom: "0", right: "0" },
                                flexBasis: void 0,
                            }),
                            (i.onResizeStart = i.onResizeStart.bind(i)),
                            (i.onMouseMove = i.onMouseMove.bind(i)),
                            (i.onMouseUp = i.onMouseUp.bind(i)),
                            i
                        );
                    }
                    return (
                        m(e, t),
                        Object.defineProperty(e.prototype, "parentNode", {
                            get: function () {
                                return this.resizable ? this.resizable.parentNode : null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "window", {
                            get: function () {
                                return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "propsSize", {
                            get: function () {
                                return this.props.size || this.props.defaultSize || y;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "size", {
                            get: function () {
                                var t = 0,
                                    e = 0;
                                if (this.resizable && this.window) {
                                    var i = this.resizable.offsetWidth,
                                        o = this.resizable.offsetHeight,
                                        r = this.resizable.style.position;
                                    "relative" !== r && (this.resizable.style.position = "relative"),
                                        (t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i),
                                        (e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : o),
                                        (this.resizable.style.position = r);
                                }
                                return { width: t, height: e };
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sizeStyle", {
                            get: function () {
                                var t = this,
                                    e = this.props.size,
                                    i = function (e) {
                                        if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                                        if (t.propsSize && t.propsSize[e] && t.propsSize[e].toString().endsWith("%")) {
                                            if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                                            var i = t.getParentSize();
                                            return (Number(t.state[e].toString().replace("px", "")) / i[e]) * 100 + "%";
                                        }
                                        return D(t.state[e]);
                                    };
                                return { width: e && void 0 !== e.width && !this.state.isResizing ? D(e.width) : i("width"), height: e && void 0 !== e.height && !this.state.isResizing ? D(e.height) : i("height") };
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.getParentSize = function () {
                            if (!this.parentNode) return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
                            var t = this.appendBase();
                            if (!t) return { width: 0, height: 0 };
                            var e = !1,
                                i = this.parentNode.style.flexWrap;
                            "wrap" !== i && ((e = !0), (this.parentNode.style.flexWrap = "wrap")), (t.style.position = "relative"), (t.style.minWidth = "100%"), (t.style.minHeight = "100%");
                            var o = { width: t.offsetWidth, height: t.offsetHeight };
                            return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), o;
                        }),
                        (e.prototype.bindEvents = function () {
                            this.window &&
                                (this.window.addEventListener("mouseup", this.onMouseUp),
                                    this.window.addEventListener("mousemove", this.onMouseMove),
                                    this.window.addEventListener("mouseleave", this.onMouseUp),
                                    this.window.addEventListener("touchmove", this.onMouseMove, { capture: !0, passive: !1 }),
                                    this.window.addEventListener("touchend", this.onMouseUp));
                        }),
                        (e.prototype.unbindEvents = function () {
                            this.window &&
                                (this.window.removeEventListener("mouseup", this.onMouseUp),
                                    this.window.removeEventListener("mousemove", this.onMouseMove),
                                    this.window.removeEventListener("mouseleave", this.onMouseUp),
                                    this.window.removeEventListener("touchmove", this.onMouseMove, !0),
                                    this.window.removeEventListener("touchend", this.onMouseUp));
                        }),
                        (e.prototype.componentDidMount = function () {
                            if (this.resizable && this.window) {
                                var t = this.window.getComputedStyle(this.resizable);
                                this.setState({ width: this.state.width || this.size.width, height: this.state.height || this.size.height, flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0 });
                            }
                        }),
                        (e.prototype.componentWillUnmount = function () {
                            this.window && this.unbindEvents();
                        }),
                        (e.prototype.createSizeForCssProperty = function (t, e) {
                            var i = this.propsSize && this.propsSize[e];
                            return "auto" === this.state[e] && this.state.original[e] === t && (void 0 === i || "auto" === i) ? "auto" : t;
                        }),
                        (e.prototype.calculateNewMaxFromBoundary = function (t, e) {
                            var i,
                                o,
                                r = this.props.boundsByDirection,
                                n = this.state.direction,
                                s = r && S("left", n),
                                a = r && S("top", n);
                            if ("parent" === this.props.bounds) {
                                var h = this.parentNode;
                                h &&
                                    ((i = s ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft)),
                                        (o = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop)));
                            } else
                                "window" === this.props.bounds
                                    ? this.window && ((i = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft), (o = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop))
                                    : this.props.bounds &&
                                    ((i = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft)),
                                        (o = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop)));
                            return i && Number.isFinite(i) && (t = t && t < i ? t : i), o && Number.isFinite(o) && (e = e && e < o ? e : o), { maxWidth: t, maxHeight: e };
                        }),
                        (e.prototype.calculateNewSizeFromDirection = function (t, e) {
                            var i = this.props.scale || 1,
                                o = this.props.resizeRatio || 1,
                                r = this.state,
                                n = r.direction,
                                s = r.original,
                                a = this.props,
                                h = a.lockAspectRatio,
                                l = a.lockAspectRatioExtraHeight,
                                p = a.lockAspectRatioExtraWidth,
                                u = s.width,
                                d = s.height,
                                c = l || 0,
                                f = p || 0;
                            return (
                                S("right", n) && ((u = s.width + ((t - s.x) * o) / i), h && (d = (u - f) / this.ratio + c)),
                                S("left", n) && ((u = s.width - ((t - s.x) * o) / i), h && (d = (u - f) / this.ratio + c)),
                                S("bottom", n) && ((d = s.height + ((e - s.y) * o) / i), h && (u = (d - c) * this.ratio + f)),
                                S("top", n) && ((d = s.height - ((e - s.y) * o) / i), h && (u = (d - c) * this.ratio + f)),
                                { newWidth: u, newHeight: d }
                            );
                        }),
                        (e.prototype.calculateNewSizeFromAspectRatio = function (t, e, i, o) {
                            var r = this.props,
                                n = r.lockAspectRatio,
                                s = r.lockAspectRatioExtraHeight,
                                a = r.lockAspectRatioExtraWidth,
                                h = void 0 === o.width ? 10 : o.width,
                                l = void 0 === i.width || i.width < 0 ? t : i.width,
                                p = void 0 === o.height ? 10 : o.height,
                                u = void 0 === i.height || i.height < 0 ? e : i.height,
                                d = s || 0,
                                c = a || 0;
                            if (n) {
                                var f = (p - d) * this.ratio + c,
                                    g = (u - d) * this.ratio + c,
                                    m = (h - c) / this.ratio + d,
                                    b = (l - c) / this.ratio + d;
                                (t = v(t, Math.max(h, f), Math.min(l, g))), (e = v(e, Math.max(p, m), Math.min(u, b)));
                            } else (t = v(t, h, l)), (e = v(e, p, u));
                            return { newWidth: t, newHeight: e };
                        }),
                        (e.prototype.setBoundingClientRect = function () {
                            if ("parent" === this.props.bounds) {
                                var t = this.parentNode;
                                if (t) {
                                    var e = t.getBoundingClientRect();
                                    (this.parentLeft = e.left), (this.parentTop = e.top);
                                }
                            }
                            if (this.props.bounds && "string" != typeof this.props.bounds) {
                                var i = this.props.bounds.getBoundingClientRect();
                                (this.targetLeft = i.left), (this.targetTop = i.top);
                            }
                            if (this.resizable) {
                                var o = this.resizable.getBoundingClientRect(),
                                    r = o.left,
                                    n = o.top,
                                    s = o.right,
                                    a = o.bottom;
                                (this.resizableLeft = r), (this.resizableRight = s), (this.resizableTop = n), (this.resizableBottom = a);
                            }
                        }),
                        (e.prototype.onResizeStart = function (t, e) {
                            if (this.resizable && this.window) {
                                var i,
                                    o,
                                    r = 0,
                                    n = 0;
                                if (
                                    (t.nativeEvent && ((i = t.nativeEvent).clientX || 0 === i.clientX) && (i.clientY || 0 === i.clientY)
                                        ? ((r = t.nativeEvent.clientX), (n = t.nativeEvent.clientY))
                                        : t.nativeEvent && z(t.nativeEvent) && ((r = t.nativeEvent.touches[0].clientX), (n = t.nativeEvent.touches[0].clientY)),
                                        !this.props.onResizeStart || !this.resizable || !1 !== this.props.onResizeStart(t, e, this.resizable))
                                ) {
                                    this.props.size &&
                                        (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }),
                                            void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })),
                                        (this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height);
                                    var s = this.window.getComputedStyle(this.resizable);
                                    if ("auto" !== s.flexBasis) {
                                        var a = this.parentNode;
                                        if (a) {
                                            var h = this.window.getComputedStyle(a).flexDirection;
                                            (this.flexDir = h.startsWith("row") ? "row" : "column"), (o = s.flexBasis);
                                        }
                                    }
                                    this.setBoundingClientRect(), this.bindEvents();
                                    var l = {
                                        original: { x: r, y: n, width: this.size.width, height: this.size.height },
                                        isResizing: !0,
                                        backgroundStyle: b(b({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(t.target).cursor || "auto" }),
                                        direction: e,
                                        flexBasis: o,
                                    };
                                    this.setState(l);
                                }
                            }
                        }),
                        (e.prototype.onMouseMove = function (t) {
                            var e,
                                i,
                                o,
                                r,
                                n,
                                s,
                                a = this;
                            if (this.state.isResizing && this.resizable && this.window) {
                                if (this.window.TouchEvent && z(t))
                                    try {
                                        t.preventDefault(), t.stopPropagation();
                                    } catch (t) { }
                                var l = this.props,
                                    p = l.maxWidth,
                                    u = l.maxHeight,
                                    d = l.minWidth,
                                    c = l.minHeight,
                                    f = z(t) ? t.touches[0].clientX : t.clientX,
                                    g = z(t) ? t.touches[0].clientY : t.clientY,
                                    m = this.state,
                                    b = m.direction,
                                    y = m.original,
                                    v = m.width,
                                    S = m.height,
                                    D = this.getParentSize(),
                                    R =
                                        ((e = this.window.innerWidth),
                                            (i = this.window.innerHeight),
                                            (o = p),
                                            (r = u),
                                            (n = d),
                                            (s = c),
                                            (o = P(o, D.width, e, i)),
                                            (r = P(r, D.height, e, i)),
                                            (n = P(n, D.width, e, i)),
                                            (s = P(s, D.height, e, i)),
                                            { maxWidth: void 0 === o ? void 0 : Number(o), maxHeight: void 0 === r ? void 0 : Number(r), minWidth: void 0 === n ? void 0 : Number(n), minHeight: void 0 === s ? void 0 : Number(s) });
                                (p = R.maxWidth), (u = R.maxHeight), (d = R.minWidth), (c = R.minHeight);
                                var M = this.calculateNewSizeFromDirection(f, g),
                                    E = M.newHeight,
                                    W = M.newWidth,
                                    O = this.calculateNewMaxFromBoundary(p, u);
                                this.props.snap && this.props.snap.x && (W = x(W, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (E = x(E, this.props.snap.y, this.props.snapGap));
                                var N = this.calculateNewSizeFromAspectRatio(W, E, { width: O.maxWidth, height: O.maxHeight }, { width: d, height: c });
                                if (((W = N.newWidth), (E = N.newHeight), this.props.grid)) {
                                    var C = w(W, this.props.grid[0]),
                                        H = w(E, this.props.grid[1]),
                                        T = this.props.snapGap || 0,
                                        k = 0 === T || Math.abs(C - W) <= T ? C : W,
                                        j = 0 === T || Math.abs(H - E) <= T ? H : E;
                                    (W = k), (E = j);
                                }
                                var _ = { width: W - y.width, height: E - y.height };
                                if (v && "string" == typeof v) {
                                    if (v.endsWith("%")) {
                                        var A = (W / D.width) * 100;
                                        W = A + "%";
                                    } else if (v.endsWith("vw")) {
                                        var L = (W / this.window.innerWidth) * 100;
                                        W = L + "vw";
                                    } else if (v.endsWith("vh")) {
                                        var B = (W / this.window.innerHeight) * 100;
                                        W = B + "vh";
                                    }
                                }
                                if (S && "string" == typeof S) {
                                    if (S.endsWith("%")) {
                                        var A = (E / D.height) * 100;
                                        E = A + "%";
                                    } else if (S.endsWith("vw")) {
                                        var L = (E / this.window.innerWidth) * 100;
                                        E = L + "vw";
                                    } else if (S.endsWith("vh")) {
                                        var B = (E / this.window.innerHeight) * 100;
                                        E = B + "vh";
                                    }
                                }
                                var X = { width: this.createSizeForCssProperty(W, "width"), height: this.createSizeForCssProperty(E, "height") };
                                "row" === this.flexDir ? (X.flexBasis = X.width) : "column" === this.flexDir && (X.flexBasis = X.height);
                                var F = this.state.width !== X.width,
                                    Y = this.state.height !== X.height,
                                    U = this.state.flexBasis !== X.flexBasis,
                                    G = F || Y || U;
                                G &&
                                    (0, h.flushSync)(function () {
                                        a.setState(X);
                                    }),
                                    this.props.onResize && G && this.props.onResize(t, b, this.resizable, _);
                            }
                        }),
                        (e.prototype.onMouseUp = function (t) {
                            var e = this.state,
                                i = e.isResizing,
                                o = e.direction,
                                r = e.original;
                            if (i && this.resizable) {
                                var n = { width: this.size.width - r.width, height: this.size.height - r.height };
                                this.props.onResizeStop && this.props.onResizeStop(t, o, this.resizable, n),
                                    this.props.size && this.setState(this.props.size),
                                    this.unbindEvents(),
                                    this.setState({ isResizing: !1, backgroundStyle: b(b({}, this.state.backgroundStyle), { cursor: "auto" }) });
                            }
                        }),
                        (e.prototype.updateSize = function (t) {
                            this.setState({ width: t.width, height: t.height });
                        }),
                        (e.prototype.renderResizer = function () {
                            var t = this,
                                e = this.props,
                                i = e.enable,
                                o = e.handleStyles,
                                r = e.handleClasses,
                                s = e.handleWrapperStyle,
                                a = e.handleWrapperClass,
                                h = e.handleComponent;
                            if (!i) return null;
                            var l = Object.keys(i).map(function (e) {
                                return !1 !== i[e] ? n.createElement(g, { key: e, direction: e, onResizeStart: t.onResizeStart, replaceStyles: o && o[e], className: r && r[e] }, h && h[e] ? h[e] : null) : null;
                            });
                            return n.createElement("div", { className: a, style: s }, l);
                        }),
                        (e.prototype.render = function () {
                            var t = this,
                                e = Object.keys(this.props).reduce(function (e, i) {
                                    return -1 !== R.indexOf(i) || (e[i] = t.props[i]), e;
                                }, {}),
                                i = b(b(b({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), {
                                    maxWidth: this.props.maxWidth,
                                    maxHeight: this.props.maxHeight,
                                    minWidth: this.props.minWidth,
                                    minHeight: this.props.minHeight,
                                    boxSizing: "border-box",
                                    flexShrink: 0,
                                });
                            this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
                            var o = this.props.as || "div";
                            return n.createElement(
                                o,
                                b({ ref: this.ref, style: i, className: this.props.className }, e),
                                this.state.isResizing && n.createElement("div", { style: this.state.backgroundStyle }),
                                this.props.children,
                                this.renderResizer()
                            );
                        }),
                        (e.defaultProps = {
                            as: "div",
                            onResizeStart: function () { },
                            onResize: function () { },
                            onResizeStop: function () { },
                            enable: { top: !0, right: !0, bottom: !0, left: !0, topRight: !0, bottomRight: !0, bottomLeft: !0, topLeft: !0 },
                            style: {},
                            grid: [1, 1],
                            lockAspectRatio: !1,
                            lockAspectRatioExtraWidth: 0,
                            lockAspectRatioExtraHeight: 0,
                            scale: 1,
                            resizeRatio: 1,
                            snapGap: 0,
                        }),
                        e
                    );
                })(n.PureComponent),
                W = function (t, e) {
                    return (W =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(t, e);
                },
                O = function () {
                    return (O =
                        Object.assign ||
                        function (t) {
                            for (var e, i = 1, o = arguments.length; i < o; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t;
                        }).apply(this, arguments);
                },
                N = { width: "auto", height: "auto", display: "inline-block", position: "absolute", top: 0, left: 0 },
                C = (function (t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return (
                            (i.resizingPosition = { x: 0, y: 0 }),
                            (i.offsetFromParent = { left: 0, top: 0 }),
                            (i.resizableElement = { current: null }),
                            (i.originalPosition = { x: 0, y: 0 }),
                            (i.refDraggable = function (t) {
                                t && (i.draggable = t);
                            }),
                            (i.refResizable = function (t) {
                                t && ((i.resizable = t), (i.resizableElement.current = t.resizable));
                            }),
                            (i.state = { resizing: !1, bounds: { top: 0, right: 0, bottom: 0, left: 0 }, maxWidth: e.maxWidth, maxHeight: e.maxHeight }),
                            (i.onResizeStart = i.onResizeStart.bind(i)),
                            (i.onResize = i.onResize.bind(i)),
                            (i.onResizeStop = i.onResizeStop.bind(i)),
                            (i.onDragStart = i.onDragStart.bind(i)),
                            (i.onDrag = i.onDrag.bind(i)),
                            (i.onDragStop = i.onDragStop.bind(i)),
                            (i.getMaxSizesFromProps = i.getMaxSizesFromProps.bind(i)),
                            i
                        );
                    }
                    return (
                        !(function (t, e) {
                            function i() {
                                this.constructor = t;
                            }
                            W(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        })(e, t),
                        (e.prototype.componentDidMount = function () {
                            this.updateOffsetFromParent();
                            var t = this.offsetFromParent,
                                e = t.left,
                                i = t.top,
                                o = this.getDraggablePosition(),
                                r = o.x,
                                n = o.y;
                            this.draggable.setState({ x: r - e, y: n - i }), this.forceUpdate();
                        }),
                        (e.prototype.getDraggablePosition = function () {
                            var t = this.draggable.state;
                            return { x: t.x, y: t.y };
                        }),
                        (e.prototype.getParent = function () {
                            return this.resizable && this.resizable.parentNode;
                        }),
                        (e.prototype.getParentSize = function () {
                            return this.resizable.getParentSize();
                        }),
                        (e.prototype.getMaxSizesFromProps = function () {
                            return { maxWidth: void 0 === this.props.maxWidth ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, maxHeight: void 0 === this.props.maxHeight ? Number.MAX_SAFE_INTEGER : this.props.maxHeight };
                        }),
                        (e.prototype.getSelfElement = function () {
                            return this.resizable && this.resizable.resizable;
                        }),
                        (e.prototype.getOffsetHeight = function (t) {
                            var e = this.props.scale;
                            switch (this.props.bounds) {
                                case "window":
                                    return window.innerHeight / e;
                                case "body":
                                    return document.body.offsetHeight / e;
                                default:
                                    return t.offsetHeight;
                            }
                        }),
                        (e.prototype.getOffsetWidth = function (t) {
                            var e = this.props.scale;
                            switch (this.props.bounds) {
                                case "window":
                                    return window.innerWidth / e;
                                case "body":
                                    return document.body.offsetWidth / e;
                                default:
                                    return t.offsetWidth;
                            }
                        }),
                        (e.prototype.onDragStart = function (t, e) {
                            this.props.onDragStart && this.props.onDragStart(t, e);
                            var i,
                                o = this.getDraggablePosition();
                            if (((this.originalPosition = o), this.props.bounds)) {
                                var r = this.getParent(),
                                    n = this.props.scale;
                                if ("parent" === this.props.bounds) i = r;
                                else if ("body" === this.props.bounds) {
                                    var s = r.getBoundingClientRect(),
                                        a = s.left,
                                        h = s.top,
                                        l = document.body.getBoundingClientRect(),
                                        p = -(a - r.offsetLeft * n - l.left) / n,
                                        u = -(h - r.offsetTop * n - l.top) / n,
                                        d = (document.body.offsetWidth - this.resizable.size.width * n) / n + p,
                                        c = (document.body.offsetHeight - this.resizable.size.height * n) / n + u;
                                    return this.setState({ bounds: { top: u, right: d, bottom: c, left: p } });
                                } else if ("window" === this.props.bounds) {
                                    if (!this.resizable) return;
                                    var f = r.getBoundingClientRect(),
                                        g = f.left,
                                        m = f.top,
                                        b = -(g - r.offsetLeft * n) / n,
                                        y = -(m - r.offsetTop * n) / n,
                                        d = (window.innerWidth - this.resizable.size.width * n) / n + b,
                                        c = (window.innerHeight - this.resizable.size.height * n) / n + y;
                                    return this.setState({ bounds: { top: y, right: d, bottom: c, left: b } });
                                } else "string" == typeof this.props.bounds ? (i = document.querySelector(this.props.bounds)) : this.props.bounds instanceof HTMLElement && (i = this.props.bounds);
                                if (i instanceof HTMLElement && r instanceof HTMLElement) {
                                    var v = i.getBoundingClientRect(),
                                        w = v.left,
                                        S = v.top,
                                        z = r.getBoundingClientRect(),
                                        x = z.left,
                                        D = z.top,
                                        P = (w - x) / n,
                                        R = S - D;
                                    if (this.resizable) {
                                        this.updateOffsetFromParent();
                                        var M = this.offsetFromParent;
                                        this.setState({
                                            bounds: { top: R - M.top, right: P + (i.offsetWidth - this.resizable.size.width) - M.left / n, bottom: R + (i.offsetHeight - this.resizable.size.height) - M.top, left: P - M.left / n },
                                        });
                                    }
                                }
                            }
                        }),
                        (e.prototype.onDrag = function (t, e) {
                            if (this.props.onDrag) {
                                var i = this.offsetFromParent,
                                    o = i.left,
                                    r = i.top;
                                if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), { x: e.x + o, y: e.y + r }));
                                if ("x" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), { x: e.x + o, y: this.originalPosition.y + r, deltaY: 0 }));
                                if ("y" === this.props.dragAxis) return this.props.onDrag(t, O(O({}, e), { x: this.originalPosition.x + o, y: e.y + r, deltaX: 0 }));
                            }
                        }),
                        (e.prototype.onDragStop = function (t, e) {
                            if (this.props.onDragStop) {
                                var i = this.offsetFromParent,
                                    o = i.left,
                                    r = i.top;
                                if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), { x: e.x + o, y: e.y + r }));
                                if ("x" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), { x: e.x + o, y: this.originalPosition.y + r, deltaY: 0 }));
                                if ("y" === this.props.dragAxis) return this.props.onDragStop(t, O(O({}, e), { x: this.originalPosition.x + o, y: e.y + r, deltaX: 0 }));
                            }
                        }),
                        (e.prototype.onResizeStart = function (t, e, i) {
                            t.stopPropagation(), this.setState({ resizing: !0 });
                            var o = this.props.scale,
                                r = this.offsetFromParent,
                                n = this.getDraggablePosition();
                            if (((this.resizingPosition = { x: n.x + r.left, y: n.y + r.top }), (this.originalPosition = n), this.props.bounds)) {
                                var s = this.getParent(),
                                    a = void 0;
                                "parent" === this.props.bounds
                                    ? (a = s)
                                    : "body" === this.props.bounds
                                        ? (a = document.body)
                                        : "window" === this.props.bounds
                                            ? (a = window)
                                            : "string" == typeof this.props.bounds
                                                ? (a = document.querySelector(this.props.bounds))
                                                : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
                                var h = this.getSelfElement();
                                if (h instanceof Element && (a instanceof HTMLElement || a === window) && s instanceof HTMLElement) {
                                    var l = this.getMaxSizesFromProps(),
                                        p = l.maxWidth,
                                        u = l.maxHeight,
                                        d = this.getParentSize();
                                    if (p && "string" == typeof p) {
                                        if (p.endsWith("%")) {
                                            var c = Number(p.replace("%", "")) / 100;
                                            p = d.width * c;
                                        } else p.endsWith("px") && (p = Number(p.replace("px", "")));
                                    }
                                    if (u && "string" == typeof u) {
                                        if (u.endsWith("%")) {
                                            var c = Number(u.replace("%", "")) / 100;
                                            u = d.height * c;
                                        } else u.endsWith("px") && (u = Number(u.replace("px", "")));
                                    }
                                    var f = h.getBoundingClientRect(),
                                        g = f.left,
                                        m = f.top,
                                        b = "window" === this.props.bounds ? { left: 0, top: 0 } : a.getBoundingClientRect(),
                                        y = b.left,
                                        v = b.top,
                                        w = this.getOffsetWidth(a),
                                        S = this.getOffsetHeight(a),
                                        z = e.toLowerCase().endsWith("left"),
                                        x = e.toLowerCase().endsWith("right"),
                                        D = e.startsWith("top"),
                                        P = e.startsWith("bottom");
                                    if ((z || D) && this.resizable) {
                                        var R = (g - y) / o + this.resizable.size.width;
                                        this.setState({ maxWidth: R > Number(p) ? p : R });
                                    }
                                    if (x || (this.props.lockAspectRatio && !z && !D)) {
                                        var R = w + (y - g) / o;
                                        this.setState({ maxWidth: R > Number(p) ? p : R });
                                    }
                                    if ((D || z) && this.resizable) {
                                        var R = (m - v) / o + this.resizable.size.height;
                                        this.setState({ maxHeight: R > Number(u) ? u : R });
                                    }
                                    if (P || (this.props.lockAspectRatio && !D && !z)) {
                                        var R = S + (v - m) / o;
                                        this.setState({ maxHeight: R > Number(u) ? u : R });
                                    }
                                }
                            } else this.setState({ maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight });
                            this.props.onResizeStart && this.props.onResizeStart(t, e, i);
                        }),
                        (e.prototype.onResize = function (t, e, i, o) {
                            var r = { x: this.originalPosition.x, y: this.originalPosition.y },
                                n = -o.width,
                                s = -o.height;
                            ["top", "left", "topLeft", "bottomLeft", "topRight"].includes(e) && ("bottomLeft" === e ? (r.x += n) : ("topRight" === e || (r.x += n), (r.y += s)));
                            var a = this.draggable.state;
                            (r.x !== a.x || r.y !== a.y) && this.draggable.setState(r), this.updateOffsetFromParent();
                            var h = this.offsetFromParent,
                                l = this.getDraggablePosition().x + h.left,
                                p = this.getDraggablePosition().y + h.top;
                            (this.resizingPosition = { x: l, y: p }), this.props.onResize && this.props.onResize(t, e, i, o, { x: l, y: p });
                        }),
                        (e.prototype.onResizeStop = function (t, e, i, o) {
                            this.setState({ resizing: !1 });
                            var r = this.getMaxSizesFromProps(),
                                n = r.maxWidth,
                                s = r.maxHeight;
                            this.setState({ maxWidth: n, maxHeight: s }), this.props.onResizeStop && this.props.onResizeStop(t, e, i, o, this.resizingPosition);
                        }),
                        (e.prototype.updateSize = function (t) {
                            this.resizable && this.resizable.updateSize({ width: t.width, height: t.height });
                        }),
                        (e.prototype.updatePosition = function (t) {
                            this.draggable.setState(t);
                        }),
                        (e.prototype.updateOffsetFromParent = function () {
                            var t = this.props.scale,
                                e = this.getParent(),
                                i = this.getSelfElement();
                            if (!e || null === i) return { top: 0, left: 0 };
                            var o = e.getBoundingClientRect(),
                                r = o.left,
                                n = o.top,
                                s = i.getBoundingClientRect(),
                                a = this.getDraggablePosition(),
                                h = e.scrollLeft,
                                l = e.scrollTop;
                            this.offsetFromParent = { left: s.left - r + h - a.x * t, top: s.top - n + l - a.y * t };
                        }),
                        (e.prototype.render = function () {
                            var t,
                                e = this.props,
                                i = e.disableDragging,
                                o = e.style,
                                r = e.dragHandleClassName,
                                s = e.position,
                                h = e.onMouseDown,
                                l = e.onMouseUp,
                                p = e.dragAxis,
                                u = e.dragGrid,
                                d = e.bounds,
                                c = e.enableUserSelectHack,
                                f = e.cancel,
                                g = e.children,
                                m = (e.onResizeStart, e.onResize, e.onResizeStop, e.onDragStart, e.onDrag, e.onDragStop, e.resizeHandleStyles),
                                b = e.resizeHandleClasses,
                                y = e.resizeHandleComponent,
                                v = e.enableResizing,
                                w = e.resizeGrid,
                                S = e.resizeHandleWrapperClass,
                                z = e.resizeHandleWrapperStyle,
                                x = e.scale,
                                D = e.allowAnyClick,
                                P = (function (t, e) {
                                    var i = {};
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && 0 > e.indexOf(o) && (i[o] = t[o]);
                                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                        for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++) 0 > e.indexOf(o[r]) && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (i[o[r]] = t[o[r]]);
                                    return i;
                                })(e, [
                                    "disableDragging",
                                    "style",
                                    "dragHandleClassName",
                                    "position",
                                    "onMouseDown",
                                    "onMouseUp",
                                    "dragAxis",
                                    "dragGrid",
                                    "bounds",
                                    "enableUserSelectHack",
                                    "cancel",
                                    "children",
                                    "onResizeStart",
                                    "onResize",
                                    "onResizeStop",
                                    "onDragStart",
                                    "onDrag",
                                    "onDragStop",
                                    "resizeHandleStyles",
                                    "resizeHandleClasses",
                                    "resizeHandleComponent",
                                    "enableResizing",
                                    "resizeGrid",
                                    "resizeHandleWrapperClass",
                                    "resizeHandleWrapperStyle",
                                    "scale",
                                    "allowAnyClick",
                                ]),
                                R = this.props.default ? O({}, this.props.default) : void 0;
                            delete P.default;
                            var M = O(O(O({}, N), i || r ? { cursor: "auto" } : { cursor: "move" }), o),
                                W = this.offsetFromParent,
                                C = W.left,
                                H = W.top;
                            s && (t = { x: s.x - C, y: s.y - H });
                            var T = this.state.resizing ? void 0 : t,
                                k = this.state.resizing ? "both" : p;
                            return (0, n.createElement)(
                                a(),
                                {
                                    ref: this.refDraggable,
                                    handle: r ? ".".concat(r) : void 0,
                                    defaultPosition: R,
                                    onMouseDown: h,
                                    onMouseUp: l,
                                    onStart: this.onDragStart,
                                    onDrag: this.onDrag,
                                    onStop: this.onDragStop,
                                    axis: k,
                                    disabled: i,
                                    grid: u,
                                    bounds: d ? this.state.bounds : void 0,
                                    position: T,
                                    enableUserSelectHack: c,
                                    cancel: f,
                                    scale: x,
                                    allowAnyClick: D,
                                    nodeRef: this.resizableElement,
                                },
                                (0, n.createElement)(
                                    E,
                                    O({}, P, {
                                        ref: this.refResizable,
                                        defaultSize: R,
                                        size: this.props.size,
                                        enable: "boolean" == typeof v ? { bottom: v, bottomLeft: v, bottomRight: v, left: v, right: v, top: v, topLeft: v, topRight: v } : v,
                                        onResizeStart: this.onResizeStart,
                                        onResize: this.onResize,
                                        onResizeStop: this.onResizeStop,
                                        style: M,
                                        minWidth: this.props.minWidth,
                                        minHeight: this.props.minHeight,
                                        maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
                                        maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
                                        grid: w,
                                        handleWrapperClass: S,
                                        handleWrapperStyle: z,
                                        lockAspectRatio: this.props.lockAspectRatio,
                                        lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
                                        lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
                                        handleStyles: m,
                                        handleClasses: b,
                                        handleComponent: y,
                                        scale: this.props.scale,
                                    }),
                                    g
                                )
                            );
                        }),
                        (e.defaultProps = {
                            maxWidth: Number.MAX_SAFE_INTEGER,
                            maxHeight: Number.MAX_SAFE_INTEGER,
                            scale: 1,
                            onResizeStart: function () { },
                            onResize: function () { },
                            onResizeStop: function () { },
                            onDragStart: function () { },
                            onDrag: function () { },
                            onDragStop: function () { },
                        }),
                        e
                    );
                })(n.PureComponent);
        },
    },
]);





// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2663],{86010:function(t,e,i){"use strict";function o(){for(var t,e,i=0,o="";i<arguments.length;)(t=arguments[i++])&&(e=function t(e){var i,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(o=t(e[i]))&&(r&&(r+=" "),r+=o);else for(i in e)e[i]&&(r&&(r+=" "),r+=i)}return r}(t))&&(o&&(o+=" "),o+=e);return o}i.r(e),i.d(e,{clsx:function(){return o}}),e.default=o},92703:function(t,e,i){"use strict";var o=i(50414);function r(){}function n(){}n.resetWarningCache=r,t.exports=function(){function t(t,e,i,r,n,s){if(s!==o){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:n,resetWarningCache:r};return i.PropTypes=i,i}},45697:function(t,e,i){t.exports=i(92703)()},50414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75668:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),e.default=void 0;var o=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=c(void 0);if(i&&i.has(t))return i.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var s=r?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(o,n,s):o[n]=t[n]}return o.default=t,i&&i.set(t,o),o}(i(67294)),r=d(i(45697)),n=d(i(73935)),s=d(i(86010)),a=i(81825),h=i(2849),l=i(9280),p=d(i(80783)),u=d(i(55904));function d(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(c=function(t){return t?i:e})(t)}function f(){return(f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function g(t,e,i){var o;return(e="symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?o:String(o))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class m extends o.Component{static getDerivedStateFromProps(t,e){let{position:i}=t,{prevPropsPosition:o}=e;return i&&(!o||i.x!==o.x||i.y!==o.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:i,prevPropsPosition:o}),{x:i.x,y:i.y,prevPropsPosition:{...i}}):null}constructor(t){super(t),g(this,"onDragStart",(t,e)=>{if((0,u.default)("Draggable: onDragStart: %j",e),!1===this.props.onStart(t,(0,h.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})}),g(this,"onDrag",(t,e)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",e);let i=(0,h.createDraggableData)(this,e),o={x:i.x,y:i.y,slackX:0,slackY:0};if(this.props.bounds){let{x:t,y:e}=o;o.x+=this.state.slackX,o.y+=this.state.slackY;let[r,n]=(0,h.getBoundPosition)(this,o.x,o.y);o.x=r,o.y=n,o.slackX=this.state.slackX+(t-o.x),o.slackY=this.state.slackY+(e-o.y),i.x=o.x,i.y=o.y,i.deltaX=o.x-this.state.x,i.deltaY=o.y-this.state.y}if(!1===this.props.onDrag(t,i))return!1;this.setState(o)}),g(this,"onDragStop",(t,e)=>{if(!this.state.dragging||!1===this.props.onStop(t,(0,h.createDraggableData)(this,e)))return!1;(0,u.default)("Draggable: onDragStop: %j",e);let i={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:t,y:e}=this.props.position;i.x=t,i.y=e}this.setState(i)}),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},t.position&&!(t.onDrag||t.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode() instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!==(t=null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current)&&void 0!==t?t:n.default.findDOMNode(this)}render(){let{axis:t,bounds:e,children:i,defaultPosition:r,defaultClassName:n,defaultClassNameDragging:l,defaultClassNameDragged:u,position:d,positionOffset:c,scale:g,...m}=this.props,b={},y=null,v=!d||this.state.dragging,w=d||r,S={x:(0,h.canDragX)(this)&&v?this.state.x:w.x,y:(0,h.canDragY)(this)&&v?this.state.y:w.y};this.state.isElementSVG?y=(0,a.createSVGTransform)(S,c):b=(0,a.createCSSTransform)(S,c);let z=(0,s.default)(i.props.className||"",n,{[l]:this.state.dragging,[u]:this.state.dragged});return o.createElement(p.default,f({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(i),{className:z,style:{...i.props.style,...b},transform:y}))}}e.default=m,g(m,"displayName","Draggable"),g(m,"propTypes",{...p.default.propTypes,axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),g(m,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},80783:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=u(void 0);if(i&&i.has(t))return i.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var s=r?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(o,n,s):o[n]=t[n]}return o.default=t,i&&i.set(t,o),o}(i(67294)),r=p(i(45697)),n=p(i(73935)),s=i(81825),a=i(2849),h=i(9280),l=p(i(55904));function p(t){return t&&t.__esModule?t:{default:t}}function u(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(u=function(t){return t?i:e})(t)}function d(t,e,i){var o;return(e="symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?o:String(o))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}let c={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},f=c.mouse;class g extends o.Component{constructor(){super(...arguments),d(this,"dragging",!1),d(this,"lastX",NaN),d(this,"lastY",NaN),d(this,"touchIdentifier",null),d(this,"mounted",!1),d(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;let e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw Error("<DraggableCore> not mounted on DragStart!");let{ownerDocument:i}=e;if(this.props.disabled||!(t.target instanceof i.defaultView.Node)||this.props.handle&&!(0,s.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,s.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();let o=(0,s.getTouchIdentifier)(t);this.touchIdentifier=o;let r=(0,a.getControlPosition)(t,o,this);if(null==r)return;let{x:n,y:h}=r,p=(0,a.createCoreData)(this,n,h);(0,l.default)("DraggableCore: handleDragStart: %j",p),(0,l.default)("calling",this.props.onStart),!1!==this.props.onStart(t,p)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,s.addUserSelectStyles)(i),this.dragging=!0,this.lastX=n,this.lastY=h,(0,s.addEvent)(i,f.move,this.handleDrag),(0,s.addEvent)(i,f.stop,this.handleDragStop))}),d(this,"handleDrag",t=>{let e=(0,a.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:i,y:o}=e;if(Array.isArray(this.props.grid)){let t=i-this.lastX,e=o-this.lastY;if([t,e]=(0,a.snapToGrid)(this.props.grid,t,e),!t&&!e)return;i=this.lastX+t,o=this.lastY+e}let r=(0,a.createCoreData)(this,i,o);if((0,l.default)("DraggableCore: handleDrag: %j",r),!1===this.props.onDrag(t,r)||!1===this.mounted){try{this.handleDragStop(new MouseEvent("mouseup"))}catch(e){let t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}return}this.lastX=i,this.lastY=o}),d(this,"handleDragStop",t=>{if(!this.dragging)return;let e=(0,a.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:i,y:o}=e;if(Array.isArray(this.props.grid)){let t=i-this.lastX||0,e=o-this.lastY||0;[t,e]=(0,a.snapToGrid)(this.props.grid,t,e),i=this.lastX+t,o=this.lastY+e}let r=(0,a.createCoreData)(this,i,o);if(!1===this.props.onStop(t,r)||!1===this.mounted)return!1;let n=this.findDOMNode();n&&this.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(n.ownerDocument),(0,l.default)("DraggableCore: handleDragStop: %j",r),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,n&&((0,l.default)("DraggableCore: Removing handlers"),(0,s.removeEvent)(n.ownerDocument,f.move,this.handleDrag),(0,s.removeEvent)(n.ownerDocument,f.stop,this.handleDragStop))}),d(this,"onMouseDown",t=>(f=c.mouse,this.handleDragStart(t))),d(this,"onMouseUp",t=>(f=c.mouse,this.handleDragStop(t))),d(this,"onTouchStart",t=>(f=c.touch,this.handleDragStart(t))),d(this,"onTouchEnd",t=>(f=c.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;let t=this.findDOMNode();t&&(0,s.addEvent)(t,c.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let t=this.findDOMNode();if(t){let{ownerDocument:e}=t;(0,s.removeEvent)(e,c.mouse.move,this.handleDrag),(0,s.removeEvent)(e,c.touch.move,this.handleDrag),(0,s.removeEvent)(e,c.mouse.stop,this.handleDragStop),(0,s.removeEvent)(e,c.touch.stop,this.handleDragStop),(0,s.removeEvent)(t,c.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!==(t=this.props)&&void 0!==t&&t.nodeRef?null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current:n.default.findDOMNode(this)}render(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}e.default=g,d(g,"displayName","DraggableCore"),d(g,"propTypes",{allowAnyClick:r.default.bool,children:r.default.node.isRequired,disabled:r.default.bool,enableUserSelectHack:r.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw Error("Draggable's offsetParent must be a DOM Node.")},grid:r.default.arrayOf(r.default.number),handle:r.default.string,cancel:r.default.string,nodeRef:r.default.object,onStart:r.default.func,onDrag:r.default.func,onStop:r.default.func,onMouseDown:r.default.func,scale:r.default.number,className:h.dontSetMe,style:h.dontSetMe,transform:h.dontSetMe}),d(g,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},61193:function(t,e,i){"use strict";let{default:o,DraggableCore:r}=i(75668);t.exports=o,t.exports.default=o,t.exports.DraggableCore=r},81825:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addClassName=l,e.addEvent=function(t,e,i,o){if(!t)return;let r={capture:!0,...o};t.addEventListener?t.addEventListener(e,i,r):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},e.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||((e=t.createElement("style")).type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e)),t.body&&l(t.body,"react-draggable-transparent-selection")},e.createCSSTransform=function(t,e){let i=h(t,e,"px");return{[(0,r.browserPrefixToKey)("transform",r.default)]:i}},e.createSVGTransform=function(t,e){return h(t,e,"")},e.getTouch=function(t,e){return t.targetTouches&&(0,o.findInArray)(t.targetTouches,t=>e===t.identifier)||t.changedTouches&&(0,o.findInArray)(t.changedTouches,t=>e===t.identifier)},e.getTouchIdentifier=function(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0},e.getTranslation=h,e.innerHeight=function(t){let e=t.clientHeight,i=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,o.int)(i.paddingTop),e-=(0,o.int)(i.paddingBottom)},e.innerWidth=function(t){let e=t.clientWidth,i=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,o.int)(i.paddingLeft),e-=(0,o.int)(i.paddingRight)},e.matchesSelector=a,e.matchesSelectorAndParentsTo=function(t,e,i){let o=t;do{if(a(o,e))return!0;if(o===i)break;o=o.parentNode}while(o);return!1},e.offsetXYFromParent=function(t,e,i){let o=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-o.left)/i,y:(t.clientY+e.scrollTop-o.top)/i}},e.outerHeight=function(t){let e=t.clientHeight,i=t.ownerDocument.defaultView.getComputedStyle(t);return e+((0,o.int)(i.borderTopWidth)+(0,o.int)(i.borderBottomWidth))},e.outerWidth=function(t){let e=t.clientWidth,i=t.ownerDocument.defaultView.getComputedStyle(t);return e+((0,o.int)(i.borderLeftWidth)+(0,o.int)(i.borderRightWidth))},e.removeClassName=p,e.removeEvent=function(t,e,i,o){if(!t)return;let r={capture:!0,...o};t.removeEventListener?t.removeEventListener(e,i,r):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null},e.removeUserSelectStyles=function(t){if(t)try{if(t.body&&p(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{let e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(t){}};var o=i(9280),r=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=n(void 0);if(i&&i.has(t))return i.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var a=r?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(o,s,a):o[s]=t[s]}return o.default=t,i&&i.set(t,o),o}(i(38650));function n(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(n=function(t){return t?i:e})(t)}let s="";function a(t,e){return s||(s=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(e){return(0,o.isFunction)(t[e])})),!!(0,o.isFunction)(t[s])&&t[s](e)}function h(t,e,i){let{x:o,y:r}=t,n="translate(".concat(o).concat(i,",").concat(r).concat(i,")");if(e){let t="".concat("string"==typeof e.x?e.x:e.x+i),o="".concat("string"==typeof e.y?e.y:e.y+i);n="translate(".concat(t,", ").concat(o,")")+n}return n}function l(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function p(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}},38650:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.browserPrefixToKey=r,e.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},e.default=void 0,e.getPrefix=o;let i=["Moz","Webkit","O","ms"];function o(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";let o=null===(t=window.document)||void 0===t||null===(t=t.documentElement)||void 0===t?void 0:t.style;if(!o||e in o)return"";for(let t=0;t<i.length;t++)if(r(e,i[t]) in o)return i[t];return""}function r(t,e){return e?"".concat(e).concat(function(t){let e="",i=!0;for(let o=0;o<t.length;o++)i?(e+=t[o].toUpperCase(),i=!1):"-"===t[o]?i=!0:e+=t[o];return e}(t)):t}e.default=o()},55904:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},2849:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},e.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},e.createCoreData=function(t,e,i){let r=!(0,o.isNum)(t.lastX),s=n(t);return r?{node:s,deltaX:0,deltaY:0,lastX:e,lastY:i,x:e,y:i}:{node:s,deltaX:e-t.lastX,deltaY:i-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:i}},e.createDraggableData=function(t,e){let i=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/i,y:t.state.y+e.deltaY/i,deltaX:e.deltaX/i,deltaY:e.deltaY/i,lastX:t.state.x,lastY:t.state.y}},e.getBoundPosition=function(t,e,i){var s;if(!t.props.bounds)return[e,i];let{bounds:a}=t.props;a="string"==typeof a?a:{left:(s=a).left,top:s.top,right:s.right,bottom:s.bottom};let h=n(t);if("string"==typeof a){let t;let{ownerDocument:e}=h,i=e.defaultView;if(!((t="parent"===a?h.parentNode:e.querySelector(a))instanceof i.HTMLElement))throw Error('Bounds selector "'+a+'" could not find an element.');let n=i.getComputedStyle(h),s=i.getComputedStyle(t);a={left:-h.offsetLeft+(0,o.int)(s.paddingLeft)+(0,o.int)(n.marginLeft),top:-h.offsetTop+(0,o.int)(s.paddingTop)+(0,o.int)(n.marginTop),right:(0,r.innerWidth)(t)-(0,r.outerWidth)(h)-h.offsetLeft+(0,o.int)(s.paddingRight)-(0,o.int)(n.marginRight),bottom:(0,r.innerHeight)(t)-(0,r.outerHeight)(h)-h.offsetTop+(0,o.int)(s.paddingBottom)-(0,o.int)(n.marginBottom)}}return(0,o.isNum)(a.right)&&(e=Math.min(e,a.right)),(0,o.isNum)(a.bottom)&&(i=Math.min(i,a.bottom)),(0,o.isNum)(a.left)&&(e=Math.max(e,a.left)),(0,o.isNum)(a.top)&&(i=Math.max(i,a.top)),[e,i]},e.getControlPosition=function(t,e,i){let o="number"==typeof e?(0,r.getTouch)(t,e):null;if("number"==typeof e&&!o)return null;let s=n(i),a=i.props.offsetParent||s.offsetParent||s.ownerDocument.body;return(0,r.offsetXYFromParent)(o||t,a,i.props.scale)},e.snapToGrid=function(t,e,i){return[Math.round(e/t[0])*t[0],Math.round(i/t[1])*t[1]]};var o=i(9280),r=i(81825);function n(t){let e=t.findDOMNode();if(!e)throw Error("<DraggableCore>: Unmounted during event!");return e}},9280:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dontSetMe=function(t,e,i){if(t[e])return Error("Invalid prop ".concat(e," passed to ").concat(i," - do not set this, set it on the child."))},e.findInArray=function(t,e){for(let i=0,o=t.length;i<o;i++)if(e.apply(e,[t[i],i,t]))return t[i]},e.int=function(t){return parseInt(t,10)},e.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},e.isNum=function(t){return"number"==typeof t&&!isNaN(t)}},42663:function(t,e,i){"use strict";i.d(e,{s:function(){return C}});var o,r,n=i(67294),s=i(61193),a=i.n(s),h=i(73935),l=(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),p=function(){return(p=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},d={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},c={width:"20px",height:"20px",position:"absolute"},f={top:p(p({},u),{top:"-5px"}),right:p(p({},d),{left:void 0,right:"-5px"}),bottom:p(p({},u),{top:void 0,bottom:"-5px"}),left:p(p({},d),{left:"-5px"}),topRight:p(p({},c),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:p(p({},c),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:p(p({},c),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:p(p({},c),{left:"-10px",top:"-10px",cursor:"nw-resize"})},g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onMouseDown=function(t){e.props.onResizeStart(t,e.props.direction)},e.onTouchStart=function(t){e.props.onResizeStart(t,e.props.direction)},e}return l(e,t),e.prototype.render=function(){return n.createElement("div",{className:this.props.className||"",style:p(p({position:"absolute",userSelect:"none"},f[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},e}(n.PureComponent),m=(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),b=function(){return(b=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},y={width:"auto",height:"auto"},v=function(t,e,i){return Math.max(Math.min(t,i),e)},w=function(t,e){return Math.round(t/e)*e},S=function(t,e){return RegExp(t,"i").test(e)},z=function(t){return!!(t.touches&&t.touches.length)},x=function(t,e,i){void 0===i&&(i=0);var o=e.reduce(function(i,o,r){return Math.abs(o-t)<Math.abs(e[i]-t)?r:i},0),r=Math.abs(e[o]-t);return 0===i||r<i?e[o]:t},D=function(t){return"auto"===(t=t.toString())||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:t+"px"},P=function(t,e,i,o){if(t&&"string"==typeof t){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%")){var r=Number(t.replace("%",""))/100;return e*r}if(t.endsWith("vw")){var r=Number(t.replace("vw",""))/100;return i*r}if(t.endsWith("vh")){var r=Number(t.replace("vh",""))/100;return o*r}}return t},R=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],M="__resizable_base__",E=function(t){function e(e){var i=t.call(this,e)||this;return i.ratio=1,i.resizable=null,i.parentLeft=0,i.parentTop=0,i.resizableLeft=0,i.resizableRight=0,i.resizableTop=0,i.resizableBottom=0,i.targetLeft=0,i.targetTop=0,i.appendBase=function(){if(!i.resizable||!i.window)return null;var t=i.parentNode;if(!t)return null;var e=i.window.document.createElement("div");return e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.transform="scale(0, 0)",e.style.left="0",e.style.flex="0 0 100%",e.classList?e.classList.add(M):e.className+=M,t.appendChild(e),e},i.removeBase=function(t){var e=i.parentNode;e&&e.removeChild(t)},i.ref=function(t){t&&(i.resizable=t)},i.state={isResizing:!1,width:void 0===(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:void 0===(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i}return m(e,t),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var t=0,e=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,o=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),t="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,e="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=r}return{width:t,height:e}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var t=this,e=this.props.size,i=function(e){if(void 0===t.state[e]||"auto"===t.state[e])return"auto";if(t.propsSize&&t.propsSize[e]&&t.propsSize[e].toString().endsWith("%")){if(t.state[e].toString().endsWith("%"))return t.state[e].toString();var i=t.getParentSize();return Number(t.state[e].toString().replace("px",""))/i[e]*100+"%"}return D(t.state[e])};return{width:e&&void 0!==e.width&&!this.state.isResizing?D(e.width):i("width"),height:e&&void 0!==e.height&&!this.state.isResizing?D(e.height):i("height")}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var t=this.appendBase();if(!t)return{width:0,height:0};var e=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(e=!0,this.parentNode.style.flexWrap="wrap"),t.style.position="relative",t.style.minWidth="100%",t.style.minHeight="100%";var o={width:t.offsetWidth,height:t.offsetHeight};return e&&(this.parentNode.style.flexWrap=i),this.removeBase(t),o},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(this.resizable&&this.window){var t=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==t.flexBasis?t.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(t,e){var i=this.propsSize&&this.propsSize[e];return"auto"===this.state[e]&&this.state.original[e]===t&&(void 0===i||"auto"===i)?"auto":t},e.prototype.calculateNewMaxFromBoundary=function(t,e){var i,o,r=this.props.boundsByDirection,n=this.state.direction,s=r&&S("left",n),a=r&&S("top",n);if("parent"===this.props.bounds){var h=this.parentNode;h&&(i=s?this.resizableRight-this.parentLeft:h.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:h.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(t=t&&t<i?t:i),o&&Number.isFinite(o)&&(e=e&&e<o?e:o),{maxWidth:t,maxHeight:e}},e.prototype.calculateNewSizeFromDirection=function(t,e){var i=this.props.scale||1,o=this.props.resizeRatio||1,r=this.state,n=r.direction,s=r.original,a=this.props,h=a.lockAspectRatio,l=a.lockAspectRatioExtraHeight,p=a.lockAspectRatioExtraWidth,u=s.width,d=s.height,c=l||0,f=p||0;return S("right",n)&&(u=s.width+(t-s.x)*o/i,h&&(d=(u-f)/this.ratio+c)),S("left",n)&&(u=s.width-(t-s.x)*o/i,h&&(d=(u-f)/this.ratio+c)),S("bottom",n)&&(d=s.height+(e-s.y)*o/i,h&&(u=(d-c)*this.ratio+f)),S("top",n)&&(d=s.height-(e-s.y)*o/i,h&&(u=(d-c)*this.ratio+f)),{newWidth:u,newHeight:d}},e.prototype.calculateNewSizeFromAspectRatio=function(t,e,i,o){var r=this.props,n=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,h=void 0===o.width?10:o.width,l=void 0===i.width||i.width<0?t:i.width,p=void 0===o.height?10:o.height,u=void 0===i.height||i.height<0?e:i.height,d=s||0,c=a||0;if(n){var f=(p-d)*this.ratio+c,g=(u-d)*this.ratio+c,m=(h-c)/this.ratio+d,b=(l-c)/this.ratio+d;t=v(t,Math.max(h,f),Math.min(l,g)),e=v(e,Math.max(p,m),Math.min(u,b))}else t=v(t,h,l),e=v(e,p,u);return{newWidth:t,newHeight:e}},e.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var t=this.parentNode;if(t){var e=t.getBoundingClientRect();this.parentLeft=e.left,this.parentTop=e.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left,this.targetTop=i.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),r=o.left,n=o.top,s=o.right,a=o.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=n,this.resizableBottom=a}},e.prototype.onResizeStart=function(t,e){if(this.resizable&&this.window){var i,o,r=0,n=0;if(t.nativeEvent&&((i=t.nativeEvent).clientX||0===i.clientX)&&(i.clientY||0===i.clientY)?(r=t.nativeEvent.clientX,n=t.nativeEvent.clientY):t.nativeEvent&&z(t.nativeEvent)&&(r=t.nativeEvent.touches[0].clientX,n=t.nativeEvent.touches[0].clientY),!this.props.onResizeStart||!this.resizable||!1!==this.props.onResizeStart(t,e,this.resizable)){this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var s=this.window.getComputedStyle(this.resizable);if("auto"!==s.flexBasis){var a=this.parentNode;if(a){var h=this.window.getComputedStyle(a).flexDirection;this.flexDir=h.startsWith("row")?"row":"column",o=s.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:r,y:n,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:b(b({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(t.target).cursor||"auto"}),direction:e,flexBasis:o};this.setState(l)}}},e.prototype.onMouseMove=function(t){var e,i,o,r,n,s,a=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&z(t))try{t.preventDefault(),t.stopPropagation()}catch(t){}var l=this.props,p=l.maxWidth,u=l.maxHeight,d=l.minWidth,c=l.minHeight,f=z(t)?t.touches[0].clientX:t.clientX,g=z(t)?t.touches[0].clientY:t.clientY,m=this.state,b=m.direction,y=m.original,v=m.width,S=m.height,D=this.getParentSize(),R=(e=this.window.innerWidth,i=this.window.innerHeight,o=p,r=u,n=d,s=c,o=P(o,D.width,e,i),r=P(r,D.height,e,i),n=P(n,D.width,e,i),s=P(s,D.height,e,i),{maxWidth:void 0===o?void 0:Number(o),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===n?void 0:Number(n),minHeight:void 0===s?void 0:Number(s)});p=R.maxWidth,u=R.maxHeight,d=R.minWidth,c=R.minHeight;var M=this.calculateNewSizeFromDirection(f,g),E=M.newHeight,W=M.newWidth,O=this.calculateNewMaxFromBoundary(p,u);this.props.snap&&this.props.snap.x&&(W=x(W,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(E=x(E,this.props.snap.y,this.props.snapGap));var N=this.calculateNewSizeFromAspectRatio(W,E,{width:O.maxWidth,height:O.maxHeight},{width:d,height:c});if(W=N.newWidth,E=N.newHeight,this.props.grid){var C=w(W,this.props.grid[0]),H=w(E,this.props.grid[1]),T=this.props.snapGap||0,k=0===T||Math.abs(C-W)<=T?C:W,j=0===T||Math.abs(H-E)<=T?H:E;W=k,E=j}var _={width:W-y.width,height:E-y.height};if(v&&"string"==typeof v){if(v.endsWith("%")){var A=W/D.width*100;W=A+"%"}else if(v.endsWith("vw")){var L=W/this.window.innerWidth*100;W=L+"vw"}else if(v.endsWith("vh")){var B=W/this.window.innerHeight*100;W=B+"vh"}}if(S&&"string"==typeof S){if(S.endsWith("%")){var A=E/D.height*100;E=A+"%"}else if(S.endsWith("vw")){var L=E/this.window.innerWidth*100;E=L+"vw"}else if(S.endsWith("vh")){var B=E/this.window.innerHeight*100;E=B+"vh"}}var X={width:this.createSizeForCssProperty(W,"width"),height:this.createSizeForCssProperty(E,"height")};"row"===this.flexDir?X.flexBasis=X.width:"column"===this.flexDir&&(X.flexBasis=X.height);var F=this.state.width!==X.width,Y=this.state.height!==X.height,U=this.state.flexBasis!==X.flexBasis,G=F||Y||U;G&&(0,h.flushSync)(function(){a.setState(X)}),this.props.onResize&&G&&this.props.onResize(t,b,this.resizable,_)}},e.prototype.onMouseUp=function(t){var e=this.state,i=e.isResizing,o=e.direction,r=e.original;if(i&&this.resizable){var n={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(t,o,this.resizable,n),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:b(b({},this.state.backgroundStyle),{cursor:"auto"})})}},e.prototype.updateSize=function(t){this.setState({width:t.width,height:t.height})},e.prototype.renderResizer=function(){var t=this,e=this.props,i=e.enable,o=e.handleStyles,r=e.handleClasses,s=e.handleWrapperStyle,a=e.handleWrapperClass,h=e.handleComponent;if(!i)return null;var l=Object.keys(i).map(function(e){return!1!==i[e]?n.createElement(g,{key:e,direction:e,onResizeStart:t.onResizeStart,replaceStyles:o&&o[e],className:r&&r[e]},h&&h[e]?h[e]:null):null});return n.createElement("div",{className:a,style:s},l)},e.prototype.render=function(){var t=this,e=Object.keys(this.props).reduce(function(e,i){return -1!==R.indexOf(i)||(e[i]=t.props[i]),e},{}),i=b(b(b({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return n.createElement(o,b({ref:this.ref,style:i,className:this.props.className},e),this.state.isResizing&&n.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(n.PureComponent),W=function(t,e){return(W=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},O=function(){return(O=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},N={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},C=function(t){function e(e){var i=t.call(this,e)||this;return i.resizingPosition={x:0,y:0},i.offsetFromParent={left:0,top:0},i.resizableElement={current:null},i.originalPosition={x:0,y:0},i.refDraggable=function(t){t&&(i.draggable=t)},i.refResizable=function(t){t&&(i.resizable=t,i.resizableElement.current=t.resizable)},i.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:e.maxWidth,maxHeight:e.maxHeight},i.onResizeStart=i.onResizeStart.bind(i),i.onResize=i.onResize.bind(i),i.onResizeStop=i.onResizeStop.bind(i),i.onDragStart=i.onDragStart.bind(i),i.onDrag=i.onDrag.bind(i),i.onDragStop=i.onDragStop.bind(i),i.getMaxSizesFromProps=i.getMaxSizesFromProps.bind(i),i}return!function(t,e){function i(){this.constructor=t}W(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.prototype.componentDidMount=function(){this.updateOffsetFromParent();var t=this.offsetFromParent,e=t.left,i=t.top,o=this.getDraggablePosition(),r=o.x,n=o.y;this.draggable.setState({x:r-e,y:n-i}),this.forceUpdate()},e.prototype.getDraggablePosition=function(){var t=this.draggable.state;return{x:t.x,y:t.y}},e.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},e.prototype.getParentSize=function(){return this.resizable.getParentSize()},e.prototype.getMaxSizesFromProps=function(){return{maxWidth:void 0===this.props.maxWidth?Number.MAX_SAFE_INTEGER:this.props.maxWidth,maxHeight:void 0===this.props.maxHeight?Number.MAX_SAFE_INTEGER:this.props.maxHeight}},e.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},e.prototype.getOffsetHeight=function(t){var e=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/e;case"body":return document.body.offsetHeight/e;default:return t.offsetHeight}},e.prototype.getOffsetWidth=function(t){var e=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/e;case"body":return document.body.offsetWidth/e;default:return t.offsetWidth}},e.prototype.onDragStart=function(t,e){this.props.onDragStart&&this.props.onDragStart(t,e);var i,o=this.getDraggablePosition();if(this.originalPosition=o,this.props.bounds){var r=this.getParent(),n=this.props.scale;if("parent"===this.props.bounds)i=r;else if("body"===this.props.bounds){var s=r.getBoundingClientRect(),a=s.left,h=s.top,l=document.body.getBoundingClientRect(),p=-(a-r.offsetLeft*n-l.left)/n,u=-(h-r.offsetTop*n-l.top)/n,d=(document.body.offsetWidth-this.resizable.size.width*n)/n+p,c=(document.body.offsetHeight-this.resizable.size.height*n)/n+u;return this.setState({bounds:{top:u,right:d,bottom:c,left:p}})}else if("window"===this.props.bounds){if(!this.resizable)return;var f=r.getBoundingClientRect(),g=f.left,m=f.top,b=-(g-r.offsetLeft*n)/n,y=-(m-r.offsetTop*n)/n,d=(window.innerWidth-this.resizable.size.width*n)/n+b,c=(window.innerHeight-this.resizable.size.height*n)/n+y;return this.setState({bounds:{top:y,right:d,bottom:c,left:b}})}else"string"==typeof this.props.bounds?i=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(i=this.props.bounds);if(i instanceof HTMLElement&&r instanceof HTMLElement){var v=i.getBoundingClientRect(),w=v.left,S=v.top,z=r.getBoundingClientRect(),x=z.left,D=z.top,P=(w-x)/n,R=S-D;if(this.resizable){this.updateOffsetFromParent();var M=this.offsetFromParent;this.setState({bounds:{top:R-M.top,right:P+(i.offsetWidth-this.resizable.size.width)-M.left/n,bottom:R+(i.offsetHeight-this.resizable.size.height)-M.top,left:P-M.left/n}})}}}},e.prototype.onDrag=function(t,e){if(this.props.onDrag){var i=this.offsetFromParent,o=i.left,r=i.top;if(!this.props.dragAxis||"both"===this.props.dragAxis)return this.props.onDrag(t,O(O({},e),{x:e.x+o,y:e.y+r}));if("x"===this.props.dragAxis)return this.props.onDrag(t,O(O({},e),{x:e.x+o,y:this.originalPosition.y+r,deltaY:0}));if("y"===this.props.dragAxis)return this.props.onDrag(t,O(O({},e),{x:this.originalPosition.x+o,y:e.y+r,deltaX:0}))}},e.prototype.onDragStop=function(t,e){if(this.props.onDragStop){var i=this.offsetFromParent,o=i.left,r=i.top;if(!this.props.dragAxis||"both"===this.props.dragAxis)return this.props.onDragStop(t,O(O({},e),{x:e.x+o,y:e.y+r}));if("x"===this.props.dragAxis)return this.props.onDragStop(t,O(O({},e),{x:e.x+o,y:this.originalPosition.y+r,deltaY:0}));if("y"===this.props.dragAxis)return this.props.onDragStop(t,O(O({},e),{x:this.originalPosition.x+o,y:e.y+r,deltaX:0}))}},e.prototype.onResizeStart=function(t,e,i){t.stopPropagation(),this.setState({resizing:!0});var o=this.props.scale,r=this.offsetFromParent,n=this.getDraggablePosition();if(this.resizingPosition={x:n.x+r.left,y:n.y+r.top},this.originalPosition=n,this.props.bounds){var s=this.getParent(),a=void 0;"parent"===this.props.bounds?a=s:"body"===this.props.bounds?a=document.body:"window"===this.props.bounds?a=window:"string"==typeof this.props.bounds?a=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(a=this.props.bounds);var h=this.getSelfElement();if(h instanceof Element&&(a instanceof HTMLElement||a===window)&&s instanceof HTMLElement){var l=this.getMaxSizesFromProps(),p=l.maxWidth,u=l.maxHeight,d=this.getParentSize();if(p&&"string"==typeof p){if(p.endsWith("%")){var c=Number(p.replace("%",""))/100;p=d.width*c}else p.endsWith("px")&&(p=Number(p.replace("px","")))}if(u&&"string"==typeof u){if(u.endsWith("%")){var c=Number(u.replace("%",""))/100;u=d.height*c}else u.endsWith("px")&&(u=Number(u.replace("px","")))}var f=h.getBoundingClientRect(),g=f.left,m=f.top,b="window"===this.props.bounds?{left:0,top:0}:a.getBoundingClientRect(),y=b.left,v=b.top,w=this.getOffsetWidth(a),S=this.getOffsetHeight(a),z=e.toLowerCase().endsWith("left"),x=e.toLowerCase().endsWith("right"),D=e.startsWith("top"),P=e.startsWith("bottom");if((z||D)&&this.resizable){var R=(g-y)/o+this.resizable.size.width;this.setState({maxWidth:R>Number(p)?p:R})}if(x||this.props.lockAspectRatio&&!z&&!D){var R=w+(y-g)/o;this.setState({maxWidth:R>Number(p)?p:R})}if((D||z)&&this.resizable){var R=(m-v)/o+this.resizable.size.height;this.setState({maxHeight:R>Number(u)?u:R})}if(P||this.props.lockAspectRatio&&!D&&!z){var R=S+(v-m)/o;this.setState({maxHeight:R>Number(u)?u:R})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(t,e,i)},e.prototype.onResize=function(t,e,i,o){var r={x:this.originalPosition.x,y:this.originalPosition.y},n=-o.width,s=-o.height;["top","left","topLeft","bottomLeft","topRight"].includes(e)&&("bottomLeft"===e?r.x+=n:("topRight"===e||(r.x+=n),r.y+=s));var a=this.draggable.state;(r.x!==a.x||r.y!==a.y)&&this.draggable.setState(r),this.updateOffsetFromParent();var h=this.offsetFromParent,l=this.getDraggablePosition().x+h.left,p=this.getDraggablePosition().y+h.top;this.resizingPosition={x:l,y:p},this.props.onResize&&this.props.onResize(t,e,i,o,{x:l,y:p})},e.prototype.onResizeStop=function(t,e,i,o){this.setState({resizing:!1});var r=this.getMaxSizesFromProps(),n=r.maxWidth,s=r.maxHeight;this.setState({maxWidth:n,maxHeight:s}),this.props.onResizeStop&&this.props.onResizeStop(t,e,i,o,this.resizingPosition)},e.prototype.updateSize=function(t){this.resizable&&this.resizable.updateSize({width:t.width,height:t.height})},e.prototype.updatePosition=function(t){this.draggable.setState(t)},e.prototype.updateOffsetFromParent=function(){var t=this.props.scale,e=this.getParent(),i=this.getSelfElement();if(!e||null===i)return{top:0,left:0};var o=e.getBoundingClientRect(),r=o.left,n=o.top,s=i.getBoundingClientRect(),a=this.getDraggablePosition(),h=e.scrollLeft,l=e.scrollTop;this.offsetFromParent={left:s.left-r+h-a.x*t,top:s.top-n+l-a.y*t}},e.prototype.render=function(){var t,e=this.props,i=e.disableDragging,o=e.style,r=e.dragHandleClassName,s=e.position,h=e.onMouseDown,l=e.onMouseUp,p=e.dragAxis,u=e.dragGrid,d=e.bounds,c=e.enableUserSelectHack,f=e.cancel,g=e.children,m=(e.onResizeStart,e.onResize,e.onResizeStop,e.onDragStart,e.onDrag,e.onDragStop,e.resizeHandleStyles),b=e.resizeHandleClasses,y=e.resizeHandleComponent,v=e.enableResizing,w=e.resizeGrid,S=e.resizeHandleWrapperClass,z=e.resizeHandleWrapperStyle,x=e.scale,D=e.allowAnyClick,P=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>e.indexOf(o)&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)0>e.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(i[o[r]]=t[o[r]]);return i}(e,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick"]),R=this.props.default?O({},this.props.default):void 0;delete P.default;var M=O(O(O({},N),i||r?{cursor:"auto"}:{cursor:"move"}),o),W=this.offsetFromParent,C=W.left,H=W.top;s&&(t={x:s.x-C,y:s.y-H});var T=this.state.resizing?void 0:t,k=this.state.resizing?"both":p;return(0,n.createElement)(a(),{ref:this.refDraggable,handle:r?".".concat(r):void 0,defaultPosition:R,onMouseDown:h,onMouseUp:l,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:k,disabled:i,grid:u,bounds:d?this.state.bounds:void 0,position:T,enableUserSelectHack:c,cancel:f,scale:x,allowAnyClick:D,nodeRef:this.resizableElement},(0,n.createElement)(E,O({},P,{ref:this.refResizable,defaultSize:R,size:this.props.size,enable:"boolean"==typeof v?{bottom:v,bottomLeft:v,bottomRight:v,left:v,right:v,top:v,topLeft:v,topRight:v}:v,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:M,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:w,handleWrapperClass:S,handleWrapperStyle:z,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:m,handleClasses:b,handleComponent:y,scale:this.props.scale}),g))},e.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},e}(n.PureComponent)}}]);