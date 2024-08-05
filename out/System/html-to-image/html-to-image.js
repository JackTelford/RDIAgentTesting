!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).htmlToImage = {}));
})(this, function (t) {
    "use strict";
    function e(t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function c(t) {
                try {
                    l(r.next(t));
                } catch (t) {
                    i(t);
                }
            }
            function s(t) {
                try {
                    l(r.throw(t));
                } catch (t) {
                    i(t);
                }
            }
            function l(t) {
                var e;
                t.done
                    ? o(t.value)
                    : ((e = t.value),
                        e instanceof n
                            ? e
                            : new n(function (t) {
                                t(e);
                            })).then(c, s);
            }
            l((r = r.apply(t, e || [])).next());
        });
    }
    "function" == typeof SuppressedError && SuppressedError;
    const n = (() => {
        let t = 0;
        return () => ((t += 1), `u${`0000${((Math.random() * Math.pow(36, 4)) << 0).toString(36)}`.slice(-4)}${t}`);
    })();
    function r(t, e) {
        const n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
        return n ? parseFloat(n.replace("px", "")) : 0;
    }
    function o(t, e = {}) {
        return {
            width:
                e.width ||
                (function (t) {
                    const e = r(t, "border-left-width"),
                        n = r(t, "border-right-width");
                    return t.clientWidth + e + n;
                })(t),
            height:
                e.height ||
                (function (t) {
                    const e = r(t, "border-top-width"),
                        n = r(t, "border-bottom-width");
                    return t.clientHeight + e + n;
                })(t),
        };
    }
    const i = 16384;
    function c(t) {
        return new Promise((e, n) => {
            const r = new Image();
            (r.decode = () => e(r)), (r.onload = () => e(r)), (r.onerror = n), (r.crossOrigin = "anonymous"), (r.decoding = "async"), (r.src = t);
        });
    }
    let s = null;
    const l = "http://www.w3.org/2000/svg";
    let u = null;
    const d = () => {
        if (!u) {
            const t = document.createElementNS(l, "svg"),
                e = document.createElementNS(l, "foreignObject");
            e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("x", "0"), e.setAttribute("y", "0"), e.setAttribute("externalResourcesRequired", "true"), t.appendChild(e), (u = t);
        }
        return u.cloneNode(!0);
    };
    function a(t, e, n) {
        const r = d(),
            o = r.firstChild;
        return (
            r.setAttribute("width", `${e}`),
            r.setAttribute("height", `${n}`),
            r.setAttribute("viewBox", `0 0 ${e} ${n}`),
            o.appendChild(t),
            (function (t) {
                return `data:image/svg+xml;charset=utf-8,${encodeURIComponent((s || (s = new XMLSerializer())).serializeToString(t))}`;
            })(r)
        );
    }
    const h = (t, e) => {
        if (t instanceof e) return !0;
        const n = Object.getPrototypeOf(t);
        return null !== n && (n.constructor.name === e.name || h(n, e));
    },
        f = (t) => `${t.cssText} content: '${t.getPropertyValue("content").replace(/'|"/g, "")}';`,
        g = (t) => [...t].map((e) => `${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e) ? " !important" : ""};`).join(" ");
    function p(t, e, r) {
        const o = window.getComputedStyle(t, r),
            i = o.getPropertyValue("content");
        if (!i || "none" === i) return;
        const c = n();
        try {
            e.className = `${e.className} ${c}`;
        } catch (t) {
            return;
        }
        const s = document.createElement("style");
        s.appendChild(
            (function (t, e, n) {
                const r = `.${t}:${e}`,
                    o = n.cssText ? f(n) : g(n);
                return document.createTextNode(`${r}{${o}}`);
            })(c, r, o)
        ),
            e.appendChild(s);
    }
    const m = "application/font-woff",
        y = "image/jpeg",
        v = { woff: m, woff2: m, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: y, jpeg: y, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
    function w(t) {
        const e = (function (t) {
            const e = /\.([^./]*?)$/g.exec(t);
            return e ? e[1] : "";
        })(t).toLowerCase();
        return v[e] || "";
    }
    function b(t) {
        return t.startsWith("data:");
    }
    function E(t, n, r) {
        return e(this, void 0, void 0, function* () {
            const e = yield fetch(t, n);
            if (404 === e.status) throw new Error(`Resource "${e.url}" not found`);
            return new Promise((t, n) => {
                const o = new FileReader();
                (o.onerror = n),
                    (o.onloadend = () => {
                        try {
                            t(r({ res: e, result: o.result }));
                        } catch (t) {
                            n(t);
                        }
                    }),
                    e.blob().then((t) => o.readAsDataURL(t));
            });
        });
    }
    const S = {};
    function x(t, n, r) {
        return e(this, void 0, void 0, function* () {
            const e = (function (t, e, n) {
                let r = n ? t : t.replace(/\?.*/, "");
                return /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
            })(t, n, r.includeQueryParams);
            if (null != S[e]) return S[e];
            let o;
            r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + Date.now());
            try {
                const i = yield E(
                    t,
                    Object.assign({ priority: "high" }, r.fetchRequestInit),
                    ({ res: t, result: e }) => (
                        n || (n = t.headers.get("Content-Type") || ""),
                        (function (t) {
                            return t.split(/,/)[1];
                        })(e)
                    )
                );
                (o = (function (t, e) {
                    return `data:${e};base64,${t}`;
                })(i, n)),
                    (S[e] = o);
            } catch (e) {
                o = r.imagePlaceholder || "";
                let n = `Failed to fetch resource: ${t}`;
                e && (n = "string" == typeof e ? e : e.message), n && console.warn(n);
            }
            return o;
        });
    }
    function $(t, n) {
        return e(this, void 0, void 0, function* () {
            return h(t, HTMLCanvasElement)
                ? (function (t) {
                    return e(this, void 0, void 0, function* () {
                        const e = t.toDataURL();
                        return "data:," === e ? t.cloneNode(!1) : c(e);
                    });
                })(t)
                : h(t, HTMLVideoElement)
                    ? (function (t, n) {
                        return e(this, void 0, void 0, function* () {
                            if (t.currentSrc) {
                                const e = document.createElement("canvas"),
                                    n = e.getContext("2d", { desynchronized: !0 });
                                return (e.width = t.clientWidth), (e.height = t.clientHeight), null == n || n.drawImage(t, 0, 0, e.width, e.height), c(e.toDataURL());
                            }
                            const e = t.poster,
                                r = w(e);
                            return c(yield x(e, r, n));
                        });
                    })(t, n)
                    : h(t, HTMLIFrameElement)
                        ? (function (t) {
                            var n;
                            return e(this, void 0, void 0, function* () {
                                try {
                                    if (null === (n = null == t ? void 0 : t.contentDocument) || void 0 === n ? void 0 : n.body) return yield L(t.contentDocument.body, {}, !0);
                                } catch (t) { }
                                return t.cloneNode(!1);
                            });
                        })(t)
                        : t.cloneNode(!1);
        });
    }
    const C = (t) => null != t.tagName && "SLOT" === t.tagName.toUpperCase();
    function P(t, e) {
        return (
            h(e, Element) &&
            ((function (t, e) {
                const n = e.style;
                if (!n) return;
                const r = window.getComputedStyle(t);
                r.cssText
                    ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
                    : [...r].forEach((o) => {
                        let i = r.getPropertyValue(o);
                        switch (o) {
                            case "font-size":
                                if (i.endsWith("px")) {
                                    const t = Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1;
                                    i = `${t}px`;
                                }
                                break;
                            case "display":
                                "inline" === i && h(t, HTMLIFrameElement) && (i = "block");
                                break;
                            case "d": {
                                const t = e.getAttribute("d");
                                t && (i = `path(${t})`);
                            }
                        }
                        const c = r.getPropertyPriority(o);
                        c ? n.setProperty(o, i, c) : (n[o] = i);
                    });
            })(t, e),
                (function (t, e) {
                    p(t, e, ":before"), p(t, e, ":after");
                })(t, e),
                (function (t, e) {
                    var n;
                    h(t, HTMLTextAreaElement)
                        ? (e.innerHTML = t.value)
                        : h(t, HTMLInputElement)
                            ? e.setAttribute("value", t.value)
                            : h(t, HTMLSelectElement) && (null === (n = [...e.children].find((e) => t.value === e.getAttribute("value"))) || void 0 === n || n.setAttribute("selected", ""));
                })(t, e)),
            e
        );
    }
    const R = "http://www.w3.org/1999/xhtml";
    let T = null;
    const N = (t) => {
        const e = (() => {
            if (!T) {
                const t = document.createElementNS(R, "svg"),
                    e = document.createElementNS(R, "defs");
                t.setAttribute("xmlns", R), (t.style.position = "absolute"), (t.style.width = "0"), (t.style.height = "0"), (t.style.overflow = "hidden"), (t.style.display = "none"), t.appendChild(e), (T = t);
            }
            return T.cloneNode(!0);
        })(),
            n = e.firstChild;
        return Object.values(t).forEach((t) => n.appendChild(t)), e;
    };
    function L(t, n, r) {
        return e(this, void 0, void 0, function* () {
            return r || !n.filter || n.filter(t)
                ? $(t, n)
                    .then((r) =>
                        (function (t, n, r) {
                            var o, i;
                            return e(this, void 0, void 0, function* () {
                                let e = [];
                                return (
                                    (e =
                                        t.assignedNodes && C(t)
                                            ? [...t.assignedNodes()]
                                            : (null === (o = t.contentDocument) || void 0 === o ? void 0 : o.body) && h(t, HTMLIFrameElement)
                                                ? [...t.contentDocument.body.childNodes]
                                                : [...(null !== (i = t.shadowRoot) && void 0 !== i ? i : t).childNodes]),
                                    0 === e.length || h(t, HTMLVideoElement) || (yield Promise.all([...e].map((t) => L(t, r)))).forEach((t) => t && n.appendChild(t)),
                                    n
                                );
                            });
                        })(t, r, n)
                    )
                    .then((r) =>
                        (function (t, n) {
                            var r;
                            return e(this, void 0, void 0, function* () {
                                if (!h(t, SVGElement)) return t;
                                const o = (null === (r = t.querySelectorAll) || void 0 === r ? void 0 : r.call(t, "use")) || [];
                                if (0 === o.length) return t;
                                const i = {};
                                return (
                                    yield Promise.all(
                                        [...o].map((r) =>
                                            e(this, void 0, void 0, function* () {
                                                const e = r.getAttribute("xlink:href");
                                                !e || i[e] || t.querySelector(e) || (i[e] = yield L(document.querySelector(e), n, !0));
                                            })
                                        )
                                    ),
                                    Object.keys(i).length > 0 && t.appendChild(N(i)),
                                    t
                                );
                            });
                        })(P(t, r), n)
                    )
                : null;
        });
    }
    const k = /url\((['"]?)([^'"]+?)\1\)/g,
        I = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
        A = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
    function D(t) {
        return -1 !== t.search(k);
    }
    function M(t, n, r) {
        return e(this, void 0, void 0, function* () {
            if (!D(t)) return t;
            const o = (function (t, { preferredFontFormat: e }) {
                return e
                    ? t.replace(A, (t) => {
                        for (; ;) {
                            const [n, , r] = I.exec(t) || [];
                            if (!r) return "";
                            if (r === e) return `src: ${n};`;
                        }
                    })
                    : t;
            })(t, r),
                i = {},
                c = yield (function (t) {
                    const e = [];
                    return t.replace(k, (t, n, r) => (e.push(r), t)), e.filter((t) => !b(t));
                })(o);
            return (
                yield Promise.all(
                    c.map((t) =>
                        e(this, void 0, void 0, function* () {
                            try {
                                const e = n
                                    ? (function (t, e) {
                                        if (t.match(/^[a-z]+:\/\//i)) return t;
                                        if (t.match(/^\/\//)) return window.location.protocol + t;
                                        if (t.match(/^[a-z]+:/i)) return t;
                                        const n = document.implementation.createHTMLDocument(),
                                            r = n.createElement("base"),
                                            o = n.createElement("a");
                                        return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), (o.href = t), o.href;
                                    })(t, n)
                                    : t,
                                    o = w(t);
                                i[t] = yield x(e, o, r);
                            } catch (t) { }
                        })
                    )
                ),
                Object.entries(i).reduce(
                    (t, [e, n]) =>
                        n
                            ? t.replace(
                                (function (t) {
                                    const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                                    return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
                                })(e),
                                `$1${n}$3`
                            )
                            : t,
                    o
                )
            );
        });
    }
    function j(t, n, r) {
        var o;
        return e(this, void 0, void 0, function* () {
            const e = null === (o = n.style) || void 0 === o ? void 0 : o.getPropertyValue(t);
            if (e) {
                const o = yield M(e, null, r);
                return n.style.setProperty(t, o, n.style.getPropertyPriority(t)), !0;
            }
            return !1;
        });
    }
    function H(t, n) {
        return e(this, void 0, void 0, function* () {
            h(t, Element) &&
                (yield (function (t, n) {
                    return e(this, void 0, void 0, function* () {
                        (yield j("background", t, n)) || (yield j("background-image", t, n)), (yield j("mask", t, n)) || (yield j("mask-image", t, n));
                    });
                })(t, n),
                    yield (function (t, n) {
                        return e(this, void 0, void 0, function* () {
                            const e = h(t, HTMLImageElement);
                            if ((!e || b(t.src)) && (!h(t, SVGImageElement) || b(t.href.baseVal))) return;
                            const r = e ? t.src : t.href.baseVal,
                                o = yield x(r, w(r), n);
                            yield new Promise((n, r) => {
                                (t.onload = n),
                                    (t.onerror = r),
                                    e ? ("lazy" === t.loading && (t.loading = "eager"), (t.srcset = ""), (t.src = o), t.decode && t.decode().catch((t) => (0 === (null == t ? void 0 : t.code) ? n() : r(t)))) : (t.href.baseVal = o);
                            });
                        });
                    })(t, n),
                    yield (function (t, n) {
                        return e(this, void 0, void 0, function* () {
                            const e = [...t.childNodes].map((t) => H(t, n));
                            yield Promise.all(e).then(() => t);
                        });
                    })(t, n));
        });
    }
    const V = {};
    function F(t) {
        return e(this, void 0, void 0, function* () {
            let e = V[t];
            if (null != e) return e;
            const n = yield fetch(t),
                r = yield n.text();
            return (e = { url: t, cssText: r }), (V[t] = e), e;
        });
    }
    function O(t, n) {
        return e(this, void 0, void 0, function* () {
            let r = t.cssText;
            const o = /url\(["']?([^"')]+)["']?\)/g,
                i = (r.match(/url\([^)]+\)/g) || []).map((i) =>
                    e(this, void 0, void 0, function* () {
                        let e = i.replace(o, "$1");
                        return e.startsWith("https://") || (e = new URL(e, t.url).href), E(e, n.fetchRequestInit, ({ result: t }) => ((r = r.replace(i, `url(${t})`)), [i, t]));
                    })
                );
            return Promise.all(i).then(() => r);
        });
    }
    function U(t) {
        if (null == t) return [];
        const e = [];
        let n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
        const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
        for (; ;) {
            const t = r.exec(n);
            if (null === t) break;
            e.push(t[0]);
        }
        n = n.replace(r, "");
        const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
            i = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
        for (; ;) {
            let t = o.exec(n);
            if (null === t) {
                if (((t = i.exec(n)), null === t)) break;
                o.lastIndex = i.lastIndex;
            } else i.lastIndex = o.lastIndex;
            e.push(t[0]);
        }
        return e;
    }
    function z(t, n) {
        return e(this, void 0, void 0, function* () {
            if (null == t.ownerDocument) throw new Error("Provided element is not within a Document");
            const r = [...t.ownerDocument.styleSheets],
                o = yield (function (t, n) {
                    return e(this, void 0, void 0, function* () {
                        const e = [],
                            r = [];
                        return (
                            t.forEach((e) => {
                                if ("cssRules" in e)
                                    try {
                                        [...e.cssRules].forEach((t, o) => {
                                            if (t.type === CSSRule.IMPORT_RULE) {
                                                let i = o + 1;
                                                const c = F(t.href)
                                                    .then((t) => O(t, n))
                                                    .then((t) =>
                                                        U(t).forEach((t) => {
                                                            try {
                                                                e.insertRule(t, t.startsWith("@import") ? (i += 1) : e.cssRules.length);
                                                            } catch (e) {
                                                                console.error("Error inserting rule from remote css", { rule: t, error: e });
                                                            }
                                                        })
                                                    )
                                                    .catch((t) => {
                                                        console.error("Error loading remote css", t.toString());
                                                    });
                                                r.push(c);
                                            }
                                        });
                                    } catch (o) {
                                        const i = t.find((t) => null == t.href) || document.styleSheets[0];
                                        null != e.href &&
                                            r.push(
                                                F(e.href)
                                                    .then((t) => O(t, n))
                                                    .then((t) =>
                                                        U(t).forEach((t) => {
                                                            i.insertRule(t, e.cssRules.length);
                                                        })
                                                    )
                                                    .catch((t) => {
                                                        console.error("Error loading remote stylesheet", t);
                                                    })
                                            ),
                                            console.error("Error inlining remote css file", o);
                                    }
                            }),
                            Promise.all(r).then(
                                () => (
                                    t.forEach((t) => {
                                        if ("cssRules" in t)
                                            try {
                                                [...t.cssRules].forEach((t) => {
                                                    e.push(t);
                                                });
                                            } catch (e) {
                                                console.error(`Error while reading CSS rules from ${t.href}`, e);
                                            }
                                    }),
                                    e
                                )
                            )
                        );
                    });
                })(r, n);
            return (function (t) {
                return t.filter((t) => t.type === CSSRule.FONT_FACE_RULE && D(t.style.getPropertyValue("src")));
            })(o);
        });
    }
    function q(t, n) {
        return e(this, void 0, void 0, function* () {
            const e = yield z(t, n);
            return (yield Promise.all(
                e.map((t) => {
                    const e = t.parentStyleSheet ? t.parentStyleSheet.href : null;
                    return M(t.cssText, e, n);
                })
            )).join("\n");
        });
    }
    function W(t, n = {}) {
        return e(this, void 0, void 0, function* () {
            const { width: r, height: i } = o(t, n),
                c = yield L(t, n, !0);
            return (
                yield (function (t, n) {
                    return e(this, void 0, void 0, function* () {
                        const e = null != n.fontEmbedCSS ? n.fontEmbedCSS : n.skipFonts ? null : yield q(t, n);
                        if (e) {
                            const n = document.createElement("style"),
                                r = document.createTextNode(e);
                            n.appendChild(r), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
                        }
                    });
                })(c, n),
                yield H(c, n),
                (function (t, e) {
                    const { style: n } = t;
                    e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
                    const r = e.style;
                    null != r &&
                        Object.keys(r).forEach((t) => {
                            n[t] = r[t];
                        });
                })(c, n),
                a(c, r, i)
            );
        });
    }
    function B(t, n = {}) {
        return e(this, void 0, void 0, function* () {
            const { width: e, height: r } = o(t, n),
                s = yield W(t, n),
                l = yield c(s),
                u = document.createElement("canvas"),
                d = u.getContext("2d", { desynchronized: !0, willReadFrequently: !0 }),
                a =
                    n.pixelRatio ||
                    (function () {
                        let t, e;
                        try {
                            e = process;
                        } catch (t) { }
                        const n = e && e.env ? e.env.devicePixelRatio : null;
                        return n && ((t = parseInt(n, 10)), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
                    })(),
                h = n.canvasWidth || e,
                f = n.canvasHeight || r;
            return (
                (u.width = h * a),
                (u.height = f * a),
                n.skipAutoScale ||
                (function (t) {
                    (t.width > i || t.height > i) &&
                        (t.width > i && t.height > i
                            ? t.width > t.height
                                ? ((t.height *= i / t.width), (t.width = i))
                                : ((t.width *= i / t.height), (t.height = i))
                            : t.width > i
                                ? ((t.height *= i / t.width), (t.width = i))
                                : ((t.width *= i / t.height), (t.height = i)));
                })(u),
                (u.style.width = `${h}`),
                (u.style.height = `${f}`),
                n.backgroundColor && ((d.fillStyle = n.backgroundColor), d.fillRect(0, 0, u.width, u.height)),
                d.drawImage(l, 0, 0, u.width, u.height),
                u
            );
        });
    }
    (t.getFontEmbedCSS = function (t, n = {}) {
        return e(this, void 0, void 0, function* () {
            return q(t, n);
        });
    }),
        (t.toCanvas = B),
        (t.toJpeg = function (t, n = {}) {
            return e(this, void 0, void 0, function* () {
                return (yield B(t, n)).toDataURL("image/jpeg", n.quality || 1);
            });
        }),
        (t.toPixelData = function (t, n = {}) {
            return e(this, void 0, void 0, function* () {
                const { width: e, height: r } = o(t, n);
                return (yield B(t, n)).getContext("2d", { desynchronized: !0 }).getImageData(0, 0, e, r).data;
            });
        }),
        (t.toPng = function (t, n = {}) {
            return e(this, void 0, void 0, function* () {
                return (yield B(t, n)).toDataURL();
            });
        }),
        (t.toSvg = W);
});