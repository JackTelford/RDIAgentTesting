(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8778],
    {
        26470: function (e, r, t) {
            "use strict";
            var n = t(34155);
            function o(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e));
            }
            function i(e, r) {
                for (var t, n = "", o = 0, i = -1, f = 0, a = 0; a <= e.length; ++a) {
                    if (a < e.length) t = e.charCodeAt(a);
                    else if (47 === t) break;
                    else t = 47;
                    if (47 === t) {
                        if (i === a - 1 || 1 === f);
                        else if (i !== a - 1 && 2 === f) {
                            if (n.length < 2 || 2 !== o || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
                                if (n.length > 2) {
                                    var l = n.lastIndexOf("/");
                                    if (l !== n.length - 1) {
                                        -1 === l ? ((n = ""), (o = 0)) : (o = (n = n.slice(0, l)).length - 1 - n.lastIndexOf("/")), (i = a), (f = 0);
                                        continue;
                                    }
                                } else if (2 === n.length || 1 === n.length) {
                                    (n = ""), (o = 0), (i = a), (f = 0);
                                    continue;
                                }
                            }
                            r && (n.length > 0 ? (n += "/..") : (n = ".."), (o = 2));
                        } else n.length > 0 ? (n += "/" + e.slice(i + 1, a)) : (n = e.slice(i + 1, a)), (o = a - i - 1);
                        (i = a), (f = 0);
                    } else 46 === t && -1 !== f ? ++f : (f = -1);
                }
                return n;
            }
            var f = {
                resolve: function () {
                    for (var e, r, t = "", f = !1, a = arguments.length - 1; a >= -1 && !f; a--)
                        a >= 0 ? (r = arguments[a]) : (void 0 === e && (e = n.cwd()), (r = e)), o(r), 0 !== r.length && ((t = r + "/" + t), (f = 47 === r.charCodeAt(0)));
                    return ((t = i(t, !f)), f) ? (t.length > 0 ? "/" + t : "/") : t.length > 0 ? t : ".";
                },
                normalize: function (e) {
                    if ((o(e), 0 === e.length)) return ".";
                    var r = 47 === e.charCodeAt(0),
                        t = 47 === e.charCodeAt(e.length - 1);
                    return (0 !== (e = i(e, !r)).length || r || (e = "."), e.length > 0 && t && (e += "/"), r) ? "/" + e : e;
                },
                isAbsolute: function (e) {
                    return o(e), e.length > 0 && 47 === e.charCodeAt(0);
                },
                join: function () {
                    if (0 == arguments.length) return ".";
                    for (var e, r = 0; r < arguments.length; ++r) {
                        var t = arguments[r];
                        o(t), t.length > 0 && (void 0 === e ? (e = t) : (e += "/" + t));
                    }
                    return void 0 === e ? "." : f.normalize(e);
                },
                relative: function (e, r) {
                    if ((o(e), o(r), e === r || (e = f.resolve(e)) === (r = f.resolve(r)))) return "";
                    for (var t = 1; t < e.length && 47 === e.charCodeAt(t); ++t);
                    for (var n = e.length, i = n - t, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                    for (var l = r.length - a, u = i < l ? i : l, s = -1, c = 0; c <= u; ++c) {
                        if (c === u) {
                            if (l > u) {
                                if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                if (0 === c) return r.slice(a + c);
                            } else i > u && (47 === e.charCodeAt(t + c) ? (s = c) : 0 === c && (s = 0));
                            break;
                        }
                        var h = e.charCodeAt(t + c);
                        if (h !== r.charCodeAt(a + c)) break;
                        47 === h && (s = c);
                    }
                    var g = "";
                    for (c = t + s + 1; c <= n; ++c) (c === n || 47 === e.charCodeAt(c)) && (0 === g.length ? (g += "..") : (g += "/.."));
                    return g.length > 0 ? g + r.slice(a + s) : ((a += s), 47 === r.charCodeAt(a) && ++a, r.slice(a));
                },
                _makeLong: function (e) {
                    return e;
                },
                dirname: function (e) {
                    if ((o(e), 0 === e.length)) return ".";
                    for (var r = e.charCodeAt(0), t = 47 === r, n = -1, i = !0, f = e.length - 1; f >= 1; --f)
                        if (47 === (r = e.charCodeAt(f))) {
                            if (!i) {
                                n = f;
                                break;
                            }
                        } else i = !1;
                    return -1 === n ? (t ? "/" : ".") : t && 1 === n ? "//" : e.slice(0, n);
                },
                basename: function (e, r) {
                    if (void 0 !== r && "string" != typeof r) throw TypeError('"ext" argument must be a string');
                    o(e);
                    var t,
                        n = 0,
                        i = -1,
                        f = !0;
                    if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var a = r.length - 1,
                            l = -1;
                        for (t = e.length - 1; t >= 0; --t) {
                            var u = e.charCodeAt(t);
                            if (47 === u) {
                                if (!f) {
                                    n = t + 1;
                                    break;
                                }
                            } else -1 === l && ((f = !1), (l = t + 1)), a >= 0 && (u === r.charCodeAt(a) ? -1 == --a && (i = t) : ((a = -1), (i = l)));
                        }
                        return n === i ? (i = l) : -1 === i && (i = e.length), e.slice(n, i);
                    }
                    for (t = e.length - 1; t >= 0; --t)
                        if (47 === e.charCodeAt(t)) {
                            if (!f) {
                                n = t + 1;
                                break;
                            }
                        } else -1 === i && ((f = !1), (i = t + 1));
                    return -1 === i ? "" : e.slice(n, i);
                },
                extname: function (e) {
                    o(e);
                    for (var r = -1, t = 0, n = -1, i = !0, f = 0, a = e.length - 1; a >= 0; --a) {
                        var l = e.charCodeAt(a);
                        if (47 === l) {
                            if (!i) {
                                t = a + 1;
                                break;
                            }
                            continue;
                        }
                        -1 === n && ((i = !1), (n = a + 1)), 46 === l ? (-1 === r ? (r = a) : 1 !== f && (f = 1)) : -1 !== r && (f = -1);
                    }
                    return -1 === r || -1 === n || 0 === f || (1 === f && r === n - 1 && r === t + 1) ? "" : e.slice(r, n);
                },
                format: function (e) {
                    var r, t;
                    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return (r = e.dir || e.root), (t = e.base || (e.name || "") + (e.ext || "")), r ? (r === e.root ? r + t : r + "/" + t) : t;
                },
                parse: function (e) {
                    o(e);
                    var r,
                        t = { root: "", dir: "", base: "", ext: "", name: "" };
                    if (0 === e.length) return t;
                    var n = e.charCodeAt(0),
                        i = 47 === n;
                    i ? ((t.root = "/"), (r = 1)) : (r = 0);
                    for (var f = -1, a = 0, l = -1, u = !0, s = e.length - 1, c = 0; s >= r; --s) {
                        if (47 === (n = e.charCodeAt(s))) {
                            if (!u) {
                                a = s + 1;
                                break;
                            }
                            continue;
                        }
                        -1 === l && ((u = !1), (l = s + 1)), 46 === n ? (-1 === f ? (f = s) : 1 !== c && (c = 1)) : -1 !== f && (c = -1);
                    }
                    return (
                        -1 === f || -1 === l || 0 === c || (1 === c && f === l - 1 && f === a + 1)
                            ? -1 !== l && (0 === a && i ? (t.base = t.name = e.slice(1, l)) : (t.base = t.name = e.slice(a, l)))
                            : (0 === a && i ? ((t.name = e.slice(1, f)), (t.base = e.slice(1, l))) : ((t.name = e.slice(a, f)), (t.base = e.slice(a, l))), (t.ext = e.slice(f, l))),
                        a > 0 ? (t.dir = e.slice(0, a - 1)) : i && (t.dir = "/"),
                        t
                    );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
            };
            (f.posix = f), (e.exports = f);
        },
        61798: function (e, r, t) {
            "use strict";
            var n = t(34155),
                o = t(89509).Buffer,
                i = t.g.crypto || t.g.msCrypto;
            i && i.getRandomValues
                ? (e.exports = function (e, r) {
                    if (e > 4294967295) throw RangeError("requested too many random bytes");
                    var t = o.allocUnsafe(e);
                    if (e > 0) {
                        if (e > 65536) for (var f = 0; f < e; f += 65536) i.getRandomValues(t.slice(f, f + 65536));
                        else i.getRandomValues(t);
                    }
                    return "function" == typeof r
                        ? n.nextTick(function () {
                            r(null, t);
                        })
                        : t;
                })
                : (e.exports = function () {
                    throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
                });
        },
        77963: function (e, r, t) {
            "use strict";
            var n = t(34155);
            function o() {
                throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
            }
            var i = t(89509);
            t(61798);
            var f = i.Buffer,
                a = i.kMaxLength,
                l = t.g.crypto || t.g.msCrypto;
            function u(e, r) {
                if ("number" != typeof e || e != e) throw TypeError("offset must be a number");
                if (e > 4294967295 || e < 0) throw TypeError("offset must be a uint32");
                if (e > a || e > r) throw RangeError("offset out of range");
            }
            function s(e, r, t) {
                if ("number" != typeof e || e != e) throw TypeError("size must be a number");
                if (e > 4294967295 || e < 0) throw TypeError("size must be a uint32");
                if (e + r > t || e > a) throw RangeError("buffer too small");
            }
            function c(e, r, t, o) {
                var i = new Uint8Array(e.buffer, r, t);
                if ((l.getRandomValues(i), o)) {
                    n.nextTick(function () {
                        o(null, e);
                    });
                    return;
                }
                return e;
            }
            l && l.getRandomValues
                ? ((r.randomFill = function (e, r, n, o) {
                    if (!f.isBuffer(e) && !(e instanceof t.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                    if ("function" == typeof r) (o = r), (r = 0), (n = e.length);
                    else if ("function" == typeof n) (o = n), (n = e.length - r);
                    else if ("function" != typeof o) throw TypeError('"cb" argument must be a function');
                    return u(r, e.length), s(n, r, e.length), c(e, r, n, o);
                }),
                    (r.randomFillSync = function (e, r, n) {
                        if ((void 0 === r && (r = 0), !f.isBuffer(e) && !(e instanceof t.g.Uint8Array))) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                        return u(r, e.length), void 0 === n && (n = e.length - r), s(n, r, e.length), c(e, r, n);
                    }))
                : ((r.randomFill = o), (r.randomFillSync = o));
        },
        89509: function (e, r, t) {
            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n = t(48764),
                o = n.Buffer;
            function i(e, r) {
                for (var t in e) r[t] = e[t];
            }
            function f(e, r, t) {
                return o(e, r, t);
            }
            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? (e.exports = n) : (i(n, r), (r.Buffer = f)),
                (f.prototype = Object.create(o.prototype)),
                i(o, f),
                (f.from = function (e, r, t) {
                    if ("number" == typeof e) throw TypeError("Argument must not be a number");
                    return o(e, r, t);
                }),
                (f.alloc = function (e, r, t) {
                    if ("number" != typeof e) throw TypeError("Argument must be a number");
                    var n = o(e);
                    return void 0 !== r ? ("string" == typeof t ? n.fill(r, t) : n.fill(r)) : n.fill(0), n;
                }),
                (f.allocUnsafe = function (e) {
                    if ("number" != typeof e) throw TypeError("Argument must be a number");
                    return o(e);
                }),
                (f.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e) throw TypeError("Argument must be a number");
                    return n.SlowBuffer(e);
                });
        },
        62907: function (e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 });
            let t = () => {
                if (("performance" in self || (self.performance = {}), (Date.now = Date.now || (() => new Date().getTime())), "now" in self.performance == !1)) {
                    let e = Date.now();
                    performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), (self.performance.now = () => Date.now() - e);
                }
            },
                n = (e) => {
                    t();
                    let r = Math.floor((Date.now() - performance.now()) * 0.001),
                        n = 0.001 * performance.now(),
                        o = Math.floor(n) + r,
                        i = Math.floor((n % 1) * 1e9);
                    return e && ((o -= e[0]), (i -= e[1]) < 0 && (o--, (i += 1e9))), [o, i];
                };
            (n.bigint = (e) => {
                let r = n(e);
                return 1e9 * r[0] + r[1];
            }),
                (r.default = n);
        },
        88778: function (e, r, t) {
            "use strict";
            var n =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(r, "__esModule", { value: !0 });
            let o = t(77963),
                i = n(t(26470)),
                f = n(t(62907)),
                a = t(71359),
                l = {
                    hrtime: f.default.bigint,
                    exit: (e) => {
                        throw new a.WASIExitError(e);
                    },
                    kill: (e) => {
                        throw new a.WASIKillError(e);
                    },
                    randomFillSync: o.randomFillSync,
                    isTTY: () => !0,
                    path: i.default,
                    fs: null,
                };
            r.default = l;
        },
        71359: function (e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }), (r.WASIKillError = r.WASIExitError = r.WASIError = void 0);
            class t extends Error {
                constructor(e) {
                    super(), (this.errno = e), Object.setPrototypeOf(this, t.prototype);
                }
            }
            r.WASIError = t;
            class n extends Error {
                constructor(e) {
                    super(`WASI Exit error: ${e}`), (this.code = e), Object.setPrototypeOf(this, n.prototype);
                }
            }
            r.WASIExitError = n;
            class o extends Error {
                constructor(e) {
                    super(`WASI Kill signal: ${e}`), (this.signal = e), Object.setPrototypeOf(this, o.prototype);
                }
            }
            r.WASIKillError = o;
        },
    },
]);




