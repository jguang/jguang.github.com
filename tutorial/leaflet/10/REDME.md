# LayerGroup

Used to group several layers and handle them as one. If you add it to the map, any layers added or removed from the group will be added/removed on the map as well. Extends Layer.

> 使其层为一组当成一组处理；

# featureGroup

Extended LayerGroup that makes it easier to do the same thing to all its member layers:

bindPopup binds a popup to all of the layers at once (likewise with bindTooltip)
Events are propagated to the FeatureGroup, so if the group has an event handler, it will handle events from any of the layers. This includes mouse events and custom events.
Has layeradd and layerremove events

> 扩展 LayerGroup，使其更容易对其所有成员层执行相同操作：
> bindPopup 一次将弹出窗口绑定到所有图层（同样使用 bindTooltip）
> 事件会传播到 FeatureGroup，因此，如果该组具有事件处理程序，它将处理来自任何图层的事件。 这包括鼠标事件和自定义事件。
> 具有 layeradd 和 layerremove 事件

```
  L.featureGroup([marker1, marker2, polyline])

    .bindPopup('Hello world!')
    .on('click', function() { alert('Clicked on a member of the group!'); })
    .addTo(map);
```

# 参考资料

- 自定义坐标系 https://blog.csdn.net/aliasone/article/details/80355184
- https://blog.csdn.net/An1090239782/article/details/100572140
- https://blog.csdn.net/qq_36213352/article/details/82321244
- https://ejuke.github.io/Leaflet.Canvas-Markers/examples/index.html
- https://kael.top/2019/11/18/leaflet-canvas-marker/
- https://github.com/Leaflet/Leaflet.heat/blob/gh-pages/src/HeatLayer.js
- https://www.npmjs.com/package/leaflet-plugin-trackplayback
- https://github.com/iDerekLi/Leaflet.CustomLayer#readme
- https://www.npmjs.com/package/leaflet-canvas-layer
- https://www.npmjs.com/package/leafletjs-canvas-overlay