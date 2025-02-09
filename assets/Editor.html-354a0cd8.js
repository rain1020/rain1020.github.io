import {
  _ as e,
  r as s,
  o as l,
  c,
  a,
  b as n,
  d as t,
  e as r,
} from './app-d69e7a4d.js';
const i = {},
  u = n(
    'h1',
    { id: '编辑器', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#编辑器', 'aria-hidden': 'true' },
        '#',
      ),
      t(' 编辑器'),
    ],
    -1,
  ),
  k = {
    href: 'https://rain120.github.io/athena/zh/slate/Introduction.html#why',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  d = r(
    `<h4 id="节点数据结构" tabindex="-1"><a class="header-anchor" href="#节点数据结构" aria-hidden="true">#</a> 节点数据结构</h4><p>待制作...</p><h4 id="自定义扩展新功能" tabindex="-1"><a class="header-anchor" href="#自定义扩展新功能" aria-hidden="true">#</a> 自定义扩展新功能</h4><p>待制作...</p><h4 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h4><p>待制作...</p><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string">&quot;border: 1px solid #ccc&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>Toolbar style<span class="token operator">=</span><span class="token string">&quot;border-bottom: 1px solid #ccc&quot;</span> <span class="token operator">:</span>editor<span class="token operator">=</span><span class="token string">&quot;editorRef&quot;</span> <span class="token operator">:</span>defaultConfig<span class="token operator">=</span><span class="token string">&quot;toolbarConfig&quot;</span>
            <span class="token operator">:</span>mode<span class="token operator">=</span><span class="token string">&quot;mode&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>Editor style<span class="token operator">=</span><span class="token string">&quot;height: 300px; overflow-y: hidden&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;valueHtml&quot;</span> <span class="token operator">:</span>defaultConfig<span class="token operator">=</span><span class="token string">&quot;editorConfig&quot;</span> <span class="token operator">:</span>mode<span class="token operator">=</span><span class="token string">&quot;mode&quot;</span>
            @onCreated<span class="token operator">=</span><span class="token string">&quot;handleCreated&quot;</span> @customPaste<span class="token operator">=</span><span class="token string">&quot;customPast1&quot;</span> @onChange<span class="token operator">=</span><span class="token string">&quot;onChange&quot;</span> @onBlur<span class="token operator">=</span><span class="token string">&quot;onFocus&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token operator">&lt;</span>el<span class="token operator">-</span>descriptions<span class="token operator">-</span>item label<span class="token operator">=</span><span class="token string">&quot;modalOrPanelHide&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>descriptions<span class="token operator">-</span>item<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>descriptions<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 引入 css</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> Toolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor-for-vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import { DomEditor } from &#39;@wangeditor/editor&#39;;</span>
<span class="token comment">// 编辑器实例，必须用 shallowRef</span>
<span class="token keyword">const</span> editorRef <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mode <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 或 &#39;simple&#39;</span>
<span class="token keyword">const</span> toolbarConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">toolbarKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 分割线</span>
        <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 菜单 key</span>
        <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;editLink&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;uploadVideo&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 菜单组，包含多个菜单</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;group-more-style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必填，要以 group 开头</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;更多样式&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必填</span>
            <span class="token literal-property property">iconSvg</span><span class="token operator">:</span> <span class="token string">&#39;&lt;svg&gt;....&lt;/svg&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选</span>
            <span class="token literal-property property">menuKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;through&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;clearStyle&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 下级菜单 key ，必填</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">excludeKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modalAppendToBody</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> editorConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;请输入内容...&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">readOnly</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoFocus</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hoverbarKeys</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 内容 HTML</span>
<span class="token keyword">const</span> valueHtml <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模拟 ajax 异步获取内容</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        valueHtml<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;模拟 Ajax 异步设置内容&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 组件销毁时，也及时销毁编辑器</span>
<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> editor <span class="token operator">=</span> editorRef<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>editor <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    editor<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,
    7,
  );
function v(m, b) {
  const p = s('EditorDemo'),
    o = s('ExternalLinkIcon');
  return (
    l(),
    c('div', null, [
      u,
      a(p),
      n('p', null, [
        n('a', k, [
          t(
            'slate 官网链接(Slate (opens new window)是一个 完全 可定制的富文本编辑器框架)',
          ),
          a(o),
        ]),
      ]),
      d,
    ])
  );
}
const y = e(i, [
  ['render', v],
  ['__file', 'Editor.html.vue'],
]);
export { y as default };
