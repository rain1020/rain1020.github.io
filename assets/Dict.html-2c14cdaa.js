import{_ as n,r as t,o as e,c as o,a as p,b as s,d as r,e as l}from"./app-d0bcdc8b.js";const c={},i=s("h1",{id:"数据字典",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据字典","aria-hidden":"true"},"#"),r(" 数据字典")],-1),k=l(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    案例<span class="token number">1</span><span class="token operator">:</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    testDate的value为<span class="token number">1</span>的时候的数值是：
    <span class="token operator">&lt;</span>DictCom <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;testDate&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>template #<span class="token keyword">default</span><span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span>value1的映射是：<span class="token punctuation">{</span><span class="token punctuation">{</span> scope<span class="token punctuation">.</span>label <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>DictCom<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    案例<span class="token number">2</span><span class="token operator">:</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>select v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;value&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;Select&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;large&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>option v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in testDate&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.value&quot;</span> <span class="token operator">:</span>label<span class="token operator">=</span><span class="token string">&quot;item.label&quot;</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;item.value&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>select<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDict <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../components/DictFn&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> testDate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDict</span><span class="token punctuation">(</span><span class="token string">&#39;testDate&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function u(d,v){const a=t("DictDemo");return e(),o("div",null,[i,p(a),k])}const g=n(c,[["render",u],["__file","Dict.html.vue"]]);export{g as default};