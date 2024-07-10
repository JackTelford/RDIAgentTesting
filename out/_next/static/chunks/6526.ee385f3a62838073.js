"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6526, 3333],
    {
        86526: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return p;
                    },
                });
            var a = n(85893);
            let r = n(10508).ZP.div([
                'height:100%;width:100%;&.drop{&::before{color:#ffad33;content:"Drop SWF/SPL file here";display:flex;font-size:16px;font-weight:600;height:100%;left:0;place-content:center;place-items:center;position:absolute;top:0;width:100%;}}ruffle-player{height:100%;width:100%;}',
            ]);
            var l = n(1864),
                i = n(67294),
                o = n(44696),
                s = n(20063),
                f = n(58437),
                c = n(6484),
                u = ({ containerRef: e, id: t, setLoading: n, url: a }) => {
                    let { linkElement: r, processes: { [t]: { libs: u = [] } = {} } = {} } = (0, f.z)(),
                        [d, p] = (0, i.useState)(),
                        { appendFileToTitle: m } = (0, o.Z)(t),
                        { readFile: h } = (0, s.o)(),
                        y = (0, i.useCallback)(async () => {
                            e.current?.classList.remove("drop");
                            try {
                                await d?.load({ data: await h(a) });
                            } catch {
                            } finally {
                                n(!1);
                            }
                            m((0, l.basename)(a, (0, l.extname)(a)));
                        }, [m, e, d, h, n, a]);
                    (0, i.useEffect)(() => {
                        (0, c.mb)(u).then(() => {
                            window.RufflePlayer &&
                                ((window.RufflePlayer.config = { allowScriptAccess: !1, autoplay: "on", backgroundColor: "#000000", letterbox: "on", polyfills: !1, preloader: !1, unmuteOverlay: "hidden" }),
                                    p(window.RufflePlayer.newest().createPlayer()),
                                    a || (e.current?.classList.add("drop"), n(!1)));
                        });
                    }, [e, u, n, a]),
                        (0, i.useEffect)(() => (e.current && d && (e.current.append(d), r(t, "peekElement", d)), () => d?.remove()), [e, t, r, d]),
                        (0, i.useEffect)(() => {
                            e.current && d && a && y();
                        }, [e, y, d, a]);
                },
                d = n(7443),
                p = ({ id: e }) => (0, a.jsx)(d.Z, { StyledComponent: r, id: e, useHook: u });
        },
        7443: function (e, t, n) {
            var a = n(85893),
                r = n(67294),
                l = n(33333),
                i = n(45279),
                o = n(58437);
            t.Z = (0, r.memo)(({ id: e, useHook: t, StyledComponent: n, children: s }) => {
                let {
                    processes: { [e]: { url: f = "" } = {} },
                } = (0, o.z)(),
                    c = (0, r.useRef)(null),
                    [u, d] = (0, r.useState)(!0),
                    p = (0, r.useMemo)(() => ({ contain: "strict", visibility: u ? "hidden" : "visible" }), [u]);
                return t({ containerRef: c, id: e, loading: u, setLoading: d, url: f }), (0, a.jsxs)(a.Fragment, { children: [u && (0, a.jsx)(l.default, {}), (0, a.jsx)(n, { ref: c, style: p, ...(0, i.Z)({ id: e }), children: s })] });
            });
        },
        33333: function (e, t, n) {
            n.r(t);
            let a = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = a;
        },
        45279: function (e, t, n) {
            var a = n(1864),
                r = n(67294),
                l = n(59746),
                i = n(23736),
                o = n(89670),
                s = n(20063),
                f = n(58437),
                c = n(76488),
                u = n(97836),
                d = n(6484);
            t.Z = ({ callback: e, directory: t = u.Ll, id: n, onDragLeave: p, onDragOver: m, updatePositions: h }) => {
                let { url: y } = (0, f.z)(),
                    { iconPositions: w, sortOrders: b, setIconPositions: v } = (0, c.k)(),
                    { exists: x, mkdirRecursive: $, updateFolder: g, writeFile: k } = (0, s.o)(),
                    L = (0, r.useCallback)(
                        async (e, t, r) => {
                            if (n) {
                                if (t) {
                                    let l = (0, a.join)(u.Ll, e);
                                    if ((await $(u.Ll), await k(l, t, !0))) return r === o.v.UPDATE_URL && y(n, l), await g(u.Ll, e), (0, a.basename)(l);
                                } else r === o.v.UPDATE_URL && y(n, e);
                            }
                            return "";
                        },
                        [n, $, g, y, k]
                    ),
                    { openTransferDialog: C } = (0, l.Z)();
                return {
                    onDragLeave: p,
                    onDragOver: (e) => {
                        m?.(e), (0, d.nK)(e);
                    },
                    onDrop: (r) => {
                        if (!u.my.has((0, d.RT)(t))) {
                            if (h && r.target instanceof HTMLElement) {
                                let { files: e, text: n } = (0, i.p4)(r);
                                if (0 === e.length && "" === n) return;
                                let l = { x: r.clientX, y: r.clientY },
                                    o = [];
                                if (n) {
                                    try {
                                        o = JSON.parse(n);
                                    } catch { }
                                    if (!Array.isArray(o)) return;
                                    let [e] = o;
                                    if (!e || (e.startsWith(t) && (0, a.basename)(e) === (0, a.relative)(t, e))) return;
                                    o = o.map((e) => (0, a.basename)(e));
                                } else e instanceof FileList ? (o = [...e].map((e) => e.name)) : (o = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (o = o.map((e) => {
                                    if (!w[`${t}/${e}`]) return e;
                                    let n = 0,
                                        r = "";
                                    do (n += 1), (r = `${t}/${(0, a.basename)(e, (0, a.extname)(e))} (${n})${(0, a.extname)(e)}`);
                                    while (w[r]);
                                    return (0, a.basename)(r);
                                })),
                                    (0, d.vi)(t, r.target, w, b, l, o, v, x);
                            }
                            (0, i.WG)(r, e || L, t, C, !!n);
                        }
                    },
                };
            };
        },
        44696: function (e, t, n) {
            var a = n(67294),
                r = n(58437),
                l = n(37176),
                i = n(97836);
            t.Z = (e) => {
                let { title: t } = (0, r.z)(),
                    [n] = e.split(i.CC),
                    { title: o } = l.Z[n] || {};
                return {
                    appendFileToTitle: (0, a.useCallback)(
                        (n, a) => {
                            let r = n ? ` - ${n}${a ? ` ${i.xy}` : ""}` : "";
                            t(e, `${o}${r}`);
                        },
                        [e, o, t]
                    ),
                    prependFileToTitle: (0, a.useCallback)(
                        (n, a, r) => {
                            let l = n ? `${a ? `${i.xy} ` : ""}${n}${r ? " " : " - "}` : "";
                            t(e, `${l}${o}`);
                        },
                        [e, o, t]
                    ),
                };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6526,3333],{86526:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(85893);let r=n(10508).ZP.div(['height:100%;width:100%;&.drop{&::before{color:#ffad33;content:"Drop SWF/SPL file here";display:flex;font-size:16px;font-weight:600;height:100%;left:0;place-content:center;place-items:center;position:absolute;top:0;width:100%;}}ruffle-player{height:100%;width:100%;}']);var l=n(1864),i=n(67294),o=n(44696),s=n(20063),f=n(58437),c=n(6484),u=({containerRef:e,id:t,setLoading:n,url:a})=>{let{linkElement:r,processes:{[t]:{libs:u=[]}={}}={}}=(0,f.z)(),[d,p]=(0,i.useState)(),{appendFileToTitle:m}=(0,o.Z)(t),{readFile:h}=(0,s.o)(),y=(0,i.useCallback)(async()=>{e.current?.classList.remove("drop");try{await d?.load({data:await h(a)})}catch{}finally{n(!1)}m((0,l.basename)(a,(0,l.extname)(a)))},[m,e,d,h,n,a]);(0,i.useEffect)(()=>{(0,c.mb)(u).then(()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),a||(e.current?.classList.add("drop"),n(!1)))})},[e,u,n,a]),(0,i.useEffect)(()=>(e.current&&d&&(e.current.append(d),r(t,"peekElement",d)),()=>d?.remove()),[e,t,r,d]),(0,i.useEffect)(()=>{e.current&&d&&a&&y()},[e,y,d,a])},d=n(7443),p=({id:e})=>(0,a.jsx)(d.Z,{StyledComponent:r,id:e,useHook:u})},7443:function(e,t,n){var a=n(85893),r=n(67294),l=n(33333),i=n(45279),o=n(58437);t.Z=(0,r.memo)(({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:f=""}={}}}=(0,o.z)(),c=(0,r.useRef)(null),[u,d]=(0,r.useState)(!0),p=(0,r.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:c,id:e,loading:u,setLoading:d,url:f}),(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)(l.default,{}),(0,a.jsx)(n,{ref:c,style:p,...(0,i.Z)({id:e}),children:s})]})})},33333:function(e,t,n){n.r(t);let a=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=a},45279:function(e,t,n){var a=n(1864),r=n(67294),l=n(59746),i=n(23736),o=n(89670),s=n(20063),f=n(58437),c=n(76488),u=n(97836),d=n(6484);t.Z=({callback:e,directory:t=u.Ll,id:n,onDragLeave:p,onDragOver:m,updatePositions:h})=>{let{url:y}=(0,f.z)(),{iconPositions:w,sortOrders:b,setIconPositions:v}=(0,c.k)(),{exists:x,mkdirRecursive:$,updateFolder:g,writeFile:k}=(0,s.o)(),L=(0,r.useCallback)(async(e,t,r)=>{if(n){if(t){let l=(0,a.join)(u.Ll,e);if(await $(u.Ll),await k(l,t,!0))return r===o.v.UPDATE_URL&&y(n,l),await g(u.Ll,e),(0,a.basename)(l)}else r===o.v.UPDATE_URL&&y(n,e)}return""},[n,$,g,y,k]),{openTransferDialog:C}=(0,l.Z)();return{onDragLeave:p,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:r=>{if(!u.my.has((0,d.RT)(t))){if(h&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,i.p4)(r);if(0===e.length&&""===n)return;let l={x:r.clientX,y:r.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,a.basename)(e)===(0,a.relative)(t,e))return;o=o.map(e=>(0,a.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=o.map(e=>{if(!w[`${t}/${e}`])return e;let n=0,r="";do n+=1,r=`${t}/${(0,a.basename)(e,(0,a.extname)(e))} (${n})${(0,a.extname)(e)}`;while(w[r]);return(0,a.basename)(r)}),(0,d.vi)(t,r.target,w,b,l,o,v,x)}(0,i.WG)(r,e||L,t,C,!!n)}}}}},44696:function(e,t,n){var a=n(67294),r=n(58437),l=n(37176),i=n(97836);t.Z=e=>{let{title:t}=(0,r.z)(),[n]=e.split(i.CC),{title:o}=l.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)((n,a)=>{let r=n?` - ${n}${a?` ${i.xy}`:""}`:"";t(e,`${o}${r}`)},[e,o,t]),prependFileToTitle:(0,a.useCallback)((n,a,r)=>{let l=n?`${a?`${i.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${l}${o}`)},[e,o,t])}}}}]);