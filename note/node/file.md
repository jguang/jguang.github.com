# File 系统

作为核心文件I/O引人require('fs')；模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

- fd: file descriptor,文件描述
- fs.readdir & fs.readdirSync: 返回的目录下的数组, 不包括[./，../]


> 表面上，用户通过文件名，打开文件。实际上，系统内部这个过程分成三步：首先，系统找到这个文件名对应的inode号码；其次，通过inode号码，获取inode信息；最后，根据inode信息，找到文件数据所在的block，读出数据。


- fs.open, fs.read, fs.write, fs.fstate, fs.ftruncate, fs.fchown fs.close
- fs.readFile, fs.writeFile, fs.state, fs.truncate, fs.chown, fs.unlink, fs.rmdir, fs.mkdir, fs.exists


## 参考
- http://www.cnblogs.com/accordion/p/5106364.html