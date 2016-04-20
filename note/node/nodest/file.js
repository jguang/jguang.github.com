/**
 * Created by jianguang on 16/3/2.
 */


var domain = require('domain');
var fs = require('fs');

fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});

console.log(fs.createReadStream('message.txt'));

fs.open('message.txt', 'a', function(err,fd){
    if(err){
        throw err;
    }
    console.log('file open');
    fs.fstat(fd, function(err, stats){
        if(err){
            throw err;
        }
        console.log(stats);
        fs.close(fd , function(){
            console.log('file close');
        })
    })
});

console.log(fs.readdirSync('./'))

fs.watchFile('message.txt', (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
});


fs.watch('message.txt', (event, filename) => {
    console.log(`event is: ${event}`);
if (filename) {
    console.log(`filename provided: ${filename}`);
} else {
    console.log('filename not provided');
}
});
