"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8757, 3333],
    {
        68757: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return k;
                    },
                });
            var i = r(85893);
            let o = r(10508).ZP.div([
                'display:flex;height:100%;width:100%;.video-js{height:100%;width:100%;.vjs-big-play-button{display:none;}.vjs-control-bar{background-color:rgb(240,240,240);padding:0 1;&:not(.no-interaction){display:flex !important;opacity:100% !important;}.no-interaction{display:none !important;opacity:0% !important;pointer-events:none !important;}}&.vjs-youtube,&.vjs-fullscreen.vjs-user-inactive{.vjs-control-bar{opacity:0% !important;}}.vjs-button{color:rgb(116,116,116);height:28px;position:relative;width:28px;z-index:0;&::after{background-color:rgb(225,225,225);border:1px solid rgb(173,173,173);content:"";height:calc(100% - 4px);left:0;margin:2px 0 0 2px;position:absolute;top:1px;width:calc(100% - 4px);z-index:-1;}&:hover{&::after{background-color:rgb(229,241,251);border-color:rgb(0,120,215);}}&:active{&::after{background-color:rgb(204,228,247);border-color:rgb(0,84,153);}}}.vjs-current-time,.vjs-duration{display:block;}.vjs-current-time{padding-left:8px;padding-right:2px;}.vjs-duration{padding-left:2px;padding-right:8px;}.vjs-current-time-display,.vjs-duration-display{color:#000;font-family:sans-serif;font-size:11px;}.vjs-picture-in-picture-control{margin:0 -2px;}.vjs-load-progress{border-radius:5px;div{background:linear-gradient( 180deg,rgb(189,189,189) 0%,rgb(219,219,219) 100% );border-radius:5px;}}.vjs-play-progress{background:linear-gradient( 180deg,rgb(44,137,224) 0%,rgb(40,125,204) 100% );border-radius:5px;&::before{color:rgb(237,237,237);text-shadow:1px 2px 3px rgb(160,160,160);-webkit-text-stroke:1px rgba(164,164,164,80%);top:1px;}}.vjs-progress-holder{border-radius:5px;font-size:1.7em !important;height:9px;}.vjs-volume-control{background-color:rgb(240,240,240);border-radius:5px 5px 0 0;left:-28px !important;position:relative;.vjs-volume-bar{height:5.5em;margin:1.5em auto;}.vjs-volume-level{background:linear-gradient( 180deg,rgb(247,76,100) 0%,rgb(125,210,125) 50% );border-radius:5px;color:rgb(237,237,237);font-size:1.5em;text-shadow:1px 2px 3px rgb(160,160,160);-webkit-text-stroke:1px rgba(164,164,164,80%);}}.vjs-volume-panel{width:28px !important;}.vjs-fullscreen-control,.vjs-play-control{.vjs-icon-placeholder{&::before{font-size:2.4em;top:-5px;}}&.vjs-ended{.vjs-icon-placeholder{&::before{font-size:2.3em;top:-3px;}}}}.vjs-poster{background-size:contain;}video{background-image:url("/System/Icons/48x48/vlc.webp");background-position:center calc(50% - 15px);background-repeat:no-repeat;padding-bottom:30px;}}',
            ]);
            var n = r(1864),
                a = r(67294);
            let s = "video/youtube",
                l = { 1: 4, 2: 2, 3: 1, 4: 0.5 },
                u = {
                    autoplay: !0,
                    controlBar: { children: ["playToggle", "currentTimeDisplay", "progressControl", "durationDisplay", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"], volumePanel: { inline: !1 } },
                    inactivityTimeout: 1e3,
                    preload: "auto",
                    youtube: { enablePrivacyEnhancedMode: !0, ytControls: 2 },
                },
                c = [360, 640],
                p = [480, 854],
                d = { auto: c, hd1080: [1080, 1920], hd1440: [1440, 2560], hd2160: [2160, 3840], hd720: [720, 1280], highres: p, large: p, medium: c, small: [240, 426], tiny: [144, 256] };
            var h = r(6155),
                g = r(44696),
                b = r(48010),
                f = r(20063),
                m = r(58437),
                x = r(97836),
                v = r(6484),
                y = ({ containerRef: e, id: t, loading: r, setLoading: i, url: o }) => {
                    let { readFile: p } = (0, f.o)(),
                        {
                            argument: y,
                            linkElement: w,
                            processes: { [t]: { closing: k = !1, libs: j = [] } = {} },
                        } = (0, m.z)(),
                        { updateWindowSize: T } = (0, b.Z)(t),
                        [z, C] = (0, a.useState)(),
                        [L, $] = (0, a.useState)(),
                        { prependFileToTitle: E } = (0, g.Z)(t),
                        M = (0, a.useCallback)(() => {
                            let { src: e = [] } = z?.getMedia() || {};
                            if (Array.isArray(e) && e.length > 0) {
                                let [{ src: t, url: r }] = e;
                                t.startsWith("blob:") && (r !== o || k) && (0, v.EK)(t);
                            }
                        }, [k, z, o]),
                        R = (0, a.useMemo)(() => (0, v.yk)(o), [o]),
                        P = (0, a.useCallback)(async () => {
                            M();
                            let e = R ? s : (0, h.bh)(o) || x.iS;
                            return { src: R ? o : (0, v.YS)(await p(o), (0, v.G6)() ? e : void 0), type: e, url: o };
                        }, [M, R, p, o]),
                        S = (0, a.useRef)(!1),
                        Z = (0, a.useCallback)(() => {
                            let [r] = e.current?.childNodes ?? [],
                                o = window.videojs(r, u, () => {
                                    o.on("play", () => {
                                        if (S.current) return;
                                        S.current = !0;
                                        let { ytPlayer: e } = o.tech_ || {};
                                        e && $(e);
                                        let [t, r] = e ? d[e.getPlaybackQuality()] || c : [o.videoHeight(), o.videoWidth()],
                                            [i, n] = [(0, v.sI)(), (0, v.E9)()];
                                        if (t && r) {
                                            let o = t + (e ? 0 : 30);
                                            o > i || r > n ? T((o / r) * n, n) : T(o, r);
                                        }
                                    });
                                    let n = () => {
                                        try {
                                            o.isFullscreen() ? o.exitFullscreen() : o.requestFullscreen();
                                        } catch { }
                                    };
                                    r.addEventListener("dblclick", n),
                                        r.addEventListener(
                                            "mousewheel",
                                            (e) => {
                                                o.volume(o.volume() + (e.deltaY > 0 ? -0.1 : 0.1));
                                            },
                                            { passive: !0 }
                                        ),
                                        e.current?.closest("section")?.addEventListener("keydown", ({ key: e, altKey: t, ctrlKey: r }) => {
                                            if (t) l[e] ? T(o.videoHeight() / l[e], o.videoWidth() / l[e]) : "Enter" === e && n();
                                            else if (!r)
                                                switch (e) {
                                                    case " ":
                                                        o.paused() ? o.play() : o.pause();
                                                        break;
                                                    case "ArrowUp":
                                                        o.volume(o.volume() + 0.1);
                                                        break;
                                                    case "ArrowDown":
                                                        o.volume(o.volume() - 0.1);
                                                        break;
                                                    case "ArrowLeft":
                                                        o.currentTime(o.currentTime() - 10);
                                                        break;
                                                    case "ArrowRight":
                                                        o.currentTime(o.currentTime() + 10);
                                                }
                                        }),
                                        C(o),
                                        i(!1),
                                        R || w(t, "peekElement", r),
                                        y?.(t, "play", () => o.play()),
                                        y?.(t, "pause", () => o.pause()),
                                        y?.(t, "paused", (e) => (e && (o.on("pause", () => e(!0)), o.on("play", () => e(!1))), o.paused()));
                                });
                        }, [y, e, t, R, w, i, T]),
                        F = (0, a.useCallback)(
                            (t) => {
                                let r = e.current?.querySelector(".vjs-control-bar");
                                r instanceof HTMLElement && (t === s ? r.classList.add("no-interaction") : r.classList.remove("no-interaction"));
                            },
                            [e]
                        ),
                        A = (0, a.useCallback)(async () => {
                            if (z && o)
                                try {
                                    let e = await P();
                                    (S.current = !1), z.src(e), F(e.type), E(R ? L?.videoTitle || "YouTube" : (0, n.basename)(o));
                                } catch { }
                        }, [P, R, F, z, E, o, L]);
                    (0, a.useEffect)(
                        () => (
                            r &&
                            !z &&
                            (0, v.mb)(j).then(() => {
                                void 0 !== window.videojs && Z();
                            }),
                            () => {
                                k && (M(), z?.dispose());
                            }
                        ),
                        [M, k, j, Z, r, z]
                    ),
                        (0, a.useEffect)(() => {
                            !r && !k && z && o && A();
                        }, [k, A, r, z, o]);
                },
                w = r(7443),
                k = ({ id: e }) => (0, i.jsx)(w.Z, { StyledComponent: o, id: e, useHook: y, children: (0, i.jsx)("video", { className: "video-js vjs-big-play-centered", autoPlay: !0 }) });
        },
        7443: function (e, t, r) {
            var i = r(85893),
                o = r(67294),
                n = r(33333),
                a = r(45279),
                s = r(58437);
            t.Z = (0, o.memo)(({ id: e, useHook: t, StyledComponent: r, children: l }) => {
                let {
                    processes: { [e]: { url: u = "" } = {} },
                } = (0, s.z)(),
                    c = (0, o.useRef)(null),
                    [p, d] = (0, o.useState)(!0),
                    h = (0, o.useMemo)(() => ({ contain: "strict", visibility: p ? "hidden" : "visible" }), [p]);
                return t({ containerRef: c, id: e, loading: p, setLoading: d, url: u }), (0, i.jsxs)(i.Fragment, { children: [p && (0, i.jsx)(n.default, {}), (0, i.jsx)(r, { ref: c, style: h, ...(0, a.Z)({ id: e }), children: l })] });
            });
        },
        33333: function (e, t, r) {
            r.r(t);
            let i = r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = i;
        },
        45279: function (e, t, r) {
            var i = r(1864),
                o = r(67294),
                n = r(59746),
                a = r(23736),
                s = r(89670),
                l = r(20063),
                u = r(58437),
                c = r(76488),
                p = r(97836),
                d = r(6484);
            t.Z = ({ callback: e, directory: t = p.Ll, id: r, onDragLeave: h, onDragOver: g, updatePositions: b }) => {
                let { url: f } = (0, u.z)(),
                    { iconPositions: m, sortOrders: x, setIconPositions: v } = (0, c.k)(),
                    { exists: y, mkdirRecursive: w, updateFolder: k, writeFile: j } = (0, l.o)(),
                    T = (0, o.useCallback)(
                        async (e, t, o) => {
                            if (r) {
                                if (t) {
                                    let n = (0, i.join)(p.Ll, e);
                                    if ((await w(p.Ll), await j(n, t, !0))) return o === s.v.UPDATE_URL && f(r, n), await k(p.Ll, e), (0, i.basename)(n);
                                } else o === s.v.UPDATE_URL && f(r, e);
                            }
                            return "";
                        },
                        [r, w, k, f, j]
                    ),
                    { openTransferDialog: z } = (0, n.Z)();
                return {
                    onDragLeave: h,
                    onDragOver: (e) => {
                        g?.(e), (0, d.nK)(e);
                    },
                    onDrop: (o) => {
                        if (!p.my.has((0, d.RT)(t))) {
                            if (b && o.target instanceof HTMLElement) {
                                let { files: e, text: r } = (0, a.p4)(o);
                                if (0 === e.length && "" === r) return;
                                let n = { x: o.clientX, y: o.clientY },
                                    s = [];
                                if (r) {
                                    try {
                                        s = JSON.parse(r);
                                    } catch { }
                                    if (!Array.isArray(s)) return;
                                    let [e] = s;
                                    if (!e || (e.startsWith(t) && (0, i.basename)(e) === (0, i.relative)(t, e))) return;
                                    s = s.map((e) => (0, i.basename)(e));
                                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (s = s.map((e) => {
                                    if (!m[`${t}/${e}`]) return e;
                                    let r = 0,
                                        o = "";
                                    do (r += 1), (o = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${r})${(0, i.extname)(e)}`);
                                    while (m[o]);
                                    return (0, i.basename)(o);
                                })),
                                    (0, d.vi)(t, o.target, m, x, n, s, v, y);
                            }
                            (0, a.WG)(o, e || T, t, z, !!r);
                        }
                    },
                };
            };
        },
        918: function (e, t, r) {
            r.d(t, {
                BS: function () {
                    return a;
                },
                FC: function () {
                    return o;
                },
                F_: function () {
                    return i;
                },
                wV: function () {
                    return n;
                },
            });
            let i = { bottom: !1, bottomLeft: !1, bottomRight: !1, left: !1, right: !1, top: !1, topLeft: !1, topRight: !1 },
                o = { bottom: !0, bottomLeft: !0, bottomRight: !0, left: !0, right: !0, top: !0, topLeft: !0, topRight: !0 },
                n = 30,
                a = 166,
                s = {
                    cancel: ".cancel",
                    dragHandleClassName: "handle",
                    enableUserSelectHack: !1,
                    minHeight: `${n}px`,
                    minWidth: `${a}px`,
                    resizeHandleStyles: {
                        bottom: { bottom: "-3px", cursor: "ns-resize", height: "6px" },
                        bottomLeft: { bottom: "-3px", cursor: "nesw-resize", height: "12px", left: "-3px", width: "12px" },
                        bottomRight: { bottom: "-3px", cursor: "nwse-resize", height: "12px", right: "-3px", width: "12px" },
                        left: { cursor: "ew-resize", left: "-3px", width: "6px" },
                        right: { cursor: "ew-resize", right: "-3px", width: "6px" },
                        top: { cursor: "ns-resize", height: "6px", top: "-3px" },
                        topLeft: { cursor: "nwse-resize", height: "12px", left: "-3px", top: "-3px", width: "12px" },
                        topRight: { cursor: "nesw-resize", height: "12px", right: "-3px", top: "-3px", width: "12px" },
                    },
                };
            t.ZP = s;
        },
        38365: function (e, t, r) {
            r.d(t, {
                Rf: function () {
                    return s;
                },
                b$: function () {
                    return c;
                },
                hu: function () {
                    return a;
                },
                ix: function () {
                    return u;
                },
                mZ: function () {
                    return l;
                },
            });
            var i = r(918),
                o = r(97836),
                n = r(6484);
            let a = (e, t, r = [], i = 0) => {
                let [a] = e.split(o.CC),
                    s = `${a}${o.CC}`,
                    l = r.find((e) => e.startsWith(s)) || "",
                    { componentWindow: u } = t?.[l] || {},
                    { x: c = 0, y: p = 0, width: d = 0, height: h = 0 } = u?.getBoundingClientRect() || {};
                return !(c + i + d > (0, n.E9)() || p + i + h > (0, n.sI)()) && (c || p) ? { x: c + i, y: p + i } : void 0;
            },
                s = ({ height: e, width: t }) => {
                    let [r, i] = [(0, n.sI)(), (0, n.E9)()];
                    return { x: Math.floor(i / 2 - (0, n.Vy)(t) / 2), y: Math.floor((r - o.bK) / 2 - (0, n.Vy)(e) / 2) };
                },
                l = { BOTTOM: 15, LEFT: 150, RIGHT: 50, TOP: 15 },
                u = (e, t, r = !1) => {
                    let { position: i, size: o } = e || {},
                        { x: a = 0, y: s = 0 } = i || {},
                        { height: u = 0, width: c = 0 } = o || {};
                    return r ? a + l.RIGHT > t.x || a + (0, n.Vy)(c) - l.LEFT < 0 || s + l.BOTTOM > t.y || s + l.TOP < 0 : a < 0 || s < 0 || a + (0, n.Vy)(c) > t.x || s + (0, n.Vy)(u) > t.y;
                },
                c = (e, t) => {
                    let r = Number(e.height),
                        a = Number(e.width),
                        [s, l] = [(0, n.sI)(), (0, n.E9)()],
                        u = s - o.bK,
                        c = Math.max(i.wV, Math.min(r, u)),
                        p = Math.max(i.BS, Math.min(a, l));
                    if (!t) return { height: c, width: p };
                    let d = r === c,
                        h = a === p;
                    return d || h
                        ? d
                            ? h
                                ? { height: c, width: p }
                                : { height: Math.round(c / (a / p)), width: p }
                            : { height: c, width: Math.round(p / (r / c)) }
                        : r > a
                            ? { height: c, width: Math.round(p / (u / c)) }
                            : { height: Math.round(c / (l / p)), width: p };
                };
        },
        44696: function (e, t, r) {
            var i = r(67294),
                o = r(58437),
                n = r(37176),
                a = r(97836);
            t.Z = (e) => {
                let { title: t } = (0, o.z)(),
                    [r] = e.split(a.CC),
                    { title: s } = n.Z[r] || {};
                return {
                    appendFileToTitle: (0, i.useCallback)(
                        (r, i) => {
                            let o = r ? ` - ${r}${i ? ` ${a.xy}` : ""}` : "";
                            t(e, `${s}${o}`);
                        },
                        [e, s, t]
                    ),
                    prependFileToTitle: (0, i.useCallback)(
                        (r, i, o) => {
                            let n = r ? `${i ? `${a.xy} ` : ""}${r}${o ? " " : " - "}` : "";
                            t(e, `${n}${s}`);
                        },
                        [e, s, t]
                    ),
                };
            };
        },
        48010: function (e, t, r) {
            var i = r(10508),
                o = r(67294),
                n = r(38365),
                a = r(58437),
                s = r(76488);
            t.Z = (e) => {
                let { setWindowStates: t } = (0, s.k)(),
                    { processes: { [e]: { lockAspectRatio: r = !1, maximized: l = !1 } = {} } = {} } = (0, a.z)(),
                    {
                        sizes: { titleBar: u },
                    } = (0, i.Fg)();
                return { updateWindowSize: (0, o.useCallback)((i, o) => t((t) => ({ ...t, [e]: { ...t?.[e], maximized: l, size: (0, n.b$)({ height: i + u.height, width: o }, r) } })), [e, r, l, t, u.height]) };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757,3333],{68757:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var i=r(85893);let o=r(10508).ZP.div(['display:flex;height:100%;width:100%;.video-js{height:100%;width:100%;.vjs-big-play-button{display:none;}.vjs-control-bar{background-color:rgb(240,240,240);padding:0 1;&:not(.no-interaction){display:flex !important;opacity:100% !important;}.no-interaction{display:none !important;opacity:0% !important;pointer-events:none !important;}}&.vjs-youtube,&.vjs-fullscreen.vjs-user-inactive{.vjs-control-bar{opacity:0% !important;}}.vjs-button{color:rgb(116,116,116);height:28px;position:relative;width:28px;z-index:0;&::after{background-color:rgb(225,225,225);border:1px solid rgb(173,173,173);content:"";height:calc(100% - 4px);left:0;margin:2px 0 0 2px;position:absolute;top:1px;width:calc(100% - 4px);z-index:-1;}&:hover{&::after{background-color:rgb(229,241,251);border-color:rgb(0,120,215);}}&:active{&::after{background-color:rgb(204,228,247);border-color:rgb(0,84,153);}}}.vjs-current-time,.vjs-duration{display:block;}.vjs-current-time{padding-left:8px;padding-right:2px;}.vjs-duration{padding-left:2px;padding-right:8px;}.vjs-current-time-display,.vjs-duration-display{color:#000;font-family:sans-serif;font-size:11px;}.vjs-picture-in-picture-control{margin:0 -2px;}.vjs-load-progress{border-radius:5px;div{background:linear-gradient( 180deg,rgb(189,189,189) 0%,rgb(219,219,219) 100% );border-radius:5px;}}.vjs-play-progress{background:linear-gradient( 180deg,rgb(44,137,224) 0%,rgb(40,125,204) 100% );border-radius:5px;&::before{color:rgb(237,237,237);text-shadow:1px 2px 3px rgb(160,160,160);-webkit-text-stroke:1px rgba(164,164,164,80%);top:1px;}}.vjs-progress-holder{border-radius:5px;font-size:1.7em !important;height:9px;}.vjs-volume-control{background-color:rgb(240,240,240);border-radius:5px 5px 0 0;left:-28px !important;position:relative;.vjs-volume-bar{height:5.5em;margin:1.5em auto;}.vjs-volume-level{background:linear-gradient( 180deg,rgb(247,76,100) 0%,rgb(125,210,125) 50% );border-radius:5px;color:rgb(237,237,237);font-size:1.5em;text-shadow:1px 2px 3px rgb(160,160,160);-webkit-text-stroke:1px rgba(164,164,164,80%);}}.vjs-volume-panel{width:28px !important;}.vjs-fullscreen-control,.vjs-play-control{.vjs-icon-placeholder{&::before{font-size:2.4em;top:-5px;}}&.vjs-ended{.vjs-icon-placeholder{&::before{font-size:2.3em;top:-3px;}}}}.vjs-poster{background-size:contain;}video{background-image:url("/System/Icons/48x48/vlc.webp");background-position:center calc(50% - 15px);background-repeat:no-repeat;padding-bottom:30px;}}']);var n=r(1864),a=r(67294);let s="video/youtube",l={1:4,2:2,3:1,4:.5},u={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}},c=[360,640],p=[480,854],d={auto:c,hd1080:[1080,1920],hd1440:[1440,2560],hd2160:[2160,3840],hd720:[720,1280],highres:p,large:p,medium:c,small:[240,426],tiny:[144,256]};var h=r(6155),g=r(44696),b=r(48010),f=r(20063),m=r(58437),x=r(97836),v=r(6484),y=({containerRef:e,id:t,loading:r,setLoading:i,url:o})=>{let{readFile:p}=(0,f.o)(),{argument:y,linkElement:w,processes:{[t]:{closing:k=!1,libs:j=[]}={}}}=(0,m.z)(),{updateWindowSize:T}=(0,b.Z)(t),[z,C]=(0,a.useState)(),[L,$]=(0,a.useState)(),{prependFileToTitle:E}=(0,g.Z)(t),M=(0,a.useCallback)(()=>{let{src:e=[]}=z?.getMedia()||{};if(Array.isArray(e)&&e.length>0){let[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==o||k)&&(0,v.EK)(t)}},[k,z,o]),R=(0,a.useMemo)(()=>(0,v.yk)(o),[o]),P=(0,a.useCallback)(async()=>{M();let e=R?s:(0,h.bh)(o)||x.iS;return{src:R?o:(0,v.YS)(await p(o),(0,v.G6)()?e:void 0),type:e,url:o}},[M,R,p,o]),S=(0,a.useRef)(!1),Z=(0,a.useCallback)(()=>{let[r]=e.current?.childNodes??[],o=window.videojs(r,u,()=>{o.on("play",()=>{if(S.current)return;S.current=!0;let{ytPlayer:e}=o.tech_||{};e&&$(e);let[t,r]=e?d[e.getPlaybackQuality()]||c:[o.videoHeight(),o.videoWidth()],[i,n]=[(0,v.sI)(),(0,v.E9)()];if(t&&r){let o=t+(e?0:30);o>i||r>n?T(o/r*n,n):T(o,r)}});let n=()=>{try{o.isFullscreen()?o.exitFullscreen():o.requestFullscreen()}catch{}};r.addEventListener("dblclick",n),r.addEventListener("mousewheel",e=>{o.volume(o.volume()+(e.deltaY>0?-.1:.1))},{passive:!0}),e.current?.closest("section")?.addEventListener("keydown",({key:e,altKey:t,ctrlKey:r})=>{if(t)l[e]?T(o.videoHeight()/l[e],o.videoWidth()/l[e]):"Enter"===e&&n();else if(!r)switch(e){case" ":o.paused()?o.play():o.pause();break;case"ArrowUp":o.volume(o.volume()+.1);break;case"ArrowDown":o.volume(o.volume()-.1);break;case"ArrowLeft":o.currentTime(o.currentTime()-10);break;case"ArrowRight":o.currentTime(o.currentTime()+10)}}),C(o),i(!1),R||w(t,"peekElement",r),y?.(t,"play",()=>o.play()),y?.(t,"pause",()=>o.pause()),y?.(t,"paused",e=>(e&&(o.on("pause",()=>e(!0)),o.on("play",()=>e(!1))),o.paused()))})},[y,e,t,R,w,i,T]),F=(0,a.useCallback)(t=>{let r=e.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(t===s?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))},[e]),A=(0,a.useCallback)(async()=>{if(z&&o)try{let e=await P();S.current=!1,z.src(e),F(e.type),E(R?L?.videoTitle||"YouTube":(0,n.basename)(o))}catch{}},[P,R,F,z,E,o,L]);(0,a.useEffect)(()=>(r&&!z&&(0,v.mb)(j).then(()=>{void 0!==window.videojs&&Z()}),()=>{k&&(M(),z?.dispose())}),[M,k,j,Z,r,z]),(0,a.useEffect)(()=>{!r&&!k&&z&&o&&A()},[k,A,r,z,o])},w=r(7443),k=({id:e})=>(0,i.jsx)(w.Z,{StyledComponent:o,id:e,useHook:y,children:(0,i.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})},7443:function(e,t,r){var i=r(85893),o=r(67294),n=r(33333),a=r(45279),s=r(58437);t.Z=(0,o.memo)(({id:e,useHook:t,StyledComponent:r,children:l})=>{let{processes:{[e]:{url:u=""}={}}}=(0,s.z)(),c=(0,o.useRef)(null),[p,d]=(0,o.useState)(!0),h=(0,o.useMemo)(()=>({contain:"strict",visibility:p?"hidden":"visible"}),[p]);return t({containerRef:c,id:e,loading:p,setLoading:d,url:u}),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(n.default,{}),(0,i.jsx)(r,{ref:c,style:h,...(0,a.Z)({id:e}),children:l})]})})},33333:function(e,t,r){r.r(t);let i=r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i},45279:function(e,t,r){var i=r(1864),o=r(67294),n=r(59746),a=r(23736),s=r(89670),l=r(20063),u=r(58437),c=r(76488),p=r(97836),d=r(6484);t.Z=({callback:e,directory:t=p.Ll,id:r,onDragLeave:h,onDragOver:g,updatePositions:b})=>{let{url:f}=(0,u.z)(),{iconPositions:m,sortOrders:x,setIconPositions:v}=(0,c.k)(),{exists:y,mkdirRecursive:w,updateFolder:k,writeFile:j}=(0,l.o)(),T=(0,o.useCallback)(async(e,t,o)=>{if(r){if(t){let n=(0,i.join)(p.Ll,e);if(await w(p.Ll),await j(n,t,!0))return o===s.v.UPDATE_URL&&f(r,n),await k(p.Ll,e),(0,i.basename)(n)}else o===s.v.UPDATE_URL&&f(r,e)}return""},[r,w,k,f,j]),{openTransferDialog:z}=(0,n.Z)();return{onDragLeave:h,onDragOver:e=>{g?.(e),(0,d.nK)(e)},onDrop:o=>{if(!p.my.has((0,d.RT)(t))){if(b&&o.target instanceof HTMLElement){let{files:e,text:r}=(0,a.p4)(o);if(0===e.length&&""===r)return;let n={x:o.clientX,y:o.clientY},s=[];if(r){try{s=JSON.parse(r)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;s=s.map(e=>(0,i.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!m[`${t}/${e}`])return e;let r=0,o="";do r+=1,o=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${r})${(0,i.extname)(e)}`;while(m[o]);return(0,i.basename)(o)}),(0,d.vi)(t,o.target,m,x,n,s,v,y)}(0,a.WG)(o,e||T,t,z,!!r)}}}}},918:function(e,t,r){r.d(t,{BS:function(){return a},FC:function(){return o},F_:function(){return i},wV:function(){return n}});let i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=s},38365:function(e,t,r){r.d(t,{Rf:function(){return s},b$:function(){return c},hu:function(){return a},ix:function(){return u},mZ:function(){return l}});var i=r(918),o=r(97836),n=r(6484);let a=(e,t,r=[],i=0)=>{let[a]=e.split(o.CC),s=`${a}${o.CC}`,l=r.find(e=>e.startsWith(s))||"",{componentWindow:u}=t?.[l]||{},{x:c=0,y:p=0,width:d=0,height:h=0}=u?.getBoundingClientRect()||{};return!(c+i+d>(0,n.E9)()||p+i+h>(0,n.sI)())&&(c||p)?{x:c+i,y:p+i}:void 0},s=({height:e,width:t})=>{let[r,i]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(i/2-(0,n.Vy)(t)/2),y:Math.floor((r-o.bK)/2-(0,n.Vy)(e)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},u=(e,t,r=!1)=>{let{position:i,size:o}=e||{},{x:a=0,y:s=0}=i||{},{height:u=0,width:c=0}=o||{};return r?a+l.RIGHT>t.x||a+(0,n.Vy)(c)-l.LEFT<0||s+l.BOTTOM>t.y||s+l.TOP<0:a<0||s<0||a+(0,n.Vy)(c)>t.x||s+(0,n.Vy)(u)>t.y},c=(e,t)=>{let r=Number(e.height),a=Number(e.width),[s,l]=[(0,n.sI)(),(0,n.E9)()],u=s-o.bK,c=Math.max(i.wV,Math.min(r,u)),p=Math.max(i.BS,Math.min(a,l));if(!t)return{height:c,width:p};let d=r===c,h=a===p;return d||h?d?h?{height:c,width:p}:{height:Math.round(c/(a/p)),width:p}:{height:c,width:Math.round(p/(r/c))}:r>a?{height:c,width:Math.round(p/(u/c))}:{height:Math.round(c/(l/p)),width:p}}},44696:function(e,t,r){var i=r(67294),o=r(58437),n=r(37176),a=r(97836);t.Z=e=>{let{title:t}=(0,o.z)(),[r]=e.split(a.CC),{title:s}=n.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)((r,i)=>{let o=r?` - ${r}${i?` ${a.xy}`:""}`:"";t(e,`${s}${o}`)},[e,s,t]),prependFileToTitle:(0,i.useCallback)((r,i,o)=>{let n=r?`${i?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${n}${s}`)},[e,s,t])}}},48010:function(e,t,r){var i=r(10508),o=r(67294),n=r(38365),a=r(58437),s=r(76488);t.Z=e=>{let{setWindowStates:t}=(0,s.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:l=!1}={}}={}}=(0,a.z)(),{sizes:{titleBar:u}}=(0,i.Fg)();return{updateWindowSize:(0,o.useCallback)((i,o)=>t(t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,n.b$)({height:i+u.height,width:o},r)}})),[e,r,l,t,u.height])}}}}]);