# 再议OC的方法或者消息


objective-c是面向对象的高级语言，但古怪的语法看着经常朦朦的；

### 方法的重载

严格意义上 oc没有方法的重载，oc中的消息是通过方法描述来确定的如下：

oc的方法定义为：

    -/+ (返回类型) 方法名: (参数1类型) 形参1  参数2描述: (参数2类型) 形参2 参数3描述: (参数3类型) 形参3 .......

其中方法名即为参数1的描述，调用方法传递消息的时候

    [object 方法名:参数1 参数描述2:参数2 ...];

描述不同 oc 就认为是不同的方法，其方法不能重复；所以上面定义就出错了

    - (NSString) initWithAdd:(int) arg1;
    - (NSString) initWithAdd: (float) arg2;

而如下可以实现形式上的重载：

    - (NSString) initWithAdd:(int) arg1;
    - (NSString) initWithAdd:(int) arg1 second:(float) arg2;



##参考
- [oc方法或者消息] http://blog.csdn.net/lonelyroamer/article/details/7661745