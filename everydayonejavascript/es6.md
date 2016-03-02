# ES6

##解构赋值

###数组

    // 逗号隔开
    var [,,third] = ["foo", "bar", "baz"];
    third // "baz"

    // `...`剩余全部值
    var [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

2. 解析失败测为 undefined

    var [foo] = [];
    var [foo] = 1;
    var [foo] = 'Hello';
    var [foo] = false;
    var [foo] = NaN;
    var [bar, foo] = [1];

3. undefined或null进行解构，会报错

    // 报错
    var [foo] = undefined;
    var [foo] = null;

4. 默认值

解构赋值允许指定默认值。


var [foo = true] = [];
foo // true

[x, y='b'] = ['a'] // x='a', y='b'
[x, y='b'] = ['a', undefined] // x='a', y='b'


### 对象

1. 嵌套结构


    var o = {
      p: [
        "Hello",
        { y: "World" }
      ]
    };

    var { p: [x, { y }] } = o;
    x // "Hello"
    y // "World"

2. 默认值

    var { x = 3 } = {};
    x // 3

    var {x, y = 5} = {x: 1};
    console.log(x, y) // 1, 5

4. 函数参数

    function move({x=0, y=0} = {}) {
      return [x, y];
    }

    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]


5. 函数返回值

    // 返回一个数组

    function example() {
        return [1, 2, 3];
    }
    var [a, b, c] = example();

    // 返回一个对象

    function example() {
      return {
        foo: 1,
        bar: 2
      };
    }
    var { foo, bar } = example();

## 字符串

 - includes()：返回布尔值，表示是否找到了参数字符串。
 - startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
 - endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 - repeat()返回一个新字符串，表示将原字符串重复n次。


 ## 数组

 - Array.from()用于将两类对象转为真正的数组;

    任何有length属性的对象，都可以通过Array.from方法转为数组。
    Array.from({ 0: "a", 1: "b", 2: "c", length: 3 });

- Array.of()方法用于将一组值，转换为数组。

- 数组实例的find()和findIndex()

    [1, 5, 10, 15].find(function(value, index, arr) {
        return value > 9;
    }) // 10

    //数组实例的findIndex()的用法与find()非常类似，返回第一个符合条件的数组元素的位置，如果所有元素都不符合条件，则返回-1。
    [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }) // 2

-  fill(),使用给定值，填充一个数组。fill()还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

-  entries()，对键值对的遍历,返回遍历器
-  keys(), 对键名的遍历
-  values()是对键值的遍历

    for (let index of ['a', 'b'].keys()) {
      console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
      console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
      console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
- includes 返回一个布尔值，表示某个数组是否包含给定的值, 第二个参数表示搜索的开始位置;

    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, NaN].includes(NaN); // true



