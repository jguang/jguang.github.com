# 文件权限

附上：
[文件列表详解](https://github.com/jguang/jguang.github.com/blob/master/everydayonelinuxcommand/%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8%E8%AF%A6%E8%A7%A3.md)

- chmod 命令修改文件权限

	chmod ［who］ ［+ | - | =］ ［mode］ 文件名

	who:

	操作对象who可是下述字母中的任一个或者它们的组合：

　　u 表示“用户（user）”，即文件或目录的所有者。

　　g 表示“同组（group）用户”，即与文件属主有相同组ID的所有用户。

　　o 表示“其他（others）用户”。

　　a 表示“所有（all）用户”。它是系统默认值。

	操作符号:

	+ 添加某个权限。

　　- 取消某个权限。

　　= 赋予给定权限并取消其他所有权限（如果有的话）。

	mode:

	r 可读,数字为1。

　　w 可写，数字为2。

　　x 可执行，数字为4。

　　
	example: 

		$ chmod a+x sort
		//给所有用户增加文件sort的可执行权限

		$ chmod ug+w，o-x text
		//文件属主（u） 增加写权限
		//与文件属主同组用户（g） 增加写权限
		//其他用户（o） 删除执行权限















###参考：
https://github.com/jguang/jguang.github.com/blob/master/everydayonelinuxcommand/%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8%E8%AF%A6%E8%A7%A3.md
http://www.cnblogs.com/avril/archive/2010/03/23/1692809.html
