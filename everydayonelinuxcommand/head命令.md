# head命令

顾名思义`head` 是显示文件开头内容命令


example：

  - 显示文件开头3行

    ~$: cat <<EOF > cc.txt
    sadfs
    sadfsfd
    safd
    safd
    asdf
    safd
    safd
    EOF
    ~: head -n 3 cc.txt
    sadfs
    sadfsfd
    safd

 - 显示文件前10个字节

    ~$: head -c 10 cc.txt
    sdf
    sdf

 - 可以一次显示多个文件并用-v显示文件名字

    ~$ head -n 10 -v cc.txt bb.txt
    ==> cc.txt <==
    sdf
    sdf
    dsf
    sdf
    sdf
    zhonguang

    ==> bb.txt <==
    dsf
    sdf
    sdf
    sdf
    sdf
    sdf
    sdf
    sf
 - `-n` `-c` 可以用负值使其显示减去最后n行的内容(总行数-最后n)全部显示


    ~]$ cat cc.txt           
    sdf
    sdf
    dsf
    sdf
    sdf
    zhonguang
    ~]$ head -n -5 cc.txt
    sdf
    ~]$ head -n -1 cc.txt
    sdf
    sdf
    dsf
    sdf
    sdf

###参考资料

 - [http://www.cnblogs.com/peida/archive/2012/11/06/2756278.html](http://www.cnblogs.com/peida/archive/2012/11/06/2756278.html)




