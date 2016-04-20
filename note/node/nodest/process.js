/**
 * Created by jianguang on 16/3/2.
 */


var domain = require('domain');
var fs = require('fs');


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

process.on('SIGINT', function() {
    console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
});

// Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
console.log('This will not run.');

process.on('uncaughtException', function(err) {
    console.error('Error caught in uncaughtException event:', err);
});

var d = domain.create();
//
d.on('error', function(err) {
    console.error('Error caught by domain:', err);
});

d.run(function() {
    //nonexitefunc();
    process.nextTick(function() {
        // nonexitefunc();
        fs.readFile('non_existent.js', function(err, str) {
            if(err) throw err;
            else console.log(str);
        });
    });
});