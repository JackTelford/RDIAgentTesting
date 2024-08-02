"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8562, 3333],
    {
        78562: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return d;
                    },
                });
            var a = n(85893);
            let i = n(10508).ZP.div(["height:calc(100% - 30px) !important;width:100% !important;canvas{height:calc(100% + 12px) !important;width:100% !important;}"]);
            var r = n(67294),
                s = n(96189),
                l = n(58437),
                c = n(97836),
                o = n(6484),
                u = ({ containerRef: e, id: t, setLoading: n }) => {
                    let { processes: { [t]: { libs: a = [] } = {} } = {} } = (0, l.z)(),
                        [i, u] = (0, r.useState)(),
                        f = (0, s.Z)();
                    (0, r.useEffect)(() => {
                        let t = e.current?.querySelector("canvas");
                        t instanceof HTMLCanvasElement &&
                            ((window.Module = {
                                canvas: t,
                                postRun: () => {
                                    n(!1), f(window.FS, "SpaceCadet");
                                },
                            }),
                                u(t));
                    }, [e, f, n]),
                        (0, r.useEffect)(
                            () => (
                                i &&
                                setTimeout(() => {
                                    let { height: t, width: n } = e.current?.getBoundingClientRect() || {};
                                    t && n && ((i.style.height = `${t}px`), (i.style.width = `${n}px`), (0, o.mb)(a, void 0, !!window.Module.canvas));
                                }, c.jx.WINDOW),
                                () => {
                                    if (i && window.Module)
                                        try {
                                            window.Module.SDL2?.audioContext.close();
                                        } catch { }
                                }
                            ),
                            [i, e, a]
                        );
                },
                f = n(7443),
                d = ({ id: e }) => (0, a.jsx)(f.Z, { StyledComponent: i, id: e, useHook: u, children: (0, a.jsx)("canvas", { id: "canvas", onContextMenu: o.nK }) });
        },
        7443: function (e, t, n) {
            var a = n(85893),
                i = n(67294),
                r = n(33333),
                s = n(45279),
                l = n(58437);
            t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: n, children: c }) => {
                let {
                    processes: { [e]: { url: o = "" } = {} },
                } = (0, l.z)(),
                    u = (0, i.useRef)(null),
                    [f, d] = (0, i.useState)(!0),
                    m = (0, i.useMemo)(() => ({ contain: "strict", visibility: f ? "hidden" : "visible" }), [f]);
                return t({ containerRef: u, id: e, loading: f, setLoading: d, url: o }), (0, a.jsxs)(a.Fragment, { children: [f && (0, a.jsx)(r.default, {}), (0, a.jsx)(n, { ref: u, style: m, ...(0, s.Z)({ id: e }), children: c })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let a = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = a;
        },
        96189: function (e, t, n) {
            var a = n(67294),
                i = n(20063);
            t.Z = () => {
                let { mountEmscriptenFs: e, unMapFs: t, updateFolder: n } = (0, i.o)(),
                    r = (0, a.useRef)();
                return (
                    (0, a.useEffect)(
                        () => () => {
                            if (r.current) {
                                let e = r.current;
                                (r.current = ""),
                                    t(e, !0)
                                        .then(() => n("/", void 0, e))
                                        .catch(() => { });
                            }
                        },
                        [t, n]
                    ),
                    (0, a.useCallback)(
                        async (t, a) => {
                            if (!t) return;
                            let i = "";
                            try {
                                i = await e(t, a);
                            } catch { }
                            i && (n("/", i), (r.current = i));
                        },
                        [e, n]
                    )
                );
            };
        },
        45279: function (e, t, n) {
            var a = n(1864),
                i = n(67294),
                r = n(59746),
                s = n(23736),
                l = n(89670),
                c = n(20063),
                o = n(58437),
                u = n(76488),
                f = n(97836),
                d = n(6484);
            t.Z = ({ callback: e, directory: t = f.Ll, id: n, onDragLeave: m, onDragOver: h, updatePositions: p }) => {
                let { url: v } = (0, o.z)(),
                    { iconPositions: w, sortOrders: x, setIconPositions: y } = (0, u.k)(),
                    { exists: b, mkdirRecursive: g, updateFolder: C, writeFile: L } = (0, c.o)(),
                    k = (0, i.useCallback)(
                        async (e, t, i) => {
                            if (n) {
                                if (t) {
                                    let r = (0, a.join)(f.Ll, e);
                                    if ((await g(f.Ll), await L(r, t, !0))) return i === l.v.UPDATE_URL && v(n, r), await C(f.Ll, e), (0, a.basename)(r);
                                } else i === l.v.UPDATE_URL && v(n, e);
                            }
                            return "";
                        },
                        [n, g, C, v, L]
                    ),
                    { openTransferDialog: E } = (0, r.Z)();
                return {
                    onDragLeave: m,
                    onDragOver: (e) => {
                        h?.(e), (0, d.nK)(e);
                    },
                    onDrop: (i) => {
                        if (!f.my.has((0, d.RT)(t))) {
                            if (p && i.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, s.p4)(i);
                                if (0 === e.length && "" === n) return;
                                let r = { x: i.clientX, y: i.clientY },
                                    l = [];
                                if (n) {
                                    try {
                                        l = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, a.basename)(e) === (0, a.relative)(t, e))) return;
                                    l = l.map((e) => (0, a.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!w[`${t}/${e}`]) return e;
                                    let n = 0,
                                        i = "";
                                    do (n += 1), (i = `${t}/${(0, a.basename)(e, (0, a.extname)(e))} (${n})${(0, a.extname)(e)}`);
                                    while (w[i]);
                                    return (0, a.basename)(i);
                                })),
                                    (0, d.vi)(t, i.target, w, x, r, l, y, b);
                            }
                            (0, s.WG)(i, e || k, t, E, !!n);
                        }
                    },
                };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8562,3333],{78562:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(85893);let i=n(10508).ZP.div(["height:calc(100% - 30px) !important;width:100% !important;canvas{height:calc(100% + 12px) !important;width:100% !important;}"]);var r=n(67294),s=n(96189),l=n(58437),c=n(97836),o=n(6484),u=({containerRef:e,id:t,setLoading:n})=>{let{processes:{[t]:{libs:a=[]}={}}={}}=(0,l.z)(),[i,u]=(0,r.useState)(),f=(0,s.Z)();(0,r.useEffect)(()=>{let t=e.current?.querySelector("canvas");t instanceof HTMLCanvasElement&&(window.Module={canvas:t,postRun:()=>{n(!1),f(window.FS,"SpaceCadet")}},u(t))},[e,f,n]),(0,r.useEffect)(()=>(i&&setTimeout(()=>{let{height:t,width:n}=e.current?.getBoundingClientRect()||{};t&&n&&(i.style.height=`${t}px`,i.style.width=`${n}px`,(0,o.mb)(a,void 0,!!window.Module.canvas))},c.jx.WINDOW),()=>{if(i&&window.Module)try{window.Module.SDL2?.audioContext.close()}catch{}}),[i,e,a])},f=n(7443),d=({id:e})=>(0,a.jsx)(f.Z,{StyledComponent:i,id:e,useHook:u,children:(0,a.jsx)("canvas",{id:"canvas",onContextMenu:o.nK})})},7443:function(e,t,n){var a=n(85893),i=n(67294),r=n(33333),s=n(45279),l=n(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:c})=>{let{processes:{[e]:{url:o=""}={}}}=(0,l.z)(),u=(0,i.useRef)(null),[f,d]=(0,i.useState)(!0),m=(0,i.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:d,url:o}),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)(r.default,{}),(0,a.jsx)(n,{ref:u,style:m,...(0,s.Z)({id:e}),children:c})]})})},33333:function(e,t,n){n.r(t);let a=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=a},96189:function(e,t,n){var a=n(67294),i=n(20063);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,i.o)(),r=(0,a.useRef)();return(0,a.useEffect)(()=>()=>{if(r.current){let e=r.current;r.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,a.useCallback)(async(t,a)=>{if(!t)return;let i="";try{i=await e(t,a)}catch{}i&&(n("/",i),r.current=i)},[e,n])}},45279:function(e,t,n){var a=n(1864),i=n(67294),r=n(59746),s=n(23736),l=n(89670),c=n(20063),o=n(58437),u=n(76488),f=n(97836),d=n(6484);t.Z=({callback:e,directory:t=f.Ll,id:n,onDragLeave:m,onDragOver:h,updatePositions:p})=>{let{url:v}=(0,o.z)(),{iconPositions:w,sortOrders:x,setIconPositions:y}=(0,u.k)(),{exists:b,mkdirRecursive:g,updateFolder:C,writeFile:L}=(0,c.o)(),k=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let r=(0,a.join)(f.Ll,e);if(await g(f.Ll),await L(r,t,!0))return i===l.v.UPDATE_URL&&v(n,r),await C(f.Ll,e),(0,a.basename)(r)}else i===l.v.UPDATE_URL&&v(n,e)}return""},[n,g,C,v,L]),{openTransferDialog:E}=(0,r.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,d.nK)(e)},onDrop:i=>{if(!f.my.has((0,d.RT)(t))){if(p&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,s.p4)(i);if(0===e.length&&""===n)return;let r={x:i.clientX,y:i.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,a.basename)(e)===(0,a.relative)(t,e))return;l=l.map(e=>(0,a.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!w[`${t}/${e}`])return e;let n=0,i="";do n+=1,i=`${t}/${(0,a.basename)(e,(0,a.extname)(e))} (${n})${(0,a.extname)(e)}`;while(w[i]);return(0,a.basename)(i)}),(0,d.vi)(t,i.target,w,x,r,l,y,b)}(0,s.WG)(i,e||k,t,E,!!n)}}}}}}]);