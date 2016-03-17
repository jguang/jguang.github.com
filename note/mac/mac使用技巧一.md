# mac使用技巧一


1.  sublime text2重新打开无法记录历史记录功能;

    采用cmd+q退出；

2. command+option+h 隐藏当前任务以外的活动窗口

3. 让Mac的终端支持克隆会话 进入全屏

	- 保证这个目录的存在
	     
	     	mkdir -p ~/.ssh/cm_socket
	
	- 创建配置文件

	    	vi ~/.ssh/cm_socket/config
	
	- 把下面这段内容贴进去
	    
		    Host *
		    ControlMaster auto
		    ControlPath ~/.ssh/cm_socket/%r@%h:%p
	
	- 重启终端
