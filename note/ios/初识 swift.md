# 初识 swift


## 常量和变量

```
    let maximumNumberOfLoginAttempts = 10
    var currentLoginAttempt = 0
    var x = 0.0, y = 0.0, z = 0.0 // 逗号隔开声明多个变量；
    var welcomeMessage: String // 指定类型
    var red, green, blue: Double; // 多个变量一起指定
    var intvar = 12;
    var doublevar = 12.22
    // var idntvar = Double(intvar) + doublevar;
    var idntvar = Double(intvar) + doublevar; // 只有同类型变量才能相加；
    // 整数和浮点数都可以添加额外的零并且包含下划线，并不会影响字面量
    let paddedDouble = 000123.456
    let oneMillion = 1_000_000
    let justOverOneMillion = 1_000_000.000_000_1
```

## 类型别名

```
typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound 现在是 0

```


## 集合类型

- Arrays、Sets和Dictionaries中存储的数据值类型必须明确;

```
var someInts = [Int]() // 声明个整数的空数组
var threeDoubles = [Double](count: 3, repeatedValue:0.0) // 声明个长度为3，默认值为2.5的空数组
var anotherThreeDoubles = [Double](count: 3, repeatedValue: 2.5) // 声明个长度为3的空数组，且默认值为2.5
// anotherThreeDoubles 被推断为 [Double]，等价于 [2.5, 2.5, 2.5]

var sixDoubles = threeDoubles + anotherThreeDoubles // 数组可以相加使其合并成个新数组
// sixDoubles 被推断为 [Double]，等价于 [0.0, 0.0, 0.0, 2.5, 2.5, 2.5]
var shoppingList: [String] = ["Eggs", "Milk"]

```

## 结构体

```
struct Aaaa{
    var width:Int;
    var height:Int;
}

```

- 如果创建了一个结构体的实例并将其赋值给一个常量，则无法修改该实例的任何属性，即使有属性被声明为变量也不行：

- 属于引用类型的类（class）则不一样。把一个引用类型的实例赋给一个常量后，仍然可以修改该实例的变量属性。

