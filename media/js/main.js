// JavaScript Document
function getHash(){
	return location.hash.substring(1);	
};
function hashObj(){
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
function loadHash(){
	var url=getHash().toLowerCase(),pathUrl,fileUrl;
		if(url.lastIndexOf("/")==-1){
			pathUrl="/";
			fileUrl=url;	
		}
		else{
		pathUrl=url.slice(0,url.lastIndexOf("/")+1),
		fileUrl=url.slice(url.lastIndexOf("/")+1);
		if(fileUrl.lastIndexOf(".")==-1){pathUrl=url+"/";fileUrl="catalog.txt"}
		}
	loadArticle(pathUrl+fileUrl);
};
var keys = {
    enter:  13,
    escape: 27,
    up:     38,
    down:   40,
    array:  [13, 27, 38, 40]
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
	{loadHash();}
});