#util

##isType

    function isType( o, type ){
        // ({}).toStrig.call()
        return Object.prototype.toString.call(o) === '[object ' + type + ']';
    }

##toPascal

    function toPascal(str) {
        return str && (str.charAt(0).toUpperCase() + str.replace(/-([a-z])/g, function(s) {return s.toUpperCase();}));
    };

##toCamel

    function toCamel(str){
        return str && (str.replace(/-([a-z])/g,function(s){return s.toUpperCase();}))
    }


##offset

    function getOffset( dom ){
        var offsetLeft = dom.offsetLeft;
        var offsetTop = dom.offsetTop;
        var offsetParent = dom.offsetParset;
        while(offsetParent){
            offsetLeft += offsetParent.offsetLeft;
            offsetTop +=offsetParent.offsetTop;
            offsetParent = offsetParent.offsetParent;
        }
        return {top:offsetTop,left:offsetLeft}
    }

##angular minError

    function minErr(module, ErrorConstructor) {
        ErrorConstructor = ErrorConstructor || Error;
        return function() {
        var code = arguments[0],
          prefix = '[' + (module ? module + ':' : '') + code + '] ',
          template = arguments[1],
          templateArgs = arguments,

          message, i;

        message = prefix + template.replace(/\{\d+\}/g, function(match) {
          var index = +match.slice(1, -1), arg;

          if (index + 2 < templateArgs.length) {
            return toDebugString(templateArgs[index + 2]);
          }
          return match;
        });

        message = message + '\nhttp://errors.angularjs.org/1.3.15/' +
          (module ? module + '/' : '') + code;
        for (i = 2; i < arguments.length; i++) {
          message = message + (i == 2 ? '?' : '&') + 'p' + (i - 2) + '=' +
            encodeURIComponent(toDebugString(arguments[i]));
        }
        return new ErrorConstructor(message);
        };
        }
