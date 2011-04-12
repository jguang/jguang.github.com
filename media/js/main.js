// JavaScript Document
function formatText(text) {
	return new Showdown.converter().makeHtml(text);	
};
function loadArticle(path){
	$.ajax({
		url:path,
		dataType:"text",
		cache: false,
		success:function(data){
			selected_languages = LANGUAGES;
			$("#content").html(formatText(data));
			$("#content").children("pre").each(function(){
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
	require.init();	
};
require.prototype.getHash=function(){
	return location.hash.substring(1);
};
require.prototype.hashObj=function(){
	var hashString=location.hash.substring(1),
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
	var url=this.getHash,
	urlary=url.split("/"),len=urlary.length;
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
};
require.prototype.loadURL=function(){
	var dir=this.URL.dir;
	switch(dir){
	case 'blog':
		break;
	case 'twitter':
		break;
	case 'book':
		break;
	case 'play':
		break;
	default:
		
	}
	
};
jQuery(function($){
	$("#loading").ajaxStart(function(){
		$(this).text("loading");	
	});
	window.onhashchange=function(){
		loadHash();
	};
	if(location.hash=="")
	{location.hash=$("#mainNav a.selected").attr("href");}
	else
	{require()}
});