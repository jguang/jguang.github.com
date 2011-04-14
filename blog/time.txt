python时间操作
=================


time
----------------

  - time.time()返回其秒数
  - time.localtime() 返回tuple格式的时间
  - time.strftime( ISOTIMEFORMAT, time.localtime() ) 格式时间
  - str.strip("yes") 去除首尾的y, e, s字符	
  
**实例:**	
<pre>
<code class="python">import os,time
TIMEFORMAT='%Y-%m-%d'
print time.strftime(TIMEFORMAT,time.localtime(os.stat( "blog/string.txt").st_mtime))
print time.strftime(TIMEFORMAT,time.localtime(os.stat( "blog/string.txt").st_ctime))</code></pre>

一些常用函数
------------

	def ISOString2Time( s ):
		'''
		convert a ISO format time to second
		from:2006-04-12 16:46:40 to:23123123
		把一个时间转化为秒
		'''
		return time.strptime( s, ISOTIMEFORMAT )
	def Time2ISOString( s ):
		'''
		convert second to a ISO format time
		from: 23123123 to: 2006-04-12 16:46:40
		把给定的秒转化为定义的格式
		'''
		return time.strftime( ISOTIMEFORMAT, time.localtime( float( s ) ) )
	def dateplustime( d, t ):
		'''
		d=2006-04-12 16:46:40
		t=2小时
	   return  2006-04-12 18:46:40
	   计算一个日期相差多少秒的日期,time2sec是另外一个函数，可以处理，3天，13分钟，10小时等字符串，回头再来写这个，需要结合正则表达式。
		'''
		return Time2ISOString( time.mktime( ISOString2Time( d ) )+time2sec( t ) )
	def dateMinDate( d1, d2 ):
		'''
		minus to iso format date,return seconds
		计算2个时间相差多少秒
		'''
		d1=ISOString2Time( d1 )
		d2=ISOString2Time( d2 )
		return time.mktime( d1 )-time.mktime( d2 )
	
