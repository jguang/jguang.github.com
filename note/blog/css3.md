css3记录
=============================

http://dev.w3.org/csswg/ <br/>



1. **user-selected**:<br/>
http://hi.baidu.com/bdui/blog/item/b351b13ddf7df5c49e3d626b.html<br/>
http://help.dottoro.com/lhwdpnva.php


2. **webkit-scrollbar**<br/>
http://www.qianduan.net/css-custom-scroll-bar-style.html<br/>
http://www.cnblogs.com/rubylouvre/archive/2011/03/01/1968057.html<br/>
<a href="/scroll-webkit.html">scroll-webkit.html</a>

 - 要设定了::-webkit-scrollbar,侧::-webkit-scrollbar-button的宽高的默认及其其他默认都变为无;
 - thumb:滚动里面的小方块;宽高无用，可以设置min-height(垂直)，min-width(横向);
 - track:外层轨道；
 - track-piece:内层轨道，他的设置会覆盖掉track，有伪类:start滚动方块上面的部分和:end滚动方块下面的部分；
 - button轨道上下或者左右的按钮，默认如果width为0；如果设了width侧默认:start、:end的decrement和increment默认display为none;
 
3. **css3 3Dtransform**<br/>
http://desandro.github.com/3dtransforms/docs/perspective.html<br/>
http://kevchapman.co.uk/css/webkit-css-perspective-demo/<br/>
http://spud.in/tech/flip-and-shake-with-css3.html


4. **background-clip** && **background-origin**<br/>
http://www.downcodes.com/info/2009/05/30/20090530-1147.html<br/>
http://www.divcss5.com/css3/background-clip.html<br/>
http://www.w3.org/TR/css3-background/#the-background-clip<br/>

 - 在 IE6 、IE7 中，一般元素（button 等除外）的背景相当于：background-clip:border; background-origin:border;而 hasLayout 的元素（加上 button 等）的背景则相当于：background-clip:padding; background-origin:padding;
 - clip是padding-box，border-box,content-box;而非padding，border，content；
 - background-origin并不是此背景图像在此值出为原点而是position的0点在何处与backposiiton不矛盾;
 - clip是控制背景的所有包括颜色等；origin仅仅为背景图像;

5. **animation**<br/>
http://www.w3.org/TR/css3-animations/<br/>
http://playground.html5rocks.com/#animations<br/>
http://atrl.me/archives/css3-animation<br/>

 - 简写书顺序不能省略和顺序错误: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction
 - 事件animationstart，animationend,animationiteration对webkit对应脚本:webkitAnimationStart.....
 - animation-play-state不能再缩写里面,一般用js控制
 
 
6. **transitions**<br/>
http://playground.html5rocks.com/#transitions
http://dev.w3.org/csswg/css3-transitions/

 - 简写顺序可以打乱 transition-property’> || <‘transition-duration’> || <‘transition-timing-function’> || <‘transition-delay’>
 
7. **盒子模型**<br/>
http://www.ibm.com/developerworks/cn/web/1202_zhouxiang_css3/<br/>
http://www.rainleaves.com/html/1122.html<br/>
http://www.rainleaves.com/html/1095.html<br/>
http://blog.imbolo.com/the-css3-flexible-box-model/<br/>





 




