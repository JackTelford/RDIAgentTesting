"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8020],
    {
        86401: function (e, n, t) {
            t.d(n, {
                Wd: function () {
                    return r;
                },
                vc: function () {
                    return o;
                },
                xJ: function () {
                    return s;
                },
            });
            let o = {
                camera: { far: 400, fov: 30, near: 0.1 },
                color: "hsl(225, 40%, 20%)",
                colorCycleSpeed: 10,
                forceAnimate: !0,
                hh: 50,
                hue: 225,
                lightness: 20,
                material: { options: { fog: !1, wireframe: !1 } },
                saturation: 40,
                shininess: 35,
                waveHeight: 20,
                waveSpeed: 0.25,
                ww: 50,
            },
                r = { gyroControls: !1, mouseControls: !1, mouseEase: !1, touchControls: !1 },
                s = ["/System/Vanta.js/three.min.js", "/System/Vanta.js/vanta.waves.min.js"];
        },
        98020: function (e, n, t) {
            t.r(n);
            var o = t(86401),
                r = t(6484);
            n.default = (e, n = {}) => {
                let { VANTA: { current: t } = {} } = window;
                try {
                    t?.destroy();
                } catch { }
                e &&
                    "undefined" != typeof WebGLRenderingContext &&
                    (0, r.mb)(o.xJ, !0).then(() => {
                        let { VANTA: { WAVES: t } = {} } = window;
                        t && t({ el: e, ...o.Wd, ...n });
                    });
            };
        },
    },
]);




// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8020],{86401:function(e,n,t){t.d(n,{Wd:function(){return r},vc:function(){return o},xJ:function(){return s}});let o={camera:{far:400,fov:30,near:.1},color:"hsl(225, 40%, 20%)",colorCycleSpeed:10,forceAnimate:!0,hh:50,hue:225,lightness:20,material:{options:{fog:!1,wireframe:!1}},saturation:40,shininess:35,waveHeight:20,waveSpeed:.25,ww:50},r={gyroControls:!1,mouseControls:!1,mouseEase:!1,touchControls:!1},s=["/System/Vanta.js/three.min.js","/System/Vanta.js/vanta.waves.min.js"]},98020:function(e,n,t){t.r(n);var o=t(86401),r=t(6484);n.default=(e,n={})=>{let{VANTA:{current:t}={}}=window;try{t?.destroy()}catch{}e&&"undefined"!=typeof WebGLRenderingContext&&(0,r.mb)(o.xJ,!0).then(()=>{let{VANTA:{WAVES:t}={}}=window;t&&t({el:e,...o.Wd,...n})})}}}]);