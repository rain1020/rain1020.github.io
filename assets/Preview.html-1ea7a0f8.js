import{_ as n,r as p,o,c as t,a as e,b as s,d as r,e as l}from"./app-d69e7a4d.js";const c={},i=s("h1",{id:"预览",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#预览","aria-hidden":"true"},"#"),r(" 预览")],-1),k=l(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>upload <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;upload-demo&quot;</span> drag action<span class="token operator">=</span><span class="token string">&quot;#&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;uploadRef&quot;</span> <span class="token operator">:</span>http<span class="token operator">-</span>request<span class="token operator">=</span><span class="token string">&quot;httpRequest&quot;</span> <span class="token operator">:</span>show<span class="token operator">-</span>file<span class="token operator">-</span>list<span class="token operator">=</span><span class="token string">&quot;false&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>icon <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;el-icon--upload&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>upload<span class="token operator">-</span>filled <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;el-upload__text&quot;</span><span class="token operator">&gt;</span>
            Drop file here or <span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>click to upload<span class="token operator">&lt;</span><span class="token operator">/</span>em<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>template #tip<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;el-upload__tip&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>el<span class="token operator">-</span>text type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>
                    预览xmind 文件
                <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>text<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>upload<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;preview-box&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Preview <span class="token operator">:</span>file<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;file&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Preview<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;model&quot;</span> v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;!file&quot;</span><span class="token operator">&gt;</span>预览区域<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> UploadRequestOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">httpRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> UploadRequestOptions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    file<span class="token punctuation">.</span>value <span class="token operator">=</span> options<span class="token punctuation">.</span>file
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>preview<span class="token operator">-</span>box <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>

    <span class="token punctuation">.</span>model <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> cornsilk<span class="token punctuation">;</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
        justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
        align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function u(d,v){const a=p("PreviewDemo");return o(),t("div",null,[i,e(a),k])}const b=n(c,[["render",u],["__file","Preview.html.vue"]]);export{b as default};
