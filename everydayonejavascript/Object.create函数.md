# Object.create 函数


    Object.create(object[, Properties] )；

    按照原型链object创建对象obj；
    如果传入了 Properties 参数并且不是 undefined, 则仿佛是用 obj 和 Properties 当作参数调用标准内置函数 Object.defineProperties 一样给 obj 添加自身属性。


example：

    var yourDog = Object.create(Dog, {  
        age : {  
            get : function () { /* . . . */ },  
            set : function () { /* . . . */ },  
            enumerable: true  
        },  
        gender : {  
            value : 'female'  
        }  
    });

兼容策略给Object增加create

    if (typeof Object.create != 'function') {
    (function () {
        var F = function () {};
        Object.create = function (o) {
            if (arguments.length > 1) { 
              throw Error('Second argument not supported');
            }
            if (typeof o != 'object') { 
              throw TypeError('Argument must be an object');
            }
            F.prototype = o;
            return new F();
        };
    })();

参考：

- http://msdn.microsoft.com/zh-cn/library/ff925952
- http://www.ue360.net/2012/05/object-create/
