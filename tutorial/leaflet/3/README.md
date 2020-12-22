# L.map

Instantiates a map object given the DOM ID of a <div> element and optionally an object literal with Map options.

> 实例化一个地图对象，通过dom的id或者dom对象，可选择附加对象设置参数；

```
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

```

## Creation

- `L.map(<String> id, <Map options> options?)	`
  Instantiates a map object given the DOM ID of a <div> element and optionally an object literal with Map options.

- `L.map(<HTMLElement> el, <Map options> options?)	`

  Instantiates a map object given an instance of a <div> HTML element and optionally an object literal with Map options.

## Options

- preferCanvas<Boolean>: 
  Whether Paths should be rendered on a Canvas renderer. By default, all Paths are rendered in a SVG renderer.

### Control options

- attributionControl<Boolean>: 
  Whether a attribution control is added to the map by default.
- zoomControl<Boolean>: 
  Whether a zoom control is added to the map by default.

### Interaction Options
- closePopupOnClick<Boolean>: 
- zoomSnap<Number>:
  Forces the map's zoom level to always be a multiple of this, particularly right after a fitBounds() or a pinch-zoom. By default, the zoom level snaps to the nearest integer; lower values (e.g. 0.5 or 0.1) allow for greater granularity. A value of 0 means the zoom level will not be snapped after fitBounds or a pinch-zoom.

- zoomDelta<Number>:
  Controls how much the map's zoom level will change after a zoomIn(), zoomOut(), pressing + or - on the keyboard, or using the zoom controls. Values smaller than 1 (e.g. 0.5) allow for greater granularity.

- trackResize<Boolean>: 
  Whether the map automatically handles browser window resize to update itself.

- boxZoom<Boolean>: 
  Whether the map can be zoomed to a rectangular area specified by dragging the mouse while pressing the shift key.
  > 是否支持 shift键+拖拽矩形 缩放放到此矩形；
- doubleClickZoom<Boolean>: 
  Whether the map can be zoomed in by double clicking on it and zoomed out by double clicking while holding shift. If passed 'center', double-click zoom will zoom to the center of the view regardless of where the mouse was.
### Map State Options
- crs<CRS>: 
  The Coordinate Reference System to use. Don't change this if you're not sure what it means.
- center<LatLng>:
- zoom<Number>:
- minZoom<Number>:
- maxZoom<Number>:
- layers<Layer[]>:
- maxBounds<LatLngBounds>:
  When this option is set, the map restricts the view to the given geographical bounds, bouncing the user back if the user tries to pan outside the view. To set the restriction dynamically, use setMaxBounds method.
- renderer<Renderer>:
  The default method for drawing vector layers on the map. L.SVG or L.Canvas by default depending on browser support
  > L.SVG or L.Canvas,默认

### Animation Options
- zoomAnimation<Boolean> :
- zoomAnimationThreshold<Number> :
  Won't animate zoom if the zoom difference exceeds this value.
  >如果缩放差异超过此值，则不会为缩放设置动画。
- fadeAnimation<Boolean> :
- markerZoomAnimation<Boolean> :
- transform3DLimit	<Boolean> :
  Defines the maximum size of a CSS translation transform. The default value should not be changed unless a web browser positions layers in the wrong place after doing a large panBy.
  > 定义CSS转换转换的最大大小。 除非Web浏览器在大浏览后将图层放置在错误的位置，否则不应更改默认值。

### Panning Inertia Options
- inertia<Boolean>:
  If enabled, panning of the map will have an inertia effect where the map builds momentum while dragging and continues moving in the same direction for some time. Feels especially nice on touch devices. Enabled by default unless running on old Android devices.
  > 动画惯性效果
- inertiaDeceleration<Number>:
  The rate with which the inertial movement slows down, in pixels/second².
  > 动画惯性减慢的速度
- inertiaMaxSpeed<Number>:
  Max speed of the inertial movement, in pixels/second.
- easeLinearity<Number>:
- worldCopyJump<Boolean>:
  With this option enabled, the map tracks when you pan to another "copy" of the world and seamlessly jumps to the original one so that all overlays like markers and vector layers are still visible.
- maxBoundsViscosity<Number>:
  If maxBounds is set, this option will control how solid the bounds are when dragging the map around. The default value of 0.0 allows the user to drag outside the bounds at normal speed, higher values will slow down map dragging outside bounds, and 1.0 makes the bounds fully solid, preventing the user from dragging outside the bounds.


### Keyboard Navigation Options

- keyboard<Boolean> :
- keyboardPanDelta<Number>:80
  Amount of pixels to pan when pressing an arrow key.
  按下箭头键时要平移的像素数量。
### Mousewheel option
- scrollWheelZoom<Boolean|'center'>:
  > 决定是否可以使用鼠标滚轮缩放map。如果传入“center“参数，地图会缩放至视图中心，不管鼠标在什么地方。
- wheelDebounceTime<Number>:40
  限定鼠标滚轮持续的频率。默认情况下不可以每40ms使用一次滚轮。
- wheelPxPerZoomLevel<Number>:60
  完全缩放一次代表多少像素。较小值使滚滚轮缩放更快。

## 事件（Event）


