"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8036, 3333],
    {
        48036: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return z;
                    },
                });
            var n = r(85893),
                i = r(1864),
                l = r(67294);
            let a = (0, l.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z" }) })),
                o = (0, l.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M32 17H0v-2h32v2z" }) })),
                s = (0, l.memo)(() =>
                    (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z" }) })
                ),
                c = (0, l.memo)(() =>
                    (0, n.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d:
                                "M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z",
                        }),
                    })
                );
            var d = r(10508);
            let b = d.ZP.nav(
                [
                    "background-color:rgb(50,54,57);box-shadow:0 0 5px hsla(0,0%,10%,50%);display:flex;height:40px;position:absolute;top:",
                    'px;width:100%;z-index:1;.side-menu{display:flex;overflow:hidden;place-items:center;white-space:nowrap;width:100%;span{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}&:first-child{color:#fff;font-size:14px;margin-left:16px;place-content:flex-start;}&:last-child{margin-right:16px;place-content:flex-end;}}button{border-radius:50%;display:flex;font-size:24px;height:30px;place-content:center;place-items:center;width:30px;&.subtract{margin-right:7px;}&.add{margin-left:7px;}&:last-child{margin-left:7px;}&:hover{background-color:rgb(66,70,73);}svg{fill:#fff;height:12px;stroke:#fff;width:12px;}&:disabled{background-color:initial;svg{fill:rgb(110,112,114);stroke:rgb(110,112,114);}}&.download{svg{margin-left:1px;scale:1.15;stroke-width:1.75;transform:scale(1.25,1);}}}ol{display:flex;flex-direction:row;height:100%;place-content:center;place-items:center;width:100%;li{color:#fff;display:flex;flex-direction:row;font-size:14px;input{background-color:rgb(25,27,28);color:#fff;height:20px;text-align:center;&:disabled{color:rgb(110,112,114);}}&:not(:last-child)::after{background-color:rgb(112,115,117);content:"";margin-left:20px;width:1px;}&.pages{letter-spacing:1.5px;line-height:20px;padding-right:10px;width:max-content;input{margin:0 5px;width:24px;}}&.scale{display:flex;place-items:center;input{width:45px;}}}}',
                ],
                ({ theme: e }) => e.sizes.titleBar.height
            );
            var g = r(44696),
                u = r(20063),
                h = r(58437),
                p = r(97836),
                m = r(6484);
            let x = [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5],
                A = (e = 0, t = 0) => {
                    let r = e - 8;
                    if (r >= t) return 1;
                    let n = r / t,
                        i = x.findIndex((e) => e >= n);
                    return i > 0 ? x[i - 1] : 1;
                };
            var f = ({ containerRef: e, id: t, setLoading: r, url: n }) => {
                let { readFile: a } = (0, u.o)(),
                    { argument: o, processes: { [t]: s } = {}, url: c } = (0, h.z)(),
                    { libs: d = [], scale: b } = s || {},
                    [x, f] = (0, l.useState)([]),
                    w = (0, l.useCallback)(
                        async (r, n) => {
                            let i;
                            let l = document.createElement("canvas"),
                                a = l.getContext("2d", p.KU),
                                s = await n.getPage(r);
                            if (b) i = s.getViewport({ scale: b });
                            else {
                                let r = s.getViewport().viewBox[2],
                                    n = A(e.current?.clientWidth, r);
                                o(t, "scale", n), (i = s.getViewport({ scale: n }));
                            }
                            return (l.height = i.height), (l.width = i.width), await s.render({ canvasContext: a, viewport: i }).promise, l;
                        },
                        [o, e, t, b]
                    ),
                    { prependFileToTitle: v } = (0, g.Z)(t),
                    k = (0, l.useRef)(!1),
                    j = (0, l.useRef)(null),
                    y = (0, l.useCallback)(async () => {
                        if (window.pdfjsLib && n && e.current && !k.current) {
                            (k.current = !0), o(t, "rendering", !0), (e.current.scrollTop = 0), f([]), r(!0);
                            let l = await a(n);
                            if (0 === l.length) throw Error("File is empty");
                            let s = await window.pdfjsLib.getDocument(l).promise,
                                { info: c } = await s.getMetadata();
                            o(t, "subTitle", c.Title), o(t, "count", s.numPages), v((0, i.basename)(n)), (j.current = new AbortController());
                            for (let e = 0; e < s.numPages && !j.current.signal.aborted; e += 1) {
                                1 === e && r(!1);
                                let t = await w(e + 1, s);
                                f((e) => [...e, t]);
                            }
                            o(t, "rendering", !1), (k.current = !1);
                        }
                        r(!1);
                    }, [o, e, t, v, a, w, r, n]);
                (0, l.useEffect)(() => {
                    (0, m.mb)(d).then(() => {
                        window.pdfjsLib &&
                            ((window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/Program Files/PDF.js/pdf.worker.js"),
                                y().catch(() => {
                                    c(t, ""), r(!1);
                                }));
                    });
                }, [t, d, y, r, c]),
                    (0, l.useEffect)(() => {
                        if (x.length > 0) {
                            let r = e.current?.querySelector("ol.pages");
                            r &&
                                ([...r.children].forEach((e) => e.remove()),
                                    x.forEach((n, i) => {
                                        let l = document.createElement("li"),
                                            a = new IntersectionObserver(
                                                (e) =>
                                                    e.forEach(({ isIntersecting: e }) => {
                                                        e && o(t, "page", i + 1);
                                                    }),
                                                { root: e.current, ...p.e5 }
                                            );
                                        l.append(n), r.append(l), a.observe(l);
                                    }));
                        }
                    }, [o, e, t, x]),
                    (0, l.useEffect)(() => () => j.current?.abort(), []);
            },
                w = r(67278),
                v = ({ id: e }) => {
                    let { readFile: t } = (0, u.o)(),
                        { argument: l, processes: { [e]: d } = {} } = (0, h.z)(),
                        { count: g = 0, page: A = 1, componentWindow: f, rendering: v = !1, scale: k = 1, subTitle: j = "", url: y = "" } = d || {};
                    return (0, n.jsxs)(b, {
                        children: [
                            (0, n.jsx)("div", { className: "side-menu", children: (0, n.jsx)("span", { children: j || (0, i.basename)(y) }) }),
                            (0, n.jsxs)("ol", {
                                children: [
                                    0 !== g &&
                                    (0, n.jsxs)("li", {
                                        className: "pages",
                                        children: [
                                            (0, n.jsx)("input", {
                                                enterKeyHint: "go",
                                                onChange: ({ target: t }) => {
                                                    let r = Number(t.value);
                                                    Number.isNaN(r) || r < 1 || r > g || (l(e, "page", r), f?.querySelectorAll("li")[r - 1].scrollIntoView());
                                                },
                                                value: A,
                                            }),
                                            " ",
                                            "/ ",
                                            g,
                                        ],
                                    }),
                                    (0, n.jsxs)("li", {
                                        className: "scale",
                                        children: [
                                            (0, n.jsx)(w.Z, { className: "subtract", disabled: v || 0.25 === k || 0 === g, onClick: () => l(e, "scale", x[x.indexOf(k) - 1]), ...(0, m.PS)("Zoom out"), children: (0, n.jsx)(o, {}) }),
                                            (0, n.jsx)("input", {
                                                disabled: v || 0 === g,
                                                enterKeyHint: "done",
                                                onChange: ({ target: t }) => {
                                                    if (!t.value.endsWith("%") || t.value.length > 4 || t.value.length < 2) return;
                                                    let r = Number(t.value.replace("%", "")) / 100;
                                                    Number.isNaN(r) || r > x[x.length - 1] || r < x[0] || l(e, "scale", x[x.findIndex((e) => e >= r)]);
                                                },
                                                value: `${Math.round(100 * k)}%`,
                                            }),
                                            (0, n.jsx)(w.Z, { className: "add", disabled: v || 5 === k || 0 === g, onClick: () => l(e, "scale", x[x.indexOf(k) + 1]), ...(0, m.PS)("Zoom in"), children: (0, n.jsx)(a, {}) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: "side-menu",
                                children: [
                                    (0, n.jsx)(w.Z, {
                                        className: "download",
                                        disabled: 0 === g,
                                        onClick: async () => {
                                            let e = document.createElement("a");
                                            (e.href = (0, m.YS)(await t(y))), (e.download = (0, i.basename)(y)), e.click();
                                        },
                                        ...(0, m.PS)("Download"),
                                        children: (0, n.jsx)(s, {}),
                                    }),
                                    (0, n.jsx)(w.Z, {
                                        disabled: 0 === g,
                                        onClick: async () => {
                                            (0, m.G6)() &&
                                                ((window.InstallTrigger = !0),
                                                    setTimeout(() => {
                                                        delete window.InstallTrigger;
                                                    }, 5 * p.i2));
                                            let { default: e } = await r.e(8607, "high").then(r.t.bind(r, 68607, 23));
                                            e({ base64: !0, printable: (await t(y)).toString("base64"), type: "pdf" });
                                        },
                                        ...(0, m.PS)("Print"),
                                        children: (0, n.jsx)(c, {}),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                k = r(18680);
            let j = d.ZP.div(
                ["", ";display:block;overflow:auto;position:relative;text-align:center;top:40px;&&{height:", ";}canvas{box-shadow:0 0 5px hsla(0,0%,10%,50%);margin:4px 4px 0;}"],
                (0, k.Z)(),
                ({ theme: e }) => `calc(100% - ${e.sizes.titleBar.height}px - 40px)`
            );
            var y = r(7443),
                z = ({ id: e }) => (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(y.Z, { StyledComponent: j, id: e, useHook: f, children: (0, n.jsx)("ol", { className: "pages" }) }), (0, n.jsx)(v, { id: e })] });
        },
        7443: function (e, t, r) {
            var n = r(85893),
                i = r(67294),
                l = r(33333),
                a = r(45279),
                o = r(58437);
            t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: r, children: s }) => {
                let {
                    processes: { [e]: { url: c = "" } = {} },
                } = (0, o.z)(),
                    d = (0, i.useRef)(null),
                    [b, g] = (0, i.useState)(!0),
                    u = (0, i.useMemo)(() => ({ contain: "strict", visibility: b ? "hidden" : "visible" }), [b]);
                return t({ containerRef: d, id: e, loading: b, setLoading: g, url: c }), (0, n.jsxs)(n.Fragment, { children: [b && (0, n.jsx)(l.default, {}), (0, n.jsx)(r, { ref: d, style: u, ...(0, a.Z)({ id: e }), children: s })] });
            });
        },
        33333: function (e, t, r) {
            r.r(t);
            let n = r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = n;
        },
        45279: function (e, t, r) {
            var n = r(1864),
                i = r(67294),
                l = r(59746),
                a = r(23736),
                o = r(89670),
                s = r(20063),
                c = r(58437),
                d = r(76488),
                b = r(97836),
                g = r(6484);
            t.Z = ({ callback: e, directory: t = b.Ll, id: r, onDragLeave: u, onDragOver: h, updatePositions: p }) => {
                let { url: m } = (0, c.z)(),
                    { iconPositions: x, sortOrders: A, setIconPositions: f } = (0, d.k)(),
                    { exists: w, mkdirRecursive: v, updateFolder: k, writeFile: j } = (0, s.o)(),
                    y = (0, i.useCallback)(
                        async (e, t, i) => {
                            if (r) {
                                if (t) {
                                    let l = (0, n.join)(b.Ll, e);
                                    if ((await v(b.Ll), await j(l, t, !0))) return i === o.v.UPDATE_URL && m(r, l), await k(b.Ll, e), (0, n.basename)(l);
                                } else i === o.v.UPDATE_URL && m(r, e);
                            }
                            return "";
                        },
                        [r, v, k, m, j]
                    ),
                    { openTransferDialog: z } = (0, l.Z)();
                return {
                    onDragLeave: u,
                    onDragOver: (e) => {
                        h?.(e), (0, g.nK)(e);
                    },
                    onDrop: (i) => {
                        if (!b.my.has((0, g.RT)(t))) {
                            if (p && i.target instanceof HTMLElement) {
                                let { files: e, text: r } = (0, a.p4)(i);
                                if (0 === e.length && "" === r) return;
                                let l = { x: i.clientX, y: i.clientY },
                                    o = [];
                                if (r) {
                                    try {
                                        o = JSON.parse(r);
                                    } catch { }
                                    if (!Array.isArray(o)) return;
                                    let [e] = o;
                                    if (!e || (e.startsWith(t) && (0, n.basename)(e) === (0, n.relative)(t, e))) return;
                                    o = o.map((e) => (0, n.basename)(e));
                                } else e instanceof FileList ? (o = [...e].map((e) => e.name)) : (o = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (o = o.map((e) => {
                                    if (!x[`${t}/${e}`]) return e;
                                    let r = 0,
                                        i = "";
                                    do (r += 1), (i = `${t}/${(0, n.basename)(e, (0, n.extname)(e))} (${r})${(0, n.extname)(e)}`);
                                    while (x[i]);
                                    return (0, n.basename)(i);
                                })),
                                    (0, g.vi)(t, i.target, x, A, l, o, f, w);
                            }
                            (0, a.WG)(i, e || y, t, z, !!r);
                        }
                    },
                };
            };
        },
        44696: function (e, t, r) {
            var n = r(67294),
                i = r(58437),
                l = r(37176),
                a = r(97836);
            t.Z = (e) => {
                let { title: t } = (0, i.z)(),
                    [r] = e.split(a.CC),
                    { title: o } = l.Z[r] || {};
                return {
                    appendFileToTitle: (0, n.useCallback)(
                        (r, n) => {
                            let i = r ? ` - ${r}${n ? ` ${a.xy}` : ""}` : "";
                            t(e, `${o}${i}`);
                        },
                        [e, o, t]
                    ),
                    prependFileToTitle: (0, n.useCallback)(
                        (r, n, i) => {
                            let l = r ? `${n ? `${a.xy} ` : ""}${r}${i ? " " : " - "}` : "";
                            t(e, `${l}${o}`);
                        },
                        [e, o, t]
                    ),
                };
            };
        },
        18680: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return a;
                },
            });
            var n = r(10508),
                i = r(97836);
            let l = {
                dark: { active: "rgb(166, 166, 166)", blendMode: "color-burn", buttonHover: "rgb(55, 55, 55)", thumb: "rgb(77, 77, 77)", thumbHover: "rgb(122, 122, 122)", track: "rgb(23, 23, 23)" },
                light: { active: "rgb(96, 96, 96)", blendMode: "color-dodge", buttonHover: "rgb(218, 218, 218)", thumb: "rgb(205, 205, 205)", thumbHover: "rgb(166, 166, 166)", track: "rgb(240, 240, 240)" },
            };
            var a = (e = i.BQ, t = 0, r = 0, a = "dark") =>
                (0, n.iv)(
                    [
                        "overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:",
                        " ",
                        ";}&::-webkit-scrollbar{height:",
                        "px;width:",
                        "px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",
                        ";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",
                        ";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",
                        ";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",
                        ";}&::-webkit-scrollbar-thumb:active{background-color:",
                        ";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",
                        ";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",
                        ";display:block;height:",
                        ";&:hover{background-color:",
                        ";}&:active{background-color:",
                        ";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",
                        ";background-position-y:",
                        ";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",
                        ");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",
                        ";}",
                    ],
                    l[a].thumb,
                    l[a].track,
                    e,
                    e,
                    l[a].track,
                    l[a].thumb,
                    l[a].thumb,
                    l[a].thumbHover,
                    l[a].active,
                    l[a].track,
                    l[a].track,
                    e ? `${e}px` : "initial",
                    l[a].buttonHover,
                    l[a].active,
                    0 === t ? "center" : `${t}px`,
                    0 === r ? "center" : `${r}px`,
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",
                    l[a].blendMode
                );
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8036,3333],{48036:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(85893),i=r(1864),l=r(67294);let a=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})})),o=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 17H0v-2h32v2z"})})),s=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})})),c=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})}));var d=r(10508);let b=d.ZP.nav(["background-color:rgb(50,54,57);box-shadow:0 0 5px hsla(0,0%,10%,50%);display:flex;height:40px;position:absolute;top:",'px;width:100%;z-index:1;.side-menu{display:flex;overflow:hidden;place-items:center;white-space:nowrap;width:100%;span{margin-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}&:first-child{color:#fff;font-size:14px;margin-left:16px;place-content:flex-start;}&:last-child{margin-right:16px;place-content:flex-end;}}button{border-radius:50%;display:flex;font-size:24px;height:30px;place-content:center;place-items:center;width:30px;&.subtract{margin-right:7px;}&.add{margin-left:7px;}&:last-child{margin-left:7px;}&:hover{background-color:rgb(66,70,73);}svg{fill:#fff;height:12px;stroke:#fff;width:12px;}&:disabled{background-color:initial;svg{fill:rgb(110,112,114);stroke:rgb(110,112,114);}}&.download{svg{margin-left:1px;scale:1.15;stroke-width:1.75;transform:scale(1.25,1);}}}ol{display:flex;flex-direction:row;height:100%;place-content:center;place-items:center;width:100%;li{color:#fff;display:flex;flex-direction:row;font-size:14px;input{background-color:rgb(25,27,28);color:#fff;height:20px;text-align:center;&:disabled{color:rgb(110,112,114);}}&:not(:last-child)::after{background-color:rgb(112,115,117);content:"";margin-left:20px;width:1px;}&.pages{letter-spacing:1.5px;line-height:20px;padding-right:10px;width:max-content;input{margin:0 5px;width:24px;}}&.scale{display:flex;place-items:center;input{width:45px;}}}}'],({theme:e})=>e.sizes.titleBar.height);var g=r(44696),u=r(20063),h=r(58437),p=r(97836),m=r(6484);let x=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],A=(e=0,t=0)=>{let r=e-8;if(r>=t)return 1;let n=r/t,i=x.findIndex(e=>e>=n);return i>0?x[i-1]:1};var f=({containerRef:e,id:t,setLoading:r,url:n})=>{let{readFile:a}=(0,u.o)(),{argument:o,processes:{[t]:s}={},url:c}=(0,h.z)(),{libs:d=[],scale:b}=s||{},[x,f]=(0,l.useState)([]),w=(0,l.useCallback)(async(r,n)=>{let i;let l=document.createElement("canvas"),a=l.getContext("2d",p.KU),s=await n.getPage(r);if(b)i=s.getViewport({scale:b});else{let r=s.getViewport().viewBox[2],n=A(e.current?.clientWidth,r);o(t,"scale",n),i=s.getViewport({scale:n})}return l.height=i.height,l.width=i.width,await s.render({canvasContext:a,viewport:i}).promise,l},[o,e,t,b]),{prependFileToTitle:v}=(0,g.Z)(t),k=(0,l.useRef)(!1),j=(0,l.useRef)(null),y=(0,l.useCallback)(async()=>{if(window.pdfjsLib&&n&&e.current&&!k.current){k.current=!0,o(t,"rendering",!0),e.current.scrollTop=0,f([]),r(!0);let l=await a(n);if(0===l.length)throw Error("File is empty");let s=await window.pdfjsLib.getDocument(l).promise,{info:c}=await s.getMetadata();o(t,"subTitle",c.Title),o(t,"count",s.numPages),v((0,i.basename)(n)),j.current=new AbortController;for(let e=0;e<s.numPages&&!j.current.signal.aborted;e+=1){1===e&&r(!1);let t=await w(e+1,s);f(e=>[...e,t])}o(t,"rendering",!1),k.current=!1}r(!1)},[o,e,t,v,a,w,r,n]);(0,l.useEffect)(()=>{(0,m.mb)(d).then(()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",y().catch(()=>{c(t,""),r(!1)}))})},[t,d,y,r,c]),(0,l.useEffect)(()=>{if(x.length>0){let r=e.current?.querySelector("ol.pages");r&&([...r.children].forEach(e=>e.remove()),x.forEach((n,i)=>{let l=document.createElement("li"),a=new IntersectionObserver(e=>e.forEach(({isIntersecting:e})=>{e&&o(t,"page",i+1)}),{root:e.current,...p.e5});l.append(n),r.append(l),a.observe(l)}))}},[o,e,t,x]),(0,l.useEffect)(()=>()=>j.current?.abort(),[])},w=r(67278),v=({id:e})=>{let{readFile:t}=(0,u.o)(),{argument:l,processes:{[e]:d}={}}=(0,h.z)(),{count:g=0,page:A=1,componentWindow:f,rendering:v=!1,scale:k=1,subTitle:j="",url:y=""}=d||{};return(0,n.jsxs)(b,{children:[(0,n.jsx)("div",{className:"side-menu",children:(0,n.jsx)("span",{children:j||(0,i.basename)(y)})}),(0,n.jsxs)("ol",{children:[0!==g&&(0,n.jsxs)("li",{className:"pages",children:[(0,n.jsx)("input",{enterKeyHint:"go",onChange:({target:t})=>{let r=Number(t.value);Number.isNaN(r)||r<1||r>g||(l(e,"page",r),f?.querySelectorAll("li")[r-1].scrollIntoView())},value:A})," ","/ ",g]}),(0,n.jsxs)("li",{className:"scale",children:[(0,n.jsx)(w.Z,{className:"subtract",disabled:v||.25===k||0===g,onClick:()=>l(e,"scale",x[x.indexOf(k)-1]),...(0,m.PS)("Zoom out"),children:(0,n.jsx)(o,{})}),(0,n.jsx)("input",{disabled:v||0===g,enterKeyHint:"done",onChange:({target:t})=>{if(!t.value.endsWith("%")||t.value.length>4||t.value.length<2)return;let r=Number(t.value.replace("%",""))/100;Number.isNaN(r)||r>x[x.length-1]||r<x[0]||l(e,"scale",x[x.findIndex(e=>e>=r)])},value:`${Math.round(100*k)}%`}),(0,n.jsx)(w.Z,{className:"add",disabled:v||5===k||0===g,onClick:()=>l(e,"scale",x[x.indexOf(k)+1]),...(0,m.PS)("Zoom in"),children:(0,n.jsx)(a,{})})]})]}),(0,n.jsxs)("div",{className:"side-menu",children:[(0,n.jsx)(w.Z,{className:"download",disabled:0===g,onClick:async()=>{let e=document.createElement("a");e.href=(0,m.YS)(await t(y)),e.download=(0,i.basename)(y),e.click()},...(0,m.PS)("Download"),children:(0,n.jsx)(s,{})}),(0,n.jsx)(w.Z,{disabled:0===g,onClick:async()=>{(0,m.G6)()&&(window.InstallTrigger=!0,setTimeout(()=>{delete window.InstallTrigger},5*p.i2));let{default:e}=await r.e(8607,"high").then(r.t.bind(r,68607,23));e({base64:!0,printable:(await t(y)).toString("base64"),type:"pdf"})},...(0,m.PS)("Print"),children:(0,n.jsx)(c,{})})]})]})},k=r(18680);let j=d.ZP.div(["",";display:block;overflow:auto;position:relative;text-align:center;top:40px;&&{height:",";}canvas{box-shadow:0 0 5px hsla(0,0%,10%,50%);margin:4px 4px 0;}"],(0,k.Z)(),({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px - 40px)`);var y=r(7443),z=({id:e})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.Z,{StyledComponent:j,id:e,useHook:f,children:(0,n.jsx)("ol",{className:"pages"})}),(0,n.jsx)(v,{id:e})]})},7443:function(e,t,r){var n=r(85893),i=r(67294),l=r(33333),a=r(45279),o=r(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:r,children:s})=>{let{processes:{[e]:{url:c=""}={}}}=(0,o.z)(),d=(0,i.useRef)(null),[b,g]=(0,i.useState)(!0),u=(0,i.useMemo)(()=>({contain:"strict",visibility:b?"hidden":"visible"}),[b]);return t({containerRef:d,id:e,loading:b,setLoading:g,url:c}),(0,n.jsxs)(n.Fragment,{children:[b&&(0,n.jsx)(l.default,{}),(0,n.jsx)(r,{ref:d,style:u,...(0,a.Z)({id:e}),children:s})]})})},33333:function(e,t,r){r.r(t);let n=r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=n},45279:function(e,t,r){var n=r(1864),i=r(67294),l=r(59746),a=r(23736),o=r(89670),s=r(20063),c=r(58437),d=r(76488),b=r(97836),g=r(6484);t.Z=({callback:e,directory:t=b.Ll,id:r,onDragLeave:u,onDragOver:h,updatePositions:p})=>{let{url:m}=(0,c.z)(),{iconPositions:x,sortOrders:A,setIconPositions:f}=(0,d.k)(),{exists:w,mkdirRecursive:v,updateFolder:k,writeFile:j}=(0,s.o)(),y=(0,i.useCallback)(async(e,t,i)=>{if(r){if(t){let l=(0,n.join)(b.Ll,e);if(await v(b.Ll),await j(l,t,!0))return i===o.v.UPDATE_URL&&m(r,l),await k(b.Ll,e),(0,n.basename)(l)}else i===o.v.UPDATE_URL&&m(r,e)}return""},[r,v,k,m,j]),{openTransferDialog:z}=(0,l.Z)();return{onDragLeave:u,onDragOver:e=>{h?.(e),(0,g.nK)(e)},onDrop:i=>{if(!b.my.has((0,g.RT)(t))){if(p&&i.target instanceof HTMLElement){let{files:e,text:r}=(0,a.p4)(i);if(0===e.length&&""===r)return;let l={x:i.clientX,y:i.clientY},o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;o=o.map(e=>(0,n.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=o.map(e=>{if(!x[`${t}/${e}`])return e;let r=0,i="";do r+=1,i=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${r})${(0,n.extname)(e)}`;while(x[i]);return(0,n.basename)(i)}),(0,g.vi)(t,i.target,x,A,l,o,f,w)}(0,a.WG)(i,e||y,t,z,!!r)}}}}},44696:function(e,t,r){var n=r(67294),i=r(58437),l=r(37176),a=r(97836);t.Z=e=>{let{title:t}=(0,i.z)(),[r]=e.split(a.CC),{title:o}=l.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)((r,n)=>{let i=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${o}${i}`)},[e,o,t]),prependFileToTitle:(0,n.useCallback)((r,n,i)=>{let l=r?`${n?`${a.xy} `:""}${r}${i?" ":" - "}`:"";t(e,`${l}${o}`)},[e,o,t])}}},18680:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(10508),i=r(97836);let l={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=(e=i.BQ,t=0,r=0,a="dark")=>(0,n.iv)(["overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:"," ",";}&::-webkit-scrollbar{height:","px;width:","px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",";}&::-webkit-scrollbar-thumb:active{background-color:",";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",";display:block;height:",";&:hover{background-color:",";}&:active{background-color:",";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",";background-position-y:",";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",";}"],l[a].thumb,l[a].track,e,e,l[a].track,l[a].thumb,l[a].thumb,l[a].thumbHover,l[a].active,l[a].track,l[a].track,e?`${e}px`:"initial",l[a].buttonHover,l[a].active,0===t?"center":`${t}px`,0===r?"center":`${r}px`,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",l[a].blendMode)}}]);