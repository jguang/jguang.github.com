#php静态方法

php在类中可以定义不需要创建对象直接使用的方法为静态方法，他不随着这对象的创建而改变；

使用`static` 关键字来标识变量的静态或者方法的静态


例如：
  
        <?php
        class Fruit {
            public static $category = "I'm fruit";
            
            static function find($class) 
            {
                $vars = get_class_vars($class) ;
                echo $vars['category'] ;
            }
        }

        class Apple extends Fruit {
             public static $category = "I'm Apple";
        }

        Apple::find("Apple");
        ?>


例如：


        <?php
        class Fruit
        {
            static function Foo ( $class = __CLASS__ )
            {
                call_user_func(array($class, 'Color'));
            }
        }

        class Apple extends Fruit
        {
            static function Foo ( $class = __CLASS__ )
            {
                parent::Foo($class);
            }

            static function Color()
            {
                echo "Apple's color is red";
            }
        }

        Apple::Foo(); // This time it works.
        ?>


注意要点：

1. 静态方法中是不能有$this作为对象来指向其他方法和变量的，因此在静态方法中只能访问通过self::XXX访问类的其他静态方法；

2. 类的对象实例是可以直接使用静态方法的反之却不可以

3. 可以用call_user_func_array调用类静态方法



###参考文档

- http://www.nowamagic.net/php/php_StaticMethods.php
- http://www.cnblogs.com/k5054/archive/2012/12/17/2822527.html