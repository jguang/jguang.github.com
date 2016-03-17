#cp&scp命令


##cp命令


    cp [option] source target
    复制文件

 [option]:

 - 【-f】强制复制

 - 【-r】如何复制的东西的有目录 侧需要用-r

 - 【-a】尽可能将档案状态、权限等资料都照原状予以复制。


例子：

    cp *.c target //把.c文件copy到target文件夹中

    cp -rf cc aa //吧cc文件夹强制复制为aa


##scp命令


    scp [option] socurce  用户名@机器：target
    从本地复制到远程 
    scp 用户名@机器：target  socurce



[option]:

- 【-r】 复制目录


例子：

    scp -r local_folder remote_ip:remote_folder

    scp -r /home/space/music/ root@www.cumt.edu.cn:/home/root/others/

    scp root@www.cumt.edu.cn:/home/root/others/music /home/space/music/1.mp3





