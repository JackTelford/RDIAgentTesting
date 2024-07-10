"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6499, 3333],
    {
        16499: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var i = n(85893),
                r = n(10508);
            let a = r.ZP.div(["display:flex;place-content:center;canvas{background-color:#000;height:100%;width:100%;}"]);
            var o = n(67294),
                s = n(96189),
                c = n(58437),
                l = n(76488),
                u = n(97836),
                f = n(6484),
                d = ({ containerRef: e, id: t, setLoading: n, loading: i }) => {
                    let { processes: { [t]: a } = {} } = (0, c.z)(),
                        { componentWindow: d, defaultSize: w = { height: 0, width: 0 }, libs: h = [], maximized: m = !1 } = a || {},
                        {
                            windowStates: { [t]: p },
                        } = (0, l.k)(),
                        {
                            sizes: { titleBar: v },
                        } = (0, r.Fg)(),
                        y = (0, o.useRef)(!1),
                        g = (0, s.Z)(),
                        { size: b } = p || {};
                    (0, o.useEffect)(() => {
                        i &&
                            (0, f.mb)(h).then(() => {
                                window.ioq3 && ((window.ioq3.viewport = e.current), (window.ioq3.elementPointerLock = !0), window.ioq3.callMain([]), n(!1), g(window.FS, "Quake3"));
                            });
                    }, [e, h, i, g, n]),
                        (0, o.useEffect)(() => {
                            window.ioq3 &&
                                setTimeout(
                                    () => {
                                        y.current = m;
                                        let { height: e, width: t } = (!m && b) || d?.getBoundingClientRect() || {};
                                        if (!e || !t) return;
                                        let n = w ? (0, f.Vy)(w.width) / (0, f.Vy)(w.height) : 4 / 3,
                                            i = (0, f.Vy)(t),
                                            r = i > (0, f.Vy)(e) - v.height,
                                            a = m && r ? i / n : i,
                                            o = a / n;
                                        o > 0 && a > 0 && window.ioq3?.canvas && (window.ioq3.setCanvasSize(a, o), window.ioq3.canvas.setAttribute("style", `object-fit: ${r ? "contain" : "scale-down"}`));
                                    },
                                    m || y.current ? u.jx.WINDOW + 10 : 0
                                );
                        }, [d, w, m, b, v.height]),
                        (0, o.useEffect)(
                            () => () => {
                                try {
                                    window.ioq3?.exit();
                                } catch { }
                                window.AL?.contexts.forEach(({ ctx: e }) => e.close());
                            },
                            []
                        );
                },
                w = n(7443),
                h = ({ id: e }) => (0, i.jsx)(w.Z, { StyledComponent: a, id: e, useHook: d });
        },
        7443: function (e, t, n) {
            var i = n(85893),
                r = n(67294),
                a = n(33333),
                o = n(45279),
                s = n(58437);
            t.Z = (0, r.memo)(({ id: e, useHook: t, StyledComponent: n, children: c }) => {
                let {
                    processes: { [e]: { url: l = "" } = {} },
                } = (0, s.z)(),
                    u = (0, r.useRef)(null),
                    [f, d] = (0, r.useState)(!0),
                    w = (0, r.useMemo)(() => ({ contain: "strict", visibility: f ? "hidden" : "visible" }), [f]);
                return t({ containerRef: u, id: e, loading: f, setLoading: d, url: l }), (0, i.jsxs)(i.Fragment, { children: [f && (0, i.jsx)(a.default, {}), (0, i.jsx)(n, { ref: u, style: w, ...(0, o.Z)({ id: e }), children: c })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let i = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = i;
        },
        96189: function (e, t, n) {
            var i = n(67294),
                r = n(20063);
            t.Z = () => {
                let { mountEmscriptenFs: e, unMapFs: t, updateFolder: n } = (0, r.o)(),
                    a = (0, i.useRef)();
                return (
                    (0, i.useEffect)(
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
                    (0, i.useCallback)(
                        async (t, i) => {
                            if (!t) return;
                            let r = "";
                            try {
                                r = await e(t, i);
                            } catch { }
                            r && (n("/", r), (a.current = r));
                        },
                        [e, n]
                    )
                );
            };
        },
        45279: function (e, t, n) {
            var i = n(1864),
                r = n(67294),
                a = n(59746),
                o = n(23736),
                s = n(89670),
                c = n(20063),
                l = n(58437),
                u = n(76488),
                f = n(97836),
                d = n(6484);
            t.Z = ({ callback: e, directory: t = f.Ll, id: n, onDragLeave: w, onDragOver: h, updatePositions: m }) => {
                let { url: p } = (0, l.z)(),
                    { iconPositions: v, sortOrders: y, setIconPositions: g } = (0, u.k)(),
                    { exists: b, mkdirRecursive: x, updateFolder: k, writeFile: E } = (0, c.o)(),
                    L = (0, r.useCallback)(
                        async (e, t, r) => {
                            if (n) {
                                if (t) {
                                    let a = (0, i.join)(f.Ll, e);
                                    if ((await x(f.Ll), await E(a, t, !0))) return r === s.v.UPDATE_URL && p(n, a), await k(f.Ll, e), (0, i.basename)(a);
                                } else r === s.v.UPDATE_URL && p(n, e);
                            }
                            return "";
                        },
                        [n, x, k, p, E]
                    ),
                    { openTransferDialog: q } = (0, a.Z)();
                return {
                    onDragLeave: w,
                    onDragOver: (e) => {
                        h?.(e), (0, d.nK)(e);
                    },
                    onDrop: (r) => {
                        if (!f.my.has((0, d.RT)(t))) {
                            if (m && r.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, o.p4)(r);
                                if (0 === e.length && "" === n) return;
                                let a = { x: r.clientX, y: r.clientY },
                                    s = [];
                                if (n) {
                                    try {
                                        s = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(s)) return;
                                    let [e] = s;
                                    if (!e || (e.startsWith(t) && (0, i.basename)(e) === (0, i.relative)(t, e))) return;
                                    s = s.map((e) => (0, i.basename)(e));
                                } else e instanceof FileList ? (s = [...e].map((e) => e.name)) : (s = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (s = s.map((e) => {
                                    if (!v[`${t}/${e}`]) return e;
                                    let n = 0,
                                        r = "";
                                    do (n += 1), (r = `${t}/${(0, i.basename)(e, (0, i.extname)(e))} (${n})${(0, i.extname)(e)}`);
                                    while (v[r]);
                                    return (0, i.basename)(r);
                                })),
                                    (0, d.vi)(t, r.target, v, y, a, s, g, b);
                            }
                            (0, o.WG)(r, e || L, t, q, !!n);
                        }
                    },
                };
            };
        },
    },
]);


// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6499,3333],{16499:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(85893),r=n(10508);let a=r.ZP.div(["display:flex;place-content:center;canvas{background-color:#000;height:100%;width:100%;}"]);var o=n(67294),s=n(96189),c=n(58437),l=n(76488),u=n(97836),f=n(6484),d=({containerRef:e,id:t,setLoading:n,loading:i})=>{let{processes:{[t]:a}={}}=(0,c.z)(),{componentWindow:d,defaultSize:w={height:0,width:0},libs:h=[],maximized:m=!1}=a||{},{windowStates:{[t]:p}}=(0,l.k)(),{sizes:{titleBar:v}}=(0,r.Fg)(),y=(0,o.useRef)(!1),g=(0,s.Z)(),{size:b}=p||{};(0,o.useEffect)(()=>{i&&(0,f.mb)(h).then(()=>{window.ioq3&&(window.ioq3.viewport=e.current,window.ioq3.elementPointerLock=!0,window.ioq3.callMain([]),n(!1),g(window.FS,"Quake3"))})},[e,h,i,g,n]),(0,o.useEffect)(()=>{window.ioq3&&setTimeout(()=>{y.current=m;let{height:e,width:t}=!m&&b||d?.getBoundingClientRect()||{};if(!e||!t)return;let n=w?(0,f.Vy)(w.width)/(0,f.Vy)(w.height):4/3,i=(0,f.Vy)(t),r=i>(0,f.Vy)(e)-v.height,a=m&&r?i/n:i,o=a/n;o>0&&a>0&&window.ioq3?.canvas&&(window.ioq3.setCanvasSize(a,o),window.ioq3.canvas.setAttribute("style",`object-fit: ${r?"contain":"scale-down"}`))},m||y.current?u.jx.WINDOW+10:0)},[d,w,m,b,v.height]),(0,o.useEffect)(()=>()=>{try{window.ioq3?.exit()}catch{}window.AL?.contexts.forEach(({ctx:e})=>e.close())},[])},w=n(7443),h=({id:e})=>(0,i.jsx)(w.Z,{StyledComponent:a,id:e,useHook:d})},7443:function(e,t,n){var i=n(85893),r=n(67294),a=n(33333),o=n(45279),s=n(58437);t.Z=(0,r.memo)(({id:e,useHook:t,StyledComponent:n,children:c})=>{let{processes:{[e]:{url:l=""}={}}}=(0,s.z)(),u=(0,r.useRef)(null),[f,d]=(0,r.useState)(!0),w=(0,r.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:d,url:l}),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(a.default,{}),(0,i.jsx)(n,{ref:u,style:w,...(0,o.Z)({id:e}),children:c})]})})},33333:function(e,t,n){n.r(t);let i=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i},96189:function(e,t,n){var i=n(67294),r=n(20063);t.Z=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,r.o)(),a=(0,i.useRef)();return(0,i.useEffect)(()=>()=>{if(a.current){let e=a.current;a.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,i.useCallback)(async(t,i)=>{if(!t)return;let r="";try{r=await e(t,i)}catch{}r&&(n("/",r),a.current=r)},[e,n])}},45279:function(e,t,n){var i=n(1864),r=n(67294),a=n(59746),o=n(23736),s=n(89670),c=n(20063),l=n(58437),u=n(76488),f=n(97836),d=n(6484);t.Z=({callback:e,directory:t=f.Ll,id:n,onDragLeave:w,onDragOver:h,updatePositions:m})=>{let{url:p}=(0,l.z)(),{iconPositions:v,sortOrders:y,setIconPositions:g}=(0,u.k)(),{exists:b,mkdirRecursive:x,updateFolder:k,writeFile:E}=(0,c.o)(),L=(0,r.useCallback)(async(e,t,r)=>{if(n){if(t){let a=(0,i.join)(f.Ll,e);if(await x(f.Ll),await E(a,t,!0))return r===s.v.UPDATE_URL&&p(n,a),await k(f.Ll,e),(0,i.basename)(a)}else r===s.v.UPDATE_URL&&p(n,e)}return""},[n,x,k,p,E]),{openTransferDialog:q}=(0,a.Z)();return{onDragLeave:w,onDragOver:e=>{h?.(e),(0,d.nK)(e)},onDrop:r=>{if(!f.my.has((0,d.RT)(t))){if(m&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,o.p4)(r);if(0===e.length&&""===n)return;let a={x:r.clientX,y:r.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;s=s.map(e=>(0,i.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=s.map(e=>{if(!v[`${t}/${e}`])return e;let n=0,r="";do n+=1,r=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${n})${(0,i.extname)(e)}`;while(v[r]);return(0,i.basename)(r)}),(0,d.vi)(t,r.target,v,y,a,s,g,b)}(0,o.WG)(r,e||L,t,q,!!n)}}}}}}]);