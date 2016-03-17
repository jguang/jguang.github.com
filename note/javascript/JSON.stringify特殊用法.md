# JSON.stringify和JSON.parse

用来json和string互相转化，在数据交换中常用到；


    JSON.stringify(value [, replacer] [, space])


- 主要说的是第二个参数为转换结果的函数或者数组


数组


    var contact = new Object();
    contact.firstname = "Jesper";
    contact.surname = "Aaberg";
    contact.phone = ["555-0100", "555-0120"];

    var memberfilter = new Array();
    memberfilter[0] = "surname";
    memberfilter[1] = "phone";
    var jsonText = JSON.stringify(contact, memberfilter, "\t");
    document.write(jsonText);
    // Output: 
    // { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }

函数：

    var continents = new Array();
    continents[0] = "Europe";
    continents[1] = "Asia";
    continents[2] = "Australia";
    continents[3] = "Antarctica";
    continents[4] = "North America";
    continents[5] = "South America";
    continents[6] = "Africa";

    var jsonText = JSON.stringify(continents, replaceToUpper);

    function replaceToUpper(key, value) {
        return value.toString().toUpperCase();
    }

    //Output:
    // "EUROPE,ASIA,AUSTRALIA,ANTARCTICA,NORTH AMERICA,SOUTH AMERICA,AFRICA"


- 一个特殊用法把json里面的函数也格式化为json串

    var ss = {
        "aa":"bbb",
        "bb":function(){console.log("3333")}
    }

把上面对象字符串话其方法也一块传输过去;自然想到JSON.stringify;

但stringify会过滤值为函数的key自然想到其第二个参数所以可以
    
    JSON.stringify(ss,function(key,val){
        console.log(key,"===",val);
        if(typeof val ==="function"){
            return val.toString();
        }else{
            return val;
        }
    });

输出结果：

     === Object {aa: "bbb", bb: function}
    aa === bbb
    bb === function (){console.log("3333")}
    "{"aa":"bbb","bb":"function (){console.log(\"3333\")}"}"

看结果知道调用函数的次数为对象原属性值个数+1;


对于数据传输之后如何解析可以用下面的


    JSON.parse(text [, reviver])

学习的主要是第二个参数

官方例子

        var jsontext = '{ "hiredate": "2008-01-01T12:00:00Z", "birthdate": "2008-12-25T12:00:00Z" }';
        var dates = JSON.parse(jsontext, dateReviver);
        document.write(dates.birthdate.toUTCString());

        function dateReviver(key, value) {
            var a;
            if (typeof value === 'string') {
                a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                                    +a[5], +a[6]));
                }
            }
            return value;
        };

反转上面的值：


    var dddd = JSON.parse(dd,function(key,val){
        console.log(key,"===",val);//也调用n+1次,最后key为“ ”；
        if(val&&val.indexOf&&val.indexOf('function')>=0){
             return new Function("return "+val)();
        }else{
            return val;
        }

    });
    
结果：

    aa === bbb VM3687:3
    bb === function (){console.log("3333")} VM3687:3
     === Object {aa: "bbb", bb: function}

    Object {aa: "bbb", bb: function}




###参考资料

http://msdn.microsoft.com/zh-cn/library/ie/cc836459(v=vs.94).aspx