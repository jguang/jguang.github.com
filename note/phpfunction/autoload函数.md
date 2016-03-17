#__autoload 函数


编程思想逐渐向OO靠拢， 一般情况为了更好维护和使用,一个文件保存为一个类， 为了更好的实现自动化加载__autoload就起到作用了


    void __autoload ( string $class )


需要重写此函数来实现类文件的自动化加载；

如下：

        ./myClass.php
        <?php
        class myClass {
            public function __construct() {
                echo "myClass init'ed successfuly!!!";
            }
        }
        ?>

        ./index.php
        <?php
        // we've writen this code where we need
        function __autoload($classname) {
            $filename = "./". $classname .".php";
            include_once($filename);
        }

        // we've called a class ***
        $obj = new myClass();
        ?>


__autoload函数常常采用spl_autoload_register来注册load函数，通过他注册的函数只是到autoload堆栈中，autoload采用尝试策略加载每一个load；


    bool spl_autoload_register ([ callback $autoload_function ] )


example：


        <?php   
        class Loader   
        {   
            public static function loadClass($class)   
            {   
            $file = $class . '.php';   
            if (is_file($file)) {   
            require_once($file);   
            }   
            }   
        }   

        spl_autoload_register(array('Loader', 'loadClass'));   

        $a = new A();

参考:

- http://www.cnblogs.com/myluke/archive/2011/06/25/2090119.html

