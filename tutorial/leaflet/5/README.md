# Popup

Used to open popups in certain places of the map. Use Map.openPopup to open popups while making sure that only one popup is open at one time (recommended for usability), or use Map.addLayer to open as many as you want.

> openPopup一次打开一个，Map.addLayer用于多个

Usage example

If you want to just bind a popup to marker click and then open it, it's really easy:

```
marker.bindPopup(popupContent).openPopup();

```

Path overlays like polylines also have a bindPopup method. Here's a more complicated way to open a popup on a map:

```
var popup = L.popup()
    .setLatLng(latlng)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

```

## Options

- closeButton
- autoClose
- closeOnEscapeKey: false
- className

## Methods
- getContent
- getElement
- 