// (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8778],{26470:function(e,r,t){"use strict";var n=t(34155);function o(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,r){for(var t,n="",o=0,i=-1,f=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else if(47===t)break;else t=47;if(47===t){if(i===a-1||1===f);else if(i!==a-1&&2===f){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",o=0):o=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),i=a,f=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=a,f=0;continue}}r&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),o=a-i-1;i=a,f=0}else 46===t&&-1!==f?++f:f=-1}return n}var f={resolve:function(){for(var e,r,t="",f=!1,a=arguments.length-1;a>=-1&&!f;a--)a>=0?r=arguments[a]:(void 0===e&&(e=n.cwd()),r=e),o(r),0!==r.length&&(t=r+"/"+t,f=47===r.charCodeAt(0));return(t=i(t,!f),f)?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var r=47===e.charCodeAt(0),t=47===e.charCodeAt(e.length-1);return(0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&t&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];o(t),t.length>0&&(void 0===e?e=t:e+="/"+t)}return void 0===e?".":f.normalize(e)},relative:function(e,r){if(o(e),o(r),e===r||(e=f.resolve(e))===(r=f.resolve(r)))return"";for(var t=1;t<e.length&&47===e.charCodeAt(t);++t);for(var n=e.length,i=n-t,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var l=r.length-a,u=i<l?i:l,s=-1,c=0;c<=u;++c){if(c===u){if(l>u){if(47===r.charCodeAt(a+c))return r.slice(a+c+1);if(0===c)return r.slice(a+c)}else i>u&&(47===e.charCodeAt(t+c)?s=c:0===c&&(s=0));break}var h=e.charCodeAt(t+c);if(h!==r.charCodeAt(a+c))break;47===h&&(s=c)}var g="";for(c=t+s+1;c<=n;++c)(c===n||47===e.charCodeAt(c))&&(0===g.length?g+="..":g+="/..");return g.length>0?g+r.slice(a+s):(a+=s,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var r=e.charCodeAt(0),t=47===r,n=-1,i=!0,f=e.length-1;f>=1;--f)if(47===(r=e.charCodeAt(f))){if(!i){n=f;break}}else i=!1;return -1===n?t?"/":".":t&&1===n?"//":e.slice(0,n)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');o(e);var t,n=0,i=-1,f=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,l=-1;for(t=e.length-1;t>=0;--t){var u=e.charCodeAt(t);if(47===u){if(!f){n=t+1;break}}else -1===l&&(f=!1,l=t+1),a>=0&&(u===r.charCodeAt(a)?-1==--a&&(i=t):(a=-1,i=l))}return n===i?i=l:-1===i&&(i=e.length),e.slice(n,i)}for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!f){n=t+1;break}}else -1===i&&(f=!1,i=t+1);return -1===i?"":e.slice(n,i)},extname:function(e){o(e);for(var r=-1,t=0,n=-1,i=!0,f=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47===l){if(!i){t=a+1;break}continue}-1===n&&(i=!1,n=a+1),46===l?-1===r?r=a:1!==f&&(f=1):-1!==r&&(f=-1)}return -1===r||-1===n||0===f||1===f&&r===n-1&&r===t+1?"":e.slice(r,n)},format:function(e){var r,t;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||""),r?r===e.root?r+t:r+"/"+t:t},parse:function(e){o(e);var r,t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n=e.charCodeAt(0),i=47===n;i?(t.root="/",r=1):r=0;for(var f=-1,a=0,l=-1,u=!0,s=e.length-1,c=0;s>=r;--s){if(47===(n=e.charCodeAt(s))){if(!u){a=s+1;break}continue}-1===l&&(u=!1,l=s+1),46===n?-1===f?f=s:1!==c&&(c=1):-1!==f&&(c=-1)}return -1===f||-1===l||0===c||1===c&&f===l-1&&f===a+1?-1!==l&&(0===a&&i?t.base=t.name=e.slice(1,l):t.base=t.name=e.slice(a,l)):(0===a&&i?(t.name=e.slice(1,f),t.base=e.slice(1,l)):(t.name=e.slice(a,f),t.base=e.slice(a,l)),t.ext=e.slice(f,l)),a>0?t.dir=e.slice(0,a-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};f.posix=f,e.exports=f},61798:function(e,r,t){"use strict";var n=t(34155),o=t(89509).Buffer,i=t.g.crypto||t.g.msCrypto;i&&i.getRandomValues?e.exports=function(e,r){if(e>4294967295)throw RangeError("requested too many random bytes");var t=o.allocUnsafe(e);if(e>0){if(e>65536)for(var f=0;f<e;f+=65536)i.getRandomValues(t.slice(f,f+65536));else i.getRandomValues(t)}return"function"==typeof r?n.nextTick(function(){r(null,t)}):t}:e.exports=function(){throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},77963:function(e,r,t){"use strict";var n=t(34155);function o(){throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var i=t(89509);t(61798);var f=i.Buffer,a=i.kMaxLength,l=t.g.crypto||t.g.msCrypto;function u(e,r){if("number"!=typeof e||e!=e)throw TypeError("offset must be a number");if(e>4294967295||e<0)throw TypeError("offset must be a uint32");if(e>a||e>r)throw RangeError("offset out of range")}function s(e,r,t){if("number"!=typeof e||e!=e)throw TypeError("size must be a number");if(e>4294967295||e<0)throw TypeError("size must be a uint32");if(e+r>t||e>a)throw RangeError("buffer too small")}function c(e,r,t,o){var i=new Uint8Array(e.buffer,r,t);if(l.getRandomValues(i),o){n.nextTick(function(){o(null,e)});return}return e}l&&l.getRandomValues?(r.randomFill=function(e,r,n,o){if(!f.isBuffer(e)&&!(e instanceof t.g.Uint8Array))throw TypeError('"buf" argument must be a Buffer or Uint8Array');if("function"==typeof r)o=r,r=0,n=e.length;else if("function"==typeof n)o=n,n=e.length-r;else if("function"!=typeof o)throw TypeError('"cb" argument must be a function');return u(r,e.length),s(n,r,e.length),c(e,r,n,o)},r.randomFillSync=function(e,r,n){if(void 0===r&&(r=0),!f.isBuffer(e)&&!(e instanceof t.g.Uint8Array))throw TypeError('"buf" argument must be a Buffer or Uint8Array');return u(r,e.length),void 0===n&&(n=e.length-r),s(n,r,e.length),c(e,r,n)}):(r.randomFill=o,r.randomFillSync=o)},89509:function(e,r,t){/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var n=t(48764),o=n.Buffer;function i(e,r){for(var t in e)r[t]=e[t]}function f(e,r,t){return o(e,r,t)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=n:(i(n,r),r.Buffer=f),f.prototype=Object.create(o.prototype),i(o,f),f.from=function(e,r,t){if("number"==typeof e)throw TypeError("Argument must not be a number");return o(e,r,t)},f.alloc=function(e,r,t){if("number"!=typeof e)throw TypeError("Argument must be a number");var n=o(e);return void 0!==r?"string"==typeof t?n.fill(r,t):n.fill(r):n.fill(0),n},f.allocUnsafe=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return o(e)},f.allocUnsafeSlow=function(e){if("number"!=typeof e)throw TypeError("Argument must be a number");return n.SlowBuffer(e)}},62907:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});let t=()=>{if("performance"in self||(self.performance={}),Date.now=Date.now||(()=>new Date().getTime()),"now"in self.performance==!1){let e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),self.performance.now=()=>Date.now()-e}},n=e=>{t();let r=Math.floor((Date.now()-performance.now())*.001),n=.001*performance.now(),o=Math.floor(n)+r,i=Math.floor(n%1*1e9);return e&&(o-=e[0],(i-=e[1])<0&&(o--,i+=1e9)),[o,i]};n.bigint=e=>{let r=n(e);return 1e9*r[0]+r[1]},r.default=n},88778:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});let o=t(77963),i=n(t(26470)),f=n(t(62907)),a=t(71359),l={hrtime:f.default.bigint,exit:e=>{throw new a.WASIExitError(e)},kill:e=>{throw new a.WASIKillError(e)},randomFillSync:o.randomFillSync,isTTY:()=>!0,path:i.default,fs:null};r.default=l},71359:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.WASIKillError=r.WASIExitError=r.WASIError=void 0;class t extends Error{constructor(e){super(),this.errno=e,Object.setPrototypeOf(this,t.prototype)}}r.WASIError=t;class n extends Error{constructor(e){super(`WASI Exit error: ${e}`),this.code=e,Object.setPrototypeOf(this,n.prototype)}}r.WASIExitError=n;class o extends Error{constructor(e){super(`WASI Kill signal: ${e}`),this.signal=e,Object.setPrototypeOf(this,o.prototype)}}r.WASIKillError=o}}]);