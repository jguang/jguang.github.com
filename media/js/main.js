// JavaScript Document
function formatText(text) {
	return new Showdown.converter().makeHtml(text);	
};
function loadArticle(cont,path){
	$.ajax({
		url:path,
		dataType:"text",
		cache: false,
		statusCode: {
			404:function(){alert("页面没有发现");}	 
		},
		error:function(){},
		success:function(data){
			selected_languages = LANGUAGES;
			$(cont).html(formatText(data));
			$(cont).children("pre").each(function(){
				 initHighlight($(this).children("code")[0]);	
			});
		}
	});
};
var keys = {
    enter:  13,
    escape: 27,
    up:     38,
    down:   40,
    array:  [13, 27, 38, 40]
};
function require(){
	this.URL={};	
};
require.prototype.getHash=function(){
	return location.hash.substring(1);
};
require.prototype.hashObj=function(){
	var hashString=this.getHash(),
	hashAry=hashString.split("&"),
	hashObj={},
	ar;
	for(var i=0,len=hashAry.length;i<len;i++){
		ar=hashAry[i].split("=");
		hashObj[ar[0]]=ar[1];
	};
	return hashObj;
};
require.prototype.init=function(){
	var url=this.getHash(),
	urlary=url.split("/"),
	len=urlary.length;
	/*设置默认连接为catalog.txt*/
	if(len==1&&urlary[0].lastIndexOf('.')!=-1){
		urlary.unshift('');
	};
	if($.trim(urlary[len-1])==''){
		urlary[len-1]='catalog.txt';
	}
	else if($.trim(urlary[len-1])!=''&& urlary[len-1].lastIndexOf('.')==-1){
		urlary[len]='catalog.txt';
	};
	this.URL.dir=urlary[0];
	this.URL.path=urlary.join("/");
	this.URL.file=urlary[urlary.length];
	this.loadURL();
};
require.prototype.loadURL=function(){
	var dir=this.URL.dir;
	var act_block=$("#content > div.cont_block.active_block")[0];
	var new_block=$("#content > div.cont_block."+dir)[0]||$("<div class='cont_block "+dir+"' />").appendTo("#content")[0];
	switch(dir){
	case 'blog':
	 loadArticle(new_block,this.URL.path);
	 break;
	case 'twitter':
		break;
	case 'book':
		break;
	case 'play':
		break;
	default:
		
	}
	$(act_block).addClass("slide out");
	setTimeout(function(){$(act_block).removeClass("slide out active_block")},400)
	$(new_block).addClass("active_block slide in");
	setTimeout(function(){$(new_block).removeClass("slide in")},400)
};
requ=new require();
jQuery(function($){
	$("#loading").ajaxStart(function(){
		$(this).text("loading");	
	});
	window.onhashchange=function(){
		requ.init();
	};
	if(location.hash=="")
	{location.hash=$("#mainNav a.selected").attr("href");}
	else
	{requ.init();}
});