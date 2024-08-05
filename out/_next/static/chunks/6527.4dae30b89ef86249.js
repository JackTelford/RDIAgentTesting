(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6527],
    {
        26527: function (e, t, n) {
            "use strict";
            var r = n(1864),
                i = n(97836);
            n(48764).Buffer;
            let o = (e) => (0, r.extname)(e).toLowerCase(),
                a = (e, t, n, r) =>
                    new Promise((o, a) => {
                        let l = [...document.scripts].find((t) => t.src.endsWith(e));
                        if (l) {
                            if (!n) {
                                o(new Event("Already loaded."));
                                return;
                            }
                            l.remove();
                        }
                        let s = document.createElement("script");
                        (s.async = !1), t && (s.defer = !0), r && (s.type = "module"), (s.fetchPriority = "high"), (s.src = e), s.addEventListener("error", a, i.K7), s.addEventListener("load", o, i.K7), document.head.append(s);
                    }),
                l = (e) =>
                    new Promise((t, n) => {
                        if ([...document.querySelectorAll("link[rel=stylesheet]")].some((t) => t.href.endsWith(e))) {
                            t(new Event("Already loaded."));
                            return;
                        }
                        let r = document.createElement("link");
                        (r.rel = "stylesheet"), (r.fetchPriority = "high"), (r.href = e), r.addEventListener("error", n, i.K7), r.addEventListener("load", t, i.K7), document.head.append(r);
                    }),
                s = async (e, t, n, r) =>
                    e && 0 !== e.length
                        ? e.reduce(async (e, i) => {
                            await (".css" === o(i) ? l(encodeURI(i)) : a(encodeURI(i), t, n, r));
                        }, Promise.resolve())
                        : Promise.resolve(),
                c = ["/System/tvm/tvmjs_runtime.wasi.js", "/System/tvm/tvmjs.bundle.js", "/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js", "/Program Files/StableDiffusion/stable_diffusion.js"],
                h = async (e, t, n = !1) => {
                    n || ((window.tvmjsGlobalEnv = window.tvmjsGlobalEnv || {}), await s(c)),
                        (globalThis.tvmjsGlobalEnv.getTokenizer = async () => (
                            globalThis.tvmjsGlobalEnv.initialized || (await globalThis.Tokenizer.init()),
                            (globalThis.tvmjsGlobalEnv.initialized = !0),
                            new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())
                        )),
                        (globalThis.tvmjsGlobalEnv.canvas = globalThis.tvmjsGlobalEnv.canvas || t);
                    let { prompts: r } = e;
                    (globalThis.tvmjsGlobalEnv.prompts = r?.length ? r : [["A photo of an astronaut riding a horse on mars", ""]]), await globalThis.tvmjsGlobalEnv.asyncOnGenerate();
                };
            globalThis.addEventListener(
                "message",
                ({ data: e }) => {
                    if ("init" === e)
                        (globalThis.tvmjsGlobalEnv = globalThis.tvmjsGlobalEnv || {}),
                            (globalThis.tvmjsGlobalEnv.logger = (e, t) => {
                                globalThis.postMessage({ message: t, type: e });
                            }),
                            globalThis.importScripts(...c);
                    else if (!(e instanceof DOMRect)) {
                        let { canvas: t, config: n } = e;
                        h(n, t, !0).then(() => {
                            globalThis.tvmjsGlobalEnv.logger("", "");
                        });
                    }
                },
                { passive: !0 }
            );
        },
        97836: function (e, t, n) {
            "use strict";
            n.d(t, {
                K7: function () {
                    return l;
                },
                i2: function () {
                    return a;
                },
            }),
                n(67294);
            let r = new Set([".heic", ".heics", ".heif", ".heifs", ".avci", ".avcs"]),
                i = new Set([".cr2", ".dng", ".nef", ".tif", ".tiff"]),
                o = new Set([...r, ...i, ".ani", ".apng", ".avif", ".bmp", ".cur", ".gif", ".ico", ".jfif", ".jif", ".jpe", ".jpeg", ".jpg", ".jxl", ".pjp", ".pjpeg", ".png", ".svg", ".qoi", ".webp", ".xbm"]);
            [...r, ...i];
            let a = 1e3,
                l = { once: !0, passive: !0 };
            [...new Set([".aac", ".oga", ".wav"]), ...new Set([".asx", ".m3u", ".pls"]), ...o, ...i, ...new Set([".m4v", ".mkv", ".mov", ".mp4", ".ogg", ".ogm", ".ogv", ".webm"])];
        },
        1864: function (e) {
            !(function () {
                "use strict";
                var t = {
                    114: function (e) {
                        function t(e) {
                            if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e));
                        }
                        function n(e, t) {
                            for (var n, r = "", i = 0, o = -1, a = 0, l = 0; l <= e.length; ++l) {
                                if (l < e.length) n = e.charCodeAt(l);
                                else if (47 === n) break;
                                else n = 47;
                                if (47 === n) {
                                    if (o === l - 1 || 1 === a);
                                    else if (o !== l - 1 && 2 === a) {
                                        if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                                            if (r.length > 2) {
                                                var s = r.lastIndexOf("/");
                                                if (s !== r.length - 1) {
                                                    -1 === s ? ((r = ""), (i = 0)) : (i = (r = r.slice(0, s)).length - 1 - r.lastIndexOf("/")), (o = l), (a = 0);
                                                    continue;
                                                }
                                            } else if (2 === r.length || 1 === r.length) {
                                                (r = ""), (i = 0), (o = l), (a = 0);
                                                continue;
                                            }
                                        }
                                        t && (r.length > 0 ? (r += "/..") : (r = ".."), (i = 2));
                                    } else r.length > 0 ? (r += "/" + e.slice(o + 1, l)) : (r = e.slice(o + 1, l)), (i = l - o - 1);
                                    (o = l), (a = 0);
                                } else 46 === n && -1 !== a ? ++a : (a = -1);
                            }
                            return r;
                        }
                        var r = {
                            resolve: function () {
                                for (var e, r, i = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--)
                                    a >= 0 ? (r = arguments[a]) : (void 0 === e && (e = ""), (r = e)), t(r), 0 !== r.length && ((i = r + "/" + i), (o = 47 === r.charCodeAt(0)));
                                return ((i = n(i, !o)), o) ? (i.length > 0 ? "/" + i : "/") : i.length > 0 ? i : ".";
                            },
                            normalize: function (e) {
                                if ((t(e), 0 === e.length)) return ".";
                                var r = 47 === e.charCodeAt(0),
                                    i = 47 === e.charCodeAt(e.length - 1);
                                return (0 !== (e = n(e, !r)).length || r || (e = "."), e.length > 0 && i && (e += "/"), r) ? "/" + e : e;
                            },
                            isAbsolute: function (e) {
                                return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                            },
                            join: function () {
                                if (0 == arguments.length) return ".";
                                for (var e, n = 0; n < arguments.length; ++n) {
                                    var i = arguments[n];
                                    t(i), i.length > 0 && (void 0 === e ? (e = i) : (e += "/" + i));
                                }
                                return void 0 === e ? "." : r.normalize(e);
                            },
                            relative: function (e, n) {
                                if ((t(e), t(n), e === n || (e = r.resolve(e)) === (n = r.resolve(n)))) return "";
                                for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                                for (var o = e.length, a = o - i, l = 1; l < n.length && 47 === n.charCodeAt(l); ++l);
                                for (var s = n.length - l, c = a < s ? a : s, h = -1, f = 0; f <= c; ++f) {
                                    if (f === c) {
                                        if (s > c) {
                                            if (47 === n.charCodeAt(l + f)) return n.slice(l + f + 1);
                                            if (0 === f) return n.slice(l + f);
                                        } else a > c && (47 === e.charCodeAt(i + f) ? (h = f) : 0 === f && (h = 0));
                                        break;
                                    }
                                    var g = e.charCodeAt(i + f);
                                    if (g !== n.charCodeAt(l + f)) break;
                                    47 === g && (h = f);
                                }
                                var v = "";
                                for (f = i + h + 1; f <= o; ++f) (f === o || 47 === e.charCodeAt(f)) && (0 === v.length ? (v += "..") : (v += "/.."));
                                return v.length > 0 ? v + n.slice(l + h) : ((l += h), 47 === n.charCodeAt(l) && ++l, n.slice(l));
                            },
                            _makeLong: function (e) {
                                return e;
                            },
                            dirname: function (e) {
                                if ((t(e), 0 === e.length)) return ".";
                                for (var n = e.charCodeAt(0), r = 47 === n, i = -1, o = !0, a = e.length - 1; a >= 1; --a)
                                    if (47 === (n = e.charCodeAt(a))) {
                                        if (!o) {
                                            i = a;
                                            break;
                                        }
                                    } else o = !1;
                                return -1 === i ? (r ? "/" : ".") : r && 1 === i ? "//" : e.slice(0, i);
                            },
                            basename: function (e, n) {
                                if (void 0 !== n && "string" != typeof n) throw TypeError('"ext" argument must be a string');
                                t(e);
                                var r,
                                    i = 0,
                                    o = -1,
                                    a = !0;
                                if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                                    if (n.length === e.length && n === e) return "";
                                    var l = n.length - 1,
                                        s = -1;
                                    for (r = e.length - 1; r >= 0; --r) {
                                        var c = e.charCodeAt(r);
                                        if (47 === c) {
                                            if (!a) {
                                                i = r + 1;
                                                break;
                                            }
                                        } else -1 === s && ((a = !1), (s = r + 1)), l >= 0 && (c === n.charCodeAt(l) ? -1 == --l && (o = r) : ((l = -1), (o = s)));
                                    }
                                    return i === o ? (o = s) : -1 === o && (o = e.length), e.slice(i, o);
                                }
                                for (r = e.length - 1; r >= 0; --r)
                                    if (47 === e.charCodeAt(r)) {
                                        if (!a) {
                                            i = r + 1;
                                            break;
                                        }
                                    } else -1 === o && ((a = !1), (o = r + 1));
                                return -1 === o ? "" : e.slice(i, o);
                            },
                            extname: function (e) {
                                t(e);
                                for (var n = -1, r = 0, i = -1, o = !0, a = 0, l = e.length - 1; l >= 0; --l) {
                                    var s = e.charCodeAt(l);
                                    if (47 === s) {
                                        if (!o) {
                                            r = l + 1;
                                            break;
                                        }
                                        continue;
                                    }
                                    -1 === i && ((o = !1), (i = l + 1)), 46 === s ? (-1 === n ? (n = l) : 1 !== a && (a = 1)) : -1 !== n && (a = -1);
                                }
                                return -1 === n || -1 === i || 0 === a || (1 === a && n === i - 1 && n === r + 1) ? "" : e.slice(n, i);
                            },
                            format: function (e) {
                                var t, n;
                                if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                return (t = e.dir || e.root), (n = e.base || (e.name || "") + (e.ext || "")), t ? (t === e.root ? t + n : t + "/" + n) : n;
                            },
                            parse: function (e) {
                                t(e);
                                var n,
                                    r = { root: "", dir: "", base: "", ext: "", name: "" };
                                if (0 === e.length) return r;
                                var i = e.charCodeAt(0),
                                    o = 47 === i;
                                o ? ((r.root = "/"), (n = 1)) : (n = 0);
                                for (var a = -1, l = 0, s = -1, c = !0, h = e.length - 1, f = 0; h >= n; --h) {
                                    if (47 === (i = e.charCodeAt(h))) {
                                        if (!c) {
                                            l = h + 1;
                                            break;
                                        }
                                        continue;
                                    }
                                    -1 === s && ((c = !1), (s = h + 1)), 46 === i ? (-1 === a ? (a = h) : 1 !== f && (f = 1)) : -1 !== a && (f = -1);
                                }
                                return (
                                    -1 === a || -1 === s || 0 === f || (1 === f && a === s - 1 && a === l + 1)
                                        ? -1 !== s && (0 === l && o ? (r.base = r.name = e.slice(1, s)) : (r.base = r.name = e.slice(l, s)))
                                        : (0 === l && o ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, s))) : ((r.name = e.slice(l, a)), (r.base = e.slice(l, s))), (r.ext = e.slice(a, s))),
                                    l > 0 ? (r.dir = e.slice(0, l - 1)) : o && (r.dir = "/"),
                                    r
                                );
                            },
                            sep: "/",
                            delimiter: ":",
                            win32: null,
                            posix: null,
                        };
                        (r.posix = r), (e.exports = r);
                    },
                },
                    n = {};
                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = (n[e] = { exports: {} }),
                        a = !0;
                    try {
                        t[e](o, o.exports, r), (a = !1);
                    } finally {
                        a && delete n[e];
                    }
                    return o.exports;
                }
                r.ab = "//";
                var i = r(114);
                e.exports = i;
            })();
        },
    },
]);




// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6527],{26527:function(e,t,n){"use strict";var r=n(1864),i=n(97836);n(48764).Buffer;let o=e=>(0,r.extname)(e).toLowerCase(),a=(e,t,n,r)=>new Promise((o,a)=>{let l=[...document.scripts].find(t=>t.src.endsWith(e));if(l){if(!n){o(new Event("Already loaded."));return}l.remove()}let s=document.createElement("script");s.async=!1,t&&(s.defer=!0),r&&(s.type="module"),s.fetchPriority="high",s.src=e,s.addEventListener("error",a,i.K7),s.addEventListener("load",o,i.K7),document.head.append(s)}),l=e=>new Promise((t,n)=>{if([...document.querySelectorAll("link[rel=stylesheet]")].some(t=>t.href.endsWith(e))){t(new Event("Already loaded."));return}let r=document.createElement("link");r.rel="stylesheet",r.fetchPriority="high",r.href=e,r.addEventListener("error",n,i.K7),r.addEventListener("load",t,i.K7),document.head.append(r)}),s=async(e,t,n,r)=>e&&0!==e.length?e.reduce(async(e,i)=>{await (".css"===o(i)?l(encodeURI(i)):a(encodeURI(i),t,n,r))},Promise.resolve()):Promise.resolve(),c=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],h=async(e,t,n=!1)=>{n||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await s(c)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;let{prompts:r}=e;globalThis.tvmjsGlobalEnv.prompts=r?.length?r:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};globalThis.addEventListener("message",({data:e})=>{if("init"===e)globalThis.tvmjsGlobalEnv=globalThis.tvmjsGlobalEnv||{},globalThis.tvmjsGlobalEnv.logger=(e,t)=>{globalThis.postMessage({message:t,type:e})},globalThis.importScripts(...c);else if(!(e instanceof DOMRect)){let{canvas:t,config:n}=e;h(n,t,!0).then(()=>{globalThis.tvmjsGlobalEnv.logger("","")})}},{passive:!0})},97836:function(e,t,n){"use strict";n.d(t,{K7:function(){return l},i2:function(){return a}}),n(67294);let r=new Set([".heic",".heics",".heif",".heifs",".avci",".avcs"]),i=new Set([".cr2",".dng",".nef",".tif",".tiff"]),o=new Set([...r,...i,".ani",".apng",".avif",".bmp",".cur",".gif",".ico",".jfif",".jif",".jpe",".jpeg",".jpg",".jxl",".pjp",".pjpeg",".png",".svg",".qoi",".webp",".xbm"]);[...r,...i];let a=1e3,l={once:!0,passive:!0};[...new Set([".aac",".oga",".wav"]),...new Set([".asx",".m3u",".pls"]),...o,...i,...new Set([".m4v",".mkv",".mov",".mp4",".ogg",".ogm",".ogv",".webm"])]},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else if(47===n)break;else n=47;if(47===n){if(o===l-1||1===a);else if(o!==l-1&&2===a){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",i=0):i=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),o=l,a=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=l,a=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,l):r=e.slice(o+1,l),i=l-o-1;o=l,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,i="",o=!1,a=arguments.length-1;a>=-1&&!o;a--)a>=0?r=arguments[a]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,o=47===r.charCodeAt(0));return(i=n(i,!o),o)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,a=o-i,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var s=n.length-l,c=a<s?a:s,h=-1,f=0;f<=c;++f){if(f===c){if(s>c){if(47===n.charCodeAt(l+f))return n.slice(l+f+1);if(0===f)return n.slice(l+f)}else a>c&&(47===e.charCodeAt(i+f)?h=f:0===f&&(h=0));break}var g=e.charCodeAt(i+f);if(g!==n.charCodeAt(l+f))break;47===g&&(h=f)}var v="";for(f=i+h+1;f<=o;++f)(f===o||47===e.charCodeAt(f))&&(0===v.length?v+="..":v+="/..");return v.length>0?v+n.slice(l+h):(l+=h,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,s=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!a){i=r+1;break}}else -1===s&&(a=!1,s=r+1),l>=0&&(c===n.charCodeAt(l)?-1==--l&&(o=r):(l=-1,o=s))}return i===o?o=s:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){i=r+1;break}}else -1===o&&(a=!1,o=r+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,a=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47===s){if(!o){r=l+1;break}continue}-1===i&&(o=!1,i=l+1),46===s?-1===n?n=l:1!==a&&(a=1):-1!==n&&(a=-1)}return -1===n||-1===i||0===a||1===a&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var a=-1,l=0,s=-1,c=!0,h=e.length-1,f=0;h>=n;--h){if(47===(i=e.charCodeAt(h))){if(!c){l=h+1;break}continue}-1===s&&(c=!1,s=h+1),46===i?-1===a?a=h:1!==f&&(f=1):-1!==a&&(f=-1)}return -1===a||-1===s||0===f||1===f&&a===s-1&&a===l+1?-1!==s&&(0===l&&o?r.base=r.name=e.slice(1,s):r.base=r.name=e.slice(l,s)):(0===l&&o?(r.name=e.slice(1,a),r.base=e.slice(1,s)):(r.name=e.slice(l,a),r.base=e.slice(l,s)),r.ext=e.slice(a,s)),l>0?r.dir=e.slice(0,l-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,r),a=!1}finally{a&&delete n[e]}return o.exports}r.ab="//";var i=r(114);e.exports=i}()}}]);