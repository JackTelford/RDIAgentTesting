"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2280, 3333],
    {
        12280: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return b;
                    },
                });
            var r = n(85893);
            let i = n(10508).ZP.div(["canvas{height:100%;object-fit:contain;width:100%;}"]);
            var a = n(1864),
                o = n(67294);
            let l = "/Program Files/DX-Ball/dx-ball.sav",
                s = [
                    "DXBall",
                    "audioName",
                    "i",
                    "source",
                    "game",
                    "soundon",
                    "saveron",
                    "myFonts",
                    "font",
                    "animframe",
                    "color",
                    "FontList",
                    "lFile",
                    "canvas",
                    "ctx",
                    "file",
                    "c",
                    "descender",
                    "_0x56c3xc",
                    "temp",
                    "cl",
                    "user",
                    "paus",
                    "paused",
                    "naudio",
                    "nflash",
                    "audio",
                    "balls",
                    "bricks",
                    "bullets",
                    "bang",
                    "flash",
                    "records",
                    "lightning",
                    "shadow",
                    "chcur",
                    "highscore",
                    "saver",
                    "y",
                    "x",
                    "mouse",
                    "paddle",
                    "bonus",
                    "requestAnimFrame",
                    "curX",
                    "j",
                    "height",
                    "xp",
                    "yp",
                    "_0x56c3x8",
                    "vm",
                ];
            var c = n(20063),
                u = n(58437),
                d = n(97836),
                f = n(6484),
                m = n(11394),
                w = ({ id: e, setLoading: t }) => {
                    let { readFile: n, writeFile: r, updateFolder: i } = (0, c.o)(),
                        {
                            processes: { [e]: w },
                        } = (0, u.z)(),
                        { closing: p, libs: b = [] } = w || {},
                        h = (0, o.useRef)(),
                        v = (0, o.useRef)(!0);
                    (0, o.useEffect)(() => {
                        n(l)
                            .then((e) => {
                                h.current = e.toString();
                            })
                            .catch(() => {
                                h.current = "";
                            });
                    }, [n]),
                        (0, o.useEffect)(() => {
                            v.current &&
                                ((v.current = !1),
                                    (0, f.mb)(b, void 0, !0).then(() => {
                                        window.DXBall?.init(
                                            () => t(!1),
                                            (e, t) => (
                                                (h.current = `${h.current ? `${h.current}\r` : ""}#&${t}&${e}`
                                                    .split("\r")
                                                    .map((e) => e.split("&"))
                                                    .sort(([, e], [, t]) => Number(t) - Number(e))
                                                    .map(([, e, t], n) => `${n}&${e}&${t}`)
                                                    .join("\r")),
                                                r(l, h.current, !0),
                                                i(a.dirname(l), a.basename(l)),
                                                `${h.current}\r`
                                            )
                                        );
                                    }));
                        }, [b, t, i, r]),
                        (0, o.useEffect)(
                            () => () => {
                                !v.current && p && (window.DXBall.close(), setTimeout(() => (0, m.od)(s), d.jx.WINDOW));
                            },
                            [p]
                        );
                },
                p = n(7443),
                b = ({ id: e }) => (0, r.jsx)(p.Z, { StyledComponent: i, id: e, useHook: w, children: (0, r.jsx)("canvas", { id: "dx-ball", onContextMenuCapture: f.nK }) });
        },
        7443: function (e, t, n) {
            var r = n(85893),
                i = n(67294),
                a = n(33333),
                o = n(45279),
                l = n(58437);
            t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: n, children: s }) => {
                let {
                    processes: { [e]: { url: c = "" } = {} },
                } = (0, l.z)(),
                    u = (0, i.useRef)(null),
                    [d, f] = (0, i.useState)(!0),
                    m = (0, i.useMemo)(() => ({ contain: "strict", visibility: d ? "hidden" : "visible" }), [d]);
                return t({ containerRef: u, id: e, loading: d, setLoading: f, url: c }), (0, r.jsxs)(r.Fragment, { children: [d && (0, r.jsx)(a.default, {}), (0, r.jsx)(n, { ref: u, style: m, ...(0, o.Z)({ id: e }), children: s })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let r = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = r;
        },
        45279: function (e, t, n) {
            var r = n(1864),
                i = n(67294),
                a = n(59746),
                o = n(23736),
                l = n(89670),
                s = n(20063),
                c = n(58437),
                u = n(76488),
                d = n(97836),
                f = n(6484);
            t.Z = ({ callback: e, directory: t = d.Ll, id: n, onDragLeave: m, onDragOver: w, updatePositions: p }) => {
                let { url: b } = (0, c.z)(),
                    { iconPositions: h, sortOrders: v, setIconPositions: x } = (0, u.k)(),
                    { exists: g, mkdirRecursive: y, updateFolder: j, writeFile: $ } = (0, s.o)(),
                    k = (0, i.useCallback)(
                        async (e, t, i) => {
                            if (n) {
                                if (t) {
                                    let a = (0, r.join)(d.Ll, e);
                                    if ((await y(d.Ll), await $(a, t, !0))) return i === l.v.UPDATE_URL && b(n, a), await j(d.Ll, e), (0, r.basename)(a);
                                } else i === l.v.UPDATE_URL && b(n, e);
                            }
                            return "";
                        },
                        [n, y, j, b, $]
                    ),
                    { openTransferDialog: D } = (0, a.Z)();
                return {
                    onDragLeave: m,
                    onDragOver: (e) => {
                        w?.(e), (0, f.nK)(e);
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
                                    if (!h[`${t}/${e}`]) return e;
                                    let n = 0,
                                        i = "";
                                    do (n += 1), (i = `${t}/${(0, r.basename)(e, (0, r.extname)(e))} (${n})${(0, r.extname)(e)}`);
                                    while (h[i]);
                                    return (0, r.basename)(i);
                                })),
                                    (0, f.vi)(t, i.target, h, v, a, l, x, g);
                            }
                            (0, o.WG)(i, e || k, t, D, !!n);
                        }
                    },
                };
            };
        },
        11394: function (e, t, n) {
            n.d(t, {
                H3: function () {
                    return l;
                },
                od: function () {
                    return r;
                },
                wz: function () {
                    return o;
                },
            });
            let r = (e) =>
                e.forEach((e) => {
                    if (e in window)
                        try {
                            delete window[e];
                        } finally {
                            Object.assign(window, { [e]: void 0 });
                        }
                }),
                i = (e) => {
                    let t;
                    Object.defineProperty(window, e, {
                        get: () => (window.lockedGlobals?.[e] ? void 0 : t),
                        set(n) {
                            window.lockedGlobals?.[e] || (t = n);
                        },
                    });
                },
                a = (e, t) => {
                    window.lockedGlobals = { ...window.lockedGlobals, [e]: t };
                },
                o = (e) => a(e, !0),
                l = (e) => {
                    Object.getOwnPropertyDescriptor(window, e) || i(e), a(e, !1);
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2280,3333],{12280:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(85893);let i=n(10508).ZP.div(["canvas{height:100%;object-fit:contain;width:100%;}"]);var a=n(1864),o=n(67294);let l="/Program Files/DX-Ball/dx-ball.sav",s=["DXBall","audioName","i","source","game","soundon","saveron","myFonts","font","animframe","color","FontList","lFile","canvas","ctx","file","c","descender","_0x56c3xc","temp","cl","user","paus","paused","naudio","nflash","audio","balls","bricks","bullets","bang","flash","records","lightning","shadow","chcur","highscore","saver","y","x","mouse","paddle","bonus","requestAnimFrame","curX","j","height","xp","yp","_0x56c3x8","vm"];var c=n(20063),u=n(58437),d=n(97836),f=n(6484),m=n(11394),w=({id:e,setLoading:t})=>{let{readFile:n,writeFile:r,updateFolder:i}=(0,c.o)(),{processes:{[e]:w}}=(0,u.z)(),{closing:p,libs:b=[]}=w||{},h=(0,o.useRef)(),v=(0,o.useRef)(!0);(0,o.useEffect)(()=>{n(l).then(e=>{h.current=e.toString()}).catch(()=>{h.current=""})},[n]),(0,o.useEffect)(()=>{v.current&&(v.current=!1,(0,f.mb)(b,void 0,!0).then(()=>{window.DXBall?.init(()=>t(!1),(e,t)=>(h.current=`${h.current?`${h.current}\r`:""}#&${t}&${e}`.split("\r").map(e=>e.split("&")).sort(([,e],[,t])=>Number(t)-Number(e)).map(([,e,t],n)=>`${n}&${e}&${t}`).join("\r"),r(l,h.current,!0),i(a.dirname(l),a.basename(l)),`${h.current}\r`))}))},[b,t,i,r]),(0,o.useEffect)(()=>()=>{!v.current&&p&&(window.DXBall.close(),setTimeout(()=>(0,m.od)(s),d.jx.WINDOW))},[p])},p=n(7443),b=({id:e})=>(0,r.jsx)(p.Z,{StyledComponent:i,id:e,useHook:w,children:(0,r.jsx)("canvas",{id:"dx-ball",onContextMenuCapture:f.nK})})},7443:function(e,t,n){var r=n(85893),i=n(67294),a=n(33333),o=n(45279),l=n(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:c=""}={}}}=(0,l.z)(),u=(0,i.useRef)(null),[d,f]=(0,i.useState)(!0),m=(0,i.useMemo)(()=>({contain:"strict",visibility:d?"hidden":"visible"}),[d]);return t({containerRef:u,id:e,loading:d,setLoading:f,url:c}),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(a.default,{}),(0,r.jsx)(n,{ref:u,style:m,...(0,o.Z)({id:e}),children:s})]})})},33333:function(e,t,n){n.r(t);let r=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=r},45279:function(e,t,n){var r=n(1864),i=n(67294),a=n(59746),o=n(23736),l=n(89670),s=n(20063),c=n(58437),u=n(76488),d=n(97836),f=n(6484);t.Z=({callback:e,directory:t=d.Ll,id:n,onDragLeave:m,onDragOver:w,updatePositions:p})=>{let{url:b}=(0,c.z)(),{iconPositions:h,sortOrders:v,setIconPositions:x}=(0,u.k)(),{exists:g,mkdirRecursive:y,updateFolder:j,writeFile:$}=(0,s.o)(),k=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let a=(0,r.join)(d.Ll,e);if(await y(d.Ll),await $(a,t,!0))return i===l.v.UPDATE_URL&&b(n,a),await j(d.Ll,e),(0,r.basename)(a)}else i===l.v.UPDATE_URL&&b(n,e)}return""},[n,y,j,b,$]),{openTransferDialog:D}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,f.nK)(e)},onDrop:i=>{if(!d.my.has((0,f.RT)(t))){if(p&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,o.p4)(i);if(0===e.length&&""===n)return;let a={x:i.clientX,y:i.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;l=l.map(e=>(0,r.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!h[`${t}/${e}`])return e;let n=0,i="";do n+=1,i=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${n})${(0,r.extname)(e)}`;while(h[i]);return(0,r.basename)(i)}),(0,f.vi)(t,i.target,h,v,a,l,x,g)}(0,o.WG)(i,e||k,t,D,!!n)}}}}},11394:function(e,t,n){n.d(t,{H3:function(){return l},od:function(){return r},wz:function(){return o}});let r=e=>e.forEach(e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}}),i=e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})},a=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},o=e=>a(e,!0),l=e=>{Object.getOwnPropertyDescriptor(window,e)||i(e),a(e,!1)}}}]);