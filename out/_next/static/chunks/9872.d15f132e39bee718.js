"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9872],
    {
        39872: function (e, t, s) {
            s.r(t),
                s.d(t, {
                    QuickJSAsyncWASMModule: function () {
                        return r;
                    },
                });
            var i = s(25769),
                n = class extends i.o {
                    async evalCodeAsync(e, t = "eval.js", s) {
                        let n = void 0 === s ? 1 : 0,
                            a = (0, i.n)(s),
                            r = 0;
                        try {
                            r = await this.memory.newHeapCharPointer(e).consume((e) => this.ffi.QTS_Eval_MaybeAsync(this.ctx.value, e.value.ptr, e.value.strlen, t, n, a));
                        } catch (e) {
                            throw ((0, i.a)("QTS_Eval_MaybeAsync threw", e), e);
                        }
                        let o = this.ffi.QTS_ResolveException(this.ctx.value, r);
                        return o ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, r), { error: this.memory.heapValueHandle(o) }) : { value: this.memory.heapValueHandle(r) };
                    }
                    newAsyncifiedFunction(e, t) {
                        return this.newFunction(e, t);
                    }
                },
                a = class extends i.p {
                    constructor(e) {
                        super(e);
                    }
                    newContext(e = {}) {
                        let t = (0, i.m)(e.intrinsics),
                            s = new i.g(this.ffi.QTS_NewContext(this.rt.value, t), void 0, (e) => {
                                this.contextMap.delete(e), this.callbacks.deleteContext(e), this.ffi.QTS_FreeContext(e);
                            }),
                            a = new n({ module: this.module, ctx: s, ffi: this.ffi, rt: this.rt, ownedLifetimes: [], runtime: this, callbacks: this.callbacks });
                        return this.contextMap.set(s.value, a), a;
                    }
                    setModuleLoader(e, t) {
                        super.setModuleLoader(e, t);
                    }
                    setMaxStackSize(e) {
                        return super.setMaxStackSize(e);
                    }
                },
                r = class extends i.t {
                    constructor(e, t) {
                        super(e, t), (this.ffi = t), (this.module = e);
                    }
                    newRuntime(e = {}) {
                        let t = new i.g(this.ffi.QTS_NewRuntime(), void 0, (e) => {
                            this.callbacks.deleteRuntime(e), this.ffi.QTS_FreeRuntime(e);
                        }),
                            s = new a({ module: this.module, ffi: this.ffi, rt: t, callbacks: this.callbacks });
                        return (0, i.r)(s, e), e.moduleLoader && s.setModuleLoader(e.moduleLoader), s;
                    }
                    newContext(e = {}) {
                        let t = this.newRuntime(),
                            s = e.ownedLifetimes ? e.ownedLifetimes.concat([t]) : [t],
                            i = t.newContext({ ...e, ownedLifetimes: s });
                        return (t.context = i), i;
                    }
                    evalCode() {
                        throw new i.b("QuickJSWASMModuleAsyncify.evalCode: use evalCodeAsync instead");
                    }
                    evalCodeAsync(e, t) {
                        return i.j.withScopeAsync(async (s) => {
                            let n = s.manage(this.newContext());
                            (0, i.s)(n.runtime, t);
                            let a = await n.evalCodeAsync(e, "eval.js");
                            if ((void 0 !== t.memoryLimitBytes && n.runtime.setMemoryLimit(-1), a.error)) throw n.dump(s.manage(a.error));
                            return n.dump(s.manage(a.value));
                        });
                    }
                };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9872],{39872:function(e,t,s){s.r(t),s.d(t,{QuickJSAsyncWASMModule:function(){return r}});var i=s(25769),n=class extends i.o{async evalCodeAsync(e,t="eval.js",s){let n=void 0===s?1:0,a=(0,i.n)(s),r=0;try{r=await this.memory.newHeapCharPointer(e).consume(e=>this.ffi.QTS_Eval_MaybeAsync(this.ctx.value,e.value.ptr,e.value.strlen,t,n,a))}catch(e){throw(0,i.a)("QTS_Eval_MaybeAsync threw",e),e}let o=this.ffi.QTS_ResolveException(this.ctx.value,r);return o?(this.ffi.QTS_FreeValuePointer(this.ctx.value,r),{error:this.memory.heapValueHandle(o)}):{value:this.memory.heapValueHandle(r)}}newAsyncifiedFunction(e,t){return this.newFunction(e,t)}},a=class extends i.p{constructor(e){super(e)}newContext(e={}){let t=(0,i.m)(e.intrinsics),s=new i.g(this.ffi.QTS_NewContext(this.rt.value,t),void 0,e=>{this.contextMap.delete(e),this.callbacks.deleteContext(e),this.ffi.QTS_FreeContext(e)}),a=new n({module:this.module,ctx:s,ffi:this.ffi,rt:this.rt,ownedLifetimes:[],runtime:this,callbacks:this.callbacks});return this.contextMap.set(s.value,a),a}setModuleLoader(e,t){super.setModuleLoader(e,t)}setMaxStackSize(e){return super.setMaxStackSize(e)}},r=class extends i.t{constructor(e,t){super(e,t),this.ffi=t,this.module=e}newRuntime(e={}){let t=new i.g(this.ffi.QTS_NewRuntime(),void 0,e=>{this.callbacks.deleteRuntime(e),this.ffi.QTS_FreeRuntime(e)}),s=new a({module:this.module,ffi:this.ffi,rt:t,callbacks:this.callbacks});return(0,i.r)(s,e),e.moduleLoader&&s.setModuleLoader(e.moduleLoader),s}newContext(e={}){let t=this.newRuntime(),s=e.ownedLifetimes?e.ownedLifetimes.concat([t]):[t],i=t.newContext({...e,ownedLifetimes:s});return t.context=i,i}evalCode(){throw new i.b("QuickJSWASMModuleAsyncify.evalCode: use evalCodeAsync instead")}evalCodeAsync(e,t){return i.j.withScopeAsync(async s=>{let n=s.manage(this.newContext());(0,i.s)(n.runtime,t);let a=await n.evalCodeAsync(e,"eval.js");if(void 0!==t.memoryLimitBytes&&n.runtime.setMemoryLimit(-1),a.error)throw n.dump(s.manage(a.error));return n.dump(s.manage(a.value))})}}}}]);