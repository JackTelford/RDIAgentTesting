"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4268],
    {
        4268: function (i, n, a) {
            a.r(n),
                a.d(n, {
                    libs: function () {
                        return e;
                    },
                    runStableDiffusion: function () {
                        return s;
                    },
                });
            var t = a(6484);
            let e = ["/System/tvm/tvmjs_runtime.wasi.js", "/System/tvm/tvmjs.bundle.js", "/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js", "/Program Files/StableDiffusion/stable_diffusion.js"],
                s = async (i, n, a = !1) => {
                    a || ((window.tvmjsGlobalEnv = window.tvmjsGlobalEnv || {}), await (0, t.mb)(e)),
                        (globalThis.tvmjsGlobalEnv.getTokenizer = async () => (
                            globalThis.tvmjsGlobalEnv.initialized || (await globalThis.Tokenizer.init()),
                            (globalThis.tvmjsGlobalEnv.initialized = !0),
                            new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())
                        )),
                        (globalThis.tvmjsGlobalEnv.canvas = globalThis.tvmjsGlobalEnv.canvas || n);
                    let { prompts: s } = i;
                    (globalThis.tvmjsGlobalEnv.prompts = s?.length ? s : [["A photo of an astronaut riding a horse on mars", ""]]), await globalThis.tvmjsGlobalEnv.asyncOnGenerate();
                };
            n.default = (i, n = {}) => {
                if (!i) return;
                let a = document.createElement("canvas");
                (a.height = window.innerHeight), (a.width = window.innerWidth), i.append(a), s(n, a);
            };
        },
    },
]);



// "use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4268],{4268:function(i,n,a){a.r(n),a.d(n,{libs:function(){return e},runStableDiffusion:function(){return s}});var t=a(6484);let e=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],s=async(i,n,a=!1)=>{a||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await (0,t.mb)(e)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||n;let{prompts:s}=i;globalThis.tvmjsGlobalEnv.prompts=s?.length?s:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};n.default=(i,n={})=>{if(!i)return;let a=document.createElement("canvas");a.height=window.innerHeight,a.width=window.innerWidth,i.append(a),s(n,a)}}}]);