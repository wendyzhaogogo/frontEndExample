## css3的全局属性inherit, initial, unset

1：**inherit** 属性的意思是被应用属性继承父级的该属性，比如border-width:inherit，意味着边框宽度继承父级。每个元素都有该属性，也都有默认值，默认为inherit：yes的大致如下：

2：**initial**属性的意思是初始化，把应用属性初始为它默认的样式，并且排除继承的干扰（默认会继承的属性也不在默认继承，而是表现出没有任何设置时候的默认样式）。

3: **unset**属性跟initial属性很像，区别就是unset会表现出继承属性inherit对该属性产生的影响，设置了该属性后如果默认为继承，则继承父级属性，否则就表现出默认属性样式。


## css 继承
<div class="post">
		<div class="clear"></div>
		<div class="postBody">
			<div id="cnblogs_post_body" class="blogpost-body"><p>最近在恶补css样式表的基础知识。上次研究了css样式表之冲突问题详解&nbsp;。这次是对&nbsp;css&nbsp;继承&nbsp;特性的学习。</p>
<p>什么是css 继承？<br>要想了解css样式表的继承，我们先从文档树（HTML DOM）开始。文档树由HTML元素组成。</p>


<p>文档树和家族树类似，也有祖先、后代、父亲、孩子和兄弟^_^。这很容易理解吧，笔者在这里就不一一赘述了。希望深入了解的朋友请google之。</p>
<p>那么CSS样式表继承指的是，特定的CSS属性向下传递到子孙元素。</p>
<p>下面举个例子，有如下html代码片段：</p>
<blockquote>
<p>&lt;p&gt;<br>CSS样式表&lt;em&gt;继承特性&lt;/em&gt;的演示代码<br>&lt;/p&gt;</p>


</blockquote>
<p>需要注意的是em是包含在p之内的。</p>

<p>当我们指定p的css样式时，看看em会有什么变化呢？</p>
<blockquote>
<p>&lt;style&gt;<br>p { color:red; }<br>&lt;/style&gt;</p>


</blockquote>
<p><a href="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo1.png"><img class="aligncenter size-full wp-image-548" title="cssdemo1" src="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo1.png" alt="" width="348" height="161"></a></p>
<p>在浏览器中p 和 em 字体同时变红。我们并没有指定em的样式，但em继承了它的父亲元素p的样式特性。</p>
<p>也许各位看了以后觉得这是理所当然的，根本不值一哂^_^。其实，这就是继承。在不知不觉中影响这我们的代码（想像一下如果没有继承特性，你就需要为每一个元素定义颜色属性，这是多么痛苦的一件事情！！！=_=!）。</p>
<p>&nbsp;</p>
<p>当然也不是所有的css属性都会被子类继承，例如border属性。继续利用上面的一段代码。我们为p元素添加border属性</p>
<blockquote>
<p>p { border: 1px solid red; }</p>


</blockquote>
<p><a href="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo2.png"><img class="aligncenter size-full wp-image-549" title="cssdemo2" src="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo2.png" alt="" width="315" height="163"></a></p>
<p>还好，p的border属性没有被em继承，否则是不是怪怪的呢？！^_^</p>
<p><a href="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo3.png"><img class="aligncenter size-full wp-image-550" title="cssdemo3" src="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo3.png" alt="" width="316" height="145"></a></p>
<p>那么，哪些属性是可以继承的呢？css样式表属性可以继承的有如下：</p>
<blockquote>
<p>azimuth, border-collapse, border-spacing,<br>caption-side, color, cursor, direction, elevation,<br>empty-cells, font-family, font-size, font-style,<br>font-variant, font-weight, font, letter-spacing,<br>line-height, list-style-image, list-style-position,<br>list-style-type, list-style, orphans, pitch-range,<br>pitch, quotes, richness, speak-header, speaknumeral,<br>speak-punctuation, speak, speechrate,<br>stress, text-align, text-indent, texttransform,<br>visibility, voice-family, volume, whitespace,<br>widows, word-spacing</p>


</blockquote>



</blockquote>
<p>还有一个属性比较重要，color属性。</p>
<p>值得一说的是font-size。很显然font-size是可以被继承的。但是它的方式有一些特别。Font-size的子类继承的不是实际值，而是计算后的值。下面解释下为什么font-size会这么特别呢？</p>
<p>看一个例子：</p>
<blockquote>
<p>&lt;p&gt;<br>字体大小属性&lt;em&gt;继承特性&lt;/em&gt;的演示代码<br>&lt;/p&gt;</p>


</blockquote>
<p>为p定义字体大小为默认字体的80％。</p>
<blockquote>
<p>p { font-size:80%}</p>


