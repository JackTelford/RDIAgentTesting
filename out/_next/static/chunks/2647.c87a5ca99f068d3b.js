"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2647, 3333],
    {
        42647: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return f;
                    },
                });
            var r = n(85893);
            let i = n(10508).ZP.div([
                ".eruda-container{position:relative !important;z-index:1 !important;.eruda-dev-tools{height:100% !important;opacity:100% !important;.eruda-nav-bar-container{.eruda-nav-bar{overflow:hidden;}}}.eruda-entry-btn{display:none;}}",
            ]);
            var a = n(67294),
                o = n(58437),
                s = n(6484);
            let d = { autoScale: !0, defaults: { displaySize: 100, theme: "Monokai Pro", transparency: 0 }, useShadowDom: !1 };
            var l = ({ containerRef: e, id: t, loading: n, setLoading: r, url: i }) => {
                let { processes: { [t]: { closing: l = !1, libs: u = [] } = {} } = {} } = (0, o.z)();
                (0, a.useEffect)(() => {
                    (0, s.mb)(u).then(() => {
                        if (window.eruda && e.current) {
                            let t = e.current.querySelector("div"),
                                n = (0, s.E9)();
                            t &&
                                (window.eruda.init({ ...d, container: t }),
                                    window.eruda.remove("info"),
                                    window.eruda.remove("snippets"),
                                    n < 395 && window.eruda.remove("resources"),
                                    n < 321 && window.eruda.remove("sources"),
                                    window.eruda.show(),
                                    r(!1));
                        }
                    });
                }, [e, u, r]),
                    (0, a.useEffect)(
                        () => (
                            window.eruda && i && !n && !l && window.eruda.show(i),
                            () => {
                                l && window.eruda?.destroy();
                            }
                        ),
                        [l, n, i]
                    );
            },
                u = n(7443),
                f = ({ id: e }) => (0, r.jsx)(u.Z, { StyledComponent: i, id: e, useHook: l, children: (0, r.jsx)("div", {}) });
        },
        7443: function (e, t, n) {
            var r = n(85893),
                i = n(67294),
                a = n(33333),
                o = n(45279),
                s = n(58437);
            t.Z = (0, i.memo)(({ id: e, useHook: t, StyledComponent: n, children: d }) => {
                let {
                    processes: { [e]: { url: l = "" } = {} },
                } = (0, s.z)(),
                    u = (0, i.useRef)(null),
                    [f, c] = (0, i.useState)(!0),
                    m = (0, i.useMemo)(() => ({ contain: "strict", visibility: f ? "hidden" : "visible" }), [f]);
                return t({ containerRef: u, id: e, loading: f, setLoading: c, url: l }), (0, r.jsxs)(r.Fragment, { children: [f && (0, r.jsx)(a.default, {}), (0, r.jsx)(n, { ref: u, style: m, ...(0, o.Z)({ id: e }), children: d })] });
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
                s = n(89670),
                d = n(20063),
                l = n(58437),
                u = n(76488),
                f = n(97836),
                c = n(6484);
            t.Z = ({ callback: e, directory: t = f.Ll, id: n, onDragLeave: m, onDragOver: w, updatePositions: p }) => {
                let { url: v } = (0, l.z)(),
                    { iconPositions: h, sortOrders: y, setIconPositions: b } = (0, u.k)(),
                    { exists: x, mkdirRecursive: g, updateFolder: k, writeFile: E } = (0, d.o)(),
                    L = (0, i.useCallback)(
                        async (e, t, i) => {
                            if (n) {
                                if (t) {
                                    let a = (0, r.join)(f.Ll, e);
                                    if ((await g(f.Ll), await E(a, t, !0))) return i === s.v.UPDATE_URL && v(n, a), await k(f.Ll, e), (0, r.basename)(a);
                                } else i === s.v.UPDATE_URL && v(n, e);
                            }
                            return "";
                        },
                        [n, g, k, v, E]
                    ),
                    { openTransferDialog: j } = (0, a.Z)();
                return {
                    onDragLeave: m,
                    onDragOver: (e) => {
                        w?.(e), (0, c.nK)(e);
                    },
                    onDrop: (i) => {
                        if (!f.my.has((0, c.RT)(t))) {
                            if (p && i.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, o.p4)(i);
                                if (0 === e.length && "" === n) return;
                                let a = { x: i.clientX, y: i.clientY },
                                    s = [];
                                if (n) {
                                    try {
                                        s = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(s)) return;
                                    let [e] = s;
                                    if (!e || (e.startsWith(t) && (0, r.basename)(e) === (0, r.relative)(t, e))) return;
                                    s = s.map((e) => (0, r.basename)(e));
                                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (s = s.map((e) => {
                                    if (!h[`${t}/${e}`]) return e;
                                    let n = 0,
                                        i = "";
                                    do (n += 1), (i = `${t}/${(0, r.basename)(e, (0, r.extname)(e))} (${n})${(0, r.extname)(e)}`);
                                    while (h[i]);
                                    return (0, r.basename)(i);
                                })),
                                    (0, c.vi)(t, i.target, h, y, a, s, b, x);
                            }
                            (0, o.WG)(i, e || L, t, j, !!n);
                        }
                    },
                };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2647,3333],{42647:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(85893);let i=n(10508).ZP.div([".eruda-container{position:relative !important;z-index:1 !important;.eruda-dev-tools{height:100% !important;opacity:100% !important;.eruda-nav-bar-container{.eruda-nav-bar{overflow:hidden;}}}.eruda-entry-btn{display:none;}}"]);var a=n(67294),o=n(58437),s=n(6484);let d={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var l=({containerRef:e,id:t,loading:n,setLoading:r,url:i})=>{let{processes:{[t]:{closing:l=!1,libs:u=[]}={}}={}}=(0,o.z)();(0,a.useEffect)(()=>{(0,s.mb)(u).then(()=>{if(window.eruda&&e.current){let t=e.current.querySelector("div"),n=(0,s.E9)();t&&(window.eruda.init({...d,container:t}),window.eruda.remove("info"),window.eruda.remove("snippets"),n<395&&window.eruda.remove("resources"),n<321&&window.eruda.remove("sources"),window.eruda.show(),r(!1))}})},[e,u,r]),(0,a.useEffect)(()=>(window.eruda&&i&&!n&&!l&&window.eruda.show(i),()=>{l&&window.eruda?.destroy()}),[l,n,i])},u=n(7443),f=({id:e})=>(0,r.jsx)(u.Z,{StyledComponent:i,id:e,useHook:l,children:(0,r.jsx)("div",{})})},7443:function(e,t,n){var r=n(85893),i=n(67294),a=n(33333),o=n(45279),s=n(58437);t.Z=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:d})=>{let{processes:{[e]:{url:l=""}={}}}=(0,s.z)(),u=(0,i.useRef)(null),[f,c]=(0,i.useState)(!0),m=(0,i.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:c,url:l}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(a.default,{}),(0,r.jsx)(n,{ref:u,style:m,...(0,o.Z)({id:e}),children:d})]})})},33333:function(e,t,n){n.r(t);let r=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=r},45279:function(e,t,n){var r=n(1864),i=n(67294),a=n(59746),o=n(23736),s=n(89670),d=n(20063),l=n(58437),u=n(76488),f=n(97836),c=n(6484);t.Z=({callback:e,directory:t=f.Ll,id:n,onDragLeave:m,onDragOver:w,updatePositions:p})=>{let{url:v}=(0,l.z)(),{iconPositions:h,sortOrders:y,setIconPositions:b}=(0,u.k)(),{exists:x,mkdirRecursive:g,updateFolder:k,writeFile:E}=(0,d.o)(),L=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let a=(0,r.join)(f.Ll,e);if(await g(f.Ll),await E(a,t,!0))return i===s.v.UPDATE_URL&&v(n,a),await k(f.Ll,e),(0,r.basename)(a)}else i===s.v.UPDATE_URL&&v(n,e)}return""},[n,g,k,v,E]),{openTransferDialog:j}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,c.nK)(e)},onDrop:i=>{if(!f.my.has((0,c.RT)(t))){if(p&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,o.p4)(i);if(0===e.length&&""===n)return;let a={x:i.clientX,y:i.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;s=s.map(e=>(0,r.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!h[`${t}/${e}`])return e;let n=0,i="";do n+=1,i=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${n})${(0,r.extname)(e)}`;while(h[i]);return(0,r.basename)(i)}),(0,c.vi)(t,i.target,h,y,a,s,b,x)}(0,o.WG)(i,e||L,t,j,!!n)}}}}}}]);