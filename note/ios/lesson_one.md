# 第一课小计

##类的引用

- include和import的区别，import是include 的升级版，避免头文件互相引用；可参考http://www.saitjr.com/ios/oc-include-import-class-difference.html; 关于 C 的编译原理可参考：http://blog.csdn.net/koudaidai/article/details/8092647 http://mooc.guokr.com/note/13202/ http://www.ruanyifeng.com/blog/2014/11/compiler.html

- import中国双引号用来引用本地文件，尖括号<>用来引用库文件


##中括号和点.操作符

```
    @interface Person:NSObject
    @property int age;
    @end

    @implementation Person

    @end

    //主函数调用Person类
    void main()
    {
        Person *p = [[Person alloc] init]; //创建Person对象
        p.age = 18; //调用setAge方法，将年龄设为18
        NSLog(@"%i",p.age); //调用age方法，返回年龄
    }
```
OC后来为了对属性的 get set 简单，只要@propety声明的变量自动生成取值及其set值;

-  p.age = 180;这是调用Person类的设值方法setAge,相当于使用[p setAge:18];
-  在主函数NSLog(@"%i",p.age);中的p.age相当于调用Person类的取值方法age,相当于使用[p age];,返回_age得值。






## 参考
- http://www.saitjr.com/ios/oc-include-import-class-difference.html
- http://www.jianshu.com/p/6a00d02f7c53
- http://www.cnblogs.com/ygm900/p/3633131.html
- http://blog.csdn.net/lengshengren/article/details/39896037
- http://my.oschina.net/haiyo060/blog/491960
- http://www.cnblogs.com/wendingding/p/3766347.html