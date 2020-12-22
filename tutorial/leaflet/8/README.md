# ImageOverlay
Used to load and display a single image over specific bounds of the map. Extends Layer.
> ImageOverlay 继承与Layer


```
var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

```
## Options
- errorOverlayUrl: URL to the overlay image to show in place of the overlay that failed to load.
- className: A custom class name to assign to the image. Empty by default.


## Event

- load
- error

# VideoOverlay
Used to load and display a video player over specific bounds of the map. Extends ImageOverlay. A video overlay uses the <video> HTML5 element.

# SVGOverlay
Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends ImageOverlay. An SVG overlay uses the <svg> element.


# 参考资料

-  https://blog.csdn.net/u014269043/article/details/38927995
-  https://blog.csdn.net/aliasone/article/details/80355184
-  https://www.jianshu.com/p/13d588fad058