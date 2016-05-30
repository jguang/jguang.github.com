base 编程

## 变量

`varName=""` 等号两边不能有空格，变量中不能有标点, 变量名可以重复赋值, 可以用readonly varName来标识此是只读的不能够重复修改；

````
myUrl="http://see.xidian.edu.cn/cpp/linux/"
echo ${myUrl}
myUrl="http://see.xidian.edu.cn/cpp/shell/"
echo ${myUrl}

```

```
for skill in Ada Coffe Action Java
do
    echo "I am good at ${skill}Script"
done


```

- readonly 只读变量

```
myUrl="http://see.xidian.edu.cn/cpp/shell/"
readonly myUrl
myUrl="http://see.xidian.edu.cn/cpp/danpianji/"

```


- unset 删除变量

```
myUrl="http://see.xidian.edu.cn/cpp/u/xitong/"
unset myUrl
echo $myUrl
```
- 特殊变量

$0  当前脚本的文件名
$n  传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2。
$#  传递给脚本或函数的参数个数。
$*  传递给脚本或函数的所有参数。
$@  传递给脚本或函数的所有参数。被双引号(" ")包含时，与 $* 稍有不同，下面将会讲到。
$?  上个命令的退出状态，或函数的返回值。
$$  当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。

## 命令替换
