# JSON.stringify和JSON.parse
2   
3   用来json和string互相转化，在数据交换中常用到；
4   
5   
6       JSON.stringify(value [, replacer] [, space])
7   
8   
9   - 主要说的是第二个参数为转换结果的函数或者数组
10  
11  
12  数组
13  
14  
15      var contact = new Object();
16      contact.firstname = "Jesper";
17      contact.surname = "Aaberg";
18      contact.phone = ["555-0100", "555-0120"];
19  
20      var memberfilter = new Array();
21      memberfilter[0] = "surname";
22      memberfilter[1] = "phone";
23      var jsonText = JSON.stringify(contact, memberfilter, "\t");
24      document.write(jsonText);
25      // Output: 
26      // { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }
27  
28  函数：
29  
30      var continents = new Array();
31      continents[0] = "Europe";
32      continents[1] = "Asia";
33      continents[2] = "Australia";
34      continents[3] = "Antarctica";
35      continents[4] = "North America";
36      continents[5] = "South America";
37      continents[6] = "Africa";
38  
39      var jsonText = JSON.stringify(continents, replaceToUpper);
40  
41      function replaceToUpper(key, value) {
42          return value.toString().toUpperCase();
43      }
44  
45      //Output:
46      // "EUROPE,ASIA,AUSTRALIA,ANTARCTICA,NORTH AMERICA,SOUTH AMERICA,AFRICA"
47  
48  
49  - 一个特殊用法把json里面的函数也格式化为json串
50  
51      var ss = {
52          "aa":"bbb",
53          "bb":function(){console.log("3333")}
54      }
55  
56  把上面对象字符串话其方法也一块传输过去;自然想到JSON.stringify;
57  
58  但stringify会过滤值为函数的key自然想到其第二个参数所以可以
59      
60      JSON.stringify(ss,function(key,val){
61          console.log(key,"===",val);
62          if(typeof val ==="function"){
63              return val.toString();
64          }else{
65              return val;
66          }
67      });
68  
69  输出结果：
70  
71       === Object {aa: "bbb", bb: function}
72      aa === bbb
73      bb === function (){console.log("3333")}
74      "{"aa":"bbb","bb":"function (){console.log(\"3333\")}"}"
75  
76  看结果知道调用函数的次数为对象原属性值个数+1;
77  
78  
79  对于数据传输之后如何解析可以用下面的
80  
81  
82      JSON.parse(text [, reviver])
83  
84  学习的主要是第二个参数
85  
86  官方例子
87  
88          var jsontext = '{ "hiredate": "2008-01-01T12:00:00Z", "birthdate": "2008-12-25T12:00:00Z" }';
89          var dates = JSON.parse(jsontext, dateReviver);
90          document.write(dates.birthdate.toUTCString());
91  
92          function dateReviver(key, value) {
93              var a;
94              if (typeof value === 'string') {
95                  a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
96                  if (a) {
97                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
98                                      +a[5], +a[6]));
99                  }
100             }
101             return value;
102         };
103 
104 反转上面的值：
105 
106 
107     var dddd = JSON.parse(dd,function(key,val){
108         console.log(key,"===",val);//也调用n+1次,最后key为“ ”；
109         if(val&&val.indexOf&&val.indexOf('function')>=0){
110              return new Function("return "+val)();
111         }else{
112             return val;
113         }
114 
115     });
116     
117 结果：
118 
119     aa === bbb VM3687:3
120     bb === function (){console.log("3333")} VM3687:3
121      === Object {aa: "bbb", bb: function}
122 
123     Object {aa: "bbb", bb: function}
124 
125 
126 
127 
128 ###参考资料
129 
130 http://msdn.microsoft.com/zh-cn/library/ie/cc836459(v=vs.94).aspx