import{_ as s,c as a,o as i,V as n}from"./chunks/framework.5C96Qsyy.js";const t="/dy-virtual-table-doc/static/image.aL7qA9kx.png",g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"quick-start/index.md","filePath":"quick-start/index.md"}'),l={name:"quick-start/index.md"},e=n('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h3><p>dy-virtual-table 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。</p><p>由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。 <img src="'+t+`" alt="Alt text"></p><h3 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h3><p>dy-virtual-table 目前处于1.0.0版本，正在努力研发中。</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><p>我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 dy-virtual-table，然后您就可以使用打包工具，例如 Vite 或 webpack。</p><div class="language-node vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 选择一个你喜欢的包管理器</span></span>
<span class="line"><span></span></span>
<span class="line"><span># NPM</span></span>
<span class="line"><span>$ npm install dy-virtual-table --save</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Yarn</span></span>
<span class="line"><span>$ yarn add dy-virtual-table</span></span>
<span class="line"><span></span></span>
<span class="line"><span># pnpm</span></span>
<span class="line"><span>$ pnpm install dy-virtual-table</span></span></code></pre></div><p>如果您的网络环境不好，建议使用相关镜像服务 cnpm 或 中国 NPM 镜像。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DyVirtualTable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dy-virtual-table&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dy-virtual-table/dist/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DyVirtualTable).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="volar-支持" tabindex="-1">Volar 支持 <a class="header-anchor" href="#volar-支持" aria-label="Permalink to &quot;Volar 支持&quot;">​</a></h3><p>如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dy-virtual-table/global&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),p=[e];function h(r,k,d,o,c,E){return i(),a("div",null,p)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};