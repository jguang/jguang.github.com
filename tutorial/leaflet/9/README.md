# Path

An abstract class that contains options and constants shared between vector overlays (Polygon, Polyline, Circle). Do not use it directly. Extends Layer.

> 扩展与Layer，是个共享类

## Polyline

```
// create a red polyline from an array of LatLng points
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

```

## Rectangle
A class for drawing rectangle overlays on a map. Extends Polygon.


```
var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
// zoom the map to the rectangle bounds
map.fitBounds(bounds);

```

> 注意 rectangle的setLatLngs 无效使其变为多边形

# Circle
A class for drawing circle overlays on a map. Extends CircleMarker. It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).

> Circle继承与CircleMarker，CircleMarker继承有path

```
L.circle([50.5, 30.5], {radius: 200}).addTo(map);

```

