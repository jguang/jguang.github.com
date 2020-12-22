# GridLayer

用于处理 HTML 元素的平铺网格的通用类。 这是所有图块层的基类，它将替换 TileLayer.Canvas。 可以扩展 GridLayer 以创建 HTML 元素（如<canvas>，<img>或<div>）的平铺网格。 GridLayer 将为您处理这些 DOM 元素的创建和动画处理。

## Synchronous usage

To create a custom layer, extend GridLayer and implement the createTile() method, which will be passed a Point object with the x, y, and z (zoom level) coordinates to draw your tile.

```
var CanvasLayer = L.GridLayer.extend({
createTile: function(coords){
// create a <canvas> element for drawing
var tile = L.DomUtil.create('canvas', 'leaflet-tile');
// setup tile width and height according to the options
var size = this.getTileSize();
tile.width = size.x;
tile.height = size.y;
// get a canvas context and draw something on it using coords.x, coords.y and coords.z
var ctx = tile.getContext('2d');
// return the tile so it can be rendered on screen
return tile;
}
});
```


# 参考
- https://www.giserdqy.com/secdev/leaflet/18959/
- https://www.npmjs.com/package/leaflet-customlayer