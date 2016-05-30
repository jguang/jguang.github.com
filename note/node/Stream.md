# Stream


`流` 可以说计算机传输计算的过程的各个环节是用`流`串起来的; 他继承语 Event，用事件来处理各个环节的内容；



    >Readable streams have two "modes": a flowing mode and a paused mode. When in flowing mode, 
    data is read from the underlying system and provided to your program as fast as possible. In paused mode, 
    you must explicitly call stream.read() to get chunks of data out. Streams start out in paused mode.


### pipe的源代码
    
```    
    function Stream() {
      EE.call(this);
    }
    
    Stream.prototype.pipe = function(dest, options) {
      var source = this;
    
      function ondata(chunk) {
        if (dest.writable) {
          if (false === dest.write(chunk) && source.pause) {
            source.pause();
          }
        }
      }
    
      source.on('data', ondata);
    
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
    
      dest.on('drain', ondrain);
    
      // If the 'end' option is not supplied, dest.end() will be called when
      // source gets the 'end' or 'close' events.  Only dest.end() once.
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on('end', onend);
        source.on('close', onclose);
      }
    
      var didOnEnd = false;
      function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
    
        dest.end();
      }
    
    
      function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
    
        if (util.isFunction(dest.destroy)) dest.destroy();
      }
    
      // don't leave dangling pipes when there are errors.
      function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, 'error') === 0) {
          throw er; // Unhandled stream error in pipe.
        }
      }
    
      source.on('error', onerror);
      dest.on('error', onerror);
    
      // remove all the event listeners that were added.
      function cleanup() {
        source.removeListener('data', ondata);
        dest.removeListener('drain', ondrain);
    
        source.removeListener('end', onend);
        source.removeListener('close', onclose);
    
        source.removeListener('error', onerror);
        dest.removeListener('error', onerror);
    
        source.removeListener('end', cleanup);
        source.removeListener('close', cleanup);
    
        dest.removeListener('close', cleanup);
      }
    
      source.on('end', cleanup);
      source.on('close', cleanup);
    
      dest.on('close', cleanup);
    
      dest.emit('pipe', source);
    
      // Allow for unix-like usage: A.pipe(B).pipe(C)
      return dest;
    };
```
    
### 优秀库
- https://www.npmjs.com/package/split
- https://www.npmjs.com/package/through

### 参考

- https://segmentfault.com/a/1190000000519006
- http://my.oschina.net/sundq/blog/189505
- http://my.oschina.net/sundq/blog/192276
- https://github.com/substack/stream-handbook