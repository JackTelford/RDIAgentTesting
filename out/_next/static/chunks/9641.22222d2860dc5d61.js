"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9641],
    {
        19641: function (e, t, r) {
            r.r(t),
                r.d(t, {
                    default: function () {
                        return m;
                    },
                });
            var n = r(85893),
                a = r(10508),
                l = r(67294);
            let i = (0, l.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z" }) })),
                o = (0, l.memo)(() => (0, n.jsx)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsx)("path", { d: "M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z" }) }));
            var s = r(8897),
                c = r(97836);
            let d = (0, a.ZP)(s.m.section)(
                [
                    "backdrop-filter:",
                    ";background-color:",
                    ";border:",
                    ";border-bottom:0;border-right:0;bottom:",
                    'px;position:absolute;right:0;z-index:10000;table{padding:4px 10px 19px;white-space:nowrap;td{color:#fff;display:inline-table;height:40px;line-height:32px;margin:0 1px;text-align:center;width:46px;&.prev,&.next{color:rgb(125,125,125);}}thead{font-size:12px;td[colspan]{display:table-cell;padding:0;div{display:flex;font-size:15px;padding:0 16px 0 12px;place-content:space-between;header{color:rgb(223,223,223);&:hover{color:#fff;}&:active{color:rgb(165,156,156);}}}}td:not([colspan]){height:auto;margin-top:-1px;}nav{display:flex;flex-direction:row;gap:32px;padding-top:2px;button{fill:rgb(223,223,223);&:hover{fill:#fff;}&:active{fill:rgb(165,156,156);}svg{width:16px;}}}}tbody.curr td.today{background-color:rgb(0,120,215);color:#fff;position:relative;&::after,&::before{content:"";position:absolute;}&::after{inset:0;}&::before{border:2px solid #000;inset:2px;}&:hover{&::after{border:2px solid rgb(102,174,231);}}&:active{&::after{border:2px solid rgb(153,201,239);}}}}',
                ],
                ({ theme: e }) => `blur(${e.sizes.taskbar.panelBlur})`,
                ({ theme: e }) => e.colors.taskbar.background,
                ({ theme: e }) => `1px solid ${e.colors.taskbar.peekBorder}`,
                c.bK
            ),
                p = [
                    [1, "curr"],
                    [2, "curr"],
                    [3, "curr"],
                    [4, "curr"],
                    [5, "curr"],
                    [6, "curr"],
                    [7, "curr"],
                ],
                h = (e) => {
                    let t = e.getDate(),
                        r = e.getMonth(),
                        n = e.getFullYear(),
                        a = new Date(n, r, 1).getDay(),
                        l = p.slice(0, 7 - a),
                        i = [
                            ...Array.from({ length: 7 - l.length })
                                .map((e, t) => [new Date(n, r, -t).getDate(), "prev"])
                                .reverse(),
                            ...l,
                        ],
                        o = Array.from({ length: new Date(n, r + 1, 0).getDate() })
                            .map((e, t) => new Date(n, r, t + 1).getDate())
                            .slice(i[i.length - 1][0])
                            .map((e) => [e, "curr"]),
                        s = [...i, ...o].reduce((e, r, n) => {
                            n % 7 == 0 && e.push([]);
                            let [a, l] = r;
                            return e[e.length - 1].push("curr" === l && a === t ? [a, "today"] : r), e;
                        }, []),
                        c = s[s.length - 1],
                        d = Array.from({ length: 7 - c.length }).map((e, t) => [new Date(n, r + 1, t + 1).getDate(), "next"]);
                    if ((c.push(...d), s.length < 6)) {
                        let [e] = c[c.length - 1];
                        return [...s, e > 6 ? p.map(([e]) => [e, "next"]) : Array.from({ length: 7 }).map((t, r) => [r + 1 + e, "next"]), ...(4 === s.length ? [p.map(([e]) => [e + 7, "next"])] : [])];
                    }
                    return s;
                };
            var g = r(85923),
                u = r(67278),
                x = r(6484),
                f = r(76833);
            let b = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            var m = (0, l.memo)(({ toggleCalendar: e }) => {
                let [t, r] = (0, l.useState)(() => new Date()),
                    [s, p] = (0, l.useState)(() => h(t)),
                    m = (0, l.useMemo)(() => new Date(), []),
                    v = (0, l.useMemo)(() => t.getMonth() === m.getMonth() && t.getFullYear() === m.getFullYear(), [t, m]),
                    w = (e) => {
                        let n = new Date(t),
                            a = n.getMonth() + e;
                        n.setDate(1), n.setMonth(a), (12 === a ? 0 : -1 === a ? 11 : a) === m.getMonth() && n.setDate(m.getDate()), r(n), p(h(n));
                    },
                    j = (0, l.useRef)(null),
                    {
                        sizes: {
                            calendar: { maxHeight: D },
                        },
                    } = (0, a.Fg)(),
                    M = (0, g.Z)(D, !1),
                    y = (0, x.UP)();
                return (
                    (0, l.useEffect)(() => {
                        j.current?.addEventListener("blur", ({ relatedTarget: t }) => {
                            if (t instanceof HTMLElement) {
                                if (j.current?.contains(t)) {
                                    j.current?.focus(c.eS);
                                    return;
                                }
                                let e = document.querySelector("main>nav [role=timer]");
                                if (e instanceof HTMLDivElement && (e === t || e.contains(t))) return;
                            }
                            e(!1);
                        }),
                            j.current?.focus(c.eS);
                    }, [e]),
                    s &&
                    (0, n.jsx)(d, {
                        ref: j,
                        "aria-label": "Calendar",
                        onContextMenu: x.nK,
                        ...M,
                        ...c.LL,
                        children: (0, n.jsxs)("table", {
                            children: [
                                (0, n.jsxs)("thead", {
                                    children: [
                                        (0, n.jsx)("tr", {
                                            children: (0, n.jsx)("td", {
                                                colSpan: b.length,
                                                children: (0, n.jsxs)("div", {
                                                    children: [
                                                        (0, n.jsx)("header", { children: `${t.toLocaleString("default", { month: "long" })}, ${t.getFullYear()}` }),
                                                        (0, n.jsxs)("nav", { children: [(0, n.jsx)(u.Z, { onClick: () => w(-1), children: (0, n.jsx)(o, {}) }), (0, n.jsx)(u.Z, { onClick: () => w(1), children: (0, n.jsx)(i, {}) })] }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("tr", { children: b.map((e) => (0, n.jsx)("td", { children: e }, e)) }),
                                    ],
                                }),
                                (0, n.jsx)("tbody", {
                                    className: v ? "curr" : void 0,
                                    children: s?.map((e) =>
                                        n.jsx(
                                            "tr",
                                            {
                                                children: e.map(([e, t]) =>
                                                    n.jsx(
                                                        "td",
                                                        {
                                                            ref: (e) => {
                                                                y && "today" !== t && f.G(e, !0, 2, !0);
                                                            },
                                                            className: t,
                                                            children: e,
                                                        },
                                                        `${e}${t}`
                                                    )
                                                ),
                                            },
                                            e.toString()
                                        )
                                    ),
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        85923: function (e, t, r) {
            var n = r(97836),
                a = r(6484);
            t.Z = (e, t = !0, r = 0.5, l = 0.75) => {
                let i = Math.min(e, (0, a.sI)() - n.bK);
                return {
                    animate: "active",
                    exit: { height: `${i * l}px`, transition: { duration: n.Nb.TASKBAR_ITEM / 10, ease: "circIn" } },
                    initial: "initial",
                    transition: { duration: n.Nb.TASKBAR_ITEM, ease: "circOut" },
                    variants: { active: { height: `${i}px`, paddingTop: 0 }, initial: { height: `${i * l}px`, paddingTop: t ? `${i * r}px` : 0 } },
                };
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9641],{19641:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(85893),a=r(10508),l=r(67294);let i=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z"})})),o=(0,l.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z"})}));var s=r(8897),c=r(97836);let d=(0,a.ZP)(s.m.section)(["backdrop-filter:",";background-color:",";border:",";border-bottom:0;border-right:0;bottom:",'px;position:absolute;right:0;z-index:10000;table{padding:4px 10px 19px;white-space:nowrap;td{color:#fff;display:inline-table;height:40px;line-height:32px;margin:0 1px;text-align:center;width:46px;&.prev,&.next{color:rgb(125,125,125);}}thead{font-size:12px;td[colspan]{display:table-cell;padding:0;div{display:flex;font-size:15px;padding:0 16px 0 12px;place-content:space-between;header{color:rgb(223,223,223);&:hover{color:#fff;}&:active{color:rgb(165,156,156);}}}}td:not([colspan]){height:auto;margin-top:-1px;}nav{display:flex;flex-direction:row;gap:32px;padding-top:2px;button{fill:rgb(223,223,223);&:hover{fill:#fff;}&:active{fill:rgb(165,156,156);}svg{width:16px;}}}}tbody.curr td.today{background-color:rgb(0,120,215);color:#fff;position:relative;&::after,&::before{content:"";position:absolute;}&::after{inset:0;}&::before{border:2px solid #000;inset:2px;}&:hover{&::after{border:2px solid rgb(102,174,231);}}&:active{&::after{border:2px solid rgb(153,201,239);}}}}'],({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`,({theme:e})=>e.colors.taskbar.background,({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`,c.bK),p=[[1,"curr"],[2,"curr"],[3,"curr"],[4,"curr"],[5,"curr"],[6,"curr"],[7,"curr"]],h=e=>{let t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),a=new Date(n,r,1).getDay(),l=p.slice(0,7-a),i=[...Array.from({length:7-l.length}).map((e,t)=>[new Date(n,r,-t).getDate(),"prev"]).reverse(),...l],o=Array.from({length:new Date(n,r+1,0).getDate()}).map((e,t)=>new Date(n,r,t+1).getDate()).slice(i[i.length-1][0]).map(e=>[e,"curr"]),s=[...i,...o].reduce((e,r,n)=>{n%7==0&&e.push([]);let[a,l]=r;return e[e.length-1].push("curr"===l&&a===t?[a,"today"]:r),e},[]),c=s[s.length-1],d=Array.from({length:7-c.length}).map((e,t)=>[new Date(n,r+1,t+1).getDate(),"next"]);if(c.push(...d),s.length<6){let[e]=c[c.length-1];return[...s,e>6?p.map(([e])=>[e,"next"]):Array.from({length:7}).map((t,r)=>[r+1+e,"next"]),...4===s.length?[p.map(([e])=>[e+7,"next"])]:[]]}return s};var g=r(85923),u=r(67278),x=r(6484),f=r(76833);let b=["Su","Mo","Tu","We","Th","Fr","Sa"];var m=(0,l.memo)(({toggleCalendar:e})=>{let[t,r]=(0,l.useState)(()=>new Date),[s,p]=(0,l.useState)(()=>h(t)),m=(0,l.useMemo)(()=>new Date,[]),v=(0,l.useMemo)(()=>t.getMonth()===m.getMonth()&&t.getFullYear()===m.getFullYear(),[t,m]),w=e=>{let n=new Date(t),a=n.getMonth()+e;n.setDate(1),n.setMonth(a),(12===a?0:-1===a?11:a)===m.getMonth()&&n.setDate(m.getDate()),r(n),p(h(n))},j=(0,l.useRef)(null),{sizes:{calendar:{maxHeight:D}}}=(0,a.Fg)(),M=(0,g.Z)(D,!1),y=(0,x.UP)();return(0,l.useEffect)(()=>{j.current?.addEventListener("blur",({relatedTarget:t})=>{if(t instanceof HTMLElement){if(j.current?.contains(t)){j.current?.focus(c.eS);return}let e=document.querySelector("main>nav [role=timer]");if(e instanceof HTMLDivElement&&(e===t||e.contains(t)))return}e(!1)}),j.current?.focus(c.eS)},[e]),s&&(0,n.jsx)(d,{ref:j,"aria-label":"Calendar",onContextMenu:x.nK,...M,...c.LL,children:(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:b.length,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{children:`${t.toLocaleString("default",{month:"long"})}, ${t.getFullYear()}`}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(u.Z,{onClick:()=>w(-1),children:(0,n.jsx)(o,{})}),(0,n.jsx)(u.Z,{onClick:()=>w(1),children:(0,n.jsx)(i,{})})]})]})})}),(0,n.jsx)("tr",{children:b.map(e=>(0,n.jsx)("td",{children:e},e))})]}),(0,n.jsx)("tbody",{className:v?"curr":void 0,children:s?.map(e=>n.jsx("tr",{children:e.map(([e,t])=>n.jsx("td",{ref:e=>{y&&"today"!==t&&f.G(e,!0,2,!0)},className:t,children:e},`${e}${t}`))},e.toString()))})]})})})},85923:function(e,t,r){var n=r(97836),a=r(6484);t.Z=(e,t=!0,r=.5,l=.75)=>{let i=Math.min(e,(0,a.sI)()-n.bK);return{animate:"active",exit:{height:`${i*l}px`,transition:{duration:n.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:n.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${i}px`,paddingTop:0},initial:{height:`${i*l}px`,paddingTop:t?`${i*r}px`:0}}}}}}]);