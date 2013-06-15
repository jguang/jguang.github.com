javascript记录
=============================

1. String的replace的第二个参数可以为函数,其参数会根据正则表达式不同而不同;第一个参数为所要匹配的字符串，其次参数为要匹配的字符串中的子表单式，可以有多个如果子表达式为0侧第二个参数为匹配的字符串的位置，其次参数为整个字符串;

**实例:**	
<pre>
"#{ddd}ddddddd#{aaa}".replace(/#\{(.+?)(})/,function(match,key,k,q){
console.log(match);//#{ddd}
console.log(key);//ddd
console.log(k);//}
console.log(q);//0
});
</pre>

2. 浅析document.referrer
http://driftcloudy.iteye.com/blog/986265 <br/>




 




