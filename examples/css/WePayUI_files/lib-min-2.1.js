if(typeof($$)=="undefined"){$$={}}(function(g){var j=function(q){var m="STOARGE_TEST",n;try{q.setItem(m,1);n=q.getItem(m);q.removeItem(m);return n==1}catch(p){return false}};try{_isLocalAble=j(localStorage)}catch(h){_isLocalAble=false}var c=function(){try{return JSON.parse(window.name||"{}")}catch(m){return{}}};var f=function(e){e&&(window.name=JSON.stringify(e))};var k=function(e){return c()[e]};var a=function(e,m){var n=c();n[e]=m;f(n)};var b=function(e){var m="";if(_isLocalAble){m=localStorage.getItem(e)}else{m=k(e)}return m};var i=function(e,m){if(_isLocalAble){localStorage.setItem(e,m)}else{a(e,m)}};var d=function(e){var m="";if(_isLocalAble){m=sessionStorage.getItem(e)}else{m=k(e)}return m};var l=function(e,m){if(_isLocalAble){sessionStorage.setItem(e,m)}else{a(e,m)}};g.STORAGE={setItem:i,getItem:b,setSessionItem:l,getSessionItem:d,isLocalAble:function(){return _isLocalAble}}})($$);(function(b){function a(u){var k=this.os={},v=this.browser={},d=u.match(/Web[kK]it[\/]{0,1}([\d.]+)/),w=u.match(/(Android);?[\s\/]+([\d.]+)?/),o=u.match(/(iPad).*OS\s([\d_]+)/),i=u.match(/(iPod)(.*OS\s([\d_]+))?/),g=!o&&u.match(/(iPhone\sOS)\s([\d_]+)/),c=u.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),q=c&&u.match(/TouchPad/),h=u.match(/Kindle\/([\d.]+)/),t=u.match(/Silk\/([\d._]+)/),p=u.match(/(BlackBerry).*Version\/([\d.]+)/),m=u.match(/(BB10).*Version\/([\d.]+)/),e=u.match(/(RIM\sTablet\sOS)\s([\d.]+)/),n=u.match(/PlayBook/),s=u.match(/Chrome\/([\d.]+)/)||u.match(/CriOS\/([\d.]+)/),j=u.match(/Firefox\/([\d.]+)/),r=u.match(/MSIE ([\d.]+)/),l=d&&u.match(/Mobile\//)&&!s,f=u.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!s,r=u.match(/MSIE\s([\d.]+)/);if(v.webkit=!!d){v.version=d[1]}if(w){k.android=true,k.version=w[2]}if(g&&!i){k.ios=k.iphone=true,k.version=g[2].replace(/_/g,".")}if(o){k.ios=k.ipad=true,k.version=o[2].replace(/_/g,".")}if(i){k.ios=k.ipod=true,k.version=i[3]?i[3].replace(/_/g,"."):null}if(c){k.webos=true,k.version=c[2]}if(q){k.touchpad=true}if(p){k.blackberry=true,k.version=p[2]}if(m){k.bb10=true,k.version=m[2]}if(e){k.rimtabletos=true,k.version=e[2]}if(n){v.playbook=true}if(h){k.kindle=true,k.version=h[1]}if(t){v.silk=true,v.version=t[1]}if(!t&&k.android&&u.match(/Kindle Fire/)){v.silk=true}if(s){v.chrome=true,v.version=s[1]}if(j){v.firefox=true,v.version=j[1]}if(r){v.ie=true,v.version=r[1]}if(l&&(u.match(/Safari/)||!!k.ios)){v.safari=true}if(f){v.webview=true}if(r){v.ie=true,v.version=r[1]}k.tablet=!!(o||n||(w&&!u.match(/Mobile/))||(j&&u.match(/Tablet/))||(r&&!u.match(/Phone/)&&u.match(/Touch/)));k.phone=!!(!k.tablet&&!k.ipod&&(w||g||c||p||m||(s&&u.match(/Android/))||(s&&u.match(/CriOS\/([\d.]+)/))||(j&&u.match(/Mobile/))||(r&&u.match(/Touch/))))}a.call(b,navigator.userAgent);b.__detect=a})($$);(function(f,b){function g(l){var m="";if(window.localStorage){m=localStorage.getItem(l)||sessionStorage.getItem(l)}else{var k=document.cookie.match(new RegExp("(?:^|;\\s)"+l+"=(.*?)(?:;\\s|$)"));m=k?k[1]:""}return m}function j(l,m,k){if(window.localStorage){k?localStorage.setItem(l,m):sessionStorage.setItem(l,m)}else{document.cookie=l+"="+m+";path=/;domain="+a()+(k?";expires="+k:"")}}function a(){var m=window.location.host,l={"com.cn":1,"js.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1,"co.nz":1},k=m.split(".");k.length>2&&function(){m=(l[k.slice(-2).join(".")]?k.slice(-3):k.slice(-2)).join(".")}();return m}function c(l){var n,p,m,o,r={};if(l===undefined){var q=window.location;n=q.host;p=q.pathname;m=q.search.substr(1);o=q.hash}else{var k=l.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||[];n=k[1];p=k[2];m=k[3];o=k[4]}m&&function(){var s=m.split("&");for(var x=0,t=s.length;x<t;x++){if(s[x].indexOf("=")!=-1){var y=s[x].indexOf("=");var w=s[x].slice(0,y);var u=s[x].slice(y+1);r[w]=u}}}();return{host:n,path:p,search:m,hash:o,param:r}}function h(k){k=k||"";return k+(Math.round((Math.random()||0.5)*2147483647)*(+new Date()))%10000000000}function e(){var l=c();var k={dm:l.host,url:l.path};if(typeof(b.TA_STATS_ARGS)!="undefined"&&b.TA_STATS_ARGS["phash"]){k.hash=l.hash}if(typeof(b.TA_STATS_ARGS)!="undefined"&&b.TA_STATS_ARGS["pqstr"]){k.qstr=encodeURIComponent((l.search).replace(/&/g,":"))}k.pvi=function(){var m=g("ta_pvi");!m&&function(){m=h();j("ta_pvi",m,"Sun, 18 Jan 2038 00:00:00 GMT;")}();return m}();k.si=function(){var m=g("ta_si");!m&&function(){m=h("s");j("ta_si",m)}();return m}();return k}function i(){var m=["sp","nt","sk","sv"];var l=typeof(b.TA_STATS_ARGS)=="undefined"?{}:b.TA_STATS_ARGS,k={};if(typeof(_speedMark)!="undefined"){k["sp"]=new Date()-_speedMark}l&&function(){for(var n=0;n<m.length;n++){typeof(l[m[n]])!="undefined"&&(k[m[n]]=encodeURIComponent(l[m[n]]))}}();return k}function d(u,t){var s=[];for(var q=0,r=[e(),i(),{"random":+new Date()}],n=r.length;q<n;q++){for(var m in r[q]){if(m=="sk"&&!u&&!t){r[q].hasOwnProperty(m)&&s.push(m+"="+(r[q][m]||""))}else{r[q].hasOwnProperty(m)&&s.push(m+"="+(r[q][m]||""))}}}if(u&&t){s.push("sk=&type=extend&"+u+"&"+t)}var k=Ta.src=window.location.protocol+'//tudg.qq.com/dataimport/ImportService?m=dataImport&p=["'+f.logid+'","'+encodeURIComponent(s.join("&"))+'"]';
var o=new Image();o.src=k}b.Ta=b.Ta||{};Ta.pgv=d})({logid:100000},this);(function(t){var H={userID:"",sessionID:"",projectID:"",pageID:"",channelID:"",keypointID:""};var B="wx_log_userid",k="wx_log_sessionid",q="wx_log_flag",s="wx_log_unique_flag",E="wx_log_projectid",r="wx_log_pageid",D="wx_log_channelid",J="wx_log_keypointid";var F=[],l=true,A;var m=function(L){return !isNaN(parseInt(L))};var z=function(L){if(t.debug){alert("[上报日志]"+L)}};var n=function(){H.userID=t.STORAGE.getItem(B)||x(H.projectID);t.STORAGE.setItem(B,H.userID)};var e=function(){H.sessionID=t.STORAGE.getSessionItem(k)||x();t.STORAGE.setSessionItem(k,H.sessionID)};var y=function(L){if(m(L)){H["projectID"]=L;t.STORAGE.setSessionItem(E,L)}if(!m(L)){z("项目ID数据类型不正确")}};var v=function(L){if(m(L)){H["pageID"]=L;t.STORAGE.setSessionItem(r,L)}if(!m(L)){z("页面ID数据类型不正确")}};var w=function(L){if(m(L)){H["channelID"]=L;t.STORAGE.setSessionItem(D,L)}if(!m(L)){z("渠道ID数据类型不正确")}};var K=function(L){if(m(L)){H["key"]=L;t.STORAGE.setSessionItem(J,L)}else{z("关键点ID数据类型不正确")}};var u=function(M){var L=parseInt(t.STORAGE.getSessionItem(q));if(!isNaN(L)){l=L}else{M=parseFloat(M);l=Math.random()<=M?1:0}t.STORAGE.setSessionItem(q,l)};var h=function(){H["pageID"]=t.STORAGE.getSessionItem(r);H["projectID"]=t.STORAGE.getSessionItem(E);H["channelID"]=t.STORAGE.getSessionItem(D)};var I=function(){if(typeof(WeixinJSBridge)=="undefined"){document.addEventListener("WeixinJSBridgeReady",function(L){p()})}else{p()}a();c()};var p=function(){try{function M(P){var O=P.err_msg.split(":");if(O.length==2){if(O[1]=="fail"){z("网络类型获取失败！")}else{f("network",O[1]=="wifi"?"wifi":"other");i()}}else{z("网络类型获取失败！")}}var L=!!t.STORAGE.getSessionItem(s)?1:0;if(!!L){WeixinJSBridge.call("getNetworkType",{},M)}}catch(N){z("网络类型获取失败！")}};var b=function(N){var M=document.createTextNode(N),O=document.createElement("div"),L="";O.appendChild(M);L=O.innerHTML;M=null;O=null;return L};var j=function(N){var R={},P,S=location.search.replace("?",""),L=S.split("&");if(L.length>0){for(var O=0,M=L.length;O<M;O++){try{if(/(.*?)=(.*)/.test(L[O])){R[RegExp.$1]=RegExp.$2}}catch(Q){}}}return N?R[N]:R};var a=function(){var L=!!t.STORAGE.getSessionItem(s)?1:0;if(!L){var M=t.os.ios===true?"ios":(t.os.android===true?"android":(t.browser.ie===true?"wp":"other"));f("os",M=="wp"?"wp_"+t.browser.version:M+(t.os.version?"_"+t.os.version:""))}};var c=function(){try{if(typeof window.external!="undefined"&&typeof window.external.notify=="unknown"){window.external.notify("wechat:version")}}catch(O){}var N=/MicroMessenger\/([\d.]+)/i,L=(navigator.wxuserAgent||navigator.userAgent).match(N),P=L?L[1]:(t.browser.ie&&!navigator.wxuserAgent)?-2:-1,M=!!t.STORAGE.getSessionItem(s)?1:0;if(!M&&P>0){f("wx_version",P)}};var f=function(L,M){F.push({"type":L,"value":M,"time":G()})};var o=function(){f("pgv",H.pageID)};var d=function(N,P){var M=["network","keypoint","error","age","sex","uid","page","message"];if(M.indexOf(N)>0){if(N=="error"){P=b(P);P=P.length>30?P.substr(0,30)+"...":P}f(N,P);if("uid"==N){if(/^([1-9][0-9]{16}[0-9a-zA-Z])|([1-9][0-9]{14})$/.test(P)){var L=P.substr(6,4);var O=P.substr(16,1)%2==0?2:1;d("age",(new Date()).getFullYear()-L);d("sex",O)}else{z("身份证号不正确："+P)}}else{i()}}else{z("不合法的类型："+N)}};var i=function(){if(F.length>0&&H.sessionID&&l&&H.projectID&&H.pageID&&(H.channelID!==""&&H.channelID!==null)){if(H.channelID==0){f("exception",($$.STORAGE.isLocalAble()?1:0)+"|"+navigator.userAgent+"|"+document.referrer)}var L=F.slice(0);var N=new Image();var O="uid="+H.userID+"&sid="+H.sessionID+"&pid="+H.projectID+"&cid="+H.channelID+"&gid="+H.pageID;var M=[];var Q={"error":16,"unload":8,"wx_version":7,"os":6,"network":5,"keypoint":4,"sex":3,"age":2,"pgv":1,"exception":10,"message":9};F=[];for(var P=0;P<L.length;P++){if(Q[L[P].type]){M.push("sk"+Q[L[P].type]+"="+(L[P].type=="exception"?"error":L[P].type)+"&sv"+Q[L[P].type]+"="+L[P].value+"&sp"+Q[L[P].type]+"="+L[P].time)}}if(t.debug){alert("data："+M.join("&"))}Ta.pgv(O,M.join("&"))}};function G(){return(+new Date())}function x(N){var L="";for(var M=1;M<=16;M++){var O=Math.floor(Math.random()*16).toString(16);L+=O;if((M==8)||(M==12)){L+="-"}}return[N||"",+(new Date())+"-"+L].join("")}function C(L){if(!!L){t.debug="debug" in L?!!L.debug:false;A=typeof(_speedMark)=="undefined"?G():_speedMark;u(L.rate||1);e();h();I();y(L.projectID);v(L.pageID);n();w(j("cid")||t.STORAGE.getSessionItem(D)||L.channelID||0);o();i();t.STORAGE.setSessionItem(s,1);window.onunload=function(){f("unload","");i()}}}function g(L){if(m(L)){w(j("cid")||t.STORAGE.getSessionItem(D)||obj.channelID||0);v(L);o();i()}else{z("不合法的pageID："+L)}}if(typeof(TA_STATS_ARGS)!="undefined"){C(TA_STATS_ARGS)}t.config=C;t.reportPage=g;t.report=d})($$);/*  |xGv00|466fe1357268b4cd4ba74f1f777ec6bb */