#git 常用命令


    git remote  #显示仓库名字

    git remote -v #显示远程仓库名字和uri地址

    git remote add  名字 url #添加个远程仓库

    git remote set-url 名字 url #修改某个远程仓库及其地址



    git show            # 显示某次提交的内容
    git show $id


    //回退某个文件到commitId
    git reset $commitId $file//回退
    git commit -m "revert old file because yjl commmit have a bug"//commit
    git checkout $file //更新到本地


