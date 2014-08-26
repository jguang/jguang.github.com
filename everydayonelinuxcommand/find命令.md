#find命令

“一切皆文件” ，查找文件find命令必不可少；

基本使用：

`find` 目录 [目录]  `-name` 文件名字  //精确查找
`find` 目录 [目录]  `-iname` 文件名字 //不区分大小写

**example：**

- 查找当前用户目录下的index.php文件
	
		➜  ~  find . -name index.php 
		./study/www/index.php

- 查找当前用户目录和`/usr/local`的index.php文件

		➜  ~  find ./ /usr/local -name index.php
			.//study/www/index.php
			/usr/local/lib/node_modules/fis/node_modules/fis-command-server/lib/jetty/vendor/index.php


模糊名字查找：

`*` 通配任意字符

	➜  ~  find . -name 'index.*p'
	./.fis-tmp/cache/compile/release-hash/index.html-c-a20f503f4e.tmp
	./.fis-tmp/cache/compile/release-hash-domain/index.html-c-a20f503f4e.tmp
	./study/www/index.php

`?` 通配单个字符

	➜  ~  find . -name 'inde?.php'
	./study/www/index.php
	
`[ ]` 通配括号里面的任意一个字符

	➜  ~  find . -name 'index.[pa]?p'
	./study/www/index.php


根据用户查找：

    `-user` 根据用户查找

    `-group` 根据组来查找


根据uid gid来查找

    `-uid` 根据用户id来查找

    `-gid` 根据gid来查找

根据附加条件满足

    `-a` 连接两个不同的条件

    `-o` 连接两个条件 满足一个就可以

    `-not` 对条件取反




###查找之后的action

	# -print    //默认情况下的动作
    # -ls                         //查找到后用ls 显示出来
    # -ok  [commend]           //查找后执行命令的时候询问用户是否要执行
    # -exec [commend]       //查找后执行命令的时候不询问用户，直接执行
	


### -type

    f     // 普通文件
    d     //目录文件
    l     //链接文件
    b     //块设备文件
    c     //字符设备文件
    p     //管道文件
    s     //socket文件
                      
                      



**参考资料:**

- http://blog.chinaunix.net/uid-24648486-id-2998767.html