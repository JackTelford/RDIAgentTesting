(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2463],
    {
        37811: function (e, t) {
            "use strict";
            /*!
             * content-type
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */ var a = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
                i = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
                r = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
                n = /\\([\u000b\u0020-\u00ff])/g,
                s = /([\\"])/g,
                o = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
            function l(e) {
                if (!e || "object" != typeof e) throw TypeError("argument obj is required");
                var t = e.parameters,
                    a = e.type;
                if (!a || !o.test(a)) throw TypeError("invalid type");
                var i = a;
                if (t && "object" == typeof t)
                    for (var n, s = Object.keys(t).sort(), l = 0; l < s.length; l++) {
                        if (((n = s[l]), !r.test(n))) throw TypeError("invalid parameter name");
                        i += "; " + n + "=" + u(t[n]);
                    }
                return i;
            }
            function c(e) {
                if (!e) throw TypeError("argument string is required");
                var t,
                    i,
                    r,
                    s = "object" == typeof e ? d(e) : e;
                if ("string" != typeof s) throw TypeError("argument string is required to be a string");
                var l = s.indexOf(";"),
                    c = -1 !== l ? s.slice(0, l).trim() : s.trim();
                if (!o.test(c)) throw TypeError("invalid media type");
                var u = new m(c.toLowerCase());
                if (-1 !== l) {
                    for (a.lastIndex = l; (i = a.exec(s));) {
                        if (i.index !== l) throw TypeError("invalid parameter format");
                        (l += i[0].length), (t = i[1].toLowerCase()), 34 === (r = i[2]).charCodeAt(0) && -1 !== (r = r.slice(1, -1)).indexOf("\\") && (r = r.replace(n, "$1")), (u.parameters[t] = r);
                    }
                    if (l !== s.length) throw TypeError("invalid parameter format");
                }
                return u;
            }
            function d(e) {
                var t;
                if (("function" == typeof e.getHeader ? (t = e.getHeader("content-type")) : "object" == typeof e.headers && (t = e.headers && e.headers["content-type"]), "string" != typeof t))
                    throw TypeError("content-type header is missing from object");
                return t;
            }
            function u(e) {
                var t = String(e);
                if (r.test(t)) return t;
                if (t.length > 0 && !i.test(t)) throw TypeError("invalid parameter value");
                return '"' + t.replace(s, "\\$1") + '"';
            }
            function m(e) {
                (this.parameters = Object.create(null)), (this.type = e);
            }
            (t.format = l), (t.parse = c);
        },
        11227: function (e, t, a) {
            var i = a(34155);
            function r() {
                return (
                    ("undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs)) ||
                    (!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                        (("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                            ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                            ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                            ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
                );
            }
            function n(t) {
                if (((t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff)), !this.useColors)) return;
                let a = "color: " + this.color;
                t.splice(1, 0, a, "color: inherit");
                let i = 0,
                    r = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e) => {
                    "%%" !== e && (i++, "%c" === e && (r = i));
                }),
                    t.splice(r, 0, a);
            }
            function s(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
                } catch (e) { }
            }
            function o() {
                let e;
                try {
                    e = t.storage.getItem("debug");
                } catch (e) { }
                return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e;
            }
            function l() {
                try {
                    return localStorage;
                } catch (e) { }
            }
            (t.formatArgs = n),
                (t.save = s),
                (t.load = o),
                (t.useColors = r),
                (t.storage = l()),
                (t.destroy = (() => {
                    let e = !1;
                    return () => {
                        e || ((e = !0), console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                    };
                })()),
                (t.colors = [
                    "#0000CC",
                    "#0000FF",
                    "#0033CC",
                    "#0033FF",
                    "#0066CC",
                    "#0066FF",
                    "#0099CC",
                    "#0099FF",
                    "#00CC00",
                    "#00CC33",
                    "#00CC66",
                    "#00CC99",
                    "#00CCCC",
                    "#00CCFF",
                    "#3300CC",
                    "#3300FF",
                    "#3333CC",
                    "#3333FF",
                    "#3366CC",
                    "#3366FF",
                    "#3399CC",
                    "#3399FF",
                    "#33CC00",
                    "#33CC33",
                    "#33CC66",
                    "#33CC99",
                    "#33CCCC",
                    "#33CCFF",
                    "#6600CC",
                    "#6600FF",
                    "#6633CC",
                    "#6633FF",
                    "#66CC00",
                    "#66CC33",
                    "#9900CC",
                    "#9900FF",
                    "#9933CC",
                    "#9933FF",
                    "#99CC00",
                    "#99CC33",
                    "#CC0000",
                    "#CC0033",
                    "#CC0066",
                    "#CC0099",
                    "#CC00CC",
                    "#CC00FF",
                    "#CC3300",
                    "#CC3333",
                    "#CC3366",
                    "#CC3399",
                    "#CC33CC",
                    "#CC33FF",
                    "#CC6600",
                    "#CC6633",
                    "#CC9900",
                    "#CC9933",
                    "#CCCC00",
                    "#CCCC33",
                    "#FF0000",
                    "#FF0033",
                    "#FF0066",
                    "#FF0099",
                    "#FF00CC",
                    "#FF00FF",
                    "#FF3300",
                    "#FF3333",
                    "#FF3366",
                    "#FF3399",
                    "#FF33CC",
                    "#FF33FF",
                    "#FF6600",
                    "#FF6633",
                    "#FF9900",
                    "#FF9933",
                    "#FFCC00",
                    "#FFCC33",
                ]),
                (t.log = console.debug || console.log || (() => { })),
                (e.exports = a(82447)(t));
            let { formatters: c } = e.exports;
            c.j = function (e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            };
        },
        82447: function (e, t, a) {
            function i(e) {
                function t(e) {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = ((t << 5) - t + e.charCodeAt(a)) | 0;
                    return i.colors[Math.abs(t) % i.colors.length];
                }
                function i(e) {
                    let t, a, n;
                    let s = null;
                    function o(...e) {
                        if (!o.enabled) return;
                        let a = o,
                            r = Number(new Date()),
                            n = r - (t || r);
                        (a.diff = n), (a.prev = t), (a.curr = r), (t = r), (e[0] = i.coerce(e[0])), "string" != typeof e[0] && e.unshift("%O");
                        let s = 0;
                        (e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, r) => {
                            if ("%%" === t) return "%";
                            s++;
                            let n = i.formatters[r];
                            if ("function" == typeof n) {
                                let i = e[s];
                                (t = n.call(a, i)), e.splice(s, 1), s--;
                            }
                            return t;
                        })),
                            i.formatArgs.call(a, e),
                            (a.log || i.log).apply(a, e);
                    }
                    return (
                        (o.namespace = e),
                        (o.useColors = i.useColors()),
                        (o.color = i.selectColor(e)),
                        (o.extend = r),
                        (o.destroy = i.destroy),
                        Object.defineProperty(o, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: () => (null !== s ? s : (a !== i.namespaces && ((a = i.namespaces), (n = i.enabled(e))), n)),
                            set: (e) => {
                                s = e;
                            },
                        }),
                        "function" == typeof i.init && i.init(o),
                        o
                    );
                }
                function r(e, t) {
                    let a = i(this.namespace + (void 0 === t ? ":" : t) + e);
                    return (a.log = this.log), a;
                }
                function n(e) {
                    let t;
                    i.save(e), (i.namespaces = e), (i.names = []), (i.skips = []);
                    let a = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        r = a.length;
                    for (t = 0; t < r; t++) a[t] && ("-" === (e = a[t].replace(/\*/g, ".*?"))[0] ? i.skips.push(RegExp("^" + e.slice(1) + "$")) : i.names.push(RegExp("^" + e + "$")));
                }
                function s() {
                    let e = [...i.names.map(l), ...i.skips.map(l).map((e) => "-" + e)].join(",");
                    return i.enable(""), e;
                }
                function o(e) {
                    let t, a;
                    if ("*" === e[e.length - 1]) return !0;
                    for (t = 0, a = i.skips.length; t < a; t++) if (i.skips[t].test(e)) return !1;
                    for (t = 0, a = i.names.length; t < a; t++) if (i.names[t].test(e)) return !0;
                    return !1;
                }
                function l(e) {
                    return e
                        .toString()
                        .substring(2, e.toString().length - 2)
                        .replace(/\.\*\?$/, "*");
                }
                function c(e) {
                    return e instanceof Error ? e.stack || e.message : e;
                }
                function d() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                }
                return (
                    (i.debug = i),
                    (i.default = i),
                    (i.coerce = c),
                    (i.disable = s),
                    (i.enable = n),
                    (i.enabled = o),
                    (i.humanize = a(57824)),
                    (i.destroy = d),
                    Object.keys(e).forEach((t) => {
                        i[t] = e[t];
                    }),
                    (i.names = []),
                    (i.skips = []),
                    (i.formatters = {}),
                    (i.selectColor = t),
                    i.enable(i.load()),
                    i
                );
            }
            e.exports = i;
        },
        22577: function (e, t) {
            "use strict";
            /*!
             * media-typer
             * Copyright(c) 2014-2017 Douglas Christopher Wilson
             * MIT Licensed
             */ var a = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,
                i = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,
                r = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
            function n(e) {
                if (!e || "object" != typeof e) throw TypeError("argument obj is required");
                var t = e.subtype,
                    r = e.suffix,
                    n = e.type;
                if (!n || !i.test(n)) throw TypeError("invalid type");
                if (!t || !a.test(t)) throw TypeError("invalid subtype");
                var s = n + "/" + t;
                if (r) {
                    if (!i.test(r)) throw TypeError("invalid suffix");
                    s += "+" + r;
                }
                return s;
            }
            function s(e) {
                if (!e) throw TypeError("argument string is required");
                if ("string" != typeof e) throw TypeError("argument string is required to be a string");
                return r.test(e.toLowerCase());
            }
            function o(e) {
                if (!e) throw TypeError("argument string is required");
                if ("string" != typeof e) throw TypeError("argument string is required to be a string");
                var t,
                    a = r.exec(e.toLowerCase());
                if (!a) throw TypeError("invalid media type");
                var i = a[1],
                    n = a[2],
                    s = n.lastIndexOf("+");
                return -1 !== s && ((t = n.substr(s + 1)), (n = n.substr(0, s))), new l(i, n, t);
            }
            function l(e, t, a) {
                (this.type = e), (this.subtype = t), (this.suffix = a);
            }
            (t.format = n), (t.parse = o), (t.test = s);
        },
        57824: function (e) {
            var t = 1e3,
                a = 6e4,
                i = 36e5,
                r = 864e5,
                n = 6048e5,
                s = 315576e5;
            function o(e) {
                if (!((e = String(e)).length > 100)) {
                    var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (o) {
                        var l = parseFloat(o[1]);
                        switch ((o[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return l * s;
                            case "weeks":
                            case "week":
                            case "w":
                                return l * n;
                            case "days":
                            case "day":
                            case "d":
                                return l * r;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return l * i;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return l * a;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return l * t;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return l;
                            default:
                                return;
                        }
                    }
                }
            }
            function l(e) {
                var n = Math.abs(e);
                return n >= r ? Math.round(e / r) + "d" : n >= i ? Math.round(e / i) + "h" : n >= a ? Math.round(e / a) + "m" : n >= t ? Math.round(e / t) + "s" : e + "ms";
            }
            function c(e) {
                var n = Math.abs(e);
                return n >= r ? d(e, n, r, "day") : n >= i ? d(e, n, i, "hour") : n >= a ? d(e, n, a, "minute") : n >= t ? d(e, n, t, "second") : e + " ms";
            }
            function d(e, t, a, i) {
                var r = t >= 1.5 * a;
                return Math.round(e / a) + " " + i + (r ? "s" : "");
            }
            e.exports = function (e, t) {
                t = t || {};
                var a = typeof e;
                if ("string" === a && e.length > 0) return o(e);
                if ("number" === a && isFinite(e)) return t.long ? c(e) : l(e);
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
            };
        },
        52463: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.fetchFromUrl = t.parseBlob = t.parseReadableStream = t.parseNodeStream = t.selectCover = t.ratingToStars = t.orderTags = t.parseFromTokenizer = t.parseBuffer = void 0);
            let i = a(11227),
                r = a(80523),
                n = a(58090),
                s = i("music-metadata-browser:main");
            var o = a(80523);
            async function l(e, a, i) {
                let r = new n.ReadableWebToNodeStream(e),
                    s = await (0, t.parseNodeStream)(r, "string" == typeof a ? { mimeType: a } : a, i);
                return await r.close(), s;
            }
            async function c(e, t) {
                let a = { mimeType: e.type, size: e.size };
                return e instanceof File && (a.path = e.name), l(e.stream ? e.stream() : d(e), { mimeType: e.type, size: e.size }, t);
            }
            function d(e) {
                let t = new FileReader();
                return new ReadableStream({
                    start(a) {
                        (t.onloadend = (e) => {
                            let t = e.target.result;
                            t instanceof ArrayBuffer && (t = new Uint8Array(t)), a.enqueue(t), a.close();
                        }),
                            (t.onerror = (e) => {
                                a.close();
                            }),
                            (t.onabort = (e) => {
                                a.close();
                            }),
                            t.readAsArrayBuffer(e);
                    },
                });
            }
            async function u(e, t) {
                let a = await fetch(e),
                    i = { size: parseInt(a.headers.get("Content-Length"), 10), mimeType: a.headers.get("Content-Type") };
                if (a.ok) {
                    if (!a.body) return c(await a.blob(), t);
                    {
                        let e = await l(a.body, i, t);
                        return s("Closing HTTP-readable-stream..."), a.body.locked || (await a.body.cancel()), s("HTTP-readable-stream closed."), e;
                    }
                }
                throw Error(`HTTP error status=${a.status}: ${a.statusText}`);
            }
            Object.defineProperty(t, "parseBuffer", {
                enumerable: !0,
                get: function () {
                    return o.parseBuffer;
                },
            }),
                Object.defineProperty(t, "parseFromTokenizer", {
                    enumerable: !0,
                    get: function () {
                        return o.parseFromTokenizer;
                    },
                }),
                Object.defineProperty(t, "orderTags", {
                    enumerable: !0,
                    get: function () {
                        return o.orderTags;
                    },
                }),
                Object.defineProperty(t, "ratingToStars", {
                    enumerable: !0,
                    get: function () {
                        return o.ratingToStars;
                    },
                }),
                Object.defineProperty(t, "selectCover", {
                    enumerable: !0,
                    get: function () {
                        return o.selectCover;
                    },
                }),
                (t.parseNodeStream = r.parseStream),
                (t.parseReadableStream = l),
                (t.parseBlob = c),
                (t.fetchFromUrl = u);
        },
        83275: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParserFactory = t.parseHttpContentType = void 0);
            let r = a(72933),
                n = a(37811),
                s = a(22577),
                o = a(11227),
                l = a(27584),
                c = a(15410),
                d = a(6742),
                u = a(31004),
                m = a(70498),
                p = a(38841),
                f = a(10060),
                g = a(19606),
                h = a(71915),
                T = a(32682),
                k = a(95870),
                b = a(61533),
                I = a(16789),
                y = a(50078),
                v = (0, o.default)("music-metadata:parser:factory");
            function S(e) {
                let t = n.parse(e),
                    a = s.parse(t.type);
                return { type: a.type, subtype: a.subtype, suffix: a.suffix, parameters: t.parameters };
            }
            async function E(e, t, a = {}) {
                let i = await w.loadParser(t),
                    r = new l.MetadataCollector(a);
                return await i.init(r, e, a).parse(), r.toCommonMetadata();
            }
            t.parseHttpContentType = S;
            class w {
                static async parseOnContentType(e, t) {
                    let { mimeType: a, path: i, url: r } = await e.fileInfo,
                        n = w.getParserIdForMimeType(a) || w.getParserIdForExtension(i) || w.getParserIdForExtension(r);
                    return n || v("No parser found for MIME-type / extension: " + a), this.parse(e, n, t);
                }
                static async parse(e, t, a) {
                    if (!t) {
                        v("Guess parser on content...");
                        let a = i.alloc(4100);
                        if ((await e.peekBuffer(a, { mayBeLess: !0 }), e.fileInfo.path && (t = this.getParserIdForExtension(e.fileInfo.path)), !t)) {
                            let e = await r.fromBuffer(a);
                            if (!e) throw Error("Failed to determine audio format");
                            if ((v(`Guessed file type is mime=${e.mime}, extension=${e.ext}`), !(t = w.getParserIdForMimeType(e.mime)))) throw Error("Guessed MIME-type not supported: " + e.mime);
                        }
                    }
                    return E(e, t, a);
                }
                static getParserIdForExtension(e) {
                    if (e)
                        switch (this.getExtension(e).toLocaleLowerCase() || e) {
                            case ".mp2":
                            case ".mp3":
                            case ".m2a":
                            case ".aac":
                                return "mpeg";
                            case ".ape":
                                return "apev2";
                            case ".mp4":
                            case ".m4a":
                            case ".m4b":
                            case ".m4pa":
                            case ".m4v":
                            case ".m4r":
                            case ".3gp":
                                return "mp4";
                            case ".wma":
                            case ".wmv":
                            case ".asf":
                                return "asf";
                            case ".flac":
                                return "flac";
                            case ".ogg":
                            case ".ogv":
                            case ".oga":
                            case ".ogm":
                            case ".ogx":
                            case ".opus":
                            case ".spx":
                                return "ogg";
                            case ".aif":
                            case ".aiff":
                            case ".aifc":
                                return "aiff";
                            case ".wav":
                            case ".bwf":
                                return "riff";
                            case ".wv":
                            case ".wvp":
                                return "wavpack";
                            case ".mpc":
                                return "musepack";
                            case ".dsf":
                                return "dsf";
                            case ".dff":
                                return "dsdiff";
                            case ".mka":
                            case ".mkv":
                            case ".mk3d":
                            case ".mks":
                            case ".webm":
                                return "matroska";
                        }
                }
                static async loadParser(e) {
                    switch (e) {
                        case "aiff":
                            return new c.AIFFParser();
                        case "adts":
                        case "mpeg":
                            return new f.MpegParser();
                        case "apev2":
                            return new d.APEv2Parser();
                        case "asf":
                            return new u.AsfParser();
                        case "dsf":
                            return new b.DsfParser();
                        case "dsdiff":
                            return new I.DsdiffParser();
                        case "flac":
                            return new m.FlacParser();
                        case "mp4":
                            return new p.MP4Parser();
                        case "musepack":
                            return new g.default();
                        case "ogg":
                            return new h.OggParser();
                        case "riff":
                            return new T.WaveParser();
                        case "wavpack":
                            return new k.WavPackParser();
                        case "matroska":
                            return new y.MatroskaParser();
                        default:
                            throw Error(`Unknown parser type: ${e}`);
                    }
                }
                static getExtension(e) {
                    let t = e.lastIndexOf(".");
                    return -1 === t ? "" : e.slice(t);
                }
                static getParserIdForMimeType(e) {
                    let t;
                    try {
                        t = S(e);
                    } catch (t) {
                        v(`Invalid HTTP Content-Type header value: ${e}`);
                        return;
                    }
                    let a = 0 === t.subtype.indexOf("x-") ? t.subtype.substring(2) : t.subtype;
                    switch (t.type) {
                        case "audio":
                            switch (a) {
                                case "mp3":
                                case "mpeg":
                                    return "mpeg";
                                case "aac":
                                case "aacp":
                                    return "adts";
                                case "flac":
                                    return "flac";
                                case "ape":
                                case "monkeys-audio":
                                    return "apev2";
                                case "mp4":
                                case "m4a":
                                    return "mp4";
                                case "ogg":
                                case "opus":
                                case "speex":
                                    return "ogg";
                                case "ms-wma":
                                case "ms-wmv":
                                case "ms-asf":
                                    return "asf";
                                case "aiff":
                                case "aif":
                                case "aifc":
                                    return "aiff";
                                case "vnd.wave":
                                case "wav":
                                case "wave":
                                    return "riff";
                                case "wavpack":
                                    return "wavpack";
                                case "musepack":
                                    return "musepack";
                                case "matroska":
                                case "webm":
                                    return "matroska";
                                case "dsf":
                                    return "dsf";
                            }
                            break;
                        case "video":
                            switch (a) {
                                case "ms-asf":
                                case "ms-wmv":
                                    return "asf";
                                case "m4v":
                                case "mp4":
                                    return "mp4";
                                case "ogg":
                                    return "ogg";
                                case "matroska":
                                case "webm":
                                    return "matroska";
                            }
                            break;
                        case "application":
                            switch (a) {
                                case "vnd.ms-asf":
                                    return "asf";
                                case "ogg":
                                    return "ogg";
                            }
                    }
                }
            }
            t.ParserFactory = w;
        },
        15410: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AIFFParser = void 0);
            let i = a(20036),
                r = a(11227),
                n = a(35849),
                s = a(8928),
                o = a(28049),
                l = a(87805),
                c = a(1162),
                d = a(44633),
                u = (0, r.default)("music-metadata:parser:aiff"),
                m = {
                    NONE: "not compressed	PCM	Apple Computer",
                    sowt: "PCM (byte swapped)",
                    fl32: "32-bit floating point IEEE 32-bit float",
                    fl64: "64-bit floating point IEEE 64-bit float	Apple Computer",
                    alaw: "ALaw 2:1	8-bit ITU-T G.711 A-law",
                    ulaw: "\xb5Law 2:1	8-bit ITU-T G.711 \xb5-law	Apple Computer",
                    ULAW: "CCITT G.711 u-law 8-bit ITU-T G.711 \xb5-law",
                    ALAW: "CCITT G.711 A-law 8-bit ITU-T G.711 A-law",
                    FL32: "Float 32	IEEE 32-bit float ",
                };
            class p extends l.BasicParser {
                async parse() {
                    if ("FORM" !== (await this.tokenizer.readToken(d.Header)).chunkID) throw Error("Invalid Chunk-ID, expected 'FORM'");
                    let e = await this.tokenizer.readToken(o.FourCcToken);
                    switch (e) {
                        case "AIFF":
                            this.metadata.setFormat("container", e), (this.isCompressed = !1);
                            break;
                        case "AIFC":
                            this.metadata.setFormat("container", "AIFF-C"), (this.isCompressed = !0);
                            break;
                        default:
                            throw Error("Unsupported AIFF type: " + e);
                    }
                    this.metadata.setFormat("lossless", !this.isCompressed);
                    try {
                        for (; !this.tokenizer.fileInfo.size || this.tokenizer.fileInfo.size - this.tokenizer.position >= d.Header.len;) {
                            u("Reading AIFF chunk at offset=" + this.tokenizer.position);
                            let e = await this.tokenizer.readToken(d.Header),
                                t = 2 * Math.round(e.chunkSize / 2),
                                a = await this.readData(e);
                            await this.tokenizer.ignore(t - a);
                        }
                    } catch (e) {
                        if (e instanceof n.EndOfStreamError) u("End-of-stream");
                        else throw e;
                    }
                }
                async readData(e) {
                    var t;
                    switch (e.chunkID) {
                        case "COMM":
                            let a = await this.tokenizer.readToken(new c.Common(e, this.isCompressed));
                            return (
                                this.metadata.setFormat("bitsPerSample", a.sampleSize),
                                this.metadata.setFormat("sampleRate", a.sampleRate),
                                this.metadata.setFormat("numberOfChannels", a.numChannels),
                                this.metadata.setFormat("numberOfSamples", a.numSampleFrames),
                                this.metadata.setFormat("duration", a.numSampleFrames / a.sampleRate),
                                this.metadata.setFormat("codec", null !== (t = a.compressionName) && void 0 !== t ? t : m[a.compressionType]),
                                e.chunkSize
                            );
                        case "ID3 ":
                            let r = await this.tokenizer.readToken(new i.Uint8ArrayType(e.chunkSize)),
                                o = n.fromBuffer(r);
                            return await new s.ID3v2Parser().parse(this.metadata, o, this.options), e.chunkSize;
                        case "SSND":
                            return this.metadata.format.duration && this.metadata.setFormat("bitrate", (8 * e.chunkSize) / this.metadata.format.duration), 0;
                        case "NAME":
                        case "AUTH":
                        case "(c) ":
                        case "ANNO":
                            return this.readTextChunk(e);
                        default:
                            return u(`Ignore chunk id=${e.chunkID}, size=${e.chunkSize}`), 0;
                    }
                }
                async readTextChunk(e) {
                    return (
                        (await this.tokenizer.readToken(new i.StringType(e.chunkSize, "ascii")))
                            .split("\0")
                            .map((e) => e.trim())
                            .filter((e) => e && e.length > 0)
                            .forEach((t) => {
                                this.metadata.addTag("AIFF", e.chunkID, t.trim());
                            }),
                        e.chunkSize
                    );
                }
            }
            t.AIFFParser = p;
        },
        8815: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AiffTagMapper = void 0);
            let i = a(89918),
                r = { NAME: "title", AUTH: "artist", "(c) ": "copyright", ANNO: "comment" };
            class n extends i.CommonTagMapper {
                constructor() {
                    super(["AIFF"], r);
                }
            }
            t.AiffTagMapper = n;
        },
        1162: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Common = void 0);
            let i = a(20036),
                r = a(28049);
            class n {
                constructor(e, t) {
                    this.isAifc = t;
                    let a = t ? 22 : 18;
                    if (e.chunkSize < a) throw Error(`COMMON CHUNK size should always be at least ${a}`);
                    this.len = e.chunkSize;
                }
                get(e, t) {
                    let a = e.readUInt16BE(t + 8) - 16398,
                        n = e.readUInt16BE(t + 8 + 2),
                        s = { numChannels: e.readUInt16BE(t), numSampleFrames: e.readUInt32BE(t + 2), sampleSize: e.readUInt16BE(t + 6), sampleRate: a < 0 ? n >> Math.abs(a) : n << a };
                    if (this.isAifc) {
                        if (((s.compressionType = r.FourCcToken.get(e, t + 18)), this.len > 22)) {
                            let a = e.readInt8(t + 22);
                            if (a > 0) {
                                let r = (a + 1) % 2;
                                if (23 + a + r === this.len) s.compressionName = new i.StringType(a, "binary").get(e, t + 23);
                                else throw Error("Illegal pstring length");
                            } else s.compressionName = void 0;
                        }
                    } else s.compressionName = "PCM";
                    return s;
                }
            }
            t.Common = n;
        },
        6742: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.APEv2Parser = void 0);
            let r = a(11227),
                n = a(35849),
                s = a(20036),
                o = a(83769),
                l = a(87805),
                c = a(50876),
                d = (0, r.default)("music-metadata:parser:APEv2"),
                u = "APEv2",
                m = "APETAGEX";
            class p extends l.BasicParser {
                constructor() {
                    super(...arguments), (this.ape = {});
                }
                static tryParseApeHeader(e, t, a) {
                    let i = new p();
                    return i.init(e, t, a), i.tryParseApeHeader();
                }
                static calculateDuration(e) {
                    let t = e.totalFrames > 1 ? e.blocksPerFrame * (e.totalFrames - 1) : 0;
                    return (t += e.finalFrameBlocks) / e.sampleRate;
                }
                static async findApeFooterOffset(e, t) {
                    let a = i.alloc(c.TagFooter.len);
                    await e.randomRead(a, 0, c.TagFooter.len, t - c.TagFooter.len);
                    let r = c.TagFooter.get(a, 0);
                    if ("APETAGEX" === r.ID) return d(`APE footer header at offset=${t}`), { footer: r, offset: t - r.size };
                }
                static parseTagFooter(e, t, a) {
                    let i = c.TagFooter.get(t, t.length - c.TagFooter.len);
                    if (i.ID !== m) throw Error("Unexpected APEv2 Footer ID preamble value.");
                    n.fromBuffer(t);
                    let r = new p();
                    return r.init(e, n.fromBuffer(t), a), r.parseTags(i);
                }
                async tryParseApeHeader() {
                    if (this.tokenizer.fileInfo.size && this.tokenizer.fileInfo.size - this.tokenizer.position < c.TagFooter.len) {
                        d("No APEv2 header found, end-of-file reached");
                        return;
                    }
                    let e = await this.tokenizer.peekToken(c.TagFooter);
                    if (e.ID === m) return await this.tokenizer.ignore(c.TagFooter.len), this.parseTags(e);
                    if ((d(`APEv2 header not found at offset=${this.tokenizer.position}`), this.tokenizer.fileInfo.size)) {
                        let e = this.tokenizer.fileInfo.size - this.tokenizer.position,
                            t = i.alloc(e);
                        return await this.tokenizer.readBuffer(t), p.parseTagFooter(this.metadata, t, this.options);
                    }
                }
                async parse() {
                    let e = await this.tokenizer.readToken(c.DescriptorParser);
                    if ("MAC " !== e.ID) throw Error("Unexpected descriptor ID");
                    this.ape.descriptor = e;
                    let t = e.descriptorBytes - c.DescriptorParser.len,
                        a = await (t > 0 ? this.parseDescriptorExpansion(t) : this.parseHeader());
                    return await this.tokenizer.ignore(a.forwardBytes), this.tryParseApeHeader();
                }
                async parseTags(e) {
                    let t = i.alloc(256),
                        a = e.size - c.TagFooter.len;
                    d(`Parse APE tags at offset=${this.tokenizer.position}, size=${a}`);
                    for (let r = 0; r < e.fields; r++) {
                        if (a < c.TagItemHeader.len) {
                            this.metadata.addWarning(`APEv2 Tag-header: ${e.fields - r} items remaining, but no more tag data to read.`);
                            break;
                        }
                        let n = await this.tokenizer.readToken(c.TagItemHeader);
                        (a -= c.TagItemHeader.len + n.size), await this.tokenizer.peekBuffer(t, { length: Math.min(t.length, a) });
                        let l = o.findZero(t, 0, t.length),
                            m = await this.tokenizer.readToken(new s.StringType(l, "ascii"));
                        switch ((await this.tokenizer.ignore(1), (a -= m.length + 1), n.flags.dataType)) {
                            case c.DataType.text_utf8:
                                for (let e of (await this.tokenizer.readToken(new s.StringType(n.size, "utf8"))).split(/\x00/g)) this.metadata.addTag(u, m, e);
                                break;
                            case c.DataType.binary:
                                if (this.options.skipCovers) await this.tokenizer.ignore(n.size);
                                else {
                                    let e = i.alloc(n.size);
                                    await this.tokenizer.readBuffer(e), (l = o.findZero(e, 0, e.length));
                                    let t = e.toString("utf8", 0, l),
                                        a = i.from(e.slice(l + 1));
                                    this.metadata.addTag(u, m, { description: t, data: a });
                                }
                                break;
                            case c.DataType.external_info:
                                d(`Ignore external info ${m}`), await this.tokenizer.ignore(n.size);
                                break;
                            case c.DataType.reserved:
                                d(`Ignore external info ${m}`), this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${m}"`), await this.tokenizer.ignore(n.size);
                        }
                    }
                }
                async parseDescriptorExpansion(e) {
                    return await this.tokenizer.ignore(e), this.parseHeader();
                }
                async parseHeader() {
                    let e = await this.tokenizer.readToken(c.Header);
                    return (
                        this.metadata.setFormat("lossless", !0),
                        this.metadata.setFormat("container", "Monkey's Audio"),
                        this.metadata.setFormat("bitsPerSample", e.bitsPerSample),
                        this.metadata.setFormat("sampleRate", e.sampleRate),
                        this.metadata.setFormat("numberOfChannels", e.channel),
                        this.metadata.setFormat("duration", p.calculateDuration(e)),
                        { forwardBytes: this.ape.descriptor.seekTableBytes + this.ape.descriptor.headerDataBytes + this.ape.descriptor.apeFrameDataBytes + this.ape.descriptor.terminatingDataBytes }
                    );
                }
            }
            t.APEv2Parser = p;
        },
        48414: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.APEv2TagMapper = void 0);
            let i = a(24132),
                r = {
                    Title: "title",
                    Artist: "artist",
                    Artists: "artists",
                    "Album Artist": "albumartist",
                    Album: "album",
                    Year: "date",
                    Originalyear: "originalyear",
                    Originaldate: "originaldate",
                    Comment: "comment",
                    Track: "track",
                    Disc: "disk",
                    DISCNUMBER: "disk",
                    Genre: "genre",
                    "Cover Art (Front)": "picture",
                    "Cover Art (Back)": "picture",
                    Composer: "composer",
                    Lyrics: "lyrics",
                    ALBUMSORT: "albumsort",
                    TITLESORT: "titlesort",
                    WORK: "work",
                    ARTISTSORT: "artistsort",
                    ALBUMARTISTSORT: "albumartistsort",
                    COMPOSERSORT: "composersort",
                    Lyricist: "lyricist",
                    Writer: "writer",
                    Conductor: "conductor",
                    MixArtist: "remixer",
                    Arranger: "arranger",
                    Engineer: "engineer",
                    Producer: "producer",
                    DJMixer: "djmixer",
                    Mixer: "mixer",
                    Label: "label",
                    Grouping: "grouping",
                    Subtitle: "subtitle",
                    DiscSubtitle: "discsubtitle",
                    Compilation: "compilation",
                    BPM: "bpm",
                    Mood: "mood",
                    Media: "media",
                    CatalogNumber: "catalognumber",
                    MUSICBRAINZ_ALBUMSTATUS: "releasestatus",
                    MUSICBRAINZ_ALBUMTYPE: "releasetype",
                    RELEASECOUNTRY: "releasecountry",
                    Script: "script",
                    Language: "language",
                    Copyright: "copyright",
                    LICENSE: "license",
                    EncodedBy: "encodedby",
                    EncoderSettings: "encodersettings",
                    Barcode: "barcode",
                    ISRC: "isrc",
                    ASIN: "asin",
                    musicbrainz_trackid: "musicbrainz_recordingid",
                    musicbrainz_releasetrackid: "musicbrainz_trackid",
                    MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
                    MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
                    MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
                    MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
                    MUSICBRAINZ_WORKID: "musicbrainz_workid",
                    MUSICBRAINZ_TRMID: "musicbrainz_trmid",
                    MUSICBRAINZ_DISCID: "musicbrainz_discid",
                    Acoustid_Id: "acoustid_id",
                    ACOUSTID_FINGERPRINT: "acoustid_fingerprint",
                    MUSICIP_PUID: "musicip_puid",
                    Weblink: "website",
                    REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
                    REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
                    MP3GAIN_MINMAX: "replaygain_track_minmax",
                    MP3GAIN_UNDO: "replaygain_undo",
                };
            class n extends i.CaseInsensitiveTagMap {
                constructor() {
                    super(["APEv2"], r);
                }
            }
            t.APEv2TagMapper = n;
        },
        50876: function (e, t, a) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.isBitSet = t.parseTagFlags = t.TagField = t.TagItemHeader = t.TagFooter = t.Header = t.DescriptorParser = t.DataType = void 0);
            let r = a(20036),
                n = a(28049);
            !(function (e) {
                (e[(e.text_utf8 = 0)] = "text_utf8"), (e[(e.binary = 1)] = "binary"), (e[(e.external_info = 2)] = "external_info"), (e[(e.reserved = 3)] = "reserved");
            })((i = t.DataType || (t.DataType = {}))),
                (t.DescriptorParser = {
                    len: 52,
                    get: (e, t) => ({
                        ID: n.FourCcToken.get(e, t),
                        version: r.UINT32_LE.get(e, t + 4) / 1e3,
                        descriptorBytes: r.UINT32_LE.get(e, t + 8),
                        headerBytes: r.UINT32_LE.get(e, t + 12),
                        seekTableBytes: r.UINT32_LE.get(e, t + 16),
                        headerDataBytes: r.UINT32_LE.get(e, t + 20),
                        apeFrameDataBytes: r.UINT32_LE.get(e, t + 24),
                        apeFrameDataBytesHigh: r.UINT32_LE.get(e, t + 28),
                        terminatingDataBytes: r.UINT32_LE.get(e, t + 32),
                        fileMD5: new r.Uint8ArrayType(16).get(e, t + 36),
                    }),
                }),
                (t.Header = {
                    len: 24,
                    get: (e, t) => ({
                        compressionLevel: r.UINT16_LE.get(e, t),
                        formatFlags: r.UINT16_LE.get(e, t + 2),
                        blocksPerFrame: r.UINT32_LE.get(e, t + 4),
                        finalFrameBlocks: r.UINT32_LE.get(e, t + 8),
                        totalFrames: r.UINT32_LE.get(e, t + 12),
                        bitsPerSample: r.UINT16_LE.get(e, t + 16),
                        channel: r.UINT16_LE.get(e, t + 18),
                        sampleRate: r.UINT32_LE.get(e, t + 20),
                    }),
                }),
                (t.TagFooter = {
                    len: 32,
                    get: (e, t) => ({ ID: new r.StringType(8, "ascii").get(e, t), version: r.UINT32_LE.get(e, t + 8), size: r.UINT32_LE.get(e, t + 12), fields: r.UINT32_LE.get(e, t + 16), flags: o(r.UINT32_LE.get(e, t + 20)) }),
                }),
                (t.TagItemHeader = { len: 8, get: (e, t) => ({ size: r.UINT32_LE.get(e, t), flags: o(r.UINT32_LE.get(e, t + 4)) }) });
            let s = (e) => new r.Uint8ArrayType(e.size - t.TagFooter.len);
            function o(e) {
                return { containsHeader: l(e, 31), containsFooter: l(e, 30), isHeader: l(e, 31), readOnly: l(e, 0), dataType: (6 & e) >> 1 };
            }
            function l(e, t) {
                return (e & (1 << t)) != 0;
            }
            (t.TagField = s), (t.parseTagFlags = o), (t.isBitSet = l);
        },
        85174: function (e, t, a) {
            "use strict";
            var i,
                r = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.WmPictureToken = t.MetadataLibraryObjectState = t.MetadataObjectState = t.ExtendedStreamPropertiesObjectState = t.ExtendedContentDescriptionObjectState = t.ContentDescriptionObjectState = t.readCodecEntries = t.HeaderExtensionObject = t.StreamPropertiesObject = t.FilePropertiesObject = t.IgnoreObjectState = t.State = t.HeaderObjectToken = t.TopLevelHeaderObjectToken = t.DataType = void 0);
            let n = a(83769),
                s = a(20036),
                o = a(48054),
                l = a(82252),
                c = a(78281);
            !(function (e) {
                (e[(e.UnicodeString = 0)] = "UnicodeString"), (e[(e.ByteArray = 1)] = "ByteArray"), (e[(e.Bool = 2)] = "Bool"), (e[(e.DWord = 3)] = "DWord"), (e[(e.QWord = 4)] = "QWord"), (e[(e.Word = 5)] = "Word");
            })((i = t.DataType || (t.DataType = {}))),
                (t.TopLevelHeaderObjectToken = {
                    len: 30,
                    get: (e, t) => ({ objectId: o.default.fromBin(new s.BufferType(16).get(e, t)), objectSize: Number(s.UINT64_LE.get(e, t + 16)), numberOfHeaderObjects: s.UINT32_LE.get(e, t + 24) }),
                }),
                (t.HeaderObjectToken = { len: 24, get: (e, t) => ({ objectId: o.default.fromBin(new s.BufferType(16).get(e, t)), objectSize: Number(s.UINT64_LE.get(e, t + 16)) }) });
            class d {
                constructor(e) {
                    this.len = Number(e.objectSize) - t.HeaderObjectToken.len;
                }
                postProcessTag(e, t, a, i) {
                    if ("WM/Picture" === t) e.push({ id: t, value: w.fromBuffer(i) });
                    else {
                        let r = l.AsfUtil.getParserForAttr(a);
                        if (!r) throw Error("unexpected value headerType: " + a);
                        e.push({ id: t, value: r(i) });
                    }
                }
            }
            t.State = d;
            class u extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    return null;
                }
            }
            t.IgnoreObjectState = u;
            class m extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    return {
                        fileId: o.default.fromBin(e, t),
                        fileSize: s.UINT64_LE.get(e, t + 16),
                        creationDate: s.UINT64_LE.get(e, t + 24),
                        dataPacketsCount: s.UINT64_LE.get(e, t + 32),
                        playDuration: s.UINT64_LE.get(e, t + 40),
                        sendDuration: s.UINT64_LE.get(e, t + 48),
                        preroll: s.UINT64_LE.get(e, t + 56),
                        flags: { broadcast: n.getBit(e, t + 64, 24), seekable: n.getBit(e, t + 64, 25) },
                        minimumDataPacketSize: s.UINT32_LE.get(e, t + 68),
                        maximumDataPacketSize: s.UINT32_LE.get(e, t + 72),
                        maximumBitrate: s.UINT32_LE.get(e, t + 76),
                    };
                }
            }
            (m.guid = o.default.FilePropertiesObject), (t.FilePropertiesObject = m);
            class p extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    return { streamType: o.default.decodeMediaType(o.default.fromBin(e, t)), errorCorrectionType: o.default.fromBin(e, t + 8) };
                }
            }
            (p.guid = o.default.StreamPropertiesObject), (t.StreamPropertiesObject = p);
            class f {
                constructor() {
                    this.len = 22;
                }
                get(e, t) {
                    return { reserved1: o.default.fromBin(e, t), reserved2: e.readUInt16LE(t + 16), extensionDataSize: e.readUInt32LE(t + 18) };
                }
            }
            (f.guid = o.default.HeaderExtensionObject), (t.HeaderExtensionObject = f);
            let g = { len: 20, get: (e, t) => ({ entryCount: e.readUInt16LE(t + 16) }) };
            async function h(e) {
                let t = await e.readNumber(s.UINT16_LE);
                return (await e.readToken(new s.StringType(2 * t, "utf16le"))).replace("\0", "");
            }
            async function T(e) {
                let t = await e.readToken(g),
                    a = [];
                for (let i = 0; i < t.entryCount; ++i) a.push(await b(e));
                return a;
            }
            async function k(e) {
                let t = await e.readNumber(s.UINT16_LE),
                    a = r.alloc(t);
                return await e.readBuffer(a), a;
            }
            async function b(e) {
                let t = await e.readNumber(s.UINT16_LE);
                return { type: { videoCodec: (1 & t) == 1, audioCodec: (2 & t) == 2 }, codecName: await h(e), description: await h(e), information: await k(e) };
            }
            t.readCodecEntries = T;
            class I extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    let a = [],
                        i = t + 10;
                    for (let r = 0; r < I.contentDescTags.length; ++r) {
                        let n = e.readUInt16LE(t + 2 * r);
                        if (n > 0) {
                            let t = I.contentDescTags[r],
                                s = i + n;
                            a.push({ id: t, value: l.AsfUtil.parseUnicodeAttr(e.slice(i, s)) }), (i = s);
                        }
                    }
                    return a;
                }
            }
            (I.guid = o.default.ContentDescriptionObject), (I.contentDescTags = ["Title", "Author", "Copyright", "Description", "Rating"]), (t.ContentDescriptionObjectState = I);
            class y extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    let a = [],
                        i = e.readUInt16LE(t),
                        r = t + 2;
                    for (let t = 0; t < i; t += 1) {
                        let t = e.readUInt16LE(r);
                        r += 2;
                        let i = l.AsfUtil.parseUnicodeAttr(e.slice(r, r + t));
                        r += t;
                        let n = e.readUInt16LE(r);
                        r += 2;
                        let s = e.readUInt16LE(r);
                        r += 2;
                        let o = e.slice(r, r + s);
                        (r += s), this.postProcessTag(a, i, n, o);
                    }
                    return a;
                }
            }
            (y.guid = o.default.ExtendedContentDescriptionObject), (t.ExtendedContentDescriptionObjectState = y);
            class v extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    return {
                        startTime: s.UINT64_LE.get(e, t),
                        endTime: s.UINT64_LE.get(e, t + 8),
                        dataBitrate: e.readInt32LE(t + 12),
                        bufferSize: e.readInt32LE(t + 16),
                        initialBufferFullness: e.readInt32LE(t + 20),
                        alternateDataBitrate: e.readInt32LE(t + 24),
                        alternateBufferSize: e.readInt32LE(t + 28),
                        alternateInitialBufferFullness: e.readInt32LE(t + 32),
                        maximumObjectSize: e.readInt32LE(t + 36),
                        flags: { reliableFlag: n.getBit(e, t + 40, 0), seekableFlag: n.getBit(e, t + 40, 1), resendLiveCleanpointsFlag: n.getBit(e, t + 40, 2) },
                        streamNumber: e.readInt16LE(t + 42),
                        streamLanguageId: e.readInt16LE(t + 44),
                        averageTimePerFrame: e.readInt32LE(t + 52),
                        streamNameCount: e.readInt32LE(t + 54),
                        payloadExtensionSystems: e.readInt32LE(t + 56),
                        streamNames: [],
                        streamPropertiesObject: null,
                    };
                }
            }
            (v.guid = o.default.ExtendedStreamPropertiesObject), (t.ExtendedStreamPropertiesObjectState = v);
            class S extends d {
                constructor(e) {
                    super(e);
                }
                get(e, t) {
                    let a = [],
                        i = r.from(e),
                        n = i.readUInt16LE(t),
                        s = t + 2;
                    for (let e = 0; e < n; e += 1) {
                        s += 4;
                        let e = i.readUInt16LE(s);
                        s += 2;
                        let t = i.readUInt16LE(s);
                        s += 2;
                        let r = i.readUInt32LE(s);
                        s += 4;
                        let n = l.AsfUtil.parseUnicodeAttr(i.slice(s, s + e));
                        s += e;
                        let o = i.slice(s, s + r);
                        (s += r), this.postProcessTag(a, n, t, o);
                    }
                    return a;
                }
            }
            (S.guid = o.default.MetadataObject), (t.MetadataObjectState = S);
            class E extends S {
                constructor(e) {
                    super(e);
                }
            }
            (E.guid = o.default.MetadataLibraryObject), (t.MetadataLibraryObjectState = E);
            class w {
                static fromBase64(e) {
                    return this.fromBuffer(r.from(e, "base64"));
                }
                static fromBuffer(e) {
                    return new w(e.length).get(e, 0);
                }
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    let a = e.readUInt8(t++),
                        i = e.readInt32LE(t),
                        r = 5;
                    for (; 0 !== e.readUInt16BE(r);) r += 2;
                    let n = e.slice(5, r).toString("utf16le");
                    for (; 0 !== e.readUInt16BE(r);) r += 2;
                    let s = e.slice(5, r).toString("utf16le");
                    return { type: c.AttachedPictureType[a], format: n, description: s, size: i, data: e.slice(r + 4) };
                }
            }
            t.WmPictureToken = w;
        },
        31004: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AsfParser = void 0);
            let i = a(11227),
                r = a(6032),
                n = a(48054),
                s = a(85174),
                o = a(87805),
                l = (0, i.default)("music-metadata:parser:ASF"),
                c = "asf";
            class d extends o.BasicParser {
                async parse() {
                    let e = await this.tokenizer.readToken(s.TopLevelHeaderObjectToken);
                    if (!e.objectId.equals(n.default.HeaderObject)) throw Error("expected asf header; but was not found; got: " + e.objectId.str);
                    try {
                        await this.parseObjectHeader(e.numberOfHeaderObjects);
                    } catch (e) {
                        l("Error while parsing ASF: %s", e);
                    }
                }
                async parseObjectHeader(e) {
                    let t;
                    do {
                        let e = await this.tokenizer.readToken(s.HeaderObjectToken);
                        switch ((l("header GUID=%s", e.objectId.str), e.objectId.str)) {
                            case s.FilePropertiesObject.guid.str:
                                let a = await this.tokenizer.readToken(new s.FilePropertiesObject(e));
                                this.metadata.setFormat("duration", Number(a.playDuration / BigInt(1e3)) / 1e4 - Number(a.preroll) / 1e3), this.metadata.setFormat("bitrate", a.maximumBitrate);
                                break;
                            case s.StreamPropertiesObject.guid.str:
                                let i = await this.tokenizer.readToken(new s.StreamPropertiesObject(e));
                                this.metadata.setFormat("container", "ASF/" + i.streamType);
                                break;
                            case s.HeaderExtensionObject.guid.str:
                                let o = await this.tokenizer.readToken(new s.HeaderExtensionObject());
                                await this.parseExtensionObject(o.extensionDataSize);
                                break;
                            case s.ContentDescriptionObjectState.guid.str:
                                (t = await this.tokenizer.readToken(new s.ContentDescriptionObjectState(e))), this.addTags(t);
                                break;
                            case s.ExtendedContentDescriptionObjectState.guid.str:
                                (t = await this.tokenizer.readToken(new s.ExtendedContentDescriptionObjectState(e))), this.addTags(t);
                                break;
                            case n.default.CodecListObject.str:
                                let c = await s.readCodecEntries(this.tokenizer);
                                c.forEach((e) => {
                                    this.metadata.addStreamInfo({ type: e.type.videoCodec ? r.TrackType.video : r.TrackType.audio, codecName: e.codecName });
                                });
                                let d = c
                                    .filter((e) => e.type.audioCodec)
                                    .map((e) => e.codecName)
                                    .join("/");
                                this.metadata.setFormat("codec", d);
                                break;
                            case n.default.StreamBitratePropertiesObject.str:
                                await this.tokenizer.ignore(e.objectSize - s.HeaderObjectToken.len);
                                break;
                            case n.default.PaddingObject.str:
                                l("Padding: %s bytes", e.objectSize - s.HeaderObjectToken.len), await this.tokenizer.ignore(e.objectSize - s.HeaderObjectToken.len);
                                break;
                            default:
                                this.metadata.addWarning("Ignore ASF-Object-GUID: " + e.objectId.str), l("Ignore ASF-Object-GUID: %s", e.objectId.str), await this.tokenizer.readToken(new s.IgnoreObjectState(e));
                        }
                    } while (--e);
                }
                addTags(e) {
                    e.forEach((e) => {
                        this.metadata.addTag(c, e.id, e.value);
                    });
                }
                async parseExtensionObject(e) {
                    do {
                        let t = await this.tokenizer.readToken(s.HeaderObjectToken),
                            a = t.objectSize - s.HeaderObjectToken.len;
                        switch (t.objectId.str) {
                            case s.ExtendedStreamPropertiesObjectState.guid.str:
                                await this.tokenizer.readToken(new s.ExtendedStreamPropertiesObjectState(t));
                                break;
                            case s.MetadataObjectState.guid.str:
                                let i = await this.tokenizer.readToken(new s.MetadataObjectState(t));
                                this.addTags(i);
                                break;
                            case s.MetadataLibraryObjectState.guid.str:
                                let r = await this.tokenizer.readToken(new s.MetadataLibraryObjectState(t));
                                this.addTags(r);
                                break;
                            case n.default.PaddingObject.str:
                                await this.tokenizer.ignore(a);
                                break;
                            case n.default.CompatibilityObject.str:
                                this.tokenizer.ignore(a);
                                break;
                            case n.default.ASF_Index_Placeholder_Object.str:
                                await this.tokenizer.ignore(a);
                                break;
                            default:
                                this.metadata.addWarning("Ignore ASF-Object-GUID: " + t.objectId.str), await this.tokenizer.readToken(new s.IgnoreObjectState(t));
                        }
                        e -= t.objectSize;
                    } while (e > 0);
                }
            }
            t.AsfParser = d;
        },
        79004: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AsfTagMapper = void 0);
            let i = a(89918),
                r = {
                    Title: "title",
                    Author: "artist",
                    "WM/AlbumArtist": "albumartist",
                    "WM/AlbumTitle": "album",
                    "WM/Year": "date",
                    "WM/OriginalReleaseTime": "originaldate",
                    "WM/OriginalReleaseYear": "originalyear",
                    Description: "comment",
                    "WM/TrackNumber": "track",
                    "WM/PartOfSet": "disk",
                    "WM/Genre": "genre",
                    "WM/Composer": "composer",
                    "WM/Lyrics": "lyrics",
                    "WM/AlbumSortOrder": "albumsort",
                    "WM/TitleSortOrder": "titlesort",
                    "WM/ArtistSortOrder": "artistsort",
                    "WM/AlbumArtistSortOrder": "albumartistsort",
                    "WM/ComposerSortOrder": "composersort",
                    "WM/Writer": "lyricist",
                    "WM/Conductor": "conductor",
                    "WM/ModifiedBy": "remixer",
                    "WM/Engineer": "engineer",
                    "WM/Producer": "producer",
                    "WM/DJMixer": "djmixer",
                    "WM/Mixer": "mixer",
                    "WM/Publisher": "label",
                    "WM/ContentGroupDescription": "grouping",
                    "WM/SubTitle": "subtitle",
                    "WM/SetSubTitle": "discsubtitle",
                    "WM/IsCompilation": "compilation",
                    "WM/SharedUserRating": "rating",
                    "WM/BeatsPerMinute": "bpm",
                    "WM/Mood": "mood",
                    "WM/Media": "media",
                    "WM/CatalogNo": "catalognumber",
                    "MusicBrainz/Album Status": "releasestatus",
                    "MusicBrainz/Album Type": "releasetype",
                    "MusicBrainz/Album Release Country": "releasecountry",
                    "WM/Script": "script",
                    "WM/Language": "language",
                    Copyright: "copyright",
                    LICENSE: "license",
                    "WM/EncodedBy": "encodedby",
                    "WM/EncodingSettings": "encodersettings",
                    "WM/Barcode": "barcode",
                    "WM/ISRC": "isrc",
                    "MusicBrainz/Track Id": "musicbrainz_recordingid",
                    "MusicBrainz/Release Track Id": "musicbrainz_trackid",
                    "MusicBrainz/Album Id": "musicbrainz_albumid",
                    "MusicBrainz/Artist Id": "musicbrainz_artistid",
                    "MusicBrainz/Album Artist Id": "musicbrainz_albumartistid",
                    "MusicBrainz/Release Group Id": "musicbrainz_releasegroupid",
                    "MusicBrainz/Work Id": "musicbrainz_workid",
                    "MusicBrainz/TRM Id": "musicbrainz_trmid",
                    "MusicBrainz/Disc Id": "musicbrainz_discid",
                    "Acoustid/Id": "acoustid_id",
                    "Acoustid/Fingerprint": "acoustid_fingerprint",
                    "MusicIP/PUID": "musicip_puid",
                    "WM/ARTISTS": "artists",
                    "WM/InitialKey": "key",
                    ASIN: "asin",
                    "WM/Work": "work",
                    "WM/AuthorURL": "website",
                    "WM/Picture": "picture",
                };
            class n extends i.CommonTagMapper {
                static toRating(e) {
                    return { rating: parseFloat(e + 1) / 5 };
                }
                constructor() {
                    super(["asf"], r);
                }
                postMap(e) {
                    if ("WM/SharedUserRating" === e.id) {
                        let t = e.id.split(":");
                        (e.value = n.toRating(e.value)), (e.id = t[0]);
                    }
                }
            }
            t.AsfTagMapper = n;
        },
        82252: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AsfUtil = void 0);
            let r = a(20036),
                n = a(83769);
            class s {
                static getParserForAttr(e) {
                    return s.attributeParsers[e];
                }
                static parseUnicodeAttr(e) {
                    return n.stripNulls(n.decodeString(e, "utf16le"));
                }
                static parseByteArrayAttr(e) {
                    return i.from(e);
                }
                static parseBoolAttr(e, t = 0) {
                    return 1 === s.parseWordAttr(e, t);
                }
                static parseDWordAttr(e, t = 0) {
                    return e.readUInt32LE(t);
                }
                static parseQWordAttr(e, t = 0) {
                    return r.UINT64_LE.get(e, t);
                }
                static parseWordAttr(e, t = 0) {
                    return e.readUInt16LE(t);
                }
            }
            (s.attributeParsers = [s.parseUnicodeAttr, s.parseByteArrayAttr, s.parseBoolAttr, s.parseDWordAttr, s.parseQWordAttr, s.parseWordAttr, s.parseByteArrayAttr]), (t.AsfUtil = s);
        },
        48054: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 });
            class r {
                static fromBin(e, t = 0) {
                    return new r(this.decode(e, t));
                }
                static decode(e, t = 0) {
                    return (
                        e.readUInt32LE(t).toString(16) +
                        "-" +
                        e.readUInt16LE(t + 4).toString(16) +
                        "-" +
                        e.readUInt16LE(t + 6).toString(16) +
                        "-" +
                        e.readUInt16BE(t + 8).toString(16) +
                        "-" +
                        e.slice(t + 10, t + 16).toString("hex")
                    ).toUpperCase();
                }
                static decodeMediaType(e) {
                    switch (e.str) {
                        case r.AudioMedia.str:
                            return "audio";
                        case r.VideoMedia.str:
                            return "video";
                        case r.CommandMedia.str:
                            return "command";
                        case r.Degradable_JPEG_Media.str:
                            return "degradable-jpeg";
                        case r.FileTransferMedia.str:
                            return "file-transfer";
                        case r.BinaryMedia.str:
                            return "binary";
                    }
                }
                static encode(e) {
                    let t = i.alloc(16);
                    return (
                        t.writeUInt32LE(parseInt(e.slice(0, 8), 16), 0),
                        t.writeUInt16LE(parseInt(e.slice(9, 13), 16), 4),
                        t.writeUInt16LE(parseInt(e.slice(14, 18), 16), 6),
                        i.from(e.slice(19, 23), "hex").copy(t, 8),
                        i.from(e.slice(24), "hex").copy(t, 10),
                        t
                    );
                }
                constructor(e) {
                    this.str = e;
                }
                equals(e) {
                    return this.str === e.str;
                }
                toBin() {
                    return r.encode(this.str);
                }
            }
            (r.HeaderObject = new r("75B22630-668E-11CF-A6D9-00AA0062CE6C")),
                (r.DataObject = new r("75B22636-668E-11CF-A6D9-00AA0062CE6C")),
                (r.SimpleIndexObject = new r("33000890-E5B1-11CF-89F4-00A0C90349CB")),
                (r.IndexObject = new r("D6E229D3-35DA-11D1-9034-00A0C90349BE")),
                (r.MediaObjectIndexObject = new r("FEB103F8-12AD-4C64-840F-2A1D2F7AD48C")),
                (r.TimecodeIndexObject = new r("3CB73FD0-0C4A-4803-953D-EDF7B6228F0C")),
                (r.FilePropertiesObject = new r("8CABDCA1-A947-11CF-8EE4-00C00C205365")),
                (r.StreamPropertiesObject = new r("B7DC0791-A9B7-11CF-8EE6-00C00C205365")),
                (r.HeaderExtensionObject = new r("5FBF03B5-A92E-11CF-8EE3-00C00C205365")),
                (r.CodecListObject = new r("86D15240-311D-11D0-A3A4-00A0C90348F6")),
                (r.ScriptCommandObject = new r("1EFB1A30-0B62-11D0-A39B-00A0C90348F6")),
                (r.MarkerObject = new r("F487CD01-A951-11CF-8EE6-00C00C205365")),
                (r.BitrateMutualExclusionObject = new r("D6E229DC-35DA-11D1-9034-00A0C90349BE")),
                (r.ErrorCorrectionObject = new r("75B22635-668E-11CF-A6D9-00AA0062CE6C")),
                (r.ContentDescriptionObject = new r("75B22633-668E-11CF-A6D9-00AA0062CE6C")),
                (r.ExtendedContentDescriptionObject = new r("D2D0A440-E307-11D2-97F0-00A0C95EA850")),
                (r.ContentBrandingObject = new r("2211B3FA-BD23-11D2-B4B7-00A0C955FC6E")),
                (r.StreamBitratePropertiesObject = new r("7BF875CE-468D-11D1-8D82-006097C9A2B2")),
                (r.ContentEncryptionObject = new r("2211B3FB-BD23-11D2-B4B7-00A0C955FC6E")),
                (r.ExtendedContentEncryptionObject = new r("298AE614-2622-4C17-B935-DAE07EE9289C")),
                (r.DigitalSignatureObject = new r("2211B3FC-BD23-11D2-B4B7-00A0C955FC6E")),
                (r.PaddingObject = new r("1806D474-CADF-4509-A4BA-9AABCB96AAE8")),
                (r.ExtendedStreamPropertiesObject = new r("14E6A5CB-C672-4332-8399-A96952065B5A")),
                (r.AdvancedMutualExclusionObject = new r("A08649CF-4775-4670-8A16-6E35357566CD")),
                (r.GroupMutualExclusionObject = new r("D1465A40-5A79-4338-B71B-E36B8FD6C249")),
                (r.StreamPrioritizationObject = new r("D4FED15B-88D3-454F-81F0-ED5C45999E24")),
                (r.BandwidthSharingObject = new r("A69609E6-517B-11D2-B6AF-00C04FD908E9")),
                (r.LanguageListObject = new r("7C4346A9-EFE0-4BFC-B229-393EDE415C85")),
                (r.MetadataObject = new r("C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA")),
                (r.MetadataLibraryObject = new r("44231C94-9498-49D1-A141-1D134E457054")),
                (r.IndexParametersObject = new r("D6E229DF-35DA-11D1-9034-00A0C90349BE")),
                (r.MediaObjectIndexParametersObject = new r("6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7")),
                (r.TimecodeIndexParametersObject = new r("F55E496D-9797-4B5D-8C8B-604DFE9BFB24")),
                (r.CompatibilityObject = new r("26F18B5D-4584-47EC-9F5F-0E651F0452C9")),
                (r.AdvancedContentEncryptionObject = new r("43058533-6981-49E6-9B74-AD12CB86D58C")),
                (r.AudioMedia = new r("F8699E40-5B4D-11CF-A8FD-00805F5C442B")),
                (r.VideoMedia = new r("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B")),
                (r.CommandMedia = new r("59DACFC0-59E6-11D0-A3AC-00A0C90348F6")),
                (r.JFIF_Media = new r("B61BE100-5B4E-11CF-A8FD-00805F5C442B")),
                (r.Degradable_JPEG_Media = new r("35907DE0-E415-11CF-A917-00805F5C442B")),
                (r.FileTransferMedia = new r("91BD222C-F21C-497A-8B6D-5AA86BFC0185")),
                (r.BinaryMedia = new r("3AFB65E2-47EF-40F2-AC2C-70A90D71D343")),
                (r.ASF_Index_Placeholder_Object = new r("D9AADE20-7C17-4F9C-BC28-8555DD98E2A2")),
                (t.default = r);
        },
        87805: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.BasicParser = void 0);
            class a {
                init(e, t, a) {
                    return (this.metadata = e), (this.tokenizer = t), (this.options = a), this;
                }
            }
            t.BasicParser = a;
        },
        24132: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseInsensitiveTagMap = void 0);
            let i = a(89918);
            class r extends i.CommonTagMapper {
                constructor(e, t) {
                    let a = {};
                    for (let e of Object.keys(t)) a[e.toUpperCase()] = t[e];
                    super(e, a);
                }
                getCommonName(e) {
                    return this.tagMap[e.toUpperCase()];
                }
            }
            t.CaseInsensitiveTagMap = r;
        },
        96592: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.CombinedTagMapper = void 0);
            let i = a(12939),
                r = a(64005),
                n = a(79004),
                s = a(37183),
                o = a(48414),
                l = a(37852),
                c = a(29860),
                d = a(35756),
                u = a(85481),
                m = a(8815);
            class p {
                constructor() {
                    (this.tagMappers = {}),
                        [
                            new i.ID3v1TagMapper(),
                            new s.ID3v22TagMapper(),
                            new r.ID3v24TagMapper(),
                            new l.MP4TagMapper(),
                            new l.MP4TagMapper(),
                            new c.VorbisTagMapper(),
                            new o.APEv2TagMapper(),
                            new n.AsfTagMapper(),
                            new d.RiffInfoTagMapper(),
                            new u.MatroskaTagMapper(),
                            new m.AiffTagMapper(),
                        ].forEach((e) => {
                            this.registerTagMapper(e);
                        });
                }
                mapTag(e, t, a) {
                    if (this.tagMappers[e]) return this.tagMappers[e].mapGenericTag(t, a);
                    throw Error("No generic tag mapper defined for tag-format: " + e);
                }
                registerTagMapper(e) {
                    for (let t of e.tagTypes) this.tagMappers[t] = e;
                }
            }
            t.CombinedTagMapper = p;
        },
        28049: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.FourCcToken = void 0);
            let r = a(83769),
                n = /^[\x21-\x7e©][\x20-\x7e\x00()]{3}/;
            t.FourCcToken = {
                len: 4,
                get: (e, a) => {
                    let i = e.toString("binary", a, a + t.FourCcToken.len);
                    if (!i.match(n)) throw Error(`FourCC contains invalid characters: ${r.a2hex(i)} "${i}"`);
                    return i;
                },
                put: (e, t, a) => {
                    let r = i.from(a, "binary");
                    if (4 !== r.length) throw Error("Invalid length");
                    return r.copy(e, t);
                },
            };
        },
        89918: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommonTagMapper = void 0);
            class a {
                static toIntOrNull(e) {
                    let t = parseInt(e, 10);
                    return isNaN(t) ? null : t;
                }
                static normalizeTrack(e) {
                    let t = e.toString().split("/");
                    return { no: parseInt(t[0], 10) || null, of: parseInt(t[1], 10) || null };
                }
                constructor(e, t) {
                    (this.tagTypes = e), (this.tagMap = t);
                }
                mapGenericTag(e, t) {
                    (e = { id: e.id, value: e.value }), this.postMap(e, t);
                    let a = this.getCommonName(e.id);
                    return a ? { id: a, value: e.value } : null;
                }
                getCommonName(e) {
                    return this.tagMap[e];
                }
                postMap(e, t) { }
            }
            (a.maxRatingScore = 1), (t.CommonTagMapper = a);
        },
        40103: function (e, t) {
            "use strict";
            function a(e) {
                return t.commonTags.hasOwnProperty(e) && !t.commonTags[e].multiple;
            }
            function i(e) {
                return !t.commonTags[e].multiple || t.commonTags[e].unique;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.isUnique = t.isSingleton = t.commonTags = void 0),
                (t.commonTags = {
                    year: { multiple: !1 },
                    track: { multiple: !1 },
                    disk: { multiple: !1 },
                    title: { multiple: !1 },
                    artist: { multiple: !1 },
                    artists: { multiple: !0, unique: !0 },
                    albumartist: { multiple: !1 },
                    album: { multiple: !1 },
                    date: { multiple: !1 },
                    originaldate: { multiple: !1 },
                    originalyear: { multiple: !1 },
                    comment: { multiple: !0, unique: !1 },
                    genre: { multiple: !0, unique: !0 },
                    picture: { multiple: !0, unique: !0 },
                    composer: { multiple: !0, unique: !0 },
                    lyrics: { multiple: !0, unique: !1 },
                    albumsort: { multiple: !1, unique: !0 },
                    titlesort: { multiple: !1, unique: !0 },
                    work: { multiple: !1, unique: !0 },
                    artistsort: { multiple: !1, unique: !0 },
                    albumartistsort: { multiple: !1, unique: !0 },
                    composersort: { multiple: !1, unique: !0 },
                    lyricist: { multiple: !0, unique: !0 },
                    writer: { multiple: !0, unique: !0 },
                    conductor: { multiple: !0, unique: !0 },
                    remixer: { multiple: !0, unique: !0 },
                    arranger: { multiple: !0, unique: !0 },
                    engineer: { multiple: !0, unique: !0 },
                    producer: { multiple: !0, unique: !0 },
                    technician: { multiple: !0, unique: !0 },
                    djmixer: { multiple: !0, unique: !0 },
                    mixer: { multiple: !0, unique: !0 },
                    label: { multiple: !0, unique: !0 },
                    grouping: { multiple: !1 },
                    subtitle: { multiple: !0 },
                    discsubtitle: { multiple: !1 },
                    totaltracks: { multiple: !1 },
                    totaldiscs: { multiple: !1 },
                    compilation: { multiple: !1 },
                    rating: { multiple: !0 },
                    bpm: { multiple: !1 },
                    mood: { multiple: !1 },
                    media: { multiple: !1 },
                    catalognumber: { multiple: !0, unique: !0 },
                    tvShow: { multiple: !1 },
                    tvShowSort: { multiple: !1 },
                    tvSeason: { multiple: !1 },
                    tvEpisode: { multiple: !1 },
                    tvEpisodeId: { multiple: !1 },
                    tvNetwork: { multiple: !1 },
                    podcast: { multiple: !1 },
                    podcasturl: { multiple: !1 },
                    releasestatus: { multiple: !1 },
                    releasetype: { multiple: !0 },
                    releasecountry: { multiple: !1 },
                    script: { multiple: !1 },
                    language: { multiple: !1 },
                    copyright: { multiple: !1 },
                    license: { multiple: !1 },
                    encodedby: { multiple: !1 },
                    encodersettings: { multiple: !1 },
                    gapless: { multiple: !1 },
                    barcode: { multiple: !1 },
                    isrc: { multiple: !0 },
                    asin: { multiple: !1 },
                    musicbrainz_recordingid: { multiple: !1 },
                    musicbrainz_trackid: { multiple: !1 },
                    musicbrainz_albumid: { multiple: !1 },
                    musicbrainz_artistid: { multiple: !0 },
                    musicbrainz_albumartistid: { multiple: !0 },
                    musicbrainz_releasegroupid: { multiple: !1 },
                    musicbrainz_workid: { multiple: !1 },
                    musicbrainz_trmid: { multiple: !1 },
                    musicbrainz_discid: { multiple: !1 },
                    acoustid_id: { multiple: !1 },
                    acoustid_fingerprint: { multiple: !1 },
                    musicip_puid: { multiple: !1 },
                    musicip_fingerprint: { multiple: !1 },
                    website: { multiple: !1 },
                    "performer:instrument": { multiple: !0, unique: !0 },
                    averageLevel: { multiple: !1 },
                    peakLevel: { multiple: !1 },
                    notes: { multiple: !0, unique: !1 },
                    key: { multiple: !1 },
                    originalalbum: { multiple: !1 },
                    originalartist: { multiple: !1 },
                    discogs_artist_id: { multiple: !0, unique: !0 },
                    discogs_release_id: { multiple: !1 },
                    discogs_label_id: { multiple: !1 },
                    discogs_master_release_id: { multiple: !1 },
                    discogs_votes: { multiple: !1 },
                    discogs_rating: { multiple: !1 },
                    replaygain_track_peak: { multiple: !1 },
                    replaygain_track_gain: { multiple: !1 },
                    replaygain_album_peak: { multiple: !1 },
                    replaygain_album_gain: { multiple: !1 },
                    replaygain_track_minmax: { multiple: !1 },
                    replaygain_album_minmax: { multiple: !1 },
                    replaygain_undo: { multiple: !1 },
                    description: { multiple: !0 },
                    longDescription: { multiple: !1 },
                    category: { multiple: !0 },
                    hdVideo: { multiple: !1 },
                    keywords: { multiple: !0 },
                    movement: { multiple: !1 },
                    movementIndex: { multiple: !1 },
                    movementTotal: { multiple: !1 },
                    podcastId: { multiple: !1 },
                    showMovement: { multiple: !1 },
                    stik: { multiple: !1 },
                }),
                (t.isSingleton = a),
                (t.isUnique = i);
        },
        27584: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.joinArtists = t.MetadataCollector = void 0);
            let i = a(6032),
                r = a(11227),
                n = a(40103),
                s = a(96592),
                o = a(89918),
                l = a(83769),
                c = a(72933),
                d = (0, r.default)("music-metadata:collector"),
                u = ["matroska", "APEv2", "vorbis", "ID3v2.4", "ID3v2.3", "ID3v2.2", "exif", "asf", "iTunes", "AIFF", "ID3v1"];
            class m {
                constructor(e) {
                    (this.opts = e),
                        (this.format = { tagTypes: [], trackInfo: [] }),
                        (this.native = {}),
                        (this.common = { track: { no: null, of: null }, disk: { no: null, of: null }, movementIndex: {} }),
                        (this.quality = { warnings: [] }),
                        (this.commonOrigin = {}),
                        (this.originPriority = {}),
                        (this.tagMapper = new s.CombinedTagMapper());
                    let t = 1;
                    for (let e of u) this.originPriority[e] = t++;
                    (this.originPriority.artificial = 500), (this.originPriority.id3v1 = 600);
                }
                hasAny() {
                    return Object.keys(this.native).length > 0;
                }
                addStreamInfo(e) {
                    d(`streamInfo: type=${i.TrackType[e.type]}, codec=${e.codecName}`), this.format.trackInfo.push(e);
                }
                setFormat(e, t) {
                    d(`format: ${e} = ${t}`), (this.format[e] = t), this.opts.observer && this.opts.observer({ metadata: this, tag: { type: "format", id: e, value: t } });
                }
                addTag(e, t, a) {
                    d(`tag ${e}.${t} = ${a}`), this.native[e] || (this.format.tagTypes.push(e), (this.native[e] = [])), this.native[e].push({ id: t, value: a }), this.toCommon(e, t, a);
                }
                addWarning(e) {
                    this.quality.warnings.push({ message: e });
                }
                postMap(e, t) {
                    switch (t.id) {
                        case "artist":
                            if (this.commonOrigin.artist === this.originPriority[e]) return this.postMap("artificial", { id: "artists", value: t.value });
                            this.common.artists || this.setGenericTag("artificial", { id: "artists", value: t.value });
                            break;
                        case "artists":
                            if ((!this.common.artist || this.commonOrigin.artist === this.originPriority.artificial) && (!this.common.artists || -1 === this.common.artists.indexOf(t.value))) {
                                let e = { id: "artist", value: p((this.common.artists || []).concat([t.value])) };
                                this.setGenericTag("artificial", e);
                            }
                            break;
                        case "picture":
                            this.postFixPicture(t.value).then((a) => {
                                null !== a && ((t.value = a), this.setGenericTag(e, t));
                            });
                            return;
                        case "totaltracks":
                            this.common.track.of = o.CommonTagMapper.toIntOrNull(t.value);
                            return;
                        case "totaldiscs":
                            this.common.disk.of = o.CommonTagMapper.toIntOrNull(t.value);
                            return;
                        case "movementTotal":
                            this.common.movementIndex.of = o.CommonTagMapper.toIntOrNull(t.value);
                            return;
                        case "track":
                        case "disk":
                        case "movementIndex":
                            let a = this.common[t.id].of;
                            (this.common[t.id] = o.CommonTagMapper.normalizeTrack(t.value)), (this.common[t.id].of = null != a ? a : this.common[t.id].of);
                            return;
                        case "bpm":
                        case "year":
                        case "originalyear":
                            t.value = parseInt(t.value, 10);
                            break;
                        case "date":
                            let i = parseInt(t.value.substr(0, 4), 10);
                            isNaN(i) || (this.common.year = i);
                            break;
                        case "discogs_label_id":
                        case "discogs_release_id":
                        case "discogs_master_release_id":
                        case "discogs_artist_id":
                        case "discogs_votes":
                            t.value = "string" == typeof t.value ? parseInt(t.value, 10) : t.value;
                            break;
                        case "replaygain_track_gain":
                        case "replaygain_track_peak":
                        case "replaygain_album_gain":
                        case "replaygain_album_peak":
                            t.value = (0, l.toRatio)(t.value);
                            break;
                        case "replaygain_track_minmax":
                            t.value = t.value.split(",").map((e) => parseInt(e, 10));
                            break;
                        case "replaygain_undo":
                            let r = t.value.split(",").map((e) => parseInt(e, 10));
                            t.value = { leftChannel: r[0], rightChannel: r[1] };
                            break;
                        case "gapless":
                        case "compilation":
                        case "podcast":
                        case "showMovement":
                            t.value = "1" === t.value || 1 === t.value;
                            break;
                        case "isrc":
                            if (this.common[t.id] && -1 !== this.common[t.id].indexOf(t.value)) return;
                    }
                    null !== t.value && this.setGenericTag(e, t);
                }
                toCommonMetadata() {
                    return { format: this.format, native: this.native, quality: this.quality, common: this.common };
                }
                async postFixPicture(e) {
                    if (e.data && e.data.length > 0) {
                        if (!e.format) {
                            let t = await c.fromBuffer(e.data);
                            if (!t) return null;
                            e.format = t.mime;
                        }
                        return (e.format = e.format.toLocaleLowerCase()), "image/jpg" === e.format && (e.format = "image/jpeg"), e;
                    }
                    return this.addWarning("Empty picture tag found"), null;
                }
                toCommon(e, t, a) {
                    let i = { id: t, value: a },
                        r = this.tagMapper.mapTag(e, i, this);
                    r && this.postMap(e, r);
                }
                setGenericTag(e, t) {
                    d(`common.${t.id} = ${t.value}`);
                    let a = this.commonOrigin[t.id] || 1e3,
                        i = this.originPriority[e];
                    if ((0, n.isSingleton)(t.id)) {
                        if (!(i <= a)) return d(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);
                        (this.common[t.id] = t.value), (this.commonOrigin[t.id] = i);
                    } else if (i === a) (0, n.isUnique)(t.id) && -1 !== this.common[t.id].indexOf(t.value) ? d(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`) : this.common[t.id].push(t.value);
                    else {
                        if (!(i < a)) return d(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);
                        (this.common[t.id] = [t.value]), (this.commonOrigin[t.id] = i);
                    }
                    this.opts.observer && this.opts.observer({ metadata: this, tag: { type: "common", id: t.id, value: t.value } });
                }
            }
            function p(e) {
                return e.length > 2 ? e.slice(0, e.length - 1).join(", ") + " & " + e[e.length - 1] : e.join(" & ");
            }
            (t.MetadataCollector = m), (t.joinArtists = p);
        },
        89461: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.RandomUint8ArrayReader = void 0);
            class a {
                constructor(e) {
                    (this.uint8Array = e), (this.fileSize = e.length);
                }
                async randomRead(e, t, a, i) {
                    return e.set(this.uint8Array.subarray(i, i + a), t), a;
                }
            }
            t.RandomUint8ArrayReader = a;
        },
        83769: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            function r(e, t, a) {
                return (e[t] & (1 << a)) != 0;
            }
            function n(e, t, a, i) {
                let r = t;
                if ("utf16le" === i) {
                    for (; 0 !== e[r] || 0 !== e[r + 1];) {
                        if (r >= a) return a;
                        r += 2;
                    }
                    return r;
                }
                for (; 0 !== e[r];) {
                    if (r >= a) return a;
                    r++;
                }
                return r;
            }
            function s(e) {
                let t = e.indexOf("\0");
                return -1 === t ? e : e.substr(0, t);
            }
            function o(e) {
                let t = e.length;
                if ((1 & t) != 0) throw Error("Buffer length must be even");
                for (let a = 0; a < t; a += 2) {
                    let t = e[a];
                    (e[a] = e[a + 1]), (e[a + 1] = t);
                }
                return e;
            }
            function l(e, t) {
                if (255 === e[0] && 254 === e[1]) return l(e.subarray(2), t);
                if ("utf16le" === t && 254 === e[0] && 255 === e[1]) {
                    if ((1 & e.length) != 0) throw Error("Expected even number of octets for 16-bit unicode string");
                    return l(o(e), t);
                }
                return i.from(e).toString(t);
            }
            function c(e) {
                return (e = (e = e.replace(/^\x00+/g, "")).replace(/\x00+$/g, ""));
            }
            function d(e, t, a, i) {
                let r = t + ~~(a / 8),
                    n = a % 8,
                    s = e[r];
                s &= 255 >> n;
                let o = 8 - n,
                    l = i - o;
                return l < 0 ? (s >>= 8 - n - i) : l > 0 && ((s <<= l), (s |= d(e, t, a + o, l))), s;
            }
            function u(e, t, a) {
                return 1 === d(e, t, a, 1);
            }
            function m(e) {
                let t = [];
                for (let a = 0, i = e.length; a < i; a++) {
                    let i = Number(e.charCodeAt(a)).toString(16);
                    t.push(1 === i.length ? "0" + i : i);
                }
                return t.join(" ");
            }
            function p(e) {
                return 10 * Math.log10(e);
            }
            function f(e) {
                return Math.pow(10, e / 10);
            }
            function g(e) {
                let t = e.split(" ").map((e) => e.trim().toLowerCase());
                if (t.length >= 1) {
                    let e = parseFloat(t[0]);
                    return 2 === t.length && "db" === t[1] ? { dB: e, ratio: f(e) } : { dB: p(e), ratio: e };
                }
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.toRatio = t.dbToRatio = t.ratioToDb = t.a2hex = t.isBitSet = t.getBitAllignedNumber = t.stripNulls = t.decodeString = t.trimRightNull = t.findZero = t.getBit = void 0),
                (t.getBit = r),
                (t.findZero = n),
                (t.trimRightNull = s),
                (t.decodeString = l),
                (t.stripNulls = c),
                (t.getBitAllignedNumber = d),
                (t.isBitSet = u),
                (t.a2hex = m),
                (t.ratioToDb = p),
                (t.dbToRatio = f),
                (t.toRatio = g);
        },
        80523: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.scanAppendingHeaders = t.selectCover = t.ratingToStars = t.orderTags = t.parseFromTokenizer = t.parseBuffer = t.parseStream = void 0);
            let i = a(35849),
                r = a(83275),
                n = a(89461),
                s = a(6742),
                o = a(62282),
                l = a(19941);
            function c(e, t, a = {}) {
                return u(i.fromStream(e, "string" == typeof t ? { mimeType: t } : t), a);
            }
            async function d(e, t, a = {}) {
                let r = new n.RandomUint8ArrayReader(e);
                return await g(r, a), u(i.fromBuffer(e, "string" == typeof t ? { mimeType: t } : t), a);
            }
            function u(e, t) {
                return r.ParserFactory.parseOnContentType(e, t);
            }
            function m(e) {
                let t = {};
                for (let a of e) (t[a.id] = t[a.id] || []).push(a.value);
                return t;
            }
            function p(e) {
                return void 0 === e ? 0 : 1 + Math.round(4 * e);
            }
            function f(e) {
                return e ? e.reduce((e, t) => (t.name && t.name.toLowerCase() in ["front", "cover", "cover (front)"] ? t : e)) : null;
            }
            async function g(e, t = {}) {
                let a = e.fileSize;
                (await (0, o.hasID3v1Header)(e)) && ((a -= 128), (a -= await (0, l.getLyricsHeaderLength)(e))), (t.apeHeader = await s.APEv2Parser.findApeFooterOffset(e, a));
            }
            (t.parseStream = c), (t.parseBuffer = d), (t.parseFromTokenizer = u), (t.orderTags = m), (t.ratingToStars = p), (t.selectCover = f), (t.scanAppendingHeaders = g);
        },
        16789: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.DsdiffParser = void 0);
            let i = a(20036),
                r = a(11227),
                n = a(35849),
                s = a(28049),
                o = a(87805),
                l = a(8928),
                c = a(29187),
                d = (0, r.default)("music-metadata:parser:aiff");
            class u extends o.BasicParser {
                async parse() {
                    let e = await this.tokenizer.readToken(c.ChunkHeader64);
                    if ("FRM8" !== e.chunkID) throw Error("Unexpected chunk-ID");
                    let t = (await this.tokenizer.readToken(s.FourCcToken)).trim();
                    if ("DSD" === t) return this.metadata.setFormat("container", `DSDIFF/${t}`), this.metadata.setFormat("lossless", !0), this.readFmt8Chunks(e.chunkSize - BigInt(s.FourCcToken.len));
                    throw Error(`Unsupported DSDIFF type: ${t}`);
                }
                async readFmt8Chunks(e) {
                    for (; e >= c.ChunkHeader64.len;) {
                        let t = await this.tokenizer.readToken(c.ChunkHeader64);
                        d(`Chunk id=${t.chunkID}`), await this.readData(t), (e -= BigInt(c.ChunkHeader64.len) + t.chunkSize);
                    }
                }
                async readData(e) {
                    d(`Reading data of chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);
                    let t = this.tokenizer.position;
                    switch (e.chunkID.trim()) {
                        case "FVER":
                            let a = await this.tokenizer.readToken(i.UINT32_LE);
                            d(`DSDIFF version=${a}`);
                            break;
                        case "PROP":
                            if ("SND " !== (await this.tokenizer.readToken(s.FourCcToken))) throw Error("Unexpected PROP-chunk ID");
                            await this.handleSoundPropertyChunks(e.chunkSize - BigInt(s.FourCcToken.len));
                            break;
                        case "ID3":
                            let r = await this.tokenizer.readToken(new i.Uint8ArrayType(Number(e.chunkSize))),
                                o = n.fromBuffer(r);
                            await new l.ID3v2Parser().parse(this.metadata, o, this.options);
                            break;
                        default:
                            d(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);
                            break;
                        case "DSD":
                            this.metadata.setFormat("numberOfSamples", Number((e.chunkSize * BigInt(8)) / BigInt(this.metadata.format.numberOfChannels))),
                                this.metadata.setFormat("duration", this.metadata.format.numberOfSamples / this.metadata.format.sampleRate);
                    }
                    let c = e.chunkSize - BigInt(this.tokenizer.position - t);
                    c > 0 && (d(`After Parsing chunk, remaining ${c} bytes`), await this.tokenizer.ignore(Number(c)));
                }
                async handleSoundPropertyChunks(e) {
                    for (d(`Parsing sound-property-chunks, remainingSize=${e}`); e > 0;) {
                        let t = await this.tokenizer.readToken(c.ChunkHeader64);
                        d(`Sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`);
                        let a = this.tokenizer.position;
                        switch (t.chunkID.trim()) {
                            case "FS":
                                let r = await this.tokenizer.readToken(i.UINT32_BE);
                                this.metadata.setFormat("sampleRate", r);
                                break;
                            case "CHNL":
                                let n = await this.tokenizer.readToken(i.UINT16_BE);
                                this.metadata.setFormat("numberOfChannels", n), await this.handleChannelChunks(t.chunkSize - BigInt(i.UINT16_BE.len));
                                break;
                            case "CMPR":
                                let o = (await this.tokenizer.readToken(s.FourCcToken)).trim(),
                                    l = await this.tokenizer.readToken(i.UINT8),
                                    u = await this.tokenizer.readToken(new i.StringType(l, "ascii"));
                                "DSD" === o && (this.metadata.setFormat("lossless", !0), this.metadata.setFormat("bitsPerSample", 1)), this.metadata.setFormat("codec", `${o} (${u})`);
                                break;
                            case "ABSS":
                                let m = await this.tokenizer.readToken(i.UINT16_BE),
                                    p = await this.tokenizer.readToken(i.UINT8),
                                    f = await this.tokenizer.readToken(i.UINT8),
                                    g = await this.tokenizer.readToken(i.UINT32_BE);
                                d(`ABSS ${m}:${p}:${f}.${g}`);
                                break;
                            case "LSCO":
                                let h = await this.tokenizer.readToken(i.UINT16_BE);
                                d(`LSCO lsConfig=${h}`);
                                break;
                            default:
                                d(`Unknown sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`), await this.tokenizer.ignore(Number(t.chunkSize));
                        }
                        let T = t.chunkSize - BigInt(this.tokenizer.position - a);
                        T > 0 && (d(`After Parsing sound-property-chunk ${t.chunkSize}, remaining ${T} bytes`), await this.tokenizer.ignore(Number(T))),
                            (e -= BigInt(c.ChunkHeader64.len) + t.chunkSize),
                            d(`Parsing sound-property-chunks, remainingSize=${e}`);
                    }
                    if (this.metadata.format.lossless && this.metadata.format.sampleRate && this.metadata.format.numberOfChannels && this.metadata.format.bitsPerSample) {
                        let e = this.metadata.format.sampleRate * this.metadata.format.numberOfChannels * this.metadata.format.bitsPerSample;
                        this.metadata.setFormat("bitrate", e);
                    }
                }
                async handleChannelChunks(e) {
                    d(`Parsing channel-chunks, remainingSize=${e}`);
                    let t = [];
                    for (; e >= s.FourCcToken.len;) {
                        let a = await this.tokenizer.readToken(s.FourCcToken);
                        d(`Channel[ID=${a}]`), t.push(a), (e -= BigInt(s.FourCcToken.len));
                    }
                    return d(`Channels: ${t.join(", ")}`), t;
                }
            }
            t.DsdiffParser = u;
        },
        29187: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChunkHeader64 = void 0);
            let i = a(20036),
                r = a(28049);
            t.ChunkHeader64 = { len: 12, get: (e, t) => ({ chunkID: r.FourCcToken.get(e, t), chunkSize: i.INT64_BE.get(e, t + 4) }) };
        },
        14101: function (e, t, a) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.FormatChunk = t.ChannelType = t.DsdChunk = t.ChunkHeader = void 0);
            let r = a(20036),
                n = a(28049);
            (t.ChunkHeader = { len: 12, get: (e, t) => ({ id: n.FourCcToken.get(e, t), size: r.UINT64_LE.get(e, t + 4) }) }),
                (t.DsdChunk = { len: 16, get: (e, t) => ({ fileSize: r.INT64_LE.get(e, t), metadataPointer: r.INT64_LE.get(e, t + 8) }) }),
                (function (e) {
                    (e[(e.mono = 1)] = "mono"),
                        (e[(e.stereo = 2)] = "stereo"),
                        (e[(e.channels = 3)] = "channels"),
                        (e[(e.quad = 4)] = "quad"),
                        (e[(e["4 channels"] = 5)] = "4 channels"),
                        (e[(e["5 channels"] = 6)] = "5 channels"),
                        (e[(e["5.1 channels"] = 7)] = "5.1 channels");
                })((i = t.ChannelType || (t.ChannelType = {}))),
                (t.FormatChunk = {
                    len: 40,
                    get: (e, t) => ({
                        formatVersion: r.INT32_LE.get(e, t),
                        formatID: r.INT32_LE.get(e, t + 4),
                        channelType: r.INT32_LE.get(e, t + 8),
                        channelNum: r.INT32_LE.get(e, t + 12),
                        samplingFrequency: r.INT32_LE.get(e, t + 16),
                        bitsPerSample: r.INT32_LE.get(e, t + 20),
                        sampleCount: r.INT64_LE.get(e, t + 24),
                        blockSizePerChannel: r.INT32_LE.get(e, t + 32),
                    }),
                });
        },
        61533: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.DsfParser = void 0);
            let i = a(11227),
                r = a(25159),
                n = a(14101),
                s = a(8928),
                o = (0, i.default)("music-metadata:parser:DSF");
            class l extends r.AbstractID3Parser {
                async postId3v2Parse() {
                    let e = this.tokenizer.position,
                        t = await this.tokenizer.readToken(n.ChunkHeader);
                    if ("DSD " !== t.id) throw Error("Invalid chunk signature");
                    this.metadata.setFormat("container", "DSF"), this.metadata.setFormat("lossless", !0);
                    let a = await this.tokenizer.readToken(n.DsdChunk);
                    if (a.metadataPointer !== BigInt(0))
                        return (
                            o(`expect ID3v2 at offset=${a.metadataPointer}`),
                            await this.parseChunks(a.fileSize - t.size),
                            await this.tokenizer.ignore(Number(a.metadataPointer) - this.tokenizer.position - e),
                            new s.ID3v2Parser().parse(this.metadata, this.tokenizer, this.options)
                        );
                    o("No ID3v2 tag present");
                }
                async parseChunks(e) {
                    for (; e >= n.ChunkHeader.len;) {
                        let t = await this.tokenizer.readToken(n.ChunkHeader);
                        if ((o(`Parsing chunk name=${t.id} size=${t.size}`), "fmt " === t.id)) {
                            let e = await this.tokenizer.readToken(n.FormatChunk);
                            this.metadata.setFormat("numberOfChannels", e.channelNum),
                                this.metadata.setFormat("sampleRate", e.samplingFrequency),
                                this.metadata.setFormat("bitsPerSample", e.bitsPerSample),
                                this.metadata.setFormat("numberOfSamples", e.sampleCount),
                                this.metadata.setFormat("duration", Number(e.sampleCount) / e.samplingFrequency);
                            let t = e.bitsPerSample * e.samplingFrequency * e.channelNum;
                            this.metadata.setFormat("bitrate", t);
                            return;
                        }
                        this.tokenizer.ignore(Number(t.size) - n.ChunkHeader.len), (e -= t.size);
                    }
                }
            }
            t.DsfParser = l;
        },
        70498: function (e, t, a) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.FlacParser = void 0);
            let r = a(20036),
                n = a(11227),
                s = a(83769),
                o = a(2127),
                l = a(25159),
                c = a(28049),
                d = a(54210),
                u = a(441),
                m = (0, n.default)("music-metadata:parser:FLAC");
            !(function (e) {
                (e[(e.STREAMINFO = 0)] = "STREAMINFO"),
                    (e[(e.PADDING = 1)] = "PADDING"),
                    (e[(e.APPLICATION = 2)] = "APPLICATION"),
                    (e[(e.SEEKTABLE = 3)] = "SEEKTABLE"),
                    (e[(e.VORBIS_COMMENT = 4)] = "VORBIS_COMMENT"),
                    (e[(e.CUESHEET = 5)] = "CUESHEET"),
                    (e[(e.PICTURE = 6)] = "PICTURE");
            })(i || (i = {}));
            class p extends l.AbstractID3Parser {
                constructor() {
                    super(...arguments), (this.padding = 0);
                }
                init(e, t, a) {
                    return super.init(e, t, a), (this.vorbisParser = new d.VorbisParser(e, a)), this;
                }
                async postId3v2Parse() {
                    let e;
                    if ("fLaC" !== (await this.tokenizer.readToken(c.FourCcToken)).toString()) throw Error("Invalid FLAC preamble");
                    do (e = await this.tokenizer.readToken(f.BlockHeader)), await this.parseDataBlock(e);
                    while (!e.lastBlock);
                    if (this.tokenizer.fileInfo.size && this.metadata.format.duration) {
                        let e = this.tokenizer.fileInfo.size - this.tokenizer.position;
                        this.metadata.setFormat("bitrate", (8 * e) / this.metadata.format.duration);
                    }
                }
                parseDataBlock(e) {
                    switch ((m(`blockHeader type=${e.type}, length=${e.length}`), e.type)) {
                        case i.STREAMINFO:
                            return this.parseBlockStreamInfo(e.length);
                        case i.PADDING:
                            this.padding += e.length;
                            break;
                        case i.APPLICATION:
                        case i.SEEKTABLE:
                            break;
                        case i.VORBIS_COMMENT:
                            return this.parseComment(e.length);
                        case i.CUESHEET:
                            break;
                        case i.PICTURE:
                            return this.parsePicture(e.length).then();
                        default:
                            this.metadata.addWarning("Unknown block type: " + e.type);
                    }
                    return this.tokenizer.ignore(e.length).then();
                }
                async parseBlockStreamInfo(e) {
                    if (e !== f.BlockStreamInfo.len) throw Error("Unexpected block-stream-info length");
                    let t = await this.tokenizer.readToken(f.BlockStreamInfo);
                    this.metadata.setFormat("container", "FLAC"),
                        this.metadata.setFormat("codec", "FLAC"),
                        this.metadata.setFormat("lossless", !0),
                        this.metadata.setFormat("numberOfChannels", t.channels),
                        this.metadata.setFormat("bitsPerSample", t.bitsPerSample),
                        this.metadata.setFormat("sampleRate", t.sampleRate),
                        t.totalSamples > 0 && this.metadata.setFormat("duration", t.totalSamples / t.sampleRate);
                }
                async parseComment(e) {
                    let t = await this.tokenizer.readToken(new r.Uint8ArrayType(e)),
                        a = new u.VorbisDecoder(t, 0);
                    a.readStringUtf8();
                    let i = a.readInt32();
                    for (let e = 0; e < i; e++) {
                        let e = a.parseUserComment();
                        this.vorbisParser.addTag(e.key, e.value);
                    }
                }
                async parsePicture(e) {
                    if (this.options.skipCovers) return this.tokenizer.ignore(e);
                    {
                        let t = await this.tokenizer.readToken(new o.VorbisPictureToken(e));
                        this.vorbisParser.addTag("METADATA_BLOCK_PICTURE", t);
                    }
                }
            }
            t.FlacParser = p;
            class f { }
            (f.BlockHeader = { len: 4, get: (e, t) => ({ lastBlock: s.getBit(e, t, 7), type: s.getBitAllignedNumber(e, t, 1, 7), length: r.UINT24_BE.get(e, t + 1) }) }),
                (f.BlockStreamInfo = {
                    len: 34,
                    get: (e, t) => ({
                        minimumBlockSize: r.UINT16_BE.get(e, t),
                        maximumBlockSize: r.UINT16_BE.get(e, t + 2) / 1e3,
                        minimumFrameSize: r.UINT24_BE.get(e, t + 4),
                        maximumFrameSize: r.UINT24_BE.get(e, t + 7),
                        sampleRate: r.UINT24_BE.get(e, t + 10) >> 4,
                        channels: s.getBitAllignedNumber(e, t + 12, 4, 3) + 1,
                        bitsPerSample: s.getBitAllignedNumber(e, t + 12, 7, 5) + 1,
                        totalSamples: s.getBitAllignedNumber(e, t + 13, 4, 36),
                        fileMD5: new r.Uint8ArrayType(16).get(e, t + 18),
                    }),
                });
        },
        62282: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.hasID3v1Header = t.ID3v1Parser = t.Genres = void 0);
            let r = a(11227),
                n = a(20036),
                s = a(83769),
                o = a(87805),
                l = a(6742),
                c = (0, r.default)("music-metadata:parser:ID3v1");
            t.Genres = [
                "Blues",
                "Classic Rock",
                "Country",
                "Dance",
                "Disco",
                "Funk",
                "Grunge",
                "Hip-Hop",
                "Jazz",
                "Metal",
                "New Age",
                "Oldies",
                "Other",
                "Pop",
                "R&B",
                "Rap",
                "Reggae",
                "Rock",
                "Techno",
                "Industrial",
                "Alternative",
                "Ska",
                "Death Metal",
                "Pranks",
                "Soundtrack",
                "Euro-Techno",
                "Ambient",
                "Trip-Hop",
                "Vocal",
                "Jazz+Funk",
                "Fusion",
                "Trance",
                "Classical",
                "Instrumental",
                "Acid",
                "House",
                "Game",
                "Sound Clip",
                "Gospel",
                "Noise",
                "Alt. Rock",
                "Bass",
                "Soul",
                "Punk",
                "Space",
                "Meditative",
                "Instrumental Pop",
                "Instrumental Rock",
                "Ethnic",
                "Gothic",
                "Darkwave",
                "Techno-Industrial",
                "Electronic",
                "Pop-Folk",
                "Eurodance",
                "Dream",
                "Southern Rock",
                "Comedy",
                "Cult",
                "Gangsta Rap",
                "Top 40",
                "Christian Rap",
                "Pop/Funk",
                "Jungle",
                "Native American",
                "Cabaret",
                "New Wave",
                "Psychedelic",
                "Rave",
                "Showtunes",
                "Trailer",
                "Lo-Fi",
                "Tribal",
                "Acid Punk",
                "Acid Jazz",
                "Polka",
                "Retro",
                "Musical",
                "Rock & Roll",
                "Hard Rock",
                "Folk",
                "Folk/Rock",
                "National Folk",
                "Swing",
                "Fast-Fusion",
                "Bebob",
                "Latin",
                "Revival",
                "Celtic",
                "Bluegrass",
                "Avantgarde",
                "Gothic Rock",
                "Progressive Rock",
                "Psychedelic Rock",
                "Symphonic Rock",
                "Slow Rock",
                "Big Band",
                "Chorus",
                "Easy Listening",
                "Acoustic",
                "Humour",
                "Speech",
                "Chanson",
                "Opera",
                "Chamber Music",
                "Sonata",
                "Symphony",
                "Booty Bass",
                "Primus",
                "Porn Groove",
                "Satire",
                "Slow Jam",
                "Club",
                "Tango",
                "Samba",
                "Folklore",
                "Ballad",
                "Power Ballad",
                "Rhythmic Soul",
                "Freestyle",
                "Duet",
                "Punk Rock",
                "Drum Solo",
                "A Cappella",
                "Euro-House",
                "Dance Hall",
                "Goa",
                "Drum & Bass",
                "Club-House",
                "Hardcore",
                "Terror",
                "Indie",
                "BritPop",
                "Negerpunk",
                "Polsk Punk",
                "Beat",
                "Christian Gangsta Rap",
                "Heavy Metal",
                "Black Metal",
                "Crossover",
                "Contemporary Christian",
                "Christian Rock",
                "Merengue",
                "Salsa",
                "Thrash Metal",
                "Anime",
                "JPop",
                "Synthpop",
                "Abstract",
                "Art Rock",
                "Baroque",
                "Bhangra",
                "Big Beat",
                "Breakbeat",
                "Chillout",
                "Downtempo",
                "Dub",
                "EBM",
                "Eclectic",
                "Electro",
                "Electroclash",
                "Emo",
                "Experimental",
                "Garage",
                "Global",
                "IDM",
                "Illbient",
                "Industro-Goth",
                "Jam Band",
                "Krautrock",
                "Leftfield",
                "Lounge",
                "Math Rock",
                "New Romantic",
                "Nu-Breakz",
                "Post-Punk",
                "Post-Rock",
                "Psytrance",
                "Shoegaze",
                "Space Rock",
                "Trop Rock",
                "World Music",
                "Neoclassical",
                "Audiobook",
                "Audio Theatre",
                "Neue Deutsche Welle",
                "Podcast",
                "Indie Rock",
                "G-Funk",
                "Dubstep",
                "Garage Rock",
                "Psybient",
            ];
            let d = {
                len: 128,
                get: (e, t) => {
                    let a = new u(3).get(e, t);
                    return "TAG" === a
                        ? {
                            header: a,
                            title: new u(30).get(e, t + 3),
                            artist: new u(30).get(e, t + 33),
                            album: new u(30).get(e, t + 63),
                            year: new u(4).get(e, t + 93),
                            comment: new u(28).get(e, t + 97),
                            zeroByte: n.UINT8.get(e, t + 127),
                            track: n.UINT8.get(e, t + 126),
                            genre: n.UINT8.get(e, t + 127),
                        }
                        : null;
                },
            };
            class u extends n.StringType {
                constructor(e) {
                    super(e, "binary");
                }
                get(e, t) {
                    let a = super.get(e, t);
                    return (a = (a = s.trimRightNull(a)).trim()).length > 0 ? a : void 0;
                }
            }
            class m extends o.BasicParser {
                static getGenre(e) {
                    if (e < t.Genres.length) return t.Genres[e];
                }
                async parse() {
                    if (!this.tokenizer.fileInfo.size) {
                        c("Skip checking for ID3v1 because the file-size is unknown");
                        return;
                    }
                    if (this.options.apeHeader) {
                        this.tokenizer.ignore(this.options.apeHeader.offset - this.tokenizer.position);
                        let e = new l.APEv2Parser();
                        e.init(this.metadata, this.tokenizer, this.options), await e.parseTags(this.options.apeHeader.footer);
                    }
                    let e = this.tokenizer.fileInfo.size - d.len;
                    if (this.tokenizer.position > e) {
                        c("Already consumed the last 128 bytes");
                        return;
                    }
                    let t = await this.tokenizer.readToken(d, e);
                    if (t) {
                        for (let e of (c("ID3v1 header found at: pos=%s", this.tokenizer.fileInfo.size - d.len), ["title", "artist", "album", "comment", "track", "year"])) t[e] && "" !== t[e] && this.addTag(e, t[e]);
                        let e = m.getGenre(t.genre);
                        e && this.addTag("genre", e);
                    } else c("ID3v1 header not found at: pos=%s", this.tokenizer.fileInfo.size - d.len);
                }
                addTag(e, t) {
                    this.metadata.addTag("ID3v1", e, t);
                }
            }
            async function p(e) {
                if (e.fileSize >= 128) {
                    let t = i.alloc(3);
                    return await e.randomRead(t, 0, t.length, e.fileSize - 128), "TAG" === t.toString("binary");
                }
                return !1;
            }
            (t.ID3v1Parser = m), (t.hasID3v1Header = p);
        },
        12939: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ID3v1TagMapper = void 0);
            let i = a(89918),
                r = { title: "title", artist: "artist", album: "album", year: "year", comment: "comment", track: "track", genre: "genre" };
            class n extends i.CommonTagMapper {
                constructor() {
                    super(["ID3v1"], r);
                }
            }
            t.ID3v1TagMapper = n;
        },
        25159: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractID3Parser = void 0);
            let i = a(35849),
                r = a(11227),
                n = a(78281),
                s = a(8928),
                o = a(62282),
                l = a(87805),
                c = (0, r.default)("music-metadata:parser:ID3");
            class d extends l.BasicParser {
                constructor() {
                    super(...arguments), (this.id3parser = new s.ID3v2Parser());
                }
                static async startsWithID3v2Header(e) {
                    return "ID3" === (await e.peekToken(n.ID3v2Header)).fileIdentifier;
                }
                async parse() {
                    try {
                        await this.parseID3v2();
                    } catch (e) {
                        if (e instanceof i.EndOfStreamError) c("End-of-stream");
                        else throw e;
                    }
                }
                finalize() { }
                async parseID3v2() {
                    if ((await this.tryReadId3v2Headers(), c("End of ID3v2 header, go to MPEG-parser: pos=%s", this.tokenizer.position), await this.postId3v2Parse(), this.options.skipPostHeaders && this.metadata.hasAny())) this.finalize();
                    else {
                        let e = new o.ID3v1Parser();
                        await e.init(this.metadata, this.tokenizer, this.options).parse(), this.finalize();
                    }
                }
                async tryReadId3v2Headers() {
                    if ("ID3" === (await this.tokenizer.peekToken(n.ID3v2Header)).fileIdentifier)
                        return c("Found ID3v2 header, pos=%s", this.tokenizer.position), await this.id3parser.parse(this.metadata, this.tokenizer, this.options), this.tryReadId3v2Headers();
                }
            }
            t.AbstractID3Parser = d;
        },
        60907: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.FrameParser = t.parseGenre = void 0);
            let r = a(11227),
                n = a(20036),
                s = a(83769),
                o = a(78281),
                l = a(62282),
                c = (0, r.default)("music-metadata:id3v2:frame-parser"),
                d = "latin1";
            function u(e) {
                let t;
                let a = [],
                    i = "";
                for (let r of e)
                    if ("string" == typeof t) {
                        if ("(" === r && "" === t) (i += "("), (t = void 0);
                        else if (")" === r) {
                            "" !== i && (a.push(i), (i = ""));
                            let e = m(t);
                            e && a.push(e), (t = void 0);
                        } else t += r;
                    } else "(" === r ? (t = "") : (i += r);
                return i && (0 === a.length && i.match(/^\d*$/) && (i = l.Genres[i]), a.push(i)), a;
            }
            function m(e) {
                return "RX" === e ? "Remix" : "CR" === e ? "Cover" : e.match(/^\d*$/) ? l.Genres[e] : void 0;
            }
            t.parseGenre = u;
            class p {
                constructor(e, t) {
                    (this.major = e), (this.warningCollector = t);
                }
                readData(e, t, a) {
                    let r, l;
                    if (0 === e.length) {
                        this.warningCollector.addWarning(`id3v2.${this.major} header has empty tag type=${t}`);
                        return;
                    }
                    let { encoding: m, bom: f } = o.TextEncodingToken.get(e, 0),
                        g = e.length,
                        h = 0,
                        T = [],
                        k = p.getNullTerminatorLength(m),
                        b = {};
                    switch ((c(`Parsing tag type=${t}, encoding=${m}, bom=${f}`), "TXXX" !== t && "T" === t[0] ? "T*" : t)) {
                        case "T*":
                        case "IPLS":
                        case "MVIN":
                        case "MVNM":
                        case "PCS":
                        case "PCST":
                            try {
                                l = s.decodeString(e.slice(1), m).replace(/\x00+$/, "");
                            } catch (e) {
                                this.warningCollector.addWarning(`id3v2.${this.major} type=${t} header has invalid string value: ${e.message}`);
                            }
                            switch (t) {
                                case "TMCL":
                                case "TIPL":
                                case "IPLS":
                                    (T = this.splitValue(t, l)), (T = p.functionList(T));
                                    break;
                                case "TRK":
                                case "TRCK":
                                case "TPOS":
                                    T = l;
                                    break;
                                case "TCOM":
                                case "TEXT":
                                case "TOLY":
                                case "TOPE":
                                case "TPE1":
                                case "TSRC":
                                    T = this.splitValue(t, l);
                                    break;
                                case "TCO":
                                case "TCON":
                                    T = this.splitValue(t, l)
                                        .map((e) => u(e))
                                        .reduce((e, t) => e.concat(t), []);
                                    break;
                                case "PCS":
                                case "PCST":
                                    T = Array.isArray((T = this.major >= 4 ? this.splitValue(t, l) : [l])) && "" === T[0] ? 1 : 0;
                                    break;
                                default:
                                    T = this.major >= 4 ? this.splitValue(t, l) : [l];
                            }
                            break;
                        case "TXXX":
                            T = { description: (T = p.readIdentifierAndData(e, h + 1, g, m)).id, text: this.splitValue(t, s.decodeString(T.data, m).replace(/\x00+$/, "")) };
                            break;
                        case "PIC":
                        case "APIC":
                            if (a) {
                                let t = {};
                                switch (((h += 1), this.major)) {
                                    case 2:
                                        (t.format = s.decodeString(e.slice(h, h + 3), "latin1")), (h += 3);
                                        break;
                                    case 3:
                                    case 4:
                                        (r = s.findZero(e, h, g, d)), (t.format = s.decodeString(e.slice(h, r), d)), (h = r + 1);
                                        break;
                                    default:
                                        throw Error("Warning: unexpected major versionIndex: " + this.major);
                                }
                                (t.format = p.fixPictureMimeType(t.format)),
                                    (t.type = o.AttachedPictureType[e[h]]),
                                    (h += 1),
                                    (r = s.findZero(e, h, g, m)),
                                    (t.description = s.decodeString(e.slice(h, r), m)),
                                    (h = r + k),
                                    (t.data = i.from(e.slice(h, g))),
                                    (T = t);
                            }
                            break;
                        case "CNT":
                        case "PCNT":
                            T = n.UINT32_BE.get(e, 0);
                            break;
                        case "SYLT":
                            for (h += 7, T = []; h < g;) {
                                let t = e.slice(h, (h = s.findZero(e, h, g, m)));
                                (h += 5), T.push(s.decodeString(t, m));
                            }
                            break;
                        case "ULT":
                        case "USLT":
                        case "COM":
                        case "COMM":
                            (h += 1),
                                (b.language = s.decodeString(e.slice(h, h + 3), d)),
                                (h += 3),
                                (r = s.findZero(e, h, g, m)),
                                (b.description = s.decodeString(e.slice(h, r), m)),
                                (h = r + k),
                                (b.text = s.decodeString(e.slice(h, g), m).replace(/\x00+$/, "")),
                                (T = [b]);
                            break;
                        case "UFID":
                            T = { owner_identifier: (T = p.readIdentifierAndData(e, h, g, d)).id, identifier: T.data };
                            break;
                        case "PRIV":
                            T = { owner_identifier: (T = p.readIdentifierAndData(e, h, g, d)).id, data: T.data };
                            break;
                        case "POPM":
                            r = s.findZero(e, h, g, d);
                            let I = s.decodeString(e.slice(h, r), d),
                                y = g - (h = r + 1);
                            T = { email: I, rating: n.UINT8.get(e, h), counter: y >= 5 ? n.UINT32_BE.get(e, h + 1) : void 0 };
                            break;
                        case "GEOB": {
                            r = s.findZero(e, h + 1, g, m);
                            let t = s.decodeString(e.slice(h + 1, r), d);
                            (h = r + 1), (r = s.findZero(e, h, g - h, m));
                            let a = s.decodeString(e.slice(h, r), d);
                            (h = r + 1), (r = s.findZero(e, h, g - h, m)), (T = { type: t, filename: a, description: s.decodeString(e.slice(h, r), d), data: e.slice(h + 1, g) });
                            break;
                        }
                        case "WCOM":
                        case "WCOP":
                        case "WOAF":
                        case "WOAR":
                        case "WOAS":
                        case "WORS":
                        case "WPAY":
                        case "WPUB":
                            T = s.decodeString(e.slice(h, r), d);
                            break;
                        case "WXXX": {
                            r = s.findZero(e, h + 1, g, m);
                            let t = s.decodeString(e.slice(h + 1, r), m);
                            (h = r + ("utf16le" === m ? 2 : 1)), (T = { description: t, url: s.decodeString(e.slice(h, g), d) });
                            break;
                        }
                        case "WFD":
                        case "WFED":
                            T = s.decodeString(e.slice(h + 1, s.findZero(e, h + 1, g, m)), m);
                            break;
                        case "MCDI":
                            T = e.slice(0, g);
                            break;
                        default:
                            c("Warning: unsupported id3v2-tag-type: " + t);
                    }
                    return T;
                }
                static fixPictureMimeType(e) {
                    switch ((e = e.toLocaleLowerCase())) {
                        case "jpg":
                            return "image/jpeg";
                        case "png":
                            return "image/png";
                    }
                    return e;
                }
                static functionList(e) {
                    let t = {};
                    for (let a = 0; a + 1 < e.length; a += 2) {
                        let i = e[a + 1].split(",");
                        t[e[a]] = t.hasOwnProperty(e[a]) ? t[e[a]].concat(i) : i;
                    }
                    return t;
                }
                splitValue(e, t) {
                    let a;
                    return (
                        this.major < 4 ? ((a = t.split(/\x00/g)).length > 1 ? this.warningCollector.addWarning(`ID3v2.${this.major} ${e} uses non standard null-separator.`) : (a = t.split(/\//g))) : (a = t.split(/\x00/g)), p.trimArray(a)
                    );
                }
                static trimArray(e) {
                    return e.map((e) => e.replace(/\x00+$/, "").trim());
                }
                static readIdentifierAndData(e, t, a, i) {
                    let r = s.findZero(e, t, a, i),
                        n = s.decodeString(e.slice(t, r), i);
                    return (t = r + p.getNullTerminatorLength(i)), { id: n, data: e.slice(t, a) };
                }
                static getNullTerminatorLength(e) {
                    return "utf16le" === e ? 2 : 1;
                }
            }
            t.FrameParser = p;
        },
        37183: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ID3v22TagMapper = t.id3v22TagMap = void 0);
            let i = a(24132);
            t.id3v22TagMap = {
                TT2: "title",
                TP1: "artist",
                TP2: "albumartist",
                TAL: "album",
                TYE: "year",
                COM: "comment",
                TRK: "track",
                TPA: "disk",
                TCO: "genre",
                PIC: "picture",
                TCM: "composer",
                TOR: "originaldate",
                TOT: "originalalbum",
                TXT: "lyricist",
                TP3: "conductor",
                TPB: "label",
                TT1: "grouping",
                TT3: "subtitle",
                TLA: "language",
                TCR: "copyright",
                WCP: "license",
                TEN: "encodedby",
                TSS: "encodersettings",
                WAR: "website",
                "COM:iTunPGAP": "gapless",
                PCS: "podcast",
                TCP: "compilation",
                TDR: "date",
                TS2: "albumartistsort",
                TSA: "albumsort",
                TSC: "composersort",
                TSP: "artistsort",
                TST: "titlesort",
                WFD: "podcasturl",
                TBP: "bpm",
            };
            class r extends i.CaseInsensitiveTagMap {
                constructor() {
                    super(["ID3v2.2"], t.id3v22TagMap);
                }
            }
            t.ID3v22TagMapper = r;
        },
        64005: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ID3v24TagMapper = void 0);
            let i = a(89918),
                r = a(24132),
                n = a(83769),
                s = {
                    TIT2: "title",
                    TPE1: "artist",
                    "TXXX:Artists": "artists",
                    TPE2: "albumartist",
                    TALB: "album",
                    TDRV: "date",
                    TORY: "originalyear",
                    TPOS: "disk",
                    TCON: "genre",
                    APIC: "picture",
                    TCOM: "composer",
                    "USLT:description": "lyrics",
                    TSOA: "albumsort",
                    TSOT: "titlesort",
                    TOAL: "originalalbum",
                    TSOP: "artistsort",
                    TSO2: "albumartistsort",
                    TSOC: "composersort",
                    TEXT: "lyricist",
                    "TXXX:Writer": "writer",
                    TPE3: "conductor",
                    TPE4: "remixer",
                    "IPLS:arranger": "arranger",
                    "IPLS:engineer": "engineer",
                    "IPLS:producer": "producer",
                    "IPLS:DJ-mix": "djmixer",
                    "IPLS:mix": "mixer",
                    TPUB: "label",
                    TIT1: "grouping",
                    TIT3: "subtitle",
                    TRCK: "track",
                    TCMP: "compilation",
                    POPM: "rating",
                    TBPM: "bpm",
                    TMED: "media",
                    "TXXX:CATALOGNUMBER": "catalognumber",
                    "TXXX:MusicBrainz Album Status": "releasestatus",
                    "TXXX:MusicBrainz Album Type": "releasetype",
                    "TXXX:MusicBrainz Album Release Country": "releasecountry",
                    "TXXX:RELEASECOUNTRY": "releasecountry",
                    "TXXX:SCRIPT": "script",
                    TLAN: "language",
                    TCOP: "copyright",
                    WCOP: "license",
                    TENC: "encodedby",
                    TSSE: "encodersettings",
                    "TXXX:BARCODE": "barcode",
                    "TXXX:ISRC": "isrc",
                    TSRC: "isrc",
                    "TXXX:ASIN": "asin",
                    "TXXX:originalyear": "originalyear",
                    "UFID:http://musicbrainz.org": "musicbrainz_recordingid",
                    "TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
                    "TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
                    "TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
                    "TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
                    "TXXX:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
                    "TXXX:MusicBrainz Work Id": "musicbrainz_workid",
                    "TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
                    "TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
                    "TXXX:ACOUSTID_ID": "acoustid_id",
                    "TXXX:Acoustid Id": "acoustid_id",
                    "TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
                    "TXXX:MusicIP PUID": "musicip_puid",
                    "TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
                    WOAR: "website",
                    TDRC: "date",
                    TYER: "year",
                    TDOR: "originaldate",
                    "TIPL:arranger": "arranger",
                    "TIPL:engineer": "engineer",
                    "TIPL:producer": "producer",
                    "TIPL:DJ-mix": "djmixer",
                    "TIPL:mix": "mixer",
                    TMOO: "mood",
                    SYLT: "lyrics",
                    TSST: "discsubtitle",
                    TKEY: "key",
                    COMM: "comment",
                    TOPE: "originalartist",
                    "PRIV:AverageLevel": "averageLevel",
                    "PRIV:PeakLevel": "peakLevel",
                    "TXXX:DISCOGS_ARTIST_ID": "discogs_artist_id",
                    "TXXX:DISCOGS_ARTISTS": "artists",
                    "TXXX:DISCOGS_ARTIST_NAME": "artists",
                    "TXXX:DISCOGS_ALBUM_ARTISTS": "albumartist",
                    "TXXX:DISCOGS_CATALOG": "catalognumber",
                    "TXXX:DISCOGS_COUNTRY": "releasecountry",
                    "TXXX:DISCOGS_DATE": "originaldate",
                    "TXXX:DISCOGS_LABEL": "label",
                    "TXXX:DISCOGS_LABEL_ID": "discogs_label_id",
                    "TXXX:DISCOGS_MASTER_RELEASE_ID": "discogs_master_release_id",
                    "TXXX:DISCOGS_RATING": "discogs_rating",
                    "TXXX:DISCOGS_RELEASED": "date",
                    "TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
                    "TXXX:DISCOGS_VOTES": "discogs_votes",
                    "TXXX:CATALOGID": "catalognumber",
                    "TXXX:STYLE": "genre",
                    "TXXX:REPLAYGAIN_TRACK_PEAK": "replaygain_track_peak",
                    "TXXX:REPLAYGAIN_TRACK_GAIN": "replaygain_track_gain",
                    "TXXX:REPLAYGAIN_ALBUM_PEAK": "replaygain_album_peak",
                    "TXXX:REPLAYGAIN_ALBUM_GAIN": "replaygain_album_gain",
                    "TXXX:MP3GAIN_MINMAX": "replaygain_track_minmax",
                    "TXXX:MP3GAIN_ALBUM_MINMAX": "replaygain_album_minmax",
                    "TXXX:MP3GAIN_UNDO": "replaygain_undo",
                    MVNM: "movement",
                    MVIN: "movementIndex",
                    PCST: "podcast",
                    TCAT: "category",
                    TDES: "description",
                    TDRL: "date",
                    TGID: "podcastId",
                    TKWD: "keywords",
                    WFED: "podcasturl",
                };
            class o extends r.CaseInsensitiveTagMap {
                static toRating(e) {
                    return { source: e.email, rating: e.rating > 0 ? ((e.rating - 1) / 254) * i.CommonTagMapper.maxRatingScore : void 0 };
                }
                constructor() {
                    super(["ID3v2.3", "ID3v2.4"], s);
                }
                postMap(e, t) {
                    switch (e.id) {
                        case "UFID":
                            "http://musicbrainz.org" === e.value.owner_identifier && ((e.id += ":" + e.value.owner_identifier), (e.value = n.decodeString(e.value.identifier, "latin1")));
                            break;
                        case "PRIV":
                            switch (e.value.owner_identifier) {
                                case "AverageLevel":
                                case "PeakValue":
                                    (e.id += ":" + e.value.owner_identifier), (e.value = 4 === e.value.data.length ? e.value.data.readUInt32LE(0) : null), null === e.value && t.addWarning("Failed to parse PRIV:PeakValue");
                                    break;
                                default:
                                    t.addWarning(`Unknown PRIV owner-identifier: ${e.value.owner_identifier}`);
                            }
                            break;
                        case "COMM":
                            e.value = e.value ? e.value.text : null;
                            break;
                        case "POPM":
                            e.value = o.toRating(e.value);
                    }
                }
            }
            t.ID3v24TagMapper = o;
        },
        8928: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ID3v2Parser = void 0);
            let r = a(20036),
                n = a(83769),
                s = a(60907),
                o = a(78281);
            class l {
                static removeUnsyncBytes(e) {
                    let t = 0,
                        a = 0;
                    for (; t < e.length - 1;) t !== a && (e[a] = e[t]), (t += 255 === e[t] && 0 === e[t + 1] ? 2 : 1), a++;
                    return t < e.length && (e[a++] = e[t]), e.slice(0, a);
                }
                static getFrameHeaderLength(e) {
                    switch (e) {
                        case 2:
                            return 6;
                        case 3:
                        case 4:
                            return 10;
                        default:
                            throw Error("header versionIndex is incorrect");
                    }
                }
                static readFrameFlags(e) {
                    return {
                        status: { tag_alter_preservation: n.getBit(e, 0, 6), file_alter_preservation: n.getBit(e, 0, 5), read_only: n.getBit(e, 0, 4) },
                        format: { grouping_identity: n.getBit(e, 1, 7), compression: n.getBit(e, 1, 3), encryption: n.getBit(e, 1, 2), unsynchronisation: n.getBit(e, 1, 1), data_length_indicator: n.getBit(e, 1, 0) },
                    };
                }
                static readFrameData(e, t, a, i, r) {
                    let n = new s.FrameParser(a, r);
                    switch (a) {
                        case 2:
                            return n.readData(e, t.id, i);
                        case 3:
                        case 4:
                            return t.flags.format.unsynchronisation && (e = l.removeUnsyncBytes(e)), t.flags.format.data_length_indicator && (e = e.slice(4, e.length)), n.readData(e, t.id, i);
                        default:
                            throw Error("Unexpected majorVer: " + a);
                    }
                }
                static makeDescriptionTagName(e, t) {
                    return e + (t ? ":" + t : "");
                }
                async parse(e, t, a) {
                    (this.tokenizer = t), (this.metadata = e), (this.options = a);
                    let i = await this.tokenizer.readToken(o.ID3v2Header);
                    if ("ID3" !== i.fileIdentifier) throw Error("expected ID3-header file-identifier 'ID3' was not found");
                    return (this.id3Header = i), (this.headerType = "ID3v2." + i.version.major), i.flags.isExtendedHeader ? this.parseExtendedHeader() : this.parseId3Data(i.size);
                }
                async parseExtendedHeader() {
                    let e = await this.tokenizer.readToken(o.ExtendedHeader),
                        t = e.size - o.ExtendedHeader.len;
                    return t > 0 ? this.parseExtendedHeaderData(t, e.size) : this.parseId3Data(this.id3Header.size - e.size);
                }
                async parseExtendedHeaderData(e, t) {
                    return await this.tokenizer.ignore(e), this.parseId3Data(this.id3Header.size - t);
                }
                async parseId3Data(e) {
                    let t = await this.tokenizer.readToken(new r.Uint8ArrayType(e));
                    for (let e of this.parseMetadata(t))
                        if ("TXXX" === e.id) {
                            if (e.value) for (let t of e.value.text) this.addTag(l.makeDescriptionTagName(e.id, e.value.description), t);
                        } else if ("COM" === e.id) for (let t of e.value) this.addTag(l.makeDescriptionTagName(e.id, t.description), t.text);
                        else if ("COMM" === e.id) for (let t of e.value) this.addTag(l.makeDescriptionTagName(e.id, t.description), t);
                        else if (Array.isArray(e.value)) for (let t of e.value) this.addTag(e.id, t);
                        else this.addTag(e.id, e.value);
                }
                addTag(e, t) {
                    this.metadata.addTag(this.headerType, e, t);
                }
                parseMetadata(e) {
                    let t = 0,
                        a = [];
                    for (; t !== e.length;) {
                        let i = l.getFrameHeaderLength(this.id3Header.version.major);
                        if (t + i > e.length) {
                            this.metadata.addWarning("Illegal ID3v2 tag length");
                            break;
                        }
                        let r = e.slice(t, (t += i)),
                            n = this.readFrameHeader(r, this.id3Header.version.major),
                            s = e.slice(t, (t += n.length)),
                            o = l.readFrameData(s, n, this.id3Header.version.major, !this.options.skipCovers, this.metadata);
                        o && a.push({ id: n.id, value: o });
                    }
                    return a;
                }
                readFrameHeader(e, t) {
                    let a;
                    switch (t) {
                        case 2:
                            (a = { id: i.from(e.slice(0, 3)).toString("ascii"), length: r.UINT24_BE.get(e, 3) }).id.match(/[A-Z0-9]{3}/g) || this.metadata.addWarning(`Invalid ID3v2.${this.id3Header.version.major} frame-header-ID: ${a.id}`);
                            break;
                        case 3:
                        case 4:
                            (a = { id: i.from(e.slice(0, 4)).toString("ascii"), length: (4 === t ? o.UINT32SYNCSAFE : r.UINT32_BE).get(e, 4), flags: l.readFrameFlags(e.slice(8, 10)) }).id.match(/[A-Z0-9]{4}/g) ||
                                this.metadata.addWarning(`Invalid ID3v2.${this.id3Header.version.major} frame-header-ID: ${a.id}`);
                            break;
                        default:
                            throw Error("Unexpected majorVer: " + t);
                    }
                    return a;
                }
            }
            t.ID3v2Parser = l;
        },
        78281: function (e, t, a) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.TextEncodingToken = t.ExtendedHeader = t.ID3v2Header = t.UINT32SYNCSAFE = t.AttachedPictureType = void 0);
            let r = a(20036),
                n = a(83769);
            !(function (e) {
                (e[(e.Other = 0)] = "Other"),
                    (e[(e["32x32 pixels 'file icon' (PNG only)"] = 1)] = "32x32 pixels 'file icon' (PNG only)"),
                    (e[(e["Other file icon"] = 2)] = "Other file icon"),
                    (e[(e["Cover (front)"] = 3)] = "Cover (front)"),
                    (e[(e["Cover (back)"] = 4)] = "Cover (back)"),
                    (e[(e["Leaflet page"] = 5)] = "Leaflet page"),
                    (e[(e["Media (e.g. label side of CD)"] = 6)] = "Media (e.g. label side of CD)"),
                    (e[(e["Lead artist/lead performer/soloist"] = 7)] = "Lead artist/lead performer/soloist"),
                    (e[(e["Artist/performer"] = 8)] = "Artist/performer"),
                    (e[(e.Conductor = 9)] = "Conductor"),
                    (e[(e["Band/Orchestra"] = 10)] = "Band/Orchestra"),
                    (e[(e.Composer = 11)] = "Composer"),
                    (e[(e["Lyricist/text writer"] = 12)] = "Lyricist/text writer"),
                    (e[(e["Recording Location"] = 13)] = "Recording Location"),
                    (e[(e["During recording"] = 14)] = "During recording"),
                    (e[(e["During performance"] = 15)] = "During performance"),
                    (e[(e["Movie/video screen capture"] = 16)] = "Movie/video screen capture"),
                    (e[(e["A bright coloured fish"] = 17)] = "A bright coloured fish"),
                    (e[(e.Illustration = 18)] = "Illustration"),
                    (e[(e["Band/artist logotype"] = 19)] = "Band/artist logotype"),
                    (e[(e["Publisher/Studio logotype"] = 20)] = "Publisher/Studio logotype");
            })((i = t.AttachedPictureType || (t.AttachedPictureType = {}))),
                (t.UINT32SYNCSAFE = { get: (e, t) => (127 & e[t + 3]) | (e[t + 2] << 7) | (e[t + 1] << 14) | (e[t] << 21), len: 4 }),
                (t.ID3v2Header = {
                    len: 10,
                    get: (e, a) => ({
                        fileIdentifier: new r.StringType(3, "ascii").get(e, a),
                        version: { major: r.INT8.get(e, a + 3), revision: r.INT8.get(e, a + 4) },
                        flags: { unsynchronisation: n.getBit(e, a + 5, 7), isExtendedHeader: n.getBit(e, a + 5, 6), expIndicator: n.getBit(e, a + 5, 5), footer: n.getBit(e, a + 5, 4) },
                        size: t.UINT32SYNCSAFE.get(e, a + 6),
                    }),
                }),
                (t.ExtendedHeader = { len: 10, get: (e, t) => ({ size: r.UINT32_BE.get(e, t), extendedFlags: r.UINT16_BE.get(e, t + 4), sizeOfPadding: r.UINT32_BE.get(e, t + 6), crcDataPresent: n.getBit(e, t + 4, 31) }) }),
                (t.TextEncodingToken = {
                    len: 1,
                    get: (e, t) => {
                        switch (e[t]) {
                            case 0:
                                return { encoding: "latin1" };
                            case 1:
                                return { encoding: "utf16le", bom: !0 };
                            case 2:
                                return { encoding: "utf16le", bom: !1 };
                            default:
                                return { encoding: "utf8", bom: !1 };
                        }
                    },
                });
        },
        44633: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Header = void 0);
            let i = a(20036),
                r = a(28049);
            t.Header = { len: 8, get: (e, t) => ({ chunkID: r.FourCcToken.get(e, t), chunkSize: Number(BigInt(i.UINT32_BE.get(e, t + 4))) }) };
        },
        19941: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            async function r(e) {
                if (e.fileSize >= 143) {
                    let a = i.alloc(15);
                    await e.randomRead(a, 0, a.length, e.fileSize - 143);
                    let r = a.toString("binary");
                    if (r.substr(6) === t.endTag2) return parseInt(r.substr(0, 6), 10) + 15;
                }
                return 0;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLyricsHeaderLength = t.endTag2 = void 0), (t.endTag2 = "LYRICS200"), (t.getLyricsHeaderLength = r);
        },
        63121: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.elements = void 0);
            let i = a(98591);
            t.elements = {
                440786851: {
                    name: "ebml",
                    container: {
                        17030: { name: "ebmlVersion", value: i.DataType.uint },
                        17143: { name: "ebmlReadVersion", value: i.DataType.uint },
                        17138: { name: "ebmlMaxIDWidth", value: i.DataType.uint },
                        17139: { name: "ebmlMaxSizeWidth", value: i.DataType.uint },
                        17026: { name: "docType", value: i.DataType.string },
                        17031: { name: "docTypeVersion", value: i.DataType.uint },
                        17029: { name: "docTypeReadVersion", value: i.DataType.uint },
                    },
                },
                408125543: {
                    name: "segment",
                    container: {
                        290298740: { name: "seekHead", container: { 19899: { name: "seek", container: { 21419: { name: "seekId", value: i.DataType.binary }, 21420: { name: "seekPosition", value: i.DataType.uint } } } } },
                        357149030: {
                            name: "info",
                            container: {
                                29604: { name: "uid", value: i.DataType.uid },
                                29572: { name: "filename", value: i.DataType.string },
                                3979555: { name: "prevUID", value: i.DataType.uid },
                                3965867: { name: "prevFilename", value: i.DataType.string },
                                4110627: { name: "nextUID", value: i.DataType.uid },
                                4096955: { name: "nextFilename", value: i.DataType.string },
                                2807729: { name: "timecodeScale", value: i.DataType.uint },
                                17545: { name: "duration", value: i.DataType.float },
                                17505: { name: "dateUTC", value: i.DataType.uint },
                                31657: { name: "title", value: i.DataType.string },
                                19840: { name: "muxingApp", value: i.DataType.string },
                                22337: { name: "writingApp", value: i.DataType.string },
                            },
                        },
                        524531317: {
                            name: "cluster",
                            multiple: !0,
                            container: {
                                231: { name: "timecode", value: i.DataType.uid },
                                163: { name: "unknown", value: i.DataType.binary },
                                167: { name: "position", value: i.DataType.uid },
                                171: { name: "prevSize", value: i.DataType.uid },
                            },
                        },
                        374648427: {
                            name: "tracks",
                            container: {
                                174: {
                                    name: "entries",
                                    multiple: !0,
                                    container: {
                                        215: { name: "trackNumber", value: i.DataType.uint },
                                        29637: { name: "uid", value: i.DataType.uid },
                                        131: { name: "trackType", value: i.DataType.uint },
                                        185: { name: "flagEnabled", value: i.DataType.bool },
                                        136: { name: "flagDefault", value: i.DataType.bool },
                                        21930: { name: "flagForced", value: i.DataType.bool },
                                        156: { name: "flagLacing", value: i.DataType.bool },
                                        28135: { name: "minCache", value: i.DataType.uint },
                                        28136: { name: "maxCache", value: i.DataType.uint },
                                        2352003: { name: "defaultDuration", value: i.DataType.uint },
                                        2306383: { name: "timecodeScale", value: i.DataType.float },
                                        21358: { name: "name", value: i.DataType.string },
                                        2274716: { name: "language", value: i.DataType.string },
                                        134: { name: "codecID", value: i.DataType.string },
                                        25506: { name: "codecPrivate", value: i.DataType.binary },
                                        2459272: { name: "codecName", value: i.DataType.string },
                                        3839639: { name: "codecSettings", value: i.DataType.string },
                                        3883072: { name: "codecInfoUrl", value: i.DataType.string },
                                        2536e3: { name: "codecDownloadUrl", value: i.DataType.string },
                                        170: { name: "codecDecodeAll", value: i.DataType.bool },
                                        28587: { name: "trackOverlay", value: i.DataType.uint },
                                        224: {
                                            name: "video",
                                            container: {
                                                154: { name: "flagInterlaced", value: i.DataType.bool },
                                                21432: { name: "stereoMode", value: i.DataType.uint },
                                                176: { name: "pixelWidth", value: i.DataType.uint },
                                                186: { name: "pixelHeight", value: i.DataType.uint },
                                                21680: { name: "displayWidth", value: i.DataType.uint },
                                                21690: { name: "displayHeight", value: i.DataType.uint },
                                                21683: { name: "aspectRatioType", value: i.DataType.uint },
                                                3061028: { name: "colourSpace", value: i.DataType.uint },
                                                3126563: { name: "gammaValue", value: i.DataType.float },
                                            },
                                        },
                                        225: {
                                            name: "audio",
                                            container: {
                                                181: { name: "samplingFrequency", value: i.DataType.float },
                                                30901: { name: "outputSamplingFrequency", value: i.DataType.float },
                                                159: { name: "channels", value: i.DataType.uint },
                                                148: { name: "channels", value: i.DataType.uint },
                                                32123: { name: "channelPositions", value: i.DataType.binary },
                                                25188: { name: "bitDepth", value: i.DataType.uint },
                                            },
                                        },
                                        28032: {
                                            name: "contentEncodings",
                                            container: {
                                                25152: {
                                                    name: "contentEncoding",
                                                    container: {
                                                        20529: { name: "order", value: i.DataType.uint },
                                                        20530: { name: "scope", value: i.DataType.bool },
                                                        20531: { name: "type", value: i.DataType.uint },
                                                        20532: { name: "contentEncoding", container: { 16980: { name: "contentCompAlgo", value: i.DataType.uint }, 16981: { name: "contentCompSettings", value: i.DataType.binary } } },
                                                        20533: {
                                                            name: "contentEncoding",
                                                            container: {
                                                                18401: { name: "contentEncAlgo", value: i.DataType.uint },
                                                                18402: { name: "contentEncKeyID", value: i.DataType.binary },
                                                                18403: { name: "contentSignature ", value: i.DataType.binary },
                                                                18404: { name: "ContentSigKeyID  ", value: i.DataType.binary },
                                                                18405: { name: "contentSigAlgo ", value: i.DataType.uint },
                                                                18406: { name: "contentSigHashAlgo ", value: i.DataType.uint },
                                                            },
                                                        },
                                                        25188: { name: "bitDepth", value: i.DataType.uint },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        475249515: {
                            name: "cues",
                            container: {
                                187: {
                                    name: "cuePoint",
                                    container: {
                                        179: { name: "cueTime", value: i.DataType.uid },
                                        183: {
                                            name: "positions",
                                            container: {
                                                247: { name: "track", value: i.DataType.uint },
                                                241: { name: "clusterPosition", value: i.DataType.uint },
                                                21368: { name: "blockNumber", value: i.DataType.uint },
                                                234: { name: "codecState", value: i.DataType.uint },
                                                219: {
                                                    name: "reference",
                                                    container: {
                                                        150: { name: "time", value: i.DataType.uint },
                                                        151: { name: "cluster", value: i.DataType.uint },
                                                        21343: { name: "number", value: i.DataType.uint },
                                                        235: { name: "codecState", value: i.DataType.uint },
                                                    },
                                                },
                                                240: { name: "relativePosition", value: i.DataType.uint },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        423732329: {
                            name: "attachments",
                            container: {
                                24999: {
                                    name: "attachedFiles",
                                    multiple: !0,
                                    container: {
                                        18046: { name: "description", value: i.DataType.string },
                                        18030: { name: "name", value: i.DataType.string },
                                        18016: { name: "mimeType", value: i.DataType.string },
                                        18012: { name: "data", value: i.DataType.binary },
                                        18094: { name: "uid", value: i.DataType.uid },
                                    },
                                },
                            },
                        },
                        272869232: {
                            name: "chapters",
                            container: {
                                17849: {
                                    name: "editionEntry",
                                    container: {
                                        182: {
                                            name: "chapterAtom",
                                            container: {
                                                29636: { name: "uid", value: i.DataType.uid },
                                                145: { name: "timeStart", value: i.DataType.uint },
                                                146: { name: "timeEnd", value: i.DataType.uid },
                                                152: { name: "hidden", value: i.DataType.bool },
                                                17816: { name: "enabled", value: i.DataType.uid },
                                                143: {
                                                    name: "track",
                                                    container: {
                                                        137: { name: "trackNumber", value: i.DataType.uid },
                                                        128: {
                                                            name: "display",
                                                            container: { 133: { name: "string", value: i.DataType.string }, 17276: { name: "language ", value: i.DataType.string }, 17278: { name: "country ", value: i.DataType.string } },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        307544935: {
                            name: "tags",
                            container: {
                                29555: {
                                    name: "tag",
                                    multiple: !0,
                                    container: {
                                        25536: {
                                            name: "target",
                                            container: {
                                                25541: { name: "tagTrackUID", value: i.DataType.uid },
                                                25540: { name: "tagChapterUID", value: i.DataType.uint },
                                                25542: { name: "tagAttachmentUID", value: i.DataType.uid },
                                                25546: { name: "targetType", value: i.DataType.string },
                                                26826: { name: "targetTypeValue", value: i.DataType.uint },
                                                25545: { name: "tagEditionUID", value: i.DataType.uid },
                                            },
                                        },
                                        26568: {
                                            name: "simpleTags",
                                            multiple: !0,
                                            container: {
                                                17827: { name: "name", value: i.DataType.string },
                                                17543: { name: "string", value: i.DataType.string },
                                                17541: { name: "binary", value: i.DataType.binary },
                                                17530: { name: "language", value: i.DataType.string },
                                                17531: { name: "languageIETF", value: i.DataType.string },
                                                17540: { name: "default", value: i.DataType.bool },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            };
        },
        50078: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MatroskaParser = void 0);
            let r = a(20036),
                n = a(11227),
                s = a(87805),
                o = a(98591),
                l = a(63121),
                c = (0, n.default)("music-metadata:parser:matroska");
            class d extends s.BasicParser {
                constructor() {
                    super(),
                        (this.padding = 0),
                        (this.parserMap = new Map()),
                        (this.ebmlMaxIDLength = 4),
                        (this.ebmlMaxSizeLength = 8),
                        this.parserMap.set(o.DataType.uint, (e) => this.readUint(e)),
                        this.parserMap.set(o.DataType.string, (e) => this.readString(e)),
                        this.parserMap.set(o.DataType.binary, (e) => this.readBuffer(e)),
                        this.parserMap.set(o.DataType.uid, async (e) => (await this.readUint(e)) === 1),
                        this.parserMap.set(o.DataType.bool, (e) => this.readFlag(e)),
                        this.parserMap.set(o.DataType.float, (e) => this.readFloat(e));
                }
                init(e, t, a) {
                    return super.init(e, t, a), this;
                }
                async parse() {
                    let e = await this.parseContainer(l.elements, this.tokenizer.fileInfo.size, []);
                    if ((this.metadata.setFormat("container", `EBML/${e.ebml.docType}`), e.segment)) {
                        let t = e.segment.info;
                        if (t) {
                            let e = t.timecodeScale ? t.timecodeScale : 1e6;
                            if ("number" == typeof t.duration) {
                                let a = (t.duration * e) / 1e9;
                                this.addTag("segment:title", t.title), this.metadata.setFormat("duration", a);
                            }
                        }
                        let a = e.segment.tracks;
                        if (a && a.entries) {
                            a.entries.forEach((e) => {
                                let t = {
                                    codecName: e.codecID.replace("A_", "").replace("V_", ""),
                                    codecSettings: e.codecSettings,
                                    flagDefault: e.flagDefault,
                                    flagLacing: e.flagLacing,
                                    flagEnabled: e.flagEnabled,
                                    language: e.language,
                                    name: e.name,
                                    type: e.trackType,
                                    audio: e.audio,
                                    video: e.video,
                                };
                                this.metadata.addStreamInfo(t);
                            });
                            let t = a.entries.filter((e) => e.trackType === o.TrackType.audio.valueOf()).reduce((e, t) => (!e || (!e.flagDefault && t.flagDefault) || (t.trackNumber && t.trackNumber < e.trackNumber) ? t : e), null);
                            t && (this.metadata.setFormat("codec", t.codecID.replace("A_", "")), this.metadata.setFormat("sampleRate", t.audio.samplingFrequency), this.metadata.setFormat("numberOfChannels", t.audio.channels)),
                                e.segment.tags &&
                                e.segment.tags.tag.forEach((e) => {
                                    let t = e.target,
                                        a = (null == t ? void 0 : t.targetTypeValue) ? o.TargetType[t.targetTypeValue] : (null == t ? void 0 : t.targetType) ? t.targetType : "track";
                                    e.simpleTags.forEach((e) => {
                                        let t = e.string ? e.string : e.binary;
                                        this.addTag(`${a}:${e.name}`, t);
                                    });
                                }),
                                e.segment.attachments &&
                                e.segment.attachments.attachedFiles
                                    .filter((e) => e.mimeType.startsWith("image/"))
                                    .map((e) => ({ data: e.data, format: e.mimeType, description: e.description, name: e.name }))
                                    .forEach((e) => {
                                        this.addTag("picture", e);
                                    });
                        }
                    }
                }
                async parseContainer(e, t, a) {
                    let i = {};
                    for (; this.tokenizer.position < t;) {
                        let t;
                        try {
                            t = await this.readElement();
                        } catch (e) {
                            if ("End-Of-Stream" === e.message) break;
                            throw e;
                        }
                        let r = e[t.id];
                        if (r) {
                            if ((c(`Element: name=${r.name}, container=${!!r.container}`), r.container)) {
                                let e = await this.parseContainer(r.container, t.len >= 0 ? this.tokenizer.position + t.len : -1, a.concat([r.name]));
                                r.multiple ? (i[r.name] || (i[r.name] = []), i[r.name].push(e)) : (i[r.name] = e);
                            } else i[r.name] = await this.parserMap.get(r.value)(t);
                        } else 236 === t.id || c(`parseEbml: path=${a.join("/")}, unknown element: id=${t.id.toString(16)}`), (this.padding += t.len), await this.tokenizer.ignore(t.len);
                    }
                    return i;
                }
                async readVintData(e) {
                    let t = await this.tokenizer.peekNumber(r.UINT8),
                        a = 128,
                        n = 1;
                    for (; (t & a) == 0;) {
                        if (n > e) throw Error("VINT value exceeding maximum size");
                        ++n, (a >>= 1);
                    }
                    let s = i.alloc(n);
                    return await this.tokenizer.readBuffer(s), s;
                }
                async readElement() {
                    let e = await this.readVintData(this.ebmlMaxIDLength),
                        t = await this.readVintData(this.ebmlMaxSizeLength);
                    t[0] ^= 128 >> (t.length - 1);
                    let a = Math.min(6, t.length);
                    return { id: e.readUIntBE(0, e.length), len: t.readUIntBE(t.length - a, a) };
                }
                isMaxValue(e) {
                    if (e.length === this.ebmlMaxSizeLength) {
                        for (let t = 1; t < this.ebmlMaxSizeLength; ++t) if (255 !== e[t]) return !1;
                        return !0;
                    }
                    return !1;
                }
                async readFloat(e) {
                    switch (e.len) {
                        case 0:
                            return 0;
                        case 4:
                            return this.tokenizer.readNumber(r.Float32_BE);
                        case 8:
                        case 10:
                            return this.tokenizer.readNumber(r.Float64_BE);
                        default:
                            throw Error(`Invalid IEEE-754 float length: ${e.len}`);
                    }
                }
                async readFlag(e) {
                    return (await this.readUint(e)) === 1;
                }
                async readUint(e) {
                    let t = await this.readBuffer(e),
                        a = Math.min(6, e.len);
                    return t.readUIntBE(e.len - a, a);
                }
                async readString(e) {
                    return (await this.tokenizer.readToken(new r.StringType(e.len, "utf-8"))).replace(/\00.*$/g, "");
                }
                async readBuffer(e) {
                    let t = i.alloc(e.len);
                    return await this.tokenizer.readBuffer(t), t;
                }
                addTag(e, t) {
                    this.metadata.addTag("matroska", e, t);
                }
            }
            t.MatroskaParser = d;
        },
        85481: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MatroskaTagMapper = void 0);
            let i = a(24132),
                r = {
                    "segment:title": "title",
                    "album:ARTIST": "albumartist",
                    "album:ARTISTSORT": "albumartistsort",
                    "album:TITLE": "album",
                    "album:DATE_RECORDED": "originaldate",
                    "album:PART_NUMBER": "disk",
                    "album:TOTAL_PARTS": "totaltracks",
                    "track:ARTIST": "artist",
                    "track:ARTISTSORT": "artistsort",
                    "track:TITLE": "title",
                    "track:PART_NUMBER": "track",
                    "track:MUSICBRAINZ_TRACKID": "musicbrainz_recordingid",
                    "track:MUSICBRAINZ_ALBUMID": "musicbrainz_albumid",
                    "track:MUSICBRAINZ_ARTISTID": "musicbrainz_artistid",
                    "track:PUBLISHER": "label",
                    "track:GENRE": "genre",
                    "track:ENCODER": "encodedby",
                    "track:ENCODER_OPTIONS": "encodersettings",
                    "edition:TOTAL_PARTS": "totaldiscs",
                    picture: "picture",
                };
            class n extends i.CaseInsensitiveTagMap {
                constructor() {
                    super(["matroska"], r);
                }
            }
            t.MatroskaTagMapper = n;
        },
        98591: function (e, t) {
            "use strict";
            var a, i, r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TrackType = t.TargetType = t.DataType = void 0),
                (function (e) {
                    (e[(e.string = 0)] = "string"), (e[(e.uint = 1)] = "uint"), (e[(e.uid = 2)] = "uid"), (e[(e.bool = 3)] = "bool"), (e[(e.binary = 4)] = "binary"), (e[(e.float = 5)] = "float");
                })((a = t.DataType || (t.DataType = {}))),
                (function (e) {
                    (e[(e.shot = 10)] = "shot"),
                        (e[(e.scene = 20)] = "scene"),
                        (e[(e.track = 30)] = "track"),
                        (e[(e.part = 40)] = "part"),
                        (e[(e.album = 50)] = "album"),
                        (e[(e.edition = 60)] = "edition"),
                        (e[(e.collection = 70)] = "collection");
                })((i = t.TargetType || (t.TargetType = {}))),
                (function (e) {
                    (e[(e.video = 1)] = "video"),
                        (e[(e.audio = 2)] = "audio"),
                        (e[(e.complex = 3)] = "complex"),
                        (e[(e.logo = 4)] = "logo"),
                        (e[(e.subtitle = 17)] = "subtitle"),
                        (e[(e.button = 18)] = "button"),
                        (e[(e.control = 32)] = "control");
                })((r = t.TrackType || (t.TrackType = {})));
        },
        9134: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Atom = void 0);
            let i = a(11227),
                r = a(81060),
                n = (0, i.default)("music-metadata:parser:MP4:Atom");
            class s {
                static async readAtom(e, t, a, i) {
                    let o = e.position,
                        l = await e.readToken(r.Header);
                    l.length === BigInt(1) && (l.length = await e.readToken(r.ExtendedSize));
                    let c = new s(l, l.length === BigInt(1), a),
                        d = c.getPayloadLength(i);
                    return n(`parse atom name=${c.atomPath}, extended=${c.extended}, offset=${o}, len=${c.header.length}`), await c.readData(e, t, d), c;
                }
                constructor(e, t, a) {
                    (this.header = e), (this.extended = t), (this.parent = a), (this.children = []), (this.atomPath = (this.parent ? this.parent.atomPath + "." : "") + this.header.name);
                }
                getHeaderLength() {
                    return this.extended ? 16 : 8;
                }
                getPayloadLength(e) {
                    return (this.header.length === BigInt(0) ? e : Number(this.header.length)) - this.getHeaderLength();
                }
                async readAtoms(e, t, a) {
                    for (; a > 0;) {
                        let i = await s.readAtom(e, t, this, a);
                        this.children.push(i), (a -= i.header.length === BigInt(0) ? a : Number(i.header.length));
                    }
                }
                async readData(e, t, a) {
                    switch (this.header.name) {
                        case "moov":
                        case "udta":
                        case "trak":
                        case "mdia":
                        case "minf":
                        case "stbl":
                        case "<id>":
                        case "ilst":
                        case "tref":
                            return this.readAtoms(e, t, this.getPayloadLength(a));
                        case "meta":
                            let i = "hdlr" === (await e.peekToken(r.Header)).name ? 0 : 4;
                            return await e.ignore(i), this.readAtoms(e, t, this.getPayloadLength(a) - i);
                        default:
                            return t(this, a);
                    }
                }
            }
            t.Atom = s;
        },
        81060: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ChapterText = t.StcoAtom = t.StszAtom = t.StscAtom = t.SampleToChunkToken = t.SttsAtom = t.TimeToSampleToken = t.SoundSampleDescriptionV0 = t.SoundSampleDescriptionVersion = t.StsdAtom = t.TrackHeaderAtom = t.NameAtom = t.DataAtom = t.MvhdAtom = t.MdhdAtom = t.FixedLengthAtom = t.mhdr = t.tkhd = t.ftyp = t.ExtendedSize = t.Header = void 0);
            let r = a(20036),
                n = a(11227),
                s = a(28049),
                o = (0, n.default)("music-metadata:parser:MP4:atom");
            (t.Header = {
                len: 8,
                get: (e, t) => {
                    let a = r.UINT32_BE.get(e, t);
                    if (a < 0) throw Error("Invalid atom header length");
                    return { length: BigInt(a), name: new r.StringType(4, "binary").get(e, t + 4) };
                },
                put: (e, t, a) => (r.UINT32_BE.put(e, t, Number(a.length)), s.FourCcToken.put(e, t + 4, a.name)),
            }),
                (t.ExtendedSize = r.UINT64_BE),
                (t.ftyp = { len: 4, get: (e, t) => ({ type: new r.StringType(4, "ascii").get(e, t) }) }),
                (t.tkhd = { len: 4, get: (e, t) => ({ type: new r.StringType(4, "ascii").get(e, t) }) }),
                (t.mhdr = { len: 8, get: (e, t) => ({ version: r.UINT8.get(e, t), flags: r.UINT24_BE.get(e, t + 1), nextItemID: r.UINT32_BE.get(e, t + 4) }) });
            class l {
                constructor(e, t, a) {
                    if (((this.len = e), e < t)) throw Error(`Atom ${a} expected to be ${t}, but specifies ${e} bytes long.`);
                    e > t && o(`Warning: atom ${a} expected to be ${t}, but was actually ${e} bytes long.`);
                }
            }
            t.FixedLengthAtom = l;
            let c = (e, t) => new Date(1e3 * (r.UINT32_BE.get(e, t) - 2082844800));
            class d extends l {
                constructor(e) {
                    super(e, 24, "mdhd"), (this.len = e);
                }
                get(e, t) {
                    return {
                        version: r.UINT8.get(e, t + 0),
                        flags: r.UINT24_BE.get(e, t + 1),
                        creationTime: c(e, t + 4),
                        modificationTime: c(e, t + 8),
                        timeScale: r.UINT32_BE.get(e, t + 12),
                        duration: r.UINT32_BE.get(e, t + 16),
                        language: r.UINT16_BE.get(e, t + 20),
                        quality: r.UINT16_BE.get(e, t + 22),
                    };
                }
            }
            t.MdhdAtom = d;
            class u extends l {
                constructor(e) {
                    super(e, 100, "mvhd"), (this.len = e);
                }
                get(e, t) {
                    return {
                        version: r.UINT8.get(e, t),
                        flags: r.UINT24_BE.get(e, t + 1),
                        creationTime: c(e, t + 4),
                        modificationTime: c(e, t + 8),
                        timeScale: r.UINT32_BE.get(e, t + 12),
                        duration: r.UINT32_BE.get(e, t + 16),
                        preferredRate: r.UINT32_BE.get(e, t + 20),
                        preferredVolume: r.UINT16_BE.get(e, t + 24),
                        previewTime: r.UINT32_BE.get(e, t + 72),
                        previewDuration: r.UINT32_BE.get(e, t + 76),
                        posterTime: r.UINT32_BE.get(e, t + 80),
                        selectionTime: r.UINT32_BE.get(e, t + 84),
                        selectionDuration: r.UINT32_BE.get(e, t + 88),
                        currentTime: r.UINT32_BE.get(e, t + 92),
                        nextTrackID: r.UINT32_BE.get(e, t + 96),
                    };
                }
            }
            t.MvhdAtom = u;
            class m {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return { type: { set: r.UINT8.get(e, t + 0), type: r.UINT24_BE.get(e, t + 1) }, locale: r.UINT24_BE.get(e, t + 4), value: i.from(new r.Uint8ArrayType(this.len - 8).get(e, t + 8)) };
                }
            }
            t.DataAtom = m;
            class p {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return { version: r.UINT8.get(e, t), flags: r.UINT24_BE.get(e, t + 1), name: new r.StringType(this.len - 4, "utf-8").get(e, t + 4) };
                }
            }
            t.NameAtom = p;
            class f {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return {
                        version: r.UINT8.get(e, t),
                        flags: r.UINT24_BE.get(e, t + 1),
                        creationTime: c(e, t + 4),
                        modificationTime: c(e, t + 8),
                        trackId: r.UINT32_BE.get(e, t + 12),
                        duration: r.UINT32_BE.get(e, t + 20),
                        layer: r.UINT16_BE.get(e, t + 24),
                        alternateGroup: r.UINT16_BE.get(e, t + 26),
                        volume: r.UINT16_BE.get(e, t + 28),
                    };
                }
            }
            t.TrackHeaderAtom = f;
            let g = 8,
                h = (e, t) => ({ version: r.UINT8.get(e, t), flags: r.UINT24_BE.get(e, t + 1), numberOfEntries: r.UINT32_BE.get(e, t + 4) });
            class T {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return { dataFormat: s.FourCcToken.get(e, t), dataReferenceIndex: r.UINT16_BE.get(e, t + 10), description: new r.Uint8ArrayType(this.len - 12).get(e, t + 12) };
                }
            }
            class k {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    let a = h(e, t);
                    t += g;
                    let i = [];
                    for (let n = 0; n < a.numberOfEntries; ++n) {
                        let a = r.UINT32_BE.get(e, t);
                        (t += r.UINT32_BE.len), i.push(new T(a).get(e, t)), (t += a);
                    }
                    return { header: a, table: i };
                }
            }
            (t.StsdAtom = k),
                (t.SoundSampleDescriptionVersion = { len: 8, get: (e, t) => ({ version: r.INT16_BE.get(e, t), revision: r.INT16_BE.get(e, t + 2), vendor: r.INT32_BE.get(e, t + 4) }) }),
                (t.SoundSampleDescriptionV0 = {
                    len: 12,
                    get: (e, t) => ({
                        numAudioChannels: r.INT16_BE.get(e, t + 0),
                        sampleSize: r.INT16_BE.get(e, t + 2),
                        compressionId: r.INT16_BE.get(e, t + 4),
                        packetSize: r.INT16_BE.get(e, t + 6),
                        sampleRate: r.UINT16_BE.get(e, t + 8) + r.UINT16_BE.get(e, t + 10) / 1e4,
                    }),
                });
            class b {
                constructor(e, t) {
                    (this.len = e), (this.token = t);
                }
                get(e, t) {
                    let a = r.INT32_BE.get(e, t + 4);
                    return { version: r.INT8.get(e, t + 0), flags: r.INT24_BE.get(e, t + 1), numberOfEntries: a, entries: w(e, this.token, t + 8, this.len - 8, a) };
                }
            }
            t.TimeToSampleToken = { len: 8, get: (e, t) => ({ count: r.INT32_BE.get(e, t + 0), duration: r.INT32_BE.get(e, t + 4) }) };
            class I extends b {
                constructor(e) {
                    super(e, t.TimeToSampleToken), (this.len = e);
                }
            }
            (t.SttsAtom = I), (t.SampleToChunkToken = { len: 12, get: (e, t) => ({ firstChunk: r.INT32_BE.get(e, t), samplesPerChunk: r.INT32_BE.get(e, t + 4), sampleDescriptionId: r.INT32_BE.get(e, t + 8) }) });
            class y extends b {
                constructor(e) {
                    super(e, t.SampleToChunkToken), (this.len = e);
                }
            }
            t.StscAtom = y;
            class v {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    let a = r.INT32_BE.get(e, t + 8);
                    return { version: r.INT8.get(e, t), flags: r.INT24_BE.get(e, t + 1), sampleSize: r.INT32_BE.get(e, t + 4), numberOfEntries: a, entries: w(e, r.INT32_BE, t + 12, this.len - 12, a) };
                }
            }
            t.StszAtom = v;
            class S extends b {
                constructor(e) {
                    super(e, r.INT32_BE), (this.len = e);
                }
            }
            t.StcoAtom = S;
            class E {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    let a = r.INT16_BE.get(e, t + 0);
                    return new r.StringType(a, "utf-8").get(e, t + 2);
                }
            }
            function w(e, t, a, i, r) {
                if ((o(`remainingLen=${i}, numberOfEntries=${r} * token-len=${t.len}`), 0 === i)) return [];
                if (i !== r * t.len) throw Error("mismatch number-of-entries with remaining atom-length");
                let n = [];
                for (let i = 0; i < r; ++i) n.push(t.get(e, a)), (a += t.len);
                return n;
            }
            t.ChapterText = E;
        },
        38841: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MP4Parser = void 0);
            let r = a(11227),
                n = a(20036),
                s = a(87805),
                o = a(62282),
                l = a(6032),
                c = a(9134),
                d = a(81060),
                u = (0, r.default)("music-metadata:parser:MP4"),
                m = "iTunes",
                p = {
                    raw: { lossy: !1, format: "raw" },
                    MAC3: { lossy: !0, format: "MACE 3:1" },
                    MAC6: { lossy: !0, format: "MACE 6:1" },
                    ima4: { lossy: !0, format: "IMA 4:1" },
                    ulaw: { lossy: !0, format: "uLaw 2:1" },
                    alaw: { lossy: !0, format: "uLaw 2:1" },
                    Qclp: { lossy: !0, format: "QUALCOMM PureVoice" },
                    ".mp3": { lossy: !0, format: "MPEG-1 layer 3" },
                    alac: { lossy: !1, format: "ALAC" },
                    "ac-3": { lossy: !0, format: "AC-3" },
                    mp4a: { lossy: !0, format: "MPEG-4/AAC" },
                    mp4s: { lossy: !0, format: "MP4S" },
                    c608: { lossy: !0, format: "CEA-608" },
                    c708: { lossy: !0, format: "CEA-708" },
                };
            function f(e, t, a) {
                return a.indexOf(e) === t;
            }
            class g extends s.BasicParser {
                constructor() {
                    super(...arguments),
                        (this.atomParsers = {
                            mvhd: async (e) => {
                                let t = await this.tokenizer.readToken(new d.MvhdAtom(e));
                                this.metadata.setFormat("creationTime", t.creationTime), this.metadata.setFormat("modificationTime", t.modificationTime);
                            },
                            mdhd: async (e) => {
                                let t = await this.tokenizer.readToken(new d.MdhdAtom(e)),
                                    a = this.getTrackDescription();
                                (a.creationTime = t.creationTime), (a.modificationTime = t.modificationTime), (a.timeScale = t.timeScale), (a.duration = t.duration);
                            },
                            chap: async (e) => {
                                let t = this.getTrackDescription(),
                                    a = [];
                                for (; e >= n.UINT32_BE.len;) a.push(await this.tokenizer.readNumber(n.UINT32_BE)), (e -= n.UINT32_BE.len);
                                t.chapterList = a;
                            },
                            tkhd: async (e) => {
                                let t = await this.tokenizer.readToken(new d.TrackHeaderAtom(e));
                                this.tracks.push(t);
                            },
                            mdat: async (e) => {
                                if (((this.audioLengthInBytes = e), this.calculateBitRate(), this.options.includeChapters)) {
                                    let t = this.tracks.filter((e) => e.chapterList);
                                    if (1 === t.length) {
                                        let a = t[0].chapterList,
                                            i = this.tracks.filter((e) => -1 !== a.indexOf(e.trackId));
                                        if (1 === i.length) return this.parseChapterTrack(i[0], t[0], e);
                                    }
                                }
                                await this.tokenizer.ignore(e);
                            },
                            ftyp: async (e) => {
                                let t = [];
                                for (; e > 0;) {
                                    let a = await this.tokenizer.readToken(d.ftyp);
                                    e -= d.ftyp.len;
                                    let i = a.type.replace(/\W/g, "");
                                    i.length > 0 && t.push(i);
                                }
                                u(`ftyp: ${t.join("/")}`);
                                let a = t.filter(f).join("/");
                                this.metadata.setFormat("container", a);
                            },
                            stsd: async (e) => {
                                let t = await this.tokenizer.readToken(new d.StsdAtom(e));
                                this.getTrackDescription().soundSampleDescription = t.table.map((e) => this.parseSoundSampleDescription(e));
                            },
                            stsc: async (e) => {
                                let t = await this.tokenizer.readToken(new d.StscAtom(e));
                                this.getTrackDescription().sampleToChunkTable = t.entries;
                            },
                            stts: async (e) => {
                                let t = await this.tokenizer.readToken(new d.SttsAtom(e));
                                this.getTrackDescription().timeToSampleTable = t.entries;
                            },
                            stsz: async (e) => {
                                let t = await this.tokenizer.readToken(new d.StszAtom(e)),
                                    a = this.getTrackDescription();
                                (a.sampleSize = t.sampleSize), (a.sampleSizeTable = t.entries);
                            },
                            stco: async (e) => {
                                let t = await this.tokenizer.readToken(new d.StcoAtom(e));
                                this.getTrackDescription().chunkOffsetTable = t.entries;
                            },
                            date: async (e) => {
                                let t = await this.tokenizer.readToken(new n.StringType(e, "utf-8"));
                                this.addTag("date", t);
                            },
                        });
                }
                static read_BE_Integer(e, t) {
                    let a = (t ? "INT" : "UINT") + 8 * e.length + (e.length > 1 ? "_BE" : ""),
                        i = n[a];
                    if (!i) throw Error('Token for integer type not found: "' + a + '"');
                    return Number(i.get(e, 0));
                }
                async parse() {
                    this.tracks = [];
                    let e = this.tokenizer.fileInfo.size;
                    for (; !this.tokenizer.fileInfo.size || e > 0;) {
                        try {
                            let e = await this.tokenizer.peekToken(d.Header);
                            if ("\0\0\0\0" === e.name) {
                                let e = `Error at offset=${this.tokenizer.position}: box.id=0`;
                                u(e), this.addWarning(e);
                                break;
                            }
                        } catch (t) {
                            let e = `Error at offset=${this.tokenizer.position}: ${t.message}`;
                            u(e), this.addWarning(e);
                            break;
                        }
                        let t = await c.Atom.readAtom(this.tokenizer, (e, t) => this.handleAtom(e, t), null, e);
                        e -= t.header.length === BigInt(0) ? e : Number(t.header.length);
                    }
                    let t = [];
                    this.tracks.forEach((e) => {
                        let a = [];
                        e.soundSampleDescription.forEach((e) => {
                            let t = {},
                                i = p[e.dataFormat];
                            if ((i ? (a.push(i.format), (t.codecName = i.format)) : (t.codecName = `<${e.dataFormat}>`), e.description)) {
                                let { description: a } = e;
                                a.sampleRate > 0 && ((t.type = l.TrackType.audio), (t.audio = { samplingFrequency: a.sampleRate, bitDepth: a.sampleSize, channels: a.numAudioChannels }));
                            }
                            this.metadata.addStreamInfo(t);
                        }),
                            a.length >= 1 && t.push(a.join("/"));
                    }),
                        t.length > 0 && this.metadata.setFormat("codec", t.filter(f).join("+"));
                    let a = this.tracks.filter((e) => e.soundSampleDescription.length >= 1 && e.soundSampleDescription[0].description && e.soundSampleDescription[0].description.numAudioChannels > 0);
                    if (a.length >= 1) {
                        let e = a[0];
                        if (e.timeScale > 0) {
                            let t = e.duration / e.timeScale;
                            this.metadata.setFormat("duration", t);
                        }
                        let t = e.soundSampleDescription[0];
                        if (
                            t.description &&
                            (this.metadata.setFormat("sampleRate", t.description.sampleRate),
                                this.metadata.setFormat("bitsPerSample", t.description.sampleSize),
                                this.metadata.setFormat("numberOfChannels", t.description.numAudioChannels),
                                0 === e.timeScale && e.timeToSampleTable.length > 0)
                        ) {
                            let a = e.timeToSampleTable.map((e) => e.count * e.duration).reduce((e, t) => e + t) / t.description.sampleRate;
                            this.metadata.setFormat("duration", a);
                        }
                        let i = p[t.dataFormat];
                        i && this.metadata.setFormat("lossless", !i.lossy), this.calculateBitRate();
                    }
                }
                async handleAtom(e, t) {
                    if (e.parent)
                        switch (e.parent.header.name) {
                            case "ilst":
                            case "<id>":
                                return this.parseMetadataItemData(e);
                        }
                    if (this.atomParsers[e.header.name]) return this.atomParsers[e.header.name](t);
                    u(`No parser for atom path=${e.atomPath}, payload-len=${t}, ignoring atom`), await this.tokenizer.ignore(t);
                }
                getTrackDescription() {
                    return this.tracks[this.tracks.length - 1];
                }
                calculateBitRate() {
                    this.audioLengthInBytes && this.metadata.format.duration && this.metadata.setFormat("bitrate", (8 * this.audioLengthInBytes) / this.metadata.format.duration);
                }
                addTag(e, t) {
                    this.metadata.addTag(m, e, t);
                }
                addWarning(e) {
                    u("Warning: " + e), this.metadata.addWarning(e);
                }
                parseMetadataItemData(e) {
                    let t = e.header.name;
                    return e.readAtoms(
                        this.tokenizer,
                        async (e, a) => {
                            let i = e.getPayloadLength(a);
                            switch (e.header.name) {
                                case "data":
                                    return this.parseValueAtom(t, e);
                                case "name":
                                case "mean":
                                case "rate":
                                    let r = await this.tokenizer.readToken(new d.NameAtom(i));
                                    t += ":" + r.name;
                                    break;
                                default:
                                    let s = await this.tokenizer.readToken(new n.BufferType(i));
                                    this.addWarning("Unsupported meta-item: " + t + "[" + e.header.name + "] => value=" + s.toString("hex") + " ascii=" + s.toString("ascii"));
                            }
                        },
                        e.getPayloadLength(0)
                    );
                }
                async parseValueAtom(e, t) {
                    let a = await this.tokenizer.readToken(new d.DataAtom(Number(t.header.length) - d.Header.len));
                    if (0 !== a.type.set) throw Error("Unsupported type-set != 0: " + a.type.set);
                    switch (a.type.type) {
                        case 0:
                            switch (e) {
                                case "trkn":
                                case "disk":
                                    let r = n.UINT8.get(a.value, 3),
                                        s = n.UINT8.get(a.value, 5);
                                    this.addTag(e, r + "/" + s);
                                    break;
                                case "gnre":
                                    let l = n.UINT8.get(a.value, 1),
                                        c = o.Genres[l - 1];
                                    this.addTag(e, c);
                                    break;
                                case "rate":
                                    let m = a.value.toString("ascii");
                                    this.addTag(e, m);
                                    break;
                                default:
                                    u("unknown proprietary value type for: " + t.atomPath);
                            }
                            break;
                        case 1:
                        case 18:
                            this.addTag(e, a.value.toString("utf-8"));
                            break;
                        case 13:
                            if (this.options.skipCovers) break;
                            this.addTag(e, { format: "image/jpeg", data: i.from(a.value) });
                            break;
                        case 14:
                            if (this.options.skipCovers) break;
                            this.addTag(e, { format: "image/png", data: i.from(a.value) });
                            break;
                        case 21:
                            this.addTag(e, g.read_BE_Integer(a.value, !0));
                            break;
                        case 22:
                            this.addTag(e, g.read_BE_Integer(a.value, !1));
                            break;
                        case 65:
                            this.addTag(e, a.value.readInt8(0));
                            break;
                        case 66:
                            this.addTag(e, a.value.readInt16BE(0));
                            break;
                        case 67:
                            this.addTag(e, a.value.readInt32BE(0));
                            break;
                        default:
                            this.addWarning(`atom key=${e}, has unknown well-known-type (data-type): ${a.type.type}`);
                    }
                }
                parseSoundSampleDescription(e) {
                    let t = { dataFormat: e.dataFormat, dataReferenceIndex: e.dataReferenceIndex },
                        a = 0,
                        i = d.SoundSampleDescriptionVersion.get(e.description, a);
                    return (a += d.SoundSampleDescriptionVersion.len), 0 === i.version || 1 === i.version ? (t.description = d.SoundSampleDescriptionV0.get(e.description, a)) : u(`Warning: sound-sample-description ${i} not implemented`), t;
                }
                async parseChapterTrack(e, t, a) {
                    if (!e.sampleSize && e.chunkOffsetTable.length !== e.sampleSizeTable.length) throw Error("Expected equal chunk-offset-table & sample-size-table length.");
                    let i = [];
                    for (let r = 0; r < e.chunkOffsetTable.length && a > 0; ++r) {
                        let n = e.chunkOffsetTable[r] - this.tokenizer.position,
                            s = e.sampleSize > 0 ? e.sampleSize : e.sampleSizeTable[r];
                        if ((a -= n + s) < 0) throw Error("Chapter chunk exceeding token length");
                        await this.tokenizer.ignore(n);
                        let o = await this.tokenizer.readToken(new d.ChapterText(s));
                        u(`Chapter ${r + 1}: ${o}`);
                        let l = { title: o, sampleOffset: this.findSampleOffset(t, this.tokenizer.position) };
                        u(`Chapter title=${l.title}, offset=${l.sampleOffset}/${this.tracks[0].duration}`), i.push(l);
                    }
                    this.metadata.setFormat("chapters", i), await this.tokenizer.ignore(a);
                }
                findSampleOffset(e, t) {
                    let a = 0;
                    e.timeToSampleTable.forEach((e) => {
                        a += e.count * e.duration;
                    }),
                        u(`Total duration=${a}`);
                    let i = 0;
                    for (; i < e.chunkOffsetTable.length && e.chunkOffsetTable[i] < t;) ++i;
                    return this.getChunkDuration(i + 1, e);
                }
                getChunkDuration(e, t) {
                    let a = 0,
                        i = t.timeToSampleTable[a].count,
                        r = t.timeToSampleTable[a].duration,
                        n = 1,
                        s = this.getSamplesPerChunk(n, t.sampleToChunkTable),
                        o = 0;
                    for (; n < e;) {
                        let e = Math.min(i, s);
                        (o += e * r), (i -= e), 0 == (s -= e) ? (++n, (s = this.getSamplesPerChunk(n, t.sampleToChunkTable))) : (++a, (i = t.timeToSampleTable[a].count), (r = t.timeToSampleTable[a].duration));
                    }
                    return o;
                }
                getSamplesPerChunk(e, t) {
                    for (let a = 0; a < t.length - 1; ++a) if (e >= t[a].firstChunk && e < t[a + 1].firstChunk) return t[a].samplesPerChunk;
                    return t[t.length - 1].samplesPerChunk;
                }
            }
            t.MP4Parser = g;
        },
        37852: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MP4TagMapper = t.tagType = void 0);
            let i = a(24132),
                r = {
                    "\xa9nam": "title",
                    "\xa9ART": "artist",
                    aART: "albumartist",
                    "----:com.apple.iTunes:Band": "albumartist",
                    "\xa9alb": "album",
                    "\xa9day": "date",
                    "\xa9cmt": "comment",
                    "\xa9com": "comment",
                    trkn: "track",
                    disk: "disk",
                    "\xa9gen": "genre",
                    covr: "picture",
                    "\xa9wrt": "composer",
                    "\xa9lyr": "lyrics",
                    soal: "albumsort",
                    sonm: "titlesort",
                    soar: "artistsort",
                    soaa: "albumartistsort",
                    soco: "composersort",
                    "----:com.apple.iTunes:LYRICIST": "lyricist",
                    "----:com.apple.iTunes:CONDUCTOR": "conductor",
                    "----:com.apple.iTunes:REMIXER": "remixer",
                    "----:com.apple.iTunes:ENGINEER": "engineer",
                    "----:com.apple.iTunes:PRODUCER": "producer",
                    "----:com.apple.iTunes:DJMIXER": "djmixer",
                    "----:com.apple.iTunes:MIXER": "mixer",
                    "----:com.apple.iTunes:LABEL": "label",
                    "\xa9grp": "grouping",
                    "----:com.apple.iTunes:SUBTITLE": "subtitle",
                    "----:com.apple.iTunes:DISCSUBTITLE": "discsubtitle",
                    cpil: "compilation",
                    tmpo: "bpm",
                    "----:com.apple.iTunes:MOOD": "mood",
                    "----:com.apple.iTunes:MEDIA": "media",
                    "----:com.apple.iTunes:CATALOGNUMBER": "catalognumber",
                    tvsh: "tvShow",
                    tvsn: "tvSeason",
                    tves: "tvEpisode",
                    sosn: "tvShowSort",
                    tven: "tvEpisodeId",
                    tvnn: "tvNetwork",
                    pcst: "podcast",
                    purl: "podcasturl",
                    "----:com.apple.iTunes:MusicBrainz Album Status": "releasestatus",
                    "----:com.apple.iTunes:MusicBrainz Album Type": "releasetype",
                    "----:com.apple.iTunes:MusicBrainz Album Release Country": "releasecountry",
                    "----:com.apple.iTunes:SCRIPT": "script",
                    "----:com.apple.iTunes:LANGUAGE": "language",
                    cprt: "copyright",
                    "\xa9cpy": "copyright",
                    "----:com.apple.iTunes:LICENSE": "license",
                    "\xa9too": "encodedby",
                    pgap: "gapless",
                    "----:com.apple.iTunes:BARCODE": "barcode",
                    "----:com.apple.iTunes:ISRC": "isrc",
                    "----:com.apple.iTunes:ASIN": "asin",
                    "----:com.apple.iTunes:NOTES": "comment",
                    "----:com.apple.iTunes:MusicBrainz Track Id": "musicbrainz_recordingid",
                    "----:com.apple.iTunes:MusicBrainz Release Track Id": "musicbrainz_trackid",
                    "----:com.apple.iTunes:MusicBrainz Album Id": "musicbrainz_albumid",
                    "----:com.apple.iTunes:MusicBrainz Artist Id": "musicbrainz_artistid",
                    "----:com.apple.iTunes:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
                    "----:com.apple.iTunes:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
                    "----:com.apple.iTunes:MusicBrainz Work Id": "musicbrainz_workid",
                    "----:com.apple.iTunes:MusicBrainz TRM Id": "musicbrainz_trmid",
                    "----:com.apple.iTunes:MusicBrainz Disc Id": "musicbrainz_discid",
                    "----:com.apple.iTunes:Acoustid Id": "acoustid_id",
                    "----:com.apple.iTunes:Acoustid Fingerprint": "acoustid_fingerprint",
                    "----:com.apple.iTunes:MusicIP PUID": "musicip_puid",
                    "----:com.apple.iTunes:fingerprint": "musicip_fingerprint",
                    "----:com.apple.iTunes:replaygain_track_gain": "replaygain_track_gain",
                    "----:com.apple.iTunes:replaygain_track_peak": "replaygain_track_peak",
                    "----:com.apple.iTunes:replaygain_album_gain": "replaygain_album_gain",
                    "----:com.apple.iTunes:replaygain_album_peak": "replaygain_album_peak",
                    "----:com.apple.iTunes:replaygain_track_minmax": "replaygain_track_minmax",
                    "----:com.apple.iTunes:replaygain_album_minmax": "replaygain_album_minmax",
                    "----:com.apple.iTunes:replaygain_undo": "replaygain_undo",
                    gnre: "genre",
                    "----:com.apple.iTunes:ALBUMARTISTSORT": "albumartistsort",
                    "----:com.apple.iTunes:ARTISTS": "artists",
                    "----:com.apple.iTunes:ORIGINALDATE": "originaldate",
                    "----:com.apple.iTunes:ORIGINALYEAR": "originalyear",
                    desc: "description",
                    ldes: "longDescription",
                    "\xa9mvn": "movement",
                    "\xa9mvi": "movementIndex",
                    "\xa9mvc": "movementTotal",
                    "\xa9wrk": "work",
                    catg: "category",
                    egid: "podcastId",
                    hdvd: "hdVideo",
                    keyw: "keywords",
                    shwm: "showMovement",
                    stik: "stik",
                    rate: "rating",
                };
            t.tagType = "iTunes";
            class n extends i.CaseInsensitiveTagMap {
                constructor() {
                    super([t.tagType], r);
                }
                postMap(e, t) {
                    "rate" === e.id && (e.value = { source: void 0, rating: parseFloat(e.value) / 100 });
                }
            }
            t.MP4TagMapper = n;
        },
        55261: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ExtendedLameHeader = void 0);
            let i = a(20036),
                r = a(83769),
                n = a(46118);
            t.ExtendedLameHeader = {
                len: 27,
                get: (e, t) => {
                    let a = i.UINT32_BE.get(e, t + 2);
                    return {
                        revision: r.getBitAllignedNumber(e, t, 0, 4),
                        vbr_method: r.getBitAllignedNumber(e, t, 4, 4),
                        lowpass_filter: 100 * i.UINT8.get(e, t + 1),
                        track_peak: 0 === a ? void 0 : a / 8388608,
                        track_gain: n.ReplayGain.get(e, 6),
                        album_gain: n.ReplayGain.get(e, 8),
                        music_length: i.UINT32_BE.get(e, t + 20),
                        music_crc: i.UINT8.get(e, t + 24),
                        header_crc: i.UINT16_BE.get(e, t + 24),
                    };
                },
            };
        },
        10060: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MpegParser = void 0);
            let r = a(20036),
                n = a(35849),
                s = a(11227),
                o = a(83769),
                l = a(25159),
                c = a(23566),
                d = (0, s.default)("music-metadata:parser:mpeg"),
                u = 1024,
                m = ["AAC Main", "AAC LC", "AAC SSR", "AAC LTP"],
                p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350, void 0, void 0, -1],
                f = [
                    void 0,
                    ["front-center"],
                    ["front-left", "front-right"],
                    ["front-center", "front-left", "front-right"],
                    ["front-center", "front-left", "front-right", "back-center"],
                    ["front-center", "front-left", "front-right", "back-left", "back-right"],
                    ["front-center", "front-left", "front-right", "back-left", "back-right", "LFE-channel"],
                    ["front-center", "front-left", "front-right", "side-left", "side-right", "back-left", "back-right", "LFE-channel"],
                ];
            class g {
                constructor(e, t) {
                    (this.versionIndex = o.getBitAllignedNumber(e, t + 1, 3, 2)),
                        (this.layer = g.LayerDescription[o.getBitAllignedNumber(e, t + 1, 5, 2)]),
                        this.versionIndex > 1 && 0 === this.layer ? this.parseAdtsHeader(e, t) : this.parseMpegHeader(e, t),
                        (this.isProtectedByCRC = !o.isBitSet(e, t + 1, 7));
                }
                calcDuration(e) {
                    return (e * this.calcSamplesPerFrame()) / this.samplingRate;
                }
                calcSamplesPerFrame() {
                    return g.samplesInFrameTable[1 === this.version ? 0 : 1][this.layer];
                }
                calculateSideInfoLength() {
                    if (3 !== this.layer) return 2;
                    if (3 === this.channelModeIndex) {
                        if (1 === this.version) return 17;
                        if (2 === this.version || 2.5 === this.version) return 9;
                    } else {
                        if (1 === this.version) return 32;
                        if (2 === this.version || 2.5 === this.version) return 17;
                    }
                }
                calcSlotSize() {
                    return [null, 4, 1, 1][this.layer];
                }
                parseMpegHeader(e, t) {
                    (this.container = "MPEG"),
                        (this.bitrateIndex = o.getBitAllignedNumber(e, t + 2, 0, 4)),
                        (this.sampRateFreqIndex = o.getBitAllignedNumber(e, t + 2, 4, 2)),
                        (this.padding = o.isBitSet(e, t + 2, 6)),
                        (this.privateBit = o.isBitSet(e, t + 2, 7)),
                        (this.channelModeIndex = o.getBitAllignedNumber(e, t + 3, 0, 2)),
                        (this.modeExtension = o.getBitAllignedNumber(e, t + 3, 2, 2)),
                        (this.isCopyrighted = o.isBitSet(e, t + 3, 4)),
                        (this.isOriginalMedia = o.isBitSet(e, t + 3, 5)),
                        (this.emphasis = o.getBitAllignedNumber(e, t + 3, 7, 2)),
                        (this.version = g.VersionID[this.versionIndex]),
                        (this.channelMode = g.ChannelMode[this.channelModeIndex]),
                        (this.codec = `MPEG ${this.version} Layer ${this.layer}`);
                    let a = this.calcBitrate();
                    if (!a) throw Error("Cannot determine bit-rate");
                    if (((this.bitrate = 1e3 * a), (this.samplingRate = this.calcSamplingRate()), null == this.samplingRate)) throw Error("Cannot determine sampling-rate");
                }
                parseAdtsHeader(e, t) {
                    d("layer=0 => ADTS"), (this.version = 2 === this.versionIndex ? 4 : 2), (this.container = "ADTS/MPEG-" + this.version);
                    let a = o.getBitAllignedNumber(e, t + 2, 0, 2);
                    (this.codec = "AAC"), (this.codecProfile = m[a]), d(`MPEG-4 audio-codec=${this.codec}`);
                    let i = o.getBitAllignedNumber(e, t + 2, 2, 4);
                    (this.samplingRate = p[i]), d(`sampling-rate=${this.samplingRate}`);
                    let r = o.getBitAllignedNumber(e, t + 2, 7, 3);
                    (this.mp4ChannelConfig = f[r]), d(`channel-config=${this.mp4ChannelConfig.join("+")}`), (this.frameLength = o.getBitAllignedNumber(e, t + 3, 6, 2) << 11);
                }
                calcBitrate() {
                    if (0 === this.bitrateIndex || 15 === this.bitrateIndex) return;
                    let e = `${Math.floor(this.version)}${this.layer}`;
                    return g.bitrate_index[this.bitrateIndex][e];
                }
                calcSamplingRate() {
                    return 3 === this.sampRateFreqIndex ? null : g.sampling_rate_freq_index[this.version][this.sampRateFreqIndex];
                }
            }
            (g.SyncByte1 = 255),
                (g.SyncByte2 = 224),
                (g.VersionID = [2.5, null, 2, 1]),
                (g.LayerDescription = [0, 3, 2, 1]),
                (g.ChannelMode = ["stereo", "joint_stereo", "dual_channel", "mono"]),
                (g.bitrate_index = {
                    1: { 11: 32, 12: 32, 13: 32, 21: 32, 22: 8, 23: 8 },
                    2: { 11: 64, 12: 48, 13: 40, 21: 48, 22: 16, 23: 16 },
                    3: { 11: 96, 12: 56, 13: 48, 21: 56, 22: 24, 23: 24 },
                    4: { 11: 128, 12: 64, 13: 56, 21: 64, 22: 32, 23: 32 },
                    5: { 11: 160, 12: 80, 13: 64, 21: 80, 22: 40, 23: 40 },
                    6: { 11: 192, 12: 96, 13: 80, 21: 96, 22: 48, 23: 48 },
                    7: { 11: 224, 12: 112, 13: 96, 21: 112, 22: 56, 23: 56 },
                    8: { 11: 256, 12: 128, 13: 112, 21: 128, 22: 64, 23: 64 },
                    9: { 11: 288, 12: 160, 13: 128, 21: 144, 22: 80, 23: 80 },
                    10: { 11: 320, 12: 192, 13: 160, 21: 160, 22: 96, 23: 96 },
                    11: { 11: 352, 12: 224, 13: 192, 21: 176, 22: 112, 23: 112 },
                    12: { 11: 384, 12: 256, 13: 224, 21: 192, 22: 128, 23: 128 },
                    13: { 11: 416, 12: 320, 13: 256, 21: 224, 22: 144, 23: 144 },
                    14: { 11: 448, 12: 384, 13: 320, 21: 256, 22: 160, 23: 160 },
                }),
                (g.sampling_rate_freq_index = { 1: { 0: 44100, 1: 48e3, 2: 32e3 }, 2: { 0: 22050, 1: 24e3, 2: 16e3 }, 2.5: { 0: 11025, 1: 12e3, 2: 8e3 } }),
                (g.samplesInFrameTable = [
                    [0, 384, 1152, 1152],
                    [0, 384, 1152, 576],
                ]);
            let h = { len: 4, get: (e, t) => new g(e, t) };
            function T(e) {
                return "V" + Math.floor((100 - e) / 10);
            }
            class k extends l.AbstractID3Parser {
                constructor() {
                    super(...arguments),
                        (this.frameCount = 0),
                        (this.syncFrameCount = -1),
                        (this.countSkipFrameData = 0),
                        (this.totalDataLength = 0),
                        (this.bitrates = []),
                        (this.calculateEofDuration = !1),
                        (this.buf_frame_header = i.alloc(4)),
                        (this.syncPeek = { buf: i.alloc(u), len: 0 });
                }
                async postId3v2Parse() {
                    this.metadata.setFormat("lossless", !1);
                    try {
                        let e = !1;
                        for (; !e;) await this.sync(), (e = await this.parseCommonMpegHeader());
                    } catch (e) {
                        if (e instanceof n.EndOfStreamError) {
                            if ((d("End-of-stream"), this.calculateEofDuration)) {
                                let e = this.frameCount * this.samplesPerFrame;
                                this.metadata.setFormat("numberOfSamples", e);
                                let t = e / this.metadata.format.sampleRate;
                                d(`Calculate duration at EOF: ${t} sec.`, t), this.metadata.setFormat("duration", t);
                            }
                        } else throw e;
                    }
                }
                finalize() {
                    let e = this.metadata.format,
                        t = this.metadata.native.hasOwnProperty("ID3v1");
                    if (e.duration && this.tokenizer.fileInfo.size) {
                        let a = this.tokenizer.fileInfo.size - this.mpegOffset - (t ? 128 : 0);
                        e.codecProfile && "V" === e.codecProfile[0] && this.metadata.setFormat("bitrate", (8 * a) / e.duration);
                    } else if (this.tokenizer.fileInfo.size && "CBR" === e.codecProfile) {
                        let a = Math.round((this.tokenizer.fileInfo.size - this.mpegOffset - (t ? 128 : 0)) / this.frame_size) * this.samplesPerFrame;
                        this.metadata.setFormat("numberOfSamples", a);
                        let i = a / e.sampleRate;
                        d("Calculate CBR duration based on file size: %s", i), this.metadata.setFormat("duration", i);
                    }
                }
                async sync() {
                    let e = !1;
                    for (; ;) {
                        let t = 0;
                        if (((this.syncPeek.len = await this.tokenizer.peekBuffer(this.syncPeek.buf, { length: u, mayBeLess: !0 })), this.syncPeek.len <= 163)) throw new n.EndOfStreamError();
                        for (; ;) {
                            if (e && (224 & this.syncPeek.buf[t]) == 224) {
                                (this.buf_frame_header[0] = g.SyncByte1),
                                    (this.buf_frame_header[1] = this.syncPeek.buf[t]),
                                    await this.tokenizer.ignore(t),
                                    d(`Sync at offset=${this.tokenizer.position - 1}, frameCount=${this.frameCount}`),
                                    this.syncFrameCount === this.frameCount && (d(`Re-synced MPEG stream, frameCount=${this.frameCount}`), (this.frameCount = 0), (this.frame_size = 0)),
                                    (this.syncFrameCount = this.frameCount);
                                return;
                            }
                            if (((e = !1), -1 === (t = this.syncPeek.buf.indexOf(g.SyncByte1, t)))) {
                                if (this.syncPeek.len < this.syncPeek.buf.length) throw new n.EndOfStreamError();
                                await this.tokenizer.ignore(this.syncPeek.len);
                                break;
                            }
                            ++t, (e = !0);
                        }
                    }
                }
                async parseCommonMpegHeader() {
                    let e;
                    0 === this.frameCount && (this.mpegOffset = this.tokenizer.position - 1), await this.tokenizer.peekBuffer(this.buf_frame_header, { offset: 1, length: 3 });
                    try {
                        e = h.get(this.buf_frame_header, 0);
                    } catch (e) {
                        return await this.tokenizer.ignore(1), this.metadata.addWarning("Parse error: " + e.message), !1;
                    }
                    return (
                        await this.tokenizer.ignore(3),
                        this.metadata.setFormat("container", e.container),
                        this.metadata.setFormat("codec", e.codec),
                        this.metadata.setFormat("lossless", !1),
                        this.metadata.setFormat("sampleRate", e.samplingRate),
                        this.frameCount++,
                        e.version >= 2 && 0 === e.layer ? this.parseAdts(e) : this.parseAudioFrameHeader(e)
                    );
                }
                async parseAudioFrameHeader(e) {
                    this.metadata.setFormat("numberOfChannels", "mono" === e.channelMode ? 1 : 2),
                        this.metadata.setFormat("bitrate", e.bitrate),
                        this.frameCount < 2e5 && d("offset=%s MP%s bitrate=%s sample-rate=%s", this.tokenizer.position - 4, e.layer, e.bitrate, e.samplingRate);
                    let t = e.calcSlotSize();
                    if (null === t) throw Error("invalid slot_size");
                    let a = e.calcSamplesPerFrame();
                    d(`samples_per_frame=${a}`);
                    let i = ((a / 8) * e.bitrate) / e.samplingRate + (e.padding ? t : 0);
                    if (((this.frame_size = Math.floor(i)), (this.audioFrameHeader = e), this.bitrates.push(e.bitrate), 1 === this.frameCount)) return (this.offset = h.len), await this.skipSideInformation(), !1;
                    if (3 === this.frameCount) {
                        if (this.areAllSame(this.bitrates)) {
                            if (((this.samplesPerFrame = a), this.metadata.setFormat("codecProfile", "CBR"), this.tokenizer.fileInfo.size)) return !0;
                        } else if (this.metadata.format.duration) return !0;
                        if (!this.options.duration) return !0;
                    }
                    return (
                        (this.options.duration && 4 === this.frameCount && ((this.samplesPerFrame = a), (this.calculateEofDuration = !0)), (this.offset = 4), e.isProtectedByCRC) ? await this.parseCrc() : await this.skipSideInformation(), !1
                    );
                }
                async parseAdts(e) {
                    let t = i.alloc(3);
                    await this.tokenizer.readBuffer(t), (e.frameLength += o.getBitAllignedNumber(t, 0, 0, 11)), (this.totalDataLength += e.frameLength), (this.samplesPerFrame = 1024);
                    let a = e.samplingRate / this.samplesPerFrame,
                        r = 8 * (0 === this.frameCount ? 0 : this.totalDataLength / this.frameCount) * a + 0.5;
                    if (
                        (this.metadata.setFormat("bitrate", r), d(`frame-count=${this.frameCount}, size=${e.frameLength} bytes, bit-rate=${r}`), await this.tokenizer.ignore(e.frameLength > 7 ? e.frameLength - 7 : 1), 3 === this.frameCount)
                    ) {
                        if ((this.metadata.setFormat("codecProfile", e.codecProfile), e.mp4ChannelConfig && this.metadata.setFormat("numberOfChannels", e.mp4ChannelConfig.length), !this.options.duration)) return !0;
                        this.calculateEofDuration = !0;
                    }
                    return !1;
                }
                async parseCrc() {
                    return (this.crc = await this.tokenizer.readNumber(r.INT16_BE)), (this.offset += 2), this.skipSideInformation();
                }
                async skipSideInformation() {
                    let e = this.audioFrameHeader.calculateSideInfoLength();
                    await this.tokenizer.readToken(new r.Uint8ArrayType(e)), (this.offset += e), await this.readXtraInfoHeader();
                }
                async readXtraInfoHeader() {
                    let e = await this.tokenizer.readToken(c.InfoTagHeaderTag);
                    switch (((this.offset += c.InfoTagHeaderTag.len), e)) {
                        case "Info":
                            return this.metadata.setFormat("codecProfile", "CBR"), this.readXingInfoHeader();
                        case "Xing":
                            let t = T((await this.readXingInfoHeader()).vbrScale);
                            return this.metadata.setFormat("codecProfile", t), null;
                        case "Xtra":
                            break;
                        case "LAME":
                            let a = await this.tokenizer.readToken(c.LameEncoderVersion);
                            if (this.frame_size >= this.offset + c.LameEncoderVersion.len)
                                return (this.offset += c.LameEncoderVersion.len), this.metadata.setFormat("tool", "LAME " + a), await this.skipFrameData(this.frame_size - this.offset), null;
                            this.metadata.addWarning("Corrupt LAME header");
                    }
                    let i = this.frame_size - this.offset;
                    return i < 0 ? this.metadata.addWarning("Frame " + this.frameCount + "corrupt: negative frameDataLeft") : await this.skipFrameData(i), null;
                }
                async readXingInfoHeader() {
                    let e = this.tokenizer.position,
                        t = await (0, c.readXingHeader)(this.tokenizer);
                    if (
                        ((this.offset += this.tokenizer.position - e),
                            t.lame &&
                            (this.metadata.setFormat("tool", "LAME " + o.stripNulls(t.lame.version)),
                                t.lame.extended &&
                                (this.metadata.setFormat("trackPeakLevel", t.lame.extended.track_peak),
                                    t.lame.extended.track_gain && this.metadata.setFormat("trackGain", t.lame.extended.track_gain.adjustment),
                                    t.lame.extended.album_gain && this.metadata.setFormat("albumGain", t.lame.extended.album_gain.adjustment),
                                    this.metadata.setFormat("duration", t.lame.extended.music_length / 1e3))),
                            t.streamSize)
                    ) {
                        let e = this.audioFrameHeader.calcDuration(t.numFrames);
                        return this.metadata.setFormat("duration", e), d("Get duration from Xing header: %s", this.metadata.format.duration), t;
                    }
                    let a = this.frame_size - this.offset;
                    return await this.skipFrameData(a), t;
                }
                async skipFrameData(e) {
                    if (e < 0) throw Error("frame-data-left cannot be negative");
                    await this.tokenizer.ignore(e), (this.countSkipFrameData += e);
                }
                areAllSame(e) {
                    let t = e[0];
                    return e.every((e) => e === t);
                }
            }
            t.MpegParser = k;
        },
        46118: function (e, t, a) {
            "use strict";
            var i, r;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReplayGain = void 0);
            let n = a(83769);
            !(function (e) {
                (e[(e.not_set = 0)] = "not_set"), (e[(e.radio = 1)] = "radio"), (e[(e.audiophile = 2)] = "audiophile");
            })(i || (i = {})),
                (function (e) {
                    (e[(e.unspecified = 0)] = "unspecified"), (e[(e.engineer = 1)] = "engineer"), (e[(e.user = 2)] = "user"), (e[(e.automatic = 3)] = "automatic"), (e[(e.rms_average = 4)] = "rms_average");
                })(r || (r = {})),
                (t.ReplayGain = {
                    len: 2,
                    get: (e, t) => {
                        let a = n.getBitAllignedNumber(e, t, 0, 3),
                            i = n.getBitAllignedNumber(e, t, 6, 1),
                            r = n.getBitAllignedNumber(e, t, 7, 9) / 10;
                        if (a > 0) return { type: n.getBitAllignedNumber(e, t, 0, 3), origin: n.getBitAllignedNumber(e, t, 3, 3), adjustment: i ? -r : r };
                    },
                });
        },
        23566: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.readXingHeader = t.XingHeaderFlags = t.LameEncoderVersion = t.InfoTagHeaderTag = void 0);
            let r = a(20036),
                n = a(83769),
                s = a(55261);
            async function o(e) {
                let a = await e.readToken(t.XingHeaderFlags),
                    n = {};
                if (
                    (a.frames && (n.numFrames = await e.readToken(r.UINT32_BE)),
                        a.bytes && (n.streamSize = await e.readToken(r.UINT32_BE)),
                        a.toc && ((n.toc = i.alloc(100)), await e.readBuffer(n.toc)),
                        a.vbrScale && (n.vbrScale = await e.readToken(r.UINT32_BE)),
                        "LAME" === (await e.peekToken(new r.StringType(4, "ascii"))) && (await e.ignore(4), (n.lame = { version: await e.readToken(new r.StringType(5, "ascii")) }), n.lame.version.match(/\d+.\d+/g)))
                ) {
                    let t = n.lame.version
                        .match(/\d+.\d+/g)[0]
                        .split(".")
                        .map((e) => parseInt(e, 10));
                    t[0] >= 3 && t[1] >= 90 && (n.lame.extended = await e.readToken(s.ExtendedLameHeader));
                }
                return n;
            }
            (t.InfoTagHeaderTag = new r.StringType(4, "ascii")),
                (t.LameEncoderVersion = new r.StringType(6, "ascii")),
                (t.XingHeaderFlags = { len: 4, get: (e, t) => ({ frames: n.isBitSet(e, t, 31), bytes: n.isBitSet(e, t, 30), toc: n.isBitSet(e, t, 29), vbrScale: n.isBitSet(e, t, 28) }) }),
                (t.readXingHeader = o);
        },
        19606: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            let i = a(11227),
                r = a(20036),
                n = a(25159),
                s = a(85170),
                o = a(13928),
                l = (0, i.default)("music-metadata:parser:musepack");
            class c extends n.AbstractID3Parser {
                async postId3v2Parse() {
                    let e;
                    switch (await this.tokenizer.peekToken(new r.StringType(3, "binary"))) {
                        case "MP+":
                            l("Musepack stream-version 7"), (e = new o.MpcSv7Parser());
                            break;
                        case "MPC":
                            l("Musepack stream-version 8"), (e = new s.MpcSv8Parser());
                            break;
                        default:
                            throw Error("Invalid Musepack signature prefix");
                    }
                    return e.init(this.metadata, this.tokenizer, this.options), e.parse();
                }
            }
            t.default = c;
        },
        62812: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.BitReader = void 0);
            let i = a(20036);
            class r {
                constructor(e) {
                    (this.tokenizer = e), (this.pos = 0), (this.dword = void 0);
                }
                async read(e) {
                    for (; void 0 === this.dword;) this.dword = await this.tokenizer.readToken(i.UINT32_LE);
                    let t = this.dword;
                    return ((this.pos += e), this.pos < 32)
                        ? (t >>>= 32 - this.pos) & ((1 << e) - 1)
                        : (((this.pos -= 32), 0 === this.pos) ? (this.dword = void 0) : ((this.dword = await this.tokenizer.readToken(i.UINT32_LE)), this.pos && ((t <<= this.pos), (t |= this.dword >>> (32 - this.pos)))),
                            t & ((1 << e) - 1));
                }
                async ignore(e) {
                    if (this.pos > 0) {
                        let t = 32 - this.pos;
                        (this.dword = void 0), (e -= t), (this.pos = 0);
                    }
                    let t = e % 32,
                        a = (e - t) / 32;
                    return await this.tokenizer.ignore(4 * a), this.read(t);
                }
            }
            t.BitReader = r;
        },
        13928: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MpcSv7Parser = void 0);
            let i = a(11227),
                r = a(87805),
                n = a(6742),
                s = a(62812),
                o = a(38153),
                l = (0, i.default)("music-metadata:parser:musepack");
            class c extends r.BasicParser {
                constructor() {
                    super(...arguments), (this.audioLength = 0);
                }
                async parse() {
                    let e = await this.tokenizer.readToken(o.Header);
                    if ("MP+" !== e.signature) throw Error("Unexpected magic number");
                    l(`stream-version=${e.streamMajorVersion}.${e.streamMinorVersion}`), this.metadata.setFormat("container", "Musepack, SV7"), this.metadata.setFormat("sampleRate", e.sampleFrequency);
                    let t = 1152 * (e.frameCount - 1) + e.lastFrameLength;
                    this.metadata.setFormat("numberOfSamples", t),
                        (this.duration = t / e.sampleFrequency),
                        this.metadata.setFormat("duration", this.duration),
                        (this.bitreader = new s.BitReader(this.tokenizer)),
                        this.metadata.setFormat("numberOfChannels", e.midSideStereo || e.intensityStereo ? 2 : 1);
                    let a = await this.bitreader.read(8);
                    return (
                        this.metadata.setFormat("codec", (a / 100).toFixed(2)),
                        await this.skipAudioData(e.frameCount),
                        l(`End of audio stream, switching to APEv2, offset=${this.tokenizer.position}`),
                        n.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options)
                    );
                }
                async skipAudioData(e) {
                    for (; e-- > 0;) {
                        let e = await this.bitreader.read(20);
                        (this.audioLength += 20 + e), await this.bitreader.ignore(e);
                    }
                    let t = await this.bitreader.read(11);
                    (this.audioLength += t), this.metadata.setFormat("bitrate", this.audioLength / this.duration);
                }
            }
            t.MpcSv7Parser = c;
        },
        38153: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Header = void 0);
            let r = a(20036),
                n = a(83769);
            t.Header = {
                len: 24,
                get: (e, t) => {
                    let a = {
                        signature: i.from(e).toString("latin1", t, t + 3),
                        streamMinorVersion: n.getBitAllignedNumber(e, t + 3, 0, 4),
                        streamMajorVersion: n.getBitAllignedNumber(e, t + 3, 4, 4),
                        frameCount: r.UINT32_LE.get(e, t + 4),
                        maxLevel: r.UINT16_LE.get(e, t + 8),
                        sampleFrequency: [44100, 48e3, 37800, 32e3][n.getBitAllignedNumber(e, t + 10, 0, 2)],
                        link: n.getBitAllignedNumber(e, t + 10, 2, 2),
                        profile: n.getBitAllignedNumber(e, t + 10, 4, 4),
                        maxBand: n.getBitAllignedNumber(e, t + 11, 0, 6),
                        intensityStereo: n.isBitSet(e, t + 11, 6),
                        midSideStereo: n.isBitSet(e, t + 11, 7),
                        titlePeak: r.UINT16_LE.get(e, t + 12),
                        titleGain: r.UINT16_LE.get(e, t + 14),
                        albumPeak: r.UINT16_LE.get(e, t + 16),
                        albumGain: r.UINT16_LE.get(e, t + 18),
                        lastFrameLength: (r.UINT32_LE.get(e, t + 20) >>> 20) & 2047,
                        trueGapless: n.isBitSet(e, t + 23, 0),
                    };
                    return (a.lastFrameLength = a.trueGapless ? (r.UINT32_LE.get(e, 20) >>> 20) & 2047 : 0), a;
                },
            };
        },
        85170: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.MpcSv8Parser = void 0);
            let i = a(11227),
                r = a(87805),
                n = a(6742),
                s = a(28049),
                o = a(38850),
                l = (0, i.default)("music-metadata:parser:musepack");
            class c extends r.BasicParser {
                constructor() {
                    super(...arguments), (this.audioLength = 0);
                }
                async parse() {
                    if ("MPCK" !== (await this.tokenizer.readToken(s.FourCcToken))) throw Error("Invalid Magic number");
                    return this.metadata.setFormat("container", "Musepack, SV8"), this.parsePacket();
                }
                async parsePacket() {
                    let e = new o.StreamReader(this.tokenizer);
                    for (; ;) {
                        let t = await e.readPacketHeader();
                        switch ((l(`packet-header key=${t.key}, payloadLength=${t.payloadLength}`), t.key)) {
                            case "SH":
                                let a = await e.readStreamHeader(t.payloadLength);
                                this.metadata.setFormat("numberOfSamples", a.sampleCount),
                                    this.metadata.setFormat("sampleRate", a.sampleFrequency),
                                    this.metadata.setFormat("duration", a.sampleCount / a.sampleFrequency),
                                    this.metadata.setFormat("numberOfChannels", a.channelCount);
                                break;
                            case "AP":
                                (this.audioLength += t.payloadLength), await this.tokenizer.ignore(t.payloadLength);
                                break;
                            case "RG":
                            case "EI":
                            case "SO":
                            case "ST":
                            case "CT":
                                await this.tokenizer.ignore(t.payloadLength);
                                break;
                            case "SE":
                                return this.metadata.setFormat("bitrate", (8 * this.audioLength) / this.metadata.format.duration), n.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options);
                            default:
                                throw Error(`Unexpected header: ${t.key}`);
                        }
                    }
                }
            }
            t.MpcSv8Parser = c;
        },
        38850: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.StreamReader = void 0);
            let i = a(20036),
                r = a(11227),
                n = a(83769),
                s = (0, r.default)("music-metadata:parser:musepack:sv8"),
                o = new i.StringType(2, "binary"),
                l = { len: 5, get: (e, t) => ({ crc: i.UINT32_LE.get(e, t), streamVersion: i.UINT8.get(e, t + 4) }) },
                c = {
                    len: 2,
                    get: (e, t) => ({
                        sampleFrequency: [44100, 48e3, 37800, 32e3][n.getBitAllignedNumber(e, t, 0, 3)],
                        maxUsedBands: n.getBitAllignedNumber(e, t, 3, 5),
                        channelCount: n.getBitAllignedNumber(e, t + 1, 0, 4) + 1,
                        msUsed: n.isBitSet(e, t + 1, 4),
                        audioBlockFrames: n.getBitAllignedNumber(e, t + 1, 5, 3),
                    }),
                };
            class d {
                constructor(e) {
                    this.tokenizer = e;
                }
                async readPacketHeader() {
                    let e = await this.tokenizer.readToken(o),
                        t = await this.readVariableSizeField();
                    return { key: e, payloadLength: t.value - 2 - t.len };
                }
                async readStreamHeader(e) {
                    let t = {};
                    s(`Reading SH at offset=${this.tokenizer.position}`);
                    let a = await this.tokenizer.readToken(l);
                    (e -= l.len), Object.assign(t, a), s(`SH.streamVersion = ${a.streamVersion}`);
                    let i = await this.readVariableSizeField();
                    (e -= i.len), (t.sampleCount = i.value);
                    let r = await this.readVariableSizeField();
                    (e -= r.len), (t.beginningOfSilence = r.value);
                    let n = await this.tokenizer.readToken(c);
                    return (e -= c.len), Object.assign(t, n), await this.tokenizer.ignore(e), t;
                }
                async readVariableSizeField(e = 1, t = 0) {
                    let a = await this.tokenizer.readNumber(i.UINT8);
                    return (128 & a) == 0 ? { len: e, value: t + a } : ((a &= 127), (a += t), this.readVariableSizeField(e + 1, a << 7));
                }
            }
            t.StreamReader = d;
        },
        71915: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.OggParser = t.SegmentTable = void 0);
            let r = a(20036),
                n = a(35849),
                s = a(11227),
                o = a(83769),
                l = a(28049),
                c = a(87805),
                d = a(54210),
                u = a(71272),
                m = a(10573),
                p = a(62630),
                f = (0, s.default)("music-metadata:parser:ogg");
            class g {
                static sum(e, t, a) {
                    let i = 0;
                    for (let r = t; r < t + a; ++r) i += e[r];
                    return i;
                }
                constructor(e) {
                    this.len = e.page_segments;
                }
                get(e, t) {
                    return { totalPageSize: g.sum(e, t, this.len) };
                }
            }
            t.SegmentTable = g;
            class h extends c.BasicParser {
                async parse() {
                    f("pos=%s, parsePage()", this.tokenizer.position);
                    try {
                        let e;
                        do {
                            if (((e = await this.tokenizer.readToken(h.Header)), "OggS" !== e.capturePattern)) throw Error("Invalid Ogg capture pattern");
                            this.metadata.setFormat("container", "Ogg"), (this.header = e), (this.pageNumber = e.pageSequenceNo), f("page#=%s, Ogg.id=%s", e.pageSequenceNo, e.capturePattern);
                            let t = await this.tokenizer.readToken(new g(e));
                            f("totalPageSize=%s", t.totalPageSize);
                            let a = await this.tokenizer.readToken(new r.Uint8ArrayType(t.totalPageSize));
                            if ((f("firstPage=%s, lastPage=%s, continued=%s", e.headerType.firstPage, e.headerType.lastPage, e.headerType.continued), e.headerType.firstPage)) {
                                let e = new r.StringType(7, "ascii").get(i.from(a), 0);
                                switch (e) {
                                    case "\x01vorbis":
                                        f("Set page consumer to Ogg/Vorbis"), (this.pageConsumer = new d.VorbisParser(this.metadata, this.options));
                                        break;
                                    case "OpusHea":
                                        f("Set page consumer to Ogg/Opus"), (this.pageConsumer = new u.OpusParser(this.metadata, this.options, this.tokenizer));
                                        break;
                                    case "Speex  ":
                                        f("Set page consumer to Ogg/Speex"), (this.pageConsumer = new m.SpeexParser(this.metadata, this.options, this.tokenizer));
                                        break;
                                    case "fishead":
                                    case "\0theora":
                                        f("Set page consumer to Ogg/Theora"), (this.pageConsumer = new p.TheoraParser(this.metadata, this.options, this.tokenizer));
                                        break;
                                    default:
                                        throw Error("gg audio-codec not recognized (id=" + e + ")");
                                }
                            }
                            this.pageConsumer.parsePage(e, a);
                        } while (!e.headerType.lastPage);
                    } catch (e) {
                        if (e instanceof n.EndOfStreamError)
                            this.metadata.addWarning("Last OGG-page is not marked with last-page flag"),
                                f("End-of-stream"),
                                this.metadata.addWarning("Last OGG-page is not marked with last-page flag"),
                                this.header && this.pageConsumer.calculateDuration(this.header);
                        else if (e.message.startsWith("FourCC")) this.pageNumber > 0 && (this.metadata.addWarning("Invalid FourCC ID, maybe last OGG-page is not marked with last-page flag"), this.pageConsumer.flush());
                        else throw e;
                    }
                }
            }
            (h.Header = {
                len: 27,
                get: (e, t) => ({
                    capturePattern: l.FourCcToken.get(e, t),
                    version: r.UINT8.get(e, t + 4),
                    headerType: { continued: o.getBit(e, t + 5, 0), firstPage: o.getBit(e, t + 5, 1), lastPage: o.getBit(e, t + 5, 2) },
                    absoluteGranulePosition: Number(r.UINT64_LE.get(e, t + 6)),
                    streamSerialNumber: r.UINT32_LE.get(e, t + 14),
                    pageSequenceNo: r.UINT32_LE.get(e, t + 18),
                    pageChecksum: r.UINT32_LE.get(e, t + 22),
                    page_segments: r.UINT8.get(e, t + 26),
                }),
            }),
                (t.OggParser = h);
        },
        5044: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.IdHeader = void 0);
            let i = a(20036);
            class r {
                constructor(e) {
                    if (((this.len = e), e < 19)) throw Error("ID-header-page 0 should be at least 19 bytes long");
                }
                get(e, t) {
                    return {
                        magicSignature: new i.StringType(8, "ascii").get(e, t + 0),
                        version: e.readUInt8(t + 8),
                        channelCount: e.readUInt8(t + 9),
                        preSkip: e.readInt16LE(t + 10),
                        inputSampleRate: e.readInt32LE(t + 12),
                        outputGain: e.readInt16LE(t + 16),
                        channelMapping: e.readUInt8(t + 18),
                    };
                }
            }
            t.IdHeader = r;
        },
        71272: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.OpusParser = void 0);
            let i = a(20036),
                r = a(54210),
                n = a(5044);
            class s extends r.VorbisParser {
                constructor(e, t, a) {
                    super(e, t), (this.tokenizer = a), (this.lastPos = -1);
                }
                parseFirstPage(e, t) {
                    if ((this.metadata.setFormat("codec", "Opus"), (this.idHeader = new n.IdHeader(t.length).get(t, 0)), "OpusHead" !== this.idHeader.magicSignature)) throw Error("Illegal ogg/Opus magic-signature");
                    this.metadata.setFormat("sampleRate", this.idHeader.inputSampleRate), this.metadata.setFormat("numberOfChannels", this.idHeader.channelCount);
                }
                parseFullPage(e) {
                    "OpusTags" === new i.StringType(8, "ascii").get(e, 0) && (this.parseUserCommentList(e, 8), (this.lastPos = this.tokenizer.position - e.length));
                }
                calculateDuration(e) {
                    if (this.metadata.format.sampleRate && e.absoluteGranulePosition >= 0) {
                        let t = e.absoluteGranulePosition - this.idHeader.preSkip;
                        if ((this.metadata.setFormat("numberOfSamples", t), this.metadata.setFormat("duration", t / 48e3), -1 !== this.lastPos && this.tokenizer.fileInfo.size && this.metadata.format.duration)) {
                            let e = this.tokenizer.fileInfo.size - this.lastPos;
                            this.metadata.setFormat("bitrate", (8 * e) / this.metadata.format.duration);
                        }
                    }
                }
            }
            t.OpusParser = s;
        },
        26666: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Header = void 0);
            let i = a(20036),
                r = a(83769);
            t.Header = {
                len: 80,
                get: (e, t) => ({
                    speex: new i.StringType(8, "ascii").get(e, t + 0),
                    version: r.trimRightNull(new i.StringType(20, "ascii").get(e, t + 8)),
                    version_id: e.readInt32LE(t + 28),
                    header_size: e.readInt32LE(t + 32),
                    rate: e.readInt32LE(t + 36),
                    mode: e.readInt32LE(t + 40),
                    mode_bitstream_version: e.readInt32LE(t + 44),
                    nb_channels: e.readInt32LE(t + 48),
                    bitrate: e.readInt32LE(t + 52),
                    frame_size: e.readInt32LE(t + 56),
                    vbr: e.readInt32LE(t + 60),
                    frames_per_packet: e.readInt32LE(t + 64),
                    extra_headers: e.readInt32LE(t + 68),
                    reserved1: e.readInt32LE(t + 72),
                    reserved2: e.readInt32LE(t + 76),
                }),
            };
        },
        10573: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.SpeexParser = void 0);
            let i = a(11227),
                r = a(54210),
                n = a(26666),
                s = (0, i.default)("music-metadata:parser:ogg:speex");
            class o extends r.VorbisParser {
                constructor(e, t, a) {
                    super(e, t), (this.tokenizer = a);
                }
                parseFirstPage(e, t) {
                    s("First Ogg/Speex page");
                    let a = n.Header.get(t, 0);
                    this.metadata.setFormat("codec", `Speex ${a.version}`),
                        this.metadata.setFormat("numberOfChannels", a.nb_channels),
                        this.metadata.setFormat("sampleRate", a.rate),
                        -1 !== a.bitrate && this.metadata.setFormat("bitrate", a.bitrate);
                }
            }
            t.SpeexParser = o;
        },
        15177: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.IdentificationHeader = void 0);
            let i = a(20036);
            t.IdentificationHeader = {
                len: 42,
                get: (e, t) => ({
                    id: new i.StringType(7, "ascii").get(e, t),
                    vmaj: e.readUInt8(t + 7),
                    vmin: e.readUInt8(t + 8),
                    vrev: e.readUInt8(t + 9),
                    vmbw: e.readUInt16BE(t + 10),
                    vmbh: e.readUInt16BE(t + 17),
                    nombr: i.UINT24_BE.get(e, t + 37),
                    nqual: e.readUInt8(t + 40),
                }),
            };
        },
        62630: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.TheoraParser = void 0);
            let i = a(11227),
                r = a(15177),
                n = (0, i.default)("music-metadata:parser:ogg:theora");
            class s {
                constructor(e, t, a) {
                    (this.metadata = e), (this.tokenizer = a);
                }
                parsePage(e, t) {
                    e.headerType.firstPage && this.parseFirstPage(e, t);
                }
                flush() {
                    n("flush");
                }
                calculateDuration(e) {
                    n("duration calculation not implemented");
                }
                parseFirstPage(e, t) {
                    n("First Ogg/Theora page"), this.metadata.setFormat("codec", "Theora");
                    let a = r.IdentificationHeader.get(t, 0);
                    this.metadata.setFormat("bitrate", a.nombr);
                }
            }
            t.TheoraParser = s;
        },
        2127: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.IdentificationHeader = t.CommonHeader = t.VorbisPictureToken = void 0);
            let r = a(20036),
                n = a(78281);
            class s {
                static fromBase64(e) {
                    return this.fromBuffer(i.from(e, "base64"));
                }
                static fromBuffer(e) {
                    return new s(e.length).get(e, 0);
                }
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    let a = n.AttachedPictureType[r.UINT32_BE.get(e, t)],
                        s = r.UINT32_BE.get(e, (t += 4)),
                        o = e.toString("utf-8", (t += 4), t + s),
                        l = r.UINT32_BE.get(e, (t += s)),
                        c = e.toString("utf-8", (t += 4), t + l),
                        d = r.UINT32_BE.get(e, (t += l)),
                        u = r.UINT32_BE.get(e, (t += 4)),
                        m = r.UINT32_BE.get(e, (t += 4)),
                        p = r.UINT32_BE.get(e, (t += 4)),
                        f = r.UINT32_BE.get(e, (t += 4));
                    return { type: a, format: o, description: c, width: d, height: u, colour_depth: m, indexed_color: p, data: i.from(e.slice((t += 4), t + f)) };
                }
            }
            (t.VorbisPictureToken = s),
                (t.CommonHeader = { len: 7, get: (e, t) => ({ packetType: e.readUInt8(t), vorbis: new r.StringType(6, "ascii").get(e, t + 1) }) }),
                (t.IdentificationHeader = {
                    len: 23,
                    get: (e, t) => {
                        let a = new DataView(e.buffer, e.byteOffset);
                        return {
                            version: a.getUint32(t + 0, !0),
                            channelMode: a.getUint8(t + 4),
                            sampleRate: a.getUint32(t + 5, !0),
                            bitrateMax: a.getUint32(t + 9, !0),
                            bitrateNominal: a.getUint32(t + 13, !0),
                            bitrateMin: a.getUint32(t + 17, !0),
                        };
                    },
                });
        },
        441: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.VorbisDecoder = void 0);
            let r = a(20036);
            class n {
                constructor(e, t) {
                    (this.data = e), (this.offset = t);
                }
                readInt32() {
                    let e = r.UINT32_LE.get(this.data, this.offset);
                    return (this.offset += 4), e;
                }
                readStringUtf8() {
                    let e = this.readInt32(),
                        t = i.from(this.data).toString("utf-8", this.offset, this.offset + e);
                    return (this.offset += e), t;
                }
                parseUserComment() {
                    let e = this.offset,
                        t = this.readStringUtf8(),
                        a = t.indexOf("=");
                    return { key: t.slice(0, a).toUpperCase(), value: t.slice(a + 1), len: this.offset - e };
                }
            }
            t.VorbisDecoder = n;
        },
        54210: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.VorbisParser = void 0);
            let r = a(20036),
                n = a(11227),
                s = a(441),
                o = a(2127),
                l = (0, n.default)("music-metadata:parser:ogg:vorbis1");
            class c {
                constructor(e, t) {
                    (this.metadata = e), (this.options = t), (this.pageSegments = []);
                }
                parsePage(e, t) {
                    if (e.headerType.firstPage) this.parseFirstPage(e, t);
                    else {
                        if (e.headerType.continued) {
                            if (0 === this.pageSegments.length) throw Error("Cannot continue on previous page");
                            this.pageSegments.push(t);
                        }
                        if (e.headerType.lastPage || !e.headerType.continued) {
                            if (this.pageSegments.length > 0) {
                                let e = i.concat(this.pageSegments);
                                this.parseFullPage(e);
                            }
                            this.pageSegments = e.headerType.lastPage ? [] : [t];
                        }
                    }
                    e.headerType.lastPage && this.calculateDuration(e);
                }
                flush() {
                    this.parseFullPage(i.concat(this.pageSegments));
                }
                parseUserComment(e, t) {
                    let a = new s.VorbisDecoder(e, t).parseUserComment();
                    return this.addTag(a.key, a.value), a.len;
                }
                addTag(e, t) {
                    if ("METADATA_BLOCK_PICTURE" === e && "string" == typeof t) {
                        if (this.options.skipCovers) {
                            l("Ignore picture");
                            return;
                        }
                        (t = o.VorbisPictureToken.fromBase64(t)), l(`Push picture: id=${e}, format=${t.format}`);
                    } else l(`Push tag: id=${e}, value=${t}`);
                    this.metadata.addTag("vorbis", e, t);
                }
                calculateDuration(e) {
                    this.metadata.format.sampleRate &&
                        e.absoluteGranulePosition >= 0 &&
                        (this.metadata.setFormat("numberOfSamples", e.absoluteGranulePosition), this.metadata.setFormat("duration", this.metadata.format.numberOfSamples / this.metadata.format.sampleRate));
                }
                parseFirstPage(e, t) {
                    this.metadata.setFormat("codec", "Vorbis I"), l("Parse first page");
                    let a = o.CommonHeader.get(t, 0);
                    if ("vorbis" !== a.vorbis) throw Error("Metadata does not look like Vorbis");
                    if (1 === a.packetType) {
                        let e = o.IdentificationHeader.get(t, o.CommonHeader.len);
                        this.metadata.setFormat("sampleRate", e.sampleRate),
                            this.metadata.setFormat("bitrate", e.bitrateNominal),
                            this.metadata.setFormat("numberOfChannels", e.channelMode),
                            l("sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s", e.sampleRate, e.bitrateNominal, e.channelMode);
                    } else throw Error("First Ogg page should be type 1: the identification header");
                }
                parseFullPage(e) {
                    let t = o.CommonHeader.get(e, 0);
                    if ((l("Parse full page: type=%s, byteLength=%s", t.packetType, e.byteLength), 3 === t.packetType)) return this.parseUserCommentList(e, o.CommonHeader.len);
                }
                parseUserCommentList(e, t) {
                    let a = r.UINT32_LE.get(e, t);
                    t += 4 + a;
                    let i = r.UINT32_LE.get(e, t);
                    for (t += 4; i-- > 0;) t += this.parseUserComment(e, t);
                }
            }
            t.VorbisParser = c;
        },
        29860: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.VorbisTagMapper = void 0);
            let i = a(89918),
                r = {
                    TITLE: "title",
                    ARTIST: "artist",
                    ARTISTS: "artists",
                    ALBUMARTIST: "albumartist",
                    "ALBUM ARTIST": "albumartist",
                    ALBUM: "album",
                    DATE: "date",
                    ORIGINALDATE: "originaldate",
                    ORIGINALYEAR: "originalyear",
                    COMMENT: "comment",
                    TRACKNUMBER: "track",
                    DISCNUMBER: "disk",
                    GENRE: "genre",
                    METADATA_BLOCK_PICTURE: "picture",
                    COMPOSER: "composer",
                    LYRICS: "lyrics",
                    ALBUMSORT: "albumsort",
                    TITLESORT: "titlesort",
                    WORK: "work",
                    ARTISTSORT: "artistsort",
                    ALBUMARTISTSORT: "albumartistsort",
                    COMPOSERSORT: "composersort",
                    LYRICIST: "lyricist",
                    WRITER: "writer",
                    CONDUCTOR: "conductor",
                    REMIXER: "remixer",
                    ARRANGER: "arranger",
                    ENGINEER: "engineer",
                    PRODUCER: "producer",
                    DJMIXER: "djmixer",
                    MIXER: "mixer",
                    LABEL: "label",
                    GROUPING: "grouping",
                    SUBTITLE: "subtitle",
                    DISCSUBTITLE: "discsubtitle",
                    TRACKTOTAL: "totaltracks",
                    DISCTOTAL: "totaldiscs",
                    COMPILATION: "compilation",
                    RATING: "rating",
                    BPM: "bpm",
                    KEY: "key",
                    MOOD: "mood",
                    MEDIA: "media",
                    CATALOGNUMBER: "catalognumber",
                    RELEASESTATUS: "releasestatus",
                    RELEASETYPE: "releasetype",
                    RELEASECOUNTRY: "releasecountry",
                    SCRIPT: "script",
                    LANGUAGE: "language",
                    COPYRIGHT: "copyright",
                    LICENSE: "license",
                    ENCODEDBY: "encodedby",
                    ENCODERSETTINGS: "encodersettings",
                    BARCODE: "barcode",
                    ISRC: "isrc",
                    ASIN: "asin",
                    MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
                    MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
                    MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
                    MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
                    MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
                    MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
                    MUSICBRAINZ_WORKID: "musicbrainz_workid",
                    MUSICBRAINZ_TRMID: "musicbrainz_trmid",
                    MUSICBRAINZ_DISCID: "musicbrainz_discid",
                    ACOUSTID_ID: "acoustid_id",
                    ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
                    MUSICIP_PUID: "musicip_puid",
                    WEBSITE: "website",
                    NOTES: "notes",
                    TOTALTRACKS: "totaltracks",
                    TOTALDISCS: "totaldiscs",
                    DISCOGS_ARTIST_ID: "discogs_artist_id",
                    DISCOGS_ARTISTS: "artists",
                    DISCOGS_ARTIST_NAME: "artists",
                    DISCOGS_ALBUM_ARTISTS: "albumartist",
                    DISCOGS_CATALOG: "catalognumber",
                    DISCOGS_COUNTRY: "releasecountry",
                    DISCOGS_DATE: "originaldate",
                    DISCOGS_LABEL: "label",
                    DISCOGS_LABEL_ID: "discogs_label_id",
                    DISCOGS_MASTER_RELEASE_ID: "discogs_master_release_id",
                    DISCOGS_RATING: "discogs_rating",
                    DISCOGS_RELEASED: "date",
                    DISCOGS_RELEASE_ID: "discogs_release_id",
                    DISCOGS_VOTES: "discogs_votes",
                    CATALOGID: "catalognumber",
                    STYLE: "genre",
                    REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
                    REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
                    REPLAYGAIN_ALBUM_GAIN: "replaygain_album_gain",
                    REPLAYGAIN_ALBUM_PEAK: "replaygain_album_peak",
                    REPLAYGAIN_MINMAX: "replaygain_track_minmax",
                    REPLAYGAIN_ALBUM_MINMAX: "replaygain_album_minmax",
                    REPLAYGAIN_UNDO: "replaygain_undo",
                };
            class n extends i.CommonTagMapper {
                static toRating(e, t, a) {
                    return { source: e ? e.toLowerCase() : e, rating: (parseFloat(t) / a) * i.CommonTagMapper.maxRatingScore };
                }
                constructor() {
                    super(["vorbis"], r);
                }
                postMap(e) {
                    if ("RATING" === e.id) e.value = n.toRating(void 0, e.value, 100);
                    else if (0 === e.id.indexOf("RATING:")) {
                        let t = e.id.split(":");
                        (e.value = n.toRating(t[1], e.value, 1)), (e.id = t[0]);
                    }
                }
            }
            t.VorbisTagMapper = n;
        },
        83211: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ListInfoTagValue = t.Header = void 0);
            let i = a(20036);
            t.Header = { len: 8, get: (e, t) => ({ chunkID: e.toString("binary", t, t + 4), chunkSize: i.UINT32_LE.get(e, 4) }) };
            class r {
                constructor(e) {
                    (this.tagHeader = e), (this.len = e.chunkSize), (this.len += 1 & this.len);
                }
                get(e, t) {
                    return new i.StringType(this.tagHeader.chunkSize, "ascii").get(e, t);
                }
            }
            t.ListInfoTagValue = r;
        },
        35756: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.RiffInfoTagMapper = t.riffInfoTagMap = void 0);
            let i = a(89918);
            t.riffInfoTagMap = {
                IART: "artist",
                ICRD: "date",
                INAM: "title",
                TITL: "title",
                IPRD: "album",
                ITRK: "track",
                IPRT: "track",
                COMM: "comment",
                ICMT: "comment",
                ICNT: "releasecountry",
                GNRE: "genre",
                IWRI: "writer",
                RATE: "rating",
                YEAR: "year",
                ISFT: "encodedby",
                CODE: "encodedby",
                TURL: "website",
                IGNR: "genre",
                IENG: "engineer",
                ITCH: "technician",
                IMED: "media",
                IRPD: "album",
            };
            class r extends i.CommonTagMapper {
                constructor() {
                    super(["exif"], t.riffInfoTagMap);
                }
            }
            t.RiffInfoTagMapper = r;
        },
        6032: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.TrackType = void 0);
            var i = a(98591);
            Object.defineProperty(t, "TrackType", {
                enumerable: !0,
                get: function () {
                    return i.TrackType;
                },
            });
        },
        88053: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.BroadcastAudioExtensionChunk = void 0);
            let i = a(20036),
                r = a(83769);
            t.BroadcastAudioExtensionChunk = {
                len: 420,
                get: (e, t) => ({
                    description: (0, r.stripNulls)(new i.StringType(256, "ascii").get(e, t)).trim(),
                    originator: (0, r.stripNulls)(new i.StringType(32, "ascii").get(e, t + 256)).trim(),
                    originatorReference: (0, r.stripNulls)(new i.StringType(32, "ascii").get(e, t + 288)).trim(),
                    originationDate: (0, r.stripNulls)(new i.StringType(10, "ascii").get(e, t + 320)).trim(),
                    originationTime: (0, r.stripNulls)(new i.StringType(8, "ascii").get(e, t + 330)).trim(),
                    timeReferenceLow: i.UINT32_LE.get(e, t + 338),
                    timeReferenceHigh: i.UINT32_LE.get(e, t + 342),
                    version: i.UINT16_LE.get(e, t + 346),
                    umid: new i.Uint8ArrayType(64).get(e, t + 348),
                    loudnessValue: i.UINT16_LE.get(e, t + 412),
                    maxTruePeakLevel: i.UINT16_LE.get(e, t + 414),
                    maxMomentaryLoudness: i.UINT16_LE.get(e, t + 416),
                    maxShortTermLoudness: i.UINT16_LE.get(e, t + 418),
                }),
            };
        },
        29975: function (e, t) {
            "use strict";
            var a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.FactChunk = t.Format = t.WaveFormat = void 0),
                (function (e) {
                    (e[(e.PCM = 1)] = "PCM"),
                        (e[(e.ADPCM = 2)] = "ADPCM"),
                        (e[(e.IEEE_FLOAT = 3)] = "IEEE_FLOAT"),
                        (e[(e.MPEG_ADTS_AAC = 5632)] = "MPEG_ADTS_AAC"),
                        (e[(e.MPEG_LOAS = 5634)] = "MPEG_LOAS"),
                        (e[(e.RAW_AAC1 = 255)] = "RAW_AAC1"),
                        (e[(e.DOLBY_AC3_SPDIF = 146)] = "DOLBY_AC3_SPDIF"),
                        (e[(e.DVM = 8192)] = "DVM"),
                        (e[(e.RAW_SPORT = 576)] = "RAW_SPORT"),
                        (e[(e.ESST_AC3 = 577)] = "ESST_AC3"),
                        (e[(e.DRM = 9)] = "DRM"),
                        (e[(e.DTS2 = 8193)] = "DTS2"),
                        (e[(e.MPEG = 80)] = "MPEG");
                })((a = t.WaveFormat || (t.WaveFormat = {})));
            class i {
                constructor(e) {
                    if (e.chunkSize < 16) throw Error("Invalid chunk size");
                    this.len = e.chunkSize;
                }
                get(e, t) {
                    return {
                        wFormatTag: e.readUInt16LE(t),
                        nChannels: e.readUInt16LE(t + 2),
                        nSamplesPerSec: e.readUInt32LE(t + 4),
                        nAvgBytesPerSec: e.readUInt32LE(t + 8),
                        nBlockAlign: e.readUInt16LE(t + 12),
                        wBitsPerSample: e.readUInt16LE(t + 14),
                    };
                }
            }
            t.Format = i;
            class r {
                constructor(e) {
                    if (e.chunkSize < 4) throw Error("Invalid fact chunk size.");
                    this.len = e.chunkSize;
                }
                get(e, t) {
                    return { dwSampleLength: e.readUInt32LE(t) };
                }
            }
            t.FactChunk = r;
        },
        32682: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.WaveParser = void 0);
            let i = a(35849),
                r = a(20036),
                n = a(11227),
                s = a(83211),
                o = a(29975),
                l = a(8928),
                c = a(83769),
                d = a(28049),
                u = a(87805),
                m = a(88053),
                p = (0, n.default)("music-metadata:parser:RIFF");
            class f extends u.BasicParser {
                async parse() {
                    let e = await this.tokenizer.readToken(s.Header);
                    if ((p(`pos=${this.tokenizer.position}, parse: chunkID=${e.chunkID}`), "RIFF" === e.chunkID))
                        return this.parseRiffChunk(e.chunkSize).catch((e) => {
                            if (!(e instanceof i.EndOfStreamError)) throw e;
                        });
                }
                async parseRiffChunk(e) {
                    let t = await this.tokenizer.readToken(d.FourCcToken);
                    if ((this.metadata.setFormat("container", t), "WAVE" === t)) return this.readWaveChunk(e - d.FourCcToken.len);
                    throw Error(`Unsupported RIFF format: RIFF/${t}`);
                }
                async readWaveChunk(e) {
                    for (; e >= s.Header.len;) {
                        let t = await this.tokenizer.readToken(s.Header);
                        switch (
                        ((e -= s.Header.len + t.chunkSize),
                            t.chunkSize > e && this.metadata.addWarning("Data chunk size exceeds file size"),
                            (this.header = t),
                            p(`pos=${this.tokenizer.position}, readChunk: chunkID=RIFF/WAVE/${t.chunkID}`),
                            t.chunkID)
                        ) {
                            case "LIST":
                                await this.parseListTag(t);
                                break;
                            case "fact":
                                this.metadata.setFormat("lossless", !1), (this.fact = await this.tokenizer.readToken(new o.FactChunk(t)));
                                break;
                            case "fmt ":
                                let a = await this.tokenizer.readToken(new o.Format(t)),
                                    n = o.WaveFormat[a.wFormatTag];
                                n || (p("WAVE/non-PCM format=" + a.wFormatTag), (n = "non-PCM (" + a.wFormatTag + ")")),
                                    this.metadata.setFormat("codec", n),
                                    this.metadata.setFormat("bitsPerSample", a.wBitsPerSample),
                                    this.metadata.setFormat("sampleRate", a.nSamplesPerSec),
                                    this.metadata.setFormat("numberOfChannels", a.nChannels),
                                    this.metadata.setFormat("bitrate", a.nBlockAlign * a.nSamplesPerSec * 8),
                                    (this.blockAlign = a.nBlockAlign);
                                break;
                            case "id3 ":
                            case "ID3 ":
                                let c = await this.tokenizer.readToken(new r.Uint8ArrayType(t.chunkSize)),
                                    d = i.fromBuffer(c);
                                await new l.ID3v2Parser().parse(this.metadata, d, this.options);
                                break;
                            case "data":
                                !1 !== this.metadata.format.lossless && this.metadata.setFormat("lossless", !0);
                                let u = t.chunkSize;
                                if (this.tokenizer.fileInfo.size) {
                                    let e = this.tokenizer.fileInfo.size - this.tokenizer.position;
                                    e < u && (this.metadata.addWarning("data chunk length exceeding file length"), (u = e));
                                }
                                let f = this.fact ? this.fact.dwSampleLength : 4294967295 === u ? void 0 : u / this.blockAlign;
                                f && (this.metadata.setFormat("numberOfSamples", f), this.metadata.setFormat("duration", f / this.metadata.format.sampleRate)),
                                    "ADPCM" === this.metadata.format.codec ? this.metadata.setFormat("bitrate", 352e3) : this.metadata.setFormat("bitrate", this.blockAlign * this.metadata.format.sampleRate * 8),
                                    await this.tokenizer.ignore(t.chunkSize);
                                break;
                            case "bext":
                                let g = await this.tokenizer.readToken(m.BroadcastAudioExtensionChunk);
                                Object.keys(g).forEach((e) => {
                                    this.metadata.addTag("exif", "bext." + e, g[e]);
                                });
                                let h = t.chunkSize - m.BroadcastAudioExtensionChunk.len;
                                await this.tokenizer.ignore(h);
                                break;
                            case "\0\0\0\0":
                                p(`Ignore padding chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`), this.metadata.addWarning("Ignore chunk: RIFF/" + t.chunkID), await this.tokenizer.ignore(t.chunkSize);
                                break;
                            default:
                                p(`Ignore chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`), this.metadata.addWarning("Ignore chunk: RIFF/" + t.chunkID), await this.tokenizer.ignore(t.chunkSize);
                        }
                        this.header.chunkSize % 2 == 1 && (p("Read odd padding byte"), await this.tokenizer.ignore(1));
                    }
                }
                async parseListTag(e) {
                    let t = await this.tokenizer.readToken(new r.StringType(4, "binary"));
                    return (p("pos=%s, parseListTag: chunkID=RIFF/WAVE/LIST/%s", this.tokenizer.position, t), "INFO" === t)
                        ? this.parseRiffInfoTags(e.chunkSize - 4)
                        : (this.metadata.addWarning("Ignore chunk: RIFF/WAVE/LIST/" + t), p("Ignoring chunkID=RIFF/WAVE/LIST/" + t), this.tokenizer.ignore(e.chunkSize - 4).then());
                }
                async parseRiffInfoTags(e) {
                    for (; e >= 8;) {
                        let t = await this.tokenizer.readToken(s.Header),
                            a = new s.ListInfoTagValue(t),
                            i = await this.tokenizer.readToken(a);
                        this.addTag(t.chunkID, c.stripNulls(i)), (e -= 8 + a.len);
                    }
                    if (0 !== e) throw Error("Illegal remaining size: " + e);
                }
                addTag(e, t) {
                    this.metadata.addTag("exif", e, t);
                }
            }
            t.WaveParser = f;
        },
        95870: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.WavPackParser = void 0);
            let r = a(20036),
                n = a(6742),
                s = a(28049),
                o = a(87805),
                l = a(12989),
                c = (0, a(11227).default)("music-metadata:parser:WavPack");
            class d extends o.BasicParser {
                async parse() {
                    return (this.audioDataSize = 0), await this.parseWavPackBlocks(), n.APEv2Parser.tryParseApeHeader(this.metadata, this.tokenizer, this.options);
                }
                async parseWavPackBlocks() {
                    do {
                        if ("wvpk" !== (await this.tokenizer.peekToken(s.FourCcToken))) break;
                        let e = await this.tokenizer.readToken(l.WavPack.BlockHeaderToken);
                        if ("wvpk" !== e.BlockID) throw Error("Invalid WavPack Block-ID");
                        c(`WavPack header blockIndex=${e.blockIndex}, len=${l.WavPack.BlockHeaderToken.len}`),
                            0 !== e.blockIndex ||
                            this.metadata.format.container ||
                            (this.metadata.setFormat("container", "WavPack"),
                                this.metadata.setFormat("lossless", !e.flags.isHybrid),
                                this.metadata.setFormat("bitsPerSample", e.flags.bitsPerSample),
                                e.flags.isDSD || (this.metadata.setFormat("sampleRate", e.flags.samplingRate), this.metadata.setFormat("duration", e.totalSamples / e.flags.samplingRate)),
                                this.metadata.setFormat("numberOfChannels", e.flags.isMono ? 1 : 2),
                                this.metadata.setFormat("numberOfSamples", e.totalSamples),
                                this.metadata.setFormat("codec", e.flags.isDSD ? "DSD" : "PCM"));
                        let t = e.blockSize - (l.WavPack.BlockHeaderToken.len - 8);
                        await (0 === e.blockIndex ? this.parseMetadataSubBlock(e, t) : this.tokenizer.ignore(t)), e.blockSamples > 0 && (this.audioDataSize += e.blockSize);
                    } while (!this.tokenizer.fileInfo.size || this.tokenizer.fileInfo.size - this.tokenizer.position >= l.WavPack.BlockHeaderToken.len);
                    this.metadata.setFormat("bitrate", (8 * this.audioDataSize) / this.metadata.format.duration);
                }
                async parseMetadataSubBlock(e, t) {
                    for (; t > l.WavPack.MetadataIdToken.len;) {
                        let a = await this.tokenizer.readToken(l.WavPack.MetadataIdToken),
                            n = await this.tokenizer.readNumber(a.largeBlock ? r.UINT24_LE : r.UINT8),
                            s = i.alloc(2 * n - (a.isOddSize ? 1 : 0));
                        switch ((await this.tokenizer.readBuffer(s), c(`Metadata Sub-Blocks functionId=0x${a.functionId.toString(16)}, id.largeBlock=${a.largeBlock},data-size=${s.length}`), a.functionId)) {
                            case 0:
                                break;
                            case 14:
                                c("ID_DSD_BLOCK");
                                let o = 1 << s.readUInt8(0),
                                    d = e.flags.samplingRate * o * 8;
                                if (!e.flags.isDSD) throw Error("Only expect DSD block if DSD-flag is set");
                                this.metadata.setFormat("sampleRate", d), this.metadata.setFormat("duration", e.totalSamples / d);
                                break;
                            case 36:
                                c("ID_ALT_TRAILER: trailer for non-wav files");
                                break;
                            case 38:
                                this.metadata.setFormat("audioMD5", s);
                                break;
                            case 47:
                                c(`ID_BLOCK_CHECKSUM: checksum=${s.toString("hex")}`);
                                break;
                            default:
                                c(`Ignore unsupported meta-sub-block-id functionId=0x${a.functionId.toString(16)}`);
                        }
                        (t -= l.WavPack.MetadataIdToken.len + (a.largeBlock ? r.UINT24_LE.len : r.UINT8.len) + 2 * n), c(`remainingLength=${t}`), a.isOddSize && this.tokenizer.ignore(1);
                    }
                    if (0 !== t) throw Error("metadata-sub-block should fit it remaining length");
                }
            }
            t.WavPackParser = d;
        },
        12989: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.WavPack = void 0);
            let i = a(20036),
                r = a(28049),
                n = [6e3, 8e3, 9600, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100, 48e3, 64e3, 88200, 96e3, 192e3, -1];
            class s {
                static isBitSet(e, t) {
                    return 1 === s.getBitAllignedNumber(e, t, 1);
                }
                static getBitAllignedNumber(e, t, a) {
                    return (e >>> t) & (4294967295 >>> (32 - a));
                }
            }
            (s.BlockHeaderToken = {
                len: 32,
                get: (e, t) => {
                    let a = i.UINT32_LE.get(e, t + 24),
                        o = {
                            BlockID: r.FourCcToken.get(e, t),
                            blockSize: i.UINT32_LE.get(e, t + 4),
                            version: i.UINT16_LE.get(e, t + 8),
                            totalSamples: i.UINT32_LE.get(e, t + 12),
                            blockIndex: i.UINT32_LE.get(e, t + 16),
                            blockSamples: i.UINT32_LE.get(e, t + 20),
                            flags: {
                                bitsPerSample: (1 + s.getBitAllignedNumber(a, 0, 2)) * 8,
                                isMono: s.isBitSet(a, 2),
                                isHybrid: s.isBitSet(a, 3),
                                isJointStereo: s.isBitSet(a, 4),
                                crossChannel: s.isBitSet(a, 5),
                                hybridNoiseShaping: s.isBitSet(a, 6),
                                floatingPoint: s.isBitSet(a, 7),
                                samplingRate: n[s.getBitAllignedNumber(a, 23, 4)],
                                isDSD: s.isBitSet(a, 31),
                            },
                            crc: new i.Uint8ArrayType(4).get(e, t + 28),
                        };
                    return o.flags.isDSD && (o.totalSamples *= 8), o;
                },
            }),
                (s.MetadataIdToken = { len: 1, get: (e, t) => ({ functionId: s.getBitAllignedNumber(e[t], 0, 6), isOptional: s.isBitSet(e[t], 5), isOddSize: s.isBitSet(e[t], 6), largeBlock: s.isBitSet(e[t], 7) }) }),
                (t.WavPack = s);
        },
        72933: function (module, __unused_webpack_exports, __webpack_require__) {
            "use strict";
            var Buffer = __webpack_require__(48764).Buffer;
            let Token = __webpack_require__(20036),
                strtok3 = __webpack_require__(35849),
                { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } = __webpack_require__(76127),
                supported = __webpack_require__(78189),
                minimumBytes = 4100;
            async function fromStream(e) {
                let t = await strtok3.fromStream(e);
                try {
                    return await fromTokenizer(t);
                } finally {
                    await t.close();
                }
            }
            async function fromBuffer(e) {
                if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
                let t = e instanceof Buffer ? e : Buffer.from(e);
                if (t && t.length > 1) return fromTokenizer(strtok3.fromBuffer(t));
            }
            function _check(e, t, a) {
                for (let [i, r] of ((a = { offset: 0, ...a }), t.entries()))
                    if (a.mask) {
                        if (r !== (a.mask[i] & e[i + a.offset])) return !1;
                    } else if (r !== e[i + a.offset]) return !1;
                return !0;
            }
            async function fromTokenizer(e) {
                try {
                    return _fromTokenizer(e);
                } catch (e) {
                    if (!(e instanceof strtok3.EndOfStreamError)) throw e;
                }
            }
            async function _fromTokenizer(e) {
                let t = Buffer.alloc(minimumBytes),
                    a = 12,
                    i = (e, a) => _check(t, e, a),
                    r = (e, t) => i(stringToBytes(e), t);
                if ((e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER), await e.peekBuffer(t, { length: a, mayBeLess: !0 }), i([66, 77]))) return { ext: "bmp", mime: "image/bmp" };
                if (i([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
                if (i([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
                if (i([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
                if (i([37, 33]))
                    return (await e.peekBuffer(t, { length: 24, mayBeLess: !0 }), r("PS-Adobe-", { offset: 2 }) && r(" EPSF-", { offset: 14 })) ? { ext: "eps", mime: "application/eps" } : { ext: "ps", mime: "application/postscript" };
                if (i([31, 160]) || i([31, 157])) return { ext: "Z", mime: "application/x-compress" };
                if (i([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
                if (i([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
                if (i([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
                if (i([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
                if (r("ID3")) {
                    await e.ignore(6);
                    let t = await e.readToken(uint32SyncSafeToken);
                    return e.position + t > e.fileInfo.size ? { ext: "mp3", mime: "audio/mpeg" } : (await e.ignore(t), fromTokenizer(e));
                }
                if (r("MP+")) return { ext: "mpc", mime: "audio/x-musepack" };
                if ((67 === t[0] || 70 === t[0]) && i([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
                if (i([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
                if (r("FLIF")) return { ext: "flif", mime: "image/flif" };
                if (r("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
                if (r("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" };
                if (r("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" };
                if (r("FORM")) return { ext: "aif", mime: "audio/aiff" };
                if (r("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" };
                if (i([80, 75, 3, 4])) {
                    try {
                        for (; e.position + 30 < e.fileInfo.size;) {
                            await e.readBuffer(t, { length: 30 });
                            let a = { compressedSize: t.readUInt32LE(18), uncompressedSize: t.readUInt32LE(22), filenameLength: t.readUInt16LE(26), extraFieldLength: t.readUInt16LE(28) };
                            if (((a.filename = await e.readToken(new Token.StringType(a.filenameLength, "utf-8"))), await e.ignore(a.extraFieldLength), "META-INF/mozilla.rsa" === a.filename))
                                return { ext: "xpi", mime: "application/x-xpinstall" };
                            if (a.filename.endsWith(".rels") || a.filename.endsWith(".xml"))
                                switch (a.filename.split("/")[0]) {
                                    case "_rels":
                                        break;
                                    case "word":
                                        return { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
                                    case "ppt":
                                        return { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" };
                                    case "xl":
                                        return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
                                }
                            if (a.filename.startsWith("xl/")) return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
                            if (a.filename.startsWith("3D/") && a.filename.endsWith(".model")) return { ext: "3mf", mime: "model/3mf" };
                            if ("mimetype" === a.filename && a.compressedSize === a.uncompressedSize)
                                switch (await e.readToken(new Token.StringType(a.compressedSize, "utf-8"))) {
                                    case "application/epub+zip":
                                        return { ext: "epub", mime: "application/epub+zip" };
                                    case "application/vnd.oasis.opendocument.text":
                                        return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
                                    case "application/vnd.oasis.opendocument.spreadsheet":
                                        return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
                                    case "application/vnd.oasis.opendocument.presentation":
                                        return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
                                }
                            if (0 === a.compressedSize) {
                                let a = -1;
                                for (; a < 0 && e.position < e.fileInfo.size;) await e.peekBuffer(t, { mayBeLess: !0 }), (a = t.indexOf("504B0304", 0, "hex")), await e.ignore(a >= 0 ? a : t.length);
                            } else await e.ignore(a.compressedSize);
                        }
                    } catch (e) {
                        if (!(e instanceof strtok3.EndOfStreamError)) throw e;
                    }
                    return { ext: "zip", mime: "application/zip" };
                }
                if (r("OggS")) {
                    await e.ignore(28);
                    let t = Buffer.alloc(8);
                    return (await e.readBuffer(t), _check(t, [79, 112, 117, 115, 72, 101, 97, 100]))
                        ? { ext: "opus", mime: "audio/opus" }
                        : _check(t, [128, 116, 104, 101, 111, 114, 97])
                            ? { ext: "ogv", mime: "video/ogg" }
                            : _check(t, [1, 118, 105, 100, 101, 111, 0])
                                ? { ext: "ogm", mime: "video/ogg" }
                                : _check(t, [127, 70, 76, 65, 67])
                                    ? { ext: "oga", mime: "audio/ogg" }
                                    : _check(t, [83, 112, 101, 101, 120, 32, 32])
                                        ? { ext: "spx", mime: "audio/ogg" }
                                        : _check(t, [1, 118, 111, 114, 98, 105, 115])
                                            ? { ext: "ogg", mime: "audio/ogg" }
                                            : { ext: "ogx", mime: "application/ogg" };
                }
                if (i([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return { ext: "zip", mime: "application/zip" };
                if (r("ftyp", { offset: 4 }) && (96 & t[8]) != 0) {
                    let e = t.toString("binary", 8, 12).replace("\0", " ").trim();
                    switch (e) {
                        case "avif":
                            return { ext: "avif", mime: "image/avif" };
                        case "mif1":
                            return { ext: "heic", mime: "image/heif" };
                        case "msf1":
                            return { ext: "heic", mime: "image/heif-sequence" };
                        case "heic":
                        case "heix":
                            return { ext: "heic", mime: "image/heic" };
                        case "hevc":
                        case "hevx":
                            return { ext: "heic", mime: "image/heic-sequence" };
                        case "qt":
                            return { ext: "mov", mime: "video/quicktime" };
                        case "M4V":
                        case "M4VH":
                        case "M4VP":
                            return { ext: "m4v", mime: "video/x-m4v" };
                        case "M4P":
                            return { ext: "m4p", mime: "video/mp4" };
                        case "M4B":
                            return { ext: "m4b", mime: "audio/mp4" };
                        case "M4A":
                            return { ext: "m4a", mime: "audio/x-m4a" };
                        case "F4V":
                            return { ext: "f4v", mime: "video/mp4" };
                        case "F4P":
                            return { ext: "f4p", mime: "video/mp4" };
                        case "F4A":
                            return { ext: "f4a", mime: "audio/mp4" };
                        case "F4B":
                            return { ext: "f4b", mime: "audio/mp4" };
                        case "crx":
                            return { ext: "cr3", mime: "image/x-canon-cr3" };
                        default:
                            if (e.startsWith("3g")) {
                                if (e.startsWith("3g2")) return { ext: "3g2", mime: "video/3gpp2" };
                                return { ext: "3gp", mime: "video/3gpp" };
                            }
                            return { ext: "mp4", mime: "video/mp4" };
                    }
                }
                if (r("MThd")) return { ext: "mid", mime: "audio/midi" };
                if (r("wOFF") && (i([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
                if (r("wOF2") && (i([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
                if (i([212, 195, 178, 161]) || i([161, 178, 195, 212])) return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
                if (r("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
                if (r("LZIP")) return { ext: "lz", mime: "application/x-lzip" };
                if (r("fLaC")) return { ext: "flac", mime: "audio/x-flac" };
                if (i([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
                if (r("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
                if (r("%PDF")) {
                    await e.ignore(1350);
                    let t = 10485760,
                        a = Buffer.alloc(Math.min(t, e.fileInfo.size));
                    return (await e.readBuffer(a, { mayBeLess: !0 }), a.includes(Buffer.from("AIPrivateData"))) ? { ext: "ai", mime: "application/postscript" } : { ext: "pdf", mime: "application/pdf" };
                }
                if (i([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
                if (i([73, 73, 42, 0]))
                    return r("CR", { offset: 8 })
                        ? { ext: "cr2", mime: "image/x-canon-cr2" }
                        : i([28, 0, 254, 0], { offset: 8 }) || i([31, 0, 11, 0], { offset: 8 })
                            ? { ext: "nef", mime: "image/x-nikon-nef" }
                            : i([8, 0, 0, 0], { offset: 4 }) && (i([45, 0, 254, 0], { offset: 8 }) || i([39, 0, 254, 0], { offset: 8 }))
                                ? { ext: "dng", mime: "image/x-adobe-dng" }
                                : ((t = Buffer.alloc(24)), await e.peekBuffer(t), (i([16, 251, 134, 1], { offset: 4 }) || i([8, 0, 0, 0], { offset: 4 })) && i([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 }))
                                    ? { ext: "arw", mime: "image/x-sony-arw" }
                                    : { ext: "tif", mime: "image/tiff" };
                if (i([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
                if (r("MAC ")) return { ext: "ape", mime: "audio/ape" };
                if (i([26, 69, 223, 163])) {
                    async function n() {
                        let t = await e.peekNumber(Token.UINT8),
                            a = 128,
                            i = 0;
                        for (; (t & a) == 0 && 0 !== a;) ++i, (a >>= 1);
                        let r = Buffer.alloc(i + 1);
                        return await e.readBuffer(r), r;
                    }
                    async function s() {
                        let e = await n(),
                            t = await n();
                        t[0] ^= 128 >> (t.length - 1);
                        let a = Math.min(6, t.length);
                        return { id: e.readUIntBE(0, e.length), len: t.readUIntBE(t.length - a, a) };
                    }
                    async function o(t, a) {
                        for (; a > 0;) {
                            let t = await s();
                            if (17026 === t.id) return e.readToken(new Token.StringType(t.len, "utf-8"));
                            await e.ignore(t.len), --a;
                        }
                    }
                    let t = await s();
                    switch (await o(1, t.len)) {
                        case "webm":
                            return { ext: "webm", mime: "video/webm" };
                        case "matroska":
                            return { ext: "mkv", mime: "video/x-matroska" };
                        default:
                            return;
                    }
                }
                if (i([82, 73, 70, 70])) {
                    if (i([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
                    if (i([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
                    if (i([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
                }
                if (r("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" };
                if (i([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
                if (r("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" };
                if (r("MSCF") || r("ISc(")) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
                if (i([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
                if (i([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" };
                if (i([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" };
                if (i([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
                if (r("#!AMR")) return { ext: "amr", mime: "audio/amr" };
                if (r("{\\rtf")) return { ext: "rtf", mime: "application/rtf" };
                if (i([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
                if (r("IMPM")) return { ext: "it", mime: "audio/x-it" };
                if (
                    r("-lh0-", { offset: 2 }) ||
                    r("-lh1-", { offset: 2 }) ||
                    r("-lh2-", { offset: 2 }) ||
                    r("-lh3-", { offset: 2 }) ||
                    r("-lh4-", { offset: 2 }) ||
                    r("-lh5-", { offset: 2 }) ||
                    r("-lh6-", { offset: 2 }) ||
                    r("-lh7-", { offset: 2 }) ||
                    r("-lzs-", { offset: 2 }) ||
                    r("-lz4-", { offset: 2 }) ||
                    r("-lz5-", { offset: 2 }) ||
                    r("-lhd-", { offset: 2 })
                )
                    return { ext: "lzh", mime: "application/x-lzh-compressed" };
                if (i([0, 0, 1, 186])) {
                    if (i([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" };
                    if (i([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" };
                }
                if (r("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
                if (i([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
                if (r("<?xml ")) return { ext: "xml", mime: "application/xml" };
                if (i([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
                if (i([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
                if (r("solid ")) return { ext: "stl", mime: "model/stl" };
                if (r("BLENDER")) return { ext: "blend", mime: "application/x-blender" };
                if (r("!<arch>")) return (await e.ignore(8), "debian-binary" === (await e.readToken(new Token.StringType(13, "ascii")))) ? { ext: "deb", mime: "application/x-deb" } : { ext: "ar", mime: "application/x-unix-archive" };
                if (i([137, 80, 78, 71, 13, 10, 26, 10])) {
                    async function l() {
                        return { length: await e.readToken(Token.INT32_BE), type: await e.readToken(new Token.StringType(4, "binary")) };
                    }
                    await e.ignore(8);
                    do {
                        let t = await l();
                        if (t.length < 0) return;
                        switch (t.type) {
                            case "IDAT":
                                return { ext: "png", mime: "image/png" };
                            case "acTL":
                                return { ext: "apng", mime: "image/apng" };
                            default:
                                await e.ignore(t.length + 4);
                        }
                    } while (e.position + 8 < e.fileInfo.size);
                    return { ext: "png", mime: "image/png" };
                }
                if (i([65, 82, 82, 79, 87, 49, 0, 0])) return { ext: "arrow", mime: "application/x-apache-arrow" };
                if (i([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" };
                if (i([102, 114, 101, 101], { offset: 4 }) || i([109, 100, 97, 116], { offset: 4 }) || i([109, 111, 111, 118], { offset: 4 }) || i([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
                if (i([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" };
                if (r("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" };
                if (i([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) return { ext: "rw2", mime: "image/x-panasonic-rw2" };
                if (i([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
                    async function c() {
                        let t = Buffer.alloc(16);
                        return await e.readBuffer(t), { id: t, size: Number(await e.readToken(Token.UINT64_LE)) };
                    }
                    for (await e.ignore(30); e.position + 24 < e.fileInfo.size;) {
                        let t = await c(),
                            a = t.size - 24;
                        if (_check(t.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
                            let t = Buffer.alloc(16);
                            if (((a -= await e.readBuffer(t)), _check(t, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))) return { ext: "asf", mime: "audio/x-ms-asf" };
                            if (_check(t, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "video/x-ms-asf" };
                            break;
                        }
                        await e.ignore(a);
                    }
                    return { ext: "asf", mime: "application/vnd.ms-asf" };
                }
                if (i([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" };
                if ((i([126, 16, 4]) || i([126, 24, 4])) && i([48, 77, 73, 69], { offset: 4 })) return { ext: "mie", mime: "application/x-mie" };
                if (i([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) return { ext: "shp", mime: "application/x-esri-shape" };
                if (i([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
                    switch ((await e.ignore(20), await e.readToken(new Token.StringType(4, "ascii")))) {
                        case "jp2 ":
                            return { ext: "jp2", mime: "image/jp2" };
                        case "jpx ":
                            return { ext: "jpx", mime: "image/jpx" };
                        case "jpm ":
                            return { ext: "jpm", mime: "image/jpm" };
                        case "mjp2":
                            return { ext: "mj2", mime: "image/mj2" };
                        default:
                            return;
                    }
                if (i([255, 10]) || i([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) return { ext: "jxl", mime: "image/jxl" };
                if (i([0, 0, 1, 186]) || i([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
                if (i([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
                if (i([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
                if (i([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
                if (i([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" };
                if ((await e.peekBuffer(t, { length: Math.min(256, e.fileInfo.size), mayBeLess: !0 }), r("BEGIN:"))) {
                    if (r("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" };
                    if (r("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" };
                }
                if (r("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" };
                if (r("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" };
                if (r("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" };
                if (i([4, 0, 0, 0]) && t.length >= 16) {
                    let e = t.readUInt32LE(12);
                    if (e > 12 && t.length >= e + 16)
                        try {
                            let a = t.slice(16, e + 16).toString();
                            if (JSON.parse(a).files) return { ext: "asar", mime: "application/x-asar" };
                        } catch (e) { }
                }
                if (i([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
                if (r("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" };
                if (i([71], { offset: 4 }) && (i([71], { offset: 192 }) || i([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
                if (i([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
                if (i([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" };
                if (i([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) return { ext: "lnk", mime: "application/x.ms.shortcut" };
                if (i([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) return { ext: "alias", mime: "application/x.apple.alias" };
                if (i([76, 80], { offset: 34 }) && (i([0, 0, 1], { offset: 8 }) || i([1, 0, 2], { offset: 8 }) || i([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
                if (i([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) return { ext: "indd", mime: "application/x-indesign" };
                if ((await e.peekBuffer(t, { length: Math.min(512, e.fileInfo.size), mayBeLess: !0 }), tarHeaderChecksumMatches(t))) return { ext: "tar", mime: "application/x-tar" };
                if (i([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0])) return { ext: "skp", mime: "application/vnd.sketchup.skp" };
                if (r("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" };
                if (t.length >= 2 && i([255, 224], { offset: 0, mask: [255, 224] })) {
                    if (i([16], { offset: 1, mask: [22] })) return i([8], { offset: 1, mask: [8] }), { ext: "aac", mime: "audio/aac" };
                    if (i([2], { offset: 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" };
                    if (i([4], { offset: 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" };
                    if (i([6], { offset: 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" };
                }
            }
            let stream = (readableStream) =>
                new Promise((resolve, reject) => {
                    let stream = eval("require")("stream");
                    readableStream.on("error", reject),
                        readableStream.once("readable", async () => {
                            let e;
                            let t = new stream.PassThrough();
                            e = stream.pipeline ? stream.pipeline(readableStream, t, () => { }) : readableStream.pipe(t);
                            let a = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
                            try {
                                let e = await fromBuffer(a);
                                t.fileType = e;
                            } catch (e) {
                                reject(e);
                            }
                            resolve(e);
                        });
                }),
                fileType = { fromStream, fromTokenizer, fromBuffer, stream };
            Object.defineProperty(fileType, "extensions", { get: () => new Set(supported.extensions) }), Object.defineProperty(fileType, "mimeTypes", { get: () => new Set(supported.mimeTypes) }), (module.exports = fileType);
        },
        78189: function (e) {
            "use strict";
            e.exports = {
                extensions: [
                    "jpg",
                    "png",
                    "apng",
                    "gif",
                    "webp",
                    "flif",
                    "xcf",
                    "cr2",
                    "cr3",
                    "orf",
                    "arw",
                    "dng",
                    "nef",
                    "rw2",
                    "raf",
                    "tif",
                    "bmp",
                    "icns",
                    "jxr",
                    "psd",
                    "indd",
                    "zip",
                    "tar",
                    "rar",
                    "gz",
                    "bz2",
                    "7z",
                    "dmg",
                    "mp4",
                    "mid",
                    "mkv",
                    "webm",
                    "mov",
                    "avi",
                    "mpg",
                    "mp2",
                    "mp3",
                    "m4a",
                    "oga",
                    "ogg",
                    "ogv",
                    "opus",
                    "flac",
                    "wav",
                    "spx",
                    "amr",
                    "pdf",
                    "epub",
                    "exe",
                    "swf",
                    "rtf",
                    "wasm",
                    "woff",
                    "woff2",
                    "eot",
                    "ttf",
                    "otf",
                    "ico",
                    "flv",
                    "ps",
                    "xz",
                    "sqlite",
                    "nes",
                    "crx",
                    "xpi",
                    "cab",
                    "deb",
                    "ar",
                    "rpm",
                    "Z",
                    "lz",
                    "cfb",
                    "mxf",
                    "mts",
                    "blend",
                    "bpg",
                    "docx",
                    "pptx",
                    "xlsx",
                    "3gp",
                    "3g2",
                    "jp2",
                    "jpm",
                    "jpx",
                    "mj2",
                    "aif",
                    "qcp",
                    "odt",
                    "ods",
                    "odp",
                    "xml",
                    "mobi",
                    "heic",
                    "cur",
                    "ktx",
                    "ape",
                    "wv",
                    "dcm",
                    "ics",
                    "glb",
                    "pcap",
                    "dsf",
                    "lnk",
                    "alias",
                    "voc",
                    "ac3",
                    "m4v",
                    "m4p",
                    "m4b",
                    "f4v",
                    "f4p",
                    "f4b",
                    "f4a",
                    "mie",
                    "asf",
                    "ogm",
                    "ogx",
                    "mpc",
                    "arrow",
                    "shp",
                    "aac",
                    "mp1",
                    "it",
                    "s3m",
                    "xm",
                    "ai",
                    "skp",
                    "avif",
                    "eps",
                    "lzh",
                    "pgp",
                    "asar",
                    "stl",
                    "chm",
                    "3mf",
                    "zst",
                    "jxl",
                    "vcf",
                ],
                mimeTypes: [
                    "image/jpeg",
                    "image/png",
                    "image/gif",
                    "image/webp",
                    "image/flif",
                    "image/x-xcf",
                    "image/x-canon-cr2",
                    "image/x-canon-cr3",
                    "image/tiff",
                    "image/bmp",
                    "image/vnd.ms-photo",
                    "image/vnd.adobe.photoshop",
                    "application/x-indesign",
                    "application/epub+zip",
                    "application/x-xpinstall",
                    "application/vnd.oasis.opendocument.text",
                    "application/vnd.oasis.opendocument.spreadsheet",
                    "application/vnd.oasis.opendocument.presentation",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    "application/zip",
                    "application/x-tar",
                    "application/x-rar-compressed",
                    "application/gzip",
                    "application/x-bzip2",
                    "application/x-7z-compressed",
                    "application/x-apple-diskimage",
                    "application/x-apache-arrow",
                    "video/mp4",
                    "audio/midi",
                    "video/x-matroska",
                    "video/webm",
                    "video/quicktime",
                    "video/vnd.avi",
                    "audio/vnd.wave",
                    "audio/qcelp",
                    "audio/x-ms-asf",
                    "video/x-ms-asf",
                    "application/vnd.ms-asf",
                    "video/mpeg",
                    "video/3gpp",
                    "audio/mpeg",
                    "audio/mp4",
                    "audio/opus",
                    "video/ogg",
                    "audio/ogg",
                    "application/ogg",
                    "audio/x-flac",
                    "audio/ape",
                    "audio/wavpack",
                    "audio/amr",
                    "application/pdf",
                    "application/x-msdownload",
                    "application/x-shockwave-flash",
                    "application/rtf",
                    "application/wasm",
                    "font/woff",
                    "font/woff2",
                    "application/vnd.ms-fontobject",
                    "font/ttf",
                    "font/otf",
                    "image/x-icon",
                    "video/x-flv",
                    "application/postscript",
                    "application/eps",
                    "application/x-xz",
                    "application/x-sqlite3",
                    "application/x-nintendo-nes-rom",
                    "application/x-google-chrome-extension",
                    "application/vnd.ms-cab-compressed",
                    "application/x-deb",
                    "application/x-unix-archive",
                    "application/x-rpm",
                    "application/x-compress",
                    "application/x-lzip",
                    "application/x-cfb",
                    "application/x-mie",
                    "application/mxf",
                    "video/mp2t",
                    "application/x-blender",
                    "image/bpg",
                    "image/jp2",
                    "image/jpx",
                    "image/jpm",
                    "image/mj2",
                    "audio/aiff",
                    "application/xml",
                    "application/x-mobipocket-ebook",
                    "image/heif",
                    "image/heif-sequence",
                    "image/heic",
                    "image/heic-sequence",
                    "image/icns",
                    "image/ktx",
                    "application/dicom",
                    "audio/x-musepack",
                    "text/calendar",
                    "text/vcard",
                    "model/gltf-binary",
                    "application/vnd.tcpdump.pcap",
                    "audio/x-dsf",
                    "application/x.ms.shortcut",
                    "application/x.apple.alias",
                    "audio/x-voc",
                    "audio/vnd.dolby.dd-raw",
                    "audio/x-m4a",
                    "image/apng",
                    "image/x-olympus-orf",
                    "image/x-sony-arw",
                    "image/x-adobe-dng",
                    "image/x-nikon-nef",
                    "image/x-panasonic-rw2",
                    "image/x-fujifilm-raf",
                    "video/x-m4v",
                    "video/3gpp2",
                    "application/x-esri-shape",
                    "audio/aac",
                    "audio/x-it",
                    "audio/x-s3m",
                    "audio/x-xm",
                    "video/MP1S",
                    "video/MP2P",
                    "application/vnd.sketchup.skp",
                    "image/avif",
                    "application/x-lzh-compressed",
                    "application/pgp-encrypted",
                    "application/x-asar",
                    "model/stl",
                    "application/vnd.ms-htmlhelp",
                    "model/3mf",
                    "image/jxl",
                    "application/zstd",
                ],
            };
        },
        76127: function (e, t) {
            "use strict";
            (t.stringToBytes = (e) => [...e].map((e) => e.charCodeAt(0))),
                (t.tarHeaderChecksumMatches = (e, t = 0) => {
                    let a = parseInt(e.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
                    if (isNaN(a)) return !1;
                    let i = 256;
                    for (let a = t; a < t + 148; a++) i += e[a];
                    for (let a = t + 156; a < t + 512; a++) i += e[a];
                    return a === i;
                }),
                (t.uint32SyncSafeToken = { get: (e, t) => (127 & e[t + 3]) | (e[t + 2] << 7) | (e[t + 1] << 14) | (e[t] << 21), len: 4 });
        },
        20036: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.AnsiStringType = t.StringType = t.BufferType = t.Uint8ArrayType = t.IgnoreType = t.Float80_LE = t.Float80_BE = t.Float64_LE = t.Float64_BE = t.Float32_LE = t.Float32_BE = t.Float16_LE = t.Float16_BE = t.INT64_BE = t.UINT64_BE = t.INT64_LE = t.UINT64_LE = t.INT32_LE = t.INT32_BE = t.INT24_BE = t.INT24_LE = t.INT16_LE = t.INT16_BE = t.INT8 = t.UINT32_BE = t.UINT32_LE = t.UINT24_BE = t.UINT24_LE = t.UINT16_BE = t.UINT16_LE = t.UINT8 = void 0);
            let r = a(80645);
            function n(e) {
                return new DataView(e.buffer, e.byteOffset);
            }
            (t.UINT8 = { len: 1, get: (e, t) => n(e).getUint8(t), put: (e, t, a) => (n(e).setUint8(t, a), t + 1) }),
                (t.UINT16_LE = { len: 2, get: (e, t) => n(e).getUint16(t, !0), put: (e, t, a) => (n(e).setUint16(t, a, !0), t + 2) }),
                (t.UINT16_BE = { len: 2, get: (e, t) => n(e).getUint16(t), put: (e, t, a) => (n(e).setUint16(t, a), t + 2) }),
                (t.UINT24_LE = {
                    len: 3,
                    get(e, t) {
                        let a = n(e);
                        return a.getUint8(t) + (a.getUint16(t + 1, !0) << 8);
                    },
                    put(e, t, a) {
                        let i = n(e);
                        return i.setUint8(t, 255 & a), i.setUint16(t + 1, a >> 8, !0), t + 3;
                    },
                }),
                (t.UINT24_BE = {
                    len: 3,
                    get(e, t) {
                        let a = n(e);
                        return (a.getUint16(t) << 8) + a.getUint8(t + 2);
                    },
                    put(e, t, a) {
                        let i = n(e);
                        return i.setUint16(t, a >> 8), i.setUint8(t + 2, 255 & a), t + 3;
                    },
                }),
                (t.UINT32_LE = { len: 4, get: (e, t) => n(e).getUint32(t, !0), put: (e, t, a) => (n(e).setUint32(t, a, !0), t + 4) }),
                (t.UINT32_BE = { len: 4, get: (e, t) => n(e).getUint32(t), put: (e, t, a) => (n(e).setUint32(t, a), t + 4) }),
                (t.INT8 = { len: 1, get: (e, t) => n(e).getInt8(t), put: (e, t, a) => (n(e).setInt8(t, a), t + 1) }),
                (t.INT16_BE = { len: 2, get: (e, t) => n(e).getInt16(t), put: (e, t, a) => (n(e).setInt16(t, a), t + 2) }),
                (t.INT16_LE = { len: 2, get: (e, t) => n(e).getInt16(t, !0), put: (e, t, a) => (n(e).setInt16(t, a, !0), t + 2) }),
                (t.INT24_LE = {
                    len: 3,
                    get(e, a) {
                        let i = t.UINT24_LE.get(e, a);
                        return i > 8388607 ? i - 16777216 : i;
                    },
                    put(e, t, a) {
                        let i = n(e);
                        return i.setUint8(t, 255 & a), i.setUint16(t + 1, a >> 8, !0), t + 3;
                    },
                }),
                (t.INT24_BE = {
                    len: 3,
                    get(e, a) {
                        let i = t.UINT24_BE.get(e, a);
                        return i > 8388607 ? i - 16777216 : i;
                    },
                    put(e, t, a) {
                        let i = n(e);
                        return i.setUint16(t, a >> 8), i.setUint8(t + 2, 255 & a), t + 3;
                    },
                }),
                (t.INT32_BE = { len: 4, get: (e, t) => n(e).getInt32(t), put: (e, t, a) => (n(e).setInt32(t, a), t + 4) }),
                (t.INT32_LE = { len: 4, get: (e, t) => n(e).getInt32(t, !0), put: (e, t, a) => (n(e).setInt32(t, a, !0), t + 4) }),
                (t.UINT64_LE = { len: 8, get: (e, t) => n(e).getBigUint64(t, !0), put: (e, t, a) => (n(e).setBigUint64(t, a, !0), t + 8) }),
                (t.INT64_LE = { len: 8, get: (e, t) => n(e).getBigInt64(t, !0), put: (e, t, a) => (n(e).setBigInt64(t, a, !0), t + 8) }),
                (t.UINT64_BE = { len: 8, get: (e, t) => n(e).getBigUint64(t), put: (e, t, a) => (n(e).setBigUint64(t, a), t + 8) }),
                (t.INT64_BE = { len: 8, get: (e, t) => n(e).getBigInt64(t), put: (e, t, a) => (n(e).setBigInt64(t, a), t + 8) }),
                (t.Float16_BE = {
                    len: 2,
                    get(e, t) {
                        return r.read(e, t, !1, 10, this.len);
                    },
                    put(e, t, a) {
                        return r.write(e, a, t, !1, 10, this.len), t + this.len;
                    },
                }),
                (t.Float16_LE = {
                    len: 2,
                    get(e, t) {
                        return r.read(e, t, !0, 10, this.len);
                    },
                    put(e, t, a) {
                        return r.write(e, a, t, !0, 10, this.len), t + this.len;
                    },
                }),
                (t.Float32_BE = { len: 4, get: (e, t) => n(e).getFloat32(t), put: (e, t, a) => (n(e).setFloat32(t, a), t + 4) }),
                (t.Float32_LE = { len: 4, get: (e, t) => n(e).getFloat32(t, !0), put: (e, t, a) => (n(e).setFloat32(t, a, !0), t + 4) }),
                (t.Float64_BE = { len: 8, get: (e, t) => n(e).getFloat64(t), put: (e, t, a) => (n(e).setFloat64(t, a), t + 8) }),
                (t.Float64_LE = { len: 8, get: (e, t) => n(e).getFloat64(t, !0), put: (e, t, a) => (n(e).setFloat64(t, a, !0), t + 8) }),
                (t.Float80_BE = {
                    len: 10,
                    get(e, t) {
                        return r.read(e, t, !1, 63, this.len);
                    },
                    put(e, t, a) {
                        return r.write(e, a, t, !1, 63, this.len), t + this.len;
                    },
                }),
                (t.Float80_LE = {
                    len: 10,
                    get(e, t) {
                        return r.read(e, t, !0, 63, this.len);
                    },
                    put(e, t, a) {
                        return r.write(e, a, t, !0, 63, this.len), t + this.len;
                    },
                });
            class s {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) { }
            }
            t.IgnoreType = s;
            class o {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return e.subarray(t, t + this.len);
                }
            }
            t.Uint8ArrayType = o;
            class l {
                constructor(e) {
                    this.len = e;
                }
                get(e, t) {
                    return i.from(e.subarray(t, t + this.len));
                }
            }
            t.BufferType = l;
            class c {
                constructor(e, t) {
                    (this.len = e), (this.encoding = t);
                }
                get(e, t) {
                    return i.from(e).toString(this.encoding, t, t + this.len);
                }
            }
            t.StringType = c;
            class d {
                constructor(e) {
                    this.len = e;
                }
                static decode(e, t, a) {
                    let i = "";
                    for (let r = t; r < a; ++r) i += d.codePointToString(d.singleByteDecoder(e[r]));
                    return i;
                }
                static inRange(e, t, a) {
                    return t <= e && e <= a;
                }
                static codePointToString(e) {
                    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (1023 & e) + 56320);
                }
                static singleByteDecoder(e) {
                    if (d.inRange(e, 0, 127)) return e;
                    let t = d.windows1252[e - 128];
                    if (null === t) throw Error("invaliding encoding");
                    return t;
                }
                get(e, t = 0) {
                    return d.decode(e, t, t + this.len);
                }
            }
            (t.AnsiStringType = d),
                (d.windows1252 = [
                    8364,
                    129,
                    8218,
                    402,
                    8222,
                    8230,
                    8224,
                    8225,
                    710,
                    8240,
                    352,
                    8249,
                    338,
                    141,
                    381,
                    143,
                    144,
                    8216,
                    8217,
                    8220,
                    8221,
                    8226,
                    8211,
                    8212,
                    732,
                    8482,
                    353,
                    8250,
                    339,
                    157,
                    382,
                    376,
                    160,
                    161,
                    162,
                    163,
                    164,
                    165,
                    166,
                    167,
                    168,
                    169,
                    170,
                    171,
                    172,
                    173,
                    174,
                    175,
                    176,
                    177,
                    178,
                    179,
                    180,
                    181,
                    182,
                    183,
                    184,
                    185,
                    186,
                    187,
                    188,
                    189,
                    190,
                    191,
                    192,
                    193,
                    194,
                    195,
                    196,
                    197,
                    198,
                    199,
                    200,
                    201,
                    202,
                    203,
                    204,
                    205,
                    206,
                    207,
                    208,
                    209,
                    210,
                    211,
                    212,
                    213,
                    214,
                    215,
                    216,
                    217,
                    218,
                    219,
                    220,
                    221,
                    222,
                    223,
                    224,
                    225,
                    226,
                    227,
                    228,
                    229,
                    230,
                    231,
                    232,
                    233,
                    234,
                    235,
                    236,
                    237,
                    238,
                    239,
                    240,
                    241,
                    242,
                    243,
                    244,
                    245,
                    246,
                    247,
                    248,
                    249,
                    250,
                    251,
                    252,
                    253,
                    254,
                    255,
                ]);
        },
        28985: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Deferred = void 0);
            class a {
                constructor() {
                    (this.resolve = () => null),
                        (this.reject = () => null),
                        (this.promise = new Promise((e, t) => {
                            (this.reject = t), (this.resolve = e);
                        }));
                }
            }
            t.Deferred = a;
        },
        37279: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.EndOfStreamError = t.defaultMessages = void 0), (t.defaultMessages = "End-Of-Stream");
            class a extends Error {
                constructor() {
                    super(t.defaultMessages);
                }
            }
            t.EndOfStreamError = a;
        },
        56654: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.StreamReader = t.EndOfStreamError = void 0);
            let i = a(37279),
                r = a(28985);
            var n = a(37279);
            Object.defineProperty(t, "EndOfStreamError", {
                enumerable: !0,
                get: function () {
                    return n.EndOfStreamError;
                },
            });
            let s = 1048576;
            class o {
                constructor(e) {
                    if (((this.s = e), (this.deferred = null), (this.endOfStream = !1), (this.peekQueue = []), !e.read || !e.once)) throw Error("Expected an instance of stream.Readable");
                    this.s.once("end", () => this.reject(new i.EndOfStreamError())), this.s.once("error", (e) => this.reject(e)), this.s.once("close", () => this.reject(Error("Stream closed")));
                }
                async peek(e, t, a) {
                    let i = await this.read(e, t, a);
                    return this.peekQueue.push(e.subarray(t, t + i)), i;
                }
                async read(e, t, a) {
                    if (0 === a) return 0;
                    if (0 === this.peekQueue.length && this.endOfStream) throw new i.EndOfStreamError();
                    let r = a,
                        n = 0;
                    for (; this.peekQueue.length > 0 && r > 0;) {
                        let a = this.peekQueue.pop();
                        if (!a) throw Error("peekData should be defined");
                        let i = Math.min(a.length, r);
                        e.set(a.subarray(0, i), t + n), (n += i), (r -= i), i < a.length && this.peekQueue.push(a.subarray(i));
                    }
                    for (; r > 0 && !this.endOfStream;) {
                        let a = Math.min(r, s),
                            i = await this.readFromStream(e, t + n, a);
                        if (((n += i), i < a)) break;
                        r -= i;
                    }
                    return n;
                }
                async readFromStream(e, t, a) {
                    let i = this.s.read(a);
                    if (i) return e.set(i, t), i.length;
                    {
                        let i = { buffer: e, offset: t, length: a, deferred: new r.Deferred() };
                        return (
                            (this.deferred = i.deferred),
                            this.s.once("readable", () => {
                                this.readDeferred(i);
                            }),
                            i.deferred.promise
                        );
                    }
                }
                readDeferred(e) {
                    let t = this.s.read(e.length);
                    t
                        ? (e.buffer.set(t, e.offset), e.deferred.resolve(t.length), (this.deferred = null))
                        : this.s.once("readable", () => {
                            this.readDeferred(e);
                        });
                }
                reject(e) {
                    (this.endOfStream = !0), this.deferred && (this.deferred.reject(e), (this.deferred = null));
                }
            }
            t.StreamReader = o;
        },
        55167: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.StreamReader = t.EndOfStreamError = void 0);
            var i = a(37279);
            Object.defineProperty(t, "EndOfStreamError", {
                enumerable: !0,
                get: function () {
                    return i.EndOfStreamError;
                },
            });
            var r = a(56654);
            Object.defineProperty(t, "StreamReader", {
                enumerable: !0,
                get: function () {
                    return r.StreamReader;
                },
            });
        },
        80842: function (e, t, a) {
            "use strict";
            var i = a(48764).Buffer;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractTokenizer = void 0);
            let r = a(55167);
            class n {
                constructor(e) {
                    (this.position = 0), (this.numBuffer = new Uint8Array(8)), (this.fileInfo = e || {});
                }
                async readToken(e, t = this.position) {
                    let a = i.alloc(e.len);
                    if ((await this.readBuffer(a, { position: t })) < e.len) throw new r.EndOfStreamError();
                    return e.get(a, 0);
                }
                async peekToken(e, t = this.position) {
                    let a = i.alloc(e.len);
                    if ((await this.peekBuffer(a, { position: t })) < e.len) throw new r.EndOfStreamError();
                    return e.get(a, 0);
                }
                async readNumber(e) {
                    if ((await this.readBuffer(this.numBuffer, { length: e.len })) < e.len) throw new r.EndOfStreamError();
                    return e.get(this.numBuffer, 0);
                }
                async peekNumber(e) {
                    if ((await this.peekBuffer(this.numBuffer, { length: e.len })) < e.len) throw new r.EndOfStreamError();
                    return e.get(this.numBuffer, 0);
                }
                async ignore(e) {
                    if (void 0 !== this.fileInfo.size) {
                        let t = this.fileInfo.size - this.position;
                        if (e > t) return (this.position += t), t;
                    }
                    return (this.position += e), e;
                }
                async close() { }
                normalizeOptions(e, t) {
                    if (t && void 0 !== t.position && t.position < this.position) throw Error("`options.position` must be equal or greater than `tokenizer.position`");
                    return t
                        ? { mayBeLess: !0 === t.mayBeLess, offset: t.offset ? t.offset : 0, length: t.length ? t.length : e.length - (t.offset ? t.offset : 0), position: t.position ? t.position : this.position }
                        : { mayBeLess: !1, offset: 0, length: e.length, position: this.position };
                }
            }
            t.AbstractTokenizer = n;
        },
        30778: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.BufferTokenizer = void 0);
            let i = a(55167),
                r = a(80842);
            class n extends r.AbstractTokenizer {
                constructor(e, t) {
                    super(t), (this.uint8Array = e), (this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e.length);
                }
                async readBuffer(e, t) {
                    if (t && t.position) {
                        if (t.position < this.position) throw Error("`options.position` must be equal or greater than `tokenizer.position`");
                        this.position = t.position;
                    }
                    let a = await this.peekBuffer(e, t);
                    return (this.position += a), a;
                }
                async peekBuffer(e, t) {
                    let a = this.normalizeOptions(e, t),
                        r = Math.min(this.uint8Array.length - a.position, a.length);
                    if (a.mayBeLess || !(r < a.length)) return e.set(this.uint8Array.subarray(a.position, a.position + r), a.offset), r;
                    throw new i.EndOfStreamError();
                }
                async close() { }
            }
            t.BufferTokenizer = n;
        },
        20599: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReadStreamTokenizer = void 0);
            let i = a(80842),
                r = a(55167),
                n = 256e3;
            class s extends i.AbstractTokenizer {
                constructor(e, t) {
                    super(t), (this.streamReader = new r.StreamReader(e));
                }
                async getFileInfo() {
                    return this.fileInfo;
                }
                async readBuffer(e, t) {
                    let a = this.normalizeOptions(e, t),
                        i = a.position - this.position;
                    if (i > 0) return await this.ignore(i), this.readBuffer(e, t);
                    if (i < 0) throw Error("`options.position` must be equal or greater than `tokenizer.position`");
                    if (0 === a.length) return 0;
                    let n = await this.streamReader.read(e, a.offset, a.length);
                    if (((this.position += n), (!t || !t.mayBeLess) && n < a.length)) throw new r.EndOfStreamError();
                    return n;
                }
                async peekBuffer(e, t) {
                    let a = this.normalizeOptions(e, t),
                        i = 0;
                    if (a.position) {
                        let t = a.position - this.position;
                        if (t > 0) {
                            let r = new Uint8Array(a.length + t);
                            return (i = await this.peekBuffer(r, { mayBeLess: a.mayBeLess })), e.set(r.subarray(t), a.offset), i - t;
                        }
                        if (t < 0) throw Error("Cannot peek from a negative offset in a stream");
                    }
                    if (a.length > 0) {
                        try {
                            i = await this.streamReader.peek(e, a.offset, a.length);
                        } catch (e) {
                            if (t && t.mayBeLess && e instanceof r.EndOfStreamError) return 0;
                            throw e;
                        }
                        if (!a.mayBeLess && i < a.length) throw new r.EndOfStreamError();
                    }
                    return i;
                }
                async ignore(e) {
                    let t = Math.min(n, e),
                        a = new Uint8Array(t),
                        i = 0;
                    for (; i < e;) {
                        let r = e - i,
                            n = await this.readBuffer(a, { length: Math.min(t, r) });
                        if (n < 0) return n;
                        i += n;
                    }
                    return i;
                }
            }
            t.ReadStreamTokenizer = s;
        },
        35849: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.fromBuffer = t.fromStream = t.EndOfStreamError = void 0);
            let i = a(20599),
                r = a(30778);
            var n = a(55167);
            function s(e, t) {
                return (t = t || {}), new i.ReadStreamTokenizer(e, t);
            }
            function o(e, t) {
                return new r.BufferTokenizer(e, t);
            }
            Object.defineProperty(t, "EndOfStreamError", {
                enumerable: !0,
                get: function () {
                    return n.EndOfStreamError;
                },
            }),
                (t.fromStream = s),
                (t.fromBuffer = o);
        },
    },
]);








// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2463],{37811:function(e,t){"use strict";/*!
//  * content-type
//  * Copyright(c) 2015 Douglas Christopher Wilson
//  * MIT Licensed
//  */var a=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,i=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,r=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,n=/\\([\u000b\u0020-\u00ff])/g,s=/([\\"])/g,o=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function l(e){if(!e||"object"!=typeof e)throw TypeError("argument obj is required");var t=e.parameters,a=e.type;if(!a||!o.test(a))throw TypeError("invalid type");var i=a;if(t&&"object"==typeof t)for(var n,s=Object.keys(t).sort(),l=0;l<s.length;l++){if(n=s[l],!r.test(n))throw TypeError("invalid parameter name");i+="; "+n+"="+u(t[n])}return i}function c(e){if(!e)throw TypeError("argument string is required");var t,i,r,s="object"==typeof e?d(e):e;if("string"!=typeof s)throw TypeError("argument string is required to be a string");var l=s.indexOf(";"),c=-1!==l?s.slice(0,l).trim():s.trim();if(!o.test(c))throw TypeError("invalid media type");var u=new m(c.toLowerCase());if(-1!==l){for(a.lastIndex=l;i=a.exec(s);){if(i.index!==l)throw TypeError("invalid parameter format");l+=i[0].length,t=i[1].toLowerCase(),34===(r=i[2]).charCodeAt(0)&&-1!==(r=r.slice(1,-1)).indexOf("\\")&&(r=r.replace(n,"$1")),u.parameters[t]=r}if(l!==s.length)throw TypeError("invalid parameter format")}return u}function d(e){var t;if("function"==typeof e.getHeader?t=e.getHeader("content-type"):"object"==typeof e.headers&&(t=e.headers&&e.headers["content-type"]),"string"!=typeof t)throw TypeError("content-type header is missing from object");return t}function u(e){var t=String(e);if(r.test(t))return t;if(t.length>0&&!i.test(t))throw TypeError("invalid parameter value");return'"'+t.replace(s,"\\$1")+'"'}function m(e){this.parameters=Object.create(null),this.type=e}t.format=l,t.parse=c},11227:function(e,t,a){var i=a(34155);function r(){return"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function n(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let a="color: "+this.color;t.splice(1,0,a,"color: inherit");let i=0,r=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(i++,"%c"===e&&(r=i))}),t.splice(r,0,a)}function s(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}}function o(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==i&&"env"in i&&(e=i.env.DEBUG),e}function l(){try{return localStorage}catch(e){}}t.formatArgs=n,t.save=s,t.load=o,t.useColors=r,t.storage=l(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=a(82447)(t);let{formatters:c}=e.exports;c.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},82447:function(e,t,a){function i(e){function t(e){let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a)|0;return i.colors[Math.abs(t)%i.colors.length]}function i(e){let t,a,n;let s=null;function o(...e){if(!o.enabled)return;let a=o,r=Number(new Date),n=r-(t||r);a.diff=n,a.prev=t,a.curr=r,t=r,e[0]=i.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,r)=>{if("%%"===t)return"%";s++;let n=i.formatters[r];if("function"==typeof n){let i=e[s];t=n.call(a,i),e.splice(s,1),s--}return t}),i.formatArgs.call(a,e),(a.log||i.log).apply(a,e)}return o.namespace=e,o.useColors=i.useColors(),o.color=i.selectColor(e),o.extend=r,o.destroy=i.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(a!==i.namespaces&&(a=i.namespaces,n=i.enabled(e)),n),set:e=>{s=e}}),"function"==typeof i.init&&i.init(o),o}function r(e,t){let a=i(this.namespace+(void 0===t?":":t)+e);return a.log=this.log,a}function n(e){let t;i.save(e),i.namespaces=e,i.names=[],i.skips=[];let a=("string"==typeof e?e:"").split(/[\s,]+/),r=a.length;for(t=0;t<r;t++)a[t]&&("-"===(e=a[t].replace(/\*/g,".*?"))[0]?i.skips.push(RegExp("^"+e.slice(1)+"$")):i.names.push(RegExp("^"+e+"$")))}function s(){let e=[...i.names.map(l),...i.skips.map(l).map(e=>"-"+e)].join(",");return i.enable(""),e}function o(e){let t,a;if("*"===e[e.length-1])return!0;for(t=0,a=i.skips.length;t<a;t++)if(i.skips[t].test(e))return!1;for(t=0,a=i.names.length;t<a;t++)if(i.names[t].test(e))return!0;return!1}function l(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}function c(e){return e instanceof Error?e.stack||e.message:e}function d(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return i.debug=i,i.default=i,i.coerce=c,i.disable=s,i.enable=n,i.enabled=o,i.humanize=a(57824),i.destroy=d,Object.keys(e).forEach(t=>{i[t]=e[t]}),i.names=[],i.skips=[],i.formatters={},i.selectColor=t,i.enable(i.load()),i}e.exports=i},22577:function(e,t){"use strict";/*!
//  * media-typer
//  * Copyright(c) 2014-2017 Douglas Christopher Wilson
//  * MIT Licensed
//  */var a=/^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,i=/^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,r=/^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;function n(e){if(!e||"object"!=typeof e)throw TypeError("argument obj is required");var t=e.subtype,r=e.suffix,n=e.type;if(!n||!i.test(n))throw TypeError("invalid type");if(!t||!a.test(t))throw TypeError("invalid subtype");var s=n+"/"+t;if(r){if(!i.test(r))throw TypeError("invalid suffix");s+="+"+r}return s}function s(e){if(!e)throw TypeError("argument string is required");if("string"!=typeof e)throw TypeError("argument string is required to be a string");return r.test(e.toLowerCase())}function o(e){if(!e)throw TypeError("argument string is required");if("string"!=typeof e)throw TypeError("argument string is required to be a string");var t,a=r.exec(e.toLowerCase());if(!a)throw TypeError("invalid media type");var i=a[1],n=a[2],s=n.lastIndexOf("+");return -1!==s&&(t=n.substr(s+1),n=n.substr(0,s)),new l(i,n,t)}function l(e,t,a){this.type=e,this.subtype=t,this.suffix=a}t.format=n,t.parse=o,t.test=s},57824:function(e){var t=1e3,a=6e4,i=36e5,r=864e5,n=6048e5,s=315576e5;function o(e){if(!((e=String(e)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var l=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return l*s;case"weeks":case"week":case"w":return l*n;case"days":case"day":case"d":return l*r;case"hours":case"hour":case"hrs":case"hr":case"h":return l*i;case"minutes":case"minute":case"mins":case"min":case"m":return l*a;case"seconds":case"second":case"secs":case"sec":case"s":return l*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function l(e){var n=Math.abs(e);return n>=r?Math.round(e/r)+"d":n>=i?Math.round(e/i)+"h":n>=a?Math.round(e/a)+"m":n>=t?Math.round(e/t)+"s":e+"ms"}function c(e){var n=Math.abs(e);return n>=r?d(e,n,r,"day"):n>=i?d(e,n,i,"hour"):n>=a?d(e,n,a,"minute"):n>=t?d(e,n,t,"second"):e+" ms"}function d(e,t,a,i){var r=t>=1.5*a;return Math.round(e/a)+" "+i+(r?"s":"")}e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return o(e);if("number"===a&&isFinite(e))return t.long?c(e):l(e);throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},52463:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchFromUrl=t.parseBlob=t.parseReadableStream=t.parseNodeStream=t.selectCover=t.ratingToStars=t.orderTags=t.parseFromTokenizer=t.parseBuffer=void 0;let i=a(11227),r=a(80523),n=a(58090),s=i("music-metadata-browser:main");var o=a(80523);async function l(e,a,i){let r=new n.ReadableWebToNodeStream(e),s=await (0,t.parseNodeStream)(r,"string"==typeof a?{mimeType:a}:a,i);return await r.close(),s}async function c(e,t){let a={mimeType:e.type,size:e.size};return e instanceof File&&(a.path=e.name),l(e.stream?e.stream():d(e),{mimeType:e.type,size:e.size},t)}function d(e){let t=new FileReader;return new ReadableStream({start(a){t.onloadend=e=>{let t=e.target.result;t instanceof ArrayBuffer&&(t=new Uint8Array(t)),a.enqueue(t),a.close()},t.onerror=e=>{a.close()},t.onabort=e=>{a.close()},t.readAsArrayBuffer(e)}})}async function u(e,t){let a=await fetch(e),i={size:parseInt(a.headers.get("Content-Length"),10),mimeType:a.headers.get("Content-Type")};if(a.ok){if(!a.body)return c(await a.blob(),t);{let e=await l(a.body,i,t);return s("Closing HTTP-readable-stream..."),a.body.locked||await a.body.cancel(),s("HTTP-readable-stream closed."),e}}throw Error(`HTTP error status=${a.status}: ${a.statusText}`)}Object.defineProperty(t,"parseBuffer",{enumerable:!0,get:function(){return o.parseBuffer}}),Object.defineProperty(t,"parseFromTokenizer",{enumerable:!0,get:function(){return o.parseFromTokenizer}}),Object.defineProperty(t,"orderTags",{enumerable:!0,get:function(){return o.orderTags}}),Object.defineProperty(t,"ratingToStars",{enumerable:!0,get:function(){return o.ratingToStars}}),Object.defineProperty(t,"selectCover",{enumerable:!0,get:function(){return o.selectCover}}),t.parseNodeStream=r.parseStream,t.parseReadableStream=l,t.parseBlob=c,t.fetchFromUrl=u},83275:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.ParserFactory=t.parseHttpContentType=void 0;let r=a(72933),n=a(37811),s=a(22577),o=a(11227),l=a(27584),c=a(15410),d=a(6742),u=a(31004),m=a(70498),p=a(38841),f=a(10060),g=a(19606),h=a(71915),T=a(32682),k=a(95870),b=a(61533),I=a(16789),y=a(50078),v=(0,o.default)("music-metadata:parser:factory");function S(e){let t=n.parse(e),a=s.parse(t.type);return{type:a.type,subtype:a.subtype,suffix:a.suffix,parameters:t.parameters}}async function E(e,t,a={}){let i=await w.loadParser(t),r=new l.MetadataCollector(a);return await i.init(r,e,a).parse(),r.toCommonMetadata()}t.parseHttpContentType=S;class w{static async parseOnContentType(e,t){let{mimeType:a,path:i,url:r}=await e.fileInfo,n=w.getParserIdForMimeType(a)||w.getParserIdForExtension(i)||w.getParserIdForExtension(r);return n||v("No parser found for MIME-type / extension: "+a),this.parse(e,n,t)}static async parse(e,t,a){if(!t){v("Guess parser on content...");let a=i.alloc(4100);if(await e.peekBuffer(a,{mayBeLess:!0}),e.fileInfo.path&&(t=this.getParserIdForExtension(e.fileInfo.path)),!t){let e=await r.fromBuffer(a);if(!e)throw Error("Failed to determine audio format");if(v(`Guessed file type is mime=${e.mime}, extension=${e.ext}`),!(t=w.getParserIdForMimeType(e.mime)))throw Error("Guessed MIME-type not supported: "+e.mime)}}return E(e,t,a)}static getParserIdForExtension(e){if(e)switch(this.getExtension(e).toLocaleLowerCase()||e){case".mp2":case".mp3":case".m2a":case".aac":return"mpeg";case".ape":return"apev2";case".mp4":case".m4a":case".m4b":case".m4pa":case".m4v":case".m4r":case".3gp":return"mp4";case".wma":case".wmv":case".asf":return"asf";case".flac":return"flac";case".ogg":case".ogv":case".oga":case".ogm":case".ogx":case".opus":case".spx":return"ogg";case".aif":case".aiff":case".aifc":return"aiff";case".wav":case".bwf":return"riff";case".wv":case".wvp":return"wavpack";case".mpc":return"musepack";case".dsf":return"dsf";case".dff":return"dsdiff";case".mka":case".mkv":case".mk3d":case".mks":case".webm":return"matroska"}}static async loadParser(e){switch(e){case"aiff":return new c.AIFFParser;case"adts":case"mpeg":return new f.MpegParser;case"apev2":return new d.APEv2Parser;case"asf":return new u.AsfParser;case"dsf":return new b.DsfParser;case"dsdiff":return new I.DsdiffParser;case"flac":return new m.FlacParser;case"mp4":return new p.MP4Parser;case"musepack":return new g.default;case"ogg":return new h.OggParser;case"riff":return new T.WaveParser;case"wavpack":return new k.WavPackParser;case"matroska":return new y.MatroskaParser;default:throw Error(`Unknown parser type: ${e}`)}}static getExtension(e){let t=e.lastIndexOf(".");return -1===t?"":e.slice(t)}static getParserIdForMimeType(e){let t;try{t=S(e)}catch(t){v(`Invalid HTTP Content-Type header value: ${e}`);return}let a=0===t.subtype.indexOf("x-")?t.subtype.substring(2):t.subtype;switch(t.type){case"audio":switch(a){case"mp3":case"mpeg":return"mpeg";case"aac":case"aacp":return"adts";case"flac":return"flac";case"ape":case"monkeys-audio":return"apev2";case"mp4":case"m4a":return"mp4";case"ogg":case"opus":case"speex":return"ogg";case"ms-wma":case"ms-wmv":case"ms-asf":return"asf";case"aiff":case"aif":case"aifc":return"aiff";case"vnd.wave":case"wav":case"wave":return"riff";case"wavpack":return"wavpack";case"musepack":return"musepack";case"matroska":case"webm":return"matroska";case"dsf":return"dsf"}break;case"video":switch(a){case"ms-asf":case"ms-wmv":return"asf";case"m4v":case"mp4":return"mp4";case"ogg":return"ogg";case"matroska":case"webm":return"matroska"}break;case"application":switch(a){case"vnd.ms-asf":return"asf";case"ogg":return"ogg"}}}}t.ParserFactory=w},15410:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AIFFParser=void 0;let i=a(20036),r=a(11227),n=a(35849),s=a(8928),o=a(28049),l=a(87805),c=a(1162),d=a(44633),u=(0,r.default)("music-metadata:parser:aiff"),m={NONE:"not compressed	PCM	Apple Computer",sowt:"PCM (byte swapped)",fl32:"32-bit floating point IEEE 32-bit float",fl64:"64-bit floating point IEEE 64-bit float	Apple Computer",alaw:"ALaw 2:1	8-bit ITU-T G.711 A-law",ulaw:"\xb5Law 2:1	8-bit ITU-T G.711 \xb5-law	Apple Computer",ULAW:"CCITT G.711 u-law 8-bit ITU-T G.711 \xb5-law",ALAW:"CCITT G.711 A-law 8-bit ITU-T G.711 A-law",FL32:"Float 32	IEEE 32-bit float "};class p extends l.BasicParser{async parse(){if("FORM"!==(await this.tokenizer.readToken(d.Header)).chunkID)throw Error("Invalid Chunk-ID, expected 'FORM'");let e=await this.tokenizer.readToken(o.FourCcToken);switch(e){case"AIFF":this.metadata.setFormat("container",e),this.isCompressed=!1;break;case"AIFC":this.metadata.setFormat("container","AIFF-C"),this.isCompressed=!0;break;default:throw Error("Unsupported AIFF type: "+e)}this.metadata.setFormat("lossless",!this.isCompressed);try{for(;!this.tokenizer.fileInfo.size||this.tokenizer.fileInfo.size-this.tokenizer.position>=d.Header.len;){u("Reading AIFF chunk at offset="+this.tokenizer.position);let e=await this.tokenizer.readToken(d.Header),t=2*Math.round(e.chunkSize/2),a=await this.readData(e);await this.tokenizer.ignore(t-a)}}catch(e){if(e instanceof n.EndOfStreamError)u("End-of-stream");else throw e}}async readData(e){var t;switch(e.chunkID){case"COMM":let a=await this.tokenizer.readToken(new c.Common(e,this.isCompressed));return this.metadata.setFormat("bitsPerSample",a.sampleSize),this.metadata.setFormat("sampleRate",a.sampleRate),this.metadata.setFormat("numberOfChannels",a.numChannels),this.metadata.setFormat("numberOfSamples",a.numSampleFrames),this.metadata.setFormat("duration",a.numSampleFrames/a.sampleRate),this.metadata.setFormat("codec",null!==(t=a.compressionName)&&void 0!==t?t:m[a.compressionType]),e.chunkSize;case"ID3 ":let r=await this.tokenizer.readToken(new i.Uint8ArrayType(e.chunkSize)),o=n.fromBuffer(r);return await new s.ID3v2Parser().parse(this.metadata,o,this.options),e.chunkSize;case"SSND":return this.metadata.format.duration&&this.metadata.setFormat("bitrate",8*e.chunkSize/this.metadata.format.duration),0;case"NAME":case"AUTH":case"(c) ":case"ANNO":return this.readTextChunk(e);default:return u(`Ignore chunk id=${e.chunkID}, size=${e.chunkSize}`),0}}async readTextChunk(e){return(await this.tokenizer.readToken(new i.StringType(e.chunkSize,"ascii"))).split("\0").map(e=>e.trim()).filter(e=>e&&e.length>0).forEach(t=>{this.metadata.addTag("AIFF",e.chunkID,t.trim())}),e.chunkSize}}t.AIFFParser=p},8815:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AiffTagMapper=void 0;let i=a(89918),r={NAME:"title",AUTH:"artist","(c) ":"copyright",ANNO:"comment"};class n extends i.CommonTagMapper{constructor(){super(["AIFF"],r)}}t.AiffTagMapper=n},1162:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Common=void 0;let i=a(20036),r=a(28049);class n{constructor(e,t){this.isAifc=t;let a=t?22:18;if(e.chunkSize<a)throw Error(`COMMON CHUNK size should always be at least ${a}`);this.len=e.chunkSize}get(e,t){let a=e.readUInt16BE(t+8)-16398,n=e.readUInt16BE(t+8+2),s={numChannels:e.readUInt16BE(t),numSampleFrames:e.readUInt32BE(t+2),sampleSize:e.readUInt16BE(t+6),sampleRate:a<0?n>>Math.abs(a):n<<a};if(this.isAifc){if(s.compressionType=r.FourCcToken.get(e,t+18),this.len>22){let a=e.readInt8(t+22);if(a>0){let r=(a+1)%2;if(23+a+r===this.len)s.compressionName=new i.StringType(a,"binary").get(e,t+23);else throw Error("Illegal pstring length")}else s.compressionName=void 0}}else s.compressionName="PCM";return s}}t.Common=n},6742:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.APEv2Parser=void 0;let r=a(11227),n=a(35849),s=a(20036),o=a(83769),l=a(87805),c=a(50876),d=(0,r.default)("music-metadata:parser:APEv2"),u="APEv2",m="APETAGEX";class p extends l.BasicParser{constructor(){super(...arguments),this.ape={}}static tryParseApeHeader(e,t,a){let i=new p;return i.init(e,t,a),i.tryParseApeHeader()}static calculateDuration(e){let t=e.totalFrames>1?e.blocksPerFrame*(e.totalFrames-1):0;return(t+=e.finalFrameBlocks)/e.sampleRate}static async findApeFooterOffset(e,t){let a=i.alloc(c.TagFooter.len);await e.randomRead(a,0,c.TagFooter.len,t-c.TagFooter.len);let r=c.TagFooter.get(a,0);if("APETAGEX"===r.ID)return d(`APE footer header at offset=${t}`),{footer:r,offset:t-r.size}}static parseTagFooter(e,t,a){let i=c.TagFooter.get(t,t.length-c.TagFooter.len);if(i.ID!==m)throw Error("Unexpected APEv2 Footer ID preamble value.");n.fromBuffer(t);let r=new p;return r.init(e,n.fromBuffer(t),a),r.parseTags(i)}async tryParseApeHeader(){if(this.tokenizer.fileInfo.size&&this.tokenizer.fileInfo.size-this.tokenizer.position<c.TagFooter.len){d("No APEv2 header found, end-of-file reached");return}let e=await this.tokenizer.peekToken(c.TagFooter);if(e.ID===m)return await this.tokenizer.ignore(c.TagFooter.len),this.parseTags(e);if(d(`APEv2 header not found at offset=${this.tokenizer.position}`),this.tokenizer.fileInfo.size){let e=this.tokenizer.fileInfo.size-this.tokenizer.position,t=i.alloc(e);return await this.tokenizer.readBuffer(t),p.parseTagFooter(this.metadata,t,this.options)}}async parse(){let e=await this.tokenizer.readToken(c.DescriptorParser);if("MAC "!==e.ID)throw Error("Unexpected descriptor ID");this.ape.descriptor=e;let t=e.descriptorBytes-c.DescriptorParser.len,a=await (t>0?this.parseDescriptorExpansion(t):this.parseHeader());return await this.tokenizer.ignore(a.forwardBytes),this.tryParseApeHeader()}async parseTags(e){let t=i.alloc(256),a=e.size-c.TagFooter.len;d(`Parse APE tags at offset=${this.tokenizer.position}, size=${a}`);for(let r=0;r<e.fields;r++){if(a<c.TagItemHeader.len){this.metadata.addWarning(`APEv2 Tag-header: ${e.fields-r} items remaining, but no more tag data to read.`);break}let n=await this.tokenizer.readToken(c.TagItemHeader);a-=c.TagItemHeader.len+n.size,await this.tokenizer.peekBuffer(t,{length:Math.min(t.length,a)});let l=o.findZero(t,0,t.length),m=await this.tokenizer.readToken(new s.StringType(l,"ascii"));switch(await this.tokenizer.ignore(1),a-=m.length+1,n.flags.dataType){case c.DataType.text_utf8:for(let e of(await this.tokenizer.readToken(new s.StringType(n.size,"utf8"))).split(/\x00/g))this.metadata.addTag(u,m,e);break;case c.DataType.binary:if(this.options.skipCovers)await this.tokenizer.ignore(n.size);else{let e=i.alloc(n.size);await this.tokenizer.readBuffer(e),l=o.findZero(e,0,e.length);let t=e.toString("utf8",0,l),a=i.from(e.slice(l+1));this.metadata.addTag(u,m,{description:t,data:a})}break;case c.DataType.external_info:d(`Ignore external info ${m}`),await this.tokenizer.ignore(n.size);break;case c.DataType.reserved:d(`Ignore external info ${m}`),this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${m}"`),await this.tokenizer.ignore(n.size)}}}async parseDescriptorExpansion(e){return await this.tokenizer.ignore(e),this.parseHeader()}async parseHeader(){let e=await this.tokenizer.readToken(c.Header);return this.metadata.setFormat("lossless",!0),this.metadata.setFormat("container","Monkey's Audio"),this.metadata.setFormat("bitsPerSample",e.bitsPerSample),this.metadata.setFormat("sampleRate",e.sampleRate),this.metadata.setFormat("numberOfChannels",e.channel),this.metadata.setFormat("duration",p.calculateDuration(e)),{forwardBytes:this.ape.descriptor.seekTableBytes+this.ape.descriptor.headerDataBytes+this.ape.descriptor.apeFrameDataBytes+this.ape.descriptor.terminatingDataBytes}}}t.APEv2Parser=p},48414:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APEv2TagMapper=void 0;let i=a(24132),r={Title:"title",Artist:"artist",Artists:"artists","Album Artist":"albumartist",Album:"album",Year:"date",Originalyear:"originalyear",Originaldate:"originaldate",Comment:"comment",Track:"track",Disc:"disk",DISCNUMBER:"disk",Genre:"genre","Cover Art (Front)":"picture","Cover Art (Back)":"picture",Composer:"composer",Lyrics:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",Lyricist:"lyricist",Writer:"writer",Conductor:"conductor",MixArtist:"remixer",Arranger:"arranger",Engineer:"engineer",Producer:"producer",DJMixer:"djmixer",Mixer:"mixer",Label:"label",Grouping:"grouping",Subtitle:"subtitle",DiscSubtitle:"discsubtitle",Compilation:"compilation",BPM:"bpm",Mood:"mood",Media:"media",CatalogNumber:"catalognumber",MUSICBRAINZ_ALBUMSTATUS:"releasestatus",MUSICBRAINZ_ALBUMTYPE:"releasetype",RELEASECOUNTRY:"releasecountry",Script:"script",Language:"language",Copyright:"copyright",LICENSE:"license",EncodedBy:"encodedby",EncoderSettings:"encodersettings",Barcode:"barcode",ISRC:"isrc",ASIN:"asin",musicbrainz_trackid:"musicbrainz_recordingid",musicbrainz_releasetrackid:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",Acoustid_Id:"acoustid_id",ACOUSTID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",Weblink:"website",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",MP3GAIN_MINMAX:"replaygain_track_minmax",MP3GAIN_UNDO:"replaygain_undo"};class n extends i.CaseInsensitiveTagMap{constructor(){super(["APEv2"],r)}}t.APEv2TagMapper=n},50876:function(e,t,a){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.isBitSet=t.parseTagFlags=t.TagField=t.TagItemHeader=t.TagFooter=t.Header=t.DescriptorParser=t.DataType=void 0;let r=a(20036),n=a(28049);!function(e){e[e.text_utf8=0]="text_utf8",e[e.binary=1]="binary",e[e.external_info=2]="external_info",e[e.reserved=3]="reserved"}(i=t.DataType||(t.DataType={})),t.DescriptorParser={len:52,get:(e,t)=>({ID:n.FourCcToken.get(e,t),version:r.UINT32_LE.get(e,t+4)/1e3,descriptorBytes:r.UINT32_LE.get(e,t+8),headerBytes:r.UINT32_LE.get(e,t+12),seekTableBytes:r.UINT32_LE.get(e,t+16),headerDataBytes:r.UINT32_LE.get(e,t+20),apeFrameDataBytes:r.UINT32_LE.get(e,t+24),apeFrameDataBytesHigh:r.UINT32_LE.get(e,t+28),terminatingDataBytes:r.UINT32_LE.get(e,t+32),fileMD5:new r.Uint8ArrayType(16).get(e,t+36)})},t.Header={len:24,get:(e,t)=>({compressionLevel:r.UINT16_LE.get(e,t),formatFlags:r.UINT16_LE.get(e,t+2),blocksPerFrame:r.UINT32_LE.get(e,t+4),finalFrameBlocks:r.UINT32_LE.get(e,t+8),totalFrames:r.UINT32_LE.get(e,t+12),bitsPerSample:r.UINT16_LE.get(e,t+16),channel:r.UINT16_LE.get(e,t+18),sampleRate:r.UINT32_LE.get(e,t+20)})},t.TagFooter={len:32,get:(e,t)=>({ID:new r.StringType(8,"ascii").get(e,t),version:r.UINT32_LE.get(e,t+8),size:r.UINT32_LE.get(e,t+12),fields:r.UINT32_LE.get(e,t+16),flags:o(r.UINT32_LE.get(e,t+20))})},t.TagItemHeader={len:8,get:(e,t)=>({size:r.UINT32_LE.get(e,t),flags:o(r.UINT32_LE.get(e,t+4))})};let s=e=>new r.Uint8ArrayType(e.size-t.TagFooter.len);function o(e){return{containsHeader:l(e,31),containsFooter:l(e,30),isHeader:l(e,31),readOnly:l(e,0),dataType:(6&e)>>1}}function l(e,t){return(e&1<<t)!=0}t.TagField=s,t.parseTagFlags=o,t.isBitSet=l},85174:function(e,t,a){"use strict";var i,r=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.WmPictureToken=t.MetadataLibraryObjectState=t.MetadataObjectState=t.ExtendedStreamPropertiesObjectState=t.ExtendedContentDescriptionObjectState=t.ContentDescriptionObjectState=t.readCodecEntries=t.HeaderExtensionObject=t.StreamPropertiesObject=t.FilePropertiesObject=t.IgnoreObjectState=t.State=t.HeaderObjectToken=t.TopLevelHeaderObjectToken=t.DataType=void 0;let n=a(83769),s=a(20036),o=a(48054),l=a(82252),c=a(78281);!function(e){e[e.UnicodeString=0]="UnicodeString",e[e.ByteArray=1]="ByteArray",e[e.Bool=2]="Bool",e[e.DWord=3]="DWord",e[e.QWord=4]="QWord",e[e.Word=5]="Word"}(i=t.DataType||(t.DataType={})),t.TopLevelHeaderObjectToken={len:30,get:(e,t)=>({objectId:o.default.fromBin(new s.BufferType(16).get(e,t)),objectSize:Number(s.UINT64_LE.get(e,t+16)),numberOfHeaderObjects:s.UINT32_LE.get(e,t+24)})},t.HeaderObjectToken={len:24,get:(e,t)=>({objectId:o.default.fromBin(new s.BufferType(16).get(e,t)),objectSize:Number(s.UINT64_LE.get(e,t+16))})};class d{constructor(e){this.len=Number(e.objectSize)-t.HeaderObjectToken.len}postProcessTag(e,t,a,i){if("WM/Picture"===t)e.push({id:t,value:w.fromBuffer(i)});else{let r=l.AsfUtil.getParserForAttr(a);if(!r)throw Error("unexpected value headerType: "+a);e.push({id:t,value:r(i)})}}}t.State=d;class u extends d{constructor(e){super(e)}get(e,t){return null}}t.IgnoreObjectState=u;class m extends d{constructor(e){super(e)}get(e,t){return{fileId:o.default.fromBin(e,t),fileSize:s.UINT64_LE.get(e,t+16),creationDate:s.UINT64_LE.get(e,t+24),dataPacketsCount:s.UINT64_LE.get(e,t+32),playDuration:s.UINT64_LE.get(e,t+40),sendDuration:s.UINT64_LE.get(e,t+48),preroll:s.UINT64_LE.get(e,t+56),flags:{broadcast:n.getBit(e,t+64,24),seekable:n.getBit(e,t+64,25)},minimumDataPacketSize:s.UINT32_LE.get(e,t+68),maximumDataPacketSize:s.UINT32_LE.get(e,t+72),maximumBitrate:s.UINT32_LE.get(e,t+76)}}}m.guid=o.default.FilePropertiesObject,t.FilePropertiesObject=m;class p extends d{constructor(e){super(e)}get(e,t){return{streamType:o.default.decodeMediaType(o.default.fromBin(e,t)),errorCorrectionType:o.default.fromBin(e,t+8)}}}p.guid=o.default.StreamPropertiesObject,t.StreamPropertiesObject=p;class f{constructor(){this.len=22}get(e,t){return{reserved1:o.default.fromBin(e,t),reserved2:e.readUInt16LE(t+16),extensionDataSize:e.readUInt32LE(t+18)}}}f.guid=o.default.HeaderExtensionObject,t.HeaderExtensionObject=f;let g={len:20,get:(e,t)=>({entryCount:e.readUInt16LE(t+16)})};async function h(e){let t=await e.readNumber(s.UINT16_LE);return(await e.readToken(new s.StringType(2*t,"utf16le"))).replace("\0","")}async function T(e){let t=await e.readToken(g),a=[];for(let i=0;i<t.entryCount;++i)a.push(await b(e));return a}async function k(e){let t=await e.readNumber(s.UINT16_LE),a=r.alloc(t);return await e.readBuffer(a),a}async function b(e){let t=await e.readNumber(s.UINT16_LE);return{type:{videoCodec:(1&t)==1,audioCodec:(2&t)==2},codecName:await h(e),description:await h(e),information:await k(e)}}t.readCodecEntries=T;class I extends d{constructor(e){super(e)}get(e,t){let a=[],i=t+10;for(let r=0;r<I.contentDescTags.length;++r){let n=e.readUInt16LE(t+2*r);if(n>0){let t=I.contentDescTags[r],s=i+n;a.push({id:t,value:l.AsfUtil.parseUnicodeAttr(e.slice(i,s))}),i=s}}return a}}I.guid=o.default.ContentDescriptionObject,I.contentDescTags=["Title","Author","Copyright","Description","Rating"],t.ContentDescriptionObjectState=I;class y extends d{constructor(e){super(e)}get(e,t){let a=[],i=e.readUInt16LE(t),r=t+2;for(let t=0;t<i;t+=1){let t=e.readUInt16LE(r);r+=2;let i=l.AsfUtil.parseUnicodeAttr(e.slice(r,r+t));r+=t;let n=e.readUInt16LE(r);r+=2;let s=e.readUInt16LE(r);r+=2;let o=e.slice(r,r+s);r+=s,this.postProcessTag(a,i,n,o)}return a}}y.guid=o.default.ExtendedContentDescriptionObject,t.ExtendedContentDescriptionObjectState=y;class v extends d{constructor(e){super(e)}get(e,t){return{startTime:s.UINT64_LE.get(e,t),endTime:s.UINT64_LE.get(e,t+8),dataBitrate:e.readInt32LE(t+12),bufferSize:e.readInt32LE(t+16),initialBufferFullness:e.readInt32LE(t+20),alternateDataBitrate:e.readInt32LE(t+24),alternateBufferSize:e.readInt32LE(t+28),alternateInitialBufferFullness:e.readInt32LE(t+32),maximumObjectSize:e.readInt32LE(t+36),flags:{reliableFlag:n.getBit(e,t+40,0),seekableFlag:n.getBit(e,t+40,1),resendLiveCleanpointsFlag:n.getBit(e,t+40,2)},streamNumber:e.readInt16LE(t+42),streamLanguageId:e.readInt16LE(t+44),averageTimePerFrame:e.readInt32LE(t+52),streamNameCount:e.readInt32LE(t+54),payloadExtensionSystems:e.readInt32LE(t+56),streamNames:[],streamPropertiesObject:null}}}v.guid=o.default.ExtendedStreamPropertiesObject,t.ExtendedStreamPropertiesObjectState=v;class S extends d{constructor(e){super(e)}get(e,t){let a=[],i=r.from(e),n=i.readUInt16LE(t),s=t+2;for(let e=0;e<n;e+=1){s+=4;let e=i.readUInt16LE(s);s+=2;let t=i.readUInt16LE(s);s+=2;let r=i.readUInt32LE(s);s+=4;let n=l.AsfUtil.parseUnicodeAttr(i.slice(s,s+e));s+=e;let o=i.slice(s,s+r);s+=r,this.postProcessTag(a,n,t,o)}return a}}S.guid=o.default.MetadataObject,t.MetadataObjectState=S;class E extends S{constructor(e){super(e)}}E.guid=o.default.MetadataLibraryObject,t.MetadataLibraryObjectState=E;class w{static fromBase64(e){return this.fromBuffer(r.from(e,"base64"))}static fromBuffer(e){return new w(e.length).get(e,0)}constructor(e){this.len=e}get(e,t){let a=e.readUInt8(t++),i=e.readInt32LE(t),r=5;for(;0!==e.readUInt16BE(r);)r+=2;let n=e.slice(5,r).toString("utf16le");for(;0!==e.readUInt16BE(r);)r+=2;let s=e.slice(5,r).toString("utf16le");return{type:c.AttachedPictureType[a],format:n,description:s,size:i,data:e.slice(r+4)}}}t.WmPictureToken=w},31004:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsfParser=void 0;let i=a(11227),r=a(6032),n=a(48054),s=a(85174),o=a(87805),l=(0,i.default)("music-metadata:parser:ASF"),c="asf";class d extends o.BasicParser{async parse(){let e=await this.tokenizer.readToken(s.TopLevelHeaderObjectToken);if(!e.objectId.equals(n.default.HeaderObject))throw Error("expected asf header; but was not found; got: "+e.objectId.str);try{await this.parseObjectHeader(e.numberOfHeaderObjects)}catch(e){l("Error while parsing ASF: %s",e)}}async parseObjectHeader(e){let t;do{let e=await this.tokenizer.readToken(s.HeaderObjectToken);switch(l("header GUID=%s",e.objectId.str),e.objectId.str){case s.FilePropertiesObject.guid.str:let a=await this.tokenizer.readToken(new s.FilePropertiesObject(e));this.metadata.setFormat("duration",Number(a.playDuration/BigInt(1e3))/1e4-Number(a.preroll)/1e3),this.metadata.setFormat("bitrate",a.maximumBitrate);break;case s.StreamPropertiesObject.guid.str:let i=await this.tokenizer.readToken(new s.StreamPropertiesObject(e));this.metadata.setFormat("container","ASF/"+i.streamType);break;case s.HeaderExtensionObject.guid.str:let o=await this.tokenizer.readToken(new s.HeaderExtensionObject);await this.parseExtensionObject(o.extensionDataSize);break;case s.ContentDescriptionObjectState.guid.str:t=await this.tokenizer.readToken(new s.ContentDescriptionObjectState(e)),this.addTags(t);break;case s.ExtendedContentDescriptionObjectState.guid.str:t=await this.tokenizer.readToken(new s.ExtendedContentDescriptionObjectState(e)),this.addTags(t);break;case n.default.CodecListObject.str:let c=await s.readCodecEntries(this.tokenizer);c.forEach(e=>{this.metadata.addStreamInfo({type:e.type.videoCodec?r.TrackType.video:r.TrackType.audio,codecName:e.codecName})});let d=c.filter(e=>e.type.audioCodec).map(e=>e.codecName).join("/");this.metadata.setFormat("codec",d);break;case n.default.StreamBitratePropertiesObject.str:await this.tokenizer.ignore(e.objectSize-s.HeaderObjectToken.len);break;case n.default.PaddingObject.str:l("Padding: %s bytes",e.objectSize-s.HeaderObjectToken.len),await this.tokenizer.ignore(e.objectSize-s.HeaderObjectToken.len);break;default:this.metadata.addWarning("Ignore ASF-Object-GUID: "+e.objectId.str),l("Ignore ASF-Object-GUID: %s",e.objectId.str),await this.tokenizer.readToken(new s.IgnoreObjectState(e))}}while(--e)}addTags(e){e.forEach(e=>{this.metadata.addTag(c,e.id,e.value)})}async parseExtensionObject(e){do{let t=await this.tokenizer.readToken(s.HeaderObjectToken),a=t.objectSize-s.HeaderObjectToken.len;switch(t.objectId.str){case s.ExtendedStreamPropertiesObjectState.guid.str:await this.tokenizer.readToken(new s.ExtendedStreamPropertiesObjectState(t));break;case s.MetadataObjectState.guid.str:let i=await this.tokenizer.readToken(new s.MetadataObjectState(t));this.addTags(i);break;case s.MetadataLibraryObjectState.guid.str:let r=await this.tokenizer.readToken(new s.MetadataLibraryObjectState(t));this.addTags(r);break;case n.default.PaddingObject.str:await this.tokenizer.ignore(a);break;case n.default.CompatibilityObject.str:this.tokenizer.ignore(a);break;case n.default.ASF_Index_Placeholder_Object.str:await this.tokenizer.ignore(a);break;default:this.metadata.addWarning("Ignore ASF-Object-GUID: "+t.objectId.str),await this.tokenizer.readToken(new s.IgnoreObjectState(t))}e-=t.objectSize}while(e>0)}}t.AsfParser=d},79004:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AsfTagMapper=void 0;let i=a(89918),r={Title:"title",Author:"artist","WM/AlbumArtist":"albumartist","WM/AlbumTitle":"album","WM/Year":"date","WM/OriginalReleaseTime":"originaldate","WM/OriginalReleaseYear":"originalyear",Description:"comment","WM/TrackNumber":"track","WM/PartOfSet":"disk","WM/Genre":"genre","WM/Composer":"composer","WM/Lyrics":"lyrics","WM/AlbumSortOrder":"albumsort","WM/TitleSortOrder":"titlesort","WM/ArtistSortOrder":"artistsort","WM/AlbumArtistSortOrder":"albumartistsort","WM/ComposerSortOrder":"composersort","WM/Writer":"lyricist","WM/Conductor":"conductor","WM/ModifiedBy":"remixer","WM/Engineer":"engineer","WM/Producer":"producer","WM/DJMixer":"djmixer","WM/Mixer":"mixer","WM/Publisher":"label","WM/ContentGroupDescription":"grouping","WM/SubTitle":"subtitle","WM/SetSubTitle":"discsubtitle","WM/IsCompilation":"compilation","WM/SharedUserRating":"rating","WM/BeatsPerMinute":"bpm","WM/Mood":"mood","WM/Media":"media","WM/CatalogNo":"catalognumber","MusicBrainz/Album Status":"releasestatus","MusicBrainz/Album Type":"releasetype","MusicBrainz/Album Release Country":"releasecountry","WM/Script":"script","WM/Language":"language",Copyright:"copyright",LICENSE:"license","WM/EncodedBy":"encodedby","WM/EncodingSettings":"encodersettings","WM/Barcode":"barcode","WM/ISRC":"isrc","MusicBrainz/Track Id":"musicbrainz_recordingid","MusicBrainz/Release Track Id":"musicbrainz_trackid","MusicBrainz/Album Id":"musicbrainz_albumid","MusicBrainz/Artist Id":"musicbrainz_artistid","MusicBrainz/Album Artist Id":"musicbrainz_albumartistid","MusicBrainz/Release Group Id":"musicbrainz_releasegroupid","MusicBrainz/Work Id":"musicbrainz_workid","MusicBrainz/TRM Id":"musicbrainz_trmid","MusicBrainz/Disc Id":"musicbrainz_discid","Acoustid/Id":"acoustid_id","Acoustid/Fingerprint":"acoustid_fingerprint","MusicIP/PUID":"musicip_puid","WM/ARTISTS":"artists","WM/InitialKey":"key",ASIN:"asin","WM/Work":"work","WM/AuthorURL":"website","WM/Picture":"picture"};class n extends i.CommonTagMapper{static toRating(e){return{rating:parseFloat(e+1)/5}}constructor(){super(["asf"],r)}postMap(e){if("WM/SharedUserRating"===e.id){let t=e.id.split(":");e.value=n.toRating(e.value),e.id=t[0]}}}t.AsfTagMapper=n},82252:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.AsfUtil=void 0;let r=a(20036),n=a(83769);class s{static getParserForAttr(e){return s.attributeParsers[e]}static parseUnicodeAttr(e){return n.stripNulls(n.decodeString(e,"utf16le"))}static parseByteArrayAttr(e){return i.from(e)}static parseBoolAttr(e,t=0){return 1===s.parseWordAttr(e,t)}static parseDWordAttr(e,t=0){return e.readUInt32LE(t)}static parseQWordAttr(e,t=0){return r.UINT64_LE.get(e,t)}static parseWordAttr(e,t=0){return e.readUInt16LE(t)}}s.attributeParsers=[s.parseUnicodeAttr,s.parseByteArrayAttr,s.parseBoolAttr,s.parseDWordAttr,s.parseQWordAttr,s.parseWordAttr,s.parseByteArrayAttr],t.AsfUtil=s},48054:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0});class r{static fromBin(e,t=0){return new r(this.decode(e,t))}static decode(e,t=0){return(e.readUInt32LE(t).toString(16)+"-"+e.readUInt16LE(t+4).toString(16)+"-"+e.readUInt16LE(t+6).toString(16)+"-"+e.readUInt16BE(t+8).toString(16)+"-"+e.slice(t+10,t+16).toString("hex")).toUpperCase()}static decodeMediaType(e){switch(e.str){case r.AudioMedia.str:return"audio";case r.VideoMedia.str:return"video";case r.CommandMedia.str:return"command";case r.Degradable_JPEG_Media.str:return"degradable-jpeg";case r.FileTransferMedia.str:return"file-transfer";case r.BinaryMedia.str:return"binary"}}static encode(e){let t=i.alloc(16);return t.writeUInt32LE(parseInt(e.slice(0,8),16),0),t.writeUInt16LE(parseInt(e.slice(9,13),16),4),t.writeUInt16LE(parseInt(e.slice(14,18),16),6),i.from(e.slice(19,23),"hex").copy(t,8),i.from(e.slice(24),"hex").copy(t,10),t}constructor(e){this.str=e}equals(e){return this.str===e.str}toBin(){return r.encode(this.str)}}r.HeaderObject=new r("75B22630-668E-11CF-A6D9-00AA0062CE6C"),r.DataObject=new r("75B22636-668E-11CF-A6D9-00AA0062CE6C"),r.SimpleIndexObject=new r("33000890-E5B1-11CF-89F4-00A0C90349CB"),r.IndexObject=new r("D6E229D3-35DA-11D1-9034-00A0C90349BE"),r.MediaObjectIndexObject=new r("FEB103F8-12AD-4C64-840F-2A1D2F7AD48C"),r.TimecodeIndexObject=new r("3CB73FD0-0C4A-4803-953D-EDF7B6228F0C"),r.FilePropertiesObject=new r("8CABDCA1-A947-11CF-8EE4-00C00C205365"),r.StreamPropertiesObject=new r("B7DC0791-A9B7-11CF-8EE6-00C00C205365"),r.HeaderExtensionObject=new r("5FBF03B5-A92E-11CF-8EE3-00C00C205365"),r.CodecListObject=new r("86D15240-311D-11D0-A3A4-00A0C90348F6"),r.ScriptCommandObject=new r("1EFB1A30-0B62-11D0-A39B-00A0C90348F6"),r.MarkerObject=new r("F487CD01-A951-11CF-8EE6-00C00C205365"),r.BitrateMutualExclusionObject=new r("D6E229DC-35DA-11D1-9034-00A0C90349BE"),r.ErrorCorrectionObject=new r("75B22635-668E-11CF-A6D9-00AA0062CE6C"),r.ContentDescriptionObject=new r("75B22633-668E-11CF-A6D9-00AA0062CE6C"),r.ExtendedContentDescriptionObject=new r("D2D0A440-E307-11D2-97F0-00A0C95EA850"),r.ContentBrandingObject=new r("2211B3FA-BD23-11D2-B4B7-00A0C955FC6E"),r.StreamBitratePropertiesObject=new r("7BF875CE-468D-11D1-8D82-006097C9A2B2"),r.ContentEncryptionObject=new r("2211B3FB-BD23-11D2-B4B7-00A0C955FC6E"),r.ExtendedContentEncryptionObject=new r("298AE614-2622-4C17-B935-DAE07EE9289C"),r.DigitalSignatureObject=new r("2211B3FC-BD23-11D2-B4B7-00A0C955FC6E"),r.PaddingObject=new r("1806D474-CADF-4509-A4BA-9AABCB96AAE8"),r.ExtendedStreamPropertiesObject=new r("14E6A5CB-C672-4332-8399-A96952065B5A"),r.AdvancedMutualExclusionObject=new r("A08649CF-4775-4670-8A16-6E35357566CD"),r.GroupMutualExclusionObject=new r("D1465A40-5A79-4338-B71B-E36B8FD6C249"),r.StreamPrioritizationObject=new r("D4FED15B-88D3-454F-81F0-ED5C45999E24"),r.BandwidthSharingObject=new r("A69609E6-517B-11D2-B6AF-00C04FD908E9"),r.LanguageListObject=new r("7C4346A9-EFE0-4BFC-B229-393EDE415C85"),r.MetadataObject=new r("C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA"),r.MetadataLibraryObject=new r("44231C94-9498-49D1-A141-1D134E457054"),r.IndexParametersObject=new r("D6E229DF-35DA-11D1-9034-00A0C90349BE"),r.MediaObjectIndexParametersObject=new r("6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7"),r.TimecodeIndexParametersObject=new r("F55E496D-9797-4B5D-8C8B-604DFE9BFB24"),r.CompatibilityObject=new r("26F18B5D-4584-47EC-9F5F-0E651F0452C9"),r.AdvancedContentEncryptionObject=new r("43058533-6981-49E6-9B74-AD12CB86D58C"),r.AudioMedia=new r("F8699E40-5B4D-11CF-A8FD-00805F5C442B"),r.VideoMedia=new r("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B"),r.CommandMedia=new r("59DACFC0-59E6-11D0-A3AC-00A0C90348F6"),r.JFIF_Media=new r("B61BE100-5B4E-11CF-A8FD-00805F5C442B"),r.Degradable_JPEG_Media=new r("35907DE0-E415-11CF-A917-00805F5C442B"),r.FileTransferMedia=new r("91BD222C-F21C-497A-8B6D-5AA86BFC0185"),r.BinaryMedia=new r("3AFB65E2-47EF-40F2-AC2C-70A90D71D343"),r.ASF_Index_Placeholder_Object=new r("D9AADE20-7C17-4F9C-BC28-8555DD98E2A2"),t.default=r},87805:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BasicParser=void 0;class a{init(e,t,a){return this.metadata=e,this.tokenizer=t,this.options=a,this}}t.BasicParser=a},24132:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CaseInsensitiveTagMap=void 0;let i=a(89918);class r extends i.CommonTagMapper{constructor(e,t){let a={};for(let e of Object.keys(t))a[e.toUpperCase()]=t[e];super(e,a)}getCommonName(e){return this.tagMap[e.toUpperCase()]}}t.CaseInsensitiveTagMap=r},96592:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CombinedTagMapper=void 0;let i=a(12939),r=a(64005),n=a(79004),s=a(37183),o=a(48414),l=a(37852),c=a(29860),d=a(35756),u=a(85481),m=a(8815);class p{constructor(){this.tagMappers={},[new i.ID3v1TagMapper,new s.ID3v22TagMapper,new r.ID3v24TagMapper,new l.MP4TagMapper,new l.MP4TagMapper,new c.VorbisTagMapper,new o.APEv2TagMapper,new n.AsfTagMapper,new d.RiffInfoTagMapper,new u.MatroskaTagMapper,new m.AiffTagMapper].forEach(e=>{this.registerTagMapper(e)})}mapTag(e,t,a){if(this.tagMappers[e])return this.tagMappers[e].mapGenericTag(t,a);throw Error("No generic tag mapper defined for tag-format: "+e)}registerTagMapper(e){for(let t of e.tagTypes)this.tagMappers[t]=e}}t.CombinedTagMapper=p},28049:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.FourCcToken=void 0;let r=a(83769),n=/^[\x21-\x7e©][\x20-\x7e\x00()]{3}/;t.FourCcToken={len:4,get:(e,a)=>{let i=e.toString("binary",a,a+t.FourCcToken.len);if(!i.match(n))throw Error(`FourCC contains invalid characters: ${r.a2hex(i)} "${i}"`);return i},put:(e,t,a)=>{let r=i.from(a,"binary");if(4!==r.length)throw Error("Invalid length");return r.copy(e,t)}}},89918:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommonTagMapper=void 0;class a{static toIntOrNull(e){let t=parseInt(e,10);return isNaN(t)?null:t}static normalizeTrack(e){let t=e.toString().split("/");return{no:parseInt(t[0],10)||null,of:parseInt(t[1],10)||null}}constructor(e,t){this.tagTypes=e,this.tagMap=t}mapGenericTag(e,t){e={id:e.id,value:e.value},this.postMap(e,t);let a=this.getCommonName(e.id);return a?{id:a,value:e.value}:null}getCommonName(e){return this.tagMap[e]}postMap(e,t){}}a.maxRatingScore=1,t.CommonTagMapper=a},40103:function(e,t){"use strict";function a(e){return t.commonTags.hasOwnProperty(e)&&!t.commonTags[e].multiple}function i(e){return!t.commonTags[e].multiple||t.commonTags[e].unique}Object.defineProperty(t,"__esModule",{value:!0}),t.isUnique=t.isSingleton=t.commonTags=void 0,t.commonTags={year:{multiple:!1},track:{multiple:!1},disk:{multiple:!1},title:{multiple:!1},artist:{multiple:!1},artists:{multiple:!0,unique:!0},albumartist:{multiple:!1},album:{multiple:!1},date:{multiple:!1},originaldate:{multiple:!1},originalyear:{multiple:!1},comment:{multiple:!0,unique:!1},genre:{multiple:!0,unique:!0},picture:{multiple:!0,unique:!0},composer:{multiple:!0,unique:!0},lyrics:{multiple:!0,unique:!1},albumsort:{multiple:!1,unique:!0},titlesort:{multiple:!1,unique:!0},work:{multiple:!1,unique:!0},artistsort:{multiple:!1,unique:!0},albumartistsort:{multiple:!1,unique:!0},composersort:{multiple:!1,unique:!0},lyricist:{multiple:!0,unique:!0},writer:{multiple:!0,unique:!0},conductor:{multiple:!0,unique:!0},remixer:{multiple:!0,unique:!0},arranger:{multiple:!0,unique:!0},engineer:{multiple:!0,unique:!0},producer:{multiple:!0,unique:!0},technician:{multiple:!0,unique:!0},djmixer:{multiple:!0,unique:!0},mixer:{multiple:!0,unique:!0},label:{multiple:!0,unique:!0},grouping:{multiple:!1},subtitle:{multiple:!0},discsubtitle:{multiple:!1},totaltracks:{multiple:!1},totaldiscs:{multiple:!1},compilation:{multiple:!1},rating:{multiple:!0},bpm:{multiple:!1},mood:{multiple:!1},media:{multiple:!1},catalognumber:{multiple:!0,unique:!0},tvShow:{multiple:!1},tvShowSort:{multiple:!1},tvSeason:{multiple:!1},tvEpisode:{multiple:!1},tvEpisodeId:{multiple:!1},tvNetwork:{multiple:!1},podcast:{multiple:!1},podcasturl:{multiple:!1},releasestatus:{multiple:!1},releasetype:{multiple:!0},releasecountry:{multiple:!1},script:{multiple:!1},language:{multiple:!1},copyright:{multiple:!1},license:{multiple:!1},encodedby:{multiple:!1},encodersettings:{multiple:!1},gapless:{multiple:!1},barcode:{multiple:!1},isrc:{multiple:!0},asin:{multiple:!1},musicbrainz_recordingid:{multiple:!1},musicbrainz_trackid:{multiple:!1},musicbrainz_albumid:{multiple:!1},musicbrainz_artistid:{multiple:!0},musicbrainz_albumartistid:{multiple:!0},musicbrainz_releasegroupid:{multiple:!1},musicbrainz_workid:{multiple:!1},musicbrainz_trmid:{multiple:!1},musicbrainz_discid:{multiple:!1},acoustid_id:{multiple:!1},acoustid_fingerprint:{multiple:!1},musicip_puid:{multiple:!1},musicip_fingerprint:{multiple:!1},website:{multiple:!1},"performer:instrument":{multiple:!0,unique:!0},averageLevel:{multiple:!1},peakLevel:{multiple:!1},notes:{multiple:!0,unique:!1},key:{multiple:!1},originalalbum:{multiple:!1},originalartist:{multiple:!1},discogs_artist_id:{multiple:!0,unique:!0},discogs_release_id:{multiple:!1},discogs_label_id:{multiple:!1},discogs_master_release_id:{multiple:!1},discogs_votes:{multiple:!1},discogs_rating:{multiple:!1},replaygain_track_peak:{multiple:!1},replaygain_track_gain:{multiple:!1},replaygain_album_peak:{multiple:!1},replaygain_album_gain:{multiple:!1},replaygain_track_minmax:{multiple:!1},replaygain_album_minmax:{multiple:!1},replaygain_undo:{multiple:!1},description:{multiple:!0},longDescription:{multiple:!1},category:{multiple:!0},hdVideo:{multiple:!1},keywords:{multiple:!0},movement:{multiple:!1},movementIndex:{multiple:!1},movementTotal:{multiple:!1},podcastId:{multiple:!1},showMovement:{multiple:!1},stik:{multiple:!1}},t.isSingleton=a,t.isUnique=i},27584:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinArtists=t.MetadataCollector=void 0;let i=a(6032),r=a(11227),n=a(40103),s=a(96592),o=a(89918),l=a(83769),c=a(72933),d=(0,r.default)("music-metadata:collector"),u=["matroska","APEv2","vorbis","ID3v2.4","ID3v2.3","ID3v2.2","exif","asf","iTunes","AIFF","ID3v1"];class m{constructor(e){this.opts=e,this.format={tagTypes:[],trackInfo:[]},this.native={},this.common={track:{no:null,of:null},disk:{no:null,of:null},movementIndex:{}},this.quality={warnings:[]},this.commonOrigin={},this.originPriority={},this.tagMapper=new s.CombinedTagMapper;let t=1;for(let e of u)this.originPriority[e]=t++;this.originPriority.artificial=500,this.originPriority.id3v1=600}hasAny(){return Object.keys(this.native).length>0}addStreamInfo(e){d(`streamInfo: type=${i.TrackType[e.type]}, codec=${e.codecName}`),this.format.trackInfo.push(e)}setFormat(e,t){d(`format: ${e} = ${t}`),this.format[e]=t,this.opts.observer&&this.opts.observer({metadata:this,tag:{type:"format",id:e,value:t}})}addTag(e,t,a){d(`tag ${e}.${t} = ${a}`),this.native[e]||(this.format.tagTypes.push(e),this.native[e]=[]),this.native[e].push({id:t,value:a}),this.toCommon(e,t,a)}addWarning(e){this.quality.warnings.push({message:e})}postMap(e,t){switch(t.id){case"artist":if(this.commonOrigin.artist===this.originPriority[e])return this.postMap("artificial",{id:"artists",value:t.value});this.common.artists||this.setGenericTag("artificial",{id:"artists",value:t.value});break;case"artists":if((!this.common.artist||this.commonOrigin.artist===this.originPriority.artificial)&&(!this.common.artists||-1===this.common.artists.indexOf(t.value))){let e={id:"artist",value:p((this.common.artists||[]).concat([t.value]))};this.setGenericTag("artificial",e)}break;case"picture":this.postFixPicture(t.value).then(a=>{null!==a&&(t.value=a,this.setGenericTag(e,t))});return;case"totaltracks":this.common.track.of=o.CommonTagMapper.toIntOrNull(t.value);return;case"totaldiscs":this.common.disk.of=o.CommonTagMapper.toIntOrNull(t.value);return;case"movementTotal":this.common.movementIndex.of=o.CommonTagMapper.toIntOrNull(t.value);return;case"track":case"disk":case"movementIndex":let a=this.common[t.id].of;this.common[t.id]=o.CommonTagMapper.normalizeTrack(t.value),this.common[t.id].of=null!=a?a:this.common[t.id].of;return;case"bpm":case"year":case"originalyear":t.value=parseInt(t.value,10);break;case"date":let i=parseInt(t.value.substr(0,4),10);isNaN(i)||(this.common.year=i);break;case"discogs_label_id":case"discogs_release_id":case"discogs_master_release_id":case"discogs_artist_id":case"discogs_votes":t.value="string"==typeof t.value?parseInt(t.value,10):t.value;break;case"replaygain_track_gain":case"replaygain_track_peak":case"replaygain_album_gain":case"replaygain_album_peak":t.value=(0,l.toRatio)(t.value);break;case"replaygain_track_minmax":t.value=t.value.split(",").map(e=>parseInt(e,10));break;case"replaygain_undo":let r=t.value.split(",").map(e=>parseInt(e,10));t.value={leftChannel:r[0],rightChannel:r[1]};break;case"gapless":case"compilation":case"podcast":case"showMovement":t.value="1"===t.value||1===t.value;break;case"isrc":if(this.common[t.id]&&-1!==this.common[t.id].indexOf(t.value))return}null!==t.value&&this.setGenericTag(e,t)}toCommonMetadata(){return{format:this.format,native:this.native,quality:this.quality,common:this.common}}async postFixPicture(e){if(e.data&&e.data.length>0){if(!e.format){let t=await c.fromBuffer(e.data);if(!t)return null;e.format=t.mime}return e.format=e.format.toLocaleLowerCase(),"image/jpg"===e.format&&(e.format="image/jpeg"),e}return this.addWarning("Empty picture tag found"),null}toCommon(e,t,a){let i={id:t,value:a},r=this.tagMapper.mapTag(e,i,this);r&&this.postMap(e,r)}setGenericTag(e,t){d(`common.${t.id} = ${t.value}`);let a=this.commonOrigin[t.id]||1e3,i=this.originPriority[e];if((0,n.isSingleton)(t.id)){if(!(i<=a))return d(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);this.common[t.id]=t.value,this.commonOrigin[t.id]=i}else if(i===a)(0,n.isUnique)(t.id)&&-1!==this.common[t.id].indexOf(t.value)?d(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`):this.common[t.id].push(t.value);else{if(!(i<a))return d(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);this.common[t.id]=[t.value],this.commonOrigin[t.id]=i}this.opts.observer&&this.opts.observer({metadata:this,tag:{type:"common",id:t.id,value:t.value}})}}function p(e){return e.length>2?e.slice(0,e.length-1).join(", ")+" & "+e[e.length-1]:e.join(" & ")}t.MetadataCollector=m,t.joinArtists=p},89461:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RandomUint8ArrayReader=void 0;class a{constructor(e){this.uint8Array=e,this.fileSize=e.length}async randomRead(e,t,a,i){return e.set(this.uint8Array.subarray(i,i+a),t),a}}t.RandomUint8ArrayReader=a},83769:function(e,t,a){"use strict";var i=a(48764).Buffer;function r(e,t,a){return(e[t]&1<<a)!=0}function n(e,t,a,i){let r=t;if("utf16le"===i){for(;0!==e[r]||0!==e[r+1];){if(r>=a)return a;r+=2}return r}for(;0!==e[r];){if(r>=a)return a;r++}return r}function s(e){let t=e.indexOf("\0");return -1===t?e:e.substr(0,t)}function o(e){let t=e.length;if((1&t)!=0)throw Error("Buffer length must be even");for(let a=0;a<t;a+=2){let t=e[a];e[a]=e[a+1],e[a+1]=t}return e}function l(e,t){if(255===e[0]&&254===e[1])return l(e.subarray(2),t);if("utf16le"===t&&254===e[0]&&255===e[1]){if((1&e.length)!=0)throw Error("Expected even number of octets for 16-bit unicode string");return l(o(e),t)}return i.from(e).toString(t)}function c(e){return e=(e=e.replace(/^\x00+/g,"")).replace(/\x00+$/g,"")}function d(e,t,a,i){let r=t+~~(a/8),n=a%8,s=e[r];s&=255>>n;let o=8-n,l=i-o;return l<0?s>>=8-n-i:l>0&&(s<<=l,s|=d(e,t,a+o,l)),s}function u(e,t,a){return 1===d(e,t,a,1)}function m(e){let t=[];for(let a=0,i=e.length;a<i;a++){let i=Number(e.charCodeAt(a)).toString(16);t.push(1===i.length?"0"+i:i)}return t.join(" ")}function p(e){return 10*Math.log10(e)}function f(e){return Math.pow(10,e/10)}function g(e){let t=e.split(" ").map(e=>e.trim().toLowerCase());if(t.length>=1){let e=parseFloat(t[0]);return 2===t.length&&"db"===t[1]?{dB:e,ratio:f(e)}:{dB:p(e),ratio:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.toRatio=t.dbToRatio=t.ratioToDb=t.a2hex=t.isBitSet=t.getBitAllignedNumber=t.stripNulls=t.decodeString=t.trimRightNull=t.findZero=t.getBit=void 0,t.getBit=r,t.findZero=n,t.trimRightNull=s,t.decodeString=l,t.stripNulls=c,t.getBitAllignedNumber=d,t.isBitSet=u,t.a2hex=m,t.ratioToDb=p,t.dbToRatio=f,t.toRatio=g},80523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scanAppendingHeaders=t.selectCover=t.ratingToStars=t.orderTags=t.parseFromTokenizer=t.parseBuffer=t.parseStream=void 0;let i=a(35849),r=a(83275),n=a(89461),s=a(6742),o=a(62282),l=a(19941);function c(e,t,a={}){return u(i.fromStream(e,"string"==typeof t?{mimeType:t}:t),a)}async function d(e,t,a={}){let r=new n.RandomUint8ArrayReader(e);return await g(r,a),u(i.fromBuffer(e,"string"==typeof t?{mimeType:t}:t),a)}function u(e,t){return r.ParserFactory.parseOnContentType(e,t)}function m(e){let t={};for(let a of e)(t[a.id]=t[a.id]||[]).push(a.value);return t}function p(e){return void 0===e?0:1+Math.round(4*e)}function f(e){return e?e.reduce((e,t)=>t.name&&t.name.toLowerCase() in["front","cover","cover (front)"]?t:e):null}async function g(e,t={}){let a=e.fileSize;await (0,o.hasID3v1Header)(e)&&(a-=128,a-=await (0,l.getLyricsHeaderLength)(e)),t.apeHeader=await s.APEv2Parser.findApeFooterOffset(e,a)}t.parseStream=c,t.parseBuffer=d,t.parseFromTokenizer=u,t.orderTags=m,t.ratingToStars=p,t.selectCover=f,t.scanAppendingHeaders=g},16789:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DsdiffParser=void 0;let i=a(20036),r=a(11227),n=a(35849),s=a(28049),o=a(87805),l=a(8928),c=a(29187),d=(0,r.default)("music-metadata:parser:aiff");class u extends o.BasicParser{async parse(){let e=await this.tokenizer.readToken(c.ChunkHeader64);if("FRM8"!==e.chunkID)throw Error("Unexpected chunk-ID");let t=(await this.tokenizer.readToken(s.FourCcToken)).trim();if("DSD"===t)return this.metadata.setFormat("container",`DSDIFF/${t}`),this.metadata.setFormat("lossless",!0),this.readFmt8Chunks(e.chunkSize-BigInt(s.FourCcToken.len));throw Error(`Unsupported DSDIFF type: ${t}`)}async readFmt8Chunks(e){for(;e>=c.ChunkHeader64.len;){let t=await this.tokenizer.readToken(c.ChunkHeader64);d(`Chunk id=${t.chunkID}`),await this.readData(t),e-=BigInt(c.ChunkHeader64.len)+t.chunkSize}}async readData(e){d(`Reading data of chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);let t=this.tokenizer.position;switch(e.chunkID.trim()){case"FVER":let a=await this.tokenizer.readToken(i.UINT32_LE);d(`DSDIFF version=${a}`);break;case"PROP":if("SND "!==await this.tokenizer.readToken(s.FourCcToken))throw Error("Unexpected PROP-chunk ID");await this.handleSoundPropertyChunks(e.chunkSize-BigInt(s.FourCcToken.len));break;case"ID3":let r=await this.tokenizer.readToken(new i.Uint8ArrayType(Number(e.chunkSize))),o=n.fromBuffer(r);await new l.ID3v2Parser().parse(this.metadata,o,this.options);break;default:d(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);break;case"DSD":this.metadata.setFormat("numberOfSamples",Number(e.chunkSize*BigInt(8)/BigInt(this.metadata.format.numberOfChannels))),this.metadata.setFormat("duration",this.metadata.format.numberOfSamples/this.metadata.format.sampleRate)}let c=e.chunkSize-BigInt(this.tokenizer.position-t);c>0&&(d(`After Parsing chunk, remaining ${c} bytes`),await this.tokenizer.ignore(Number(c)))}async handleSoundPropertyChunks(e){for(d(`Parsing sound-property-chunks, remainingSize=${e}`);e>0;){let t=await this.tokenizer.readToken(c.ChunkHeader64);d(`Sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`);let a=this.tokenizer.position;switch(t.chunkID.trim()){case"FS":let r=await this.tokenizer.readToken(i.UINT32_BE);this.metadata.setFormat("sampleRate",r);break;case"CHNL":let n=await this.tokenizer.readToken(i.UINT16_BE);this.metadata.setFormat("numberOfChannels",n),await this.handleChannelChunks(t.chunkSize-BigInt(i.UINT16_BE.len));break;case"CMPR":let o=(await this.tokenizer.readToken(s.FourCcToken)).trim(),l=await this.tokenizer.readToken(i.UINT8),u=await this.tokenizer.readToken(new i.StringType(l,"ascii"));"DSD"===o&&(this.metadata.setFormat("lossless",!0),this.metadata.setFormat("bitsPerSample",1)),this.metadata.setFormat("codec",`${o} (${u})`);break;case"ABSS":let m=await this.tokenizer.readToken(i.UINT16_BE),p=await this.tokenizer.readToken(i.UINT8),f=await this.tokenizer.readToken(i.UINT8),g=await this.tokenizer.readToken(i.UINT32_BE);d(`ABSS ${m}:${p}:${f}.${g}`);break;case"LSCO":let h=await this.tokenizer.readToken(i.UINT16_BE);d(`LSCO lsConfig=${h}`);break;default:d(`Unknown sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`),await this.tokenizer.ignore(Number(t.chunkSize))}let T=t.chunkSize-BigInt(this.tokenizer.position-a);T>0&&(d(`After Parsing sound-property-chunk ${t.chunkSize}, remaining ${T} bytes`),await this.tokenizer.ignore(Number(T))),e-=BigInt(c.ChunkHeader64.len)+t.chunkSize,d(`Parsing sound-property-chunks, remainingSize=${e}`)}if(this.metadata.format.lossless&&this.metadata.format.sampleRate&&this.metadata.format.numberOfChannels&&this.metadata.format.bitsPerSample){let e=this.metadata.format.sampleRate*this.metadata.format.numberOfChannels*this.metadata.format.bitsPerSample;this.metadata.setFormat("bitrate",e)}}async handleChannelChunks(e){d(`Parsing channel-chunks, remainingSize=${e}`);let t=[];for(;e>=s.FourCcToken.len;){let a=await this.tokenizer.readToken(s.FourCcToken);d(`Channel[ID=${a}]`),t.push(a),e-=BigInt(s.FourCcToken.len)}return d(`Channels: ${t.join(", ")}`),t}}t.DsdiffParser=u},29187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkHeader64=void 0;let i=a(20036),r=a(28049);t.ChunkHeader64={len:12,get:(e,t)=>({chunkID:r.FourCcToken.get(e,t),chunkSize:i.INT64_BE.get(e,t+4)})}},14101:function(e,t,a){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.FormatChunk=t.ChannelType=t.DsdChunk=t.ChunkHeader=void 0;let r=a(20036),n=a(28049);t.ChunkHeader={len:12,get:(e,t)=>({id:n.FourCcToken.get(e,t),size:r.UINT64_LE.get(e,t+4)})},t.DsdChunk={len:16,get:(e,t)=>({fileSize:r.INT64_LE.get(e,t),metadataPointer:r.INT64_LE.get(e,t+8)})},function(e){e[e.mono=1]="mono",e[e.stereo=2]="stereo",e[e.channels=3]="channels",e[e.quad=4]="quad",e[e["4 channels"]=5]="4 channels",e[e["5 channels"]=6]="5 channels",e[e["5.1 channels"]=7]="5.1 channels"}(i=t.ChannelType||(t.ChannelType={})),t.FormatChunk={len:40,get:(e,t)=>({formatVersion:r.INT32_LE.get(e,t),formatID:r.INT32_LE.get(e,t+4),channelType:r.INT32_LE.get(e,t+8),channelNum:r.INT32_LE.get(e,t+12),samplingFrequency:r.INT32_LE.get(e,t+16),bitsPerSample:r.INT32_LE.get(e,t+20),sampleCount:r.INT64_LE.get(e,t+24),blockSizePerChannel:r.INT32_LE.get(e,t+32)})}},61533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DsfParser=void 0;let i=a(11227),r=a(25159),n=a(14101),s=a(8928),o=(0,i.default)("music-metadata:parser:DSF");class l extends r.AbstractID3Parser{async postId3v2Parse(){let e=this.tokenizer.position,t=await this.tokenizer.readToken(n.ChunkHeader);if("DSD "!==t.id)throw Error("Invalid chunk signature");this.metadata.setFormat("container","DSF"),this.metadata.setFormat("lossless",!0);let a=await this.tokenizer.readToken(n.DsdChunk);if(a.metadataPointer!==BigInt(0))return o(`expect ID3v2 at offset=${a.metadataPointer}`),await this.parseChunks(a.fileSize-t.size),await this.tokenizer.ignore(Number(a.metadataPointer)-this.tokenizer.position-e),new s.ID3v2Parser().parse(this.metadata,this.tokenizer,this.options);o("No ID3v2 tag present")}async parseChunks(e){for(;e>=n.ChunkHeader.len;){let t=await this.tokenizer.readToken(n.ChunkHeader);if(o(`Parsing chunk name=${t.id} size=${t.size}`),"fmt "===t.id){let e=await this.tokenizer.readToken(n.FormatChunk);this.metadata.setFormat("numberOfChannels",e.channelNum),this.metadata.setFormat("sampleRate",e.samplingFrequency),this.metadata.setFormat("bitsPerSample",e.bitsPerSample),this.metadata.setFormat("numberOfSamples",e.sampleCount),this.metadata.setFormat("duration",Number(e.sampleCount)/e.samplingFrequency);let t=e.bitsPerSample*e.samplingFrequency*e.channelNum;this.metadata.setFormat("bitrate",t);return}this.tokenizer.ignore(Number(t.size)-n.ChunkHeader.len),e-=t.size}}}t.DsfParser=l},70498:function(e,t,a){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.FlacParser=void 0;let r=a(20036),n=a(11227),s=a(83769),o=a(2127),l=a(25159),c=a(28049),d=a(54210),u=a(441),m=(0,n.default)("music-metadata:parser:FLAC");!function(e){e[e.STREAMINFO=0]="STREAMINFO",e[e.PADDING=1]="PADDING",e[e.APPLICATION=2]="APPLICATION",e[e.SEEKTABLE=3]="SEEKTABLE",e[e.VORBIS_COMMENT=4]="VORBIS_COMMENT",e[e.CUESHEET=5]="CUESHEET",e[e.PICTURE=6]="PICTURE"}(i||(i={}));class p extends l.AbstractID3Parser{constructor(){super(...arguments),this.padding=0}init(e,t,a){return super.init(e,t,a),this.vorbisParser=new d.VorbisParser(e,a),this}async postId3v2Parse(){let e;if("fLaC"!==(await this.tokenizer.readToken(c.FourCcToken)).toString())throw Error("Invalid FLAC preamble");do e=await this.tokenizer.readToken(f.BlockHeader),await this.parseDataBlock(e);while(!e.lastBlock);if(this.tokenizer.fileInfo.size&&this.metadata.format.duration){let e=this.tokenizer.fileInfo.size-this.tokenizer.position;this.metadata.setFormat("bitrate",8*e/this.metadata.format.duration)}}parseDataBlock(e){switch(m(`blockHeader type=${e.type}, length=${e.length}`),e.type){case i.STREAMINFO:return this.parseBlockStreamInfo(e.length);case i.PADDING:this.padding+=e.length;break;case i.APPLICATION:case i.SEEKTABLE:break;case i.VORBIS_COMMENT:return this.parseComment(e.length);case i.CUESHEET:break;case i.PICTURE:return this.parsePicture(e.length).then();default:this.metadata.addWarning("Unknown block type: "+e.type)}return this.tokenizer.ignore(e.length).then()}async parseBlockStreamInfo(e){if(e!==f.BlockStreamInfo.len)throw Error("Unexpected block-stream-info length");let t=await this.tokenizer.readToken(f.BlockStreamInfo);this.metadata.setFormat("container","FLAC"),this.metadata.setFormat("codec","FLAC"),this.metadata.setFormat("lossless",!0),this.metadata.setFormat("numberOfChannels",t.channels),this.metadata.setFormat("bitsPerSample",t.bitsPerSample),this.metadata.setFormat("sampleRate",t.sampleRate),t.totalSamples>0&&this.metadata.setFormat("duration",t.totalSamples/t.sampleRate)}async parseComment(e){let t=await this.tokenizer.readToken(new r.Uint8ArrayType(e)),a=new u.VorbisDecoder(t,0);a.readStringUtf8();let i=a.readInt32();for(let e=0;e<i;e++){let e=a.parseUserComment();this.vorbisParser.addTag(e.key,e.value)}}async parsePicture(e){if(this.options.skipCovers)return this.tokenizer.ignore(e);{let t=await this.tokenizer.readToken(new o.VorbisPictureToken(e));this.vorbisParser.addTag("METADATA_BLOCK_PICTURE",t)}}}t.FlacParser=p;class f{}f.BlockHeader={len:4,get:(e,t)=>({lastBlock:s.getBit(e,t,7),type:s.getBitAllignedNumber(e,t,1,7),length:r.UINT24_BE.get(e,t+1)})},f.BlockStreamInfo={len:34,get:(e,t)=>({minimumBlockSize:r.UINT16_BE.get(e,t),maximumBlockSize:r.UINT16_BE.get(e,t+2)/1e3,minimumFrameSize:r.UINT24_BE.get(e,t+4),maximumFrameSize:r.UINT24_BE.get(e,t+7),sampleRate:r.UINT24_BE.get(e,t+10)>>4,channels:s.getBitAllignedNumber(e,t+12,4,3)+1,bitsPerSample:s.getBitAllignedNumber(e,t+12,7,5)+1,totalSamples:s.getBitAllignedNumber(e,t+13,4,36),fileMD5:new r.Uint8ArrayType(16).get(e,t+18)})}},62282:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.hasID3v1Header=t.ID3v1Parser=t.Genres=void 0;let r=a(11227),n=a(20036),s=a(83769),o=a(87805),l=a(6742),c=(0,r.default)("music-metadata:parser:ID3v1");t.Genres=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","Alt. Rock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop/Funk","Jungle","Native American","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk/Rock","National Folk","Swing","Fast-Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","Synthpop","Abstract","Art Rock","Baroque","Bhangra","Big Beat","Breakbeat","Chillout","Downtempo","Dub","EBM","Eclectic","Electro","Electroclash","Emo","Experimental","Garage","Global","IDM","Illbient","Industro-Goth","Jam Band","Krautrock","Leftfield","Lounge","Math Rock","New Romantic","Nu-Breakz","Post-Punk","Post-Rock","Psytrance","Shoegaze","Space Rock","Trop Rock","World Music","Neoclassical","Audiobook","Audio Theatre","Neue Deutsche Welle","Podcast","Indie Rock","G-Funk","Dubstep","Garage Rock","Psybient"];let d={len:128,get:(e,t)=>{let a=new u(3).get(e,t);return"TAG"===a?{header:a,title:new u(30).get(e,t+3),artist:new u(30).get(e,t+33),album:new u(30).get(e,t+63),year:new u(4).get(e,t+93),comment:new u(28).get(e,t+97),zeroByte:n.UINT8.get(e,t+127),track:n.UINT8.get(e,t+126),genre:n.UINT8.get(e,t+127)}:null}};class u extends n.StringType{constructor(e){super(e,"binary")}get(e,t){let a=super.get(e,t);return(a=(a=s.trimRightNull(a)).trim()).length>0?a:void 0}}class m extends o.BasicParser{static getGenre(e){if(e<t.Genres.length)return t.Genres[e]}async parse(){if(!this.tokenizer.fileInfo.size){c("Skip checking for ID3v1 because the file-size is unknown");return}if(this.options.apeHeader){this.tokenizer.ignore(this.options.apeHeader.offset-this.tokenizer.position);let e=new l.APEv2Parser;e.init(this.metadata,this.tokenizer,this.options),await e.parseTags(this.options.apeHeader.footer)}let e=this.tokenizer.fileInfo.size-d.len;if(this.tokenizer.position>e){c("Already consumed the last 128 bytes");return}let t=await this.tokenizer.readToken(d,e);if(t){for(let e of(c("ID3v1 header found at: pos=%s",this.tokenizer.fileInfo.size-d.len),["title","artist","album","comment","track","year"]))t[e]&&""!==t[e]&&this.addTag(e,t[e]);let e=m.getGenre(t.genre);e&&this.addTag("genre",e)}else c("ID3v1 header not found at: pos=%s",this.tokenizer.fileInfo.size-d.len)}addTag(e,t){this.metadata.addTag("ID3v1",e,t)}}async function p(e){if(e.fileSize>=128){let t=i.alloc(3);return await e.randomRead(t,0,t.length,e.fileSize-128),"TAG"===t.toString("binary")}return!1}t.ID3v1Parser=m,t.hasID3v1Header=p},12939:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ID3v1TagMapper=void 0;let i=a(89918),r={title:"title",artist:"artist",album:"album",year:"year",comment:"comment",track:"track",genre:"genre"};class n extends i.CommonTagMapper{constructor(){super(["ID3v1"],r)}}t.ID3v1TagMapper=n},25159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractID3Parser=void 0;let i=a(35849),r=a(11227),n=a(78281),s=a(8928),o=a(62282),l=a(87805),c=(0,r.default)("music-metadata:parser:ID3");class d extends l.BasicParser{constructor(){super(...arguments),this.id3parser=new s.ID3v2Parser}static async startsWithID3v2Header(e){return"ID3"===(await e.peekToken(n.ID3v2Header)).fileIdentifier}async parse(){try{await this.parseID3v2()}catch(e){if(e instanceof i.EndOfStreamError)c("End-of-stream");else throw e}}finalize(){}async parseID3v2(){if(await this.tryReadId3v2Headers(),c("End of ID3v2 header, go to MPEG-parser: pos=%s",this.tokenizer.position),await this.postId3v2Parse(),this.options.skipPostHeaders&&this.metadata.hasAny())this.finalize();else{let e=new o.ID3v1Parser;await e.init(this.metadata,this.tokenizer,this.options).parse(),this.finalize()}}async tryReadId3v2Headers(){if("ID3"===(await this.tokenizer.peekToken(n.ID3v2Header)).fileIdentifier)return c("Found ID3v2 header, pos=%s",this.tokenizer.position),await this.id3parser.parse(this.metadata,this.tokenizer,this.options),this.tryReadId3v2Headers()}}t.AbstractID3Parser=d},60907:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.FrameParser=t.parseGenre=void 0;let r=a(11227),n=a(20036),s=a(83769),o=a(78281),l=a(62282),c=(0,r.default)("music-metadata:id3v2:frame-parser"),d="latin1";function u(e){let t;let a=[],i="";for(let r of e)if("string"==typeof t){if("("===r&&""===t)i+="(",t=void 0;else if(")"===r){""!==i&&(a.push(i),i="");let e=m(t);e&&a.push(e),t=void 0}else t+=r}else"("===r?t="":i+=r;return i&&(0===a.length&&i.match(/^\d*$/)&&(i=l.Genres[i]),a.push(i)),a}function m(e){return"RX"===e?"Remix":"CR"===e?"Cover":e.match(/^\d*$/)?l.Genres[e]:void 0}t.parseGenre=u;class p{constructor(e,t){this.major=e,this.warningCollector=t}readData(e,t,a){let r,l;if(0===e.length){this.warningCollector.addWarning(`id3v2.${this.major} header has empty tag type=${t}`);return}let{encoding:m,bom:f}=o.TextEncodingToken.get(e,0),g=e.length,h=0,T=[],k=p.getNullTerminatorLength(m),b={};switch(c(`Parsing tag type=${t}, encoding=${m}, bom=${f}`),"TXXX"!==t&&"T"===t[0]?"T*":t){case"T*":case"IPLS":case"MVIN":case"MVNM":case"PCS":case"PCST":try{l=s.decodeString(e.slice(1),m).replace(/\x00+$/,"")}catch(e){this.warningCollector.addWarning(`id3v2.${this.major} type=${t} header has invalid string value: ${e.message}`)}switch(t){case"TMCL":case"TIPL":case"IPLS":T=this.splitValue(t,l),T=p.functionList(T);break;case"TRK":case"TRCK":case"TPOS":T=l;break;case"TCOM":case"TEXT":case"TOLY":case"TOPE":case"TPE1":case"TSRC":T=this.splitValue(t,l);break;case"TCO":case"TCON":T=this.splitValue(t,l).map(e=>u(e)).reduce((e,t)=>e.concat(t),[]);break;case"PCS":case"PCST":T=Array.isArray(T=this.major>=4?this.splitValue(t,l):[l])&&""===T[0]?1:0;break;default:T=this.major>=4?this.splitValue(t,l):[l]}break;case"TXXX":T={description:(T=p.readIdentifierAndData(e,h+1,g,m)).id,text:this.splitValue(t,s.decodeString(T.data,m).replace(/\x00+$/,""))};break;case"PIC":case"APIC":if(a){let t={};switch(h+=1,this.major){case 2:t.format=s.decodeString(e.slice(h,h+3),"latin1"),h+=3;break;case 3:case 4:r=s.findZero(e,h,g,d),t.format=s.decodeString(e.slice(h,r),d),h=r+1;break;default:throw Error("Warning: unexpected major versionIndex: "+this.major)}t.format=p.fixPictureMimeType(t.format),t.type=o.AttachedPictureType[e[h]],h+=1,r=s.findZero(e,h,g,m),t.description=s.decodeString(e.slice(h,r),m),h=r+k,t.data=i.from(e.slice(h,g)),T=t}break;case"CNT":case"PCNT":T=n.UINT32_BE.get(e,0);break;case"SYLT":for(h+=7,T=[];h<g;){let t=e.slice(h,h=s.findZero(e,h,g,m));h+=5,T.push(s.decodeString(t,m))}break;case"ULT":case"USLT":case"COM":case"COMM":h+=1,b.language=s.decodeString(e.slice(h,h+3),d),h+=3,r=s.findZero(e,h,g,m),b.description=s.decodeString(e.slice(h,r),m),h=r+k,b.text=s.decodeString(e.slice(h,g),m).replace(/\x00+$/,""),T=[b];break;case"UFID":T={owner_identifier:(T=p.readIdentifierAndData(e,h,g,d)).id,identifier:T.data};break;case"PRIV":T={owner_identifier:(T=p.readIdentifierAndData(e,h,g,d)).id,data:T.data};break;case"POPM":r=s.findZero(e,h,g,d);let I=s.decodeString(e.slice(h,r),d),y=g-(h=r+1);T={email:I,rating:n.UINT8.get(e,h),counter:y>=5?n.UINT32_BE.get(e,h+1):void 0};break;case"GEOB":{r=s.findZero(e,h+1,g,m);let t=s.decodeString(e.slice(h+1,r),d);h=r+1,r=s.findZero(e,h,g-h,m);let a=s.decodeString(e.slice(h,r),d);h=r+1,r=s.findZero(e,h,g-h,m),T={type:t,filename:a,description:s.decodeString(e.slice(h,r),d),data:e.slice(h+1,g)};break}case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"WORS":case"WPAY":case"WPUB":T=s.decodeString(e.slice(h,r),d);break;case"WXXX":{r=s.findZero(e,h+1,g,m);let t=s.decodeString(e.slice(h+1,r),m);h=r+("utf16le"===m?2:1),T={description:t,url:s.decodeString(e.slice(h,g),d)};break}case"WFD":case"WFED":T=s.decodeString(e.slice(h+1,s.findZero(e,h+1,g,m)),m);break;case"MCDI":T=e.slice(0,g);break;default:c("Warning: unsupported id3v2-tag-type: "+t)}return T}static fixPictureMimeType(e){switch(e=e.toLocaleLowerCase()){case"jpg":return"image/jpeg";case"png":return"image/png"}return e}static functionList(e){let t={};for(let a=0;a+1<e.length;a+=2){let i=e[a+1].split(",");t[e[a]]=t.hasOwnProperty(e[a])?t[e[a]].concat(i):i}return t}splitValue(e,t){let a;return this.major<4?(a=t.split(/\x00/g)).length>1?this.warningCollector.addWarning(`ID3v2.${this.major} ${e} uses non standard null-separator.`):a=t.split(/\//g):a=t.split(/\x00/g),p.trimArray(a)}static trimArray(e){return e.map(e=>e.replace(/\x00+$/,"").trim())}static readIdentifierAndData(e,t,a,i){let r=s.findZero(e,t,a,i),n=s.decodeString(e.slice(t,r),i);return t=r+p.getNullTerminatorLength(i),{id:n,data:e.slice(t,a)}}static getNullTerminatorLength(e){return"utf16le"===e?2:1}}t.FrameParser=p},37183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ID3v22TagMapper=t.id3v22TagMap=void 0;let i=a(24132);t.id3v22TagMap={TT2:"title",TP1:"artist",TP2:"albumartist",TAL:"album",TYE:"year",COM:"comment",TRK:"track",TPA:"disk",TCO:"genre",PIC:"picture",TCM:"composer",TOR:"originaldate",TOT:"originalalbum",TXT:"lyricist",TP3:"conductor",TPB:"label",TT1:"grouping",TT3:"subtitle",TLA:"language",TCR:"copyright",WCP:"license",TEN:"encodedby",TSS:"encodersettings",WAR:"website","COM:iTunPGAP":"gapless",PCS:"podcast",TCP:"compilation",TDR:"date",TS2:"albumartistsort",TSA:"albumsort",TSC:"composersort",TSP:"artistsort",TST:"titlesort",WFD:"podcasturl",TBP:"bpm"};class r extends i.CaseInsensitiveTagMap{constructor(){super(["ID3v2.2"],t.id3v22TagMap)}}t.ID3v22TagMapper=r},64005:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ID3v24TagMapper=void 0;let i=a(89918),r=a(24132),n=a(83769),s={TIT2:"title",TPE1:"artist","TXXX:Artists":"artists",TPE2:"albumartist",TALB:"album",TDRV:"date",TORY:"originalyear",TPOS:"disk",TCON:"genre",APIC:"picture",TCOM:"composer","USLT:description":"lyrics",TSOA:"albumsort",TSOT:"titlesort",TOAL:"originalalbum",TSOP:"artistsort",TSO2:"albumartistsort",TSOC:"composersort",TEXT:"lyricist","TXXX:Writer":"writer",TPE3:"conductor",TPE4:"remixer","IPLS:arranger":"arranger","IPLS:engineer":"engineer","IPLS:producer":"producer","IPLS:DJ-mix":"djmixer","IPLS:mix":"mixer",TPUB:"label",TIT1:"grouping",TIT3:"subtitle",TRCK:"track",TCMP:"compilation",POPM:"rating",TBPM:"bpm",TMED:"media","TXXX:CATALOGNUMBER":"catalognumber","TXXX:MusicBrainz Album Status":"releasestatus","TXXX:MusicBrainz Album Type":"releasetype","TXXX:MusicBrainz Album Release Country":"releasecountry","TXXX:RELEASECOUNTRY":"releasecountry","TXXX:SCRIPT":"script",TLAN:"language",TCOP:"copyright",WCOP:"license",TENC:"encodedby",TSSE:"encodersettings","TXXX:BARCODE":"barcode","TXXX:ISRC":"isrc",TSRC:"isrc","TXXX:ASIN":"asin","TXXX:originalyear":"originalyear","UFID:http://musicbrainz.org":"musicbrainz_recordingid","TXXX:MusicBrainz Release Track Id":"musicbrainz_trackid","TXXX:MusicBrainz Album Id":"musicbrainz_albumid","TXXX:MusicBrainz Artist Id":"musicbrainz_artistid","TXXX:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","TXXX:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","TXXX:MusicBrainz Work Id":"musicbrainz_workid","TXXX:MusicBrainz TRM Id":"musicbrainz_trmid","TXXX:MusicBrainz Disc Id":"musicbrainz_discid","TXXX:ACOUSTID_ID":"acoustid_id","TXXX:Acoustid Id":"acoustid_id","TXXX:Acoustid Fingerprint":"acoustid_fingerprint","TXXX:MusicIP PUID":"musicip_puid","TXXX:MusicMagic Fingerprint":"musicip_fingerprint",WOAR:"website",TDRC:"date",TYER:"year",TDOR:"originaldate","TIPL:arranger":"arranger","TIPL:engineer":"engineer","TIPL:producer":"producer","TIPL:DJ-mix":"djmixer","TIPL:mix":"mixer",TMOO:"mood",SYLT:"lyrics",TSST:"discsubtitle",TKEY:"key",COMM:"comment",TOPE:"originalartist","PRIV:AverageLevel":"averageLevel","PRIV:PeakLevel":"peakLevel","TXXX:DISCOGS_ARTIST_ID":"discogs_artist_id","TXXX:DISCOGS_ARTISTS":"artists","TXXX:DISCOGS_ARTIST_NAME":"artists","TXXX:DISCOGS_ALBUM_ARTISTS":"albumartist","TXXX:DISCOGS_CATALOG":"catalognumber","TXXX:DISCOGS_COUNTRY":"releasecountry","TXXX:DISCOGS_DATE":"originaldate","TXXX:DISCOGS_LABEL":"label","TXXX:DISCOGS_LABEL_ID":"discogs_label_id","TXXX:DISCOGS_MASTER_RELEASE_ID":"discogs_master_release_id","TXXX:DISCOGS_RATING":"discogs_rating","TXXX:DISCOGS_RELEASED":"date","TXXX:DISCOGS_RELEASE_ID":"discogs_release_id","TXXX:DISCOGS_VOTES":"discogs_votes","TXXX:CATALOGID":"catalognumber","TXXX:STYLE":"genre","TXXX:REPLAYGAIN_TRACK_PEAK":"replaygain_track_peak","TXXX:REPLAYGAIN_TRACK_GAIN":"replaygain_track_gain","TXXX:REPLAYGAIN_ALBUM_PEAK":"replaygain_album_peak","TXXX:REPLAYGAIN_ALBUM_GAIN":"replaygain_album_gain","TXXX:MP3GAIN_MINMAX":"replaygain_track_minmax","TXXX:MP3GAIN_ALBUM_MINMAX":"replaygain_album_minmax","TXXX:MP3GAIN_UNDO":"replaygain_undo",MVNM:"movement",MVIN:"movementIndex",PCST:"podcast",TCAT:"category",TDES:"description",TDRL:"date",TGID:"podcastId",TKWD:"keywords",WFED:"podcasturl"};class o extends r.CaseInsensitiveTagMap{static toRating(e){return{source:e.email,rating:e.rating>0?(e.rating-1)/254*i.CommonTagMapper.maxRatingScore:void 0}}constructor(){super(["ID3v2.3","ID3v2.4"],s)}postMap(e,t){switch(e.id){case"UFID":"http://musicbrainz.org"===e.value.owner_identifier&&(e.id+=":"+e.value.owner_identifier,e.value=n.decodeString(e.value.identifier,"latin1"));break;case"PRIV":switch(e.value.owner_identifier){case"AverageLevel":case"PeakValue":e.id+=":"+e.value.owner_identifier,e.value=4===e.value.data.length?e.value.data.readUInt32LE(0):null,null===e.value&&t.addWarning("Failed to parse PRIV:PeakValue");break;default:t.addWarning(`Unknown PRIV owner-identifier: ${e.value.owner_identifier}`)}break;case"COMM":e.value=e.value?e.value.text:null;break;case"POPM":e.value=o.toRating(e.value)}}}t.ID3v24TagMapper=o},8928:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.ID3v2Parser=void 0;let r=a(20036),n=a(83769),s=a(60907),o=a(78281);class l{static removeUnsyncBytes(e){let t=0,a=0;for(;t<e.length-1;)t!==a&&(e[a]=e[t]),t+=255===e[t]&&0===e[t+1]?2:1,a++;return t<e.length&&(e[a++]=e[t]),e.slice(0,a)}static getFrameHeaderLength(e){switch(e){case 2:return 6;case 3:case 4:return 10;default:throw Error("header versionIndex is incorrect")}}static readFrameFlags(e){return{status:{tag_alter_preservation:n.getBit(e,0,6),file_alter_preservation:n.getBit(e,0,5),read_only:n.getBit(e,0,4)},format:{grouping_identity:n.getBit(e,1,7),compression:n.getBit(e,1,3),encryption:n.getBit(e,1,2),unsynchronisation:n.getBit(e,1,1),data_length_indicator:n.getBit(e,1,0)}}}static readFrameData(e,t,a,i,r){let n=new s.FrameParser(a,r);switch(a){case 2:return n.readData(e,t.id,i);case 3:case 4:return t.flags.format.unsynchronisation&&(e=l.removeUnsyncBytes(e)),t.flags.format.data_length_indicator&&(e=e.slice(4,e.length)),n.readData(e,t.id,i);default:throw Error("Unexpected majorVer: "+a)}}static makeDescriptionTagName(e,t){return e+(t?":"+t:"")}async parse(e,t,a){this.tokenizer=t,this.metadata=e,this.options=a;let i=await this.tokenizer.readToken(o.ID3v2Header);if("ID3"!==i.fileIdentifier)throw Error("expected ID3-header file-identifier 'ID3' was not found");return this.id3Header=i,this.headerType="ID3v2."+i.version.major,i.flags.isExtendedHeader?this.parseExtendedHeader():this.parseId3Data(i.size)}async parseExtendedHeader(){let e=await this.tokenizer.readToken(o.ExtendedHeader),t=e.size-o.ExtendedHeader.len;return t>0?this.parseExtendedHeaderData(t,e.size):this.parseId3Data(this.id3Header.size-e.size)}async parseExtendedHeaderData(e,t){return await this.tokenizer.ignore(e),this.parseId3Data(this.id3Header.size-t)}async parseId3Data(e){let t=await this.tokenizer.readToken(new r.Uint8ArrayType(e));for(let e of this.parseMetadata(t))if("TXXX"===e.id){if(e.value)for(let t of e.value.text)this.addTag(l.makeDescriptionTagName(e.id,e.value.description),t)}else if("COM"===e.id)for(let t of e.value)this.addTag(l.makeDescriptionTagName(e.id,t.description),t.text);else if("COMM"===e.id)for(let t of e.value)this.addTag(l.makeDescriptionTagName(e.id,t.description),t);else if(Array.isArray(e.value))for(let t of e.value)this.addTag(e.id,t);else this.addTag(e.id,e.value)}addTag(e,t){this.metadata.addTag(this.headerType,e,t)}parseMetadata(e){let t=0,a=[];for(;t!==e.length;){let i=l.getFrameHeaderLength(this.id3Header.version.major);if(t+i>e.length){this.metadata.addWarning("Illegal ID3v2 tag length");break}let r=e.slice(t,t+=i),n=this.readFrameHeader(r,this.id3Header.version.major),s=e.slice(t,t+=n.length),o=l.readFrameData(s,n,this.id3Header.version.major,!this.options.skipCovers,this.metadata);o&&a.push({id:n.id,value:o})}return a}readFrameHeader(e,t){let a;switch(t){case 2:(a={id:i.from(e.slice(0,3)).toString("ascii"),length:r.UINT24_BE.get(e,3)}).id.match(/[A-Z0-9]{3}/g)||this.metadata.addWarning(`Invalid ID3v2.${this.id3Header.version.major} frame-header-ID: ${a.id}`);break;case 3:case 4:(a={id:i.from(e.slice(0,4)).toString("ascii"),length:(4===t?o.UINT32SYNCSAFE:r.UINT32_BE).get(e,4),flags:l.readFrameFlags(e.slice(8,10))}).id.match(/[A-Z0-9]{4}/g)||this.metadata.addWarning(`Invalid ID3v2.${this.id3Header.version.major} frame-header-ID: ${a.id}`);break;default:throw Error("Unexpected majorVer: "+t)}return a}}t.ID3v2Parser=l},78281:function(e,t,a){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.TextEncodingToken=t.ExtendedHeader=t.ID3v2Header=t.UINT32SYNCSAFE=t.AttachedPictureType=void 0;let r=a(20036),n=a(83769);!function(e){e[e.Other=0]="Other",e[e["32x32 pixels 'file icon' (PNG only)"]=1]="32x32 pixels 'file icon' (PNG only)",e[e["Other file icon"]=2]="Other file icon",e[e["Cover (front)"]=3]="Cover (front)",e[e["Cover (back)"]=4]="Cover (back)",e[e["Leaflet page"]=5]="Leaflet page",e[e["Media (e.g. label side of CD)"]=6]="Media (e.g. label side of CD)",e[e["Lead artist/lead performer/soloist"]=7]="Lead artist/lead performer/soloist",e[e["Artist/performer"]=8]="Artist/performer",e[e.Conductor=9]="Conductor",e[e["Band/Orchestra"]=10]="Band/Orchestra",e[e.Composer=11]="Composer",e[e["Lyricist/text writer"]=12]="Lyricist/text writer",e[e["Recording Location"]=13]="Recording Location",e[e["During recording"]=14]="During recording",e[e["During performance"]=15]="During performance",e[e["Movie/video screen capture"]=16]="Movie/video screen capture",e[e["A bright coloured fish"]=17]="A bright coloured fish",e[e.Illustration=18]="Illustration",e[e["Band/artist logotype"]=19]="Band/artist logotype",e[e["Publisher/Studio logotype"]=20]="Publisher/Studio logotype"}(i=t.AttachedPictureType||(t.AttachedPictureType={})),t.UINT32SYNCSAFE={get:(e,t)=>127&e[t+3]|e[t+2]<<7|e[t+1]<<14|e[t]<<21,len:4},t.ID3v2Header={len:10,get:(e,a)=>({fileIdentifier:new r.StringType(3,"ascii").get(e,a),version:{major:r.INT8.get(e,a+3),revision:r.INT8.get(e,a+4)},flags:{unsynchronisation:n.getBit(e,a+5,7),isExtendedHeader:n.getBit(e,a+5,6),expIndicator:n.getBit(e,a+5,5),footer:n.getBit(e,a+5,4)},size:t.UINT32SYNCSAFE.get(e,a+6)})},t.ExtendedHeader={len:10,get:(e,t)=>({size:r.UINT32_BE.get(e,t),extendedFlags:r.UINT16_BE.get(e,t+4),sizeOfPadding:r.UINT32_BE.get(e,t+6),crcDataPresent:n.getBit(e,t+4,31)})},t.TextEncodingToken={len:1,get:(e,t)=>{switch(e[t]){case 0:return{encoding:"latin1"};case 1:return{encoding:"utf16le",bom:!0};case 2:return{encoding:"utf16le",bom:!1};default:return{encoding:"utf8",bom:!1}}}}},44633:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;let i=a(20036),r=a(28049);t.Header={len:8,get:(e,t)=>({chunkID:r.FourCcToken.get(e,t),chunkSize:Number(BigInt(i.UINT32_BE.get(e,t+4)))})}},19941:function(e,t,a){"use strict";var i=a(48764).Buffer;async function r(e){if(e.fileSize>=143){let a=i.alloc(15);await e.randomRead(a,0,a.length,e.fileSize-143);let r=a.toString("binary");if(r.substr(6)===t.endTag2)return parseInt(r.substr(0,6),10)+15}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.getLyricsHeaderLength=t.endTag2=void 0,t.endTag2="LYRICS200",t.getLyricsHeaderLength=r},63121:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.elements=void 0;let i=a(98591);t.elements={440786851:{name:"ebml",container:{17030:{name:"ebmlVersion",value:i.DataType.uint},17143:{name:"ebmlReadVersion",value:i.DataType.uint},17138:{name:"ebmlMaxIDWidth",value:i.DataType.uint},17139:{name:"ebmlMaxSizeWidth",value:i.DataType.uint},17026:{name:"docType",value:i.DataType.string},17031:{name:"docTypeVersion",value:i.DataType.uint},17029:{name:"docTypeReadVersion",value:i.DataType.uint}}},408125543:{name:"segment",container:{290298740:{name:"seekHead",container:{19899:{name:"seek",container:{21419:{name:"seekId",value:i.DataType.binary},21420:{name:"seekPosition",value:i.DataType.uint}}}}},357149030:{name:"info",container:{29604:{name:"uid",value:i.DataType.uid},29572:{name:"filename",value:i.DataType.string},3979555:{name:"prevUID",value:i.DataType.uid},3965867:{name:"prevFilename",value:i.DataType.string},4110627:{name:"nextUID",value:i.DataType.uid},4096955:{name:"nextFilename",value:i.DataType.string},2807729:{name:"timecodeScale",value:i.DataType.uint},17545:{name:"duration",value:i.DataType.float},17505:{name:"dateUTC",value:i.DataType.uint},31657:{name:"title",value:i.DataType.string},19840:{name:"muxingApp",value:i.DataType.string},22337:{name:"writingApp",value:i.DataType.string}}},524531317:{name:"cluster",multiple:!0,container:{231:{name:"timecode",value:i.DataType.uid},163:{name:"unknown",value:i.DataType.binary},167:{name:"position",value:i.DataType.uid},171:{name:"prevSize",value:i.DataType.uid}}},374648427:{name:"tracks",container:{174:{name:"entries",multiple:!0,container:{215:{name:"trackNumber",value:i.DataType.uint},29637:{name:"uid",value:i.DataType.uid},131:{name:"trackType",value:i.DataType.uint},185:{name:"flagEnabled",value:i.DataType.bool},136:{name:"flagDefault",value:i.DataType.bool},21930:{name:"flagForced",value:i.DataType.bool},156:{name:"flagLacing",value:i.DataType.bool},28135:{name:"minCache",value:i.DataType.uint},28136:{name:"maxCache",value:i.DataType.uint},2352003:{name:"defaultDuration",value:i.DataType.uint},2306383:{name:"timecodeScale",value:i.DataType.float},21358:{name:"name",value:i.DataType.string},2274716:{name:"language",value:i.DataType.string},134:{name:"codecID",value:i.DataType.string},25506:{name:"codecPrivate",value:i.DataType.binary},2459272:{name:"codecName",value:i.DataType.string},3839639:{name:"codecSettings",value:i.DataType.string},3883072:{name:"codecInfoUrl",value:i.DataType.string},2536e3:{name:"codecDownloadUrl",value:i.DataType.string},170:{name:"codecDecodeAll",value:i.DataType.bool},28587:{name:"trackOverlay",value:i.DataType.uint},224:{name:"video",container:{154:{name:"flagInterlaced",value:i.DataType.bool},21432:{name:"stereoMode",value:i.DataType.uint},176:{name:"pixelWidth",value:i.DataType.uint},186:{name:"pixelHeight",value:i.DataType.uint},21680:{name:"displayWidth",value:i.DataType.uint},21690:{name:"displayHeight",value:i.DataType.uint},21683:{name:"aspectRatioType",value:i.DataType.uint},3061028:{name:"colourSpace",value:i.DataType.uint},3126563:{name:"gammaValue",value:i.DataType.float}}},225:{name:"audio",container:{181:{name:"samplingFrequency",value:i.DataType.float},30901:{name:"outputSamplingFrequency",value:i.DataType.float},159:{name:"channels",value:i.DataType.uint},148:{name:"channels",value:i.DataType.uint},32123:{name:"channelPositions",value:i.DataType.binary},25188:{name:"bitDepth",value:i.DataType.uint}}},28032:{name:"contentEncodings",container:{25152:{name:"contentEncoding",container:{20529:{name:"order",value:i.DataType.uint},20530:{name:"scope",value:i.DataType.bool},20531:{name:"type",value:i.DataType.uint},20532:{name:"contentEncoding",container:{16980:{name:"contentCompAlgo",value:i.DataType.uint},16981:{name:"contentCompSettings",value:i.DataType.binary}}},20533:{name:"contentEncoding",container:{18401:{name:"contentEncAlgo",value:i.DataType.uint},18402:{name:"contentEncKeyID",value:i.DataType.binary},18403:{name:"contentSignature ",value:i.DataType.binary},18404:{name:"ContentSigKeyID  ",value:i.DataType.binary},18405:{name:"contentSigAlgo ",value:i.DataType.uint},18406:{name:"contentSigHashAlgo ",value:i.DataType.uint}}},25188:{name:"bitDepth",value:i.DataType.uint}}}}}}}}},475249515:{name:"cues",container:{187:{name:"cuePoint",container:{179:{name:"cueTime",value:i.DataType.uid},183:{name:"positions",container:{247:{name:"track",value:i.DataType.uint},241:{name:"clusterPosition",value:i.DataType.uint},21368:{name:"blockNumber",value:i.DataType.uint},234:{name:"codecState",value:i.DataType.uint},219:{name:"reference",container:{150:{name:"time",value:i.DataType.uint},151:{name:"cluster",value:i.DataType.uint},21343:{name:"number",value:i.DataType.uint},235:{name:"codecState",value:i.DataType.uint}}},240:{name:"relativePosition",value:i.DataType.uint}}}}}}},423732329:{name:"attachments",container:{24999:{name:"attachedFiles",multiple:!0,container:{18046:{name:"description",value:i.DataType.string},18030:{name:"name",value:i.DataType.string},18016:{name:"mimeType",value:i.DataType.string},18012:{name:"data",value:i.DataType.binary},18094:{name:"uid",value:i.DataType.uid}}}}},272869232:{name:"chapters",container:{17849:{name:"editionEntry",container:{182:{name:"chapterAtom",container:{29636:{name:"uid",value:i.DataType.uid},145:{name:"timeStart",value:i.DataType.uint},146:{name:"timeEnd",value:i.DataType.uid},152:{name:"hidden",value:i.DataType.bool},17816:{name:"enabled",value:i.DataType.uid},143:{name:"track",container:{137:{name:"trackNumber",value:i.DataType.uid},128:{name:"display",container:{133:{name:"string",value:i.DataType.string},17276:{name:"language ",value:i.DataType.string},17278:{name:"country ",value:i.DataType.string}}}}}}}}}}},307544935:{name:"tags",container:{29555:{name:"tag",multiple:!0,container:{25536:{name:"target",container:{25541:{name:"tagTrackUID",value:i.DataType.uid},25540:{name:"tagChapterUID",value:i.DataType.uint},25542:{name:"tagAttachmentUID",value:i.DataType.uid},25546:{name:"targetType",value:i.DataType.string},26826:{name:"targetTypeValue",value:i.DataType.uint},25545:{name:"tagEditionUID",value:i.DataType.uid}}},26568:{name:"simpleTags",multiple:!0,container:{17827:{name:"name",value:i.DataType.string},17543:{name:"string",value:i.DataType.string},17541:{name:"binary",value:i.DataType.binary},17530:{name:"language",value:i.DataType.string},17531:{name:"languageIETF",value:i.DataType.string},17540:{name:"default",value:i.DataType.bool}}}}}}}}}}},50078:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.MatroskaParser=void 0;let r=a(20036),n=a(11227),s=a(87805),o=a(98591),l=a(63121),c=(0,n.default)("music-metadata:parser:matroska");class d extends s.BasicParser{constructor(){super(),this.padding=0,this.parserMap=new Map,this.ebmlMaxIDLength=4,this.ebmlMaxSizeLength=8,this.parserMap.set(o.DataType.uint,e=>this.readUint(e)),this.parserMap.set(o.DataType.string,e=>this.readString(e)),this.parserMap.set(o.DataType.binary,e=>this.readBuffer(e)),this.parserMap.set(o.DataType.uid,async e=>await this.readUint(e)===1),this.parserMap.set(o.DataType.bool,e=>this.readFlag(e)),this.parserMap.set(o.DataType.float,e=>this.readFloat(e))}init(e,t,a){return super.init(e,t,a),this}async parse(){let e=await this.parseContainer(l.elements,this.tokenizer.fileInfo.size,[]);if(this.metadata.setFormat("container",`EBML/${e.ebml.docType}`),e.segment){let t=e.segment.info;if(t){let e=t.timecodeScale?t.timecodeScale:1e6;if("number"==typeof t.duration){let a=t.duration*e/1e9;this.addTag("segment:title",t.title),this.metadata.setFormat("duration",a)}}let a=e.segment.tracks;if(a&&a.entries){a.entries.forEach(e=>{let t={codecName:e.codecID.replace("A_","").replace("V_",""),codecSettings:e.codecSettings,flagDefault:e.flagDefault,flagLacing:e.flagLacing,flagEnabled:e.flagEnabled,language:e.language,name:e.name,type:e.trackType,audio:e.audio,video:e.video};this.metadata.addStreamInfo(t)});let t=a.entries.filter(e=>e.trackType===o.TrackType.audio.valueOf()).reduce((e,t)=>!e||!e.flagDefault&&t.flagDefault||t.trackNumber&&t.trackNumber<e.trackNumber?t:e,null);t&&(this.metadata.setFormat("codec",t.codecID.replace("A_","")),this.metadata.setFormat("sampleRate",t.audio.samplingFrequency),this.metadata.setFormat("numberOfChannels",t.audio.channels)),e.segment.tags&&e.segment.tags.tag.forEach(e=>{let t=e.target,a=(null==t?void 0:t.targetTypeValue)?o.TargetType[t.targetTypeValue]:(null==t?void 0:t.targetType)?t.targetType:"track";e.simpleTags.forEach(e=>{let t=e.string?e.string:e.binary;this.addTag(`${a}:${e.name}`,t)})}),e.segment.attachments&&e.segment.attachments.attachedFiles.filter(e=>e.mimeType.startsWith("image/")).map(e=>({data:e.data,format:e.mimeType,description:e.description,name:e.name})).forEach(e=>{this.addTag("picture",e)})}}}async parseContainer(e,t,a){let i={};for(;this.tokenizer.position<t;){let t;try{t=await this.readElement()}catch(e){if("End-Of-Stream"===e.message)break;throw e}let r=e[t.id];if(r){if(c(`Element: name=${r.name}, container=${!!r.container}`),r.container){let e=await this.parseContainer(r.container,t.len>=0?this.tokenizer.position+t.len:-1,a.concat([r.name]));r.multiple?(i[r.name]||(i[r.name]=[]),i[r.name].push(e)):i[r.name]=e}else i[r.name]=await this.parserMap.get(r.value)(t)}else 236===t.id||c(`parseEbml: path=${a.join("/")}, unknown element: id=${t.id.toString(16)}`),this.padding+=t.len,await this.tokenizer.ignore(t.len)}return i}async readVintData(e){let t=await this.tokenizer.peekNumber(r.UINT8),a=128,n=1;for(;(t&a)==0;){if(n>e)throw Error("VINT value exceeding maximum size");++n,a>>=1}let s=i.alloc(n);return await this.tokenizer.readBuffer(s),s}async readElement(){let e=await this.readVintData(this.ebmlMaxIDLength),t=await this.readVintData(this.ebmlMaxSizeLength);t[0]^=128>>t.length-1;let a=Math.min(6,t.length);return{id:e.readUIntBE(0,e.length),len:t.readUIntBE(t.length-a,a)}}isMaxValue(e){if(e.length===this.ebmlMaxSizeLength){for(let t=1;t<this.ebmlMaxSizeLength;++t)if(255!==e[t])return!1;return!0}return!1}async readFloat(e){switch(e.len){case 0:return 0;case 4:return this.tokenizer.readNumber(r.Float32_BE);case 8:case 10:return this.tokenizer.readNumber(r.Float64_BE);default:throw Error(`Invalid IEEE-754 float length: ${e.len}`)}}async readFlag(e){return await this.readUint(e)===1}async readUint(e){let t=await this.readBuffer(e),a=Math.min(6,e.len);return t.readUIntBE(e.len-a,a)}async readString(e){return(await this.tokenizer.readToken(new r.StringType(e.len,"utf-8"))).replace(/\00.*$/g,"")}async readBuffer(e){let t=i.alloc(e.len);return await this.tokenizer.readBuffer(t),t}addTag(e,t){this.metadata.addTag("matroska",e,t)}}t.MatroskaParser=d},85481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MatroskaTagMapper=void 0;let i=a(24132),r={"segment:title":"title","album:ARTIST":"albumartist","album:ARTISTSORT":"albumartistsort","album:TITLE":"album","album:DATE_RECORDED":"originaldate","album:PART_NUMBER":"disk","album:TOTAL_PARTS":"totaltracks","track:ARTIST":"artist","track:ARTISTSORT":"artistsort","track:TITLE":"title","track:PART_NUMBER":"track","track:MUSICBRAINZ_TRACKID":"musicbrainz_recordingid","track:MUSICBRAINZ_ALBUMID":"musicbrainz_albumid","track:MUSICBRAINZ_ARTISTID":"musicbrainz_artistid","track:PUBLISHER":"label","track:GENRE":"genre","track:ENCODER":"encodedby","track:ENCODER_OPTIONS":"encodersettings","edition:TOTAL_PARTS":"totaldiscs",picture:"picture"};class n extends i.CaseInsensitiveTagMap{constructor(){super(["matroska"],r)}}t.MatroskaTagMapper=n},98591:function(e,t){"use strict";var a,i,r;Object.defineProperty(t,"__esModule",{value:!0}),t.TrackType=t.TargetType=t.DataType=void 0,function(e){e[e.string=0]="string",e[e.uint=1]="uint",e[e.uid=2]="uid",e[e.bool=3]="bool",e[e.binary=4]="binary",e[e.float=5]="float"}(a=t.DataType||(t.DataType={})),function(e){e[e.shot=10]="shot",e[e.scene=20]="scene",e[e.track=30]="track",e[e.part=40]="part",e[e.album=50]="album",e[e.edition=60]="edition",e[e.collection=70]="collection"}(i=t.TargetType||(t.TargetType={})),function(e){e[e.video=1]="video",e[e.audio=2]="audio",e[e.complex=3]="complex",e[e.logo=4]="logo",e[e.subtitle=17]="subtitle",e[e.button=18]="button",e[e.control=32]="control"}(r=t.TrackType||(t.TrackType={}))},9134:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Atom=void 0;let i=a(11227),r=a(81060),n=(0,i.default)("music-metadata:parser:MP4:Atom");class s{static async readAtom(e,t,a,i){let o=e.position,l=await e.readToken(r.Header);l.length===BigInt(1)&&(l.length=await e.readToken(r.ExtendedSize));let c=new s(l,l.length===BigInt(1),a),d=c.getPayloadLength(i);return n(`parse atom name=${c.atomPath}, extended=${c.extended}, offset=${o}, len=${c.header.length}`),await c.readData(e,t,d),c}constructor(e,t,a){this.header=e,this.extended=t,this.parent=a,this.children=[],this.atomPath=(this.parent?this.parent.atomPath+".":"")+this.header.name}getHeaderLength(){return this.extended?16:8}getPayloadLength(e){return(this.header.length===BigInt(0)?e:Number(this.header.length))-this.getHeaderLength()}async readAtoms(e,t,a){for(;a>0;){let i=await s.readAtom(e,t,this,a);this.children.push(i),a-=i.header.length===BigInt(0)?a:Number(i.header.length)}}async readData(e,t,a){switch(this.header.name){case"moov":case"udta":case"trak":case"mdia":case"minf":case"stbl":case"<id>":case"ilst":case"tref":return this.readAtoms(e,t,this.getPayloadLength(a));case"meta":let i="hdlr"===(await e.peekToken(r.Header)).name?0:4;return await e.ignore(i),this.readAtoms(e,t,this.getPayloadLength(a)-i);default:return t(this,a)}}}t.Atom=s},81060:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.ChapterText=t.StcoAtom=t.StszAtom=t.StscAtom=t.SampleToChunkToken=t.SttsAtom=t.TimeToSampleToken=t.SoundSampleDescriptionV0=t.SoundSampleDescriptionVersion=t.StsdAtom=t.TrackHeaderAtom=t.NameAtom=t.DataAtom=t.MvhdAtom=t.MdhdAtom=t.FixedLengthAtom=t.mhdr=t.tkhd=t.ftyp=t.ExtendedSize=t.Header=void 0;let r=a(20036),n=a(11227),s=a(28049),o=(0,n.default)("music-metadata:parser:MP4:atom");t.Header={len:8,get:(e,t)=>{let a=r.UINT32_BE.get(e,t);if(a<0)throw Error("Invalid atom header length");return{length:BigInt(a),name:new r.StringType(4,"binary").get(e,t+4)}},put:(e,t,a)=>(r.UINT32_BE.put(e,t,Number(a.length)),s.FourCcToken.put(e,t+4,a.name))},t.ExtendedSize=r.UINT64_BE,t.ftyp={len:4,get:(e,t)=>({type:new r.StringType(4,"ascii").get(e,t)})},t.tkhd={len:4,get:(e,t)=>({type:new r.StringType(4,"ascii").get(e,t)})},t.mhdr={len:8,get:(e,t)=>({version:r.UINT8.get(e,t),flags:r.UINT24_BE.get(e,t+1),nextItemID:r.UINT32_BE.get(e,t+4)})};class l{constructor(e,t,a){if(this.len=e,e<t)throw Error(`Atom ${a} expected to be ${t}, but specifies ${e} bytes long.`);e>t&&o(`Warning: atom ${a} expected to be ${t}, but was actually ${e} bytes long.`)}}t.FixedLengthAtom=l;let c=(e,t)=>new Date(1e3*(r.UINT32_BE.get(e,t)-2082844800));class d extends l{constructor(e){super(e,24,"mdhd"),this.len=e}get(e,t){return{version:r.UINT8.get(e,t+0),flags:r.UINT24_BE.get(e,t+1),creationTime:c(e,t+4),modificationTime:c(e,t+8),timeScale:r.UINT32_BE.get(e,t+12),duration:r.UINT32_BE.get(e,t+16),language:r.UINT16_BE.get(e,t+20),quality:r.UINT16_BE.get(e,t+22)}}}t.MdhdAtom=d;class u extends l{constructor(e){super(e,100,"mvhd"),this.len=e}get(e,t){return{version:r.UINT8.get(e,t),flags:r.UINT24_BE.get(e,t+1),creationTime:c(e,t+4),modificationTime:c(e,t+8),timeScale:r.UINT32_BE.get(e,t+12),duration:r.UINT32_BE.get(e,t+16),preferredRate:r.UINT32_BE.get(e,t+20),preferredVolume:r.UINT16_BE.get(e,t+24),previewTime:r.UINT32_BE.get(e,t+72),previewDuration:r.UINT32_BE.get(e,t+76),posterTime:r.UINT32_BE.get(e,t+80),selectionTime:r.UINT32_BE.get(e,t+84),selectionDuration:r.UINT32_BE.get(e,t+88),currentTime:r.UINT32_BE.get(e,t+92),nextTrackID:r.UINT32_BE.get(e,t+96)}}}t.MvhdAtom=u;class m{constructor(e){this.len=e}get(e,t){return{type:{set:r.UINT8.get(e,t+0),type:r.UINT24_BE.get(e,t+1)},locale:r.UINT24_BE.get(e,t+4),value:i.from(new r.Uint8ArrayType(this.len-8).get(e,t+8))}}}t.DataAtom=m;class p{constructor(e){this.len=e}get(e,t){return{version:r.UINT8.get(e,t),flags:r.UINT24_BE.get(e,t+1),name:new r.StringType(this.len-4,"utf-8").get(e,t+4)}}}t.NameAtom=p;class f{constructor(e){this.len=e}get(e,t){return{version:r.UINT8.get(e,t),flags:r.UINT24_BE.get(e,t+1),creationTime:c(e,t+4),modificationTime:c(e,t+8),trackId:r.UINT32_BE.get(e,t+12),duration:r.UINT32_BE.get(e,t+20),layer:r.UINT16_BE.get(e,t+24),alternateGroup:r.UINT16_BE.get(e,t+26),volume:r.UINT16_BE.get(e,t+28)}}}t.TrackHeaderAtom=f;let g=8,h=(e,t)=>({version:r.UINT8.get(e,t),flags:r.UINT24_BE.get(e,t+1),numberOfEntries:r.UINT32_BE.get(e,t+4)});class T{constructor(e){this.len=e}get(e,t){return{dataFormat:s.FourCcToken.get(e,t),dataReferenceIndex:r.UINT16_BE.get(e,t+10),description:new r.Uint8ArrayType(this.len-12).get(e,t+12)}}}class k{constructor(e){this.len=e}get(e,t){let a=h(e,t);t+=g;let i=[];for(let n=0;n<a.numberOfEntries;++n){let a=r.UINT32_BE.get(e,t);t+=r.UINT32_BE.len,i.push(new T(a).get(e,t)),t+=a}return{header:a,table:i}}}t.StsdAtom=k,t.SoundSampleDescriptionVersion={len:8,get:(e,t)=>({version:r.INT16_BE.get(e,t),revision:r.INT16_BE.get(e,t+2),vendor:r.INT32_BE.get(e,t+4)})},t.SoundSampleDescriptionV0={len:12,get:(e,t)=>({numAudioChannels:r.INT16_BE.get(e,t+0),sampleSize:r.INT16_BE.get(e,t+2),compressionId:r.INT16_BE.get(e,t+4),packetSize:r.INT16_BE.get(e,t+6),sampleRate:r.UINT16_BE.get(e,t+8)+r.UINT16_BE.get(e,t+10)/1e4})};class b{constructor(e,t){this.len=e,this.token=t}get(e,t){let a=r.INT32_BE.get(e,t+4);return{version:r.INT8.get(e,t+0),flags:r.INT24_BE.get(e,t+1),numberOfEntries:a,entries:w(e,this.token,t+8,this.len-8,a)}}}t.TimeToSampleToken={len:8,get:(e,t)=>({count:r.INT32_BE.get(e,t+0),duration:r.INT32_BE.get(e,t+4)})};class I extends b{constructor(e){super(e,t.TimeToSampleToken),this.len=e}}t.SttsAtom=I,t.SampleToChunkToken={len:12,get:(e,t)=>({firstChunk:r.INT32_BE.get(e,t),samplesPerChunk:r.INT32_BE.get(e,t+4),sampleDescriptionId:r.INT32_BE.get(e,t+8)})};class y extends b{constructor(e){super(e,t.SampleToChunkToken),this.len=e}}t.StscAtom=y;class v{constructor(e){this.len=e}get(e,t){let a=r.INT32_BE.get(e,t+8);return{version:r.INT8.get(e,t),flags:r.INT24_BE.get(e,t+1),sampleSize:r.INT32_BE.get(e,t+4),numberOfEntries:a,entries:w(e,r.INT32_BE,t+12,this.len-12,a)}}}t.StszAtom=v;class S extends b{constructor(e){super(e,r.INT32_BE),this.len=e}}t.StcoAtom=S;class E{constructor(e){this.len=e}get(e,t){let a=r.INT16_BE.get(e,t+0);return new r.StringType(a,"utf-8").get(e,t+2)}}function w(e,t,a,i,r){if(o(`remainingLen=${i}, numberOfEntries=${r} * token-len=${t.len}`),0===i)return[];if(i!==r*t.len)throw Error("mismatch number-of-entries with remaining atom-length");let n=[];for(let i=0;i<r;++i)n.push(t.get(e,a)),a+=t.len;return n}t.ChapterText=E},38841:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.MP4Parser=void 0;let r=a(11227),n=a(20036),s=a(87805),o=a(62282),l=a(6032),c=a(9134),d=a(81060),u=(0,r.default)("music-metadata:parser:MP4"),m="iTunes",p={raw:{lossy:!1,format:"raw"},MAC3:{lossy:!0,format:"MACE 3:1"},MAC6:{lossy:!0,format:"MACE 6:1"},ima4:{lossy:!0,format:"IMA 4:1"},ulaw:{lossy:!0,format:"uLaw 2:1"},alaw:{lossy:!0,format:"uLaw 2:1"},Qclp:{lossy:!0,format:"QUALCOMM PureVoice"},".mp3":{lossy:!0,format:"MPEG-1 layer 3"},alac:{lossy:!1,format:"ALAC"},"ac-3":{lossy:!0,format:"AC-3"},mp4a:{lossy:!0,format:"MPEG-4/AAC"},mp4s:{lossy:!0,format:"MP4S"},c608:{lossy:!0,format:"CEA-608"},c708:{lossy:!0,format:"CEA-708"}};function f(e,t,a){return a.indexOf(e)===t}class g extends s.BasicParser{constructor(){super(...arguments),this.atomParsers={mvhd:async e=>{let t=await this.tokenizer.readToken(new d.MvhdAtom(e));this.metadata.setFormat("creationTime",t.creationTime),this.metadata.setFormat("modificationTime",t.modificationTime)},mdhd:async e=>{let t=await this.tokenizer.readToken(new d.MdhdAtom(e)),a=this.getTrackDescription();a.creationTime=t.creationTime,a.modificationTime=t.modificationTime,a.timeScale=t.timeScale,a.duration=t.duration},chap:async e=>{let t=this.getTrackDescription(),a=[];for(;e>=n.UINT32_BE.len;)a.push(await this.tokenizer.readNumber(n.UINT32_BE)),e-=n.UINT32_BE.len;t.chapterList=a},tkhd:async e=>{let t=await this.tokenizer.readToken(new d.TrackHeaderAtom(e));this.tracks.push(t)},mdat:async e=>{if(this.audioLengthInBytes=e,this.calculateBitRate(),this.options.includeChapters){let t=this.tracks.filter(e=>e.chapterList);if(1===t.length){let a=t[0].chapterList,i=this.tracks.filter(e=>-1!==a.indexOf(e.trackId));if(1===i.length)return this.parseChapterTrack(i[0],t[0],e)}}await this.tokenizer.ignore(e)},ftyp:async e=>{let t=[];for(;e>0;){let a=await this.tokenizer.readToken(d.ftyp);e-=d.ftyp.len;let i=a.type.replace(/\W/g,"");i.length>0&&t.push(i)}u(`ftyp: ${t.join("/")}`);let a=t.filter(f).join("/");this.metadata.setFormat("container",a)},stsd:async e=>{let t=await this.tokenizer.readToken(new d.StsdAtom(e));this.getTrackDescription().soundSampleDescription=t.table.map(e=>this.parseSoundSampleDescription(e))},stsc:async e=>{let t=await this.tokenizer.readToken(new d.StscAtom(e));this.getTrackDescription().sampleToChunkTable=t.entries},stts:async e=>{let t=await this.tokenizer.readToken(new d.SttsAtom(e));this.getTrackDescription().timeToSampleTable=t.entries},stsz:async e=>{let t=await this.tokenizer.readToken(new d.StszAtom(e)),a=this.getTrackDescription();a.sampleSize=t.sampleSize,a.sampleSizeTable=t.entries},stco:async e=>{let t=await this.tokenizer.readToken(new d.StcoAtom(e));this.getTrackDescription().chunkOffsetTable=t.entries},date:async e=>{let t=await this.tokenizer.readToken(new n.StringType(e,"utf-8"));this.addTag("date",t)}}}static read_BE_Integer(e,t){let a=(t?"INT":"UINT")+8*e.length+(e.length>1?"_BE":""),i=n[a];if(!i)throw Error('Token for integer type not found: "'+a+'"');return Number(i.get(e,0))}async parse(){this.tracks=[];let e=this.tokenizer.fileInfo.size;for(;!this.tokenizer.fileInfo.size||e>0;){try{let e=await this.tokenizer.peekToken(d.Header);if("\0\0\0\0"===e.name){let e=`Error at offset=${this.tokenizer.position}: box.id=0`;u(e),this.addWarning(e);break}}catch(t){let e=`Error at offset=${this.tokenizer.position}: ${t.message}`;u(e),this.addWarning(e);break}let t=await c.Atom.readAtom(this.tokenizer,(e,t)=>this.handleAtom(e,t),null,e);e-=t.header.length===BigInt(0)?e:Number(t.header.length)}let t=[];this.tracks.forEach(e=>{let a=[];e.soundSampleDescription.forEach(e=>{let t={},i=p[e.dataFormat];if(i?(a.push(i.format),t.codecName=i.format):t.codecName=`<${e.dataFormat}>`,e.description){let{description:a}=e;a.sampleRate>0&&(t.type=l.TrackType.audio,t.audio={samplingFrequency:a.sampleRate,bitDepth:a.sampleSize,channels:a.numAudioChannels})}this.metadata.addStreamInfo(t)}),a.length>=1&&t.push(a.join("/"))}),t.length>0&&this.metadata.setFormat("codec",t.filter(f).join("+"));let a=this.tracks.filter(e=>e.soundSampleDescription.length>=1&&e.soundSampleDescription[0].description&&e.soundSampleDescription[0].description.numAudioChannels>0);if(a.length>=1){let e=a[0];if(e.timeScale>0){let t=e.duration/e.timeScale;this.metadata.setFormat("duration",t)}let t=e.soundSampleDescription[0];if(t.description&&(this.metadata.setFormat("sampleRate",t.description.sampleRate),this.metadata.setFormat("bitsPerSample",t.description.sampleSize),this.metadata.setFormat("numberOfChannels",t.description.numAudioChannels),0===e.timeScale&&e.timeToSampleTable.length>0)){let a=e.timeToSampleTable.map(e=>e.count*e.duration).reduce((e,t)=>e+t)/t.description.sampleRate;this.metadata.setFormat("duration",a)}let i=p[t.dataFormat];i&&this.metadata.setFormat("lossless",!i.lossy),this.calculateBitRate()}}async handleAtom(e,t){if(e.parent)switch(e.parent.header.name){case"ilst":case"<id>":return this.parseMetadataItemData(e)}if(this.atomParsers[e.header.name])return this.atomParsers[e.header.name](t);u(`No parser for atom path=${e.atomPath}, payload-len=${t}, ignoring atom`),await this.tokenizer.ignore(t)}getTrackDescription(){return this.tracks[this.tracks.length-1]}calculateBitRate(){this.audioLengthInBytes&&this.metadata.format.duration&&this.metadata.setFormat("bitrate",8*this.audioLengthInBytes/this.metadata.format.duration)}addTag(e,t){this.metadata.addTag(m,e,t)}addWarning(e){u("Warning: "+e),this.metadata.addWarning(e)}parseMetadataItemData(e){let t=e.header.name;return e.readAtoms(this.tokenizer,async(e,a)=>{let i=e.getPayloadLength(a);switch(e.header.name){case"data":return this.parseValueAtom(t,e);case"name":case"mean":case"rate":let r=await this.tokenizer.readToken(new d.NameAtom(i));t+=":"+r.name;break;default:let s=await this.tokenizer.readToken(new n.BufferType(i));this.addWarning("Unsupported meta-item: "+t+"["+e.header.name+"] => value="+s.toString("hex")+" ascii="+s.toString("ascii"))}},e.getPayloadLength(0))}async parseValueAtom(e,t){let a=await this.tokenizer.readToken(new d.DataAtom(Number(t.header.length)-d.Header.len));if(0!==a.type.set)throw Error("Unsupported type-set != 0: "+a.type.set);switch(a.type.type){case 0:switch(e){case"trkn":case"disk":let r=n.UINT8.get(a.value,3),s=n.UINT8.get(a.value,5);this.addTag(e,r+"/"+s);break;case"gnre":let l=n.UINT8.get(a.value,1),c=o.Genres[l-1];this.addTag(e,c);break;case"rate":let m=a.value.toString("ascii");this.addTag(e,m);break;default:u("unknown proprietary value type for: "+t.atomPath)}break;case 1:case 18:this.addTag(e,a.value.toString("utf-8"));break;case 13:if(this.options.skipCovers)break;this.addTag(e,{format:"image/jpeg",data:i.from(a.value)});break;case 14:if(this.options.skipCovers)break;this.addTag(e,{format:"image/png",data:i.from(a.value)});break;case 21:this.addTag(e,g.read_BE_Integer(a.value,!0));break;case 22:this.addTag(e,g.read_BE_Integer(a.value,!1));break;case 65:this.addTag(e,a.value.readInt8(0));break;case 66:this.addTag(e,a.value.readInt16BE(0));break;case 67:this.addTag(e,a.value.readInt32BE(0));break;default:this.addWarning(`atom key=${e}, has unknown well-known-type (data-type): ${a.type.type}`)}}parseSoundSampleDescription(e){let t={dataFormat:e.dataFormat,dataReferenceIndex:e.dataReferenceIndex},a=0,i=d.SoundSampleDescriptionVersion.get(e.description,a);return a+=d.SoundSampleDescriptionVersion.len,0===i.version||1===i.version?t.description=d.SoundSampleDescriptionV0.get(e.description,a):u(`Warning: sound-sample-description ${i} not implemented`),t}async parseChapterTrack(e,t,a){if(!e.sampleSize&&e.chunkOffsetTable.length!==e.sampleSizeTable.length)throw Error("Expected equal chunk-offset-table & sample-size-table length.");let i=[];for(let r=0;r<e.chunkOffsetTable.length&&a>0;++r){let n=e.chunkOffsetTable[r]-this.tokenizer.position,s=e.sampleSize>0?e.sampleSize:e.sampleSizeTable[r];if((a-=n+s)<0)throw Error("Chapter chunk exceeding token length");await this.tokenizer.ignore(n);let o=await this.tokenizer.readToken(new d.ChapterText(s));u(`Chapter ${r+1}: ${o}`);let l={title:o,sampleOffset:this.findSampleOffset(t,this.tokenizer.position)};u(`Chapter title=${l.title}, offset=${l.sampleOffset}/${this.tracks[0].duration}`),i.push(l)}this.metadata.setFormat("chapters",i),await this.tokenizer.ignore(a)}findSampleOffset(e,t){let a=0;e.timeToSampleTable.forEach(e=>{a+=e.count*e.duration}),u(`Total duration=${a}`);let i=0;for(;i<e.chunkOffsetTable.length&&e.chunkOffsetTable[i]<t;)++i;return this.getChunkDuration(i+1,e)}getChunkDuration(e,t){let a=0,i=t.timeToSampleTable[a].count,r=t.timeToSampleTable[a].duration,n=1,s=this.getSamplesPerChunk(n,t.sampleToChunkTable),o=0;for(;n<e;){let e=Math.min(i,s);o+=e*r,i-=e,0==(s-=e)?(++n,s=this.getSamplesPerChunk(n,t.sampleToChunkTable)):(++a,i=t.timeToSampleTable[a].count,r=t.timeToSampleTable[a].duration)}return o}getSamplesPerChunk(e,t){for(let a=0;a<t.length-1;++a)if(e>=t[a].firstChunk&&e<t[a+1].firstChunk)return t[a].samplesPerChunk;return t[t.length-1].samplesPerChunk}}t.MP4Parser=g},37852:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MP4TagMapper=t.tagType=void 0;let i=a(24132),r={"\xa9nam":"title","\xa9ART":"artist",aART:"albumartist","----:com.apple.iTunes:Band":"albumartist","\xa9alb":"album","\xa9day":"date","\xa9cmt":"comment","\xa9com":"comment",trkn:"track",disk:"disk","\xa9gen":"genre",covr:"picture","\xa9wrt":"composer","\xa9lyr":"lyrics",soal:"albumsort",sonm:"titlesort",soar:"artistsort",soaa:"albumartistsort",soco:"composersort","----:com.apple.iTunes:LYRICIST":"lyricist","----:com.apple.iTunes:CONDUCTOR":"conductor","----:com.apple.iTunes:REMIXER":"remixer","----:com.apple.iTunes:ENGINEER":"engineer","----:com.apple.iTunes:PRODUCER":"producer","----:com.apple.iTunes:DJMIXER":"djmixer","----:com.apple.iTunes:MIXER":"mixer","----:com.apple.iTunes:LABEL":"label","\xa9grp":"grouping","----:com.apple.iTunes:SUBTITLE":"subtitle","----:com.apple.iTunes:DISCSUBTITLE":"discsubtitle",cpil:"compilation",tmpo:"bpm","----:com.apple.iTunes:MOOD":"mood","----:com.apple.iTunes:MEDIA":"media","----:com.apple.iTunes:CATALOGNUMBER":"catalognumber",tvsh:"tvShow",tvsn:"tvSeason",tves:"tvEpisode",sosn:"tvShowSort",tven:"tvEpisodeId",tvnn:"tvNetwork",pcst:"podcast",purl:"podcasturl","----:com.apple.iTunes:MusicBrainz Album Status":"releasestatus","----:com.apple.iTunes:MusicBrainz Album Type":"releasetype","----:com.apple.iTunes:MusicBrainz Album Release Country":"releasecountry","----:com.apple.iTunes:SCRIPT":"script","----:com.apple.iTunes:LANGUAGE":"language",cprt:"copyright","\xa9cpy":"copyright","----:com.apple.iTunes:LICENSE":"license","\xa9too":"encodedby",pgap:"gapless","----:com.apple.iTunes:BARCODE":"barcode","----:com.apple.iTunes:ISRC":"isrc","----:com.apple.iTunes:ASIN":"asin","----:com.apple.iTunes:NOTES":"comment","----:com.apple.iTunes:MusicBrainz Track Id":"musicbrainz_recordingid","----:com.apple.iTunes:MusicBrainz Release Track Id":"musicbrainz_trackid","----:com.apple.iTunes:MusicBrainz Album Id":"musicbrainz_albumid","----:com.apple.iTunes:MusicBrainz Artist Id":"musicbrainz_artistid","----:com.apple.iTunes:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","----:com.apple.iTunes:MusicBrainz Release Group Id":"musicbrainz_releasegroupid","----:com.apple.iTunes:MusicBrainz Work Id":"musicbrainz_workid","----:com.apple.iTunes:MusicBrainz TRM Id":"musicbrainz_trmid","----:com.apple.iTunes:MusicBrainz Disc Id":"musicbrainz_discid","----:com.apple.iTunes:Acoustid Id":"acoustid_id","----:com.apple.iTunes:Acoustid Fingerprint":"acoustid_fingerprint","----:com.apple.iTunes:MusicIP PUID":"musicip_puid","----:com.apple.iTunes:fingerprint":"musicip_fingerprint","----:com.apple.iTunes:replaygain_track_gain":"replaygain_track_gain","----:com.apple.iTunes:replaygain_track_peak":"replaygain_track_peak","----:com.apple.iTunes:replaygain_album_gain":"replaygain_album_gain","----:com.apple.iTunes:replaygain_album_peak":"replaygain_album_peak","----:com.apple.iTunes:replaygain_track_minmax":"replaygain_track_minmax","----:com.apple.iTunes:replaygain_album_minmax":"replaygain_album_minmax","----:com.apple.iTunes:replaygain_undo":"replaygain_undo",gnre:"genre","----:com.apple.iTunes:ALBUMARTISTSORT":"albumartistsort","----:com.apple.iTunes:ARTISTS":"artists","----:com.apple.iTunes:ORIGINALDATE":"originaldate","----:com.apple.iTunes:ORIGINALYEAR":"originalyear",desc:"description",ldes:"longDescription","\xa9mvn":"movement","\xa9mvi":"movementIndex","\xa9mvc":"movementTotal","\xa9wrk":"work",catg:"category",egid:"podcastId",hdvd:"hdVideo",keyw:"keywords",shwm:"showMovement",stik:"stik",rate:"rating"};t.tagType="iTunes";class n extends i.CaseInsensitiveTagMap{constructor(){super([t.tagType],r)}postMap(e,t){"rate"===e.id&&(e.value={source:void 0,rating:parseFloat(e.value)/100})}}t.MP4TagMapper=n},55261:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExtendedLameHeader=void 0;let i=a(20036),r=a(83769),n=a(46118);t.ExtendedLameHeader={len:27,get:(e,t)=>{let a=i.UINT32_BE.get(e,t+2);return{revision:r.getBitAllignedNumber(e,t,0,4),vbr_method:r.getBitAllignedNumber(e,t,4,4),lowpass_filter:100*i.UINT8.get(e,t+1),track_peak:0===a?void 0:a/8388608,track_gain:n.ReplayGain.get(e,6),album_gain:n.ReplayGain.get(e,8),music_length:i.UINT32_BE.get(e,t+20),music_crc:i.UINT8.get(e,t+24),header_crc:i.UINT16_BE.get(e,t+24)}}}},10060:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.MpegParser=void 0;let r=a(20036),n=a(35849),s=a(11227),o=a(83769),l=a(25159),c=a(23566),d=(0,s.default)("music-metadata:parser:mpeg"),u=1024,m=["AAC Main","AAC LC","AAC SSR","AAC LTP"],p=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350,void 0,void 0,-1],f=[void 0,["front-center"],["front-left","front-right"],["front-center","front-left","front-right"],["front-center","front-left","front-right","back-center"],["front-center","front-left","front-right","back-left","back-right"],["front-center","front-left","front-right","back-left","back-right","LFE-channel"],["front-center","front-left","front-right","side-left","side-right","back-left","back-right","LFE-channel"]];class g{constructor(e,t){this.versionIndex=o.getBitAllignedNumber(e,t+1,3,2),this.layer=g.LayerDescription[o.getBitAllignedNumber(e,t+1,5,2)],this.versionIndex>1&&0===this.layer?this.parseAdtsHeader(e,t):this.parseMpegHeader(e,t),this.isProtectedByCRC=!o.isBitSet(e,t+1,7)}calcDuration(e){return e*this.calcSamplesPerFrame()/this.samplingRate}calcSamplesPerFrame(){return g.samplesInFrameTable[1===this.version?0:1][this.layer]}calculateSideInfoLength(){if(3!==this.layer)return 2;if(3===this.channelModeIndex){if(1===this.version)return 17;if(2===this.version||2.5===this.version)return 9}else{if(1===this.version)return 32;if(2===this.version||2.5===this.version)return 17}}calcSlotSize(){return[null,4,1,1][this.layer]}parseMpegHeader(e,t){this.container="MPEG",this.bitrateIndex=o.getBitAllignedNumber(e,t+2,0,4),this.sampRateFreqIndex=o.getBitAllignedNumber(e,t+2,4,2),this.padding=o.isBitSet(e,t+2,6),this.privateBit=o.isBitSet(e,t+2,7),this.channelModeIndex=o.getBitAllignedNumber(e,t+3,0,2),this.modeExtension=o.getBitAllignedNumber(e,t+3,2,2),this.isCopyrighted=o.isBitSet(e,t+3,4),this.isOriginalMedia=o.isBitSet(e,t+3,5),this.emphasis=o.getBitAllignedNumber(e,t+3,7,2),this.version=g.VersionID[this.versionIndex],this.channelMode=g.ChannelMode[this.channelModeIndex],this.codec=`MPEG ${this.version} Layer ${this.layer}`;let a=this.calcBitrate();if(!a)throw Error("Cannot determine bit-rate");if(this.bitrate=1e3*a,this.samplingRate=this.calcSamplingRate(),null==this.samplingRate)throw Error("Cannot determine sampling-rate")}parseAdtsHeader(e,t){d("layer=0 => ADTS"),this.version=2===this.versionIndex?4:2,this.container="ADTS/MPEG-"+this.version;let a=o.getBitAllignedNumber(e,t+2,0,2);this.codec="AAC",this.codecProfile=m[a],d(`MPEG-4 audio-codec=${this.codec}`);let i=o.getBitAllignedNumber(e,t+2,2,4);this.samplingRate=p[i],d(`sampling-rate=${this.samplingRate}`);let r=o.getBitAllignedNumber(e,t+2,7,3);this.mp4ChannelConfig=f[r],d(`channel-config=${this.mp4ChannelConfig.join("+")}`),this.frameLength=o.getBitAllignedNumber(e,t+3,6,2)<<11}calcBitrate(){if(0===this.bitrateIndex||15===this.bitrateIndex)return;let e=`${Math.floor(this.version)}${this.layer}`;return g.bitrate_index[this.bitrateIndex][e]}calcSamplingRate(){return 3===this.sampRateFreqIndex?null:g.sampling_rate_freq_index[this.version][this.sampRateFreqIndex]}}g.SyncByte1=255,g.SyncByte2=224,g.VersionID=[2.5,null,2,1],g.LayerDescription=[0,3,2,1],g.ChannelMode=["stereo","joint_stereo","dual_channel","mono"],g.bitrate_index={1:{11:32,12:32,13:32,21:32,22:8,23:8},2:{11:64,12:48,13:40,21:48,22:16,23:16},3:{11:96,12:56,13:48,21:56,22:24,23:24},4:{11:128,12:64,13:56,21:64,22:32,23:32},5:{11:160,12:80,13:64,21:80,22:40,23:40},6:{11:192,12:96,13:80,21:96,22:48,23:48},7:{11:224,12:112,13:96,21:112,22:56,23:56},8:{11:256,12:128,13:112,21:128,22:64,23:64},9:{11:288,12:160,13:128,21:144,22:80,23:80},10:{11:320,12:192,13:160,21:160,22:96,23:96},11:{11:352,12:224,13:192,21:176,22:112,23:112},12:{11:384,12:256,13:224,21:192,22:128,23:128},13:{11:416,12:320,13:256,21:224,22:144,23:144},14:{11:448,12:384,13:320,21:256,22:160,23:160}},g.sampling_rate_freq_index={1:{0:44100,1:48e3,2:32e3},2:{0:22050,1:24e3,2:16e3},2.5:{0:11025,1:12e3,2:8e3}},g.samplesInFrameTable=[[0,384,1152,1152],[0,384,1152,576]];let h={len:4,get:(e,t)=>new g(e,t)};function T(e){return"V"+Math.floor((100-e)/10)}class k extends l.AbstractID3Parser{constructor(){super(...arguments),this.frameCount=0,this.syncFrameCount=-1,this.countSkipFrameData=0,this.totalDataLength=0,this.bitrates=[],this.calculateEofDuration=!1,this.buf_frame_header=i.alloc(4),this.syncPeek={buf:i.alloc(u),len:0}}async postId3v2Parse(){this.metadata.setFormat("lossless",!1);try{let e=!1;for(;!e;)await this.sync(),e=await this.parseCommonMpegHeader()}catch(e){if(e instanceof n.EndOfStreamError){if(d("End-of-stream"),this.calculateEofDuration){let e=this.frameCount*this.samplesPerFrame;this.metadata.setFormat("numberOfSamples",e);let t=e/this.metadata.format.sampleRate;d(`Calculate duration at EOF: ${t} sec.`,t),this.metadata.setFormat("duration",t)}}else throw e}}finalize(){let e=this.metadata.format,t=this.metadata.native.hasOwnProperty("ID3v1");if(e.duration&&this.tokenizer.fileInfo.size){let a=this.tokenizer.fileInfo.size-this.mpegOffset-(t?128:0);e.codecProfile&&"V"===e.codecProfile[0]&&this.metadata.setFormat("bitrate",8*a/e.duration)}else if(this.tokenizer.fileInfo.size&&"CBR"===e.codecProfile){let a=Math.round((this.tokenizer.fileInfo.size-this.mpegOffset-(t?128:0))/this.frame_size)*this.samplesPerFrame;this.metadata.setFormat("numberOfSamples",a);let i=a/e.sampleRate;d("Calculate CBR duration based on file size: %s",i),this.metadata.setFormat("duration",i)}}async sync(){let e=!1;for(;;){let t=0;if(this.syncPeek.len=await this.tokenizer.peekBuffer(this.syncPeek.buf,{length:u,mayBeLess:!0}),this.syncPeek.len<=163)throw new n.EndOfStreamError;for(;;){if(e&&(224&this.syncPeek.buf[t])==224){this.buf_frame_header[0]=g.SyncByte1,this.buf_frame_header[1]=this.syncPeek.buf[t],await this.tokenizer.ignore(t),d(`Sync at offset=${this.tokenizer.position-1}, frameCount=${this.frameCount}`),this.syncFrameCount===this.frameCount&&(d(`Re-synced MPEG stream, frameCount=${this.frameCount}`),this.frameCount=0,this.frame_size=0),this.syncFrameCount=this.frameCount;return}if(e=!1,-1===(t=this.syncPeek.buf.indexOf(g.SyncByte1,t))){if(this.syncPeek.len<this.syncPeek.buf.length)throw new n.EndOfStreamError;await this.tokenizer.ignore(this.syncPeek.len);break}++t,e=!0}}}async parseCommonMpegHeader(){let e;0===this.frameCount&&(this.mpegOffset=this.tokenizer.position-1),await this.tokenizer.peekBuffer(this.buf_frame_header,{offset:1,length:3});try{e=h.get(this.buf_frame_header,0)}catch(e){return await this.tokenizer.ignore(1),this.metadata.addWarning("Parse error: "+e.message),!1}return await this.tokenizer.ignore(3),this.metadata.setFormat("container",e.container),this.metadata.setFormat("codec",e.codec),this.metadata.setFormat("lossless",!1),this.metadata.setFormat("sampleRate",e.samplingRate),this.frameCount++,e.version>=2&&0===e.layer?this.parseAdts(e):this.parseAudioFrameHeader(e)}async parseAudioFrameHeader(e){this.metadata.setFormat("numberOfChannels","mono"===e.channelMode?1:2),this.metadata.setFormat("bitrate",e.bitrate),this.frameCount<2e5&&d("offset=%s MP%s bitrate=%s sample-rate=%s",this.tokenizer.position-4,e.layer,e.bitrate,e.samplingRate);let t=e.calcSlotSize();if(null===t)throw Error("invalid slot_size");let a=e.calcSamplesPerFrame();d(`samples_per_frame=${a}`);let i=a/8*e.bitrate/e.samplingRate+(e.padding?t:0);if(this.frame_size=Math.floor(i),this.audioFrameHeader=e,this.bitrates.push(e.bitrate),1===this.frameCount)return this.offset=h.len,await this.skipSideInformation(),!1;if(3===this.frameCount){if(this.areAllSame(this.bitrates)){if(this.samplesPerFrame=a,this.metadata.setFormat("codecProfile","CBR"),this.tokenizer.fileInfo.size)return!0}else if(this.metadata.format.duration)return!0;if(!this.options.duration)return!0}return(this.options.duration&&4===this.frameCount&&(this.samplesPerFrame=a,this.calculateEofDuration=!0),this.offset=4,e.isProtectedByCRC)?await this.parseCrc():await this.skipSideInformation(),!1}async parseAdts(e){let t=i.alloc(3);await this.tokenizer.readBuffer(t),e.frameLength+=o.getBitAllignedNumber(t,0,0,11),this.totalDataLength+=e.frameLength,this.samplesPerFrame=1024;let a=e.samplingRate/this.samplesPerFrame,r=8*(0===this.frameCount?0:this.totalDataLength/this.frameCount)*a+.5;if(this.metadata.setFormat("bitrate",r),d(`frame-count=${this.frameCount}, size=${e.frameLength} bytes, bit-rate=${r}`),await this.tokenizer.ignore(e.frameLength>7?e.frameLength-7:1),3===this.frameCount){if(this.metadata.setFormat("codecProfile",e.codecProfile),e.mp4ChannelConfig&&this.metadata.setFormat("numberOfChannels",e.mp4ChannelConfig.length),!this.options.duration)return!0;this.calculateEofDuration=!0}return!1}async parseCrc(){return this.crc=await this.tokenizer.readNumber(r.INT16_BE),this.offset+=2,this.skipSideInformation()}async skipSideInformation(){let e=this.audioFrameHeader.calculateSideInfoLength();await this.tokenizer.readToken(new r.Uint8ArrayType(e)),this.offset+=e,await this.readXtraInfoHeader()}async readXtraInfoHeader(){let e=await this.tokenizer.readToken(c.InfoTagHeaderTag);switch(this.offset+=c.InfoTagHeaderTag.len,e){case"Info":return this.metadata.setFormat("codecProfile","CBR"),this.readXingInfoHeader();case"Xing":let t=T((await this.readXingInfoHeader()).vbrScale);return this.metadata.setFormat("codecProfile",t),null;case"Xtra":break;case"LAME":let a=await this.tokenizer.readToken(c.LameEncoderVersion);if(this.frame_size>=this.offset+c.LameEncoderVersion.len)return this.offset+=c.LameEncoderVersion.len,this.metadata.setFormat("tool","LAME "+a),await this.skipFrameData(this.frame_size-this.offset),null;this.metadata.addWarning("Corrupt LAME header")}let i=this.frame_size-this.offset;return i<0?this.metadata.addWarning("Frame "+this.frameCount+"corrupt: negative frameDataLeft"):await this.skipFrameData(i),null}async readXingInfoHeader(){let e=this.tokenizer.position,t=await (0,c.readXingHeader)(this.tokenizer);if(this.offset+=this.tokenizer.position-e,t.lame&&(this.metadata.setFormat("tool","LAME "+o.stripNulls(t.lame.version)),t.lame.extended&&(this.metadata.setFormat("trackPeakLevel",t.lame.extended.track_peak),t.lame.extended.track_gain&&this.metadata.setFormat("trackGain",t.lame.extended.track_gain.adjustment),t.lame.extended.album_gain&&this.metadata.setFormat("albumGain",t.lame.extended.album_gain.adjustment),this.metadata.setFormat("duration",t.lame.extended.music_length/1e3))),t.streamSize){let e=this.audioFrameHeader.calcDuration(t.numFrames);return this.metadata.setFormat("duration",e),d("Get duration from Xing header: %s",this.metadata.format.duration),t}let a=this.frame_size-this.offset;return await this.skipFrameData(a),t}async skipFrameData(e){if(e<0)throw Error("frame-data-left cannot be negative");await this.tokenizer.ignore(e),this.countSkipFrameData+=e}areAllSame(e){let t=e[0];return e.every(e=>e===t)}}t.MpegParser=k},46118:function(e,t,a){"use strict";var i,r;Object.defineProperty(t,"__esModule",{value:!0}),t.ReplayGain=void 0;let n=a(83769);!function(e){e[e.not_set=0]="not_set",e[e.radio=1]="radio",e[e.audiophile=2]="audiophile"}(i||(i={})),function(e){e[e.unspecified=0]="unspecified",e[e.engineer=1]="engineer",e[e.user=2]="user",e[e.automatic=3]="automatic",e[e.rms_average=4]="rms_average"}(r||(r={})),t.ReplayGain={len:2,get:(e,t)=>{let a=n.getBitAllignedNumber(e,t,0,3),i=n.getBitAllignedNumber(e,t,6,1),r=n.getBitAllignedNumber(e,t,7,9)/10;if(a>0)return{type:n.getBitAllignedNumber(e,t,0,3),origin:n.getBitAllignedNumber(e,t,3,3),adjustment:i?-r:r}}}},23566:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.readXingHeader=t.XingHeaderFlags=t.LameEncoderVersion=t.InfoTagHeaderTag=void 0;let r=a(20036),n=a(83769),s=a(55261);async function o(e){let a=await e.readToken(t.XingHeaderFlags),n={};if(a.frames&&(n.numFrames=await e.readToken(r.UINT32_BE)),a.bytes&&(n.streamSize=await e.readToken(r.UINT32_BE)),a.toc&&(n.toc=i.alloc(100),await e.readBuffer(n.toc)),a.vbrScale&&(n.vbrScale=await e.readToken(r.UINT32_BE)),"LAME"===await e.peekToken(new r.StringType(4,"ascii"))&&(await e.ignore(4),n.lame={version:await e.readToken(new r.StringType(5,"ascii"))},n.lame.version.match(/\d+.\d+/g))){let t=n.lame.version.match(/\d+.\d+/g)[0].split(".").map(e=>parseInt(e,10));t[0]>=3&&t[1]>=90&&(n.lame.extended=await e.readToken(s.ExtendedLameHeader))}return n}t.InfoTagHeaderTag=new r.StringType(4,"ascii"),t.LameEncoderVersion=new r.StringType(6,"ascii"),t.XingHeaderFlags={len:4,get:(e,t)=>({frames:n.isBitSet(e,t,31),bytes:n.isBitSet(e,t,30),toc:n.isBitSet(e,t,29),vbrScale:n.isBitSet(e,t,28)})},t.readXingHeader=o},19606:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=a(11227),r=a(20036),n=a(25159),s=a(85170),o=a(13928),l=(0,i.default)("music-metadata:parser:musepack");class c extends n.AbstractID3Parser{async postId3v2Parse(){let e;switch(await this.tokenizer.peekToken(new r.StringType(3,"binary"))){case"MP+":l("Musepack stream-version 7"),e=new o.MpcSv7Parser;break;case"MPC":l("Musepack stream-version 8"),e=new s.MpcSv8Parser;break;default:throw Error("Invalid Musepack signature prefix")}return e.init(this.metadata,this.tokenizer,this.options),e.parse()}}t.default=c},62812:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BitReader=void 0;let i=a(20036);class r{constructor(e){this.tokenizer=e,this.pos=0,this.dword=void 0}async read(e){for(;void 0===this.dword;)this.dword=await this.tokenizer.readToken(i.UINT32_LE);let t=this.dword;return(this.pos+=e,this.pos<32)?(t>>>=32-this.pos)&(1<<e)-1:((this.pos-=32,0===this.pos)?this.dword=void 0:(this.dword=await this.tokenizer.readToken(i.UINT32_LE),this.pos&&(t<<=this.pos,t|=this.dword>>>32-this.pos)),t&(1<<e)-1)}async ignore(e){if(this.pos>0){let t=32-this.pos;this.dword=void 0,e-=t,this.pos=0}let t=e%32,a=(e-t)/32;return await this.tokenizer.ignore(4*a),this.read(t)}}t.BitReader=r},13928:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MpcSv7Parser=void 0;let i=a(11227),r=a(87805),n=a(6742),s=a(62812),o=a(38153),l=(0,i.default)("music-metadata:parser:musepack");class c extends r.BasicParser{constructor(){super(...arguments),this.audioLength=0}async parse(){let e=await this.tokenizer.readToken(o.Header);if("MP+"!==e.signature)throw Error("Unexpected magic number");l(`stream-version=${e.streamMajorVersion}.${e.streamMinorVersion}`),this.metadata.setFormat("container","Musepack, SV7"),this.metadata.setFormat("sampleRate",e.sampleFrequency);let t=1152*(e.frameCount-1)+e.lastFrameLength;this.metadata.setFormat("numberOfSamples",t),this.duration=t/e.sampleFrequency,this.metadata.setFormat("duration",this.duration),this.bitreader=new s.BitReader(this.tokenizer),this.metadata.setFormat("numberOfChannels",e.midSideStereo||e.intensityStereo?2:1);let a=await this.bitreader.read(8);return this.metadata.setFormat("codec",(a/100).toFixed(2)),await this.skipAudioData(e.frameCount),l(`End of audio stream, switching to APEv2, offset=${this.tokenizer.position}`),n.APEv2Parser.tryParseApeHeader(this.metadata,this.tokenizer,this.options)}async skipAudioData(e){for(;e-- >0;){let e=await this.bitreader.read(20);this.audioLength+=20+e,await this.bitreader.ignore(e)}let t=await this.bitreader.read(11);this.audioLength+=t,this.metadata.setFormat("bitrate",this.audioLength/this.duration)}}t.MpcSv7Parser=c},38153:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;let r=a(20036),n=a(83769);t.Header={len:24,get:(e,t)=>{let a={signature:i.from(e).toString("latin1",t,t+3),streamMinorVersion:n.getBitAllignedNumber(e,t+3,0,4),streamMajorVersion:n.getBitAllignedNumber(e,t+3,4,4),frameCount:r.UINT32_LE.get(e,t+4),maxLevel:r.UINT16_LE.get(e,t+8),sampleFrequency:[44100,48e3,37800,32e3][n.getBitAllignedNumber(e,t+10,0,2)],link:n.getBitAllignedNumber(e,t+10,2,2),profile:n.getBitAllignedNumber(e,t+10,4,4),maxBand:n.getBitAllignedNumber(e,t+11,0,6),intensityStereo:n.isBitSet(e,t+11,6),midSideStereo:n.isBitSet(e,t+11,7),titlePeak:r.UINT16_LE.get(e,t+12),titleGain:r.UINT16_LE.get(e,t+14),albumPeak:r.UINT16_LE.get(e,t+16),albumGain:r.UINT16_LE.get(e,t+18),lastFrameLength:r.UINT32_LE.get(e,t+20)>>>20&2047,trueGapless:n.isBitSet(e,t+23,0)};return a.lastFrameLength=a.trueGapless?r.UINT32_LE.get(e,20)>>>20&2047:0,a}}},85170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MpcSv8Parser=void 0;let i=a(11227),r=a(87805),n=a(6742),s=a(28049),o=a(38850),l=(0,i.default)("music-metadata:parser:musepack");class c extends r.BasicParser{constructor(){super(...arguments),this.audioLength=0}async parse(){if("MPCK"!==await this.tokenizer.readToken(s.FourCcToken))throw Error("Invalid Magic number");return this.metadata.setFormat("container","Musepack, SV8"),this.parsePacket()}async parsePacket(){let e=new o.StreamReader(this.tokenizer);for(;;){let t=await e.readPacketHeader();switch(l(`packet-header key=${t.key}, payloadLength=${t.payloadLength}`),t.key){case"SH":let a=await e.readStreamHeader(t.payloadLength);this.metadata.setFormat("numberOfSamples",a.sampleCount),this.metadata.setFormat("sampleRate",a.sampleFrequency),this.metadata.setFormat("duration",a.sampleCount/a.sampleFrequency),this.metadata.setFormat("numberOfChannels",a.channelCount);break;case"AP":this.audioLength+=t.payloadLength,await this.tokenizer.ignore(t.payloadLength);break;case"RG":case"EI":case"SO":case"ST":case"CT":await this.tokenizer.ignore(t.payloadLength);break;case"SE":return this.metadata.setFormat("bitrate",8*this.audioLength/this.metadata.format.duration),n.APEv2Parser.tryParseApeHeader(this.metadata,this.tokenizer,this.options);default:throw Error(`Unexpected header: ${t.key}`)}}}}t.MpcSv8Parser=c},38850:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StreamReader=void 0;let i=a(20036),r=a(11227),n=a(83769),s=(0,r.default)("music-metadata:parser:musepack:sv8"),o=new i.StringType(2,"binary"),l={len:5,get:(e,t)=>({crc:i.UINT32_LE.get(e,t),streamVersion:i.UINT8.get(e,t+4)})},c={len:2,get:(e,t)=>({sampleFrequency:[44100,48e3,37800,32e3][n.getBitAllignedNumber(e,t,0,3)],maxUsedBands:n.getBitAllignedNumber(e,t,3,5),channelCount:n.getBitAllignedNumber(e,t+1,0,4)+1,msUsed:n.isBitSet(e,t+1,4),audioBlockFrames:n.getBitAllignedNumber(e,t+1,5,3)})};class d{constructor(e){this.tokenizer=e}async readPacketHeader(){let e=await this.tokenizer.readToken(o),t=await this.readVariableSizeField();return{key:e,payloadLength:t.value-2-t.len}}async readStreamHeader(e){let t={};s(`Reading SH at offset=${this.tokenizer.position}`);let a=await this.tokenizer.readToken(l);e-=l.len,Object.assign(t,a),s(`SH.streamVersion = ${a.streamVersion}`);let i=await this.readVariableSizeField();e-=i.len,t.sampleCount=i.value;let r=await this.readVariableSizeField();e-=r.len,t.beginningOfSilence=r.value;let n=await this.tokenizer.readToken(c);return e-=c.len,Object.assign(t,n),await this.tokenizer.ignore(e),t}async readVariableSizeField(e=1,t=0){let a=await this.tokenizer.readNumber(i.UINT8);return(128&a)==0?{len:e,value:t+a}:(a&=127,a+=t,this.readVariableSizeField(e+1,a<<7))}}t.StreamReader=d},71915:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.OggParser=t.SegmentTable=void 0;let r=a(20036),n=a(35849),s=a(11227),o=a(83769),l=a(28049),c=a(87805),d=a(54210),u=a(71272),m=a(10573),p=a(62630),f=(0,s.default)("music-metadata:parser:ogg");class g{static sum(e,t,a){let i=0;for(let r=t;r<t+a;++r)i+=e[r];return i}constructor(e){this.len=e.page_segments}get(e,t){return{totalPageSize:g.sum(e,t,this.len)}}}t.SegmentTable=g;class h extends c.BasicParser{async parse(){f("pos=%s, parsePage()",this.tokenizer.position);try{let e;do{if(e=await this.tokenizer.readToken(h.Header),"OggS"!==e.capturePattern)throw Error("Invalid Ogg capture pattern");this.metadata.setFormat("container","Ogg"),this.header=e,this.pageNumber=e.pageSequenceNo,f("page#=%s, Ogg.id=%s",e.pageSequenceNo,e.capturePattern);let t=await this.tokenizer.readToken(new g(e));f("totalPageSize=%s",t.totalPageSize);let a=await this.tokenizer.readToken(new r.Uint8ArrayType(t.totalPageSize));if(f("firstPage=%s, lastPage=%s, continued=%s",e.headerType.firstPage,e.headerType.lastPage,e.headerType.continued),e.headerType.firstPage){let e=new r.StringType(7,"ascii").get(i.from(a),0);switch(e){case"\x01vorbis":f("Set page consumer to Ogg/Vorbis"),this.pageConsumer=new d.VorbisParser(this.metadata,this.options);break;case"OpusHea":f("Set page consumer to Ogg/Opus"),this.pageConsumer=new u.OpusParser(this.metadata,this.options,this.tokenizer);break;case"Speex  ":f("Set page consumer to Ogg/Speex"),this.pageConsumer=new m.SpeexParser(this.metadata,this.options,this.tokenizer);break;case"fishead":case"\0theora":f("Set page consumer to Ogg/Theora"),this.pageConsumer=new p.TheoraParser(this.metadata,this.options,this.tokenizer);break;default:throw Error("gg audio-codec not recognized (id="+e+")")}}this.pageConsumer.parsePage(e,a)}while(!e.headerType.lastPage)}catch(e){if(e instanceof n.EndOfStreamError)this.metadata.addWarning("Last OGG-page is not marked with last-page flag"),f("End-of-stream"),this.metadata.addWarning("Last OGG-page is not marked with last-page flag"),this.header&&this.pageConsumer.calculateDuration(this.header);else if(e.message.startsWith("FourCC"))this.pageNumber>0&&(this.metadata.addWarning("Invalid FourCC ID, maybe last OGG-page is not marked with last-page flag"),this.pageConsumer.flush());else throw e}}}h.Header={len:27,get:(e,t)=>({capturePattern:l.FourCcToken.get(e,t),version:r.UINT8.get(e,t+4),headerType:{continued:o.getBit(e,t+5,0),firstPage:o.getBit(e,t+5,1),lastPage:o.getBit(e,t+5,2)},absoluteGranulePosition:Number(r.UINT64_LE.get(e,t+6)),streamSerialNumber:r.UINT32_LE.get(e,t+14),pageSequenceNo:r.UINT32_LE.get(e,t+18),pageChecksum:r.UINT32_LE.get(e,t+22),page_segments:r.UINT8.get(e,t+26)})},t.OggParser=h},5044:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IdHeader=void 0;let i=a(20036);class r{constructor(e){if(this.len=e,e<19)throw Error("ID-header-page 0 should be at least 19 bytes long")}get(e,t){return{magicSignature:new i.StringType(8,"ascii").get(e,t+0),version:e.readUInt8(t+8),channelCount:e.readUInt8(t+9),preSkip:e.readInt16LE(t+10),inputSampleRate:e.readInt32LE(t+12),outputGain:e.readInt16LE(t+16),channelMapping:e.readUInt8(t+18)}}}t.IdHeader=r},71272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OpusParser=void 0;let i=a(20036),r=a(54210),n=a(5044);class s extends r.VorbisParser{constructor(e,t,a){super(e,t),this.tokenizer=a,this.lastPos=-1}parseFirstPage(e,t){if(this.metadata.setFormat("codec","Opus"),this.idHeader=new n.IdHeader(t.length).get(t,0),"OpusHead"!==this.idHeader.magicSignature)throw Error("Illegal ogg/Opus magic-signature");this.metadata.setFormat("sampleRate",this.idHeader.inputSampleRate),this.metadata.setFormat("numberOfChannels",this.idHeader.channelCount)}parseFullPage(e){"OpusTags"===new i.StringType(8,"ascii").get(e,0)&&(this.parseUserCommentList(e,8),this.lastPos=this.tokenizer.position-e.length)}calculateDuration(e){if(this.metadata.format.sampleRate&&e.absoluteGranulePosition>=0){let t=e.absoluteGranulePosition-this.idHeader.preSkip;if(this.metadata.setFormat("numberOfSamples",t),this.metadata.setFormat("duration",t/48e3),-1!==this.lastPos&&this.tokenizer.fileInfo.size&&this.metadata.format.duration){let e=this.tokenizer.fileInfo.size-this.lastPos;this.metadata.setFormat("bitrate",8*e/this.metadata.format.duration)}}}}t.OpusParser=s},26666:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;let i=a(20036),r=a(83769);t.Header={len:80,get:(e,t)=>({speex:new i.StringType(8,"ascii").get(e,t+0),version:r.trimRightNull(new i.StringType(20,"ascii").get(e,t+8)),version_id:e.readInt32LE(t+28),header_size:e.readInt32LE(t+32),rate:e.readInt32LE(t+36),mode:e.readInt32LE(t+40),mode_bitstream_version:e.readInt32LE(t+44),nb_channels:e.readInt32LE(t+48),bitrate:e.readInt32LE(t+52),frame_size:e.readInt32LE(t+56),vbr:e.readInt32LE(t+60),frames_per_packet:e.readInt32LE(t+64),extra_headers:e.readInt32LE(t+68),reserved1:e.readInt32LE(t+72),reserved2:e.readInt32LE(t+76)})}},10573:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpeexParser=void 0;let i=a(11227),r=a(54210),n=a(26666),s=(0,i.default)("music-metadata:parser:ogg:speex");class o extends r.VorbisParser{constructor(e,t,a){super(e,t),this.tokenizer=a}parseFirstPage(e,t){s("First Ogg/Speex page");let a=n.Header.get(t,0);this.metadata.setFormat("codec",`Speex ${a.version}`),this.metadata.setFormat("numberOfChannels",a.nb_channels),this.metadata.setFormat("sampleRate",a.rate),-1!==a.bitrate&&this.metadata.setFormat("bitrate",a.bitrate)}}t.SpeexParser=o},15177:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IdentificationHeader=void 0;let i=a(20036);t.IdentificationHeader={len:42,get:(e,t)=>({id:new i.StringType(7,"ascii").get(e,t),vmaj:e.readUInt8(t+7),vmin:e.readUInt8(t+8),vrev:e.readUInt8(t+9),vmbw:e.readUInt16BE(t+10),vmbh:e.readUInt16BE(t+17),nombr:i.UINT24_BE.get(e,t+37),nqual:e.readUInt8(t+40)})}},62630:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TheoraParser=void 0;let i=a(11227),r=a(15177),n=(0,i.default)("music-metadata:parser:ogg:theora");class s{constructor(e,t,a){this.metadata=e,this.tokenizer=a}parsePage(e,t){e.headerType.firstPage&&this.parseFirstPage(e,t)}flush(){n("flush")}calculateDuration(e){n("duration calculation not implemented")}parseFirstPage(e,t){n("First Ogg/Theora page"),this.metadata.setFormat("codec","Theora");let a=r.IdentificationHeader.get(t,0);this.metadata.setFormat("bitrate",a.nombr)}}t.TheoraParser=s},2127:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.IdentificationHeader=t.CommonHeader=t.VorbisPictureToken=void 0;let r=a(20036),n=a(78281);class s{static fromBase64(e){return this.fromBuffer(i.from(e,"base64"))}static fromBuffer(e){return new s(e.length).get(e,0)}constructor(e){this.len=e}get(e,t){let a=n.AttachedPictureType[r.UINT32_BE.get(e,t)],s=r.UINT32_BE.get(e,t+=4),o=e.toString("utf-8",t+=4,t+s),l=r.UINT32_BE.get(e,t+=s),c=e.toString("utf-8",t+=4,t+l),d=r.UINT32_BE.get(e,t+=l),u=r.UINT32_BE.get(e,t+=4),m=r.UINT32_BE.get(e,t+=4),p=r.UINT32_BE.get(e,t+=4),f=r.UINT32_BE.get(e,t+=4);return{type:a,format:o,description:c,width:d,height:u,colour_depth:m,indexed_color:p,data:i.from(e.slice(t+=4,t+f))}}}t.VorbisPictureToken=s,t.CommonHeader={len:7,get:(e,t)=>({packetType:e.readUInt8(t),vorbis:new r.StringType(6,"ascii").get(e,t+1)})},t.IdentificationHeader={len:23,get:(e,t)=>{let a=new DataView(e.buffer,e.byteOffset);return{version:a.getUint32(t+0,!0),channelMode:a.getUint8(t+4),sampleRate:a.getUint32(t+5,!0),bitrateMax:a.getUint32(t+9,!0),bitrateNominal:a.getUint32(t+13,!0),bitrateMin:a.getUint32(t+17,!0)}}}},441:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.VorbisDecoder=void 0;let r=a(20036);class n{constructor(e,t){this.data=e,this.offset=t}readInt32(){let e=r.UINT32_LE.get(this.data,this.offset);return this.offset+=4,e}readStringUtf8(){let e=this.readInt32(),t=i.from(this.data).toString("utf-8",this.offset,this.offset+e);return this.offset+=e,t}parseUserComment(){let e=this.offset,t=this.readStringUtf8(),a=t.indexOf("=");return{key:t.slice(0,a).toUpperCase(),value:t.slice(a+1),len:this.offset-e}}}t.VorbisDecoder=n},54210:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.VorbisParser=void 0;let r=a(20036),n=a(11227),s=a(441),o=a(2127),l=(0,n.default)("music-metadata:parser:ogg:vorbis1");class c{constructor(e,t){this.metadata=e,this.options=t,this.pageSegments=[]}parsePage(e,t){if(e.headerType.firstPage)this.parseFirstPage(e,t);else{if(e.headerType.continued){if(0===this.pageSegments.length)throw Error("Cannot continue on previous page");this.pageSegments.push(t)}if(e.headerType.lastPage||!e.headerType.continued){if(this.pageSegments.length>0){let e=i.concat(this.pageSegments);this.parseFullPage(e)}this.pageSegments=e.headerType.lastPage?[]:[t]}}e.headerType.lastPage&&this.calculateDuration(e)}flush(){this.parseFullPage(i.concat(this.pageSegments))}parseUserComment(e,t){let a=new s.VorbisDecoder(e,t).parseUserComment();return this.addTag(a.key,a.value),a.len}addTag(e,t){if("METADATA_BLOCK_PICTURE"===e&&"string"==typeof t){if(this.options.skipCovers){l("Ignore picture");return}t=o.VorbisPictureToken.fromBase64(t),l(`Push picture: id=${e}, format=${t.format}`)}else l(`Push tag: id=${e}, value=${t}`);this.metadata.addTag("vorbis",e,t)}calculateDuration(e){this.metadata.format.sampleRate&&e.absoluteGranulePosition>=0&&(this.metadata.setFormat("numberOfSamples",e.absoluteGranulePosition),this.metadata.setFormat("duration",this.metadata.format.numberOfSamples/this.metadata.format.sampleRate))}parseFirstPage(e,t){this.metadata.setFormat("codec","Vorbis I"),l("Parse first page");let a=o.CommonHeader.get(t,0);if("vorbis"!==a.vorbis)throw Error("Metadata does not look like Vorbis");if(1===a.packetType){let e=o.IdentificationHeader.get(t,o.CommonHeader.len);this.metadata.setFormat("sampleRate",e.sampleRate),this.metadata.setFormat("bitrate",e.bitrateNominal),this.metadata.setFormat("numberOfChannels",e.channelMode),l("sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s",e.sampleRate,e.bitrateNominal,e.channelMode)}else throw Error("First Ogg page should be type 1: the identification header")}parseFullPage(e){let t=o.CommonHeader.get(e,0);if(l("Parse full page: type=%s, byteLength=%s",t.packetType,e.byteLength),3===t.packetType)return this.parseUserCommentList(e,o.CommonHeader.len)}parseUserCommentList(e,t){let a=r.UINT32_LE.get(e,t);t+=4+a;let i=r.UINT32_LE.get(e,t);for(t+=4;i-- >0;)t+=this.parseUserComment(e,t)}}t.VorbisParser=c},29860:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VorbisTagMapper=void 0;let i=a(89918),r={TITLE:"title",ARTIST:"artist",ARTISTS:"artists",ALBUMARTIST:"albumartist","ALBUM ARTIST":"albumartist",ALBUM:"album",DATE:"date",ORIGINALDATE:"originaldate",ORIGINALYEAR:"originalyear",COMMENT:"comment",TRACKNUMBER:"track",DISCNUMBER:"disk",GENRE:"genre",METADATA_BLOCK_PICTURE:"picture",COMPOSER:"composer",LYRICS:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",LYRICIST:"lyricist",WRITER:"writer",CONDUCTOR:"conductor",REMIXER:"remixer",ARRANGER:"arranger",ENGINEER:"engineer",PRODUCER:"producer",DJMIXER:"djmixer",MIXER:"mixer",LABEL:"label",GROUPING:"grouping",SUBTITLE:"subtitle",DISCSUBTITLE:"discsubtitle",TRACKTOTAL:"totaltracks",DISCTOTAL:"totaldiscs",COMPILATION:"compilation",RATING:"rating",BPM:"bpm",KEY:"key",MOOD:"mood",MEDIA:"media",CATALOGNUMBER:"catalognumber",RELEASESTATUS:"releasestatus",RELEASETYPE:"releasetype",RELEASECOUNTRY:"releasecountry",SCRIPT:"script",LANGUAGE:"language",COPYRIGHT:"copyright",LICENSE:"license",ENCODEDBY:"encodedby",ENCODERSETTINGS:"encodersettings",BARCODE:"barcode",ISRC:"isrc",ASIN:"asin",MUSICBRAINZ_TRACKID:"musicbrainz_recordingid",MUSICBRAINZ_RELEASETRACKID:"musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",ACOUSTID_ID:"acoustid_id",ACOUSTID_ID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",WEBSITE:"website",NOTES:"notes",TOTALTRACKS:"totaltracks",TOTALDISCS:"totaldiscs",DISCOGS_ARTIST_ID:"discogs_artist_id",DISCOGS_ARTISTS:"artists",DISCOGS_ARTIST_NAME:"artists",DISCOGS_ALBUM_ARTISTS:"albumartist",DISCOGS_CATALOG:"catalognumber",DISCOGS_COUNTRY:"releasecountry",DISCOGS_DATE:"originaldate",DISCOGS_LABEL:"label",DISCOGS_LABEL_ID:"discogs_label_id",DISCOGS_MASTER_RELEASE_ID:"discogs_master_release_id",DISCOGS_RATING:"discogs_rating",DISCOGS_RELEASED:"date",DISCOGS_RELEASE_ID:"discogs_release_id",DISCOGS_VOTES:"discogs_votes",CATALOGID:"catalognumber",STYLE:"genre",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",REPLAYGAIN_ALBUM_GAIN:"replaygain_album_gain",REPLAYGAIN_ALBUM_PEAK:"replaygain_album_peak",REPLAYGAIN_MINMAX:"replaygain_track_minmax",REPLAYGAIN_ALBUM_MINMAX:"replaygain_album_minmax",REPLAYGAIN_UNDO:"replaygain_undo"};class n extends i.CommonTagMapper{static toRating(e,t,a){return{source:e?e.toLowerCase():e,rating:parseFloat(t)/a*i.CommonTagMapper.maxRatingScore}}constructor(){super(["vorbis"],r)}postMap(e){if("RATING"===e.id)e.value=n.toRating(void 0,e.value,100);else if(0===e.id.indexOf("RATING:")){let t=e.id.split(":");e.value=n.toRating(t[1],e.value,1),e.id=t[0]}}}t.VorbisTagMapper=n},83211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListInfoTagValue=t.Header=void 0;let i=a(20036);t.Header={len:8,get:(e,t)=>({chunkID:e.toString("binary",t,t+4),chunkSize:i.UINT32_LE.get(e,4)})};class r{constructor(e){this.tagHeader=e,this.len=e.chunkSize,this.len+=1&this.len}get(e,t){return new i.StringType(this.tagHeader.chunkSize,"ascii").get(e,t)}}t.ListInfoTagValue=r},35756:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RiffInfoTagMapper=t.riffInfoTagMap=void 0;let i=a(89918);t.riffInfoTagMap={IART:"artist",ICRD:"date",INAM:"title",TITL:"title",IPRD:"album",ITRK:"track",IPRT:"track",COMM:"comment",ICMT:"comment",ICNT:"releasecountry",GNRE:"genre",IWRI:"writer",RATE:"rating",YEAR:"year",ISFT:"encodedby",CODE:"encodedby",TURL:"website",IGNR:"genre",IENG:"engineer",ITCH:"technician",IMED:"media",IRPD:"album"};class r extends i.CommonTagMapper{constructor(){super(["exif"],t.riffInfoTagMap)}}t.RiffInfoTagMapper=r},6032:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TrackType=void 0;var i=a(98591);Object.defineProperty(t,"TrackType",{enumerable:!0,get:function(){return i.TrackType}})},88053:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastAudioExtensionChunk=void 0;let i=a(20036),r=a(83769);t.BroadcastAudioExtensionChunk={len:420,get:(e,t)=>({description:(0,r.stripNulls)(new i.StringType(256,"ascii").get(e,t)).trim(),originator:(0,r.stripNulls)(new i.StringType(32,"ascii").get(e,t+256)).trim(),originatorReference:(0,r.stripNulls)(new i.StringType(32,"ascii").get(e,t+288)).trim(),originationDate:(0,r.stripNulls)(new i.StringType(10,"ascii").get(e,t+320)).trim(),originationTime:(0,r.stripNulls)(new i.StringType(8,"ascii").get(e,t+330)).trim(),timeReferenceLow:i.UINT32_LE.get(e,t+338),timeReferenceHigh:i.UINT32_LE.get(e,t+342),version:i.UINT16_LE.get(e,t+346),umid:new i.Uint8ArrayType(64).get(e,t+348),loudnessValue:i.UINT16_LE.get(e,t+412),maxTruePeakLevel:i.UINT16_LE.get(e,t+414),maxMomentaryLoudness:i.UINT16_LE.get(e,t+416),maxShortTermLoudness:i.UINT16_LE.get(e,t+418)})}},29975:function(e,t){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.FactChunk=t.Format=t.WaveFormat=void 0,function(e){e[e.PCM=1]="PCM",e[e.ADPCM=2]="ADPCM",e[e.IEEE_FLOAT=3]="IEEE_FLOAT",e[e.MPEG_ADTS_AAC=5632]="MPEG_ADTS_AAC",e[e.MPEG_LOAS=5634]="MPEG_LOAS",e[e.RAW_AAC1=255]="RAW_AAC1",e[e.DOLBY_AC3_SPDIF=146]="DOLBY_AC3_SPDIF",e[e.DVM=8192]="DVM",e[e.RAW_SPORT=576]="RAW_SPORT",e[e.ESST_AC3=577]="ESST_AC3",e[e.DRM=9]="DRM",e[e.DTS2=8193]="DTS2",e[e.MPEG=80]="MPEG"}(a=t.WaveFormat||(t.WaveFormat={}));class i{constructor(e){if(e.chunkSize<16)throw Error("Invalid chunk size");this.len=e.chunkSize}get(e,t){return{wFormatTag:e.readUInt16LE(t),nChannels:e.readUInt16LE(t+2),nSamplesPerSec:e.readUInt32LE(t+4),nAvgBytesPerSec:e.readUInt32LE(t+8),nBlockAlign:e.readUInt16LE(t+12),wBitsPerSample:e.readUInt16LE(t+14)}}}t.Format=i;class r{constructor(e){if(e.chunkSize<4)throw Error("Invalid fact chunk size.");this.len=e.chunkSize}get(e,t){return{dwSampleLength:e.readUInt32LE(t)}}}t.FactChunk=r},32682:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WaveParser=void 0;let i=a(35849),r=a(20036),n=a(11227),s=a(83211),o=a(29975),l=a(8928),c=a(83769),d=a(28049),u=a(87805),m=a(88053),p=(0,n.default)("music-metadata:parser:RIFF");class f extends u.BasicParser{async parse(){let e=await this.tokenizer.readToken(s.Header);if(p(`pos=${this.tokenizer.position}, parse: chunkID=${e.chunkID}`),"RIFF"===e.chunkID)return this.parseRiffChunk(e.chunkSize).catch(e=>{if(!(e instanceof i.EndOfStreamError))throw e})}async parseRiffChunk(e){let t=await this.tokenizer.readToken(d.FourCcToken);if(this.metadata.setFormat("container",t),"WAVE"===t)return this.readWaveChunk(e-d.FourCcToken.len);throw Error(`Unsupported RIFF format: RIFF/${t}`)}async readWaveChunk(e){for(;e>=s.Header.len;){let t=await this.tokenizer.readToken(s.Header);switch(e-=s.Header.len+t.chunkSize,t.chunkSize>e&&this.metadata.addWarning("Data chunk size exceeds file size"),this.header=t,p(`pos=${this.tokenizer.position}, readChunk: chunkID=RIFF/WAVE/${t.chunkID}`),t.chunkID){case"LIST":await this.parseListTag(t);break;case"fact":this.metadata.setFormat("lossless",!1),this.fact=await this.tokenizer.readToken(new o.FactChunk(t));break;case"fmt ":let a=await this.tokenizer.readToken(new o.Format(t)),n=o.WaveFormat[a.wFormatTag];n||(p("WAVE/non-PCM format="+a.wFormatTag),n="non-PCM ("+a.wFormatTag+")"),this.metadata.setFormat("codec",n),this.metadata.setFormat("bitsPerSample",a.wBitsPerSample),this.metadata.setFormat("sampleRate",a.nSamplesPerSec),this.metadata.setFormat("numberOfChannels",a.nChannels),this.metadata.setFormat("bitrate",a.nBlockAlign*a.nSamplesPerSec*8),this.blockAlign=a.nBlockAlign;break;case"id3 ":case"ID3 ":let c=await this.tokenizer.readToken(new r.Uint8ArrayType(t.chunkSize)),d=i.fromBuffer(c);await new l.ID3v2Parser().parse(this.metadata,d,this.options);break;case"data":!1!==this.metadata.format.lossless&&this.metadata.setFormat("lossless",!0);let u=t.chunkSize;if(this.tokenizer.fileInfo.size){let e=this.tokenizer.fileInfo.size-this.tokenizer.position;e<u&&(this.metadata.addWarning("data chunk length exceeding file length"),u=e)}let f=this.fact?this.fact.dwSampleLength:4294967295===u?void 0:u/this.blockAlign;f&&(this.metadata.setFormat("numberOfSamples",f),this.metadata.setFormat("duration",f/this.metadata.format.sampleRate)),"ADPCM"===this.metadata.format.codec?this.metadata.setFormat("bitrate",352e3):this.metadata.setFormat("bitrate",this.blockAlign*this.metadata.format.sampleRate*8),await this.tokenizer.ignore(t.chunkSize);break;case"bext":let g=await this.tokenizer.readToken(m.BroadcastAudioExtensionChunk);Object.keys(g).forEach(e=>{this.metadata.addTag("exif","bext."+e,g[e])});let h=t.chunkSize-m.BroadcastAudioExtensionChunk.len;await this.tokenizer.ignore(h);break;case"\0\0\0\0":p(`Ignore padding chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`),this.metadata.addWarning("Ignore chunk: RIFF/"+t.chunkID),await this.tokenizer.ignore(t.chunkSize);break;default:p(`Ignore chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`),this.metadata.addWarning("Ignore chunk: RIFF/"+t.chunkID),await this.tokenizer.ignore(t.chunkSize)}this.header.chunkSize%2==1&&(p("Read odd padding byte"),await this.tokenizer.ignore(1))}}async parseListTag(e){let t=await this.tokenizer.readToken(new r.StringType(4,"binary"));return(p("pos=%s, parseListTag: chunkID=RIFF/WAVE/LIST/%s",this.tokenizer.position,t),"INFO"===t)?this.parseRiffInfoTags(e.chunkSize-4):(this.metadata.addWarning("Ignore chunk: RIFF/WAVE/LIST/"+t),p("Ignoring chunkID=RIFF/WAVE/LIST/"+t),this.tokenizer.ignore(e.chunkSize-4).then())}async parseRiffInfoTags(e){for(;e>=8;){let t=await this.tokenizer.readToken(s.Header),a=new s.ListInfoTagValue(t),i=await this.tokenizer.readToken(a);this.addTag(t.chunkID,c.stripNulls(i)),e-=8+a.len}if(0!==e)throw Error("Illegal remaining size: "+e)}addTag(e,t){this.metadata.addTag("exif",e,t)}}t.WaveParser=f},95870:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.WavPackParser=void 0;let r=a(20036),n=a(6742),s=a(28049),o=a(87805),l=a(12989),c=(0,a(11227).default)("music-metadata:parser:WavPack");class d extends o.BasicParser{async parse(){return this.audioDataSize=0,await this.parseWavPackBlocks(),n.APEv2Parser.tryParseApeHeader(this.metadata,this.tokenizer,this.options)}async parseWavPackBlocks(){do{if("wvpk"!==await this.tokenizer.peekToken(s.FourCcToken))break;let e=await this.tokenizer.readToken(l.WavPack.BlockHeaderToken);if("wvpk"!==e.BlockID)throw Error("Invalid WavPack Block-ID");c(`WavPack header blockIndex=${e.blockIndex}, len=${l.WavPack.BlockHeaderToken.len}`),0!==e.blockIndex||this.metadata.format.container||(this.metadata.setFormat("container","WavPack"),this.metadata.setFormat("lossless",!e.flags.isHybrid),this.metadata.setFormat("bitsPerSample",e.flags.bitsPerSample),e.flags.isDSD||(this.metadata.setFormat("sampleRate",e.flags.samplingRate),this.metadata.setFormat("duration",e.totalSamples/e.flags.samplingRate)),this.metadata.setFormat("numberOfChannels",e.flags.isMono?1:2),this.metadata.setFormat("numberOfSamples",e.totalSamples),this.metadata.setFormat("codec",e.flags.isDSD?"DSD":"PCM"));let t=e.blockSize-(l.WavPack.BlockHeaderToken.len-8);await (0===e.blockIndex?this.parseMetadataSubBlock(e,t):this.tokenizer.ignore(t)),e.blockSamples>0&&(this.audioDataSize+=e.blockSize)}while(!this.tokenizer.fileInfo.size||this.tokenizer.fileInfo.size-this.tokenizer.position>=l.WavPack.BlockHeaderToken.len);this.metadata.setFormat("bitrate",8*this.audioDataSize/this.metadata.format.duration)}async parseMetadataSubBlock(e,t){for(;t>l.WavPack.MetadataIdToken.len;){let a=await this.tokenizer.readToken(l.WavPack.MetadataIdToken),n=await this.tokenizer.readNumber(a.largeBlock?r.UINT24_LE:r.UINT8),s=i.alloc(2*n-(a.isOddSize?1:0));switch(await this.tokenizer.readBuffer(s),c(`Metadata Sub-Blocks functionId=0x${a.functionId.toString(16)}, id.largeBlock=${a.largeBlock},data-size=${s.length}`),a.functionId){case 0:break;case 14:c("ID_DSD_BLOCK");let o=1<<s.readUInt8(0),d=e.flags.samplingRate*o*8;if(!e.flags.isDSD)throw Error("Only expect DSD block if DSD-flag is set");this.metadata.setFormat("sampleRate",d),this.metadata.setFormat("duration",e.totalSamples/d);break;case 36:c("ID_ALT_TRAILER: trailer for non-wav files");break;case 38:this.metadata.setFormat("audioMD5",s);break;case 47:c(`ID_BLOCK_CHECKSUM: checksum=${s.toString("hex")}`);break;default:c(`Ignore unsupported meta-sub-block-id functionId=0x${a.functionId.toString(16)}`)}t-=l.WavPack.MetadataIdToken.len+(a.largeBlock?r.UINT24_LE.len:r.UINT8.len)+2*n,c(`remainingLength=${t}`),a.isOddSize&&this.tokenizer.ignore(1)}if(0!==t)throw Error("metadata-sub-block should fit it remaining length")}}t.WavPackParser=d},12989:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WavPack=void 0;let i=a(20036),r=a(28049),n=[6e3,8e3,9600,11025,12e3,16e3,22050,24e3,32e3,44100,48e3,64e3,88200,96e3,192e3,-1];class s{static isBitSet(e,t){return 1===s.getBitAllignedNumber(e,t,1)}static getBitAllignedNumber(e,t,a){return e>>>t&4294967295>>>32-a}}s.BlockHeaderToken={len:32,get:(e,t)=>{let a=i.UINT32_LE.get(e,t+24),o={BlockID:r.FourCcToken.get(e,t),blockSize:i.UINT32_LE.get(e,t+4),version:i.UINT16_LE.get(e,t+8),totalSamples:i.UINT32_LE.get(e,t+12),blockIndex:i.UINT32_LE.get(e,t+16),blockSamples:i.UINT32_LE.get(e,t+20),flags:{bitsPerSample:(1+s.getBitAllignedNumber(a,0,2))*8,isMono:s.isBitSet(a,2),isHybrid:s.isBitSet(a,3),isJointStereo:s.isBitSet(a,4),crossChannel:s.isBitSet(a,5),hybridNoiseShaping:s.isBitSet(a,6),floatingPoint:s.isBitSet(a,7),samplingRate:n[s.getBitAllignedNumber(a,23,4)],isDSD:s.isBitSet(a,31)},crc:new i.Uint8ArrayType(4).get(e,t+28)};return o.flags.isDSD&&(o.totalSamples*=8),o}},s.MetadataIdToken={len:1,get:(e,t)=>({functionId:s.getBitAllignedNumber(e[t],0,6),isOptional:s.isBitSet(e[t],5),isOddSize:s.isBitSet(e[t],6),largeBlock:s.isBitSet(e[t],7)})},t.WavPack=s},72933:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var Buffer=__webpack_require__(48764).Buffer;let Token=__webpack_require__(20036),strtok3=__webpack_require__(35849),{stringToBytes,tarHeaderChecksumMatches,uint32SyncSafeToken}=__webpack_require__(76127),supported=__webpack_require__(78189),minimumBytes=4100;async function fromStream(e){let t=await strtok3.fromStream(e);try{return await fromTokenizer(t)}finally{await t.close()}}async function fromBuffer(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||Buffer.isBuffer(e)))throw TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);let t=e instanceof Buffer?e:Buffer.from(e);if(t&&t.length>1)return fromTokenizer(strtok3.fromBuffer(t))}function _check(e,t,a){for(let[i,r]of(a={offset:0,...a},t.entries()))if(a.mask){if(r!==(a.mask[i]&e[i+a.offset]))return!1}else if(r!==e[i+a.offset])return!1;return!0}async function fromTokenizer(e){try{return _fromTokenizer(e)}catch(e){if(!(e instanceof strtok3.EndOfStreamError))throw e}}async function _fromTokenizer(e){let t=Buffer.alloc(minimumBytes),a=12,i=(e,a)=>_check(t,e,a),r=(e,t)=>i(stringToBytes(e),t);if(e.fileInfo.size||(e.fileInfo.size=Number.MAX_SAFE_INTEGER),await e.peekBuffer(t,{length:a,mayBeLess:!0}),i([66,77]))return{ext:"bmp",mime:"image/bmp"};if(i([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};if(i([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(i([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if(i([37,33]))return(await e.peekBuffer(t,{length:24,mayBeLess:!0}),r("PS-Adobe-",{offset:2})&&r(" EPSF-",{offset:14}))?{ext:"eps",mime:"application/eps"}:{ext:"ps",mime:"application/postscript"};if(i([31,160])||i([31,157]))return{ext:"Z",mime:"application/x-compress"};if(i([255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(i([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(i([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(i([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(r("ID3")){await e.ignore(6);let t=await e.readToken(uint32SyncSafeToken);return e.position+t>e.fileInfo.size?{ext:"mp3",mime:"audio/mpeg"}:(await e.ignore(t),fromTokenizer(e))}if(r("MP+"))return{ext:"mpc",mime:"audio/x-musepack"};if((67===t[0]||70===t[0])&&i([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(i([71,73,70]))return{ext:"gif",mime:"image/gif"};if(r("FLIF"))return{ext:"flif",mime:"image/flif"};if(r("8BPS"))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};if(r("WEBP",{offset:8}))return{ext:"webp",mime:"image/webp"};if(r("MPCK"))return{ext:"mpc",mime:"audio/x-musepack"};if(r("FORM"))return{ext:"aif",mime:"audio/aiff"};if(r("icns",{offset:0}))return{ext:"icns",mime:"image/icns"};if(i([80,75,3,4])){try{for(;e.position+30<e.fileInfo.size;){await e.readBuffer(t,{length:30});let a={compressedSize:t.readUInt32LE(18),uncompressedSize:t.readUInt32LE(22),filenameLength:t.readUInt16LE(26),extraFieldLength:t.readUInt16LE(28)};if(a.filename=await e.readToken(new Token.StringType(a.filenameLength,"utf-8")),await e.ignore(a.extraFieldLength),"META-INF/mozilla.rsa"===a.filename)return{ext:"xpi",mime:"application/x-xpinstall"};if(a.filename.endsWith(".rels")||a.filename.endsWith(".xml"))switch(a.filename.split("/")[0]){case"_rels":break;case"word":return{ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};case"ppt":return{ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"};case"xl":return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}if(a.filename.startsWith("xl/"))return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};if(a.filename.startsWith("3D/")&&a.filename.endsWith(".model"))return{ext:"3mf",mime:"model/3mf"};if("mimetype"===a.filename&&a.compressedSize===a.uncompressedSize)switch(await e.readToken(new Token.StringType(a.compressedSize,"utf-8"))){case"application/epub+zip":return{ext:"epub",mime:"application/epub+zip"};case"application/vnd.oasis.opendocument.text":return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};case"application/vnd.oasis.opendocument.spreadsheet":return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};case"application/vnd.oasis.opendocument.presentation":return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"}}if(0===a.compressedSize){let a=-1;for(;a<0&&e.position<e.fileInfo.size;)await e.peekBuffer(t,{mayBeLess:!0}),a=t.indexOf("504B0304",0,"hex"),await e.ignore(a>=0?a:t.length)}else await e.ignore(a.compressedSize)}}catch(e){if(!(e instanceof strtok3.EndOfStreamError))throw e}return{ext:"zip",mime:"application/zip"}}if(r("OggS")){await e.ignore(28);let t=Buffer.alloc(8);return(await e.readBuffer(t),_check(t,[79,112,117,115,72,101,97,100]))?{ext:"opus",mime:"audio/opus"}:_check(t,[128,116,104,101,111,114,97])?{ext:"ogv",mime:"video/ogg"}:_check(t,[1,118,105,100,101,111,0])?{ext:"ogm",mime:"video/ogg"}:_check(t,[127,70,76,65,67])?{ext:"oga",mime:"audio/ogg"}:_check(t,[83,112,101,101,120,32,32])?{ext:"spx",mime:"audio/ogg"}:_check(t,[1,118,111,114,98,105,115])?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"}}if(i([80,75])&&(3===t[2]||5===t[2]||7===t[2])&&(4===t[3]||6===t[3]||8===t[3]))return{ext:"zip",mime:"application/zip"};if(r("ftyp",{offset:4})&&(96&t[8])!=0){let e=t.toString("binary",8,12).replace("\0"," ").trim();switch(e){case"avif":return{ext:"avif",mime:"image/avif"};case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt":return{ext:"mov",mime:"video/quicktime"};case"M4V":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P":return{ext:"m4p",mime:"video/mp4"};case"M4B":return{ext:"m4b",mime:"audio/mp4"};case"M4A":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V":return{ext:"f4v",mime:"video/mp4"};case"F4P":return{ext:"f4p",mime:"video/mp4"};case"F4A":return{ext:"f4a",mime:"audio/mp4"};case"F4B":return{ext:"f4b",mime:"audio/mp4"};case"crx":return{ext:"cr3",mime:"image/x-canon-cr3"};default:if(e.startsWith("3g")){if(e.startsWith("3g2"))return{ext:"3g2",mime:"video/3gpp2"};return{ext:"3gp",mime:"video/3gpp"}}return{ext:"mp4",mime:"video/mp4"}}}if(r("MThd"))return{ext:"mid",mime:"audio/midi"};if(r("wOFF")&&(i([0,1,0,0],{offset:4})||r("OTTO",{offset:4})))return{ext:"woff",mime:"font/woff"};if(r("wOF2")&&(i([0,1,0,0],{offset:4})||r("OTTO",{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(i([212,195,178,161])||i([161,178,195,212]))return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(r("DSD "))return{ext:"dsf",mime:"audio/x-dsf"};if(r("LZIP"))return{ext:"lz",mime:"application/x-lzip"};if(r("fLaC"))return{ext:"flac",mime:"audio/x-flac"};if(i([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(r("wvpk"))return{ext:"wv",mime:"audio/wavpack"};if(r("%PDF")){await e.ignore(1350);let t=10485760,a=Buffer.alloc(Math.min(t,e.fileInfo.size));return(await e.readBuffer(a,{mayBeLess:!0}),a.includes(Buffer.from("AIPrivateData")))?{ext:"ai",mime:"application/postscript"}:{ext:"pdf",mime:"application/pdf"}}if(i([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(i([73,73,42,0]))return r("CR",{offset:8})?{ext:"cr2",mime:"image/x-canon-cr2"}:i([28,0,254,0],{offset:8})||i([31,0,11,0],{offset:8})?{ext:"nef",mime:"image/x-nikon-nef"}:i([8,0,0,0],{offset:4})&&(i([45,0,254,0],{offset:8})||i([39,0,254,0],{offset:8}))?{ext:"dng",mime:"image/x-adobe-dng"}:(t=Buffer.alloc(24),await e.peekBuffer(t),(i([16,251,134,1],{offset:4})||i([8,0,0,0],{offset:4}))&&i([0,254,0,4,0,1,0,0,0,1,0,0,0,3,1],{offset:9}))?{ext:"arw",mime:"image/x-sony-arw"}:{ext:"tif",mime:"image/tiff"};if(i([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(r("MAC "))return{ext:"ape",mime:"audio/ape"};if(i([26,69,223,163])){async function n(){let t=await e.peekNumber(Token.UINT8),a=128,i=0;for(;(t&a)==0&&0!==a;)++i,a>>=1;let r=Buffer.alloc(i+1);return await e.readBuffer(r),r}async function s(){let e=await n(),t=await n();t[0]^=128>>t.length-1;let a=Math.min(6,t.length);return{id:e.readUIntBE(0,e.length),len:t.readUIntBE(t.length-a,a)}}async function o(t,a){for(;a>0;){let t=await s();if(17026===t.id)return e.readToken(new Token.StringType(t.len,"utf-8"));await e.ignore(t.len),--a}}let t=await s();switch(await o(1,t.len)){case"webm":return{ext:"webm",mime:"video/webm"};case"matroska":return{ext:"mkv",mime:"video/x-matroska"};default:return}}if(i([82,73,70,70])){if(i([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(i([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};if(i([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(r("SQLi"))return{ext:"sqlite",mime:"application/x-sqlite3"};if(i([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(r("Cr24"))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(r("MSCF")||r("ISc("))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(i([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(i([197,208,211,198]))return{ext:"eps",mime:"application/eps"};if(i([40,181,47,253]))return{ext:"zst",mime:"application/zstd"};if(i([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(r("#!AMR"))return{ext:"amr",mime:"audio/amr"};if(r("{\\rtf"))return{ext:"rtf",mime:"application/rtf"};if(i([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(r("IMPM"))return{ext:"it",mime:"audio/x-it"};if(r("-lh0-",{offset:2})||r("-lh1-",{offset:2})||r("-lh2-",{offset:2})||r("-lh3-",{offset:2})||r("-lh4-",{offset:2})||r("-lh5-",{offset:2})||r("-lh6-",{offset:2})||r("-lh7-",{offset:2})||r("-lzs-",{offset:2})||r("-lz4-",{offset:2})||r("-lz5-",{offset:2})||r("-lhd-",{offset:2}))return{ext:"lzh",mime:"application/x-lzh-compressed"};if(i([0,0,1,186])){if(i([33],{offset:4,mask:[241]}))return{ext:"mpg",mime:"video/MP1S"};if(i([68],{offset:4,mask:[196]}))return{ext:"mpg",mime:"video/MP2P"}}if(r("ITSF"))return{ext:"chm",mime:"application/vnd.ms-htmlhelp"};if(i([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(r("<?xml "))return{ext:"xml",mime:"application/xml"};if(i([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(i([82,97,114,33,26,7])&&(0===t[6]||1===t[6]))return{ext:"rar",mime:"application/x-rar-compressed"};if(r("solid "))return{ext:"stl",mime:"model/stl"};if(r("BLENDER"))return{ext:"blend",mime:"application/x-blender"};if(r("!<arch>"))return(await e.ignore(8),"debian-binary"===await e.readToken(new Token.StringType(13,"ascii")))?{ext:"deb",mime:"application/x-deb"}:{ext:"ar",mime:"application/x-unix-archive"};if(i([137,80,78,71,13,10,26,10])){async function l(){return{length:await e.readToken(Token.INT32_BE),type:await e.readToken(new Token.StringType(4,"binary"))}}await e.ignore(8);do{let t=await l();if(t.length<0)return;switch(t.type){case"IDAT":return{ext:"png",mime:"image/png"};case"acTL":return{ext:"apng",mime:"image/apng"};default:await e.ignore(t.length+4)}}while(e.position+8<e.fileInfo.size);return{ext:"png",mime:"image/png"}}if(i([65,82,82,79,87,49,0,0]))return{ext:"arrow",mime:"application/x-apache-arrow"};if(i([103,108,84,70,2,0,0,0]))return{ext:"glb",mime:"model/gltf-binary"};if(i([102,114,101,101],{offset:4})||i([109,100,97,116],{offset:4})||i([109,111,111,118],{offset:4})||i([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(i([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(r("gimp xcf "))return{ext:"xcf",mime:"image/x-xcf"};if(i([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(i([48,38,178,117,142,102,207,17,166,217])){async function c(){let t=Buffer.alloc(16);return await e.readBuffer(t),{id:t,size:Number(await e.readToken(Token.UINT64_LE))}}for(await e.ignore(30);e.position+24<e.fileInfo.size;){let t=await c(),a=t.size-24;if(_check(t.id,[145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101])){let t=Buffer.alloc(16);if(a-=await e.readBuffer(t),_check(t,[64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"audio/x-ms-asf"};if(_check(t,[192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"video/x-ms-asf"};break}await e.ignore(a)}return{ext:"asf",mime:"application/vnd.ms-asf"}}if(i([171,75,84,88,32,49,49,187,13,10,26,10]))return{ext:"ktx",mime:"image/ktx"};if((i([126,16,4])||i([126,24,4]))&&i([48,77,73,69],{offset:4}))return{ext:"mie",mime:"application/x-mie"};if(i([39,10,0,0,0,0,0,0,0,0,0,0],{offset:2}))return{ext:"shp",mime:"application/x-esri-shape"};if(i([0,0,0,12,106,80,32,32,13,10,135,10]))switch(await e.ignore(20),await e.readToken(new Token.StringType(4,"ascii"))){case"jp2 ":return{ext:"jp2",mime:"image/jp2"};case"jpx ":return{ext:"jpx",mime:"image/jpx"};case"jpm ":return{ext:"jpm",mime:"image/jpm"};case"mjp2":return{ext:"mj2",mime:"image/mj2"};default:return}if(i([255,10])||i([0,0,0,12,74,88,76,32,13,10,135,10]))return{ext:"jxl",mime:"image/jxl"};if(i([0,0,1,186])||i([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(i([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(i([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(i([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(i([208,207,17,224,161,177,26,225]))return{ext:"cfb",mime:"application/x-cfb"};if(await e.peekBuffer(t,{length:Math.min(256,e.fileInfo.size),mayBeLess:!0}),r("BEGIN:")){if(r("VCARD",{offset:6}))return{ext:"vcf",mime:"text/vcard"};if(r("VCALENDAR",{offset:6}))return{ext:"ics",mime:"text/calendar"}}if(r("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(r("Extended Module:"))return{ext:"xm",mime:"audio/x-xm"};if(r("Creative Voice File"))return{ext:"voc",mime:"audio/x-voc"};if(i([4,0,0,0])&&t.length>=16){let e=t.readUInt32LE(12);if(e>12&&t.length>=e+16)try{let a=t.slice(16,e+16).toString();if(JSON.parse(a).files)return{ext:"asar",mime:"application/x-asar"}}catch(e){}}if(i([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(r("SCRM",{offset:44}))return{ext:"s3m",mime:"audio/x-s3m"};if(i([71],{offset:4})&&(i([71],{offset:192})||i([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(i([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(i([68,73,67,77],{offset:128}))return{ext:"dcm",mime:"application/dicom"};if(i([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",mime:"application/x.ms.shortcut"};if(i([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"alias",mime:"application/x.apple.alias"};if(i([76,80],{offset:34})&&(i([0,0,1],{offset:8})||i([1,0,2],{offset:8})||i([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(i([6,6,237,245,216,29,70,229,189,49,239,231,254,116,183,29]))return{ext:"indd",mime:"application/x-indesign"};if(await e.peekBuffer(t,{length:Math.min(512,e.fileInfo.size),mayBeLess:!0}),tarHeaderChecksumMatches(t))return{ext:"tar",mime:"application/x-tar"};if(i([255,254,255,14,83,0,107,0,101,0,116,0,99,0,104,0,85,0,112,0,32,0,77,0,111,0,100,0,101,0,108,0]))return{ext:"skp",mime:"application/vnd.sketchup.skp"};if(r("-----BEGIN PGP MESSAGE-----"))return{ext:"pgp",mime:"application/pgp-encrypted"};if(t.length>=2&&i([255,224],{offset:0,mask:[255,224]})){if(i([16],{offset:1,mask:[22]}))return i([8],{offset:1,mask:[8]}),{ext:"aac",mime:"audio/aac"};if(i([2],{offset:1,mask:[6]}))return{ext:"mp3",mime:"audio/mpeg"};if(i([4],{offset:1,mask:[6]}))return{ext:"mp2",mime:"audio/mpeg"};if(i([6],{offset:1,mask:[6]}))return{ext:"mp1",mime:"audio/mpeg"}}}let stream=readableStream=>new Promise((resolve,reject)=>{let stream=eval("require")("stream");readableStream.on("error",reject),readableStream.once("readable",async()=>{let e;let t=new stream.PassThrough;e=stream.pipeline?stream.pipeline(readableStream,t,()=>{}):readableStream.pipe(t);let a=readableStream.read(minimumBytes)||readableStream.read()||Buffer.alloc(0);try{let e=await fromBuffer(a);t.fileType=e}catch(e){reject(e)}resolve(e)})}),fileType={fromStream,fromTokenizer,fromBuffer,stream};Object.defineProperty(fileType,"extensions",{get:()=>new Set(supported.extensions)}),Object.defineProperty(fileType,"mimeTypes",{get:()=>new Set(supported.mimeTypes)}),module.exports=fileType},78189:function(e){"use strict";e.exports={extensions:["jpg","png","apng","gif","webp","flif","xcf","cr2","cr3","orf","arw","dng","nef","rw2","raf","tif","bmp","icns","jxr","psd","indd","zip","tar","rar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","ogv","opus","flac","wav","spx","amr","pdf","epub","exe","swf","rtf","wasm","woff","woff2","eot","ttf","otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","cfb","mxf","mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","jp2","jpm","jpx","mj2","aif","qcp","odt","ods","odp","xml","mobi","heic","cur","ktx","ape","wv","dcm","ics","glb","pcap","dsf","lnk","alias","voc","ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc","arrow","shp","aac","mp1","it","s3m","xm","ai","skp","avif","eps","lzh","pgp","asar","stl","chm","3mf","zst","jxl","vcf"],mimeTypes:["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-xcf","image/x-canon-cr2","image/x-canon-cr3","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop","application/x-indesign","application/epub+zip","application/x-xpinstall","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed","application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimage","application/x-apache-arrow","video/mp4","audio/midi","video/x-matroska","video/webm","video/quicktime","video/vnd.avi","audio/vnd.wave","audio/qcelp","audio/x-ms-asf","video/x-ms-asf","application/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","audio/opus","video/ogg","audio/ogg","application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","application/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","application/postscript","application/eps","application/x-xz","application/x-sqlite3","application/x-nintendo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","application/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-lzip","application/x-cfb","application/x-mie","application/mxf","video/mp2t","application/x-blender","image/bpg","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","application/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image/icns","image/ktx","application/dicom","audio/x-musepack","text/calendar","text/vcard","model/gltf-binary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","image/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf","video/x-m4v","video/3gpp2","application/x-esri-shape","audio/aac","audio/x-it","audio/x-s3m","audio/x-xm","video/MP1S","video/MP2P","application/vnd.sketchup.skp","image/avif","application/x-lzh-compressed","application/pgp-encrypted","application/x-asar","model/stl","application/vnd.ms-htmlhelp","model/3mf","image/jxl","application/zstd"]}},76127:function(e,t){"use strict";t.stringToBytes=e=>[...e].map(e=>e.charCodeAt(0)),t.tarHeaderChecksumMatches=(e,t=0)=>{let a=parseInt(e.toString("utf8",148,154).replace(/\0.*$/,"").trim(),8);if(isNaN(a))return!1;let i=256;for(let a=t;a<t+148;a++)i+=e[a];for(let a=t+156;a<t+512;a++)i+=e[a];return a===i},t.uint32SyncSafeToken={get:(e,t)=>127&e[t+3]|e[t+2]<<7|e[t+1]<<14|e[t]<<21,len:4}},20036:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.AnsiStringType=t.StringType=t.BufferType=t.Uint8ArrayType=t.IgnoreType=t.Float80_LE=t.Float80_BE=t.Float64_LE=t.Float64_BE=t.Float32_LE=t.Float32_BE=t.Float16_LE=t.Float16_BE=t.INT64_BE=t.UINT64_BE=t.INT64_LE=t.UINT64_LE=t.INT32_LE=t.INT32_BE=t.INT24_BE=t.INT24_LE=t.INT16_LE=t.INT16_BE=t.INT8=t.UINT32_BE=t.UINT32_LE=t.UINT24_BE=t.UINT24_LE=t.UINT16_BE=t.UINT16_LE=t.UINT8=void 0;let r=a(80645);function n(e){return new DataView(e.buffer,e.byteOffset)}t.UINT8={len:1,get:(e,t)=>n(e).getUint8(t),put:(e,t,a)=>(n(e).setUint8(t,a),t+1)},t.UINT16_LE={len:2,get:(e,t)=>n(e).getUint16(t,!0),put:(e,t,a)=>(n(e).setUint16(t,a,!0),t+2)},t.UINT16_BE={len:2,get:(e,t)=>n(e).getUint16(t),put:(e,t,a)=>(n(e).setUint16(t,a),t+2)},t.UINT24_LE={len:3,get(e,t){let a=n(e);return a.getUint8(t)+(a.getUint16(t+1,!0)<<8)},put(e,t,a){let i=n(e);return i.setUint8(t,255&a),i.setUint16(t+1,a>>8,!0),t+3}},t.UINT24_BE={len:3,get(e,t){let a=n(e);return(a.getUint16(t)<<8)+a.getUint8(t+2)},put(e,t,a){let i=n(e);return i.setUint16(t,a>>8),i.setUint8(t+2,255&a),t+3}},t.UINT32_LE={len:4,get:(e,t)=>n(e).getUint32(t,!0),put:(e,t,a)=>(n(e).setUint32(t,a,!0),t+4)},t.UINT32_BE={len:4,get:(e,t)=>n(e).getUint32(t),put:(e,t,a)=>(n(e).setUint32(t,a),t+4)},t.INT8={len:1,get:(e,t)=>n(e).getInt8(t),put:(e,t,a)=>(n(e).setInt8(t,a),t+1)},t.INT16_BE={len:2,get:(e,t)=>n(e).getInt16(t),put:(e,t,a)=>(n(e).setInt16(t,a),t+2)},t.INT16_LE={len:2,get:(e,t)=>n(e).getInt16(t,!0),put:(e,t,a)=>(n(e).setInt16(t,a,!0),t+2)},t.INT24_LE={len:3,get(e,a){let i=t.UINT24_LE.get(e,a);return i>8388607?i-16777216:i},put(e,t,a){let i=n(e);return i.setUint8(t,255&a),i.setUint16(t+1,a>>8,!0),t+3}},t.INT24_BE={len:3,get(e,a){let i=t.UINT24_BE.get(e,a);return i>8388607?i-16777216:i},put(e,t,a){let i=n(e);return i.setUint16(t,a>>8),i.setUint8(t+2,255&a),t+3}},t.INT32_BE={len:4,get:(e,t)=>n(e).getInt32(t),put:(e,t,a)=>(n(e).setInt32(t,a),t+4)},t.INT32_LE={len:4,get:(e,t)=>n(e).getInt32(t,!0),put:(e,t,a)=>(n(e).setInt32(t,a,!0),t+4)},t.UINT64_LE={len:8,get:(e,t)=>n(e).getBigUint64(t,!0),put:(e,t,a)=>(n(e).setBigUint64(t,a,!0),t+8)},t.INT64_LE={len:8,get:(e,t)=>n(e).getBigInt64(t,!0),put:(e,t,a)=>(n(e).setBigInt64(t,a,!0),t+8)},t.UINT64_BE={len:8,get:(e,t)=>n(e).getBigUint64(t),put:(e,t,a)=>(n(e).setBigUint64(t,a),t+8)},t.INT64_BE={len:8,get:(e,t)=>n(e).getBigInt64(t),put:(e,t,a)=>(n(e).setBigInt64(t,a),t+8)},t.Float16_BE={len:2,get(e,t){return r.read(e,t,!1,10,this.len)},put(e,t,a){return r.write(e,a,t,!1,10,this.len),t+this.len}},t.Float16_LE={len:2,get(e,t){return r.read(e,t,!0,10,this.len)},put(e,t,a){return r.write(e,a,t,!0,10,this.len),t+this.len}},t.Float32_BE={len:4,get:(e,t)=>n(e).getFloat32(t),put:(e,t,a)=>(n(e).setFloat32(t,a),t+4)},t.Float32_LE={len:4,get:(e,t)=>n(e).getFloat32(t,!0),put:(e,t,a)=>(n(e).setFloat32(t,a,!0),t+4)},t.Float64_BE={len:8,get:(e,t)=>n(e).getFloat64(t),put:(e,t,a)=>(n(e).setFloat64(t,a),t+8)},t.Float64_LE={len:8,get:(e,t)=>n(e).getFloat64(t,!0),put:(e,t,a)=>(n(e).setFloat64(t,a,!0),t+8)},t.Float80_BE={len:10,get(e,t){return r.read(e,t,!1,63,this.len)},put(e,t,a){return r.write(e,a,t,!1,63,this.len),t+this.len}},t.Float80_LE={len:10,get(e,t){return r.read(e,t,!0,63,this.len)},put(e,t,a){return r.write(e,a,t,!0,63,this.len),t+this.len}};class s{constructor(e){this.len=e}get(e,t){}}t.IgnoreType=s;class o{constructor(e){this.len=e}get(e,t){return e.subarray(t,t+this.len)}}t.Uint8ArrayType=o;class l{constructor(e){this.len=e}get(e,t){return i.from(e.subarray(t,t+this.len))}}t.BufferType=l;class c{constructor(e,t){this.len=e,this.encoding=t}get(e,t){return i.from(e).toString(this.encoding,t,t+this.len)}}t.StringType=c;class d{constructor(e){this.len=e}static decode(e,t,a){let i="";for(let r=t;r<a;++r)i+=d.codePointToString(d.singleByteDecoder(e[r]));return i}static inRange(e,t,a){return t<=e&&e<=a}static codePointToString(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(((e-=65536)>>10)+55296,(1023&e)+56320)}static singleByteDecoder(e){if(d.inRange(e,0,127))return e;let t=d.windows1252[e-128];if(null===t)throw Error("invaliding encoding");return t}get(e,t=0){return d.decode(e,t,t+this.len)}}t.AnsiStringType=d,d.windows1252=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]},28985:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Deferred=void 0;class a{constructor(){this.resolve=()=>null,this.reject=()=>null,this.promise=new Promise((e,t)=>{this.reject=t,this.resolve=e})}}t.Deferred=a},37279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EndOfStreamError=t.defaultMessages=void 0,t.defaultMessages="End-Of-Stream";class a extends Error{constructor(){super(t.defaultMessages)}}t.EndOfStreamError=a},56654:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StreamReader=t.EndOfStreamError=void 0;let i=a(37279),r=a(28985);var n=a(37279);Object.defineProperty(t,"EndOfStreamError",{enumerable:!0,get:function(){return n.EndOfStreamError}});let s=1048576;class o{constructor(e){if(this.s=e,this.deferred=null,this.endOfStream=!1,this.peekQueue=[],!e.read||!e.once)throw Error("Expected an instance of stream.Readable");this.s.once("end",()=>this.reject(new i.EndOfStreamError)),this.s.once("error",e=>this.reject(e)),this.s.once("close",()=>this.reject(Error("Stream closed")))}async peek(e,t,a){let i=await this.read(e,t,a);return this.peekQueue.push(e.subarray(t,t+i)),i}async read(e,t,a){if(0===a)return 0;if(0===this.peekQueue.length&&this.endOfStream)throw new i.EndOfStreamError;let r=a,n=0;for(;this.peekQueue.length>0&&r>0;){let a=this.peekQueue.pop();if(!a)throw Error("peekData should be defined");let i=Math.min(a.length,r);e.set(a.subarray(0,i),t+n),n+=i,r-=i,i<a.length&&this.peekQueue.push(a.subarray(i))}for(;r>0&&!this.endOfStream;){let a=Math.min(r,s),i=await this.readFromStream(e,t+n,a);if(n+=i,i<a)break;r-=i}return n}async readFromStream(e,t,a){let i=this.s.read(a);if(i)return e.set(i,t),i.length;{let i={buffer:e,offset:t,length:a,deferred:new r.Deferred};return this.deferred=i.deferred,this.s.once("readable",()=>{this.readDeferred(i)}),i.deferred.promise}}readDeferred(e){let t=this.s.read(e.length);t?(e.buffer.set(t,e.offset),e.deferred.resolve(t.length),this.deferred=null):this.s.once("readable",()=>{this.readDeferred(e)})}reject(e){this.endOfStream=!0,this.deferred&&(this.deferred.reject(e),this.deferred=null)}}t.StreamReader=o},55167:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StreamReader=t.EndOfStreamError=void 0;var i=a(37279);Object.defineProperty(t,"EndOfStreamError",{enumerable:!0,get:function(){return i.EndOfStreamError}});var r=a(56654);Object.defineProperty(t,"StreamReader",{enumerable:!0,get:function(){return r.StreamReader}})},80842:function(e,t,a){"use strict";var i=a(48764).Buffer;Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractTokenizer=void 0;let r=a(55167);class n{constructor(e){this.position=0,this.numBuffer=new Uint8Array(8),this.fileInfo=e||{}}async readToken(e,t=this.position){let a=i.alloc(e.len);if(await this.readBuffer(a,{position:t})<e.len)throw new r.EndOfStreamError;return e.get(a,0)}async peekToken(e,t=this.position){let a=i.alloc(e.len);if(await this.peekBuffer(a,{position:t})<e.len)throw new r.EndOfStreamError;return e.get(a,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new r.EndOfStreamError;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,{length:e.len})<e.len)throw new r.EndOfStreamError;return e.get(this.numBuffer,0)}async ignore(e){if(void 0!==this.fileInfo.size){let t=this.fileInfo.size-this.position;if(e>t)return this.position+=t,t}return this.position+=e,e}async close(){}normalizeOptions(e,t){if(t&&void 0!==t.position&&t.position<this.position)throw Error("`options.position` must be equal or greater than `tokenizer.position`");return t?{mayBeLess:!0===t.mayBeLess,offset:t.offset?t.offset:0,length:t.length?t.length:e.length-(t.offset?t.offset:0),position:t.position?t.position:this.position}:{mayBeLess:!1,offset:0,length:e.length,position:this.position}}}t.AbstractTokenizer=n},30778:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferTokenizer=void 0;let i=a(55167),r=a(80842);class n extends r.AbstractTokenizer{constructor(e,t){super(t),this.uint8Array=e,this.fileInfo.size=this.fileInfo.size?this.fileInfo.size:e.length}async readBuffer(e,t){if(t&&t.position){if(t.position<this.position)throw Error("`options.position` must be equal or greater than `tokenizer.position`");this.position=t.position}let a=await this.peekBuffer(e,t);return this.position+=a,a}async peekBuffer(e,t){let a=this.normalizeOptions(e,t),r=Math.min(this.uint8Array.length-a.position,a.length);if(a.mayBeLess||!(r<a.length))return e.set(this.uint8Array.subarray(a.position,a.position+r),a.offset),r;throw new i.EndOfStreamError}async close(){}}t.BufferTokenizer=n},20599:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReadStreamTokenizer=void 0;let i=a(80842),r=a(55167),n=256e3;class s extends i.AbstractTokenizer{constructor(e,t){super(t),this.streamReader=new r.StreamReader(e)}async getFileInfo(){return this.fileInfo}async readBuffer(e,t){let a=this.normalizeOptions(e,t),i=a.position-this.position;if(i>0)return await this.ignore(i),this.readBuffer(e,t);if(i<0)throw Error("`options.position` must be equal or greater than `tokenizer.position`");if(0===a.length)return 0;let n=await this.streamReader.read(e,a.offset,a.length);if(this.position+=n,(!t||!t.mayBeLess)&&n<a.length)throw new r.EndOfStreamError;return n}async peekBuffer(e,t){let a=this.normalizeOptions(e,t),i=0;if(a.position){let t=a.position-this.position;if(t>0){let r=new Uint8Array(a.length+t);return i=await this.peekBuffer(r,{mayBeLess:a.mayBeLess}),e.set(r.subarray(t),a.offset),i-t}if(t<0)throw Error("Cannot peek from a negative offset in a stream")}if(a.length>0){try{i=await this.streamReader.peek(e,a.offset,a.length)}catch(e){if(t&&t.mayBeLess&&e instanceof r.EndOfStreamError)return 0;throw e}if(!a.mayBeLess&&i<a.length)throw new r.EndOfStreamError}return i}async ignore(e){let t=Math.min(n,e),a=new Uint8Array(t),i=0;for(;i<e;){let r=e-i,n=await this.readBuffer(a,{length:Math.min(t,r)});if(n<0)return n;i+=n}return i}}t.ReadStreamTokenizer=s},35849:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromBuffer=t.fromStream=t.EndOfStreamError=void 0;let i=a(20599),r=a(30778);var n=a(55167);function s(e,t){return t=t||{},new i.ReadStreamTokenizer(e,t)}function o(e,t){return new r.BufferTokenizer(e,t)}Object.defineProperty(t,"EndOfStreamError",{enumerable:!0,get:function(){return n.EndOfStreamError}}),t.fromStream=s,t.fromBuffer=o}}]);