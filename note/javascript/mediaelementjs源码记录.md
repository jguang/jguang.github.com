# mediaelementjs源码记录

参考: http://mediaelementjs.com/


## 插件检测

用到`window.navigator.plugins` `window.navigator.mimeTypes` `window.ActiveXObject`


```
    detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

        var version = [0,0,0],
            description,
            i,
            ax;

        // Firefox, Webkit, Opera
        if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
            description = this.nav.plugins[pluginName].description;
            if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
                version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
                for (i=0; i<version.length; i++) {
                    version[i] = parseInt(version[i].match(/\d+/), 10);
                }
            }
        // Internet Explorer / ActiveX
        } else if (typeof(window.ActiveXObject) != 'undefined') {
            try {
                ax = new ActiveXObject(activeX);
                if (ax) {
                    version = axDetect(ax);
                }
            }
            catch (e) { }
        }
        return version;
    }

```
window.navigator.mimeTypes是个特殊的类型，参考http://stackoverflow.com/questions/13934287/navigator-mimetypes-structure


