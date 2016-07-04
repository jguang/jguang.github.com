#DOM布局相关

###getBoundingClientRect

返回元素相对于视窗的矩形{top,left,right,bottom}

    var X= this.getBoundingClientRect().left + document.documentElement.scrollLeft;
    var Y =this.getBoundingClientRect().top + document.documentElement.scrollTop;

###getClientRects

返回区域内的矩形集合，包括TextRectangle；







##参考
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects

- http://www.cnblogs.com/purplefox2008/archive/2010/09/06/1818873.html

- http://www.css88.com/archives/4187
