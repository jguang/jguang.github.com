HTML5记录
=============================

1. **postMessage & message**:<br/>
http://www.whatwg.org/specs/web-apps/current-work/multipage/web-messaging.html#posting-messages<br/>
http://bbs.phpchina.com/thread-229298-1-1.html<br/>
http://code.google.com/p/message-event/<br/>

 - window.postMessage(数据,域);
 - window.onmessage(event); event.data:传的数据，event.origin: post域名，event.source: post窗口
 - document.referrer 返回载入文档来源的url，iframe嵌套的referrer的值都为最上层的url;
 
2. **online & offline事件**
http://www.ibm.com/developerworks/cn/web/1011_guozb_html5off/<br/>
http://html5demos.com/offlineapp<br/>

 -  navigator.onLine判断是否在线
 - online/offline事件可以触发在线或者掉线，作用于body、window; window还不支持.on事件


3. **manifest缓存**
http://sofish.de/1449<br/>
http://www.csser.com/dev/188.html<br/>
http://www.w3.org/TR/html5/offline.html#some-sample-manifests<br/>
http://www.infoq.com/cn/news/2011/09/html5-storage-apis<br/>


 - CACHE :缓存，NETWORK: 不缓存，FACKBACK：指当没有响应时的替代方案，比如我想请求某个页面，但这个页面的服务器挂了，那么，我可以显示另外一个指定的页面  
 - "#" 注释
 - 给 <html> 标签加 manifest 属性
 - 后面用户访问页面的任何时刻，浏览器将核查看一看在**manifest文件** 而不是mainfest中所指的文件中是否有内容发生改变。 如果没有，它将触发一个noupdate 事件，然后继续运行。如果其中有内容发生改变，则它将经历与上面完全相同的过程；它将触发一个包含一系列progress事件的downloading 事件，直到相应的文件全部更新完毕。当该事件发生时，而不是触发一个cached事件，浏览器将触发一个updateready事件表示所有的文件已经更新并且可以离线使用。
 
4. ***localStorage && sessionStorage**<br/>
http://js8.in/802.html<br/>
http://www.yiiyaa.net/1344<br/>
http://blog.allenm.me/2011/03/localstorage-in-html5-1/<br/>

 - localStorage永久存储 session会话存储;
 - 即支持对象点“.”操作又支持getItem(key),setItem(key)
 - 有方法clear():清楚，getItem(key):给值；setItem(key):设值；removeItem(key):删除某值；key(num):key值，按照倒序,后赋值的为0;
 - 存储是有大小限制的,切各个浏览器表现不一
 
5. **audio && video**<br/>
https://developer.mozilla.org/en/Using_HTML5_audio_and_video<br/>
https://developer.mozilla.org/en/DOM/HTMLMediaElement<br/>
还不支持直接给media赋on事件，可以使用监听的方式<br/>
在safai上audio即使没有controls也占用位置;<br/>

6. progress && meter标签
http://jsfiddle.net/jguang/rCqSj/<br/>
http://www.cnblogs.com/rubylouvre/archive/2011/07/09/2101927.html<br/>

7. **history**
http://jingwei.li/blog/?p=183<br/>
http://www.jsmix.com/html5/introduction-to-history.html<br/>
http://vinqon.com/codeblog/?detail/11093<br/>
popstate事件:前进和后退是发生；在chrome下刚载入时就会发生，firefox不发生;



