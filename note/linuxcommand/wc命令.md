#wc命令


    wc file [-option]


统计文件的行数 单词数 字节数;


[-options:]

    -c 统计字节数。
    -l 统计行数。
    -m 统计字符数。这个标志不能与 -c 标志一起使用。
    -w 统计字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。
    -L 打印最长行的长度。
    -help 显示帮助信息
    --version 显示版本信息



example:
    

    [zhangjianguang@cq01-rdtest-fe01.vm ~]$ wc test.sh   
    18  24 129 test.sh

    //文件个数，利用管道线
    [zhangjianguang@cq01-rdtest-fe01.vm ~]$ ls | wc -l
    11