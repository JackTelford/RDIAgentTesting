"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3425, 3333, 5653],
    {
        45653: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    Back: function () {
                        return o;
                    },
                    Down: function () {
                        return l;
                    },
                    Forward: function () {
                        return a;
                    },
                    Refresh: function () {
                        return s;
                    },
                    Search: function () {
                        return A;
                    },
                    Up: function () {
                        return c;
                    },
                });
            var n = r(85893),
                i = r(67294);
            let o = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "-8 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M32 14v4H7.656l7.172 7.172L12 28 0 16 12 4l2.828 2.828L7.656 14H32z" }) })),
                a = (0, i.memo)(() => (0, n.jsx)("svg", { viewBox: "8 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "m20 4 12 12-12 12-2.828-2.828L24.344 18H0v-4h24.344l-7.172-7.172L20 4z" }) })),
                s = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "-10 -13 52 52",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M20.266.594q2.594.703 4.75 2.195t3.711 3.531 2.414 4.516T32 16q0 2.203-.57 4.25t-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82T.002 16q0-2.188.578-4.25t1.648-3.883T4.83 4.554t3.453-2.555H4.002v-2h8v8h-2V3.358q-1.828.875-3.305 2.195T4.174 8.522t-1.609 3.555-.563 3.922q0 1.922.5 3.711t1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414 3.719.5q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336.5-3.719q0-2.344-.758-4.516T27.127 7.53t-3.242-3.086-4.148-1.93l.531-1.922z",
                        }),
                    })
                ),
                l = (0, i.memo)(({ flip: e }) => {
                    let t = (0, i.useMemo)(() => (e ? { transform: "scaleY(-1)", transition: "all 0.2s" } : void 0), [e]);
                    return (0, n.jsx)("svg", {
                        style: t,
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", { d: "m28.109 5.453 3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z" }),
                    });
                }),
                c = (0, i.memo)(() => {
                    let e = (0, i.useMemo)(() => ({ marginTop: "-1px" }), []);
                    return (0, n.jsx)("svg", { style: e, viewBox: "0 -7 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "m16 0 12 12-2.828 2.828L18 7.656V32h-4V7.656l-7.172 7.172L4 12 16 0z" }) });
                }),
                A = (0, i.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z",
                        }),
                    })
                );
        },
        43425: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return P;
                    },
                });
            var n = r(85893),
                i = r(1864),
                o = r(67294),
                a = r(45653),
                s = r(10508);
            let l = s.ZP.div(
                [
                    "background-position:2px 5px;background-repeat:no-repeat;background-size:16px;border:1px solid rgb(83,83,83);display:flex;height:",
                    "px;margin:7px 12px 6px 5px;padding:0 22px 2px 25px;position:relative;width:100%;input{background-color:rgb(25,25,25);border-right:1px solid rgb(21,21,21);color:#fff;font-family:",
                    ";font-size:12px;font-weight:400;height:",
                    "px;padding-bottom:1px;text-overflow:ellipsis;white-space:nowrap;width:calc(100% - 2px);}img{left:2px;position:absolute;top:3px;}.refresh{background-color:rgb(25,25,25);display:flex;height:",
                    "px;margin:0;place-content:center;place-items:center;position:absolute;right:0;stroke:rgb(128,128,128);stroke-width:3;top:0;width:24px;&:hover{background-color:rgb(27,41,49);border:1px solid rgb(34,114,153);}&:active{background-color:rgb(28,57,71);border:1px solid rgb(38,160,218);}svg{position:relative;top:-1px;}}",
                ],
                ({ theme: e }) => e.sizes.fileExplorer.navInputHeight,
                ({ theme: e }) => e.formats.systemFont,
                ({ theme: e }) => e.sizes.fileExplorer.navInputHeight - 2,
                ({ theme: e }) => e.sizes.fileExplorer.navInputHeight - 2
            );
            var c = r(7502),
                A = (e) => {
                    let { contextMenu: t } = (0, c.H)();
                    return (0, o.useMemo)(() => t?.(() => [{ action: () => navigator.clipboard?.writeText(e), label: "Copy address" }]), [e, t]);
                },
                u = r(20063),
                p = r(58437),
                d = r(67278),
                g = r(46581),
                h = r(97836),
                f = r(6484);
            let x = (0, o.forwardRef)(({ id: e }, t) => {
                let {
                    url: r,
                    processes: {
                        [e]: { icon: s, url: c = "" },
                    },
                } = (0, p.z)(),
                    x = (0, i.basename)(c) || h.SP,
                    [m, w] = (0, o.useState)(x),
                    { exists: b, updateFolder: v } = (0, u.o)();
                return (
                    (0, o.useEffect)(() => {
                        t.current && (m === c ? t.current.select() : m === x ? window.getSelection()?.removeAllRanges() : document.activeElement !== t.current && w(x));
                    }, [m, t, x, c]),
                    (0, n.jsxs)(l, {
                        children: [
                            (0, n.jsx)(g.Z, { alt: x, imgSize: 16, src: s }),
                            (0, n.jsx)("input", {
                                ref: t,
                                "aria-label": "Address",
                                enterKeyHint: "go",
                                onBlurCapture: () => w(x),
                                onChange: ({ target: e }) => w(e.value),
                                onFocusCapture: () => w(c),
                                onKeyDown: async ({ key: n }) => {
                                    if ("Enter" === n && t.current) {
                                        let { value: n } = t.current;
                                        n && (await b(n)) && r(e, n), t.current.blur();
                                    }
                                },
                                spellCheck: !1,
                                type: "text",
                                value: m,
                                ...A(c),
                            }),
                            (0, n.jsx)(d.Z, { className: "refresh", onClick: () => v(c), ...(0, f.PS)(`Refresh "${x}" (F5)`), children: (0, n.jsx)(a.Refresh, {}) }),
                        ],
                    })
                );
            }),
                m = s.ZP.div(
                    [
                        "border:1px solid rgb(83,83,83);display:flex;height:",
                        "px;margin:7px 12px 6px 0;max-width:148px;overflow:hidden;padding:0;position:relative;width:100%;svg{display:none;}input{appearance:none;background-color:rgb(25,25,25);color:#fff;font-family:",
                        ";font-size:12px;font-weight:400;height:",
                        "px;padding-bottom:1px;padding-left:8px;text-overflow:ellipsis;white-space:nowrap;width:100%;&::-webkit-search-cancel-button{filter:invert(1);padding-right:4px;}}input:placeholder-shown ~ svg{display:block;fill:rgb(113,113,113);height:12px;pointer-events:none;position:absolute;right:6px;stroke:rgb(113,113,113);stroke-width:1;top:5px;width:12px;}",
                    ],
                    ({ theme: e }) => e.sizes.fileExplorer.navInputHeight,
                    ({ theme: e }) => e.formats.systemFont,
                    ({ theme: e }) => e.sizes.fileExplorer.navInputHeight - 2
                );
            var w = r(93949),
                b = r(76488),
                v = r(82883),
                k = (0, o.memo)(({ id: e }) => {
                    let [t, r] = (0, o.useState)(""),
                        s = (0, o.useRef)(!1),
                        {
                            open: l,
                            processes: {
                                [e]: { url: A = "" },
                            },
                        } = (0, p.z)(),
                        d = (0, o.useRef)(null),
                        g = (0, v.Rx)(t),
                        { contextMenu: x } = (0, c.H)(),
                        { fs: k } = (0, u.o)(),
                        { updateRecentFiles: E } = (0, b.k)();
                    return (
                        (0, o.useEffect)(() => {
                            d.current &&
                                s.current &&
                                Promise.all(
                                    [...g.filter(({ ref: e }) => e.startsWith(A)), ...g.filter(({ ref: e }) => !e.startsWith(A))].slice(0, 9).map(async ({ ref: e }) => {
                                        let { icon: t, url: n, pid: o = "" } = (await (0, w.A4)(k, e)) || {};
                                        return {
                                            action: () => {
                                                l(o, { url: n }), r(""), d.current && ((d.current.value = ""), d.current.blur()), n && o && E(n, o);
                                            },
                                            icon: t,
                                            label: (0, i.basename)(e, h.zm),
                                            tooltip: e,
                                        };
                                    })
                                ).then((e) => {
                                    if (d.current?.value || 0 === e.length) {
                                        let t = d.current?.getBoundingClientRect();
                                        x?.(() => e).onContextMenuCapture(void 0, t, { staticY: (t?.y || 0) + (t?.height || 0) });
                                    }
                                });
                        }, [x, k, l, g, E, A]),
                        (0, o.useEffect)(() => {
                            d.current && ((d.current.value = ""), r(""));
                        }, [A]),
                        (0, n.jsxs)(m, {
                            children: [
                                (0, n.jsx)("input", {
                                    ref: d,
                                    onChange: ({ target: e }) => {
                                        (s.current = !0), r(e.value);
                                    },
                                    onFocus: () => (0, f.Q4)([v.VU, v.cM]),
                                    placeholder: "Search",
                                    ...v.hZ,
                                }),
                                (0, n.jsx)(a.Search, {}),
                            ],
                        })
                    );
                });
            let E = s.ZP.nav(
                [
                    "background-color:rgb(25,25,25);display:flex;height:",
                    ';button{height:16px;margin:11px 9px;width:16px;svg{color:#fff;fill:currentColor;height:16px;transition:color 0.35s ease;width:16px;&:hover{color:rgb(50,152,254);}&:active{color:rgb(54,116,178);transition:none;}}&[title^="Up"]{margin-right:8px;position:relative;right:-8px;top:-1px;}&[title="Recent locations"]{left:55px;position:absolute;svg{stroke:currentColor;stroke-width:3px;width:7px;}}&:disabled{svg{color:rgb(140,140,140);&:hover,&:active{color:rgb(140,140,140);}}}}',
                ],
                ({ theme: e }) => e.sizes.fileExplorer.navBarHeight
            );
            var C = r(64146),
                y = r(32221),
                S = r(72490);
            let j = (0, o.forwardRef)(({ hideSearch: e, id: t }, r) => {
                let {
                    url: s,
                    processes: {
                        [t]: { url: l = "" },
                    },
                } = (0, p.z)(),
                    A = "/" === l ? "" : (0, i.basename)((0, i.dirname)(l)),
                    { contextMenu: u, menu: g, setMenu: m } = (0, c.H)(),
                    { canGoBack: w, canGoForward: b, history: v, moveHistory: j, position: R } = (0, y.Z)(l, t),
                    B = (0, o.useMemo)(() => v.map((e, t) => ({ action: () => j(t - R), checked: R === t, label: (0, i.basename)(e) || h.SP, primary: R === t })).reverse(), [v, j, R]),
                    { onContextMenuCapture: z } = (0, o.useMemo)(() => u?.(() => B), [u, B]),
                    [M, T] = (0, o.useState)(!1),
                    U = (0, o.useRef)(null),
                    [F, P] = (0, o.useState)(!1),
                    O = (0, o.useCallback)(
                        ([{ contentRect: e }]) => {
                            let t = e.width < 260;
                            F && !t ? P(!1) : !F && t && P(!0);
                        },
                        [F]
                    );
                return (
                    (0, o.useEffect)(() => {
                        T(B === g.items);
                    }, [g.items, B]),
                    (0, S.Z)(U.current, O),
                    (0, n.jsxs)(E, {
                        ref: U,
                        ...(0, C.Z)(t),
                        onDragOver: f.nK,
                        onDrop: f.nK,
                        children: [
                            (0, n.jsx)(d.Z, { disabled: !w, onClick: () => j(-1), ...(0, f.PS)(w ? `Back to ${(0, i.basename)(v[R - 1]) || h.SP}` : "Back"), children: (0, n.jsx)(a.Back, {}) }),
                            (0, n.jsx)(d.Z, { disabled: !b, onClick: () => j(1), ...(0, f.PS)(b ? `Forward to ${(0, i.basename)(v[R + 1]) || h.SP}` : "Forward"), children: (0, n.jsx)(a.Forward, {}) }),
                            (0, n.jsx)(d.Z, {
                                disabled: 1 === v.length,
                                onClick: (e) => {
                                    if ((e.preventDefault(), M)) m(Object.create(null));
                                    else {
                                        let { height: t = 0, y: r = 0, x: n = 0 } = U.current?.getBoundingClientRect() || {};
                                        z(n && r && t ? { pageX: n, pageY: r + t - 3 } : e);
                                    }
                                },
                                ...(0, f.PS)("Recent locations"),
                                children: (0, n.jsx)(a.Down, {}),
                            }),
                            (0, n.jsx)(d.Z, { disabled: "/" === l, onClick: () => s(t, (0, i.dirname)(l)), ...(0, f.PS)("/" === l ? "Up one level" : `Up to "${"" === A ? h.SP : A}"`), children: (0, n.jsx)(a.Up, {}) }),
                            (0, n.jsx)(x, { ref: r, id: t }),
                            !e && !F && (0, n.jsx)(k, { id: t }),
                        ],
                    })
                );
            });
            var R = r(33333),
                B = r(16854),
                z = r(52547);
            let M = s.ZP.div(
                ["", "{column-gap:2px;height:", ";padding-left:5px;padding-right:5px;}", "{height:", ";}", "{&:hover{&::before{border-width:0;}}&::before{border-width:0;}}"],
                z.Z,
                ({ theme: e }) => `calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`,
                R.default,
                ({ theme: e }) => `calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`,
                B.Z
            );
            var T = r(6155),
                U = r(54110),
                F = r(18575),
                P = ({ id: e }) => {
                    let {
                        icon: t,
                        title: r,
                        processes: { [e]: a },
                        url: s,
                    } = (0, p.z)(),
                        { componentWindow: l, closing: c, icon: A = "", url: d = "" } = a || {},
                        { fs: g, rootFs: x } = (0, u.o)(),
                        [m, w] = (0, o.useState)(d),
                        b = (0, o.useRef)(null),
                        v = (0, i.basename)(d),
                        k = (0, F.getMountUrl)(d, x?.mntMap || {}),
                        E = (0, o.useCallback)((e) => {
                            e.altKey && "D" === e.key.toUpperCase() && ((0, f.nK)(e), b.current?.focus(h.eS));
                        }, []);
                    return (
                        (0, o.useEffect)(() => {
                            d &&
                                (r(e, v || h.SP),
                                    (!A || d !== m || (k && A !== h.iR) || A === h.XN) &&
                                    (k && d === k
                                        ? t(e, (0, F.isMountedFolder)(x?.mntMap[d]) ? h.iR : h.Wc)
                                        : g &&
                                        (t(e, `/System/Icons/${v ? "folder" : "pc"}.webp`),
                                            (0, T.nR)(g, d).then((r) => {
                                                r && t(e, r);
                                            })),
                                        w(d)));
                        }, [m, v, g, A, e, k, x?.mntMap, t, r, d]),
                        (0, o.useEffect)(() => {
                            !l || c || d || (s(e, "/"), t(e, "/System/Icons/pc.webp"));
                        }, [c, e, l, t, s, d]),
                        (0, o.useEffect)(() => (l?.addEventListener("keydown", E), () => l?.removeEventListener("keydown", E)), [l, E]),
                        d ? (0, n.jsxs)(M, { children: [(0, n.jsx)(j, { ref: b, hideSearch: !!k, id: e }), (0, n.jsx)(U.Z, { id: e, url: d, view: "icon", showStatusBar: !0 })] }) : null
                    );
                };
        },
        33333: function (e, t, r) {
            r.r(t);
            let n = r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = n;
        },
        93949: function (e, t, r) {
            r.d(t, {
                A4: function () {
                    return l;
                },
                VD: function () {
                    return c;
                },
                r5: function () {
                    return A;
                },
            });
            var n = r(1864),
                i = r(43950),
                o = r(6155),
                a = r(97836),
                s = r(6484);
            let l = async (e, t, r) => {
                if (!e) return;
                let { subIcons: i, icon: l, pid: c = a.yV[0], url: A } = await new Promise((r) => {
                    e.lstat(t, (n, i) => {
                        let a = !n && !!i && i.isDirectory(),
                            l = (0, s.RT)(t);
                        l && !a ? (0, o.Z7)(e, t, l, (e) => r(e)) : (0, o.g7)(e, e.getRootFS(), t, a, !1, (e) => r(e), !1);
                    });
                });
                if (r?.aborted) return;
                let u = (0, s.yk)(A);
                return { icon: (await (0, o.kv)(e, (0, n.join)(u ? a.Rm : a.Xo, `${u ? new URL(A).pathname.replace("/", "") : A}${a.Qy}`))) || l, pid: c, subIcons: i?.includes(a.EV) ? i : [], url: A || t };
            },
                c = (e, t) => {
                    let r = 0 === e.value.length,
                        n = () => {
                            Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value")?.set?.call(e, t), e.dispatchEvent(new Event("input", { bubbles: !0 }));
                        };
                    n(), requestAnimationFrame(() => r && 1 === t.length && 2 === e.value.length && n());
                },
                A = (e, t, r, n, o) => (o ? "Nostr URI" : n ? "App" : r ? "YouTube Video" : e?.isDirectory() || !t ? "File folder" : i.Z[t]?.type || `${t.toUpperCase().replace(".", "")} File`);
        },
        64146: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return c;
                },
            });
            var n = r(67294),
                i = r(23561),
                o = r(7502),
                a = r(58437),
                s = r(97836),
                l = r(76488),
                c = (e) => {
                    let { contextMenu: t } = (0, o.H)(),
                        { onClose: r, onMaximize: c, onMinimize: A } = (0, i.Z)(e),
                        {
                            processes: { [e]: u },
                        } = (0, a.z)(),
                        { setForegroundId: p } = (0, l.k)(),
                        { allowResizing: d = !0, componentWindow: g, hideMaximizeButton: h, hideMinimizeButton: f, maximized: x, minimized: m } = u || {},
                        w = (0, n.useCallback)(() => {
                            p(e), g?.focus(s.eS);
                        }, [g, e, p]);
                    return (0, n.useMemo)(
                        () =>
                            t?.(() => {
                                let e = x || m,
                                    t = !h || !f;
                                return [
                                    t && {
                                        action: () => {
                                            m ? A() : c(), w();
                                        },
                                        disabled: !e,
                                        icon: e
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg=="
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",
                                        label: "Restore",
                                    },
                                    !f && {
                                        action: A,
                                        disabled: m,
                                        icon: m
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC"
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",
                                        label: "Minimize",
                                    },
                                    !h && {
                                        action: () => {
                                            c(), w();
                                        },
                                        disabled: e || !d,
                                        icon: e
                                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC"
                                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",
                                        label: "Maximize",
                                    },
                                    t && s.Os,
                                    {
                                        action: r,
                                        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",
                                        label: "Close",
                                    },
                                ].filter(Boolean);
                            }),
                        [d, t, w, h, f, x, m, r, c, A]
                    );
                };
        },
        23561: function (e, t, r) {
            var n = r(67294),
                i = r(67318),
                o = r(58437),
                a = r(76488),
                s = r(86178),
                l = r(97836);
            t.Z = (e) => {
                let t = (0, i.Z)(e),
                    { setForegroundId: r, removeFromStack: c } = (0, a.k)(),
                    { closeWithTransition: A, maximize: u, minimize: p } = (0, o.z)(),
                    d = (0, s.R)(),
                    g = (0, n.useCallback)(() => {
                        p(e), r(t);
                    }, [e, p, t, r]),
                    h = (0, n.useCallback)(() => {
                        u(e), d.current[e]?.componentWindow?.focus(l.eS);
                    }, [e, u, d]);
                return {
                    onClose: (0, n.useCallback)(() => {
                        c(e), A(e), r(t);
                    }, [A, e, t, c, r]),
                    onMaximize: h,
                    onMinimize: g,
                };
            };
        },
        67318: function (e, t, r) {
            var n = r(58437),
                i = r(76488);
            t.Z = (e) => {
                let { stackOrder: t = [] } = (0, i.k)(),
                    { processes: r } = (0, n.z)();
                return t.find((t) => t !== e && !r?.[t]?.minimized) || "";
            };
        },
        32221: function (e, t, r) {
            var n = r(67294),
                i = r(58437);
            t.Z = (e, t) => {
                let { url: r } = (0, i.z)(),
                    [o, a] = (0, n.useState)(e),
                    [s, l] = (0, n.useState)(() => [e]),
                    [c, A] = (0, n.useState)(0),
                    u = (0, n.useCallback)(
                        (e) => {
                            let n = c + e;
                            A(n), a(s[n]), r(t, s[n]);
                        },
                        [r, s, t, c]
                    );
                return (
                    (0, n.useEffect)(() => {
                        e !== o && (A(c + 1), a(e), l([...s.slice(0, c + 1), e]));
                    }, [o, s, c, e]),
                    { canGoBack: c > 0, canGoForward: c < s.length - 1, currentUrl: o, history: s, moveHistory: u, position: c }
                );
            };
        },
        72490: function (e, t, r) {
            var n = r(67294);
            t.Z = (e, t) => {
                let [r, i] = (0, n.useState)();
                (0, n.useEffect)(() => {
                    t && i(new ResizeObserver(t));
                }, [t]),
                    (0, n.useEffect)(
                        () => (
                            e instanceof HTMLElement && r?.observe(e),
                            () => {
                                e instanceof HTMLElement && r?.unobserve(e);
                            }
                        ),
                        [e, r]
                    );
            };
        },
        82883: function (e, t, r) {
            r.d(t, {
                cM: function () {
                    return c;
                },
                hZ: function () {
                    return u;
                },
                VU: function () {
                    return A;
                },
                Kk: function () {
                    return f;
                },
                Rx: function () {
                    return x;
                },
            });
            var n = r(1864),
                i = r(67294),
                o = r(20063),
                a = JSON.parse('{"I":[".cache",".json"],"K":[".md",".txt",".whtml"]}'),
                s = r(97836),
                l = r(6484);
            let c = "/.index/search.lunr.json",
                A = "/System/lunr/lunr.min.js",
                u = { enterKeyHint: "search", inputMode: "search", type: "search", ...s.AA },
                p = Object.create(null),
                d = [],
                g = async (e, t) => {
                    if ((window.lunr || (await (0, l.mb)([A])), !t && !p?.search)) {
                        let e = await fetch(c, s.P8);
                        try {
                            let { paths: t, ...r } = JSON.parse(await e.text());
                            (p = window.lunr?.Index.load(r)), (d = t);
                        } catch { }
                    }
                    let r = t ?? p,
                        n = [],
                        i = e
                            .trim()
                            .replace(/\./g, " ")
                            .replace(/\*~\^-\+/g, "");
                    try {
                        (n = r.search?.(i)), n?.length === 0 && (n = r.search?.(`${i.split(" ").join("* ")}*`));
                    } catch { }
                    return n ? n.map((e) => ({ ...e, ref: (Object.prototype.hasOwnProperty.call(d, e.ref) ? d[e.ref] : e.ref) || "" })) : [];
                },
                h = async (e, t) => {
                    let r = t?._getFs("/")?.fs,
                        i = r?.getOverlayedFileSystems(),
                        o = i?.writable,
                        s = (("function" == typeof o?._cache?.map?.keys && [...o._cache.map.keys()]) || Object.keys(o?._cache?.map || {}) || []).filter((e) => {
                            let t = (0, l.RT)(e);
                            return !!t && !a.I.includes(t);
                        }),
                        c = await Promise.all(
                            s.map(async (t) => {
                                let r = (0, n.basename)(t, (0, n.extname)(t));
                                return { name: r, path: t, text: a.K.includes((0, l.RT)(t)) ? `${r} ${(await e(t)).toString()}` : r };
                            })
                        ),
                        A = window.lunr?.(function () {
                            this.ref("path"), this.field("name"), this.field("text"), c.forEach((e) => this.add(e));
                        });
                    return window.lunr?.Index.load(A.toJSON());
                },
                f = async (e, t, r) => {
                    let n = await g(e),
                        i = await h(t, r);
                    return [...n, ...(await g(e, i))].sort((e, t) => t.score - e.score);
                },
                x = (e) => {
                    let [t, r] = (0, i.useState)([]),
                        { readFile: n, rootFs: a } = (0, o.o)();
                    return (
                        (0, i.useEffect)(() => {
                            (async () => {
                                e.length > 0 ? (window.lunr || (await (0, l.mb)([A])), g(e).then(r), h(n, a).then((t) => g(e, t).then((e) => r((t) => [...t, ...e].sort((e, t) => t.score - e.score))))) : r([]);
                            })();
                        }, [n, a, e]),
                        t
                    );
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3425,3333,5653],{45653:function(e,t,r){r.r(t),r.d(t,{Back:function(){return o},Down:function(){return l},Forward:function(){return a},Refresh:function(){return s},Search:function(){return A},Up:function(){return c}});var n=r(85893),i=r(67294);let o=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 14v4H7.656l7.172 7.172L12 28 0 16 12 4l2.828 2.828L7.656 14H32z"})})),a=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m20 4 12 12-12 12-2.828-2.828L24.344 18H0v-4h24.344l-7.172-7.172L20 4z"})})),s=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.266.594q2.594.703 4.75 2.195t3.711 3.531 2.414 4.516T32 16q0 2.203-.57 4.25t-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82T.002 16q0-2.188.578-4.25t1.648-3.883T4.83 4.554t3.453-2.555H4.002v-2h8v8h-2V3.358q-1.828.875-3.305 2.195T4.174 8.522t-1.609 3.555-.563 3.922q0 1.922.5 3.711t1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414 3.719.5q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336.5-3.719q0-2.344-.758-4.516T27.127 7.53t-3.242-3.086-4.148-1.93l.531-1.922z"})})),l=(0,i.memo)(({flip:e})=>{let t=(0,i.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,n.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m28.109 5.453 3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z"})})}),c=(0,i.memo)(()=>{let e=(0,i.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,n.jsx)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m16 0 12 12-2.828 2.828L18 7.656V32h-4V7.656l-7.172 7.172L4 12 16 0z"})})}),A=(0,i.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))},43425:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(85893),i=r(1864),o=r(67294),a=r(45653),s=r(10508);let l=s.ZP.div(["background-position:2px 5px;background-repeat:no-repeat;background-size:16px;border:1px solid rgb(83,83,83);display:flex;height:","px;margin:7px 12px 6px 5px;padding:0 22px 2px 25px;position:relative;width:100%;input{background-color:rgb(25,25,25);border-right:1px solid rgb(21,21,21);color:#fff;font-family:",";font-size:12px;font-weight:400;height:","px;padding-bottom:1px;text-overflow:ellipsis;white-space:nowrap;width:calc(100% - 2px);}img{left:2px;position:absolute;top:3px;}.refresh{background-color:rgb(25,25,25);display:flex;height:","px;margin:0;place-content:center;place-items:center;position:absolute;right:0;stroke:rgb(128,128,128);stroke-width:3;top:0;width:24px;&:hover{background-color:rgb(27,41,49);border:1px solid rgb(34,114,153);}&:active{background-color:rgb(28,57,71);border:1px solid rgb(38,160,218);}svg{position:relative;top:-1px;}}"],({theme:e})=>e.sizes.fileExplorer.navInputHeight,({theme:e})=>e.formats.systemFont,({theme:e})=>e.sizes.fileExplorer.navInputHeight-2,({theme:e})=>e.sizes.fileExplorer.navInputHeight-2);var c=r(7502),A=e=>{let{contextMenu:t}=(0,c.H)();return(0,o.useMemo)(()=>t?.(()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]),[e,t])},u=r(20063),p=r(58437),d=r(67278),g=r(46581),h=r(97836),f=r(6484);let x=(0,o.forwardRef)(({id:e},t)=>{let{url:r,processes:{[e]:{icon:s,url:c=""}}}=(0,p.z)(),x=(0,i.basename)(c)||h.SP,[m,w]=(0,o.useState)(x),{exists:b,updateFolder:v}=(0,u.o)();return(0,o.useEffect)(()=>{t.current&&(m===c?t.current.select():m===x?window.getSelection()?.removeAllRanges():document.activeElement!==t.current&&w(x))},[m,t,x,c]),(0,n.jsxs)(l,{children:[(0,n.jsx)(g.Z,{alt:x,imgSize:16,src:s}),(0,n.jsx)("input",{ref:t,"aria-label":"Address",enterKeyHint:"go",onBlurCapture:()=>w(x),onChange:({target:e})=>w(e.value),onFocusCapture:()=>w(c),onKeyDown:async({key:n})=>{if("Enter"===n&&t.current){let{value:n}=t.current;n&&await b(n)&&r(e,n),t.current.blur()}},spellCheck:!1,type:"text",value:m,...A(c)}),(0,n.jsx)(d.Z,{className:"refresh",onClick:()=>v(c),...(0,f.PS)(`Refresh "${x}" (F5)`),children:(0,n.jsx)(a.Refresh,{})})]})}),m=s.ZP.div(["border:1px solid rgb(83,83,83);display:flex;height:","px;margin:7px 12px 6px 0;max-width:148px;overflow:hidden;padding:0;position:relative;width:100%;svg{display:none;}input{appearance:none;background-color:rgb(25,25,25);color:#fff;font-family:",";font-size:12px;font-weight:400;height:","px;padding-bottom:1px;padding-left:8px;text-overflow:ellipsis;white-space:nowrap;width:100%;&::-webkit-search-cancel-button{filter:invert(1);padding-right:4px;}}input:placeholder-shown ~ svg{display:block;fill:rgb(113,113,113);height:12px;pointer-events:none;position:absolute;right:6px;stroke:rgb(113,113,113);stroke-width:1;top:5px;width:12px;}"],({theme:e})=>e.sizes.fileExplorer.navInputHeight,({theme:e})=>e.formats.systemFont,({theme:e})=>e.sizes.fileExplorer.navInputHeight-2);var w=r(93949),b=r(76488),v=r(82883),k=(0,o.memo)(({id:e})=>{let[t,r]=(0,o.useState)(""),s=(0,o.useRef)(!1),{open:l,processes:{[e]:{url:A=""}}}=(0,p.z)(),d=(0,o.useRef)(null),g=(0,v.Rx)(t),{contextMenu:x}=(0,c.H)(),{fs:k}=(0,u.o)(),{updateRecentFiles:E}=(0,b.k)();return(0,o.useEffect)(()=>{d.current&&s.current&&Promise.all([...g.filter(({ref:e})=>e.startsWith(A)),...g.filter(({ref:e})=>!e.startsWith(A))].slice(0,9).map(async({ref:e})=>{let{icon:t,url:n,pid:o=""}=await (0,w.A4)(k,e)||{};return{action:()=>{l(o,{url:n}),r(""),d.current&&(d.current.value="",d.current.blur()),n&&o&&E(n,o)},icon:t,label:(0,i.basename)(e,h.zm),tooltip:e}})).then(e=>{if(d.current?.value||0===e.length){let t=d.current?.getBoundingClientRect();x?.(()=>e).onContextMenuCapture(void 0,t,{staticY:(t?.y||0)+(t?.height||0)})}})},[x,k,l,g,E,A]),(0,o.useEffect)(()=>{d.current&&(d.current.value="",r(""))},[A]),(0,n.jsxs)(m,{children:[(0,n.jsx)("input",{ref:d,onChange:({target:e})=>{s.current=!0,r(e.value)},onFocus:()=>(0,f.Q4)([v.VU,v.cM]),placeholder:"Search",...v.hZ}),(0,n.jsx)(a.Search,{})]})});let E=s.ZP.nav(["background-color:rgb(25,25,25);display:flex;height:",';button{height:16px;margin:11px 9px;width:16px;svg{color:#fff;fill:currentColor;height:16px;transition:color 0.35s ease;width:16px;&:hover{color:rgb(50,152,254);}&:active{color:rgb(54,116,178);transition:none;}}&[title^="Up"]{margin-right:8px;position:relative;right:-8px;top:-1px;}&[title="Recent locations"]{left:55px;position:absolute;svg{stroke:currentColor;stroke-width:3px;width:7px;}}&:disabled{svg{color:rgb(140,140,140);&:hover,&:active{color:rgb(140,140,140);}}}}'],({theme:e})=>e.sizes.fileExplorer.navBarHeight);var C=r(64146),y=r(32221),S=r(72490);let j=(0,o.forwardRef)(({hideSearch:e,id:t},r)=>{let{url:s,processes:{[t]:{url:l=""}}}=(0,p.z)(),A="/"===l?"":(0,i.basename)((0,i.dirname)(l)),{contextMenu:u,menu:g,setMenu:m}=(0,c.H)(),{canGoBack:w,canGoForward:b,history:v,moveHistory:j,position:R}=(0,y.Z)(l,t),B=(0,o.useMemo)(()=>v.map((e,t)=>({action:()=>j(t-R),checked:R===t,label:(0,i.basename)(e)||h.SP,primary:R===t})).reverse(),[v,j,R]),{onContextMenuCapture:z}=(0,o.useMemo)(()=>u?.(()=>B),[u,B]),[M,T]=(0,o.useState)(!1),U=(0,o.useRef)(null),[F,P]=(0,o.useState)(!1),O=(0,o.useCallback)(([{contentRect:e}])=>{let t=e.width<260;F&&!t?P(!1):!F&&t&&P(!0)},[F]);return(0,o.useEffect)(()=>{T(B===g.items)},[g.items,B]),(0,S.Z)(U.current,O),(0,n.jsxs)(E,{ref:U,...(0,C.Z)(t),onDragOver:f.nK,onDrop:f.nK,children:[(0,n.jsx)(d.Z,{disabled:!w,onClick:()=>j(-1),...(0,f.PS)(w?`Back to ${(0,i.basename)(v[R-1])||h.SP}`:"Back"),children:(0,n.jsx)(a.Back,{})}),(0,n.jsx)(d.Z,{disabled:!b,onClick:()=>j(1),...(0,f.PS)(b?`Forward to ${(0,i.basename)(v[R+1])||h.SP}`:"Forward"),children:(0,n.jsx)(a.Forward,{})}),(0,n.jsx)(d.Z,{disabled:1===v.length,onClick:e=>{if(e.preventDefault(),M)m(Object.create(null));else{let{height:t=0,y:r=0,x:n=0}=U.current?.getBoundingClientRect()||{};z(n&&r&&t?{pageX:n,pageY:r+t-3}:e)}},...(0,f.PS)("Recent locations"),children:(0,n.jsx)(a.Down,{})}),(0,n.jsx)(d.Z,{disabled:"/"===l,onClick:()=>s(t,(0,i.dirname)(l)),...(0,f.PS)("/"===l?"Up one level":`Up to "${""===A?h.SP:A}"`),children:(0,n.jsx)(a.Up,{})}),(0,n.jsx)(x,{ref:r,id:t}),!e&&!F&&(0,n.jsx)(k,{id:t})]})});var R=r(33333),B=r(16854),z=r(52547);let M=s.ZP.div(["","{column-gap:2px;height:",";padding-left:5px;padding-right:5px;}","{height:",";}","{&:hover{&::before{border-width:0;}}&::before{border-width:0;}}"],z.Z,({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`,R.default,({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`,B.Z);var T=r(6155),U=r(54110),F=r(18575),P=({id:e})=>{let{icon:t,title:r,processes:{[e]:a},url:s}=(0,p.z)(),{componentWindow:l,closing:c,icon:A="",url:d=""}=a||{},{fs:g,rootFs:x}=(0,u.o)(),[m,w]=(0,o.useState)(d),b=(0,o.useRef)(null),v=(0,i.basename)(d),k=(0,F.getMountUrl)(d,x?.mntMap||{}),E=(0,o.useCallback)(e=>{e.altKey&&"D"===e.key.toUpperCase()&&((0,f.nK)(e),b.current?.focus(h.eS))},[]);return(0,o.useEffect)(()=>{d&&(r(e,v||h.SP),(!A||d!==m||k&&A!==h.iR||A===h.XN)&&(k&&d===k?t(e,(0,F.isMountedFolder)(x?.mntMap[d])?h.iR:h.Wc):g&&(t(e,`/System/Icons/${v?"folder":"pc"}.webp`),(0,T.nR)(g,d).then(r=>{r&&t(e,r)})),w(d)))},[m,v,g,A,e,k,x?.mntMap,t,r,d]),(0,o.useEffect)(()=>{!l||c||d||(s(e,"/"),t(e,"/System/Icons/pc.webp"))},[c,e,l,t,s,d]),(0,o.useEffect)(()=>(l?.addEventListener("keydown",E),()=>l?.removeEventListener("keydown",E)),[l,E]),d?(0,n.jsxs)(M,{children:[(0,n.jsx)(j,{ref:b,hideSearch:!!k,id:e}),(0,n.jsx)(U.Z,{id:e,url:d,view:"icon",showStatusBar:!0})]}):null}},33333:function(e,t,r){r.r(t);let n=r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=n},93949:function(e,t,r){r.d(t,{A4:function(){return l},VD:function(){return c},r5:function(){return A}});var n=r(1864),i=r(43950),o=r(6155),a=r(97836),s=r(6484);let l=async(e,t,r)=>{if(!e)return;let{subIcons:i,icon:l,pid:c=a.yV[0],url:A}=await new Promise(r=>{e.lstat(t,(n,i)=>{let a=!n&&!!i&&i.isDirectory(),l=(0,s.RT)(t);l&&!a?(0,o.Z7)(e,t,l,e=>r(e)):(0,o.g7)(e,e.getRootFS(),t,a,!1,e=>r(e),!1)})});if(r?.aborted)return;let u=(0,s.yk)(A);return{icon:await (0,o.kv)(e,(0,n.join)(u?a.Rm:a.Xo,`${u?new URL(A).pathname.replace("/",""):A}${a.Qy}`))||l,pid:c,subIcons:i?.includes(a.EV)?i:[],url:A||t}},c=(e,t)=>{let r=0===e.value.length,n=()=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))};n(),requestAnimationFrame(()=>r&&1===t.length&&2===e.value.length&&n())},A=(e,t,r,n,o)=>o?"Nostr URI":n?"App":r?"YouTube Video":e?.isDirectory()||!t?"File folder":i.Z[t]?.type||`${t.toUpperCase().replace(".","")} File`},64146:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(67294),i=r(23561),o=r(7502),a=r(58437),s=r(97836),l=r(76488),c=e=>{let{contextMenu:t}=(0,o.H)(),{onClose:r,onMaximize:c,onMinimize:A}=(0,i.Z)(e),{processes:{[e]:u}}=(0,a.z)(),{setForegroundId:p}=(0,l.k)(),{allowResizing:d=!0,componentWindow:g,hideMaximizeButton:h,hideMinimizeButton:f,maximized:x,minimized:m}=u||{},w=(0,n.useCallback)(()=>{p(e),g?.focus(s.eS)},[g,e,p]);return(0,n.useMemo)(()=>t?.(()=>{let e=x||m,t=!h||!f;return[t&&{action:()=>{m?A():c(),w()},disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!f&&{action:A,disabled:m,icon:m?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!h&&{action:()=>{c(),w()},disabled:e||!d,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},t&&s.Os,{action:r,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[d,t,w,h,f,x,m,r,c,A])}},23561:function(e,t,r){var n=r(67294),i=r(67318),o=r(58437),a=r(76488),s=r(86178),l=r(97836);t.Z=e=>{let t=(0,i.Z)(e),{setForegroundId:r,removeFromStack:c}=(0,a.k)(),{closeWithTransition:A,maximize:u,minimize:p}=(0,o.z)(),d=(0,s.R)(),g=(0,n.useCallback)(()=>{p(e),r(t)},[e,p,t,r]),h=(0,n.useCallback)(()=>{u(e),d.current[e]?.componentWindow?.focus(l.eS)},[e,u,d]);return{onClose:(0,n.useCallback)(()=>{c(e),A(e),r(t)},[A,e,t,c,r]),onMaximize:h,onMinimize:g}}},67318:function(e,t,r){var n=r(58437),i=r(76488);t.Z=e=>{let{stackOrder:t=[]}=(0,i.k)(),{processes:r}=(0,n.z)();return t.find(t=>t!==e&&!r?.[t]?.minimized)||""}},32221:function(e,t,r){var n=r(67294),i=r(58437);t.Z=(e,t)=>{let{url:r}=(0,i.z)(),[o,a]=(0,n.useState)(e),[s,l]=(0,n.useState)(()=>[e]),[c,A]=(0,n.useState)(0),u=(0,n.useCallback)(e=>{let n=c+e;A(n),a(s[n]),r(t,s[n])},[r,s,t,c]);return(0,n.useEffect)(()=>{e!==o&&(A(c+1),a(e),l([...s.slice(0,c+1),e]))},[o,s,c,e]),{canGoBack:c>0,canGoForward:c<s.length-1,currentUrl:o,history:s,moveHistory:u,position:c}}},72490:function(e,t,r){var n=r(67294);t.Z=(e,t)=>{let[r,i]=(0,n.useState)();(0,n.useEffect)(()=>{t&&i(new ResizeObserver(t))},[t]),(0,n.useEffect)(()=>(e instanceof HTMLElement&&r?.observe(e),()=>{e instanceof HTMLElement&&r?.unobserve(e)}),[e,r])}},82883:function(e,t,r){r.d(t,{cM:function(){return c},hZ:function(){return u},VU:function(){return A},Kk:function(){return f},Rx:function(){return x}});var n=r(1864),i=r(67294),o=r(20063),a=JSON.parse('{"I":[".cache",".json"],"K":[".md",".txt",".whtml"]}'),s=r(97836),l=r(6484);let c="/.index/search.lunr.json",A="/System/lunr/lunr.min.js",u={enterKeyHint:"search",inputMode:"search",type:"search",...s.AA},p=Object.create(null),d=[],g=async(e,t)=>{if(window.lunr||await (0,l.mb)([A]),!t&&!p?.search){let e=await fetch(c,s.P8);try{let{paths:t,...r}=JSON.parse(await e.text());p=window.lunr?.Index.load(r),d=t}catch{}}let r=t??p,n=[],i=e.trim().replace(/\./g," ").replace(/\*~\^-\+/g,"");try{n=r.search?.(i),n?.length===0&&(n=r.search?.(`${i.split(" ").join("* ")}*`))}catch{}return n?n.map(e=>({...e,ref:(Object.prototype.hasOwnProperty.call(d,e.ref)?d[e.ref]:e.ref)||""})):[]},h=async(e,t)=>{let r=t?._getFs("/")?.fs,i=r?.getOverlayedFileSystems(),o=i?.writable,s=("function"==typeof o?._cache?.map?.keys&&[...o._cache.map.keys()]||Object.keys(o?._cache?.map||{})||[]).filter(e=>{let t=(0,l.RT)(e);return!!t&&!a.I.includes(t)}),c=await Promise.all(s.map(async t=>{let r=(0,n.basename)(t,(0,n.extname)(t));return{name:r,path:t,text:a.K.includes((0,l.RT)(t))?`${r} ${(await e(t)).toString()}`:r}})),A=window.lunr?.(function(){this.ref("path"),this.field("name"),this.field("text"),c.forEach(e=>this.add(e))});return window.lunr?.Index.load(A.toJSON())},f=async(e,t,r)=>{let n=await g(e),i=await h(t,r);return[...n,...await g(e,i)].sort((e,t)=>t.score-e.score)},x=e=>{let[t,r]=(0,i.useState)([]),{readFile:n,rootFs:a}=(0,o.o)();return(0,i.useEffect)(()=>{(async()=>{e.length>0?(window.lunr||await (0,l.mb)([A]),g(e).then(r),h(n,a).then(t=>g(e,t).then(e=>r(t=>[...t,...e].sort((e,t)=>t.score-e.score))))):r([])})()},[n,a,e]),t}}}]);