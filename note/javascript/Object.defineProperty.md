# Object.defineProperty

ECMAScript 5中给Object引入了property特性：

- value：值，默认是undefined
- writable：是否是只读property，默认是false,有点像C#中的const
- enumerable：是否可以被枚举(for in)，默认false
- configurable：是否可以被删除，默认false
- get:返回property的值得方法，默认是undefined
- set：为property设置值的方法，默认是undefined

get/set不能和value和writable同时使用


example:
        var o = {};
        Object.defineProperty(o,'age', {
            value: 24,
            writable: true,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(o, 'sex', {
            value: 'male',
            writable: false,
            enumerable: false,
            configurable: false
        });

        console.log(o.age); //24
        o.age = 25;

        for (var obj in o) {
            console.log(obj + ' : ' + o[obj]);
            /*
            age : 25  //没有把sex ： male 遍历出来
            say : function () {
                alert(this.name);
            } 
            name : Byron 
            */
        }
        delete o.age;
        console.log(o.age);//undefined 

        console.log(o.sex); //male
        //o.sex = 'female'; //Cannot assign to read only property 'sex' of #<Object> 
        delete o.age; 
        console.log(o.sex); //male ,并没有被删除


### Object.getOwnPropertyDescriptor

    这个方法用于获取defineProperty方法设置的property 特性
    var props = Object.getOwnPropertyDescriptor(o, 'age');
        console.log(props); //Object {value: 24, writable: true, enumerable: true, configurable: true}

### Object.getOwnPropertyNames

    console.log(Object.getOwnPropertyNames(o)); //["age", "sex"]

### Object.keys();

    同getOwnPropertyNames,它只列举能够可以枚举的

### Object.preventExtensions(O) / Object.isExtensible 
方法用于锁住对象属性，使其不能够拓展，也就是不能增加新的属性，但是属性的值仍然可以更改，也可以把属性删除，Object.isExtensible用于判断对象是否可以被拓展

### Object.seal(O) / Object.isSealed

方法用于把对象密封，也就是让对象既不可以拓展也不可以删除属性（把每个属性的configurable设为false）,单数属性值仍然可以修改，Object.isSealed由于判断对象是否被密封

### Object.freeze(O) / Object.isFrozen
终极神器，完全冻结对象，在seal的基础上，属性值也不可以修改（每个属性的wirtable也被设为false）



参考：

 - http://www.cnblogs.com/dolphinX/p/3348467.html