</blockquote>
<p>如果font-size继承的是相对值，那么结果会怎么样呢？依照这样的逻辑，em的font-size为80％X80％=64%，网页看起来应该是这样的。</p>
<p><a href="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo4.png"><img class="aligncenter size-full wp-image-551" title="cssdemo4" src="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo4.png" alt="" width="433" height="160"></a></p>
<p>但，实际情况却不是如此。em内的文字并没有改变大小，而是和p保持一致。</p>
<p><a href="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo5.png"><img class="aligncenter size-full wp-image-547" title="cssdemo5" src="http://files.cnphp.info/wp-content/uploads/2011/09/cssdemo5.png" alt="" width="458" height="154"></a></p>
<p>下面举三个例子，让各位有个直观的认识</p>
<blockquote>
<p>p { font-size:14px;}</p>


</blockquote>
<p>由于浏览器默认字体大小是16px，而p定义了字体14px，所以em继承了p的字体大小属性，也是14px；</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr><th valign="top" width="189">元素</th><th valign="top" width="189">值</th><th valign="top" width="189">计算后的值</th></tr>
<tr class="alt">
<td valign="top" width="189">默认字体大小</td>
<td valign="top" width="189">约16像素</td>
<td valign="top" width="189">&nbsp;</td>


</tr>
<tr>
<td valign="top" width="189">&lt;body&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">约16px</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;p&gt;</td>
<td valign="top" width="189">14px</td>
<td valign="top" width="189">14px</td>


</tr>
<tr>
<td valign="top" width="189">&lt;em&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">继承值=14px</td>


</tr>


</tbody>


</table>
<blockquote>
<p>p { font-size:85%;}</p>


</blockquote>
<p>浏览棋默认字体大小16px,而p定义了字体大小(16px X 85% = 13.6px). 13.6px这个值将被子元素em继承。</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr class="alt"><th valign="top" width="189">元素</th><th valign="top" width="189">值</th><th valign="top" width="189">计算后的值</th></tr>
<tr>
<td valign="top" width="189">默认字体大小</td>
<td valign="top" width="189">约16像素</td>
<td valign="top" width="189">&nbsp;</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;body&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">约16px</td>


</tr>
<tr>
<td valign="top" width="189">&lt;p&gt;</td>
<td valign="top" width="189">85%</td>
<td valign="top" width="189">16px X 85% =&nbsp;13.6px</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;em&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">继承值=13.6px</td>


</tr>


</tbody>


</table>
<blockquote>
<p>p { font-size:0.85em;}</p>


</blockquote>
<p>浏览棋默认字体大小16px,而p定义了字体大小(16px X 0.85em = 13.6px). 13.6px这个值将被子元素em继承。</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr><th valign="top" width="189">元素</th><th valign="top" width="189">值</th><th valign="top" width="189">计算后的值</th></tr>
<tr class="alt">
<td valign="top" width="189">默认字体大小</td>
<td valign="top" width="189">约16像素</td>
<td valign="top" width="189">&nbsp;</td>


</tr>
<tr>
<td valign="top" width="189">&lt;body&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">约16px</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;p&gt;</td>
<td valign="top" width="189">0.85em</td>
<td valign="top" width="189">16px X 0.85em=&nbsp;13.6px</td>


</tr>
<tr>
<td valign="top" width="189">&lt;em&gt;</td>
<td valign="top" width="189">未指定</td>
<td valign="top" width="189">继承值=13.6px</td>


</tr>


</tbody>


</table>
<p>&nbsp;</p>
<p>上面的例子都比较简答，再来个复杂的</p>
<blockquote>
<p>body { font-size: 85%; }<br>h1 { font-size: 200%; }<br>h2 { font-size: 150%; }</p>


</blockquote>
<p>浏览棋默认字体大小16px,而body定义了字体大小(16px X 85% = 13.6px). 如果子元素没有指定字体大小13.6px这个值将被子元素继承。</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr class="alt"><th valign="top" width="189">元素</th><th valign="top" width="94">值</th><th valign="top" width="285">计算后的值</th></tr>
<tr>
<td valign="top" width="189">默认字体大小</td>
<td valign="top" width="94">约16像素</td>
<td valign="top" width="285">&nbsp;</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;body&gt;</td>
<td valign="top" width="94">85%</td>
<td valign="top" width="285">16px X 85% =&nbsp;13.6px</td>


</tr>
<tr>
<td valign="top" width="189">&lt;h1&gt;</td>
<td valign="top" width="94">200%</td>
<td valign="top" width="285">继承值＝13.6px X 200%=&nbsp;27.2px</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;h2&gt;</td>
<td valign="top" width="94">150％</td>
<td valign="top" width="285">继承值＝13.6px X 150%=&nbsp;20.4px</td>


</tr>
<tr>
<td valign="top" width="189">&lt;p&gt;</td>
<td valign="top" width="94">未指定</td>
<td valign="top" width="285">继承值=13.6px</td>


</tr>
<tr class="alt">
<td valign="top" width="189">&lt;em&gt;</td>
<td valign="top" width="94">未指定</td>
<td valign="top" width="285">继承值=13.6px</td>


</tr>


</tbody>


</table>
