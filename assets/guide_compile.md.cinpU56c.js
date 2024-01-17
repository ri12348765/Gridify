import{_ as s,c as i,o as t,U as a}from"./chunks/framework.BZkFhLI2.js";const E=JSON.parse('{"title":"Compile and Reuse","description":"","frontmatter":{},"headers":[],"relativePath":"guide/compile.md","filePath":"guide/compile.md"}'),e={name:"guide/compile.md"},n=a(`<h1 id="compile-and-reuse" tabindex="-1">Compile and Reuse <a class="header-anchor" href="#compile-and-reuse" aria-label="Permalink to &quot;Compile and Reuse&quot;">​</a></h1><p>You can access Gridify generated expressions using the <code>GetFilteringExpression</code> of <a href="./gridifyQuery">GridifyQuery</a> or <code>BuildCompiled</code> methods of <a href="./queryBuilder">QueryBuilder</a> class, by storing an expression you can use it multiple times without having any overheads, also if you store a compiled expression you get a massive performance boost.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should only use a <strong>compiled</strong> expression (delegate) if you are <strong>not</strong> using Gridify alongside an ORM like Entity-Framework.</p></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eg.1 - using GridifyQuery - Compiled - where only</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gq</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GridifyQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { Filter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;name=John&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gq.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetFilteringExpression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compiledExpression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> expression.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> persons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(compiledExpression);</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eg.2 - using QueryBuilder - Compiled - where only</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compiledExpression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                         .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddCondition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name=John&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                         .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BuildFilteringExpression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                         .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> persons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(compiledExpression);</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eg.3 - using QueryBuilder - BuildCompiled</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddCondition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name=John&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BuildCompiled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(persons);</span></span></code></pre></div><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p>This is the performance improvement example when you use a compiled expression.</p><table><thead><tr><th>Method</th><th style="text-align:right;">Mean</th><th style="text-align:right;">Ratio</th><th style="text-align:right;">RatioSD</th><th style="text-align:right;">Gen 0</th><th style="text-align:right;">Gen 1</th><th style="text-align:right;">Allocated</th></tr></thead><tbody><tr><td>GridifyCompiled</td><td style="text-align:right;">1.008 us</td><td style="text-align:right;">0.001</td><td style="text-align:right;">0.00</td><td style="text-align:right;">0.1564</td><td style="text-align:right;">-</td><td style="text-align:right;">984 B</td></tr><tr><td>Gridify</td><td style="text-align:right;">689.329 us</td><td style="text-align:right;">1.000</td><td style="text-align:right;">0.00</td><td style="text-align:right;">5.8594</td><td style="text-align:right;">2.9297</td><td style="text-align:right;">39,924 B</td></tr><tr><td>NativeLINQ</td><td style="text-align:right;">736.854 us</td><td style="text-align:right;">1.019</td><td style="text-align:right;">0.01</td><td style="text-align:right;">5.8594</td><td style="text-align:right;">2.9297</td><td style="text-align:right;">37,392 B</td></tr></tbody></table>`,9),l=[n];function h(p,k,r,d,g,o){return t(),i("div",null,l)}const c=s(e,[["render",h]]);export{E as __pageData,c as default};
