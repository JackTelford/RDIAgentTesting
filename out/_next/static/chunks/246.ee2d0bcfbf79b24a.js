"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [246],
    {
        80246: function (t, e, r) {
            async function a(t, e) {
                let r;
                let a = t[Symbol.asyncIterator]
                    ? t[Symbol.asyncIterator]()
                    : t[Symbol.iterator]
                        ? t[Symbol.iterator]()
                        : t.next
                            ? t
                            : ((r = [t]),
                            {
                                next: () => Promise.resolve({ done: 0 === r.length, value: r.pop() }),
                                return: () => ((r = []), {}),
                                [Symbol.asyncIterator]() {
                                    return this;
                                },
                            });
                for (; ;) {
                    let { value: t, done: r } = await a.next();
                    if ((t && (await e(t)), r)) break;
                }
                a.return && a.return();
            }
            async function n(t) {
                let e = 0,
                    r = [];
                await a(t, (t) => {
                    r.push(t), (e += t.byteLength);
                });
                let n = new Uint8Array(e),
                    o = 0;
                for (let t of r) n.set(t, o), (o += t.byteLength);
                return n;
            }
            async function o({ onProgress: t, url: e, method: r = "GET", headers: a = {}, body: o }) {
                o && (o = await n(o));
                let s = await fetch(e, { method: r, headers: a, body: o }),
                    u =
                        s.body && s.body.getReader
                            ? (function (t) {
                                if (t[Symbol.asyncIterator]) return t;
                                let e = t.getReader();
                                return {
                                    next: () => e.read(),
                                    return: () => (e.releaseLock(), {}),
                                    [Symbol.asyncIterator]() {
                                        return this;
                                    },
                                };
                            })(s.body)
                            : [new Uint8Array(await s.arrayBuffer())];
                for (let [t, e] of ((a = {}), s.headers.entries())) a[t] = e;
                return { url: s.url, method: s.method, statusCode: s.status, statusMessage: s.statusText, body: u, headers: a };
            }
            r.r(e),
                r.d(e, {
                    request: function () {
                        return o;
                    },
                }),
                (e.default = { request: o });
        },
    },
]);



// "use strict"; (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[246], { 80246: function (t, e, r) { async function a(t, e) { let r; let a = t[Symbol.asyncIterator] ? t[Symbol.asyncIterator]() : t[Symbol.iterator] ? t[Symbol.iterator]() : t.next ? t : (r = [t], { next: () => Promise.resolve({ done: 0 === r.length, value: r.pop() }), return: () => (r = [], {}), [Symbol.asyncIterator]() { return this } }); for (; ;) { let { value: t, done: r } = await a.next(); if (t && await e(t), r) break } a.return && a.return() } async function n(t) { let e = 0, r = []; await a(t, t => { r.push(t), e += t.byteLength }); let n = new Uint8Array(e), o = 0; for (let t of r) n.set(t, o), o += t.byteLength; return n } async function o({ onProgress: t, url: e, method: r = "GET", headers: a = {}, body: o }) { o && (o = await n(o)); let s = await fetch(e, { method: r, headers: a, body: o }), u = s.body && s.body.getReader ? function (t) { if (t[Symbol.asyncIterator]) return t; let e = t.getReader(); return { next: () => e.read(), return: () => (e.releaseLock(), {}), [Symbol.asyncIterator]() { return this } } }(s.body) : [new Uint8Array(await s.arrayBuffer())]; for (let [t, e] of (a = {}, s.headers.entries())) a[t] = e; return { url: s.url, method: s.method, statusCode: s.status, statusMessage: s.statusText, body: u, headers: a } } r.r(e), r.d(e, { request: function () { return o } }), e.default = { request: o } } }]);