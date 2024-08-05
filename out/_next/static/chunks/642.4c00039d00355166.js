"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [642, 5341, 3333],
    {
        90642: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return v;
                    },
                });
            var r = n(85893);
            let i = n(10508).ZP.div([
                '&.drop{&::before{color:#f1f1f1;content:"Drop rom file here";display:flex;font-size:16px;font-weight:600;height:100%;left:0;place-content:center;place-items:center;position:absolute;top:0;width:100%;}}',
            ]);
            var a = n(1864),
                o = n(67294),
                l = n(52757),
                c = n(96189),
                s = n(44696),
                u = n(20063),
                d = n(58437),
                f = n(97836),
                w = n(6484),
                m = n(5341),
                p = n(48764).Buffer;
            let h = (e) => Object.entries(l.P).find(([, { ext: t }]) => t.includes(e)) || [];
            var S = ({ containerRef: e, id: t, loading: n, setLoading: r, url: i }) => {
                let { exists: l, mkdirRecursive: S, readFile: b, updateFolder: v, writeFile: y } = (0, u.o)(),
                    E = (0, c.Z)(),
                    { linkElement: g, processes: { [t]: { closing: F = !1, libs: $ = [] } = {} } = {} } = (0, d.z)(),
                    { prependFileToTitle: _ } = (0, s.Z)(t),
                    x = (0, o.useRef)(),
                    T = (0, o.useRef)(""),
                    Z = (0, o.useCallback)(async () => {
                        if (!i) return;
                        if ((e.current?.classList.remove("drop"), T.current)) {
                            if (T.current !== i) {
                                T.current = "";
                                try {
                                    window.EJS_terminate?.();
                                } catch { }
                                if (e.current) {
                                    let t = document.createElement("div");
                                    (t.id = "emulator"), [...e.current.children].forEach((e) => e.remove()), e.current.append(t), Z();
                                }
                            }
                            return;
                        }
                        (T.current = i), (window.EJS_gameName = (0, a.basename)(i, (0, a.extname)(i)));
                        let [t, { core: n = "", zip: o = !1 } = {}] = h((0, w.RT)(i)),
                            c = await b(i);
                        (window.EJS_gameUrl = (0, w.YS)(o ? p.from(await (0, m.zipAsync)({ [(0, a.basename)(i)]: c })) : c)), (window.EJS_core = n);
                        let s = `${(0, a.basename)(i)}.sav`,
                            u = (0, a.join)(f.Tl, s);
                        (window.EJS_onGameStart = ({ detail: { emulator: e } }) => {
                            (async () => {
                                (await l(u)) && e.loadState?.(await b(u)), r(!1), E(window.FS, "EmulatorJs"), (x.current = e);
                            })();
                        }),
                            (window.EJS_onSaveState = ({ screenshot: e, state: t }) => {
                                window.EJS_terminate?.();
                                let n = async () => {
                                    if (((await l(f.Tl)) || (await S(f.Tl)), await y(u, p.from(t), !0))) {
                                        let t = (0, a.join)(f.Xo, f.Tl),
                                            n = (0, a.join)(f.Xo, `${u}${f.Qy}`);
                                        (await l(t)) || (await S(t), v((0, a.dirname)(f.Tl))), await y(n, p.from(e), !0), v(f.Tl, s);
                                    }
                                };
                                t && n();
                            }),
                            (window.EJS_player = "#emulator"),
                            (window.EJS_biosUrl = ""),
                            (window.EJS_pathtodata = "Program Files/EmulatorJs/"),
                            (window.EJS_startOnLoaded = !0),
                            (window.EJS_RESET_VARS = !0),
                            (window.EJS_Buttons = { cacheManage: !1, loadState: !1, quickLoad: !1, quickSave: !1, saveState: !1, screenRecord: !1, screenshot: !1 }),
                            await (0, w.mb)($, void 0, !0),
                            _(`${window.EJS_gameName} (${t})`);
                    }, [e, l, $, S, E, _, b, r, v, i, y]);
                (0, o.useEffect)(() => {
                    i ? Z() : (r(!1), E(window.FS, "EmulatorJs"), e.current?.classList.add("drop"));
                }, [e, Z, E, r, i]),
                    (0, o.useEffect)(() => {
                        if (!n) {
                            let n = e.current?.querySelector("canvas");
                            n instanceof HTMLCanvasElement && g(t, "peekElement", n);
                        }
                        return () => {
                            !n && F && x.current?.elements.buttons.saveState?.click();
                        };
                    }, [F, e, t, g, n]);
            },
                b = n(7443),
                v = ({ id: e }) => (0, r.jsx)(b.Z, { StyledComponent: i, id: e, useHook: S, children: (0, r.jsx)("div", { id: "emulator" }) });
        },
        7443: function (e, t, n) {
            var r = n(85893),
                i = n(67294),
                a = n(33333),
                o = n(45279),
                l = n(58437);
            t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: n, children: c }) => {
                let {
                    processes: { [e]: { url: s = "" } = {} },
                } = (0, l.z)(),
                    u = (0, i.useRef)(null),
                    [d, f] = (0, i.useState)(!0),
                    w = (0, i.useMemo)(() => ({ contain: "strict", visibility: d ? "hidden" : "visible" }), [d]);
                return t({ containerRef: u, id: e, loading: d, setLoading: f, url: s }), (0, r.jsxs)(r.Fragment, { children: [d && (0, r.jsx)(a.default, {}), (0, r.jsx)(n, { ref: u, style: w, ...(0, o.Z)({ id: e }), children: c })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let r = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = r;
        },
        96189: function (e, t, n) {
            var r = n(67294),
                i = n(20063);
            t.Z = () => {
                let { mountEmscriptenFs: e, unMapFs: t, updateFolder: n } = (0, i.o)(),
                    a = (0, r.useRef)();
                return (
                    (0, r.useEffect)(
                        () => () => {
                            if (a.current) {
                                let e = a.current;
                                (a.current = ""),
                                    t(e, !0)
                                        .then(() => n("/", void 0, e))
                                        .catch(() => { });
                            }
                        },
                        [t, n]
                    ),
                    (0, r.useCallback)(
                        async (t, r) => {
                            if (!t) return;
                            let i = "";
                            try {
                                i = await e(t, r);
                            } catch { }
                            i && (n("/", i), (a.current = i));
                        },
                        [e, n]
                    )
                );
            };
        },
        45279: function (e, t, n) {
            var r = n(1864),
                i = n(67294),
                a = n(59746),
                o = n(23736),
                l = n(89670),
                c = n(20063),
                s = n(58437),
                u = n(76488),
                d = n(97836),
                f = n(6484);
            t.Z = ({ callback: e, directory: t = d.Ll, id: n, onDragLeave: w, onDragOver: m, updatePositions: p }) => {
                let { url: h } = (0, s.z)(),
                    { iconPositions: S, sortOrders: b, setIconPositions: v } = (0, u.k)(),
                    { exists: y, mkdirRecursive: E, updateFolder: g, writeFile: F } = (0, c.o)(),
                    $ = (0, i.useCallback)(
                        async (e, t, i) => {
                            if (n) {
                                if (t) {
                                    let a = (0, r.join)(d.Ll, e);
                                    if ((await E(d.Ll), await F(a, t, !0))) return i === l.v.UPDATE_URL && h(n, a), await g(d.Ll, e), (0, r.basename)(a);
                                } else i === l.v.UPDATE_URL && h(n, e);
                            }
                            return "";
                        },
                        [n, E, g, h, F]
                    ),
                    { openTransferDialog: _ } = (0, a.Z)();
                return {
                    onDragLeave: w,
                    onDragOver: (e) => {
                        m?.(e), (0, f.nK)(e);
                    },
                    onDrop: (i) => {
                        if (!d.my.has((0, f.RT)(t))) {
                            if (p && i.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, o.p4)(i);
                                if (0 === e.length && "" === n) return;
                                let a = { x: i.clientX, y: i.clientY },
                                    l = [];
                                if (n) {
                                    try {
                                        l = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, r.basename)(e) === (0, r.relative)(t, e))) return;
                                    l = l.map((e) => (0, r.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!S[`${t}/${e}`]) return e;
                                    let n = 0,
                                        i = "";
                                    do (n += 1), (i = `${t}/${(0, r.basename)(e, (0, r.extname)(e))} (${n})${(0, r.extname)(e)}`);
                                    while (S[i]);
                                    return (0, r.basename)(i);
                                })),
                                    (0, f.vi)(t, i.target, S, b, a, l, v, y);
                            }
                            (0, o.WG)(i, e || $, t, _, !!n);
                        }
                    },
                };
            };
        },
        44696: function (e, t, n) {
            var r = n(67294),
                i = n(58437),
                a = n(37176),
                o = n(97836);
            t.Z = (e) => {
                let { title: t } = (0, i.z)(),
                    [n] = e.split(o.CC),
                    { title: l } = a.Z[n] || {};
                return {
                    appendFileToTitle: (0, r.useCallback)(
                        (n, r) => {
                            let i = n ? ` - ${n}${r ? ` ${o.xy}` : ""}` : "";
                            t(e, `${l}${i}`);
                        },
                        [e, l, t]
                    ),
                    prependFileToTitle: (0, r.useCallback)(
                        (n, r, i) => {
                            let a = n ? `${r ? `${o.xy} ` : ""}${n}${i ? " " : " - "}` : "";
                            t(e, `${a}${l}`);
                        },
                        [e, l, t]
                    ),
                };
            };
        },
        5341: function (e, t, n) {
            n.d(t, {
                addEntryToZippable: function () {
                    return c;
                },
                addFileToZip: function () {
                    return d;
                },
                createZippable: function () {
                    return l;
                },
                isFileInZip: function () {
                    return f;
                },
                unarchive: function () {
                    return w;
                },
                unzip: function () {
                    return s;
                },
                zipAsync: function () {
                    return u;
                },
            });
            var r = n(1864),
                i = n(6484),
                a = n(97836),
                o = n(48764).Buffer;
            let l = (e, t) => e.split("/").reduceRight((e, t) => ({ [t]: e }), [t, a.BF]),
                c = (e, t) => {
                    let [[n, r]] = Object.entries(t);
                    return (e[n] = n in e ? c(e[n], t[n]) : r), e;
                },
                s = (e) =>
                    new Promise((t, r) => {
                        n.e(3778, "high")
                            .then(n.bind(n, 93778))
                            .then(({ unzip: n }) => n(e, (e, n) => (e ? r(e) : t(n))));
                    }),
                u = (e, t = a.BF) =>
                    new Promise((r, i) => {
                        n.e(3778, "high")
                            .then(n.bind(n, 93778))
                            .then(({ zip: n }) => n(e, t, (e, t) => (e ? i(e) : r(t))));
                    }),
                d = async (e, t, n, r) => o.from(await u(c((e.length > 0 && (await s(e))) || {}, l(n, await r(t))))),
                f = (e, t) =>
                    new Promise((r, i) => {
                        n.e(3778, "high")
                            .then(n.bind(n, 93778))
                            .then(({ unzip: n }) => n(e, (e, n) => (e ? i(e) : r(Object.keys(n).includes(t)))));
                    }),
                w = async (e, t) => {
                    if ((window.SevenZip || (await (0, i.mb)(["System/7zip/7zz.es6.js"])), !window.SevenZip)) return {};
                    let n = await window.SevenZip(),
                        a = (0, r.basename)(e),
                        l = (0, r.join)("/", (0, r.basename)(e, (0, r.extname)(e)));
                    n.FS.mkdir(l), n.FS.chdir(l);
                    let c = n.FS.open(a, "w+");
                    n.FS.write(c, t, 0, t.length), n.FS.close(c), n.callMain(["-y", "x", a]);
                    let s = n.FS.readdir(l),
                        u = (e) => (t, i) => {
                            if ([".", "..", a].includes(i)) return t;
                            let c = (0, r.join)(e, i),
                                s = c.replace(l, "");
                            try {
                                n.FS.chmod(c, 511);
                            } catch { }
                            return Object.assign(t, n.FS.isDir(n.FS.stat(c).mode) ? { [(0, r.join)(s, "/")]: o.from(""), ...n.FS.readdir(c).reduce(u(c), {}) } : { [s]: n.FS.readFile(c, { flags: "r" }) }), t;
                        };
                    return s.reduce(u(l), {});
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642,5341,3333],{90642:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(85893);let i=n(10508).ZP.div(['&.drop{&::before{color:#f1f1f1;content:"Drop rom file here";display:flex;font-size:16px;font-weight:600;height:100%;left:0;place-content:center;place-items:center;position:absolute;top:0;width:100%;}}']);var a=n(1864),o=n(67294),l=n(52757),c=n(96189),s=n(44696),u=n(20063),d=n(58437),f=n(97836),w=n(6484),m=n(5341),p=n(48764).Buffer;let h=e=>Object.entries(l.P).find(([,{ext:t}])=>t.includes(e))||[];var S=({containerRef:e,id:t,loading:n,setLoading:r,url:i})=>{let{exists:l,mkdirRecursive:S,readFile:b,updateFolder:v,writeFile:y}=(0,u.o)(),E=(0,c.Z)(),{linkElement:g,processes:{[t]:{closing:F=!1,libs:$=[]}={}}={}}=(0,d.z)(),{prependFileToTitle:_}=(0,s.Z)(t),x=(0,o.useRef)(),T=(0,o.useRef)(""),Z=(0,o.useCallback)(async()=>{if(!i)return;if(e.current?.classList.remove("drop"),T.current){if(T.current!==i){T.current="";try{window.EJS_terminate?.()}catch{}if(e.current){let t=document.createElement("div");t.id="emulator",[...e.current.children].forEach(e=>e.remove()),e.current.append(t),Z()}}return}T.current=i,window.EJS_gameName=(0,a.basename)(i,(0,a.extname)(i));let[t,{core:n="",zip:o=!1}={}]=h((0,w.RT)(i)),c=await b(i);window.EJS_gameUrl=(0,w.YS)(o?p.from(await (0,m.zipAsync)({[(0,a.basename)(i)]:c})):c),window.EJS_core=n;let s=`${(0,a.basename)(i)}.sav`,u=(0,a.join)(f.Tl,s);window.EJS_onGameStart=({detail:{emulator:e}})=>{(async()=>{await l(u)&&e.loadState?.(await b(u)),r(!1),E(window.FS,"EmulatorJs"),x.current=e})()},window.EJS_onSaveState=({screenshot:e,state:t})=>{window.EJS_terminate?.();let n=async()=>{if(await l(f.Tl)||await S(f.Tl),await y(u,p.from(t),!0)){let t=(0,a.join)(f.Xo,f.Tl),n=(0,a.join)(f.Xo,`${u}${f.Qy}`);await l(t)||(await S(t),v((0,a.dirname)(f.Tl))),await y(n,p.from(e),!0),v(f.Tl,s)}};t&&n()},window.EJS_player="#emulator",window.EJS_biosUrl="",window.EJS_pathtodata="Program Files/EmulatorJs/",window.EJS_startOnLoaded=!0,window.EJS_RESET_VARS=!0,window.EJS_Buttons={cacheManage:!1,loadState:!1,quickLoad:!1,quickSave:!1,saveState:!1,screenRecord:!1,screenshot:!1},await (0,w.mb)($,void 0,!0),_(`${window.EJS_gameName} (${t})`)},[e,l,$,S,E,_,b,r,v,i,y]);(0,o.useEffect)(()=>{i?Z():(r(!1),E(window.FS,"EmulatorJs"),e.current?.classList.add("drop"))},[e,Z,E,r,i]),(0,o.useEffect)(()=>{if(!n){let n=e.current?.querySelector("canvas");n instanceof HTMLCanvasElement&&g(t,"peekElement",n)}return()=>{!n&&F&&x.current?.elements.buttons.saveState?.click()}},[F,e,t,g,n])},b=n(7443),v=({id:e})=>(0,r.jsx)(b.Z,{StyledComponent:i,id:e,useHook:S,children:(0,r.jsx)("div",{id:"emulator"})})},7443:function(e,t,n){var r=n(85893),i=n(67294),a=n(33333),o=n(45279),l=n(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:c})=>{let{processes:{[e]:{url:s=""}={}}}=(0,l.z)(),u=(0,i.useRef)(null),[d,f]=(0,i.useState)(!0),w=(0,i.useMemo)(()=>({contain:"strict",visibility:d?"hidden":"visible"}),[d]);return t({containerRef:u,id:e,loading:d,setLoading:f,url:s}),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(a.default,{}),(0,r.jsx)(n,{ref:u,style:w,...(0,o.Z)({id:e}),children:c})]})})},33333:function(e,t,n){n.r(t);let r=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=r},96189:function(e,t,n){var r=n(67294),i=n(20063);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,i.o)(),a=(0,r.useRef)();return(0,r.useEffect)(()=>()=>{if(a.current){let e=a.current;a.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,r.useCallback)(async(t,r)=>{if(!t)return;let i="";try{i=await e(t,r)}catch{}i&&(n("/",i),a.current=i)},[e,n])}},45279:function(e,t,n){var r=n(1864),i=n(67294),a=n(59746),o=n(23736),l=n(89670),c=n(20063),s=n(58437),u=n(76488),d=n(97836),f=n(6484);t.Z=({callback:e,directory:t=d.Ll,id:n,onDragLeave:w,onDragOver:m,updatePositions:p})=>{let{url:h}=(0,s.z)(),{iconPositions:S,sortOrders:b,setIconPositions:v}=(0,u.k)(),{exists:y,mkdirRecursive:E,updateFolder:g,writeFile:F}=(0,c.o)(),$=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let a=(0,r.join)(d.Ll,e);if(await E(d.Ll),await F(a,t,!0))return i===l.v.UPDATE_URL&&h(n,a),await g(d.Ll,e),(0,r.basename)(a)}else i===l.v.UPDATE_URL&&h(n,e)}return""},[n,E,g,h,F]),{openTransferDialog:_}=(0,a.Z)();return{onDragLeave:w,onDragOver:e=>{m?.(e),(0,f.nK)(e)},onDrop:i=>{if(!d.my.has((0,f.RT)(t))){if(p&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,o.p4)(i);if(0===e.length&&""===n)return;let a={x:i.clientX,y:i.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;l=l.map(e=>(0,r.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!S[`${t}/${e}`])return e;let n=0,i="";do n+=1,i=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${n})${(0,r.extname)(e)}`;while(S[i]);return(0,r.basename)(i)}),(0,f.vi)(t,i.target,S,b,a,l,v,y)}(0,o.WG)(i,e||$,t,_,!!n)}}}}},44696:function(e,t,n){var r=n(67294),i=n(58437),a=n(37176),o=n(97836);t.Z=e=>{let{title:t}=(0,i.z)(),[n]=e.split(o.CC),{title:l}=a.Z[n]||{};return{appendFileToTitle:(0,r.useCallback)((n,r)=>{let i=n?` - ${n}${r?` ${o.xy}`:""}`:"";t(e,`${l}${i}`)},[e,l,t]),prependFileToTitle:(0,r.useCallback)((n,r,i)=>{let a=n?`${r?`${o.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${a}${l}`)},[e,l,t])}}},5341:function(e,t,n){n.d(t,{addEntryToZippable:function(){return c},addFileToZip:function(){return d},createZippable:function(){return l},isFileInZip:function(){return f},unarchive:function(){return w},unzip:function(){return s},zipAsync:function(){return u}});var r=n(1864),i=n(6484),a=n(97836),o=n(48764).Buffer;let l=(e,t)=>e.split("/").reduceRight((e,t)=>({[t]:e}),[t,a.BF]),c=(e,t)=>{let[[n,r]]=Object.entries(t);return e[n]=n in e?c(e[n],t[n]):r,e},s=e=>new Promise((t,r)=>{n.e(3778,"high").then(n.bind(n,93778)).then(({unzip:n})=>n(e,(e,n)=>e?r(e):t(n)))}),u=(e,t=a.BF)=>new Promise((r,i)=>{n.e(3778,"high").then(n.bind(n,93778)).then(({zip:n})=>n(e,t,(e,t)=>e?i(e):r(t)))}),d=async(e,t,n,r)=>o.from(await u(c(e.length>0&&await s(e)||{},l(n,await r(t))))),f=(e,t)=>new Promise((r,i)=>{n.e(3778,"high").then(n.bind(n,93778)).then(({unzip:n})=>n(e,(e,n)=>e?i(e):r(Object.keys(n).includes(t))))}),w=async(e,t)=>{if(window.SevenZip||await (0,i.mb)(["System/7zip/7zz.es6.js"]),!window.SevenZip)return{};let n=await window.SevenZip(),a=(0,r.basename)(e),l=(0,r.join)("/",(0,r.basename)(e,(0,r.extname)(e)));n.FS.mkdir(l),n.FS.chdir(l);let c=n.FS.open(a,"w+");n.FS.write(c,t,0,t.length),n.FS.close(c),n.callMain(["-y","x",a]);let s=n.FS.readdir(l),u=e=>(t,i)=>{if([".","..",a].includes(i))return t;let c=(0,r.join)(e,i),s=c.replace(l,"");try{n.FS.chmod(c,511)}catch{}return Object.assign(t,n.FS.isDir(n.FS.stat(c).mode)?{[(0,r.join)(s,"/")]:o.from(""),...n.FS.readdir(c).reduce(u(c),{})}:{[s]:n.FS.readFile(c,{flags:"r"})}),t};return s.reduce(u(l),{})}}}]);