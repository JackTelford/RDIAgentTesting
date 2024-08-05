"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9580, 3333],
    {
        79580: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return f;
                    },
                });
            var o = r(85893),
                n = r(10508),
                i = r(18680),
                a = r(97836);
            let l = n.ZP.div(
                [
                    "article{",
                    ';background-color:#f9f9f9;box-sizing:border-box;font-size:16px;height:100%;line-height:1.5;overflow-y:scroll;padding:16px 32px;width:100%;word-wrap:break-word;*{all:revert;user-select:text;}a{color:#0366d6;text-decoration:none;&:hover{text-decoration:underline;}}header{display:flex;}h1,h2{border-bottom:1px solid #ccc;margin:10px 0;}h1{font-size:2em;padding:9px 0;header &{margin:0;}&:first-of-type{margin-top:0;}}h2{font-size:1.5em;padding:7px 0;}h3{font-size:1em;padding:5px 0;}ul{line-height:1.6;padding-inline-start:30px;}nav{background:#fff;border:1px solid #ddd;border-radius:3px;margin-right:10px;> ul{font-size:14px;list-style-type:none;margin:10px 0;padding:0;position:sticky;top:5px;> li{min-width:125px;padding:0 15px;> ul{padding-left:25px;> li{font-size:0.8em;}}}}.selected{color:#111;font-weight:700;&:hover{text-decoration:none;}}}table{border:1px solid #ddd;border-collapse:collapse;border-spacing:0;td,th{border:1px solid #ddd;padding:5px;}}pre{background-color:#f6f8fa;border-radius:3px;font-family:SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:85%;line-height:1.45;overflow:auto;padding:16px;}code:not([class]){background-color:rgba(27,31,35,5%);border-radius:3px;font-size:85%;margin:0;padding:0.2em 0.4em;}}',
                ],
                (0, i.Z)(a.BQ, 0, 0, "light")
            );
            var c = r(1864),
                d = r(67294),
                b = r(44696),
                s = r(20063),
                u = r(58437),
                g = r(6484),
                p = r(21054),
                A = ({ containerRef: e, id: t, loading: r, setLoading: o, url: n }) => {
                    let { readFile: i } = (0, s.o)(),
                        { prependFileToTitle: a } = (0, b.Z)(t),
                        { processes: { [t]: { libs: l = [] } = {} } = {} } = (0, u.z)(),
                        A = (0, p.p)(),
                        m = (0, d.useCallback)(async () => {
                            let t = await i(n),
                                r = e.current?.querySelector("article");
                            r instanceof HTMLElement &&
                                ((r.innerHTML = window.DOMPurify.sanitize(window.marked.parse(t.toString(), { headerIds: !1, mangle: !1 }))),
                                    r.querySelectorAll("a").forEach((e) => e.addEventListener("click", (t) => A(t, e.href || "", e.pathname, e.textContent || ""))),
                                    (r.scrollTop = 0)),
                                a((0, c.basename)(n));
                        }, [e, A, a, i, n]);
                    (0, d.useEffect)(() => {
                        r &&
                            (0, g.mb)(l).then(() => {
                                window.marked && o(!1);
                            });
                    }, [l, r, o]),
                        (0, d.useEffect)(() => {
                            !r && n && m();
                        }, [m, r, n]);
                },
                m = r(7443),
                f = ({ id: e }) => (0, o.jsx)(m.Z, { StyledComponent: l, id: e, useHook: A, children: (0, o.jsx)("article", {}) });
        },
        30595: function (e, t, r) {
            r.d(t, {
                Fg: function () {
                    return n;
                },
                VT: function () {
                    return l;
                },
                Wt: function () {
                    return i;
                },
            });
            var o = r(97836);
            let n = (e) => e?.mode.isReadOnly() || !e?.getContent(),
                i = (e, t) => {
                    let r = e.editorContainer?.querySelector(".tox-editor-header");
                    r instanceof HTMLDivElement &&
                        r.addEventListener(
                            "click",
                            () => {
                                r.removeAttribute("title"), e.mode.set("design"), t();
                            },
                            o.K7
                        ),
                        e.mode.set("readonly");
                },
                a = new Set(["wikipedia.org", "archive.org"]),
                l = (e) => {
                    if (!e) return !1;
                    try {
                        let { hostname: t } = new URL(e),
                            [, r, o] = t.split(".");
                        return a.has(`${r}.${o}`) || a.has(t);
                    } catch {
                        return !1;
                    }
                };
        },
        7443: function (e, t, r) {
            var o = r(85893),
                n = r(67294),
                i = r(33333),
                a = r(45279),
                l = r(58437);
            t.Z = (0, n.memo)(({ id: e, useHook: t, StyledComponent: r, children: c }) => {
                let {
                    processes: { [e]: { url: d = "" } = {} },
                } = (0, l.z)(),
                    b = (0, n.useRef)(null),
                    [s, u] = (0, n.useState)(!0),
                    g = (0, n.useMemo)(() => ({ contain: "strict", visibility: s ? "hidden" : "visible" }), [s]);
                return t({ containerRef: b, id: e, loading: s, setLoading: u, url: d }), (0, o.jsxs)(o.Fragment, { children: [s && (0, o.jsx)(i.default, {}), (0, o.jsx)(r, { ref: b, style: g, ...(0, a.Z)({ id: e }), children: c })] });
            });
        },
        33333: function (e, t, r) {
            r.r(t);
            let o = r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = o;
        },
        45279: function (e, t, r) {
            var o = r(1864),
                n = r(67294),
                i = r(59746),
                a = r(23736),
                l = r(89670),
                c = r(20063),
                d = r(58437),
                b = r(76488),
                s = r(97836),
                u = r(6484);
            t.Z = ({ callback: e, directory: t = s.Ll, id: r, onDragLeave: g, onDragOver: p, updatePositions: A }) => {
                let { url: m } = (0, d.z)(),
                    { iconPositions: f, sortOrders: k, setIconPositions: h } = (0, b.k)(),
                    { exists: x, mkdirRecursive: w, updateFolder: v, writeFile: y } = (0, c.o)(),
                    E = (0, n.useCallback)(
                        async (e, t, n) => {
                            if (r) {
                                if (t) {
                                    let i = (0, o.join)(s.Ll, e);
                                    if ((await w(s.Ll), await y(i, t, !0))) return n === l.v.UPDATE_URL && m(r, i), await v(s.Ll, e), (0, o.basename)(i);
                                } else n === l.v.UPDATE_URL && m(r, e);
                            }
                            return "";
                        },
                        [r, w, v, m, y]
                    ),
                    { openTransferDialog: z } = (0, i.Z)();
                return {
                    onDragLeave: g,
                    onDragOver: (e) => {
                        p?.(e), (0, u.nK)(e);
                    },
                    onDrop: (n) => {
                        if (!s.my.has((0, u.RT)(t))) {
                            if (A && n.target instanceof HTMLElement) {
                                let { files: e, text: r } = (0, a.p4)(n);
                                if (0 === e.length && "" === r) return;
                                let i = { x: n.clientX, y: n.clientY },
                                    l = [];
                                if (r) {
                                    try {
                                        l = JSON.parse(r);
                                    } catch { }
                                    if (!Array.isArray(l)) return;
                                    let [e] = l;
                                    if (!e || (e.startsWith(t) && (0, o.basename)(e) === (0, o.relative)(t, e))) return;
                                    l = l.map((e) => (0, o.basename)(e));
                                } else e instanceof FileList ? (l = [...e].map((e) => e.name)) : (l = [...e].map((e) => e.getAsFile()?.name || "").filter(Boolean));
                                (l = l.map((e) => {
                                    if (!f[`${t}/${e}`]) return e;
                                    let r = 0,
                                        n = "";
                                    do (r += 1), (n = `${t}/${(0, o.basename)(e, (0, o.extname)(e))} (${r})${(0, o.extname)(e)}`);
                                    while (f[n]);
                                    return (0, o.basename)(n);
                                })),
                                    (0, u.vi)(t, n.target, f, k, i, l, h, x);
                            }
                            (0, a.WG)(n, e || E, t, z, !!r);
                        }
                    },
                };
            };
        },
        44696: function (e, t, r) {
            var o = r(67294),
                n = r(58437),
                i = r(37176),
                a = r(97836);
            t.Z = (e) => {
                let { title: t } = (0, n.z)(),
                    [r] = e.split(a.CC),
                    { title: l } = i.Z[r] || {};
                return {
                    appendFileToTitle: (0, o.useCallback)(
                        (r, o) => {
                            let n = r ? ` - ${r}${o ? ` ${a.xy}` : ""}` : "";
                            t(e, `${l}${n}`);
                        },
                        [e, l, t]
                    ),
                    prependFileToTitle: (0, o.useCallback)(
                        (r, o, n) => {
                            let i = r ? `${o ? `${a.xy} ` : ""}${r}${n ? " " : " - "}` : "";
                            t(e, `${i}${l}`);
                        },
                        [e, l, t]
                    ),
                };
            };
        },
        21054: function (e, t, r) {
            r.d(t, {
                p: function () {
                    return d;
                },
            });
            var o = r(1864),
                n = r(67294),
                i = r(30595),
                a = r(6155),
                l = r(58437),
                c = r(6484);
            let d = () => {
                let { open: e } = (0, l.z)();
                return (0, n.useCallback)(
                    (t, r, n, l) => {
                        if (((0, c.nK)(t), (0, c.yk)(r))) e("VideoPlayer", { url: r });
                        else if ((0, i.VT)(r)) e("Browser", { initialTitle: l, url: r });
                        else if (n && "" !== (0, o.relative)(decodeURI((r.startsWith("/") ? r : `/${r}`).replace(window.location.origin, "")), decodeURI(n))) window.open(r, "_blank", "noopener, noreferrer");
                        else {
                            let t = (0, a.Wd)((0, c.RT)(n));
                            t && e(t, { url: decodeURI(n) });
                        }
                    },
                    [e]
                );
            };
        },
        18680: function (e, t, r) {
            r.d(t, {
                Z: function () {
                    return a;
                },
            });
            var o = r(10508),
                n = r(97836);
            let i = {
                dark: { active: "rgb(166, 166, 166)", blendMode: "color-burn", buttonHover: "rgb(55, 55, 55)", thumb: "rgb(77, 77, 77)", thumbHover: "rgb(122, 122, 122)", track: "rgb(23, 23, 23)" },
                light: { active: "rgb(96, 96, 96)", blendMode: "color-dodge", buttonHover: "rgb(218, 218, 218)", thumb: "rgb(205, 205, 205)", thumbHover: "rgb(166, 166, 166)", track: "rgb(240, 240, 240)" },
            };
            var a = (e = n.BQ, t = 0, r = 0, a = "dark") =>
                (0, o.iv)(
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
                    i[a].thumb,
                    i[a].track,
                    e,
                    e,
                    i[a].track,
                    i[a].thumb,
                    i[a].thumb,
                    i[a].thumbHover,
                    i[a].active,
                    i[a].track,
                    i[a].track,
                    e ? `${e}px` : "initial",
                    i[a].buttonHover,
                    i[a].active,
                    0 === t ? "center" : `${t}px`,
                    0 === r ? "center" : `${r}px`,
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",
                    i[a].blendMode
                );
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9580,3333],{79580:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var o=r(85893),n=r(10508),i=r(18680),a=r(97836);let l=n.ZP.div(["article{",';background-color:#f9f9f9;box-sizing:border-box;font-size:16px;height:100%;line-height:1.5;overflow-y:scroll;padding:16px 32px;width:100%;word-wrap:break-word;*{all:revert;user-select:text;}a{color:#0366d6;text-decoration:none;&:hover{text-decoration:underline;}}header{display:flex;}h1,h2{border-bottom:1px solid #ccc;margin:10px 0;}h1{font-size:2em;padding:9px 0;header &{margin:0;}&:first-of-type{margin-top:0;}}h2{font-size:1.5em;padding:7px 0;}h3{font-size:1em;padding:5px 0;}ul{line-height:1.6;padding-inline-start:30px;}nav{background:#fff;border:1px solid #ddd;border-radius:3px;margin-right:10px;> ul{font-size:14px;list-style-type:none;margin:10px 0;padding:0;position:sticky;top:5px;> li{min-width:125px;padding:0 15px;> ul{padding-left:25px;> li{font-size:0.8em;}}}}.selected{color:#111;font-weight:700;&:hover{text-decoration:none;}}}table{border:1px solid #ddd;border-collapse:collapse;border-spacing:0;td,th{border:1px solid #ddd;padding:5px;}}pre{background-color:#f6f8fa;border-radius:3px;font-family:SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:85%;line-height:1.45;overflow:auto;padding:16px;}code:not([class]){background-color:rgba(27,31,35,5%);border-radius:3px;font-size:85%;margin:0;padding:0.2em 0.4em;}}'],(0,i.Z)(a.BQ,0,0,"light"));var c=r(1864),d=r(67294),b=r(44696),s=r(20063),u=r(58437),g=r(6484),p=r(21054),A=({containerRef:e,id:t,loading:r,setLoading:o,url:n})=>{let{readFile:i}=(0,s.o)(),{prependFileToTitle:a}=(0,b.Z)(t),{processes:{[t]:{libs:l=[]}={}}={}}=(0,u.z)(),A=(0,p.p)(),m=(0,d.useCallback)(async()=>{let t=await i(n),r=e.current?.querySelector("article");r instanceof HTMLElement&&(r.innerHTML=window.DOMPurify.sanitize(window.marked.parse(t.toString(),{headerIds:!1,mangle:!1})),r.querySelectorAll("a").forEach(e=>e.addEventListener("click",t=>A(t,e.href||"",e.pathname,e.textContent||""))),r.scrollTop=0),a((0,c.basename)(n))},[e,A,a,i,n]);(0,d.useEffect)(()=>{r&&(0,g.mb)(l).then(()=>{window.marked&&o(!1)})},[l,r,o]),(0,d.useEffect)(()=>{!r&&n&&m()},[m,r,n])},m=r(7443),f=({id:e})=>(0,o.jsx)(m.Z,{StyledComponent:l,id:e,useHook:A,children:(0,o.jsx)("article",{})})},30595:function(e,t,r){r.d(t,{Fg:function(){return n},VT:function(){return l},Wt:function(){return i}});var o=r(97836);let n=e=>e?.mode.isReadOnly()||!e?.getContent(),i=(e,t)=>{let r=e.editorContainer?.querySelector(".tox-editor-header");r instanceof HTMLDivElement&&r.addEventListener("click",()=>{r.removeAttribute("title"),e.mode.set("design"),t()},o.K7),e.mode.set("readonly")},a=new Set(["wikipedia.org","archive.org"]),l=e=>{if(!e)return!1;try{let{hostname:t}=new URL(e),[,r,o]=t.split(".");return a.has(`${r}.${o}`)||a.has(t)}catch{return!1}}},7443:function(e,t,r){var o=r(85893),n=r(67294),i=r(33333),a=r(45279),l=r(58437);t.Z=(0,n.memo)(({id:e,useHook:t,StyledComponent:r,children:c})=>{let{processes:{[e]:{url:d=""}={}}}=(0,l.z)(),b=(0,n.useRef)(null),[s,u]=(0,n.useState)(!0),g=(0,n.useMemo)(()=>({contain:"strict",visibility:s?"hidden":"visible"}),[s]);return t({containerRef:b,id:e,loading:s,setLoading:u,url:d}),(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(i.default,{}),(0,o.jsx)(r,{ref:b,style:g,...(0,a.Z)({id:e}),children:c})]})})},33333:function(e,t,r){r.r(t);let o=r(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=o},45279:function(e,t,r){var o=r(1864),n=r(67294),i=r(59746),a=r(23736),l=r(89670),c=r(20063),d=r(58437),b=r(76488),s=r(97836),u=r(6484);t.Z=({callback:e,directory:t=s.Ll,id:r,onDragLeave:g,onDragOver:p,updatePositions:A})=>{let{url:m}=(0,d.z)(),{iconPositions:f,sortOrders:k,setIconPositions:h}=(0,b.k)(),{exists:x,mkdirRecursive:w,updateFolder:v,writeFile:y}=(0,c.o)(),E=(0,n.useCallback)(async(e,t,n)=>{if(r){if(t){let i=(0,o.join)(s.Ll,e);if(await w(s.Ll),await y(i,t,!0))return n===l.v.UPDATE_URL&&m(r,i),await v(s.Ll,e),(0,o.basename)(i)}else n===l.v.UPDATE_URL&&m(r,e)}return""},[r,w,v,m,y]),{openTransferDialog:z}=(0,i.Z)();return{onDragLeave:g,onDragOver:e=>{p?.(e),(0,u.nK)(e)},onDrop:n=>{if(!s.my.has((0,u.RT)(t))){if(A&&n.target instanceof HTMLElement){let{files:e,text:r}=(0,a.p4)(n);if(0===e.length&&""===r)return;let i={x:n.clientX,y:n.clientY},l=[];if(r){try{l=JSON.parse(r)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,o.basename)(e)===(0,o.relative)(t,e))return;l=l.map(e=>(0,o.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=l.map(e=>{if(!f[`${t}/${e}`])return e;let r=0,n="";do r+=1,n=`${t}/${(0,o.basename)(e,(0,o.extname)(e))} (${r})${(0,o.extname)(e)}`;while(f[n]);return(0,o.basename)(n)}),(0,u.vi)(t,n.target,f,k,i,l,h,x)}(0,a.WG)(n,e||E,t,z,!!r)}}}}},44696:function(e,t,r){var o=r(67294),n=r(58437),i=r(37176),a=r(97836);t.Z=e=>{let{title:t}=(0,n.z)(),[r]=e.split(a.CC),{title:l}=i.Z[r]||{};return{appendFileToTitle:(0,o.useCallback)((r,o)=>{let n=r?` - ${r}${o?` ${a.xy}`:""}`:"";t(e,`${l}${n}`)},[e,l,t]),prependFileToTitle:(0,o.useCallback)((r,o,n)=>{let i=r?`${o?`${a.xy} `:""}${r}${n?" ":" - "}`:"";t(e,`${i}${l}`)},[e,l,t])}}},21054:function(e,t,r){r.d(t,{p:function(){return d}});var o=r(1864),n=r(67294),i=r(30595),a=r(6155),l=r(58437),c=r(6484);let d=()=>{let{open:e}=(0,l.z)();return(0,n.useCallback)((t,r,n,l)=>{if((0,c.nK)(t),(0,c.yk)(r))e("VideoPlayer",{url:r});else if((0,i.VT)(r))e("Browser",{initialTitle:l,url:r});else if(n&&""!==(0,o.relative)(decodeURI((r.startsWith("/")?r:`/${r}`).replace(window.location.origin,"")),decodeURI(n)))window.open(r,"_blank","noopener, noreferrer");else{let t=(0,a.Wd)((0,c.RT)(n));t&&e(t,{url:decodeURI(n)})}},[e])}},18680:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(10508),n=r(97836);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=(e=n.BQ,t=0,r=0,a="dark")=>(0,o.iv)(["overflow:auto;scrollbar-gutter:stable;@supports not selector(::-webkit-scrollbar){scrollbar-color:"," ",";}&::-webkit-scrollbar{height:","px;width:","px;}&::-webkit-scrollbar-corner,&::-webkit-scrollbar-track{background-color:",";}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",";}&::-webkit-scrollbar-thumb:vertical{background-clip:padding-box;background-color:",";border-left:1px solid transparent;border-right:1px solid transparent;}&::-webkit-scrollbar-thumb:horizontal{border-bottom:1px solid transparent;border-top:1px solid transparent;}&::-webkit-scrollbar-thumb:hover{background-color:",";}&::-webkit-scrollbar-thumb:active{background-color:",";}&::-webkit-scrollbar-button:single-button{background-clip:padding-box;background-color:",";background-position:center 4px;background-repeat:no-repeat;background-size:10px;border:1px solid ",";display:block;height:",";&:hover{background-color:",";}&:active{background-color:",";}}&::-webkit-scrollbar-button:single-button:vertical:decrement,&::-webkit-scrollbar-button:single-button:vertical:increment{background-position-x:",";background-position-y:",";background-size:16px;border-bottom:0;border-top:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:vertical:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:decrement,&::-webkit-scrollbar-button:single-button:horizontal:increment{background-position:center;background-size:16px;border-left:0;border-right:0;image-rendering:pixelated;}&::-webkit-scrollbar-button:single-button:horizontal:decrement{background-image:url(",");}&::-webkit-scrollbar-button:single-button:horizontal:increment{background-image:url(",");}&::-webkit-scrollbar-button:single-button:vertical:decrement:active,&::-webkit-scrollbar-button:single-button:vertical:increment:active,&::-webkit-scrollbar-button:single-button:horizontal:decrement:active,&::-webkit-scrollbar-button:single-button:horizontal:increment:active{background-blend-mode:",";}"],i[a].thumb,i[a].track,e,e,i[a].track,i[a].thumb,i[a].thumb,i[a].thumbHover,i[a].active,i[a].track,i[a].track,e?`${e}px`:"initial",i[a].buttonHover,i[a].active,0===t?"center":`${t}px`,0===r?"center":`${r}px`,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",i[a].blendMode)}}]);