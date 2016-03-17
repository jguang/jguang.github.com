
# process

process 是个全局模块，任何地方都可以访问， 它继承于 EventEmitter 类；

>全局对象：global, process, console

>全局函数：setTimeout, clearTimeout, setInterval, clearInterval, require, Buffer

>全局变量：__filename, __dirname

>伪全局变量：module, module.exports, exports

## uncaughtException事件

    process.on('exit', function (code) {
        // do *NOT* do this
        setTimeout(function () {
            console.log('This will not run');
        }, 0);
        console.log('About to exit with code:', code);
    });


    //process.on('uncaughtException', function(err) {
    //    console.log('Caught exception: ' + err);
    //});


    setTimeout(function() {
        console.log('This will still run.');
    }, 500);

    // Intentionally cause an exception, but don't catch it.
    nonexistentFunc();
    console.log('This will not run.');

只要给uncaughtException配置了回调，Node进程不会异常退出，但异常发生的上下文已经丢失，无法给出异常发生的详细信息。而且，异常可能导致Node不能正常进行内存回收，出现内存泄露。所以，当uncaughtException触发后，最好记录错误日志，然后结束Node进程。


## process.argv

一个包含命令行参数的数组。第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数

## process.execPath

开启当前进程的这个可执行文件的绝对路径。

## process.chdir(directory)

改变目录

## process.cwd()

返回当前进程目录

## process.env

进程执行环境变量

## process.version

NODE_VERSION, node 版本可以用来判断当前版本和 module 是否一致；

## process.memoryUsage()

进程的内存使用情况单位是bytes;

    {   rss: 4935680,
        heapTotal: 1826816,
        heapUsed: 650472
    }

## process.nextTick(callback)

下一次循环中调用 callback 回调函数,





## 参考

- [Node教程](http://javascript.ruanyifeng.com/nodejs/basic.html#toc11)

- [Node 出现 uncaughtException 之后的优雅退出方案](http://www.infoq.com/cn/articles/quit-scheme-of-node-uncaughtexception-emergence/)

- [Node.js 异步异常的处理与domain模块解析](https://cnodejs.org/topic/516b64596d38277306407936)

- [Node稳定性的研究心得](http://satans17.github.io/2014/05/04/node%E7%A8%B3%E5%AE%9A%E6%80%A7%E7%9A%84%E7%A0%94%E7%A9%B6%E5%BF%83%E5%BE%97/)

- [Node.js捕获异常](http://www.alloyteam.com/2013/12/node-js-series-exception-caught/)

