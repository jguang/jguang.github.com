## Part 1

fabric是个对canvas操作的封装体,其下有很多封装对象；

 ## fabric.Canvas

 ```
var canvas = new fabric.Canvas('c');
var rect = new fabric.Rect();

canvas.add(rect); // add object

canvas.item(0); // reference fabric.Rect added earlier (first object)
canvas.getObjects(); // get all objects on canvas (rect will be first and only)

canvas.remove(rect); // remove previously-added fabric.Rect

 ```

 ## 

 fabric.Canvas 默认创建的是可交互的，可通过StaticCanvas创建静态画布

 ```
 var staticCanvas = new fabric.StaticCanvas('c');

staticCanvas.add(
  new fabric.Rect({
    width: 10, height: 20,
    left: 100, top: 100,
    fill: 'yellow',
    angle: 30
  }));

 ```
 
 ## 基本形状

- fabric.Circle
- fabric.Ellipse
- fabric.Line
- fabric.Polygon
- fabric.Polyline
- fabric.Rect
- fabric.Triangle