import{d as e,r as t,c as o,a,t as n,F as r,w as s,p as d,b as l,e as c,f as u,o as i,g as m,h as p,i as v,j as h,k as f}from"./vendor.b7d1d168.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const d=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){r(new Error(`Failed to import: ${e}`)),n(l)},onload(){o(self[t].moduleMap[s]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");var g=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});const _=s();d("data-v-48294d8a");const b=l('<p data-v-48294d8a> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-48294d8a>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-48294d8a> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-48294d8a>Volar</a> (if using <code data-v-48294d8a>&lt;script setup&gt;</code>) </p><p data-v-48294d8a>See <code data-v-48294d8a>README.md</code> for more information.</p><p data-v-48294d8a><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-48294d8a> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-48294d8a>Vue 3 Docs</a></p>',3),k=a("p",null,[c(" Edit "),a("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);u();const E=_(((e,t,s,d,l,c)=>(i(),o(r,null,[a("h1",null,n(e.msg),1),b,a("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+n(e.count),1),k],64))));g.render=E,g.__scopeId="data-v-48294d8a";var V=e({name:"App",components:{HelloWorld:g},setup(){console.log(9999)}});const j=a("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);let L;V.render=function(e,t,n,s,d,l){const c=m("HelloWorld");return i(),o(r,null,[j,a(c,{msg:"Hello Vue 3 + TypeScript + Vite"})],64)};const y={};var R=e({name:"Home",components:{}});R.render=function(e,t,a,n,r,s){return i(),o("div",null,"home")};var w=e({name:"Vuex",components:{}});w.render=function(e,t,a,n,r,s){return i(),o("div",null,"vuex")};const x=[{path:"/",name:"Home",component:R},{path:"/vuex",name:"Vuex",component:w},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in y)return;y[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":L,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./axios.c20d9035.js")),["./assets/axios.c20d9035.js","./assets/vendor.b7d1d168.js"])}],H=p({history:v(),routes:x}),M={count:0};var U=h({state:()=>M,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});f(V).use(H).use(U).mount("#app");