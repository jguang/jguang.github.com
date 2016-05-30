//buffer.js


// var bufferObj = new Buffer(10);

var bufferObjA = new Buffer('aaa');
var bufferObj = new Buffer([97,97,97]);

var  bufferObjAB = Buffer.alloc(3, 'a');

//var bufferObj = new Buffer(26);
//
//for (var i = 0 ; i < 26 ; i++) {
//    bufferObj[i] = i + 97;
//}

//console.log(bufferObj.equals(bufferObjA));
console.log(bufferObj.equals(bufferObjAB));


bufferObj.fill('bbb');

bufferObj.write('ccc');


console.log(bufferObj, typeof bufferObj, bufferObj.toString(), bufferObj.toJSON());


var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());