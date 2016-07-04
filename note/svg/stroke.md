# stroke属性

- stroke 表示描边颜色。这很有意思，名字不是stroke-color, 而就是单纯的stroke. 其值，官方称之为”paint“，我就不上梁小丑般翻译了。一般有如下类型值：none, currentColor, <color>. none表示没有颜色，<color>就是我们常规的颜色值。RGBA, HSBA都支持。currentColor略高深，我看了下官方文档，个人理解为：共享父级但不越过SVG元素的XML中color(style中的)值；可以让路径绘制的文字直接继承父标签的color颜色值。
- stroke-width 表示描边的粗细。
- stroke-linecap 表示描边端点表现方式。可用值有：butt, round, square, inherit.
- stroke-linecap的不同值的表现
- stroke-linejoin 表示描边转角的表现方式。可用值有：miter, round, bevel, inherit.
- stroke-miterlimit 表示描边相交（锐角）的表现方式。默认大小是4. 什么斜角转斜面的角度损耗之类的意思，值越大，损耗越小。具体干嘛的，我自己也不确定。大家可查查其他资料。
- stroke-dasharray 表示虚线描边。可选值为：none, <dasharray>, inherit. 其中，none表示不是虚线；<dasharray>为一个逗号或空格分隔的数值列表。表示各个虚线端的长度。可以是固定的长度值，也可以是百分比值；inherit表继承。
- stroke-dashoffset 表示虚线的起始偏移。可选值为：<percentage>, <length>, inherit. 百分比值，长度值，继承。
- stroke-opacity 表示描边透明度。默认是1.



##参考

- https://css-tricks.com/svg-line-animation-works/