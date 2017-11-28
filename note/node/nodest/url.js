/**
 * Created by mac on 2017/6/20.
 */


const url = require('url');

console.log(url.parse("http://www.baidu.com/aaa/aa?aa=aa#cc"));

const myURL = new url.Url('https://example.org/foo#bar');

const { URL } = require('url');

const myURL1 = new URL('/foo', 'https://example.org/');

console.log(myURL1);