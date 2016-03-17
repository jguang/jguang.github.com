# tail命令

同head命令相反查看文件的最后n行


example:

 - 显示文本最后三行


 	➜  ~  cat <<EOF > aa.txt
	heredoc> 1
	heredoc> 2
	heredoc> 3
	heredoc> 4
	heredoc> 5
	heredoc> 6
	heredoc> 7
	heredoc> EOF
	➜  ~  tail -n 3 aa.txt 
	5
	6
	7

- 通常用-f 查看日志，`-f`的作用是循环读取文件最后行

	➜  ~  tail -f 3 aa.txt


- `-n` +index 从第index行开始显示文件



##参考：

 - http://blog.chinaunix.net/uid-9525959-id-2001839.html

 - http://www.cnblogs.com/peida/archive/2012/11/07/2758084.html 

