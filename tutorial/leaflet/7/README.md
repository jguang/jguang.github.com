# TileLayer

Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under Layer. Extends GridLayer.
> 用于加载和显示地图瓦片。 请注意，大多数切片服务器需要属性，您可以在“层”下设置属性。 扩展与GridLayer。

```
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);

```

## Creation

- L.tilelayer(<String> urlTemplate, <TileLayer options> options?)
  Instantiates a tile layer object given a URL template and optionally an options object.


### Options

- errorTileUrl: URL to the tile image to show in place of the tile that failed to load.
- zoomReverse: If set to true, the zoom number used in tile URLs will be reversed (maxZoom - zoom instead of zoom)
- detectRetina: If true and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
- updateWhenIdle: Load new tiles only when panning ends. true by default on mobile browsers, in order to avoid too many requests and keep smooth navigation. false otherwise in order to display new tiles during panning, since it is easy to pan outside the keepBuffer option in desktop browsers.
> 是否平移结束才更新

- updateWhenZooming: By default, a smooth zoom animation (during a touch zoom or a flyTo()) will update grid layers every integer zoom level. Setting this option to false will update the grid layer only when the smooth animation ends.

- maxNativeZoom: Maximum zoom number the tile source has available. If it is specified, the tiles on all zoom levels higher than maxNativeZoom will be loaded from maxNativeZoom level and auto-scaled.
  > 瓦片来源有的可用的最大缩放数。若被指定，所有缩放级别下高于maxNativeZoom的瓦片都将从maxNativeZoom级别载入并且自动调整大小。

- noWrap: Whether the layer is wrapped around the antimeridian. If true, the GridLayer will only be displayed once at low zoom levels. Has no effect when the map CRS doesn't wrap around. Can be used in combination with bounds to prevent requesting tiles outside the CRS limits.



### 参考资料

- http://www.szxxz.gov.cn/api/doc/reference.html#tilelayer-wms
- https://blog.csdn.net/qq_36213352/article/details/82976925