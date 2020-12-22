# Marker

L.Marker is used to display clickable/draggable icons on the map. Extends Layer.

> 地图拖拽和点击的marker图标，扩展与Layer;

```
L.marker([50.5, 30.5]).addTo(map);

```

## Creation

- L.marker(<LatLng> latlng, <Marker options> options?)
  Instantiates a Marker object given a geographical point and optionally an options object.

## Options

- pane: 增加到的pane
- autoPan: Whether to pan the map when dragging this marker near its edge or not.
  > 是否移动地图当拖拽到容器边沿的时候；
- autoPanPadding: Distance (in pixels to the left/right and to the top/bottom) of the map edge to start panning the map.
  > 自动移动的边距,像素级别
- autoPanSpeed: Number of pixels the map should pan by.
  > 自动移动速度
- pane ：Map pane where the markers icon will be added. Map pane where the markers shadow will be added.
  > 增加到的pane

## Events

- move：Fired when the marker is moved via setLatLng or by dragging. Old and new coordinates are included in event arguments as oldLatLng, latlng.
- dragstart:
- drag:
- dragend:
  > drag的oldLatLng为开始拖动时的经纬度,
  
## Methods

- getLatLng()	Returns the current geographical position of the marker.


