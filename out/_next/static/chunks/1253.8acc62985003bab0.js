"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1253],
    {
        11253: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    default: function () {
                        return c;
                    },
                });
            var r = n(85893),
                i = n(1864),
                a = n(10508),
                o = n(67294),
                s = n(6155),
                l = n(97836);
            let f = a.ZP.textarea.attrs(() => ({ enterKeyHint: "done", maxLength: l.Zv, rows: 1, ...l.AA }))(
                [
                    "background-color:",
                    ";border:",
                    ";border-radius:0;color:",
                    ";font-family:inherit;font-size:11.5px;margin-bottom:2px;max-width:",
                    "px;min-height:19px;min-width:30px;overflow:hidden;padding:",
                    ";position:relative;resize:none;text-align:center;top:2px;user-select:text;white-space:break-spaces;z-index:1;",
                ],
                ({ $darkMode: e }) => (e ? "rgb(33, 33, 33)" : "#fff"),
                ({ $darkMode: e }) => `1px solid ${e ? "#fff" : "rgb(100, 100, 100)"}`,
                ({ $darkMode: e }) => (e ? "#fff" : "#000"),
                ({ theme: e }) => e.sizes.fileEntry.renameWidth,
                ({ theme: e }) => `1px ${e.sizes.fileEntry.renamePadding}px`
            );
            var u = n(6484),
                c = ({ isDesktop: e, name: t, path: n, renameFile: c, setRenaming: p }) => {
                    let d = (0, o.useRef)(null),
                        x = () => c(n, d.current?.value),
                        { formats: h, sizes: g } = (0, a.Fg)(),
                        m = (0, o.useCallback)(
                            (e) => {
                                if (e instanceof HTMLTextAreaElement) {
                                    let { width: t } = (0, s.oc)(e.value, g.fileEntry.fontSize, h.systemFont);
                                    e.setAttribute("style", "height: 1px"), e.setAttribute("style", `height: ${e.scrollHeight + 2}px; width: ${t + 22}px`);
                                }
                            },
                            [h.systemFont, g.fileEntry.fontSize]
                        );
                    return (
                        (0, o.useLayoutEffect)(() => {
                            requestAnimationFrame(() => m(d.current));
                        }, [m]),
                        (0, o.useLayoutEffect)(() => {
                            m(d.current), d.current?.focus(l.eS), d.current?.setSelectionRange(0, t.length - i.extname(t).length);
                        }, [t, m]),
                        (0, r.jsx)(f, {
                            ref: d,
                            $darkMode: !e,
                            defaultValue: t,
                            onBlurCapture: x,
                            onClick: u.nK,
                            onDragStart: u.nK,
                            onKeyDown: ({ key: e }) => {
                                "Enter" === e ? x() : "Escape" === e && p("");
                            },
                            onKeyUp: (e) => {
                                m(e.target), (0, u.nK)(e);
                            },
                        })
                    );
                };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1253],{11253:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(85893),i=n(1864),a=n(10508),o=n(67294),s=n(6155),l=n(97836);let f=a.ZP.textarea.attrs(()=>({enterKeyHint:"done",maxLength:l.Zv,rows:1,...l.AA}))(["background-color:",";border:",";border-radius:0;color:",";font-family:inherit;font-size:11.5px;margin-bottom:2px;max-width:","px;min-height:19px;min-width:30px;overflow:hidden;padding:",";position:relative;resize:none;text-align:center;top:2px;user-select:text;white-space:break-spaces;z-index:1;"],({$darkMode:e})=>e?"rgb(33, 33, 33)":"#fff",({$darkMode:e})=>`1px solid ${e?"#fff":"rgb(100, 100, 100)"}`,({$darkMode:e})=>e?"#fff":"#000",({theme:e})=>e.sizes.fileEntry.renameWidth,({theme:e})=>`1px ${e.sizes.fileEntry.renamePadding}px`);var u=n(6484),c=({isDesktop:e,name:t,path:n,renameFile:c,setRenaming:p})=>{let d=(0,o.useRef)(null),x=()=>c(n,d.current?.value),{formats:h,sizes:g}=(0,a.Fg)(),m=(0,o.useCallback)(e=>{if(e instanceof HTMLTextAreaElement){let{width:t}=(0,s.oc)(e.value,g.fileEntry.fontSize,h.systemFont);e.setAttribute("style","height: 1px"),e.setAttribute("style",`height: ${e.scrollHeight+2}px; width: ${t+22}px`)}},[h.systemFont,g.fileEntry.fontSize]);return(0,o.useLayoutEffect)(()=>{requestAnimationFrame(()=>m(d.current))},[m]),(0,o.useLayoutEffect)(()=>{m(d.current),d.current?.focus(l.eS),d.current?.setSelectionRange(0,t.length-i.extname(t).length)},[t,m]),(0,r.jsx)(f,{ref:d,$darkMode:!e,defaultValue:t,onBlurCapture:x,onClick:u.nK,onDragStart:u.nK,onKeyDown:({key:e})=>{"Enter"===e?x():"Escape"===e&&p("")},onKeyUp:e=>{m(e.target),(0,u.nK)(e)}})}}}]);