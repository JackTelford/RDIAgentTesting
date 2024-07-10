"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2719],
  {
    10753: function (A, e, i) {
      var a = i(8897),
        t = i(10508),
        o = i(67278);
      let r = (0, t.ZP)(a.m.li)(
        [
          "display:flex;min-width:0;overflow:hidden;place-content:center;position:relative;width:",
          ";&::before{background-color:",
          ";background-image:",
          ";border-bottom:",
          ';bottom:0;content:"";height:',
          ";margin:",
          ";position:absolute;transition-duration:0.1s;transition-property:",
          ";width:",
          ";z-index:-1;}&:hover{&::before{background-color:",
          ";height:100%;margin:0;width:100%;}}&:active{&::before{background-color:",
          ";}}figure{align-items:center;display:flex;margin-bottom:",
          ";margin-left:4px;padding:4px;figcaption{color:",
          ";font-size:",
          ";margin:0 4px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;}picture{height:",
          ";position:relative;top:1px;width:",
          ";}}> ",
          "{align-items:center;display:flex;figure{width:100%;}}",
        ],
        ({ theme: A }) => A.sizes.taskbar.entry.maxWidth,
        ({ $foreground: A, $progress: e, theme: i }) => (A ? (e && e > 0 && e < 100 ? i.colors.taskbar.foregroundProgress : i.colors.taskbar.foreground) : ""),
        ({ $progress: A, theme: e }) => (A && A > 0 && A < 100 ? `linear-gradient(to right, ${e.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)` : ""),
        ({ $progress: A, theme: e }) => `
        ${e.sizes.taskbar.entry.borderSize} solid ${A && A > 0 && A < 100 ? e.colors.progress : e.colors.highlight}
      `,
        ({ $foreground: A }) => (A ? "100%" : 0),
        ({ $foreground: A }) => (A ? "" : "0 4px"),
        ({ $foreground: A }) => (A ? "all" : "width"),
        ({ $foreground: A }) => (A ? "100%" : "calc(100% - 8px)"),
        ({ $foreground: A, theme: e }) => (A ? e.colors.taskbar.foregroundHover : e.colors.taskbar.hover),
        ({ $foreground: A, theme: e }) => (A ? e.colors.taskbar.activeForeground : e.colors.taskbar.active),
        ({ theme: A }) => A.sizes.taskbar.entry.borderSize,
        ({ theme: A }) => A.colors.text,
        ({ theme: A }) => A.sizes.taskbar.entry.fontSize,
        ({ theme: A }) => A.sizes.taskbar.entry.iconSize,
        ({ theme: A }) => A.sizes.taskbar.entry.iconSize,
        o.Z
      );
      e.Z = r;
    },
    22719: function (A, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return C;
          },
        });
      var a = i(85893),
        t = i(67294),
        o = i(5152),
        r = i.n(o),
        n = i(51526),
        s = i(10753),
        l = i(10508),
        g = i(97836),
        c = () => {
          let {
            sizes: { taskbar: A },
          } = (0, l.Fg)();
          return { animate: "active", exit: "initial", initial: "initial", transition: { duration: g.Nb.WINDOW }, variants: { active: { width: A.entry.maxWidth }, initial: { width: 0 } } };
        },
        d = i(64146),
        u = i(67318),
        h = i(58437),
        b = i(76488),
        p = i(67278),
        k = i(46581),
        m = i(6484);
      let f = r()(() => i.e(4534, "high").then(i.bind(i, 14534)), { loadableGenerated: { webpack: () => [14534] } });
      var C = (0, t.memo)(({ icon: A, id: e, title: i }) => {
        let o = (0, u.Z)(e),
          { foregroundId: r, setForegroundId: l } = (0, b.k)(),
          C = e === r,
          {
            linkElement: E,
            minimize: B,
            processes: { [e]: w },
          } = (0, h.z)(),
          { minimized: z, progress: Q } = w || {},
          x = (0, t.useCallback)(
            (A) => {
              A && E(e, "taskbarEntry", A);
            },
            [e, E]
          ),
          [R, S] = (0, t.useState)(!1),
          M = () => S(!1),
          v = (0, t.useMemo)(() => ((0, m.G6)() ? g.Yj : {}), []);
        return (0, a.jsxs)(s.Z, {
          $foreground: C,
          $progress: Q,
          onClick: M,
          onMouseEnter: () => S(!0),
          onMouseLeave: M,
          ...c(),
          ...(0, d.Z)(e),
          children: [
            (0, a.jsx)(n.M, { initial: !1, presenceAffectsLayout: !1, children: R && (0, a.jsx)(f, { id: e }) }),
            (0, a.jsx)(p.Z, {
              ref: x,
              onClick: () => {
                (z || C) && B(e), l(C ? o : e);
              },
              ...v,
              ...(0, m.PS)(i),
              children: (0, a.jsxs)("figure", { children: [(0, a.jsx)(k.Z, { alt: i, imgSize: 16, src: A }), (0, a.jsx)("figcaption", { children: i })] }),
            }),
          ],
        });
      });
    },
    64146: function (A, e, i) {
      i.d(e, {
        Z: function () {
          return l;
        },
      });
      var a = i(67294),
        t = i(23561),
        o = i(7502),
        r = i(58437),
        n = i(97836),
        s = i(76488),
        l = (A) => {
          let { contextMenu: e } = (0, o.H)(),
            { onClose: i, onMaximize: l, onMinimize: g } = (0, t.Z)(A),
            {
              processes: { [A]: c },
            } = (0, r.z)(),
            { setForegroundId: d } = (0, s.k)(),
            { allowResizing: u = !0, componentWindow: h, hideMaximizeButton: b, hideMinimizeButton: p, maximized: k, minimized: m } = c || {},
            f = (0, a.useCallback)(() => {
              d(A), h?.focus(n.eS);
            }, [h, A, d]);
          return (0, a.useMemo)(
            () =>
              e?.(() => {
                let A = k || m,
                  e = !b || !p;
                return [
                  e && {
                    action: () => {
                      m ? g() : l(), f();
                    },
                    disabled: !A,
                    icon: A
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg=="
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",
                    label: "Restore",
                  },
                  !p && {
                    action: g,
                    disabled: m,
                    icon: m
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC"
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",
                    label: "Minimize",
                  },
                  !b && {
                    action: () => {
                      l(), f();
                    },
                    disabled: A || !u,
                    icon: A
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC"
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",
                    label: "Maximize",
                  },
                  e && n.Os,
                  {
                    action: i,
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",
                    label: "Close",
                  },
                ].filter(Boolean);
              }),
            [u, e, f, b, p, k, m, i, l, g]
          );
        };
    },
    23561: function (A, e, i) {
      var a = i(67294),
        t = i(67318),
        o = i(58437),
        r = i(76488),
        n = i(86178),
        s = i(97836);
      e.Z = (A) => {
        let e = (0, t.Z)(A),
          { setForegroundId: i, removeFromStack: l } = (0, r.k)(),
          { closeWithTransition: g, maximize: c, minimize: d } = (0, o.z)(),
          u = (0, n.R)(),
          h = (0, a.useCallback)(() => {
            d(A), i(e);
          }, [A, d, e, i]),
          b = (0, a.useCallback)(() => {
            c(A), u.current[A]?.componentWindow?.focus(s.eS);
          }, [A, c, u]);
        return {
          onClose: (0, a.useCallback)(() => {
            l(A), g(A), i(e);
          }, [g, A, e, l, i]),
          onMaximize: b,
          onMinimize: h,
        };
      };
    },
    67318: function (A, e, i) {
      var a = i(58437),
        t = i(76488);
      e.Z = (A) => {
        let { stackOrder: e = [] } = (0, t.k)(),
          { processes: i } = (0, a.z)();
        return e.find((e) => e !== A && !i?.[e]?.minimized) || "";
      };
    },
  },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2719],{10753:function(A,e,i){var a=i(8897),t=i(10508),o=i(67278);let r=(0,t.ZP)(a.m.li)(["display:flex;min-width:0;overflow:hidden;place-content:center;position:relative;width:",";&::before{background-color:",";background-image:",";border-bottom:",';bottom:0;content:"";height:',";margin:",";position:absolute;transition-duration:0.1s;transition-property:",";width:",";z-index:-1;}&:hover{&::before{background-color:",";height:100%;margin:0;width:100%;}}&:active{&::before{background-color:",";}}figure{align-items:center;display:flex;margin-bottom:",";margin-left:4px;padding:4px;figcaption{color:",";font-size:",";margin:0 4px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;}picture{height:",";position:relative;top:1px;width:",";}}> ","{align-items:center;display:flex;figure{width:100%;}}"],({theme:A})=>A.sizes.taskbar.entry.maxWidth,({$foreground:A,$progress:e,theme:i})=>A?e&&e>0&&e<100?i.colors.taskbar.foregroundProgress:i.colors.taskbar.foreground:"",({$progress:A,theme:e})=>A&&A>0&&A<100?`linear-gradient(to right, ${e.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)`:"",({$progress:A,theme:e})=>`
//         ${e.sizes.taskbar.entry.borderSize} solid ${A&&A>0&&A<100?e.colors.progress:e.colors.highlight}
//       `,({$foreground:A})=>A?"100%":0,({$foreground:A})=>A?"":"0 4px",({$foreground:A})=>A?"all":"width",({$foreground:A})=>A?"100%":"calc(100% - 8px)",({$foreground:A,theme:e})=>A?e.colors.taskbar.foregroundHover:e.colors.taskbar.hover,({$foreground:A,theme:e})=>A?e.colors.taskbar.activeForeground:e.colors.taskbar.active,({theme:A})=>A.sizes.taskbar.entry.borderSize,({theme:A})=>A.colors.text,({theme:A})=>A.sizes.taskbar.entry.fontSize,({theme:A})=>A.sizes.taskbar.entry.iconSize,({theme:A})=>A.sizes.taskbar.entry.iconSize,o.Z);e.Z=r},22719:function(A,e,i){i.r(e),i.d(e,{default:function(){return C}});var a=i(85893),t=i(67294),o=i(5152),r=i.n(o),n=i(51526),s=i(10753),l=i(10508),g=i(97836),c=()=>{let{sizes:{taskbar:A}}=(0,l.Fg)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:g.Nb.WINDOW},variants:{active:{width:A.entry.maxWidth},initial:{width:0}}}},d=i(64146),u=i(67318),h=i(58437),b=i(76488),p=i(67278),k=i(46581),m=i(6484);let f=r()(()=>i.e(4534,"high").then(i.bind(i,14534)),{loadableGenerated:{webpack:()=>[14534]}});var C=(0,t.memo)(({icon:A,id:e,title:i})=>{let o=(0,u.Z)(e),{foregroundId:r,setForegroundId:l}=(0,b.k)(),C=e===r,{linkElement:E,minimize:B,processes:{[e]:w}}=(0,h.z)(),{minimized:z,progress:Q}=w||{},x=(0,t.useCallback)(A=>{A&&E(e,"taskbarEntry",A)},[e,E]),[R,S]=(0,t.useState)(!1),M=()=>S(!1),v=(0,t.useMemo)(()=>(0,m.G6)()?g.Yj:{},[]);return(0,a.jsxs)(s.Z,{$foreground:C,$progress:Q,onClick:M,onMouseEnter:()=>S(!0),onMouseLeave:M,...c(),...(0,d.Z)(e),children:[(0,a.jsx)(n.M,{initial:!1,presenceAffectsLayout:!1,children:R&&(0,a.jsx)(f,{id:e})}),(0,a.jsx)(p.Z,{ref:x,onClick:()=>{(z||C)&&B(e),l(C?o:e)},...v,...(0,m.PS)(i),children:(0,a.jsxs)("figure",{children:[(0,a.jsx)(k.Z,{alt:i,imgSize:16,src:A}),(0,a.jsx)("figcaption",{children:i})]})})]})})},64146:function(A,e,i){i.d(e,{Z:function(){return l}});var a=i(67294),t=i(23561),o=i(7502),r=i(58437),n=i(97836),s=i(76488),l=A=>{let{contextMenu:e}=(0,o.H)(),{onClose:i,onMaximize:l,onMinimize:g}=(0,t.Z)(A),{processes:{[A]:c}}=(0,r.z)(),{setForegroundId:d}=(0,s.k)(),{allowResizing:u=!0,componentWindow:h,hideMaximizeButton:b,hideMinimizeButton:p,maximized:k,minimized:m}=c||{},f=(0,a.useCallback)(()=>{d(A),h?.focus(n.eS)},[h,A,d]);return(0,a.useMemo)(()=>e?.(()=>{let A=k||m,e=!b||!p;return[e&&{action:()=>{m?g():l(),f()},disabled:!A,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!p&&{action:g,disabled:m,icon:m?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!b&&{action:()=>{l(),f()},disabled:A||!u,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},e&&n.Os,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[u,e,f,b,p,k,m,i,l,g])}},23561:function(A,e,i){var a=i(67294),t=i(67318),o=i(58437),r=i(76488),n=i(86178),s=i(97836);e.Z=A=>{let e=(0,t.Z)(A),{setForegroundId:i,removeFromStack:l}=(0,r.k)(),{closeWithTransition:g,maximize:c,minimize:d}=(0,o.z)(),u=(0,n.R)(),h=(0,a.useCallback)(()=>{d(A),i(e)},[A,d,e,i]),b=(0,a.useCallback)(()=>{c(A),u.current[A]?.componentWindow?.focus(s.eS)},[A,c,u]);return{onClose:(0,a.useCallback)(()=>{l(A),g(A),i(e)},[g,A,e,l,i]),onMaximize:b,onMinimize:h}}},67318:function(A,e,i){var a=i(58437),t=i(76488);e.Z=A=>{let{stackOrder:e=[]}=(0,t.k)(),{processes:i}=(0,a.z)();return e.find(e=>e!==A&&!i?.[e]?.minimized)||""}}}]);