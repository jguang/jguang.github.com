# cat 命令

cat是直接操作文件编辑文件或者生产备份文件的轻命令工具


直接example：

 - 给出行号查看文件

	    ~ cat -n aa.txt
	     1  asfjsf
	     2  sdfsadf
	     3  sadfsdaf

 - 把文件copy到另一个文件中

   	 	~ cat  aa.txt > bb.txt

 - 依追加的形式copy到另一个文件中

        ~ cat  aa.txt >> bb.txt

 - 直接编辑个新文件输入END即结束

        ~ cat <<EOF > bb.txt
        sdfsadf
        sdfsfd
        sdfsdf
        END
        //bb.txt的内容为
        sdfsadf
        sdfsfd
        sdfsdf

 - 合并文件输入到一个文件中

        ~ cat a.txt b.txt > c.txt

 
 **参考文档**

 - [http://zhangge.net/277.html](http://zhangge.net/277.html)
