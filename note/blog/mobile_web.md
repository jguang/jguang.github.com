移动web开发小记
=============================
Baidu 无线前端<br/>
http://fe.baidu.com/doc/ge/mobile/<br/>



1. 初始注意要点<br/>

 - 手指要大过鼠标指针。可单击的导航时要特别注意这一点 

 
2. viewport meta 标签<br/>

 - http://fairyfish.net/m/viewport-meta-tag/ <br/>
 - http://developer.android.com/guide/webapps/targeting.html<br/>
 - http://www.linuxidc.com/Linux/2011-04/35005.htm<br/>
 - http://blog.cnbang.net/tech/1572/<br/>

3. web事件

 - https://developer.apple.com/library/IOs/#documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html<br/>
 - http://dvcs.w3.org/hg/webevents/raw-file/tip/touchevents.html<br/>
 - http://hi.baidu.com/popln/blog/item/f3fedb8e6627d0f9f01f36c8.html<br/>
 - http://hellohtml5.com/2010/10/how-mobile-safari-touch-event-works.html
 - 发现addEventListener的第二个参数是可以为对象，会触发对象里的handleEvent;
 - http://blog.darkthread.net/post-2011-10-02-html5-mutli-touch.aspx
 - http://code.google.com/intl/zh-CN/mobile/articles/webapp_fixed_ui.html#halting

4. metab标签

 - <meta content="yes" name="apple-mobile-web-app-capable" />safari私有meta标签，它表示：允许全屏模式浏览；
 - <meta content="telephone=no" name="format-detection" /> 告诉设备忽略将页面中的数字识别为电话号码
 - <meta content="email=no" name="format-detection" />去除Android平台中对邮箱地址的识别

5. css media
 - http://www.w3.org/TR/css3-mediaqueries/ <br/>
 

6. 获取window的高度浏览器不一致:
 - http://www.highdots.com/forums/javascript/how-can-i-get-visible-295637.html
 - http://www.quirksmode.org/m/w3c_cssom.html#t00


7. 手机输入时调用内部数字键盘、日期控件等；
 - 采用html5 input的type为相应类型即可；demo:http://zc.m.taobao.com/?sid=d4b3286ca609c09c&spm=41.302793.273016.7&sprefer=p23596;http://www.w3school.com.cn/html5/html_5_form_input_types.asp

