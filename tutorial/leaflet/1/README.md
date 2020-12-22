# HOME

Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 38 KB of JS, it has all the mapping features most developers ever need.

>Leaflet是领先的开源JavaScript库，用于移动友好的交互式地图。 它仅重约38 KB的JS，具有大多数开发人员所需的所有映射功能。

Leaflet is designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to.

>Leaflet 的设计考虑了简单性，性能和可用性。 它可以在所有主要的PC桌面和移动平台上高效运行，可以通过许多插件进行扩展，并具有美观，易于使用和文档完善的API，以及简单易读的源代码，这无疑是一件乐事。

Here we create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup:

> 这里个在div标签中创建个地图，添加我们选择的图块，添加一个mark带有popup文字弹层：

```js
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
```


