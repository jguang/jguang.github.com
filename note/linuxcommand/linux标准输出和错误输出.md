# linux标准输出和错误输出


Unix 命令默认从标准输入设备(stdin)获取输入，将结果输出到标准输出设备(stdout)显示。一般情况下，标准输入设备就是键盘，标准输出设备就是终端，即显示器。


1. 输出重定向文件

    command > file

    command >> file #stdout内容追加到文件file


2. 输入重定向

    common < file


一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：

标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。

标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。

标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。


吧错误stderr重定向到文件

    command > outfile 2 > errorfile
    command >> outfile 2 >> errorfile #追加
    command > outfile 2 > &1 #错误和输出用相同文件


        全部可用的重定向命令列表
        命令  说明
        command > file  将输出重定向到 file。
        command < file  将输入重定向到 file。
        command >> file 将输出以追加的方式重定向到 file。
        n > file    将文件描述符为 n 的文件重定向到 file。
        n >> file   将文件描述符为 n 的文件以追加的方式重定向到 file。
        n >& m  将输出文件 m 和 n 合并。
        n <& m  将输入文件 m 和 n 合并。
        << tag  将开始标记 tag 和结束标记 tag 之间的内容作为输入。



##参考：
- http://see.xidian.edu.cn/cpp/view/2738.html





