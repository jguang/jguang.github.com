#HOW TO DETERMINE PHP IS RUNNING AS PHP CGI OR APACHE MODULE

In which way the Anti-Hacker function can be activated is decided by in which mode the server is running. This can be achieved in the PHP information of your system. You can easily check the information by doing the following:

1. Create a phpinfo.php file under the root of your website. Put the following script into the file:

<?php phpinfo(); ?>

2. Then access your website with this URL

www.yourwebsite.com/phpinfo.php

3. Then the PHP information will be shown like this

![php info](http://cdn.opensource-excellence.eu/screenshots/antihacker/phpinfo.png)

4. To determine if your website is running PHP as a CGI or an Apache module, please look at Server API, here is the summary:

If the Server API is in CGI mode (showing as CGI or Fast CGI), the anti-hacker / security suite in your website can only be activated via the php.ini file
If the Server API is running as an Apache Module, the anti-hacker / security suite in your website can only be activated via the .htaccess file, the following screenshot shows an example of the PHP is running as an Apache module (Apache 2.0 handler).
PHP Info

Tweet
