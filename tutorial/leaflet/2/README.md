# Leaflet Quick Start Guide

This step-by-step guide will quickly get you started on Leaflet basics, including setting up a Leaflet map, working with markers, polylines and popups, and dealing with events.


> 本分步指南将帮助您快速入门Leaflet基础知识，包括设置Leaflet地图，使用标记，折线和弹出窗口以及处理事件。


Preparing your page
Before writing any code for the map, you need to do the following preparation steps on your page:

> 准备页面
  在为地图编写任何代码之前，您需要在页面上执行以下准备步骤：

 Include Leaflet CSS file in the head section of your document:

```
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
```

Include Leaflet JavaScript file after Leaflet’s CSS:
```
<!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
```
Put a div element with a certain id where you want your map to be:
```
 <div id="mapid"></div>
```
Make sure the map container has a defined height, for example by setting it in CSS:
```
#mapid { height: 180px; }
```

Let’s create a map of the center of London with pretty Mapbox Streets tiles. First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:

> 让我们用漂亮的Mapbox Streets瓦片创建北京市中心的地图。 首先，我们将初始化地图并将其视图设置为我们选择的地理坐标和缩放级别：

```
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
```

By default (as we didn’t pass any options when creating the map instance), all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls.

> 入为传递设置参数，默认情况下所有鼠标交互和触摸都有效，它也默认增加了缩放和属性控件

Note that setView call also returns the map object — most Leaflet methods act like this when they don’t return an explicit value, which allows convenient jQuery-like method chaining.

> 请注意，setView调用还会返回地图对象-大多数Leaflet方法在未返回显式值时都会像这样，这允许方便的类似jQuery的方法链接。


Next we’ll add a tile layer to add to our map, in this case it’s a Mapbox Streets tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text and the maximum zoom level of the layer. In this example we’ll use the mapbox/streets-v11 tiles from Mapbox’s Static Tiles API (in order to use tiles from Mapbox, you must also request an access token). Because this API returns 512x512 tiles by default (instead of 256x256), we will also have to explicitly specify this and offset our zoom by a value of -1.

> 接下来，我们将添加一个瓦片层到地图中，在本例中为Mapbox Streets瓦片。 创建瓦片层通常涉及设置瓦片图像的URL模板，属性文本和该图层的最大缩放级别。 在此示例中，我们将使用来自Mapbox的静态图块API的mapbox / streets-v11图块（要使用来自Mapbox的图块，您还必须请求访问令牌）。 由于此API默认返回512x512瓦片（而不是256x256），因此我们还必须明确指定此大小，并将缩放值偏移-1。

```
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
```

Make sure all the code is called after the div and leaflet.js inclusion. That’s it! You have a working Leaflet map now.

It’s worth noting that Leaflet is provider-agnostic, meaning that it doesn’t enforce a particular choice of providers for tiles. You can try replacing mapbox/streets-v11 with mapbox/satellite-v9, and see what happens. Also, Leaflet doesn’t even contain a single provider-specific line of code, so you’re free to use other providers if you need to (we’d suggest Mapbox though, it looks beautiful).

Whenever using anything based on OpenStreetMap, an attribution is obligatory as per the copyright notice. Most other tile providers (such as Mapbox, Stamen or Thunderforest) require an attribution as well. Make sure to give credit where credit is due.

> 确保在div和leaflet.js包含之后调用了所有代码。 而已！ 您现在有一个可以使用的传单地图。

值得注意的是，Leaflet是与提供程序无关的，这意味着它并没有对磁贴的提供程序进行特定选择。 您可以尝试将mapbox / streets-v11替换为mapbox / satellite-v9，然后看看会发生什么。 此外，Leaflet甚至都没有包含一个特定于提供程序的代码行，因此，您可以根据需要自由使用其他提供程序（尽管我们建议Mapbox看起来很漂亮）。

每当使用基于OpenStreetMap的内容时，根据版权声明，必须注明出处。 大多数其他磁贴提供者（例如Mapbox，Stamen或Thunderforest）也需要注明出处。 确保在应收信贷的地方给予信贷。

##Markers, circles and polygons

Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let’s add a marker:

var marker = L.marker([51.5, -0.09]).addTo(mymap);
Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:
> 除了图块图层，您还可以轻松地向地图添加其他内容，包括标记，折线，多边形，圆形和弹出窗口。 让我们添加一个标记：
`var marker = L.marker([51.5，-0.09]).addTo（mymap）;`
添加圆是相同的（除了以米为单位指定半径作为第二个参数），但是您可以通过在创建对象时将选项作为最后一个参数传递来控制圆的外观：



```
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

```
Adding a polygon is as easy:
```
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
```

## Working with popups

Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:
> 气泡弹层通常被使用展示地图上特定点的信息，leaflet很简单就可以拥有:

```
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
```

Try clicking on our objects. The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.



You can also use popups as layers (when you need something more than attaching a popup to an object):
> 你也可以把popups作为个图层：

```
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
```    
Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.

## Dealing with events
Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function. It allows you to react to user interaction:


```
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
```
Each object has its own set of events — see documentation for details. The first argument of the listener function is an event object — it contains useful information about the event that happened. For example, map click event object (e in the example above) has latlng property which is a location at which the click occurred.

Let’s improve our example by using a popup instead of an alert:
```
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

```
Try clicking on the map and you will see the coordinates in a popup. View the full example →

Now you’ve learned Leaflet basics and can start building map apps straight away! Don’t forget to take a look at the detailed documentation or other examples.

