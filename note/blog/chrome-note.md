chrome扩展
=============================


1. browser_action 
2. contextMenu
3. page_action


##Browser_action


**manifest file**:<br/>
每一个app扩展都有一个 Manifest Files, 是个json格式的扩展基础文件,用来说明整个app的文件及其action等等:<a herf="http://code.google.com/chrome/extensions/manifest.html">google 说明文档</a>


Browser_action是在浏览器的地址栏右侧添加图标,弹出页面或者微章：A browser action can have an icon, a tooltip, a badge, and a popup.

Javascript

    "browser_action": {
          "default_icon": "icon2.png",//默认图标
          "default_title": "Google Mail",//默认title提示
          "name"    : "actionaction",//title提示，如果default_title没有安装name提示
          "default_popup" :"popup.html" //browser_action的弹出页面
    }

可以使用default_icon来设置默认icon，可以利用动作行为来设置图标:<br/>
setIcon({path:"",imageData:'',tabId:''});

使用default_title来设置默认title，可以使用动作行为设置title:<br/>
setTitle({title:"",tabId:});,可以使用\n来换行显示

badge图标文字提示，可以使用行为改变:<br/>
setBadgeText({text:"",tabId:num})<br/>
setBadgeBackgroundColor({color:[],tabId:num});

onClick动作:<br/>
chrome.browserAction.onClicked.addListener(function(tab){
    tab为当前tab;
});


##contextMenu

上下文菜单及右键菜单;









