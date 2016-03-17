# method_exists 

检查类名方法是否存在与此方法中


    bool method_exists(对象或者类名，方法名)；


example：

        class A{

            function ccc(){

            }

        };

        //class name

        var_dump(method_exists('A', 'ccc'));

        var_dump(method_exists('A', 'bbb'));
        // object

        $a = new A();

        var_dump(method_exists($a, 'ccc'));

        var_dump(method_exists($a, '__call'));

        var_dump(method_exists($a, '__construct'));
    
        结果：
        bool(true)
        bool(false)
        bool(true)
        bool(false)
        bool(false)




