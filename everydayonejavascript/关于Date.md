#关于Date

##作为函数
Date是标准的内置构造器,可作为函数调用返回的是当前时间的字符串,参数忽略;

    Date()
    "Sat Oct 18 2014 23:06:49 GMT+0800 (中国标准时间)"
    Date('2014-12-12')
    "Sat Oct 18 2014 23:06:49 GMT+0800 (中国标准时间)"
    typeof Date();
    string

##两个方法
Date有几个特殊的静态方法

Date.paree

    parse 函数对它的参数应用 ToString 操作并将结果字符串解释为一个日期和时间；返回一个数字值，是对应这个日期时间的 UTC 时间值。字符串可解释为本地时间，UTC 时间，或某个其他时区的时间，这取决于字符串里的内容。此函数首先尝试根据日期时间字符串格式（15.9.1.15）里的规则来解析字符串的格式。如果字符串不符合这个格式此函数可回退，用任意实现定义的试探方式或日期格式。无法识别的字符串或日期时间包含非法元素值，将导致 Date.parse 返回 NaN。

Date.UTC

     当用少于两个的参数调用 UTC 函数时，它的行为是依赖于实现的。当用二到七个参数调用 UTC 函数，它从 year, month 和 ( 可选的 ) date, hours, minutes, seconds, ms 计算出日期时间。采用以下步骤：

    令 y 为 ToNumber(year).
    令 m 为 ToNumber(month).
    如果提供了 date ，则令 dt 为 ToNumber(date); 否则令 dt 为 1.
    如果提供了 hours ，则令 h 为 ToNumber(hours); 否则令 h 为 0.
    如果提供了 minutes ，则令 min 为 ToNumber(minutes); 否则令 min 为 0.
    如果提供了 seconds ，则令 s 为 ToNumber(seconds); 否则令 s 为 0.
    如果提供了 ms ，则令 milli 为 ToNumber(ms); 否则令 milli 为 0.
    如果 y 不是 NaN 且 0 ≤ ToInteger(y) ≤ 99, 则令 yr 为 1900+ToInteger(y); 否则令 yr 为 y.
    返回 TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))).

Date.now

    now 函数返回一个数字值，它表示调用 now 时的 UTC 日期时间的时间值。

##Date对象

Date作为构造器创建Date对象：

1. 参数用逗号隔开

        new Date (year, month [, date [, hours [, minutes [, seconds [, ms ] ] ] ] ] )

        令 y 为 ToNumber(year).
        令 m 为 ToNumber(month).
        如果提供了 date ，则令 dt 为 ToNumber(date); 否则令 dt 为 1.
        如果提供了 hours ，则令 h 为 ToNumber(hours); 否则令 h 为 0.
        如果提供了 minutes ，则令 min 为 ToNumber(minutes); 否则令 min 为 0.
        如果提供了 seconds ，则令 s 为 ToNumber(seconds); 否则令 s 为 0.
        如果提供了 ms ，则令 milli 为 ToNumber(ms); 否则令 milli 为 0.
        如果 y 不是 NaN 且 0 ≤ ToInteger(y) ≤ 99, 则令 yr 为 1900+ToInteger(y); 否则令 yr 为 y.
        令 finalDate 为 MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli)).
        设定新构造对象的 [[PrimitiveValue]] 内部属性为 TimeClip(UTC(finalDate)).

2. 参数长度为一

        new Date (value)

        令 v 为 ToPrimitive(value).
        如果 Type(v) 是 String, 则
        用与 parse 方法 (15.9.4.2) 完全相同的方式将 v 解析为一个日期时间；令 V 为这个日期时间的时间值。
        否则 , 令 V 为 ToNumber(v).
        设定新构造对象的 [[PrimitiveValue]] 内部属性为 TimeClip(V)，并返回这个值。

3. get方法；
getDay,getMonth从0开始计数


        Date.prototype.getTime()：返回实例对象距离1970年1月1日00:00:00对应的毫秒数，等同于valueOf方法。
        Date.prototype.getDate()：返回实例对象对应每个月的几号（从1开始）。
        Date.prototype.getDay()：返回星期，星期日为0，星期一为1，以此类推。
        Date.prototype.getFullYear()：返回四位的年份。
        Date.prototype.getMonth()：返回月份（0表示1月，11表示12月）。
        Date.prototype.getHours()：返回小时（0-23）。
        Date.prototype.getMilliseconds()：返回毫秒（0-999）。
        Date.prototype.getMinutes()：返回分钟（0-59）。
        Date.prototype.getSeconds()：返回秒（0-59）。
        Date.prototype.getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素。



参考：
http://lzw.me/pages/ecmascript/#462
https://github.com/ic4/schedule/wiki/C4%E5%88%86%E4%BA%AB%E4%BC%9A
http://dygraphs.com/date-formats.html


