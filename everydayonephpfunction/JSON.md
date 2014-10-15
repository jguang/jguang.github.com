#JSON

## 数组或者对象转化为json
    
json_encode()

        
        $arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
　　
　　    echo json_encode($arr);
        


由于json只接受utf-8编码的字符，所以json_encode()的参数必须是utf-8编码，否则会得到空字符或者null。

json_encode还可以转化class 类的实例，结果是共有属性组成的json字符串


        　class Foo {
　　
        　　　　const     ERROR_CODE = '404';
        　　
        　　　　public    $public_ex = 'this is public';
        　　
        　　　　private   $private_ex = 'this is private!';
        　　
        　　　　protected $protected_ex = 'this should be protected'; 
         　　
        　　　　public function getErrorCode() {
        　　
        　　　　　　return self::ERROR_CODE;
        　　
        　　　　}
        　　
        　　}

            $foo = new Foo;
　　
        　　$foo_json = json_encode($foo);
        　　
        　　echo $foo_json;//　{"public_ex":"this is public"} 


## json串转换成数组或对象

json_decode(jsonString, true);

如果没有参数true，侧转化为PHP对象；

        $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
 　　
　　　　var_dump(json_decode($json,true));
        
        /*
        　array(5) {
　　
    　　 　　["a"] => int(1)
    　　 　　["b"] => int(2)
    　　 　　["c"] => int(3)
    　　 　　["d"] => int(4)
    　　 　　["e"] => int(5)
    　　
    　　}
        */

##参考：

http://www.ruanyifeng.com/blog/2011/01/json_in_php.html


        　　

    