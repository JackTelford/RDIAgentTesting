"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7614],
    {
        57614: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return f;
                    },
                });
            var i = n(85893),
                r = n(1864),
                s = n(67294);
            let a = n(10508).ZP.footer(
                [
                    "align-items:center;background-color:rgb(51,51,51);color:rgb(247,247,247);display:flex;font-size:12px;font-weight:200;height:",
                    ';padding:0 5px;position:relative;white-space:nowrap;width:100%;div{display:flex;margin-top:-1px;padding:0 3px 0 9px;&::after{border-right:1px solid rgb(247,247,247);content:"";height:11px;margin-left:12px;position:relative;top:3px;}&.selected{padding-left:7px;&::after{margin-left:13px;}}}',
                ],
                ({ theme: e }) => e.sizes.fileExplorer.statusBarHeight
            );
            var l = n(20063),
                c = n(72490),
                o = n(6484),
                u = n(46508),
                f = ({ count: e, directory: t, fileDrop: n, selected: f }) => {
                    let { exists: d, lstat: p, stat: g } = (0, l.o)(),
                        [h, x] = (0, s.useState)(u.T),
                        [w, m] = (0, s.useState)(!1),
                        v = (e) => m(e > 225),
                        b = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            (async () =>
                                x(
                                    await f.reduce(async (e, n) => {
                                        let i = await e;
                                        if (-2 === i) return -2;
                                        let s = (0, r.join)(t, n);
                                        try {
                                            if (await d(s)) return (await p(s)).isDirectory() ? -2 : (i === u.T ? 0 : i) + (await g(s)).size;
                                        } catch { }
                                        return e;
                                    }, Promise.resolve(u.T))
                                ))().then((e) => e);
                        }, [t, d, p, f, g]),
                        (0, s.useLayoutEffect)(() => {
                            b.current && v(b.current.getBoundingClientRect().width);
                        }, []),
                        (0, c.Z)(
                            b.current,
                            (0, s.useCallback)(([{ contentRect: { width: e = 0 } = {} }]) => v(e), [])
                        ),
                        (0, i.jsxs)(a, {
                            ref: b,
                            onContextMenuCapture: o.nK,
                            ...n,
                            children: [
                                (0, i.jsxs)("div", { ...(0, o.PS)("Total item count"), children: [e, " item", 1 === e ? "" : "s"] }),
                                w &&
                                f.length > 0 &&
                                (0, i.jsxs)("div", {
                                    className: "selected",
                                    ...(0, o.PS)("Selected item count and size"),
                                    children: [f.length, " item", 1 === f.length ? "" : "s", " selected", h !== u.T && -2 !== h ? `\u00A0\u00A0${(0, o.UR)(h)}` : ""],
                                }),
                            ],
                        })
                    );
                };
        },
        72490: function (e, t, n) {
            var i = n(67294);
            t.Z = (e, t) => {
                let [n, r] = (0, i.useState)();
                (0, i.useEffect)(() => {
                    t && r(new ResizeObserver(t));
                }, [t]),
                    (0, i.useEffect)(
                        () => (
                            e instanceof HTMLElement && n?.observe(e),
                            () => {
                                e instanceof HTMLElement && n?.unobserve(e);
                            }
                        ),
                        [e, n]
                    );
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7614],{57614:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(85893),r=n(1864),s=n(67294);let a=n(10508).ZP.footer(["align-items:center;background-color:rgb(51,51,51);color:rgb(247,247,247);display:flex;font-size:12px;font-weight:200;height:",';padding:0 5px;position:relative;white-space:nowrap;width:100%;div{display:flex;margin-top:-1px;padding:0 3px 0 9px;&::after{border-right:1px solid rgb(247,247,247);content:"";height:11px;margin-left:12px;position:relative;top:3px;}&.selected{padding-left:7px;&::after{margin-left:13px;}}}'],({theme:e})=>e.sizes.fileExplorer.statusBarHeight);var l=n(20063),c=n(72490),o=n(6484),u=n(46508),f=({count:e,directory:t,fileDrop:n,selected:f})=>{let{exists:d,lstat:p,stat:g}=(0,l.o)(),[h,x]=(0,s.useState)(u.T),[w,m]=(0,s.useState)(!1),v=e=>m(e>225),b=(0,s.useRef)(null);return(0,s.useEffect)(()=>{(async()=>x(await f.reduce(async(e,n)=>{let i=await e;if(-2===i)return -2;let s=(0,r.join)(t,n);try{if(await d(s))return(await p(s)).isDirectory()?-2:(i===u.T?0:i)+(await g(s)).size}catch{}return e},Promise.resolve(u.T))))().then(e=>e)},[t,d,p,f,g]),(0,s.useLayoutEffect)(()=>{b.current&&v(b.current.getBoundingClientRect().width)},[]),(0,c.Z)(b.current,(0,s.useCallback)(([{contentRect:{width:e=0}={}}])=>v(e),[])),(0,i.jsxs)(a,{ref:b,onContextMenuCapture:o.nK,...n,children:[(0,i.jsxs)("div",{...(0,o.PS)("Total item count"),children:[e," item",1===e?"":"s"]}),w&&f.length>0&&(0,i.jsxs)("div",{className:"selected",...(0,o.PS)("Selected item count and size"),children:[f.length," item",1===f.length?"":"s"," selected",h!==u.T&&-2!==h?`\u00A0\u00A0${(0,o.UR)(h)}`:""]})]})}},72490:function(e,t,n){var i=n(67294);t.Z=(e,t)=>{let[n,r]=(0,i.useState)();(0,i.useEffect)(()=>{t&&r(new ResizeObserver(t))},[t]),(0,i.useEffect)(()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)}),[e,n])}}}]);