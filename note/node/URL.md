# URL 模块

处理URL 对象操作`require('url')`;


- url.format(urlObj); 把 url 描述对象格式化为字符串



- url.parse(url); 解析成 url 描述对象


    - url.parse('http://www.baid.com:8080/aa/bb?aa=cc#aa')
       
        ```
        { 
            protocol: 'http:',
          slashes: true,
          auth: null,
          host: 'www.baid.com:8080',
          port: '8080',
          hostname: 'www.baid.com',
          hash: '#aa',
          search: '?aa=cc',
          query: 'aa=cc',
          pathname: '/aa/bb',
          path: '/aa/bb?aa=cc',
          href: 'http://www.baid.com:8080/aa/bb?aa=cc#aa' 
        }
        ```  
          
    
    - url.parse('http://www.baid.com:8080/aa/bb?aa=cc#aa',true)
    
    ```
        { protocol: 'http:',
          slashes: true,
          auth: null,
          host: 'www.baid.com:8080',
          port: '8080',
          hostname: 'www.baid.com',
          hash: '#aa',
          search: '?aa=cc',
          query: { aa: 'cc' },\\调用querystring
          pathname: '/aa/bb',
          path: '/aa/bb?aa=cc',
          href: 'http://www.baid.com:8080/aa/bb?aa=cc#aa' }
    ```
    
- url.resolve(from, to); 重置from 到 to 后的路径

    
### 参考

- http://wiki.jikexueyuan.com/project/nodejs/url.html