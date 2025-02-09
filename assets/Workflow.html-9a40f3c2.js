import{_ as a,r as t,o,c as p,a as e,b as n,d as r,e as c}from"./app-d69e7a4d.js";const l={},i=n("h1",{id:"流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#流程","aria-hidden":"true"},"#"),r(" 流程")],-1),u=c(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>FlowNode <span class="token operator">:</span>flowData<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>FlowNode<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx科技有限公司&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;产品研发部&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;客服部&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;客服一部&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1号小组&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;客服二部&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token string-property property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;业务部&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function k(d,v){const s=t("WorkflowDemo");return o(),p("div",null,[i,e(s),u])}const q=a(l,[["render",k],["__file","Workflow.html.vue"]]);export{q as default};
