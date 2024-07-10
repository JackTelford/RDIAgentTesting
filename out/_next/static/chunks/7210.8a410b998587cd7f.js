"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7210, 3333],
    {
        57210: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return u;
                    },
                });
            var i = n(85893),
                r = n(67294);
            let o = [
                ["Libera.Chat", "web.libera.chat/webirc/websocket/"],
                ["ErgoTestnet", "testnet.ergo.chat/webirc"],
                ["InspIRCd Testnet", "testnet.inspircd.org", 8097],
            ],
                s = (e) => {
                    let t = `${e}${[9, 9, 9, 9].map((e) => Math.floor(Math.random() * e)).join("")}`;
                    return {
                        networks: o.map(([e, n, i = 443], r) => ({
                            buffers: [{ enabled: !0, name: "*", settings: {} }],
                            connection: { direct: !0, encoding: "utf8", nick: t, port: i, server: n, tls: !0 },
                            id: r + 1,
                            name: e,
                            settings: { show_raw_caps: !1 },
                        })),
                    };
                };
            var c = n(33333),
                a = n(58437),
                f = n(37176),
                l = n(97836),
                u = ({ id: e }) => {
                    let { linkElement: t, processes: { [e]: { libs: [n = ""] = [] } = {} } = {}, title: o } = (0, a.z)(),
                        [u, d] = (0, r.useState)(!1),
                        [w, h] = (0, r.useState)([]),
                        p = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            window.localStorage.getItem("kiwiirc") || window.localStorage.setItem("kiwiirc", JSON.stringify(s("Guest")));
                        }, []),
                        (0, r.useEffect)(() => {
                            if (u && p.current?.contentWindow) {
                                let n = p.current.contentWindow;
                                n?.kiwi.on("irc.join", ({ channel: e }, { name: t }) => h((n) => [...new Set([...n, `${e}/${t}`])])),
                                    n?.kiwi.on("irc.part", ({ channel: e }, { name: t }) => h((n) => n.filter((n) => n !== `${e}/${t}`))),
                                    t(e, "peekElement", p.current);
                            }
                        }, [e, t, u]),
                        (0, r.useEffect)(() => {
                            o(e, `${f.Z.IRC.title}${0 === w.length ? "" : ` - ${w.join(", ")}`}`);
                        }, [w, e, o]),
                        (0, i.jsxs)("div", { children: [!u && (0, i.jsx)(c.default, {}), (0, i.jsx)("iframe", { ref: p, height: "100%", onLoad: () => d(!0), src: n, title: e, width: "100%", ...l.v0 })] })
                    );
                };
        },
        33333: function (e, t, n) {
            n.r(t);
            let i = n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);
            t.default = i;
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7210,3333],{57210:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(85893),r=n(67294);let o=[["Libera.Chat","web.libera.chat/webirc/websocket/"],["ErgoTestnet","testnet.ergo.chat/webirc"],["InspIRCd Testnet","testnet.inspircd.org",8097]],s=e=>{let t=`${e}${[9,9,9,9].map(e=>Math.floor(Math.random()*e)).join("")}`;return{networks:o.map(([e,n,i=443],r)=>({buffers:[{enabled:!0,name:"*",settings:{}}],connection:{direct:!0,encoding:"utf8",nick:t,port:i,server:n,tls:!0},id:r+1,name:e,settings:{show_raw_caps:!1}}))}};var c=n(33333),a=n(58437),f=n(37176),l=n(97836),u=({id:e})=>{let{linkElement:t,processes:{[e]:{libs:[n=""]=[]}={}}={},title:o}=(0,a.z)(),[u,d]=(0,r.useState)(!1),[w,h]=(0,r.useState)([]),p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{window.localStorage.getItem("kiwiirc")||window.localStorage.setItem("kiwiirc",JSON.stringify(s("Guest")))},[]),(0,r.useEffect)(()=>{if(u&&p.current?.contentWindow){let n=p.current.contentWindow;n?.kiwi.on("irc.join",({channel:e},{name:t})=>h(n=>[...new Set([...n,`${e}/${t}`])])),n?.kiwi.on("irc.part",({channel:e},{name:t})=>h(n=>n.filter(n=>n!==`${e}/${t}`))),t(e,"peekElement",p.current)}},[e,t,u]),(0,r.useEffect)(()=>{o(e,`${f.Z.IRC.title}${0===w.length?"":` - ${w.join(", ")}`}`)},[w,e,o]),(0,i.jsxs)("div",{children:[!u&&(0,i.jsx)(c.default,{}),(0,i.jsx)("iframe",{ref:p,height:"100%",onLoad:()=>d(!0),src:n,title:e,width:"100%",...l.v0})]})}},33333:function(e,t,n){n.r(t);let i=n(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=i}}]);