baselayerchange: 通过layer control改变基础层时触发
overlayadd: 通过layer control选中覆盖层时触发
overlayremove: 通过layer control取消选中覆盖层时触发
layeradd: 一个新的层添加到map时触发
layerremove:	一些层从map中移除时触发
zoomlevelschange: 添加或者删除一个层时map上的缩放水平变化时触发
resize:	map改变大小时触发
unload: 使用remove方法销毁map时触发
viewreset	: map需要重绘内容时触发（通常在map缩放或者加载时触发）。尤其对创建传统的覆盖层有用。
load: map初始化时触发（map的中心和缩放第一次设置时）
zoomstart:	map将要缩放时触发（例如，缩放开始前）
movestart:	map视图将要变化时触发（例如，用户开始拖拽map）
zoom: map上任何缩放水平变化重复发生时触发，包括pan和fly动画。
move:	map上任何移动重复发生时触发，包括pan和fly动画。
zoomend: 任何动画之后，地图发生变化都会触发
moveend:	当map中心停止变化时触发（用户停止拖拽map）
popupopen:	在map上打开弹出框时触发
popupclose:	map上的弹出框关闭时触发
autopanstart:	打开弹出框时map开始autopanning时触发
tooltipopen:	在map上打开tooltip时触发
tooltipclose:	关闭map上tooltip时触发
click:	用户在map上单击（或者触摸）时触发。
dblclick:	用户在map上双击（或者两次触摸）时触发。
mousedown	:	用户在map上按下鼠标按键时触发。
mouseup	:	用户在map上松开鼠标按键时触发。
mouseover	:	鼠标进入map时触发。
mouseout	:	鼠标离开map时触发。
mousemove	:	鼠标经过map时触发。
contextmenu	:	用户在map上按下鼠标右键时触发，如果监听器在监听该事件，可以阻止浏览器显示默认情景菜单。
keypress	:	map是焦点时，用户从键盘上按下一个键时触发。
preclick	:	鼠标在map上单击之前触发（在已经存在的单击事件执行之前，如果您想要在鼠标单击时进行一些处理时会有用）。
zoomanim:	缩放时每个帧都会触发。
locationerror	:	地理定位失败时触发（使用locate方法）。
locationfound	:	地理定位成功时触发（使用locate方法）。

Methods for modifying map state

- setView(<LatLng> center, <Number> zoom, <Zoom/pan options> options?)	
- setZoom(<Number> zoom, <Zoom/pan options> options?)
- zoomIn(<Number> delta?, <Zoom options> options?)
- zoomOut(<Number> delta?, <Zoom options> options?)
- setZoomAround(<LatLng> latlng, <Number> zoom, <Zoom options> options)
- panInside(<LatLng> latlng, <options> options?)

Conversion Methods

- layerPointToLatLng: Given a pixel coordinate relative to the origin pixel, returns the corresponding geographical coordinate (for the current zoom level).
- getZoomScale(<Number> toZoom, <Number> fromZoom)	Number	
Returns the scale factor to be applied to a map transition from zoom level fromZoom to toZoom. Used internally to help with zoom animations.

- getScaleZoom(<Number> scale, <Number> fromZoom)	Number	
Returns the zoom level that the map would end up at, if it is at fromZoom level and everything is scaled by a factor of scale. Inverse of getZoomScale.

- project(<LatLng> latlng, <Number> zoom)	Point	
Projects a geographical coordinate LatLng according to the projection of the map's CRS, then scales it according to zoom and the CRS's Transformation. The result is pixel coordinate relative to the CRS origin.

- unproject(<Point> point, <Number> zoom)	LatLng	
Inverse of project.

- layerPointToLatLng(<Point> point)	LatLng	
Given a pixel coordinate relative to the origin pixel, returns the corresponding geographical coordinate (for the current zoom level).

- latLngToLayerPoint(<LatLng> latlng)	Point	
Given a geographical coordinate, returns the corresponding pixel coordinate relative to the origin pixel.

- wrapLatLng(<LatLng> latlng)	LatLng	
Returns a LatLng where lat and lng has been wrapped according to the map's CRS's wrapLat and wrapLng properties, if they are outside the CRS's bounds. By default this means longitude is wrapped around the dateline so its value is between -180 and +180 degrees.

- wrapLatLngBounds(<LatLngBounds> bounds)	LatLngBounds	
Returns a LatLngBounds with the same size as the given one, ensuring that its center is within the CRS's bounds. By default this means the center longitude is wrapped around the dateline so its value is between -180 and +180 degrees, and the majority of the bounds overlaps the CRS's bounds.

- distance(<LatLng> latlng1, <LatLng> latlng2)	Number	
Returns the distance between two geographical coordinates according to the map's CRS. By default this measures distance in meters.

- containerPointToLayerPoint(<Point> point)	Point	
Given a pixel coordinate relative to the map container, returns the corresponding pixel coordinate relative to the origin pixel.

- layerPointToContainerPoint(<Point> point)	Point	
Given a pixel coordinate relative to the origin pixel, returns the corresponding pixel coordinate relative to the map container.

- containerPointToLatLng(<Point> point)	LatLng	
Given a pixel coordinate relative to the map container, returns the corresponding geographical coordinate (for the current zoom level).

- latLngToContainerPoint(<LatLng> latlng)	Point	
Given a geographical coordinate, returns the corresponding pixel coordinate relative to the map container.

- mouseEventToContainerPoint(<MouseEvent> ev)	Point	
Given a MouseEvent object, returns the pixel coordinate relative to the map container where the event took place.

- mouseEventToLayerPoint(<MouseEvent> ev)	Point	
Given a MouseEvent object, returns the pixel coordinate relative to the origin pixel where the event took place.

- mouseEventToLatLng(<MouseEvent> ev)	LatLng	
Given a MouseEvent object, returns geographical coordinate where the event took place.
