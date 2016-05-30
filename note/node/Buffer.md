# Buffer


Nodejs 为存放二进制缓冲数据创建的数据流类型 `new Buffer(length)`

    new Buffer(length);
    new Buffer('xxxxxx');
    new Buffer([,,,,,]);

当为数组时，其值为asc码对应值， new Buffer([97,97,97]).toString() === 'aaa';


- bufferObj.copy, bufferObj.slice,
- Buffer.from, Buffer.alloc, Buffer.isBuffer
