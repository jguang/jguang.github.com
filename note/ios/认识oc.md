# 认识 OC

说OC 是在 C 基础上发展的语言，对于 C 也是上学时的皮毛知识，但看到 OC 完全蒙了，各种特殊字符，特殊符号。。。。。


- 类中的减号(-)

表示一个函数、或者方法、或者消息的开始

- 类中的加号(+)

类似静态方法，不用创建实例就可以直接调用此方法

- 中括号([])

方法或者属性调用，如其他语言 this.a(true), oc中侧是[self hello:YES];

- NSXXX

Apple 插曲中成立个 NextStep 公司，里面有一套开发包很让人喜欢，最后此函数库用到了 MAC 开发中；
其里面函数都已 NS 前缀命名；NSLog，NSString， NSArray，NSInteger，NSURL，NSImage

- import

类似php 中的include_once, 进行了重复排除；

- 类的定义

头文件先声明接口；xxxx.h

	@interface Kids: NSObject {

		NSString *kidName;

		NSString *kidAge;

	}

	-(BOOL) isCaughtKid:;

	@end

- 类的实现
引用头文件，实现接口xxxx.m;

```
	#import “kids.h”
	@implementation Kids
	-(void) init {

		kidName=@”mykid”;

		kidAge=@”15”;

	}
	-(BOOL) isCaughtKid:{

		return YES;
	}

	@end
```

- 解析 OC 中的类

xxx.h

```
@interface ClassName{
    NSString* _value1;
}

@property(nonatomic,assign)NSString* value1;

-(void)func1;
@end
```
xxx.m

```
@interface ClassName(){
}
@end

@synthesize value1;

@implementation ClassName

-(void)func1{
}

@end
```

- @interface,@end类头文件声明；
- NSString* _value1; NSString指针类型；
- @property(nonatomic,assign)NSString* value1; property的属性标记可用用synthesize在实现文件中申明存取器
- .m里面的@interface，在OC里叫作Class Extension，是.h文件中@interface的补充。但是.m文件里的@interface，对外是不开放的，只在.m文件里可见;

> .h里面的@interface，不消说，是典型的头文件，它是供其它Class调用的。它的@property和functions，都能够被其它Class“看到”。

>而.m里面的@interface，在OC里叫作Class Extension，是.h文件中@interface的补充。但是.m文件里的@interface，对外是不开放的，只在.m文件里可见。

>因此，我们将对外开放的方法、变量放到.h文件中，而将不想要对外开放的变量放到.m文件中（.m文件的方法可以不声明，直接用）。

>有的同学看到Class Extension，可能会想到OC里的@protocol。是的，它们都是对一个Class的扩展。不过它们的区别也很明显：

>Class Extension只能用在能得到源代码的情况下，而@protocol在得不到源码的时候也可以使用。

>因此@protocol一般用作对一些系统Class的扩展，常见的比如对NSString、UIView等。

- ARC, @autoreleasepool

自动释放内存[http://justcoding.iteye.com/blog/1391548]


##参考
- [iOS学习笔记]http://blog.csdn.net/xyz_lmn/article/details/8907502
- [OC 中的.h,.m]http://blog.csdn.net/lixing333/article/details/47136885
- [oc中的变量]http://blog.csdn.net/imanapple/article/details/44453821
- [xcode插件]http://www.jianshu.com/p/00410d75b83f
- [xcode插件1]http://www.csdn.net/article/2014-05-04/2819586-the-best-xcode-plugins/1