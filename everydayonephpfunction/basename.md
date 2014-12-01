# basename & dirname


## basename

返回路径中的文件名部分；    

    basename(path,suffix)

    path:必需。规定要检查的路径。
    suffix:可选。规定文件扩展名。如果文件有 suffix，则不会输出这个扩展名。

case:

    <?php
        $path = "/testweb/home.php";

        //显示带有文件扩展名的文件名
        echo basename($path); //home.php

        //显示不带有文件扩展名的文件名
        echo basename($path,".php");    //home
    ?> 

## dirname
回去掉文件名后的目录名。

    dirname(path)
    path: 必须，规定要检查的路径

    <?php
        echo dirname("c:/testweb/home.php"); // c:/testweb
        echo dirname("/testweb/home.php");  //  /testweb/
    ?>