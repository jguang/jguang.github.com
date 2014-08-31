# 文件列表详解

		 brw-r--r--    1 unixguy staff 64,  64 Jan 27 05:52 block         
		 crw-r--r--    1 unixguy staff 64, 255 Jan 26 13:57 character     
		 -rw-r--r--    1 unixguy staff     290 Jan 26 14:08 compressed.gz 
		 -rw-r--r--    1 unixguy staff  331836 Jan 26 14:06 data.ppm      
		 drwxrwx--x    2 unixguy staff      48 Jan 26 11:28 directory     
		 -rwxrwx--x    1 unixguy staff      29 Jan 26 14:03 executable    
		 prw-r--r--    1 unixguy staff       0 Jan 26 11:50 fifo          
		 lrwxrwxrwx    1 unixguy staff       3 Jan 26 11:44 link -> dir   
		 -rw-rw----    1 unixguy staff     217 Jan 26 14:08 regularfile   


- 第一列

	- [d]目录，[-]文件，[l]链接文件，[b]设备文件中可供存储的接口设备，[c]串行端口设备
	- 【owner权限】【同用户组的权限】【其他用户权限】
	- r可读，w可写，e可执行，-无权限

- 第二列

	- 表示多少文件名连接到此节点（i-node）

- 第三列

此文件或者目录的所有者

- 第四列

此文件或者目录的所有者所在的用户组

- 第五列

文件的大小

- 第六列

创建文件的日期或者最后修改文件的日期

- 第七列

文件名