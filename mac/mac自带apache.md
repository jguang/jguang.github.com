# mac 自带apache


## 启动Apache

    sudo apachectl -v

查看apache版本;

    sudo apachectl start
    sudo apachectl restart
    sudo apachectl stop

apache控制命令;

1. 默认apache路径在“/Library（资源库）/WebServer/Documents/”下面;
2. Apache的安装目录在：/etc/apache2/, 命令 `open /etc`查看

## 虚拟主机

打开注释

    # Virtual hosts
    Include /private/etc/apache2/extra/httpd-vhosts.conf

修改/private/etc/apache2/extra/httpd-vhosts.conf文件，自带的都注释掉
添加：

    Listen 8011

    <VirtualHost *:8011>
        DocumentRoot "/Users/jianguang/study/www1"
        ServerName mysites
        ErrorLog "/private/var/log/apache2/sites-error_log"
        CustomLog "/private/var/log/apache2/sites-access_log" common
        <Directory  "/Users/jianguang/study/www1">
            Options Indexes FollowSymLinks MultiViews
            AllowOverride None
            Order deny,allow
            Allow from all
            Require all granted
          </Directory>
    </VirtualHost>




## 参考文档
http://www.cnblogs.com/snandy/archive/2012/11/13/2765381.html
http://blog.csdn.net/greenqingqingws/article/details/40342115
http://yansu.org/2013/12/11/lamp-in-mac.html

