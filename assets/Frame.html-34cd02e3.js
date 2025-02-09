import{_ as a,r as p,o as e,c as t,a as o,b as n,d as r,e as l}from"./app-d69e7a4d.js";const c={},i=n("h1",{id:"动画",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动画","aria-hidden":"true"},"#"),r(" 动画")],-1),u=l(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;lines&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;line&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;line&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;line&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box <span class="token operator">!</span>important<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">171717</span><span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>lines <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">;</span>

    <span class="token punctuation">.</span>line <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 1px<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>

        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 15vh<span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> #ffffff <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">,</span> #ffffff <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token literal-property property">animation</span><span class="token operator">:</span> drop 7s 0s infinite<span class="token punctuation">;</span>
            animation<span class="token operator">-</span>fill<span class="token operator">-</span>mode<span class="token operator">:</span> forwards<span class="token punctuation">;</span>
            animation<span class="token operator">-</span>timing<span class="token operator">-</span><span class="token keyword">function</span><span class="token operator">:</span> cubic<span class="token operator">-</span><span class="token function">bezier</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.26</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token operator">&amp;</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">;</span>

            <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
                animation<span class="token operator">-</span>delay<span class="token operator">:</span> 2s
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token operator">&amp;</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">;</span>

            <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
                animation<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>5s
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@keyframes drop <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span>
    <span class="token punctuation">}</span>

    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">110</span><span class="token operator">%</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function k(d,v){const s=p("FrameDemo");return e(),t("div",null,[i,o(s),u])}const b=a(c,[["render",k],["__file","Frame.html.vue"]]);export{b as default};
