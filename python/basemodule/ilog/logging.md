#logging 模块


1. 默认情况下可直接导入调用，默认打印到屏幕上level=WARNING

2. 日志级别 CRITICAL > ERROR > WARNING > INFO > DEBUG > NOTSET  `CRITICAL:危险的==fatal` 

3. 日志的格式化输出关键字

		%(levelno)s: 打印日志级别的数值
		%(levelname)s: 打印日志级别名称
		%(pathname)s: 打印当前执行程序的路径，其实就是sys.argv[0]
		%(filename)s: 打印当前执行程序名
		%(funcName)s: 打印日志的当前函数
		%(lineno)d: 打印日志的当前行号
		%(asctime)s: 打印日志的时间
		%(thread)d: 打印线程ID
		%(threadName)s: 打印线程名称
		%(process)d: 打印进程ID
		%(message)s: 打印日志信息

5. 复现python格式输出 [点击](http://www.cnblogs.com/plwang1990/p/3757549.html)

4. 方法basicConfig的datefmt时间格式 同time.strftime

		%a 星期几的简写
		%A 星期几的全称
		%b 月分的简写
		%B 月份的全称
		%c 标准的日期的时间串
		%C 年份的后两位数字
		%d 十进制表示的每月的第几天
		%D 月/天/年
		%e 在两字符域中，十进制表示的每月的第几天
		%F 年-月-日
		%g 年份的后两位数字，使用基于周的年
		%G 年分，使用基于周的年
		%h 简写的月份名
		%H 24小时制的小时
		%I 12小时制的小时
		%j 十进制表示的每年的第几天
		%m 十进制表示的月份
		%M 十时制表示的分钟数
		%n 新行符
		%p 本地的AM或PM的等价显示
		%r 12小时的时间
		%R 显示小时和分钟：hh:mm
		%S 十进制的秒数
		%t 水平制表符
		%T 显示时分秒：hh:mm:ss
		%u 每周的第几天，星期一为第一天 （值从0到6，星期一为0）
		%U 第年的第几周，把星期日做为第一天（值从0到53）
		%V 每年的第几周，使用基于周的年
		%w 十进制表示的星期几（值从0到6，星期天为0）
		%W 每年的第几周，把星期一做为第一天（值从0到53）
		%x 标准的日期串
		%X 标准的时间串
		%y 不带世纪的十进制年份（值从0到99）
		%Y 带世纪部分的十制年份
		%z，%Z 时区名称，如果不能得到时区名称则返回空字符。
		%% 百分号

6. 