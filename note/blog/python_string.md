python字符串操作笔记
=================

在python有各种各样的string操作函数。在历史上string类在python中经历了一段轮回的历史。在最开始的时候，python有一个专门 的string的module，要使用string的方法要先import，但后来由于众多的python使用者的建议，从python2.0开始，string方法改为用S.method()的形式调用，只要S是一个字符串对象就可以这样使用，而不用import。同时为了保持向后兼容，现在的 python中仍然保留了一个string的module，其中定义的方法与S.method()是相同的，这些方法都最后都指向了用S.method ()调用的函数。要注意，S.method()能调用的方法比string的module中的多，比如isdigit()、istitle()等就只能用 S.method()的方式调用。

字符串截取
----------------

  - str[::-1]创造一个与原字符串顺序相反的字符串
  - str[:-3] 截取从头开始到倒数第三个字符之前
  - str.strip()去除收尾空格
  - str.strip("yes") 去除首尾的y, e, s字符	
  
**实例:**	
<pre>
<code class="python">>>s="salkdjflksjdaf\n\r\t"
>>s.strip();
>>salkdjflksjdaf
>>s.strip('saf');
>>lkdjflksjd</code></pre>

字符串变换
--------------

  - len(S) #字符串长度
  - S.lower() #小写 
  - S.upper() #大写 
  - S.swapcase() #大小写互换 
  - S.capitalize() #首字母大写 
  - S.title() #只有首字母大写，其余为小写，模块中没有这个方法
  - s=s[::-1] #翻转字符串
	
字符串查找
--------------------------

  - s.index(str)
  - s.find(str)

字符串转换
----------------------

  - s.split("str")#根据str分隔字符串s
  - s[s.find(sStr2) + 1:]  #得到某字符串之后的值
  - 
  
 字符串格式化
 --------------------
 
<pre>
<code class="python">>>#precise = 3
print "%.3s " % ("jcodeer")
#precise = 4
print "%.*s" % (4,"jcodeer")
#width = 10,precise = 3
print "%10.3s" % ("jcodeer")
#输出结果：
#jco
#jcod
#       jco
#同于字符串也存在精度、度和。</code></pre>
