"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5769],
    {
        25769: function (e, t, r) {
            r.d(t, {
                a: function () {
                    return n;
                },
                b: function () {
                    return l;
                },
                g: function () {
                    return b;
                },
                j: function () {
                    return k;
                },
                m: function () {
                    return E;
                },
                n: function () {
                    return H;
                },
                o: function () {
                    return M;
                },
                p: function () {
                    return J;
                },
                q: function () {
                    return L;
                },
                r: function () {
                    return F;
                },
                s: function () {
                    return V;
                },
                t: function () {
                    return I;
                },
            });
            var i = r(8893),
                s = Object.defineProperty;
            function n(...e) { }
            ((e, t) => {
                for (var r in t) s(e, r, { get: t[r], enumerable: !0 });
            })(
                {},
                {
                    QuickJSAsyncifyError: () => h,
                    QuickJSAsyncifySuspended: () => c,
                    QuickJSEmscriptenModuleError: () => d,
                    QuickJSMemoryLeakDetected: () => m,
                    QuickJSNotImplemented: () => l,
                    QuickJSPromisePending: () => p,
                    QuickJSUnknownIntrinsic: () => f,
                    QuickJSUnwrapError: () => o,
                    QuickJSUseAfterFree: () => u,
                    QuickJSWrongOwner: () => a,
                }
            );
            var o = class extends Error {
                constructor(e, t) {
                    super(String(e)), (this.cause = e), (this.context = t), (this.name = "QuickJSUnwrapError");
                }
            },
                a = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSWrongOwner");
                    }
                },
                u = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSUseAfterFree");
                    }
                },
                l = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSNotImplemented");
                    }
                },
                h = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSAsyncifyError");
                    }
                },
                c = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSAsyncifySuspended");
                    }
                },
                m = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSMemoryLeakDetected");
                    }
                },
                d = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSEmscriptenModuleError");
                    }
                },
                f = class extends TypeError {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSUnknownIntrinsic");
                    }
                },
                p = class extends Error {
                    constructor() {
                        super(...arguments), (this.name = "QuickJSPromisePending");
                    }
                };
            function* v(e) {
                return yield e;
            }
            function y(e, t) {
                return (...r) => w(t.call(e, v, ...r));
            }
            function w(e) {
                return (function t(r) {
                    return r.done
                        ? r.value
                        : r.value instanceof Promise
                            ? r.value.then(
                                (r) => t(e.next(r)),
                                (r) => t(e.throw(r))
                            )
                            : t(e.next(r.value));
                })(e.next());
            }
            v.of = function (e) {
                return v(w(e));
            };
            var S = class {
                [Symbol.dispose]() {
                    return this.dispose();
                }
            },
                g = Symbol.dispose ?? Symbol.for("Symbol.dispose"),
                x = S.prototype;
            x[g] ||
                (x[g] = function () {
                    return this.dispose();
                });
            var b = class e extends S {
                constructor(e, t, r, i) {
                    super(), (this._value = e), (this.copier = t), (this.disposer = r), (this._owner = i), (this._alive = !0), (this._constructorStack = void 0);
                }
                get alive() {
                    return this._alive;
                }
                get value() {
                    return this.assertAlive(), this._value;
                }
                get owner() {
                    return this._owner;
                }
                get dupable() {
                    return !!this.copier;
                }
                dup() {
                    if ((this.assertAlive(), !this.copier)) throw Error("Non-dupable lifetime");
                    return new e(this.copier(this._value), this.copier, this.disposer, this._owner);
                }
                consume(e) {
                    this.assertAlive();
                    let t = e(this);
                    return this.dispose(), t;
                }
                dispose() {
                    this.assertAlive(), this.disposer && this.disposer(this._value), (this._alive = !1);
                }
                assertAlive() {
                    if (!this.alive)
                        throw new u(
                            this._constructorStack
                                ? `Lifetime not alive
${this._constructorStack}
Lifetime used`
                                : "Lifetime not alive"
                        );
                }
            },
                _ = class extends b {
                    constructor(e, t) {
                        super(e, void 0, void 0, t);
                    }
                    get dupable() {
                        return !0;
                    }
                    dup() {
                        return this;
                    }
                    dispose() { }
                },
                P = class extends b {
                    constructor(e, t, r, i) {
                        super(e, t, r, i);
                    }
                    dispose() {
                        this._alive = !1;
                    }
                };
            function T(e, t) {
                let r;
                try {
                    e.dispose();
                } catch (e) {
                    r = e;
                }
                if (t && r)
                    throw (
                        (Object.assign(t, {
                            message: `${t.message}
 Then, failed to dispose scope: ${r.message}`,
                            disposeError: r,
                        }),
                            t)
                    );
                if (t || r) throw t || r;
            }
            var k = class e extends S {
                constructor() {
                    super(...arguments), (this._disposables = new b(new Set()));
                }
                static withScope(t) {
                    let r = new e(),
                        i;
                    try {
                        return t(r);
                    } catch (e) {
                        throw ((i = e), e);
                    } finally {
                        T(r, i);
                    }
                }
                static withScopeMaybeAsync(t, r) {
                    return w(
                        function* (i) {
                            let s = new e(),
                                n;
                            try {
                                return yield* i.of(r.call(t, i, s));
                            } catch (e) {
                                throw ((n = e), e);
                            } finally {
                                T(s, n);
                            }
                        }.call(void 0, v)
                    );
                }
                static async withScopeAsync(t) {
                    let r = new e(),
                        i;
                    try {
                        return await t(r);
                    } catch (e) {
                        throw ((i = e), e);
                    } finally {
                        T(r, i);
                    }
                }
                manage(e) {
                    return this._disposables.value.add(e), e;
                }
                get alive() {
                    return this._disposables.alive;
                }
                dispose() {
                    for (let e of Array.from(this._disposables.value.values()).reverse()) e.alive && e.dispose();
                    this._disposables.dispose();
                }
            },
                Q = class extends S {
                    constructor(e) {
                        super(),
                            (this.resolve = (e) => {
                                this.resolveHandle.alive &&
                                    (this.context.unwrapResult(this.context.callFunction(this.resolveHandle, this.context.undefined, e || this.context.undefined)).dispose(), this.disposeResolvers(), this.onSettled());
                            }),
                            (this.reject = (e) => {
                                this.rejectHandle.alive && (this.context.unwrapResult(this.context.callFunction(this.rejectHandle, this.context.undefined, e || this.context.undefined)).dispose(), this.disposeResolvers(), this.onSettled());
                            }),
                            (this.dispose = () => {
                                this.handle.alive && this.handle.dispose(), this.disposeResolvers();
                            }),
                            (this.context = e.context),
                            (this.owner = e.context.runtime),
                            (this.handle = e.promiseHandle),
                            (this.settled = new Promise((e) => {
                                this.onSettled = e;
                            })),
                            (this.resolveHandle = e.resolveHandle),
                            (this.rejectHandle = e.rejectHandle);
                    }
                    get alive() {
                        return this.handle.alive || this.resolveHandle.alive || this.rejectHandle.alive;
                    }
                    disposeResolvers() {
                        this.resolveHandle.alive && this.resolveHandle.dispose(), this.rejectHandle.alive && this.rejectHandle.dispose();
                    }
                },
                C = class {
                    constructor(e) {
                        this.module = e;
                    }
                    toPointerArray(e) {
                        let t = new Int32Array(e.map((e) => e.value)),
                            r = t.length * t.BYTES_PER_ELEMENT,
                            i = this.module._malloc(r);
                        return new Uint8Array(this.module.HEAPU8.buffer, i, r).set(new Uint8Array(t.buffer)), new b(i, void 0, (e) => this.module._free(e));
                    }
                    newMutablePointerArray(e) {
                        let t = new Int32Array(Array(e).fill(0)),
                            r = t.length * t.BYTES_PER_ELEMENT,
                            i = this.module._malloc(r),
                            s = new Int32Array(this.module.HEAPU8.buffer, i, e);
                        return s.set(t), new b({ typedArray: s, ptr: i }, void 0, (e) => this.module._free(e.ptr));
                    }
                    newHeapCharPointer(e) {
                        let t = this.module.lengthBytesUTF8(e),
                            r = t + 1,
                            i = this.module._malloc(r);
                        return this.module.stringToUTF8(e, i, r), new b({ ptr: i, strlen: t }, void 0, (e) => this.module._free(e.ptr));
                    }
                    newHeapBufferPointer(e) {
                        let t = e.byteLength,
                            r = this.module._malloc(t);
                        return this.module.HEAPU8.set(e, r), new b({ pointer: r, numBytes: t }, void 0, (e) => this.module._free(e.pointer));
                    }
                    consumeHeapCharPointer(e) {
                        let t = this.module.UTF8ToString(e);
                        return this.module._free(e), t;
                    }
                };
            function E(e) {
                if (!e) return 0;
                let t = 0;
                for (let [r, s] of Object.entries(e)) {
                    if (!(r in i.yd)) throw new f(r);
                    s && (t |= i.yd[r]);
                }
                return t;
            }
            function H(e) {
                if ("number" == typeof e) return e;
                if (void 0 === e) return 0;
                let { type: t, strict: r, strip: s, compileOnly: n, backtraceBarrier: o } = e,
                    a = 0;
                return (
                    "global" === t && (a |= i.Ri.JS_EVAL_TYPE_GLOBAL),
                    "module" === t && (a |= i.Ri.JS_EVAL_TYPE_MODULE),
                    r && (a |= i.Ri.JS_EVAL_FLAG_STRICT),
                    s && (a |= i.Ri.JS_EVAL_FLAG_STRIP),
                    n && (a |= i.Ri.JS_EVAL_FLAG_COMPILE_ONLY),
                    o && (a |= i.Ri.JS_EVAL_FLAG_BACKTRACE_BARRIER),
                    a
                );
            }
            Symbol("Unstable"), Object.freeze({ BaseObjects: !0, Date: !0, Eval: !0, StringNormalize: !0, RegExp: !0, JSON: !0, Proxy: !0, MapSet: !0, TypedArrays: !0, Promise: !0 });
            var A = class extends C {
                constructor(e) {
                    super(e.module),
                        (this.scope = new k()),
                        (this.copyJSValue = (e) => this.ffi.QTS_DupValuePointer(this.ctx.value, e)),
                        (this.freeJSValue = (e) => {
                            this.ffi.QTS_FreeValuePointer(this.ctx.value, e);
                        }),
                        e.ownedLifetimes?.forEach((e) => this.scope.manage(e)),
                        (this.owner = e.owner),
                        (this.module = e.module),
                        (this.ffi = e.ffi),
                        (this.rt = e.rt),
                        (this.ctx = this.scope.manage(e.ctx));
                }
                get alive() {
                    return this.scope.alive;
                }
                dispose() {
                    return this.scope.dispose();
                }
                [Symbol.dispose]() {
                    return this.dispose();
                }
                manage(e) {
                    return this.scope.manage(e);
                }
                consumeJSCharPointer(e) {
                    let t = this.module.UTF8ToString(e);
                    return this.ffi.QTS_FreeCString(this.ctx.value, e), t;
                }
                heapValueHandle(e) {
                    return new b(e, this.copyJSValue, this.freeJSValue, this.owner);
                }
            },
                M = class extends S {
                    constructor(e) {
                        super(),
                            (this._undefined = void 0),
                            (this._null = void 0),
                            (this._false = void 0),
                            (this._true = void 0),
                            (this._global = void 0),
                            (this._BigInt = void 0),
                            (this.fnNextId = -32768),
                            (this.fnMaps = new Map()),
                            (this.cToHostCallbacks = {
                                callFunction: (e, t, r, i, s) => {
                                    if (e !== this.ctx.value) throw Error("QuickJSContext instance received C -> JS call with mismatched ctx");
                                    let n = this.getFunction(s);
                                    if (!n) throw Error(`QuickJSContext had no callback with id ${s}`);
                                    return k.withScopeMaybeAsync(this, function* (e, s) {
                                        let o = s.manage(new P(t, this.memory.copyJSValue, this.memory.freeJSValue, this.runtime)),
                                            a = Array(r);
                                        for (let e = 0; e < r; e++) {
                                            let t = this.ffi.QTS_ArgvGetJSValueConstPointer(i, e);
                                            a[e] = s.manage(new P(t, this.memory.copyJSValue, this.memory.freeJSValue, this.runtime));
                                        }
                                        try {
                                            let t = yield* e(n.apply(o, a));
                                            if (t) {
                                                if ("error" in t && t.error) throw (t.error, t.error);
                                                let e = s.manage(t instanceof b ? t : t.value);
                                                return this.ffi.QTS_DupValuePointer(this.ctx.value, e.value);
                                            }
                                            return 0;
                                        } catch (e) {
                                            return this.errorToHandle(e).consume((e) => this.ffi.QTS_Throw(this.ctx.value, e.value));
                                        }
                                    });
                                },
                            }),
                            (this.runtime = e.runtime),
                            (this.module = e.module),
                            (this.ffi = e.ffi),
                            (this.rt = e.rt),
                            (this.ctx = e.ctx),
                            (this.memory = new A({ ...e, owner: this.runtime })),
                            e.callbacks.setContextCallbacks(this.ctx.value, this.cToHostCallbacks),
                            (this.dump = this.dump.bind(this)),
                            (this.getString = this.getString.bind(this)),
                            (this.getNumber = this.getNumber.bind(this)),
                            (this.resolvePromise = this.resolvePromise.bind(this));
                    }
                    get alive() {
                        return this.memory.alive;
                    }
                    dispose() {
                        this.memory.dispose();
                    }
                    get undefined() {
                        if (this._undefined) return this._undefined;
                        let e = this.ffi.QTS_GetUndefined();
                        return (this._undefined = new _(e));
                    }
                    get null() {
                        if (this._null) return this._null;
                        let e = this.ffi.QTS_GetNull();
                        return (this._null = new _(e));
                    }
                    get true() {
                        if (this._true) return this._true;
                        let e = this.ffi.QTS_GetTrue();
                        return (this._true = new _(e));
                    }
                    get false() {
                        if (this._false) return this._false;
                        let e = this.ffi.QTS_GetFalse();
                        return (this._false = new _(e));
                    }
                    get global() {
                        if (this._global) return this._global;
                        let e = this.ffi.QTS_GetGlobalObject(this.ctx.value);
                        return this.memory.manage(this.memory.heapValueHandle(e)), (this._global = new _(e, this.runtime)), this._global;
                    }
                    newNumber(e) {
                        return this.memory.heapValueHandle(this.ffi.QTS_NewFloat64(this.ctx.value, e));
                    }
                    newString(e) {
                        let t = this.memory.newHeapCharPointer(e).consume((e) => this.ffi.QTS_NewString(this.ctx.value, e.value.ptr));
                        return this.memory.heapValueHandle(t);
                    }
                    newUniqueSymbol(e) {
                        let t = ("symbol" == typeof e ? e.description : e) ?? "",
                            r = this.memory.newHeapCharPointer(t).consume((e) => this.ffi.QTS_NewSymbol(this.ctx.value, e.value.ptr, 0));
                        return this.memory.heapValueHandle(r);
                    }
                    newSymbolFor(e) {
                        let t = ("symbol" == typeof e ? e.description : e) ?? "",
                            r = this.memory.newHeapCharPointer(t).consume((e) => this.ffi.QTS_NewSymbol(this.ctx.value, e.value.ptr, 1));
                        return this.memory.heapValueHandle(r);
                    }
                    newBigInt(e) {
                        if (!this._BigInt) {
                            let e = this.getProp(this.global, "BigInt");
                            this.memory.manage(e), (this._BigInt = new _(e.value, this.runtime));
                        }
                        let t = this._BigInt,
                            r = String(e);
                        return this.newString(r).consume((e) => this.unwrapResult(this.callFunction(t, this.undefined, e)));
                    }
                    newObject(e) {
                        e && this.runtime.assertOwned(e);
                        let t = e ? this.ffi.QTS_NewObjectProto(this.ctx.value, e.value) : this.ffi.QTS_NewObject(this.ctx.value);
                        return this.memory.heapValueHandle(t);
                    }
                    newArray() {
                        let e = this.ffi.QTS_NewArray(this.ctx.value);
                        return this.memory.heapValueHandle(e);
                    }
                    newArrayBuffer(e) {
                        let t = new Uint8Array(e),
                            r = this.memory.newHeapBufferPointer(t),
                            i = this.ffi.QTS_NewArrayBuffer(this.ctx.value, r.value.pointer, t.length);
                        return this.memory.heapValueHandle(i);
                    }
                    newPromise(e) {
                        let t = k.withScope((e) => {
                            let t = e.manage(this.memory.newMutablePointerArray(2)),
                                r = this.ffi.QTS_NewPromiseCapability(this.ctx.value, t.value.ptr),
                                i = this.memory.heapValueHandle(r),
                                [s, n] = Array.from(t.value.typedArray).map((e) => this.memory.heapValueHandle(e));
                            return new Q({ context: this, promiseHandle: i, resolveHandle: s, rejectHandle: n });
                        });
                        return e && "function" == typeof e && (e = new Promise(e)), e && Promise.resolve(e).then(t.resolve, (e) => (e instanceof b ? t.reject(e) : this.newError(e).consume(t.reject))), t;
                    }
                    newFunction(e, t) {
                        let r = ++this.fnNextId;
                        return this.setFunction(r, t), this.memory.heapValueHandle(this.ffi.QTS_NewFunction(this.ctx.value, r, e));
                    }
                    newError(e) {
                        let t = this.memory.heapValueHandle(this.ffi.QTS_NewError(this.ctx.value));
                        return (
                            e && "object" == typeof e
                                ? (void 0 !== e.name && this.newString(e.name).consume((e) => this.setProp(t, "name", e)), void 0 !== e.message && this.newString(e.message).consume((e) => this.setProp(t, "message", e)))
                                : "string" == typeof e
                                    ? this.newString(e).consume((e) => this.setProp(t, "message", e))
                                    : void 0 !== e && this.newString(String(e)).consume((e) => this.setProp(t, "message", e)),
                            t
                        );
                    }
                    typeof(e) {
                        return this.runtime.assertOwned(e), this.memory.consumeHeapCharPointer(this.ffi.QTS_Typeof(this.ctx.value, e.value));
                    }
                    getNumber(e) {
                        return this.runtime.assertOwned(e), this.ffi.QTS_GetFloat64(this.ctx.value, e.value);
                    }
                    getString(e) {
                        return this.runtime.assertOwned(e), this.memory.consumeJSCharPointer(this.ffi.QTS_GetString(this.ctx.value, e.value));
                    }
                    getSymbol(e) {
                        this.runtime.assertOwned(e);
                        let t = this.memory.consumeJSCharPointer(this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value, e.value));
                        return this.ffi.QTS_IsGlobalSymbol(this.ctx.value, e.value) ? Symbol.for(t) : Symbol(t);
                    }
                    getBigInt(e) {
                        return this.runtime.assertOwned(e), BigInt(this.getString(e));
                    }
                    getArrayBuffer(e) {
                        this.runtime.assertOwned(e);
                        let t = this.ffi.QTS_GetArrayBufferLength(this.ctx.value, e.value),
                            r = this.ffi.QTS_GetArrayBuffer(this.ctx.value, e.value);
                        if (!r) throw Error("Couldn't allocate memory to get ArrayBuffer");
                        return new b(this.module.HEAPU8.subarray(r, r + t), void 0, () => this.module._free(r));
                    }
                    getPromiseState(e) {
                        this.runtime.assertOwned(e);
                        let t = this.ffi.QTS_PromiseState(this.ctx.value, e.value);
                        if (t < 0) return { type: "fulfilled", value: e, notAPromise: !0 };
                        if (t === i.nC.Pending)
                            return {
                                type: "pending",
                                get error() {
                                    return new p("Cannot unwrap a pending promise");
                                },
                            };
                        let r = this.ffi.QTS_PromiseResult(this.ctx.value, e.value),
                            s = this.memory.heapValueHandle(r);
                        if (t === i.nC.Fulfilled) return { type: "fulfilled", value: s };
                        if (t === i.nC.Rejected) return { type: "rejected", error: s };
                        throw (s.dispose(), Error(`Unknown JSPromiseStateEnum: ${t}`));
                    }
                    resolvePromise(e) {
                        this.runtime.assertOwned(e);
                        let t = k.withScope((t) => {
                            let r = t.manage(this.getProp(this.global, "Promise")),
                                i = t.manage(this.getProp(r, "resolve"));
                            return this.callFunction(i, r, e);
                        });
                        return t.error
                            ? Promise.resolve(t)
                            : new Promise((e) => {
                                k.withScope((r) => {
                                    let i = r.manage(
                                        this.newFunction("resolve", (t) => {
                                            e({ value: t && t.dup() });
                                        })
                                    ),
                                        s = r.manage(
                                            this.newFunction("reject", (t) => {
                                                e({ error: t && t.dup() });
                                            })
                                        ),
                                        n = r.manage(t.value),
                                        o = r.manage(this.getProp(n, "then"));
                                    this.unwrapResult(this.callFunction(o, n, i, s)).dispose();
                                });
                            });
                    }
                    getProp(e, t) {
                        this.runtime.assertOwned(e);
                        let r = this.borrowPropertyKey(t).consume((t) => this.ffi.QTS_GetProp(this.ctx.value, e.value, t.value));
                        return this.memory.heapValueHandle(r);
                    }
                    setProp(e, t, r) {
                        this.runtime.assertOwned(e), this.borrowPropertyKey(t).consume((t) => this.ffi.QTS_SetProp(this.ctx.value, e.value, t.value, r.value));
                    }
                    defineProp(e, t, r) {
                        this.runtime.assertOwned(e),
                            k.withScope((i) => {
                                let s = i.manage(this.borrowPropertyKey(t)),
                                    n = r.value || this.undefined,
                                    o = !!r.configurable,
                                    a = !!r.enumerable,
                                    u = !!r.value,
                                    l = r.get ? i.manage(this.newFunction(r.get.name, r.get)) : this.undefined,
                                    h = r.set ? i.manage(this.newFunction(r.set.name, r.set)) : this.undefined;
                                this.ffi.QTS_DefineProp(this.ctx.value, e.value, s.value, n.value, l.value, h.value, o, a, u);
                            });
                    }
                    callFunction(e, t, ...r) {
                        this.runtime.assertOwned(e);
                        let i = this.memory.toPointerArray(r).consume((i) => this.ffi.QTS_Call(this.ctx.value, e.value, t.value, r.length, i.value)),
                            s = this.ffi.QTS_ResolveException(this.ctx.value, i);
                        return s ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, i), { error: this.memory.heapValueHandle(s) }) : { value: this.memory.heapValueHandle(i) };
                    }
                    evalCode(e, t = "eval.js", r) {
                        let i = void 0 === r ? 1 : 0,
                            s = H(r),
                            n = this.memory.newHeapCharPointer(e).consume((e) => this.ffi.QTS_Eval(this.ctx.value, e.value.ptr, e.value.strlen, t, i, s)),
                            o = this.ffi.QTS_ResolveException(this.ctx.value, n);
                        return o ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, n), { error: this.memory.heapValueHandle(o) }) : { value: this.memory.heapValueHandle(n) };
                    }
                    throw(e) {
                        return this.errorToHandle(e).consume((e) => this.ffi.QTS_Throw(this.ctx.value, e.value));
                    }
                    borrowPropertyKey(e) {
                        return "number" == typeof e ? this.newNumber(e) : "string" == typeof e ? this.newString(e) : new _(e.value, this.runtime);
                    }
                    getMemory(e) {
                        if (e === this.rt.value) return this.memory;
                        throw Error("Private API. Cannot get memory from a different runtime");
                    }
                    dump(e) {
                        this.runtime.assertOwned(e);
                        let t = this.typeof(e);
                        if ("string" === t) return this.getString(e);
                        if ("number" === t) return this.getNumber(e);
                        if ("bigint" === t) return this.getBigInt(e);
                        if ("undefined" === t) return;
                        if ("symbol" === t) return this.getSymbol(e);
                        let r = this.getPromiseState(e);
                        if ("fulfilled" === r.type && !r.notAPromise) return e.dispose(), { type: r.type, value: r.value.consume(this.dump) };
                        if ("pending" === r.type) return e.dispose(), { type: r.type };
                        if ("rejected" === r.type) return e.dispose(), { type: r.type, error: r.error.consume(this.dump) };
                        let i = this.memory.consumeJSCharPointer(this.ffi.QTS_Dump(this.ctx.value, e.value));
                        try {
                            return JSON.parse(i);
                        } catch {
                            return i;
                        }
                    }
                    unwrapResult(e) {
                        if (e.error) {
                            let t = "context" in e.error ? e.error.context : this,
                                r = e.error.consume((e) => this.dump(e));
                            if (r && "object" == typeof r && "string" == typeof r.message) {
                                let { message: e, name: i, stack: s } = r,
                                    n = new o(""),
                                    a = n.stack;
                                throw (
                                    ("string" == typeof i && (n.name = r.name),
                                        "string" == typeof s &&
                                        (n.stack = `${i}: ${e}
${r.stack}Host: ${a}`),
                                        Object.assign(n, { cause: r, context: t, message: e }),
                                        n)
                                );
                            }
                            throw new o(r, t);
                        }
                        return e.value;
                    }
                    getFunction(e) {
                        let t = this.fnMaps.get(e >> 8);
                        if (t) return t.get(e);
                    }
                    setFunction(e, t) {
                        let r = e >> 8,
                            i = this.fnMaps.get(r);
                        return i || ((i = new Map()), this.fnMaps.set(r, i)), i.set(e, t);
                    }
                    errorToHandle(e) {
                        return e instanceof b ? e : this.newError(e);
                    }
                    encodeBinaryJSON(e) {
                        let t = this.ffi.QTS_bjson_encode(this.ctx.value, e.value);
                        return this.memory.heapValueHandle(t);
                    }
                    decodeBinaryJSON(e) {
                        let t = this.ffi.QTS_bjson_decode(this.ctx.value, e.value);
                        return this.memory.heapValueHandle(t);
                    }
                },
                J = class extends S {
                    constructor(e) {
                        super(),
                            (this.scope = new k()),
                            (this.contextMap = new Map()),
                            (this.cToHostCallbacks = {
                                shouldInterrupt: (e) => {
                                    if (e !== this.rt.value) throw Error("QuickJSContext instance received C -> JS interrupt with mismatched rt");
                                    let t = this.interruptHandler;
                                    if (!t) throw Error("QuickJSContext had no interrupt handler");
                                    return t(this) ? 1 : 0;
                                },
                                loadModuleSource: y(this, function* (e, t, r, i) {
                                    let s = this.moduleLoader;
                                    if (!s) throw Error("Runtime has no module loader");
                                    if (t !== this.rt.value) throw Error("Runtime pointer mismatch");
                                    let n = this.contextMap.get(r) ?? this.newContext({ contextPointer: r });
                                    try {
                                        let t = yield* e(s(i, n));
                                        if ("object" == typeof t && "error" in t && t.error) throw (t.error, t.error);
                                        let r = "string" == typeof t ? t : "value" in t ? t.value : t;
                                        return this.memory.newHeapCharPointer(r).value.ptr;
                                    } catch (e) {
                                        return n.throw(e), 0;
                                    }
                                }),
                                normalizeModule: y(this, function* (e, t, r, i, s) {
                                    let n = this.moduleNormalizer;
                                    if (!n) throw Error("Runtime has no module normalizer");
                                    if (t !== this.rt.value) throw Error("Runtime pointer mismatch");
                                    let o = this.contextMap.get(r) ?? this.newContext({ contextPointer: r });
                                    try {
                                        let t = yield* e(n(i, s, o));
                                        if ("object" == typeof t && "error" in t && t.error) throw (t.error, t.error);
                                        let r = "string" == typeof t ? t : t.value;
                                        return o.getMemory(this.rt.value).newHeapCharPointer(r).value.ptr;
                                    } catch (e) {
                                        return o.throw(e), 0;
                                    }
                                }),
                            }),
                            e.ownedLifetimes?.forEach((e) => this.scope.manage(e)),
                            (this.module = e.module),
                            (this.memory = new C(this.module)),
                            (this.ffi = e.ffi),
                            (this.rt = e.rt),
                            (this.callbacks = e.callbacks),
                            this.scope.manage(this.rt),
                            this.callbacks.setRuntimeCallbacks(this.rt.value, this.cToHostCallbacks),
                            (this.executePendingJobs = this.executePendingJobs.bind(this));
                    }
                    get alive() {
                        return this.scope.alive;
                    }
                    dispose() {
                        return this.scope.dispose();
                    }
                    newContext(e = {}) {
                        let t = E(e.intrinsics),
                            r = new b(e.contextPointer || this.ffi.QTS_NewContext(this.rt.value, t), void 0, (e) => {
                                this.contextMap.delete(e), this.callbacks.deleteContext(e), this.ffi.QTS_FreeContext(e);
                            }),
                            i = new M({ module: this.module, ctx: r, ffi: this.ffi, rt: this.rt, ownedLifetimes: e.ownedLifetimes, runtime: this, callbacks: this.callbacks });
                        return this.contextMap.set(r.value, i), i;
                    }
                    setModuleLoader(e, t) {
                        (this.moduleLoader = e), (this.moduleNormalizer = t), this.ffi.QTS_RuntimeEnableModuleLoader(this.rt.value, this.moduleNormalizer ? 1 : 0);
                    }
                    removeModuleLoader() {
                        (this.moduleLoader = void 0), this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value);
                    }
                    hasPendingJob() {
                        return !!this.ffi.QTS_IsJobPending(this.rt.value);
                    }
                    setInterruptHandler(e) {
                        let t = this.interruptHandler;
                        (this.interruptHandler = e), t || this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value);
                    }
                    removeInterruptHandler() {
                        this.interruptHandler && (this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value), (this.interruptHandler = void 0));
                    }
                    executePendingJobs(e = -1) {
                        let t = this.memory.newMutablePointerArray(1),
                            r = this.ffi.QTS_ExecutePendingJob(this.rt.value, e ?? -1, t.value.ptr),
                            i = t.value.typedArray[0];
                        if ((t.dispose(), 0 === i)) return this.ffi.QTS_FreeValuePointerRuntime(this.rt.value, r), { value: 0 };
                        let s = this.contextMap.get(i) ?? this.newContext({ contextPointer: i }),
                            n = s.getMemory(this.rt.value).heapValueHandle(r);
                        if ("number" !== s.typeof(n)) return { error: Object.assign(n, { context: s }) };
                        {
                            let e = s.getNumber(n);
                            return n.dispose(), { value: e };
                        }
                    }
                    setMemoryLimit(e) {
                        if (e < 0 && -1 !== e) throw Error("Cannot set memory limit to negative number. To unset, pass -1");
                        this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value, e);
                    }
                    computeMemoryUsage() {
                        let e = this.getSystemContext().getMemory(this.rt.value);
                        return e.heapValueHandle(this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value, e.ctx.value));
                    }
                    dumpMemoryUsage() {
                        return this.memory.consumeHeapCharPointer(this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value));
                    }
                    setMaxStackSize(e) {
                        if (e < 0) throw Error("Cannot set memory limit to negative number. To unset, pass 0.");
                        this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value, e);
                    }
                    assertOwned(e) {
                        if (e.owner && e.owner.rt !== this.rt) throw new a(`Handle is not owned by this runtime: ${e.owner.rt.value} != ${this.rt.value}`);
                    }
                    getSystemContext() {
                        return this.context || (this.context = this.scope.manage(this.newContext())), this.context;
                    }
                },
                R = class {
                    constructor(e) {
                        (this.callFunction = e.callFunction), (this.shouldInterrupt = e.shouldInterrupt), (this.loadModuleSource = e.loadModuleSource), (this.normalizeModule = e.normalizeModule);
                    }
                },
                L = class {
                    constructor(e) {
                        (this.contextCallbacks = new Map()),
                            (this.runtimeCallbacks = new Map()),
                            (this.suspendedCount = 0),
                            (this.cToHostCallbacks = new R({
                                callFunction: (e, t, r, i, s, n) =>
                                    this.handleAsyncify(e, () => {
                                        try {
                                            let e = this.contextCallbacks.get(t);
                                            if (!e) throw Error(`QuickJSContext(ctx = ${t}) not found for C function call "${n}"`);
                                            return e.callFunction(t, r, i, s, n);
                                        } catch (e) {
                                            return console.error("[C to host error: returning null]", e), 0;
                                        }
                                    }),
                                shouldInterrupt: (e, t) =>
                                    this.handleAsyncify(e, () => {
                                        try {
                                            let e = this.runtimeCallbacks.get(t);
                                            if (!e) throw Error(`QuickJSRuntime(rt = ${t}) not found for C interrupt`);
                                            return e.shouldInterrupt(t);
                                        } catch (e) {
                                            return console.error("[C to host interrupt: returning error]", e), 1;
                                        }
                                    }),
                                loadModuleSource: (e, t, r, i) =>
                                    this.handleAsyncify(e, () => {
                                        try {
                                            let e = this.runtimeCallbacks.get(t);
                                            if (!e) throw Error(`QuickJSRuntime(rt = ${t}) not found for C module loader`);
                                            let s = e.loadModuleSource;
                                            if (!s) throw Error(`QuickJSRuntime(rt = ${t}) does not support module loading`);
                                            return s(t, r, i);
                                        } catch (e) {
                                            return console.error("[C to host module loader error: returning null]", e), 0;
                                        }
                                    }),
                                normalizeModule: (e, t, r, i, s) =>
                                    this.handleAsyncify(e, () => {
                                        try {
                                            let e = this.runtimeCallbacks.get(t);
                                            if (!e) throw Error(`QuickJSRuntime(rt = ${t}) not found for C module loader`);
                                            let n = e.normalizeModule;
                                            if (!n) throw Error(`QuickJSRuntime(rt = ${t}) does not support module loading`);
                                            return n(t, r, i, s);
                                        } catch (e) {
                                            return console.error("[C to host module loader error: returning null]", e), 0;
                                        }
                                    }),
                            })),
                            (this.module = e),
                            (this.module.callbacks = this.cToHostCallbacks);
                    }
                    setRuntimeCallbacks(e, t) {
                        this.runtimeCallbacks.set(e, t);
                    }
                    deleteRuntime(e) {
                        this.runtimeCallbacks.delete(e);
                    }
                    setContextCallbacks(e, t) {
                        this.contextCallbacks.set(e, t);
                    }
                    deleteContext(e) {
                        this.contextCallbacks.delete(e);
                    }
                    handleAsyncify(e, t) {
                        if (e)
                            return e.handleSleep((e) => {
                                try {
                                    let r = t();
                                    if (!(r instanceof Promise)) {
                                        e(r);
                                        return;
                                    }
                                    if (this.suspended)
                                        throw new h(`Already suspended at: ${this.suspended.stack}
Attempted to suspend at:`);
                                    (this.suspended = new c(`(${this.suspendedCount++})`)),
                                        this.suspended,
                                        r.then(
                                            (t) => {
                                                (this.suspended = void 0), e(t);
                                            },
                                            (e) => {
                                                console.error("QuickJS: cannot handle error in suspended function", e), (this.suspended = void 0);
                                            }
                                        );
                                } catch (e) {
                                    throw ((this.suspended = void 0), e);
                                }
                            });
                        let r = t();
                        if (r instanceof Promise) throw Error("Promise return value not supported in non-asyncify context.");
                        return r;
                    }
                };
            function F(e, t) {
                t.interruptHandler && e.setInterruptHandler(t.interruptHandler), void 0 !== t.maxStackSizeBytes && e.setMaxStackSize(t.maxStackSizeBytes), void 0 !== t.memoryLimitBytes && e.setMemoryLimit(t.memoryLimitBytes);
            }
            function V(e, t) {
                t.moduleLoader && e.setModuleLoader(t.moduleLoader),
                    t.shouldInterrupt && e.setInterruptHandler(t.shouldInterrupt),
                    void 0 !== t.memoryLimitBytes && e.setMemoryLimit(t.memoryLimitBytes),
                    void 0 !== t.maxStackSizeBytes && e.setMaxStackSize(t.maxStackSizeBytes);
            }
            var I = class {
                constructor(e, t) {
                    (this.module = e), (this.ffi = t), (this.callbacks = new L(e));
                }
                newRuntime(e = {}) {
                    let t = new b(this.ffi.QTS_NewRuntime(), void 0, (e) => {
                        this.callbacks.deleteRuntime(e), this.ffi.QTS_FreeRuntime(e);
                    }),
                        r = new J({ module: this.module, callbacks: this.callbacks, ffi: this.ffi, rt: t });
                    return F(r, e), e.moduleLoader && r.setModuleLoader(e.moduleLoader), r;
                }
                newContext(e = {}) {
                    let t = this.newRuntime(),
                        r = t.newContext({
                            ...e,
                            ownedLifetimes: (function (...e) {
                                let t = [];
                                for (let r of e) void 0 !== r && (t = t.concat(r));
                                return t;
                            })(t, e.ownedLifetimes),
                        });
                    return (t.context = r), r;
                }
                evalCode(e, t = {}) {
                    return k.withScope((r) => {
                        let i = r.manage(this.newContext());
                        V(i.runtime, t);
                        let s = i.evalCode(e, "eval.js");
                        if ((void 0 !== t.memoryLimitBytes && i.runtime.setMemoryLimit(-1), s.error)) throw i.dump(r.manage(s.error));
                        return i.dump(r.manage(s.value));
                    });
                }
                getWasmMemory() {
                    let e = this.module.quickjsEmscriptenInit?.(() => { })?.getWasmMemory?.();
                    if (!e) throw Error("Variant does not support getting WebAssembly.Memory");
                    return e;
                }
                getFFI() {
                    return this.ffi;
                }
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5769],{25769:function(e,t,r){r.d(t,{a:function(){return n},b:function(){return l},g:function(){return b},j:function(){return k},m:function(){return E},n:function(){return H},o:function(){return M},p:function(){return J},q:function(){return L},r:function(){return F},s:function(){return V},t:function(){return I}});var i=r(8893),s=Object.defineProperty;function n(...e){}((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})({},{QuickJSAsyncifyError:()=>h,QuickJSAsyncifySuspended:()=>c,QuickJSEmscriptenModuleError:()=>d,QuickJSMemoryLeakDetected:()=>m,QuickJSNotImplemented:()=>l,QuickJSPromisePending:()=>p,QuickJSUnknownIntrinsic:()=>f,QuickJSUnwrapError:()=>o,QuickJSUseAfterFree:()=>u,QuickJSWrongOwner:()=>a});var o=class extends Error{constructor(e,t){super(String(e)),this.cause=e,this.context=t,this.name="QuickJSUnwrapError"}},a=class extends Error{constructor(){super(...arguments),this.name="QuickJSWrongOwner"}},u=class extends Error{constructor(){super(...arguments),this.name="QuickJSUseAfterFree"}},l=class extends Error{constructor(){super(...arguments),this.name="QuickJSNotImplemented"}},h=class extends Error{constructor(){super(...arguments),this.name="QuickJSAsyncifyError"}},c=class extends Error{constructor(){super(...arguments),this.name="QuickJSAsyncifySuspended"}},m=class extends Error{constructor(){super(...arguments),this.name="QuickJSMemoryLeakDetected"}},d=class extends Error{constructor(){super(...arguments),this.name="QuickJSEmscriptenModuleError"}},f=class extends TypeError{constructor(){super(...arguments),this.name="QuickJSUnknownIntrinsic"}},p=class extends Error{constructor(){super(...arguments),this.name="QuickJSPromisePending"}};function*v(e){return yield e}function y(e,t){return(...r)=>w(t.call(e,v,...r))}function w(e){return function t(r){return r.done?r.value:r.value instanceof Promise?r.value.then(r=>t(e.next(r)),r=>t(e.throw(r))):t(e.next(r.value))}(e.next())}v.of=function(e){return v(w(e))};var S=class{[Symbol.dispose](){return this.dispose()}},g=Symbol.dispose??Symbol.for("Symbol.dispose"),x=S.prototype;x[g]||(x[g]=function(){return this.dispose()});var b=class e extends S{constructor(e,t,r,i){super(),this._value=e,this.copier=t,this.disposer=r,this._owner=i,this._alive=!0,this._constructorStack=void 0}get alive(){return this._alive}get value(){return this.assertAlive(),this._value}get owner(){return this._owner}get dupable(){return!!this.copier}dup(){if(this.assertAlive(),!this.copier)throw Error("Non-dupable lifetime");return new e(this.copier(this._value),this.copier,this.disposer,this._owner)}consume(e){this.assertAlive();let t=e(this);return this.dispose(),t}dispose(){this.assertAlive(),this.disposer&&this.disposer(this._value),this._alive=!1}assertAlive(){if(!this.alive)throw new u(this._constructorStack?`Lifetime not alive
// ${this._constructorStack}
// Lifetime used`:"Lifetime not alive")}},_=class extends b{constructor(e,t){super(e,void 0,void 0,t)}get dupable(){return!0}dup(){return this}dispose(){}},P=class extends b{constructor(e,t,r,i){super(e,t,r,i)}dispose(){this._alive=!1}};function T(e,t){let r;try{e.dispose()}catch(e){r=e}if(t&&r)throw Object.assign(t,{message:`${t.message}
//  Then, failed to dispose scope: ${r.message}`,disposeError:r}),t;if(t||r)throw t||r}var k=class e extends S{constructor(){super(...arguments),this._disposables=new b(new Set)}static withScope(t){let r=new e,i;try{return t(r)}catch(e){throw i=e,e}finally{T(r,i)}}static withScopeMaybeAsync(t,r){return w((function*(i){let s=new e,n;try{return yield*i.of(r.call(t,i,s))}catch(e){throw n=e,e}finally{T(s,n)}}).call(void 0,v))}static async withScopeAsync(t){let r=new e,i;try{return await t(r)}catch(e){throw i=e,e}finally{T(r,i)}}manage(e){return this._disposables.value.add(e),e}get alive(){return this._disposables.alive}dispose(){for(let e of Array.from(this._disposables.value.values()).reverse())e.alive&&e.dispose();this._disposables.dispose()}},Q=class extends S{constructor(e){super(),this.resolve=e=>{this.resolveHandle.alive&&(this.context.unwrapResult(this.context.callFunction(this.resolveHandle,this.context.undefined,e||this.context.undefined)).dispose(),this.disposeResolvers(),this.onSettled())},this.reject=e=>{this.rejectHandle.alive&&(this.context.unwrapResult(this.context.callFunction(this.rejectHandle,this.context.undefined,e||this.context.undefined)).dispose(),this.disposeResolvers(),this.onSettled())},this.dispose=()=>{this.handle.alive&&this.handle.dispose(),this.disposeResolvers()},this.context=e.context,this.owner=e.context.runtime,this.handle=e.promiseHandle,this.settled=new Promise(e=>{this.onSettled=e}),this.resolveHandle=e.resolveHandle,this.rejectHandle=e.rejectHandle}get alive(){return this.handle.alive||this.resolveHandle.alive||this.rejectHandle.alive}disposeResolvers(){this.resolveHandle.alive&&this.resolveHandle.dispose(),this.rejectHandle.alive&&this.rejectHandle.dispose()}},C=class{constructor(e){this.module=e}toPointerArray(e){let t=new Int32Array(e.map(e=>e.value)),r=t.length*t.BYTES_PER_ELEMENT,i=this.module._malloc(r);return new Uint8Array(this.module.HEAPU8.buffer,i,r).set(new Uint8Array(t.buffer)),new b(i,void 0,e=>this.module._free(e))}newMutablePointerArray(e){let t=new Int32Array(Array(e).fill(0)),r=t.length*t.BYTES_PER_ELEMENT,i=this.module._malloc(r),s=new Int32Array(this.module.HEAPU8.buffer,i,e);return s.set(t),new b({typedArray:s,ptr:i},void 0,e=>this.module._free(e.ptr))}newHeapCharPointer(e){let t=this.module.lengthBytesUTF8(e),r=t+1,i=this.module._malloc(r);return this.module.stringToUTF8(e,i,r),new b({ptr:i,strlen:t},void 0,e=>this.module._free(e.ptr))}newHeapBufferPointer(e){let t=e.byteLength,r=this.module._malloc(t);return this.module.HEAPU8.set(e,r),new b({pointer:r,numBytes:t},void 0,e=>this.module._free(e.pointer))}consumeHeapCharPointer(e){let t=this.module.UTF8ToString(e);return this.module._free(e),t}};function E(e){if(!e)return 0;let t=0;for(let[r,s]of Object.entries(e)){if(!(r in i.yd))throw new f(r);s&&(t|=i.yd[r])}return t}function H(e){if("number"==typeof e)return e;if(void 0===e)return 0;let{type:t,strict:r,strip:s,compileOnly:n,backtraceBarrier:o}=e,a=0;return"global"===t&&(a|=i.Ri.JS_EVAL_TYPE_GLOBAL),"module"===t&&(a|=i.Ri.JS_EVAL_TYPE_MODULE),r&&(a|=i.Ri.JS_EVAL_FLAG_STRICT),s&&(a|=i.Ri.JS_EVAL_FLAG_STRIP),n&&(a|=i.Ri.JS_EVAL_FLAG_COMPILE_ONLY),o&&(a|=i.Ri.JS_EVAL_FLAG_BACKTRACE_BARRIER),a}Symbol("Unstable"),Object.freeze({BaseObjects:!0,Date:!0,Eval:!0,StringNormalize:!0,RegExp:!0,JSON:!0,Proxy:!0,MapSet:!0,TypedArrays:!0,Promise:!0});var A=class extends C{constructor(e){super(e.module),this.scope=new k,this.copyJSValue=e=>this.ffi.QTS_DupValuePointer(this.ctx.value,e),this.freeJSValue=e=>{this.ffi.QTS_FreeValuePointer(this.ctx.value,e)},e.ownedLifetimes?.forEach(e=>this.scope.manage(e)),this.owner=e.owner,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=this.scope.manage(e.ctx)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}[Symbol.dispose](){return this.dispose()}manage(e){return this.scope.manage(e)}consumeJSCharPointer(e){let t=this.module.UTF8ToString(e);return this.ffi.QTS_FreeCString(this.ctx.value,e),t}heapValueHandle(e){return new b(e,this.copyJSValue,this.freeJSValue,this.owner)}},M=class extends S{constructor(e){super(),this._undefined=void 0,this._null=void 0,this._false=void 0,this._true=void 0,this._global=void 0,this._BigInt=void 0,this.fnNextId=-32768,this.fnMaps=new Map,this.cToHostCallbacks={callFunction:(e,t,r,i,s)=>{if(e!==this.ctx.value)throw Error("QuickJSContext instance received C -> JS call with mismatched ctx");let n=this.getFunction(s);if(!n)throw Error(`QuickJSContext had no callback with id ${s}`);return k.withScopeMaybeAsync(this,function*(e,s){let o=s.manage(new P(t,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime)),a=Array(r);for(let e=0;e<r;e++){let t=this.ffi.QTS_ArgvGetJSValueConstPointer(i,e);a[e]=s.manage(new P(t,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime))}try{let t=yield*e(n.apply(o,a));if(t){if("error"in t&&t.error)throw t.error,t.error;let e=s.manage(t instanceof b?t:t.value);return this.ffi.QTS_DupValuePointer(this.ctx.value,e.value)}return 0}catch(e){return this.errorToHandle(e).consume(e=>this.ffi.QTS_Throw(this.ctx.value,e.value))}})}},this.runtime=e.runtime,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=e.ctx,this.memory=new A({...e,owner:this.runtime}),e.callbacks.setContextCallbacks(this.ctx.value,this.cToHostCallbacks),this.dump=this.dump.bind(this),this.getString=this.getString.bind(this),this.getNumber=this.getNumber.bind(this),this.resolvePromise=this.resolvePromise.bind(this)}get alive(){return this.memory.alive}dispose(){this.memory.dispose()}get undefined(){if(this._undefined)return this._undefined;let e=this.ffi.QTS_GetUndefined();return this._undefined=new _(e)}get null(){if(this._null)return this._null;let e=this.ffi.QTS_GetNull();return this._null=new _(e)}get true(){if(this._true)return this._true;let e=this.ffi.QTS_GetTrue();return this._true=new _(e)}get false(){if(this._false)return this._false;let e=this.ffi.QTS_GetFalse();return this._false=new _(e)}get global(){if(this._global)return this._global;let e=this.ffi.QTS_GetGlobalObject(this.ctx.value);return this.memory.manage(this.memory.heapValueHandle(e)),this._global=new _(e,this.runtime),this._global}newNumber(e){return this.memory.heapValueHandle(this.ffi.QTS_NewFloat64(this.ctx.value,e))}newString(e){let t=this.memory.newHeapCharPointer(e).consume(e=>this.ffi.QTS_NewString(this.ctx.value,e.value.ptr));return this.memory.heapValueHandle(t)}newUniqueSymbol(e){let t=("symbol"==typeof e?e.description:e)??"",r=this.memory.newHeapCharPointer(t).consume(e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value.ptr,0));return this.memory.heapValueHandle(r)}newSymbolFor(e){let t=("symbol"==typeof e?e.description:e)??"",r=this.memory.newHeapCharPointer(t).consume(e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value.ptr,1));return this.memory.heapValueHandle(r)}newBigInt(e){if(!this._BigInt){let e=this.getProp(this.global,"BigInt");this.memory.manage(e),this._BigInt=new _(e.value,this.runtime)}let t=this._BigInt,r=String(e);return this.newString(r).consume(e=>this.unwrapResult(this.callFunction(t,this.undefined,e)))}newObject(e){e&&this.runtime.assertOwned(e);let t=e?this.ffi.QTS_NewObjectProto(this.ctx.value,e.value):this.ffi.QTS_NewObject(this.ctx.value);return this.memory.heapValueHandle(t)}newArray(){let e=this.ffi.QTS_NewArray(this.ctx.value);return this.memory.heapValueHandle(e)}newArrayBuffer(e){let t=new Uint8Array(e),r=this.memory.newHeapBufferPointer(t),i=this.ffi.QTS_NewArrayBuffer(this.ctx.value,r.value.pointer,t.length);return this.memory.heapValueHandle(i)}newPromise(e){let t=k.withScope(e=>{let t=e.manage(this.memory.newMutablePointerArray(2)),r=this.ffi.QTS_NewPromiseCapability(this.ctx.value,t.value.ptr),i=this.memory.heapValueHandle(r),[s,n]=Array.from(t.value.typedArray).map(e=>this.memory.heapValueHandle(e));return new Q({context:this,promiseHandle:i,resolveHandle:s,rejectHandle:n})});return e&&"function"==typeof e&&(e=new Promise(e)),e&&Promise.resolve(e).then(t.resolve,e=>e instanceof b?t.reject(e):this.newError(e).consume(t.reject)),t}newFunction(e,t){let r=++this.fnNextId;return this.setFunction(r,t),this.memory.heapValueHandle(this.ffi.QTS_NewFunction(this.ctx.value,r,e))}newError(e){let t=this.memory.heapValueHandle(this.ffi.QTS_NewError(this.ctx.value));return e&&"object"==typeof e?(void 0!==e.name&&this.newString(e.name).consume(e=>this.setProp(t,"name",e)),void 0!==e.message&&this.newString(e.message).consume(e=>this.setProp(t,"message",e))):"string"==typeof e?this.newString(e).consume(e=>this.setProp(t,"message",e)):void 0!==e&&this.newString(String(e)).consume(e=>this.setProp(t,"message",e)),t}typeof(e){return this.runtime.assertOwned(e),this.memory.consumeHeapCharPointer(this.ffi.QTS_Typeof(this.ctx.value,e.value))}getNumber(e){return this.runtime.assertOwned(e),this.ffi.QTS_GetFloat64(this.ctx.value,e.value)}getString(e){return this.runtime.assertOwned(e),this.memory.consumeJSCharPointer(this.ffi.QTS_GetString(this.ctx.value,e.value))}getSymbol(e){this.runtime.assertOwned(e);let t=this.memory.consumeJSCharPointer(this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value,e.value));return this.ffi.QTS_IsGlobalSymbol(this.ctx.value,e.value)?Symbol.for(t):Symbol(t)}getBigInt(e){return this.runtime.assertOwned(e),BigInt(this.getString(e))}getArrayBuffer(e){this.runtime.assertOwned(e);let t=this.ffi.QTS_GetArrayBufferLength(this.ctx.value,e.value),r=this.ffi.QTS_GetArrayBuffer(this.ctx.value,e.value);if(!r)throw Error("Couldn't allocate memory to get ArrayBuffer");return new b(this.module.HEAPU8.subarray(r,r+t),void 0,()=>this.module._free(r))}getPromiseState(e){this.runtime.assertOwned(e);let t=this.ffi.QTS_PromiseState(this.ctx.value,e.value);if(t<0)return{type:"fulfilled",value:e,notAPromise:!0};if(t===i.nC.Pending)return{type:"pending",get error(){return new p("Cannot unwrap a pending promise")}};let r=this.ffi.QTS_PromiseResult(this.ctx.value,e.value),s=this.memory.heapValueHandle(r);if(t===i.nC.Fulfilled)return{type:"fulfilled",value:s};if(t===i.nC.Rejected)return{type:"rejected",error:s};throw s.dispose(),Error(`Unknown JSPromiseStateEnum: ${t}`)}resolvePromise(e){this.runtime.assertOwned(e);let t=k.withScope(t=>{let r=t.manage(this.getProp(this.global,"Promise")),i=t.manage(this.getProp(r,"resolve"));return this.callFunction(i,r,e)});return t.error?Promise.resolve(t):new Promise(e=>{k.withScope(r=>{let i=r.manage(this.newFunction("resolve",t=>{e({value:t&&t.dup()})})),s=r.manage(this.newFunction("reject",t=>{e({error:t&&t.dup()})})),n=r.manage(t.value),o=r.manage(this.getProp(n,"then"));this.unwrapResult(this.callFunction(o,n,i,s)).dispose()})})}getProp(e,t){this.runtime.assertOwned(e);let r=this.borrowPropertyKey(t).consume(t=>this.ffi.QTS_GetProp(this.ctx.value,e.value,t.value));return this.memory.heapValueHandle(r)}setProp(e,t,r){this.runtime.assertOwned(e),this.borrowPropertyKey(t).consume(t=>this.ffi.QTS_SetProp(this.ctx.value,e.value,t.value,r.value))}defineProp(e,t,r){this.runtime.assertOwned(e),k.withScope(i=>{let s=i.manage(this.borrowPropertyKey(t)),n=r.value||this.undefined,o=!!r.configurable,a=!!r.enumerable,u=!!r.value,l=r.get?i.manage(this.newFunction(r.get.name,r.get)):this.undefined,h=r.set?i.manage(this.newFunction(r.set.name,r.set)):this.undefined;this.ffi.QTS_DefineProp(this.ctx.value,e.value,s.value,n.value,l.value,h.value,o,a,u)})}callFunction(e,t,...r){this.runtime.assertOwned(e);let i=this.memory.toPointerArray(r).consume(i=>this.ffi.QTS_Call(this.ctx.value,e.value,t.value,r.length,i.value)),s=this.ffi.QTS_ResolveException(this.ctx.value,i);return s?(this.ffi.QTS_FreeValuePointer(this.ctx.value,i),{error:this.memory.heapValueHandle(s)}):{value:this.memory.heapValueHandle(i)}}evalCode(e,t="eval.js",r){let i=void 0===r?1:0,s=H(r),n=this.memory.newHeapCharPointer(e).consume(e=>this.ffi.QTS_Eval(this.ctx.value,e.value.ptr,e.value.strlen,t,i,s)),o=this.ffi.QTS_ResolveException(this.ctx.value,n);return o?(this.ffi.QTS_FreeValuePointer(this.ctx.value,n),{error:this.memory.heapValueHandle(o)}):{value:this.memory.heapValueHandle(n)}}throw(e){return this.errorToHandle(e).consume(e=>this.ffi.QTS_Throw(this.ctx.value,e.value))}borrowPropertyKey(e){return"number"==typeof e?this.newNumber(e):"string"==typeof e?this.newString(e):new _(e.value,this.runtime)}getMemory(e){if(e===this.rt.value)return this.memory;throw Error("Private API. Cannot get memory from a different runtime")}dump(e){this.runtime.assertOwned(e);let t=this.typeof(e);if("string"===t)return this.getString(e);if("number"===t)return this.getNumber(e);if("bigint"===t)return this.getBigInt(e);if("undefined"===t)return;if("symbol"===t)return this.getSymbol(e);let r=this.getPromiseState(e);if("fulfilled"===r.type&&!r.notAPromise)return e.dispose(),{type:r.type,value:r.value.consume(this.dump)};if("pending"===r.type)return e.dispose(),{type:r.type};if("rejected"===r.type)return e.dispose(),{type:r.type,error:r.error.consume(this.dump)};let i=this.memory.consumeJSCharPointer(this.ffi.QTS_Dump(this.ctx.value,e.value));try{return JSON.parse(i)}catch{return i}}unwrapResult(e){if(e.error){let t="context"in e.error?e.error.context:this,r=e.error.consume(e=>this.dump(e));if(r&&"object"==typeof r&&"string"==typeof r.message){let{message:e,name:i,stack:s}=r,n=new o(""),a=n.stack;throw"string"==typeof i&&(n.name=r.name),"string"==typeof s&&(n.stack=`${i}: ${e}
// ${r.stack}Host: ${a}`),Object.assign(n,{cause:r,context:t,message:e}),n}throw new o(r,t)}return e.value}getFunction(e){let t=this.fnMaps.get(e>>8);if(t)return t.get(e)}setFunction(e,t){let r=e>>8,i=this.fnMaps.get(r);return i||(i=new Map,this.fnMaps.set(r,i)),i.set(e,t)}errorToHandle(e){return e instanceof b?e:this.newError(e)}encodeBinaryJSON(e){let t=this.ffi.QTS_bjson_encode(this.ctx.value,e.value);return this.memory.heapValueHandle(t)}decodeBinaryJSON(e){let t=this.ffi.QTS_bjson_decode(this.ctx.value,e.value);return this.memory.heapValueHandle(t)}},J=class extends S{constructor(e){super(),this.scope=new k,this.contextMap=new Map,this.cToHostCallbacks={shouldInterrupt:e=>{if(e!==this.rt.value)throw Error("QuickJSContext instance received C -> JS interrupt with mismatched rt");let t=this.interruptHandler;if(!t)throw Error("QuickJSContext had no interrupt handler");return t(this)?1:0},loadModuleSource:y(this,function*(e,t,r,i){let s=this.moduleLoader;if(!s)throw Error("Runtime has no module loader");if(t!==this.rt.value)throw Error("Runtime pointer mismatch");let n=this.contextMap.get(r)??this.newContext({contextPointer:r});try{let t=yield*e(s(i,n));if("object"==typeof t&&"error"in t&&t.error)throw t.error,t.error;let r="string"==typeof t?t:"value"in t?t.value:t;return this.memory.newHeapCharPointer(r).value.ptr}catch(e){return n.throw(e),0}}),normalizeModule:y(this,function*(e,t,r,i,s){let n=this.moduleNormalizer;if(!n)throw Error("Runtime has no module normalizer");if(t!==this.rt.value)throw Error("Runtime pointer mismatch");let o=this.contextMap.get(r)??this.newContext({contextPointer:r});try{let t=yield*e(n(i,s,o));if("object"==typeof t&&"error"in t&&t.error)throw t.error,t.error;let r="string"==typeof t?t:t.value;return o.getMemory(this.rt.value).newHeapCharPointer(r).value.ptr}catch(e){return o.throw(e),0}})},e.ownedLifetimes?.forEach(e=>this.scope.manage(e)),this.module=e.module,this.memory=new C(this.module),this.ffi=e.ffi,this.rt=e.rt,this.callbacks=e.callbacks,this.scope.manage(this.rt),this.callbacks.setRuntimeCallbacks(this.rt.value,this.cToHostCallbacks),this.executePendingJobs=this.executePendingJobs.bind(this)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}newContext(e={}){let t=E(e.intrinsics),r=new b(e.contextPointer||this.ffi.QTS_NewContext(this.rt.value,t),void 0,e=>{this.contextMap.delete(e),this.callbacks.deleteContext(e),this.ffi.QTS_FreeContext(e)}),i=new M({module:this.module,ctx:r,ffi:this.ffi,rt:this.rt,ownedLifetimes:e.ownedLifetimes,runtime:this,callbacks:this.callbacks});return this.contextMap.set(r.value,i),i}setModuleLoader(e,t){this.moduleLoader=e,this.moduleNormalizer=t,this.ffi.QTS_RuntimeEnableModuleLoader(this.rt.value,this.moduleNormalizer?1:0)}removeModuleLoader(){this.moduleLoader=void 0,this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value)}hasPendingJob(){return!!this.ffi.QTS_IsJobPending(this.rt.value)}setInterruptHandler(e){let t=this.interruptHandler;this.interruptHandler=e,t||this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value)}removeInterruptHandler(){this.interruptHandler&&(this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value),this.interruptHandler=void 0)}executePendingJobs(e=-1){let t=this.memory.newMutablePointerArray(1),r=this.ffi.QTS_ExecutePendingJob(this.rt.value,e??-1,t.value.ptr),i=t.value.typedArray[0];if(t.dispose(),0===i)return this.ffi.QTS_FreeValuePointerRuntime(this.rt.value,r),{value:0};let s=this.contextMap.get(i)??this.newContext({contextPointer:i}),n=s.getMemory(this.rt.value).heapValueHandle(r);if("number"!==s.typeof(n))return{error:Object.assign(n,{context:s})};{let e=s.getNumber(n);return n.dispose(),{value:e}}}setMemoryLimit(e){if(e<0&&-1!==e)throw Error("Cannot set memory limit to negative number. To unset, pass -1");this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value,e)}computeMemoryUsage(){let e=this.getSystemContext().getMemory(this.rt.value);return e.heapValueHandle(this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value,e.ctx.value))}dumpMemoryUsage(){return this.memory.consumeHeapCharPointer(this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value))}setMaxStackSize(e){if(e<0)throw Error("Cannot set memory limit to negative number. To unset, pass 0.");this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value,e)}assertOwned(e){if(e.owner&&e.owner.rt!==this.rt)throw new a(`Handle is not owned by this runtime: ${e.owner.rt.value} != ${this.rt.value}`)}getSystemContext(){return this.context||(this.context=this.scope.manage(this.newContext())),this.context}},R=class{constructor(e){this.callFunction=e.callFunction,this.shouldInterrupt=e.shouldInterrupt,this.loadModuleSource=e.loadModuleSource,this.normalizeModule=e.normalizeModule}},L=class{constructor(e){this.contextCallbacks=new Map,this.runtimeCallbacks=new Map,this.suspendedCount=0,this.cToHostCallbacks=new R({callFunction:(e,t,r,i,s,n)=>this.handleAsyncify(e,()=>{try{let e=this.contextCallbacks.get(t);if(!e)throw Error(`QuickJSContext(ctx = ${t}) not found for C function call "${n}"`);return e.callFunction(t,r,i,s,n)}catch(e){return console.error("[C to host error: returning null]",e),0}}),shouldInterrupt:(e,t)=>this.handleAsyncify(e,()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw Error(`QuickJSRuntime(rt = ${t}) not found for C interrupt`);return e.shouldInterrupt(t)}catch(e){return console.error("[C to host interrupt: returning error]",e),1}}),loadModuleSource:(e,t,r,i)=>this.handleAsyncify(e,()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw Error(`QuickJSRuntime(rt = ${t}) not found for C module loader`);let s=e.loadModuleSource;if(!s)throw Error(`QuickJSRuntime(rt = ${t}) does not support module loading`);return s(t,r,i)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}}),normalizeModule:(e,t,r,i,s)=>this.handleAsyncify(e,()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw Error(`QuickJSRuntime(rt = ${t}) not found for C module loader`);let n=e.normalizeModule;if(!n)throw Error(`QuickJSRuntime(rt = ${t}) does not support module loading`);return n(t,r,i,s)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}})}),this.module=e,this.module.callbacks=this.cToHostCallbacks}setRuntimeCallbacks(e,t){this.runtimeCallbacks.set(e,t)}deleteRuntime(e){this.runtimeCallbacks.delete(e)}setContextCallbacks(e,t){this.contextCallbacks.set(e,t)}deleteContext(e){this.contextCallbacks.delete(e)}handleAsyncify(e,t){if(e)return e.handleSleep(e=>{try{let r=t();if(!(r instanceof Promise)){e(r);return}if(this.suspended)throw new h(`Already suspended at: ${this.suspended.stack}
// Attempted to suspend at:`);this.suspended=new c(`(${this.suspendedCount++})`),this.suspended,r.then(t=>{this.suspended=void 0,e(t)},e=>{console.error("QuickJS: cannot handle error in suspended function",e),this.suspended=void 0})}catch(e){throw this.suspended=void 0,e}});let r=t();if(r instanceof Promise)throw Error("Promise return value not supported in non-asyncify context.");return r}};function F(e,t){t.interruptHandler&&e.setInterruptHandler(t.interruptHandler),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes)}function V(e,t){t.moduleLoader&&e.setModuleLoader(t.moduleLoader),t.shouldInterrupt&&e.setInterruptHandler(t.shouldInterrupt),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes)}var I=class{constructor(e,t){this.module=e,this.ffi=t,this.callbacks=new L(e)}newRuntime(e={}){let t=new b(this.ffi.QTS_NewRuntime(),void 0,e=>{this.callbacks.deleteRuntime(e),this.ffi.QTS_FreeRuntime(e)}),r=new J({module:this.module,callbacks:this.callbacks,ffi:this.ffi,rt:t});return F(r,e),e.moduleLoader&&r.setModuleLoader(e.moduleLoader),r}newContext(e={}){let t=this.newRuntime(),r=t.newContext({...e,ownedLifetimes:function(...e){let t=[];for(let r of e)void 0!==r&&(t=t.concat(r));return t}(t,e.ownedLifetimes)});return t.context=r,r}evalCode(e,t={}){return k.withScope(r=>{let i=r.manage(this.newContext());V(i.runtime,t);let s=i.evalCode(e,"eval.js");if(void 0!==t.memoryLimitBytes&&i.runtime.setMemoryLimit(-1),s.error)throw i.dump(r.manage(s.error));return i.dump(r.manage(s.value))})}getWasmMemory(){let e=this.module.quickjsEmscriptenInit?.(()=>{})?.getWasmMemory?.();if(!e)throw Error("Variant does not support getting WebAssembly.Memory");return e}getFFI(){return this.ffi}}}}]);