"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3468],
    {
        13468: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    default: function () {
                        return k;
                    },
                });
            var o = i(85893),
                n = i(67294),
                r = i(87180),
                c = i(10508);
            let l = c.ZP.div([
                "display:flex;flex-direction:column;height:100%;div{height:calc(100% - 56px - 80px);overflow-y:scroll;}h2,h4{font-weight:400;}h2{font-size:18px;height:56px;padding:16px 24px;}h4{padding:0 0 6px 23px;}nav{background-color:#fff;height:80px;width:100%;button{background-color:rgb(204,204,204);color:#000;font-size:15px;font-weight:600;height:32px;margin:24px;position:absolute;right:0;width:200px;&:hover{background-color:rgb(216,216,216);}&:active{background-color:#000;color:#fff;}}}",
            ]),
                s = c.ZP.ul(
                    [
                        "border-top:1px solid transparent;padding-bottom:9px;position:relative;width:100%;&::before{border-top:",
                        ';content:"";height:1px;left:17px;position:absolute;top:-1px;width:calc(100% - 34px);}li{&:active{scale:0.975;}&:first-child{margin-top:2px;}&:hover{background-color:rgb(222,222,222);}figure{color:#000;display:flex;padding:0 23px;figcaption{font-size:15px;padding:0 12px;}picture{background-color:rgb(0,120,215);display:flex;height:40px;place-content:center;place-items:center;width:40px;}}&.selected{background-color:rgb(12,131,218);figcaption{color:#fff;}}padding:5px 0;}',
                    ],
                    ({ $hideBorder: e }) => `1px solid ${e ? "transparent" : "rgb(192, 192, 194)"}`
                );
            var a = i(6155),
                p = i(58437),
                d = i(37176),
                h = i(76488),
                x = i(67278),
                u = i(46581),
                f = i(97836),
                g = i(6484);
            let b = new Set(["BoxedWine", "JSDOS", "Marked", "MonacoEditor", "OpenType", "PDF", "Paint", "Photos", "Ruffle", "TinyMCE", "V86", "VideoPlayer", "Vim", "Webamp"]),
                j = ({ icon: e, onClick: t, selected: i, title: n }) =>
                    (0, o.jsx)("li", {
                        className: i ? "selected" : "",
                        children: (0, o.jsx)(x.Z, { onClick: t, children: (0, o.jsxs)("figure", { children: [(0, o.jsx)(u.Z, { alt: n, displaySize: 24, imgSize: 32, src: e }), (0, o.jsx)("figcaption", { children: n })] }) }),
                    });
            var k = (0, n.memo)(({ id: e }) => {
                let { closeWithTransition: t, open: i, processes: { [e]: c } = {} } = (0, p.z)(),
                    { foregroundId: u, setForegroundId: k, updateRecentFiles: m } = (0, h.k)(),
                    { url: v } = c || {},
                    w = v ? (0, g.RT)(v) : "",
                    C = (0, a.Wd)(w),
                    { title: y, icon: Z } = (C && d.Z[C]) || {},
                    [S, z] = (0, n.useState)(C),
                    [E, O] = (0, n.useState)(!1),
                    P = (0, n.useRef)(""),
                    D = (0, n.useCallback)(
                        (o) => {
                            i(o, { url: v }), t(e), v && o && m(v, o);
                        },
                        [t, e, i, m, v]
                    ),
                    K = (0, n.useCallback)(
                        (e) => {
                            P.current === e
                                ? D(e)
                                : ((P.current = e),
                                    setTimeout(() => {
                                        P.current = "";
                                    }, f.jx.DOUBLE_CLICK),
                                    z(e));
                        },
                        [D]
                    ),
                    T = (0, r.Z)(e);
                return (
                    (0, n.useEffect)(() => {
                        let i = u === e;
                        E ? i || t(e) : (i || k(e), setTimeout(() => O(!0), f.jx.WINDOW));
                    }, [E, t, u, e, k]),
                    (0, o.jsxs)(l, {
                        ref: (e) => e?.focus(f.eS),
                        onContextMenu: g.nK,
                        ...T,
                        children: [
                            (0, o.jsx)("h2", { children: "How do you want to open this file?" }),
                            (0, o.jsxs)("div", {
                                children: [
                                    y &&
                                    Z &&
                                    (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)("h4", { children: "Keep using this app" }),
                                            (0, o.jsx)(s, { ...T, children: (0, o.jsx)(j, { icon: Z, onClick: () => K(C), selected: S === C, title: y }, y) }),
                                            (0, o.jsx)("h4", { children: "Other options" }),
                                        ],
                                    }),
                                    (0, o.jsx)(s, {
                                        $hideBorder: !y || !Z,
                                        children: Object.entries(d.Z)
                                            .filter(([e]) => b.has(e) && e !== C)
                                            .map(([e, { icon: t, title: i }]) => (0, o.jsx)(j, { icon: t, onClick: () => K(e), selected: S === e, title: i }, i)),
                                    }),
                                ],
                            }),
                            (0, o.jsx)("nav", { children: (0, o.jsx)(x.Z, { onClick: () => D(S), children: "OK" }) }),
                        ],
                    })
                );
            });
        },
        87180: function (e, t, i) {
            var o = i(67294),
                n = i(58437),
                r = i(97836);
            t.Z = (e) => {
                let { closeWithTransition: t } = (0, n.z)();
                return { onKeyDownCapture: (0, o.useCallback)(({ key: i }) => "Escape" === i && t(e), [t, e]), ...r.LL };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3468],{13468:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var o=i(85893),n=i(67294),r=i(87180),c=i(10508);let l=c.ZP.div(["display:flex;flex-direction:column;height:100%;div{height:calc(100% - 56px - 80px);overflow-y:scroll;}h2,h4{font-weight:400;}h2{font-size:18px;height:56px;padding:16px 24px;}h4{padding:0 0 6px 23px;}nav{background-color:#fff;height:80px;width:100%;button{background-color:rgb(204,204,204);color:#000;font-size:15px;font-weight:600;height:32px;margin:24px;position:absolute;right:0;width:200px;&:hover{background-color:rgb(216,216,216);}&:active{background-color:#000;color:#fff;}}}"]),s=c.ZP.ul(["border-top:1px solid transparent;padding-bottom:9px;position:relative;width:100%;&::before{border-top:",';content:"";height:1px;left:17px;position:absolute;top:-1px;width:calc(100% - 34px);}li{&:active{scale:0.975;}&:first-child{margin-top:2px;}&:hover{background-color:rgb(222,222,222);}figure{color:#000;display:flex;padding:0 23px;figcaption{font-size:15px;padding:0 12px;}picture{background-color:rgb(0,120,215);display:flex;height:40px;place-content:center;place-items:center;width:40px;}}&.selected{background-color:rgb(12,131,218);figcaption{color:#fff;}}padding:5px 0;}'],({$hideBorder:e})=>`1px solid ${e?"transparent":"rgb(192, 192, 194)"}`);var a=i(6155),p=i(58437),d=i(37176),h=i(76488),x=i(67278),u=i(46581),f=i(97836),g=i(6484);let b=new Set(["BoxedWine","JSDOS","Marked","MonacoEditor","OpenType","PDF","Paint","Photos","Ruffle","TinyMCE","V86","VideoPlayer","Vim","Webamp"]),j=({icon:e,onClick:t,selected:i,title:n})=>(0,o.jsx)("li",{className:i?"selected":"",children:(0,o.jsx)(x.Z,{onClick:t,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(u.Z,{alt:n,displaySize:24,imgSize:32,src:e}),(0,o.jsx)("figcaption",{children:n})]})})});var k=(0,n.memo)(({id:e})=>{let{closeWithTransition:t,open:i,processes:{[e]:c}={}}=(0,p.z)(),{foregroundId:u,setForegroundId:k,updateRecentFiles:m}=(0,h.k)(),{url:v}=c||{},w=v?(0,g.RT)(v):"",C=(0,a.Wd)(w),{title:y,icon:Z}=C&&d.Z[C]||{},[S,z]=(0,n.useState)(C),[E,O]=(0,n.useState)(!1),P=(0,n.useRef)(""),D=(0,n.useCallback)(o=>{i(o,{url:v}),t(e),v&&o&&m(v,o)},[t,e,i,m,v]),K=(0,n.useCallback)(e=>{P.current===e?D(e):(P.current=e,setTimeout(()=>{P.current=""},f.jx.DOUBLE_CLICK),z(e))},[D]),T=(0,r.Z)(e);return(0,n.useEffect)(()=>{let i=u===e;E?i||t(e):(i||k(e),setTimeout(()=>O(!0),f.jx.WINDOW))},[E,t,u,e,k]),(0,o.jsxs)(l,{ref:e=>e?.focus(f.eS),onContextMenu:g.nK,...T,children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[y&&Z&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Keep using this app"}),(0,o.jsx)(s,{...T,children:(0,o.jsx)(j,{icon:Z,onClick:()=>K(C),selected:S===C,title:y},y)}),(0,o.jsx)("h4",{children:"Other options"})]}),(0,o.jsx)(s,{$hideBorder:!y||!Z,children:Object.entries(d.Z).filter(([e])=>b.has(e)&&e!==C).map(([e,{icon:t,title:i}])=>(0,o.jsx)(j,{icon:t,onClick:()=>K(e),selected:S===e,title:i},i))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(x.Z,{onClick:()=>D(S),children:"OK"})})]})})},87180:function(e,t,i){var o=i(67294),n=i(58437),r=i(97836);t.Z=e=>{let{closeWithTransition:t}=(0,n.z)();return{onKeyDownCapture:(0,o.useCallback)(({key:i})=>"Escape"===i&&t(e),[t,e]),...r.LL}}}}]);