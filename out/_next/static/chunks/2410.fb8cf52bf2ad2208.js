"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2410],
    {
        50207: function (e, t, i) {
            i.d(t, {
                bm: function () {
                    return o;
                },
                cb: function () {
                    return c;
                },
                d2: function () {
                    return l;
                },
                fv: function () {
                    return a;
                },
                kw: function () {
                    return u;
                },
                sI: function () {
                    return d;
                },
            });
            var s = i(85893),
                r = i(67294),
                n = i(10508);
            let o = (0, r.memo)(() =>
                (0, s.jsx)("svg", {
                    viewBox: "0 0 32 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M0 22v-6h6v6H0zm2-4v2h2v-2H2zm-2-4V8h6v6H0zm2-4v2h2v-2H2zM0 6V0h6v6H0zm2-4v2h2V2H2zm8 10v-2h18v2H10zm14 6v2H10v-2h14zM10 2h22v2H10V2zM0 30v-6h6v6H0zm2-4v2h2v-2H2zm8 2v-2h18v2H10z",
                    }),
                })
            ),
                a = (0, r.memo)(() => (0, s.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "M32 10H0V8h32v2zm0 16H0v-2h32v2zm0-8.016H0V16h32v1.984z" }) })),
                l = (0, r.memo)(() => (0, s.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z" }) })),
                c = (0, r.memo)(() => {
                    let { colors: e } = (0, n.Fg)();
                    return (0, s.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d:
                                "M17 16h-2V0h2v16zm3.313-11.312q2.156.688 3.945 2t3.063 3.078 1.977 3.875.703 4.359q0 1.938-.5 3.727t-1.414 3.344-2.188 2.828-2.828 2.188-3.344 1.414-3.727.5-3.727-.5-3.344-1.414-2.828-2.188-2.188-2.828-1.414-3.344-.5-3.727q0-2.25.703-4.359t1.977-3.875 3.063-3.078 3.945-2l.625 1.891q-1.859.609-3.391 1.734t-2.625 2.625-1.695 3.305-.602 3.758q0 1.656.43 3.188t1.211 2.867 1.875 2.43 2.43 1.875 2.867 1.211 3.188.43 3.188-.43 2.867-1.211 2.43-1.875 1.875-2.43 1.211-2.867.43-3.188q0-1.953-.602-3.758t-1.695-3.305-2.625-2.625-3.391-1.734z",
                            stroke: e.text,
                            strokeWidth: "1",
                        }),
                    });
                }),
                d = (0, r.memo)(() =>
                    (0, s.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            d:
                                "M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z",
                        }),
                    })
                ),
                u = (0, r.memo)(() =>
                    (0, s.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z" }) })
                );
        },
        32410: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    default: function () {
                        return y;
                    },
                });
            var s = i(85893),
                r = i(10508),
                n = i(67294),
                o = i(54110);
            let a = r.ZP.nav(
                [
                    "display:flex;flex-direction:column;height:100%;justify-content:space-between;overflow:hidden;padding-top:4px;position:absolute;top:0;transition-duration:150ms;width:",
                    "px;z-index:1;&:hover:not(&.collapsed){backdrop-filter:",
                    ";background-color:hsla(0,0%,10%,95%);box-shadow:8px 0 5px -5px hsla(0,0%,10%,50%);transition:all 300ms ease,backdrop-filter 1ms;transition-timing-function:cubic-bezier(0.15,1,0.5,1);width:",
                    ";@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){background-color:hsla(0,0%,10%,75%);}}&.collapsed{transition:all 300ms ease,backdrop-filter 600ms;}",
                ],
                ({ theme: e }) => e.sizes.startMenu.sideBar.width,
                ({ theme: e }) => `blur(${e.sizes.taskbar.panelBlur})`,
                ({ theme: e }) => e.sizes.startMenu.sideBar.expandedWidth
            ),
                l = r.ZP.li(
                    [
                        "border:1px solid transparent;display:flex;height:",
                        "px;place-content:center;place-items:center;transition-duration:150ms;width:",
                        "px;&::before{border-left:",
                        ';content:"";height:',
                        "px;left:0;position:absolute;width:",
                        "px;}figure{color:",
                        ";display:flex;place-items:center;svg{fill:",
                        ";height:",
                        ";left:",
                        ";margin-left:1px;pointer-events:none;position:absolute;width:",
                        ";}figcaption{border:1px solid transparent;left:",
                        "px;position:absolute;white-space:nowrap;strong{font-weight:600;}}}",
                        ":hover:not(",
                        ".collapsed) &{transition:width 300ms;transition-timing-function:cubic-bezier(0.15,1,0.5,1);width:",
                        ";}&:hover{background-color:hsla(0,0%,35%,70%);border:1px solid hsla(0,0%,45%,70%);}&:active{background-color:hsla(0,0%,40%,70%);}",
                    ],
                    ({ theme: e }) => e.sizes.startMenu.sideBar.buttonHeight,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.width,
                    ({ $active: e, theme: t }) => `4px solid ${e ? t.colors.selectionHighlight : "transparent"}`,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.buttonHeight,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.width,
                    ({ $active: e, theme: t }) => (e ? t.colors.highlight : t.colors.text),
                    ({ $active: e, theme: t }) => (e ? t.colors.highlight : t.colors.text),
                    ({ theme: e }) => e.sizes.startMenu.sideBar.iconSize,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.iconSize,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.iconSize,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.width,
                    a,
                    a,
                    ({ theme: e }) => e.sizes.startMenu.sideBar.expandedWidth
                );
            var c = i(76833),
                d = i(6484),
                u = ({ action: e, active: t, heading: i, icon: r, name: o, tooltip: a }) =>
                    (0, s.jsx)(l, {
                        ref: (0, n.useCallback)((e) => {
                            (0, d.UP)() && (0, c.G)(e, !0);
                        }, []),
                        $active: t,
                        "aria-label": o,
                        onClick: e,
                        title: a,
                        children: (0, s.jsxs)("figure", { children: [r, (0, s.jsx)("figcaption", { children: i ? (0, s.jsx)("strong", { children: o }) : o })] }),
                    }),
                p = i(50207),
                h = i(20063),
                v = i(58437),
                x = i(76488),
                b = i(97836);
            let m = ({ sidebarButtons: e }) => (0, s.jsx)("ol", { children: e.map((e) => (0, s.jsx)(u, { ...e }, e.name)) });
            var w = (0, n.memo)(({ height: e }) => {
                let { rootFs: t } = (0, h.o)(),
                    { open: o } = (0, v.z)(),
                    { setHaltSession: l } = (0, x.k)(),
                    [c, u] = (0, n.useState)(!0),
                    w = (0, n.useRef)(),
                    g = (0, n.useRef)(null),
                    f = () => {
                        w.current && clearTimeout(w.current);
                    },
                    z = [
                        { heading: !0, icon: (0, s.jsx)(p.fv, {}), name: "START", ...(c && { tooltip: "Expand" }) },
                        { active: !0, icon: (0, s.jsx)(p.bm, {}), name: "All apps", ...(c && { tooltip: "All apps" }) },
                    ],
                    { sizes: k } = (0, r.Fg)(),
                    M = (0, d.sI)(),
                    j = (0, n.useMemo)(() => Math.floor((M - b.bK) / k.startMenu.sideBar.width), [k.startMenu.sideBar.width, M]),
                    H = [
                        j > 3 ? { action: () => o("FileExplorer", { url: `${b.Sd}/Documents` }, "./System/Icons/documents.webp"), icon: (0, s.jsx)(p.d2, {}), name: "Documents", ...(c && { tooltip: "Documents" }) } : void 0,
                        j > 4 ? { action: () => o("FileExplorer", { url: `${b.Sd}/Pictures` }, "./System/Icons/pictures.webp"), icon: (0, s.jsx)(p.sI, {}), name: "Pictures", ...(c && { tooltip: "Pictures" }) } : void 0,
                        j > 5 ? { action: () => o("FileExplorer", { url: `${b.Sd}/Videos` }, "./System/Icons/videos.webp"), icon: (0, s.jsx)(p.kw, {}), name: "Videos", ...(c && { tooltip: "Videos" }) } : void 0,
                        {
                            action: () => {
                                l(!0),
                                    Promise.resolve()
                                        .then(i.bind(i, 18575))
                                        .then(({ resetStorage: e }) => e(t).finally(() => window.location.reload()));
                            },
                            icon: (0, s.jsx)(p.cb, {}),
                            name: "Power",
                            tooltip: "Clears session data and reloads the page.",
                        },
                    ].filter(Boolean);
                return (
                    (0, n.useEffect)(() => f, []),
                    (0, s.jsxs)(a, {
                        ref: g,
                        className: c ? "collapsed" : void 0,
                        onClick: ({ target: e }) => {
                            f(), e instanceof HTMLElement && ((e === g.current && c) || (g.current?.contains(e) && "START" === e.textContent)) && u((e) => !e);
                        },
                        onContextMenu: d.nK,
                        onMouseEnter: () => {
                            w.current = window.setTimeout(() => u(!1), 700);
                        },
                        onMouseLeave: () => {
                            f(), u(!0);
                        },
                        style: { height: e },
                        children: [(0, s.jsx)(m, { sidebarButtons: z }), (0, s.jsx)(m, { sidebarButtons: H })],
                    })
                );
            }),
                g = i(8897),
                f = i(73071),
                z = i(8833),
                k = i(10403),
                M = i(18680);
            let j = (0, r.ZP)(g.m.nav)(
                [
                    "",
                    " ",
                    "{",
                    ";margin-top:0;overflow-x:hidden;padding-bottom:",
                    "px;padding-left:",
                    "px;padding-top:7px;",
                    "{width:",
                    ";@supports not selector(::-webkit-scrollbar){width:",
                    ";}}",
                    "{margin:0;overflow:hidden;padding:0;scrollbar-gutter:auto;figure{picture{margin-left:11px;}&:active{picture{margin-left:15px;}}picture,svg{transition:none;}}}@supports not selector(::-webkit-scrollbar){scrollbar-width:",
                    ";}&::-webkit-scrollbar{width:",
                    "px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",
                    ";}&::-webkit-scrollbar-button:single-button{background-color:",
                    ";border:",
                    ";}&::-webkit-scrollbar-thumb:vertical{background-color:",
                    ";}}",
                ],
                ({ theme: e }) => (0, k.Z)(e.sizes.startMenu.maxHeight, e.sizes.startMenu.size),
                z.Z,
                (0, M.Z)(b.H$, -2, -1),
                ({ theme: e }) => e.sizes.startMenu.sideBar.buttonHeight / 2,
                ({ theme: e }) => e.sizes.startMenu.sideBar.width,
                f.Z,
                ({ theme: e }) => `${e.sizes.startMenu.size - e.sizes.startMenu.sideBar.width - b.H$}px`,
                ({ theme: e }) => `${e.sizes.startMenu.size - e.sizes.startMenu.sideBar.width - b.aT}px`,
                z.Z,
                ({ $showScrolling: e }) => (e ? "thin" : "none"),
                ({ $showScrolling: e }) => (e ? b.H$ : 0),
                ({ $showScrolling: e }) => (e ? void 0 : "transparent"),
                ({ $showScrolling: e }) => (e ? void 0 : "transparent"),
                ({ $showScrolling: e }) => (e ? void 0 : "1px solid transparent"),
                ({ $showScrolling: e }) => (e ? void 0 : "rgb(167, 167, 167)")
            );
            var H = i(93949);
            let B = r.ZP.span(
                ["backdrop-filter:", ";height:", ";inset:0;position:absolute;width:100%;z-index:-1;"],
                ({ theme: e }) => `blur(${e.sizes.taskbar.panelBlur})`,
                ({ $height: e }) => e
            );
            var V = i(80155),
                S = i(85923),
                y = ({ toggleStartMenu: e }) => {
                    let t = (0, n.useRef)(null),
                        {
                            sizes: { startMenu: i },
                        } = (0, r.Fg)(),
                        [a, l] = (0, n.useState)(!1),
                        c = (0, n.useMemo)(() => CSS.supports("selector(::-webkit-scrollbar)"), []),
                        d = (0, n.useMemo)(() => i.size - (c ? b.H$ : b.aT), [c, i.size]),
                        u = (0, n.useCallback)(({ clientX: e = 0 }) => l(e > d), [d]),
                        p = (0, n.useCallback)((e) => {
                            e?.focus(b.eS), (t.current = e);
                        }, []),
                        h = (0, S.Z)(i.maxHeight),
                        { height: v } = h.variants?.active ?? {};
                    return (0, s.jsxs)(j, {
                        ref: p,
                        $showScrolling: a,
                        id: "startMenu",
                        onBlurCapture: (i) => (0, V.Oh)(i, t.current, e, void 0, V.rF),
                        onKeyDown: ({ key: t }) => {
                            if ("Escape" === t) e(!1);
                            else if (1 === t.length) {
                                e(!1);
                                let i = document.querySelector(`main > nav > div[title='${V.Hr}']`);
                                if (i) {
                                    i.click();
                                    let e = 0,
                                        s = window.setInterval(() => {
                                            let i = document.querySelector("main > nav .search > input");
                                            i && (0, H.VD)(i, t), (i || ++e > 10) && window.clearInterval(s);
                                        }, 50);
                                }
                            }
                        },
                        onMouseLeave: () => l(!1),
                        onMouseMove: u,
                        ...h,
                        ...b.LL,
                        children: [
                            (0, s.jsx)(B, { $height: v }),
                            (0, s.jsx)(w, { height: v }),
                            (0, s.jsx)(o.Z, { url: b.p3, view: "list", hideLoading: !0, hideShortcutIcons: !0, isStartMenu: !0, loadIconsImmediately: !0, readOnly: !0, skipFsWatcher: !0, skipSorting: !0 }),
                        ],
                    });
                };
        },
        93949: function (e, t, i) {
            i.d(t, {
                A4: function () {
                    return l;
                },
                VD: function () {
                    return c;
                },
                r5: function () {
                    return d;
                },
            });
            var s = i(1864),
                r = i(43950),
                n = i(6155),
                o = i(97836),
                a = i(6484);
            let l = async (e, t, i) => {
                if (!e) return;
                let { subIcons: r, icon: l, pid: c = o.yV[0], url: d } = await new Promise((i) => {
                    e.lstat(t, (s, r) => {
                        let o = !s && !!r && r.isDirectory(),
                            l = (0, a.RT)(t);
                        l && !o ? (0, n.Z7)(e, t, l, (e) => i(e)) : (0, n.g7)(e, e.getRootFS(), t, o, !1, (e) => i(e), !1);
                    });
                });
                if (i?.aborted) return;
                let u = (0, a.yk)(d);
                return { icon: (await (0, n.kv)(e, (0, s.join)(u ? o.Rm : o.Xo, `${u ? new URL(d).pathname.replace("/", "") : d}${o.Qy}`))) || l, pid: c, subIcons: r?.includes(o.EV) ? r : [], url: d || t };
            },
                c = (e, t) => {
                    let i = 0 === e.value.length,
                        s = () => {
                            Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value")?.set?.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 }));
                        };
                    s(), requestAnimationFrame(() => i && 1 === t.length && 2 === e.value.length && s());
                },
                d = (e, t, i, s, n) => (n ? "Nostr URI" : s ? "App" : i ? "YouTube Video" : e?.isDirectory() || !t ? "File folder" : r.Z[t]?.type || `${t.toUpperCase().replace(".", "")} File`);
        },
        10403: function (e, t, i) {
            var s = i(10508),
                r = i(97836);
            t.Z = (e, t, i = 0, n = !1) =>
                (0, s.iv)(
                    [
                        "background-color:hsla(0,0%,13%,95%);border:",
                        ";border-bottom-width:0;bottom:",
                        "px;box-shadow:3px 0 10px 3px hsla(0,0%,10%,50%);contain:strict;display:flex;height:100%;left:",
                        "px;max-height:",
                        "px;max-width:",
                        "px;position:absolute;width:calc(100% - ",
                        "px);z-index:10000;@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){background-color:hsla(0,0%,13%,70%);}",
                    ],
                    n ? "1px solid hsla(0, 0%, 25%, 75%)" : "none",
                    r.bK,
                    i,
                    e,
                    t,
                    i
                );
        },
        85923: function (e, t, i) {
            var s = i(97836),
                r = i(6484);
            t.Z = (e, t = !0, i = 0.5, n = 0.75) => {
                let o = Math.min(e, (0, r.sI)() - s.bK);
                return {
                    animate: "active",
                    exit: { height: `${o * n}px`, transition: { duration: s.Nb.TASKBAR_ITEM / 10, ease: "circIn" } },
                    initial: "initial",
                    transition: { duration: s.Nb.TASKBAR_ITEM, ease: "circOut" },
                    variants: { active: { height: `${o}px`, paddingTop: 0 }, initial: { height: `${o * n}px`, paddingTop: t ? `${o * i}px` : 0 } },
                };
            };
        },
    },
]);







// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2410],{50207:function(e,t,i){i.d(t,{bm:function(){return o},cb:function(){return c},d2:function(){return l},fv:function(){return a},kw:function(){return u},sI:function(){return d}});var s=i(85893),r=i(67294),n=i(10508);let o=(0,r.memo)(()=>(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M0 22v-6h6v6H0zm2-4v2h2v-2H2zm-2-4V8h6v6H0zm2-4v2h2v-2H2zM0 6V0h6v6H0zm2-4v2h2V2H2zm8 10v-2h18v2H10zm14 6v2H10v-2h14zM10 2h22v2H10V2zM0 30v-6h6v6H0zm2-4v2h2v-2H2zm8 2v-2h18v2H10z"})})),a=(0,r.memo)(()=>(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M32 10H0V8h32v2zm0 16H0v-2h32v2zm0-8.016H0V16h32v1.984z"})})),l=(0,r.memo)(()=>(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z"})})),c=(0,r.memo)(()=>{let{colors:e}=(0,n.Fg)();return(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M17 16h-2V0h2v16zm3.313-11.312q2.156.688 3.945 2t3.063 3.078 1.977 3.875.703 4.359q0 1.938-.5 3.727t-1.414 3.344-2.188 2.828-2.828 2.188-3.344 1.414-3.727.5-3.727-.5-3.344-1.414-2.828-2.188-2.188-2.828-1.414-3.344-.5-3.727q0-2.25.703-4.359t1.977-3.875 3.063-3.078 3.945-2l.625 1.891q-1.859.609-3.391 1.734t-2.625 2.625-1.695 3.305-.602 3.758q0 1.656.43 3.188t1.211 2.867 1.875 2.43 2.43 1.875 2.867 1.211 3.188.43 3.188-.43 2.867-1.211 2.43-1.875 1.875-2.43 1.211-2.867.43-3.188q0-1.953-.602-3.758t-1.695-3.305-2.625-2.625-3.391-1.734z",stroke:e.text,strokeWidth:"1"})})}),d=(0,r.memo)(()=>(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z"})})),u=(0,r.memo)(()=>(0,s.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z"})}))},32410:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var s=i(85893),r=i(10508),n=i(67294),o=i(54110);let a=r.ZP.nav(["display:flex;flex-direction:column;height:100%;justify-content:space-between;overflow:hidden;padding-top:4px;position:absolute;top:0;transition-duration:150ms;width:","px;z-index:1;&:hover:not(&.collapsed){backdrop-filter:",";background-color:hsla(0,0%,10%,95%);box-shadow:8px 0 5px -5px hsla(0,0%,10%,50%);transition:all 300ms ease,backdrop-filter 1ms;transition-timing-function:cubic-bezier(0.15,1,0.5,1);width:",";@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){background-color:hsla(0,0%,10%,75%);}}&.collapsed{transition:all 300ms ease,backdrop-filter 600ms;}"],({theme:e})=>e.sizes.startMenu.sideBar.width,({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`,({theme:e})=>e.sizes.startMenu.sideBar.expandedWidth),l=r.ZP.li(["border:1px solid transparent;display:flex;height:","px;place-content:center;place-items:center;transition-duration:150ms;width:","px;&::before{border-left:",';content:"";height:',"px;left:0;position:absolute;width:","px;}figure{color:",";display:flex;place-items:center;svg{fill:",";height:",";left:",";margin-left:1px;pointer-events:none;position:absolute;width:",";}figcaption{border:1px solid transparent;left:","px;position:absolute;white-space:nowrap;strong{font-weight:600;}}}",":hover:not(",".collapsed) &{transition:width 300ms;transition-timing-function:cubic-bezier(0.15,1,0.5,1);width:",";}&:hover{background-color:hsla(0,0%,35%,70%);border:1px solid hsla(0,0%,45%,70%);}&:active{background-color:hsla(0,0%,40%,70%);}"],({theme:e})=>e.sizes.startMenu.sideBar.buttonHeight,({theme:e})=>e.sizes.startMenu.sideBar.width,({$active:e,theme:t})=>`4px solid ${e?t.colors.selectionHighlight:"transparent"}`,({theme:e})=>e.sizes.startMenu.sideBar.buttonHeight,({theme:e})=>e.sizes.startMenu.sideBar.width,({$active:e,theme:t})=>e?t.colors.highlight:t.colors.text,({$active:e,theme:t})=>e?t.colors.highlight:t.colors.text,({theme:e})=>e.sizes.startMenu.sideBar.iconSize,({theme:e})=>e.sizes.startMenu.sideBar.iconSize,({theme:e})=>e.sizes.startMenu.sideBar.iconSize,({theme:e})=>e.sizes.startMenu.sideBar.width,a,a,({theme:e})=>e.sizes.startMenu.sideBar.expandedWidth);var c=i(76833),d=i(6484),u=({action:e,active:t,heading:i,icon:r,name:o,tooltip:a})=>(0,s.jsx)(l,{ref:(0,n.useCallback)(e=>{(0,d.UP)()&&(0,c.G)(e,!0)},[]),$active:t,"aria-label":o,onClick:e,title:a,children:(0,s.jsxs)("figure",{children:[r,(0,s.jsx)("figcaption",{children:i?(0,s.jsx)("strong",{children:o}):o})]})}),p=i(50207),h=i(20063),v=i(58437),x=i(76488),b=i(97836);let m=({sidebarButtons:e})=>(0,s.jsx)("ol",{children:e.map(e=>(0,s.jsx)(u,{...e},e.name))});var w=(0,n.memo)(({height:e})=>{let{rootFs:t}=(0,h.o)(),{open:o}=(0,v.z)(),{setHaltSession:l}=(0,x.k)(),[c,u]=(0,n.useState)(!0),w=(0,n.useRef)(),g=(0,n.useRef)(null),f=()=>{w.current&&clearTimeout(w.current)},z=[{heading:!0,icon:(0,s.jsx)(p.fv,{}),name:"START",...c&&{tooltip:"Expand"}},{active:!0,icon:(0,s.jsx)(p.bm,{}),name:"All apps",...c&&{tooltip:"All apps"}}],{sizes:k}=(0,r.Fg)(),M=(0,d.sI)(),j=(0,n.useMemo)(()=>Math.floor((M-b.bK)/k.startMenu.sideBar.width),[k.startMenu.sideBar.width,M]),H=[j>3?{action:()=>o("FileExplorer",{url:`${b.Sd}/Documents`},"/System/Icons/documents.webp"),icon:(0,s.jsx)(p.d2,{}),name:"Documents",...c&&{tooltip:"Documents"}}:void 0,j>4?{action:()=>o("FileExplorer",{url:`${b.Sd}/Pictures`},"/System/Icons/pictures.webp"),icon:(0,s.jsx)(p.sI,{}),name:"Pictures",...c&&{tooltip:"Pictures"}}:void 0,j>5?{action:()=>o("FileExplorer",{url:`${b.Sd}/Videos`},"/System/Icons/videos.webp"),icon:(0,s.jsx)(p.kw,{}),name:"Videos",...c&&{tooltip:"Videos"}}:void 0,{action:()=>{l(!0),Promise.resolve().then(i.bind(i,18575)).then(({resetStorage:e})=>e(t).finally(()=>window.location.reload()))},icon:(0,s.jsx)(p.cb,{}),name:"Power",tooltip:"Clears session data and reloads the page."}].filter(Boolean);return(0,n.useEffect)(()=>f,[]),(0,s.jsxs)(a,{ref:g,className:c?"collapsed":void 0,onClick:({target:e})=>{f(),e instanceof HTMLElement&&(e===g.current&&c||g.current?.contains(e)&&"START"===e.textContent)&&u(e=>!e)},onContextMenu:d.nK,onMouseEnter:()=>{w.current=window.setTimeout(()=>u(!1),700)},onMouseLeave:()=>{f(),u(!0)},style:{height:e},children:[(0,s.jsx)(m,{sidebarButtons:z}),(0,s.jsx)(m,{sidebarButtons:H})]})}),g=i(8897),f=i(73071),z=i(8833),k=i(10403),M=i(18680);let j=(0,r.ZP)(g.m.nav)([""," ","{",";margin-top:0;overflow-x:hidden;padding-bottom:","px;padding-left:","px;padding-top:7px;","{width:",";@supports not selector(::-webkit-scrollbar){width:",";}}","{margin:0;overflow:hidden;padding:0;scrollbar-gutter:auto;figure{picture{margin-left:11px;}&:active{picture{margin-left:15px;}}picture,svg{transition:none;}}}@supports not selector(::-webkit-scrollbar){scrollbar-width:",";}&::-webkit-scrollbar{width:","px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",";}&::-webkit-scrollbar-button:single-button{background-color:",";border:",";}&::-webkit-scrollbar-thumb:vertical{background-color:",";}}"],({theme:e})=>(0,k.Z)(e.sizes.startMenu.maxHeight,e.sizes.startMenu.size),z.Z,(0,M.Z)(b.H$,-2,-1),({theme:e})=>e.sizes.startMenu.sideBar.buttonHeight/2,({theme:e})=>e.sizes.startMenu.sideBar.width,f.Z,({theme:e})=>`${e.sizes.startMenu.size-e.sizes.startMenu.sideBar.width-b.H$}px`,({theme:e})=>`${e.sizes.startMenu.size-e.sizes.startMenu.sideBar.width-b.aT}px`,z.Z,({$showScrolling:e})=>e?"thin":"none",({$showScrolling:e})=>e?b.H$:0,({$showScrolling:e})=>e?void 0:"transparent",({$showScrolling:e})=>e?void 0:"transparent",({$showScrolling:e})=>e?void 0:"1px solid transparent",({$showScrolling:e})=>e?void 0:"rgb(167, 167, 167)");var H=i(93949);let B=r.ZP.span(["backdrop-filter:",";height:",";inset:0;position:absolute;width:100%;z-index:-1;"],({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`,({$height:e})=>e);var V=i(80155),S=i(85923),y=({toggleStartMenu:e})=>{let t=(0,n.useRef)(null),{sizes:{startMenu:i}}=(0,r.Fg)(),[a,l]=(0,n.useState)(!1),c=(0,n.useMemo)(()=>CSS.supports("selector(::-webkit-scrollbar)"),[]),d=(0,n.useMemo)(()=>i.size-(c?b.H$:b.aT),[c,i.size]),u=(0,n.useCallback)(({clientX:e=0})=>l(e>d),[d]),p=(0,n.useCallback)(e=>{e?.focus(b.eS),t.current=e},[]),h=(0,S.Z)(i.maxHeight),{height:v}=h.variants?.active??{};return(0,s.jsxs)(j,{ref:p,$showScrolling:a,id:"startMenu",onBlurCapture:i=>(0,V.Oh)(i,t.current,e,void 0,V.rF),onKeyDown:({key:t})=>{if("Escape"===t)e(!1);else if(1===t.length){e(!1);let i=document.querySelector(`main > nav > div[title='${V.Hr}']`);if(i){i.click();let e=0,s=window.setInterval(()=>{let i=document.querySelector("main > nav .search > input");i&&(0,H.VD)(i,t),(i||++e>10)&&window.clearInterval(s)},50)}}},onMouseLeave:()=>l(!1),onMouseMove:u,...h,...b.LL,children:[(0,s.jsx)(B,{$height:v}),(0,s.jsx)(w,{height:v}),(0,s.jsx)(o.Z,{url:b.p3,view:"list",hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},93949:function(e,t,i){i.d(t,{A4:function(){return l},VD:function(){return c},r5:function(){return d}});var s=i(1864),r=i(43950),n=i(6155),o=i(97836),a=i(6484);let l=async(e,t,i)=>{if(!e)return;let{subIcons:r,icon:l,pid:c=o.yV[0],url:d}=await new Promise(i=>{e.lstat(t,(s,r)=>{let o=!s&&!!r&&r.isDirectory(),l=(0,a.RT)(t);l&&!o?(0,n.Z7)(e,t,l,e=>i(e)):(0,n.g7)(e,e.getRootFS(),t,o,!1,e=>i(e),!1)})});if(i?.aborted)return;let u=(0,a.yk)(d);return{icon:await (0,n.kv)(e,(0,s.join)(u?o.Rm:o.Xo,`${u?new URL(d).pathname.replace("/",""):d}${o.Qy}`))||l,pid:c,subIcons:r?.includes(o.EV)?r:[],url:d||t}},c=(e,t)=>{let i=0===e.value.length,s=()=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))};s(),requestAnimationFrame(()=>i&&1===t.length&&2===e.value.length&&s())},d=(e,t,i,s,n)=>n?"Nostr URI":s?"App":i?"YouTube Video":e?.isDirectory()||!t?"File folder":r.Z[t]?.type||`${t.toUpperCase().replace(".","")} File`},10403:function(e,t,i){var s=i(10508),r=i(97836);t.Z=(e,t,i=0,n=!1)=>(0,s.iv)(["background-color:hsla(0,0%,13%,95%);border:",";border-bottom-width:0;bottom:","px;box-shadow:3px 0 10px 3px hsla(0,0%,10%,50%);contain:strict;display:flex;height:100%;left:","px;max-height:","px;max-width:","px;position:absolute;width:calc(100% - ","px);z-index:10000;@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){background-color:hsla(0,0%,13%,70%);}"],n?"1px solid hsla(0, 0%, 25%, 75%)":"none",r.bK,i,e,t,i)},85923:function(e,t,i){var s=i(97836),r=i(6484);t.Z=(e,t=!0,i=.5,n=.75)=>{let o=Math.min(e,(0,r.sI)()-s.bK);return{animate:"active",exit:{height:`${o*n}px`,transition:{duration:s.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:s.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${o}px`,paddingTop:0},initial:{height:`${o*n}px`,paddingTop:t?`${o*i}px`:0}}}}}}]);