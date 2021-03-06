/**
 * Created by jianguang on 16/3/2.
 */


var domain = require('domain');
var fs = require('fs');
var path = require('path');
require('url')

// fs.appendFile('message.txt', 'data to append', (err) => {
    //if (err) throw err;
    //console.log('The "data to append" was appended to file!');
// });

console.log(fs.statSync('message.txt'));
console.log(fs.createReadStream('message.txt'));

var rS = fs.createReadStream('message.txt');
var wS = fs.createWriteStream('message-copy.txt');

rS.pipe(wS);


fs.open('message.txt', 'a', function(err,fd){
    if(err){
        throw err;
    }
    console.log("fd:" +  fd);
    //console.log('file open');
    //fs.fstat(fd, function(err, stats){
    //    if(err){
    //        throw err;
    //    }
    //    console.log(stats);
    //    fs.close(fd , function(){
    //        console.log('file close');
    //    })
    //})
});

fs.readdir('./', (erro, files) => {
    "use strict";
    files.forEach((file)=>{
        let filePath = path.resolve(__dirname, file);
        console.log(filePath);
        fs.stat(filePath, (erro, stats)=>{
            console.log(stats.isDirectory());
        })
    });
});

//fs.watchFile('message.txt', (curr, prev) => {
//    console.log(`the current mtime is: ${curr.mtime}`);
//    console.log(`the previous mtime was: ${prev.mtime}`);
//})


//fs.watch('message.txt', (event, filename) => {
//    console.log(`event is: ${event}`);
//    if (filename) {
//        console.log(`filename provided: ${filename}`);
//    } else {
//        console.log('filename not provided');
//    }
//})

//fs.writeFile('a.txt', "aaabbb", function (error) {
//    if(error) {
//        console.log(error);
//    }
//    fs.readFile('a.txt', function (e, d) {
//        console.log(d.toString());
//    })
//    fs.renameSync('a.txt', 'aa.txt');
//});


//fs.stat('aa.txt', function(e, s){
//    console.log(s.isFile(), s.isDirectory(), s.isSymbolicLink());
//});

//fs.mkdirSync('ab/bb');

console.log("existsSync", fs.existsSync('aa/bb'));

var fs = require('fs');

function readLines(input, func) {
    var remaining = '';

    input.on('data', function(data) {
        remaining += data;
        console.log(data.toString(), '=======');
        var index = remaining.indexOf('\n');
        var last  = 0;
        while (index > -1) {
            var line = remaining.substring(last, index);
            last = index + 1;
            func(line, index);
            index = remaining.indexOf('\n', last);
        }

        remaining = remaining.substring(last);
    });

    input.on('end', function() {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}
var line = 0;
function func(data, index) {
    console.log('Line ' + line++ + ':' + data);
}

var input = fs.createReadStream('../file.md');
readLines(input, func);