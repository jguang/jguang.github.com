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
## isWindow
检查对象是否是 window对象

    function isWindow(obj) {
        return obj && obj.window === obj;
    }

## isArrayLike
检查是否是类数组

      /**
       * @private
       * @param {*} obj
       * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
       *                   String ...)
       */
      function isArrayLike(obj) {
        if (obj == null || isWindow(obj)) {
          return false;
        }

        var length = obj.length;

        if (obj.nodeType === 1 && length) {
          return true;
        }

        return isString(obj) || isArray(obj) || length === 0 ||
               typeof length === 'number' && length > 0 && (length - 1) in obj;
      }


## bind
改变函数的作用域


    function concat(array1, array2, index) {
      return array1.concat(slice.call(array2, index));
    }

    function sliceArgs(args, startIndex) {
      return slice.call(args, startIndex || 0);
    }


    /* jshint -W101 */
    /**
     * @ngdoc function
     * @name angular.bind
     * @module ng
     * @kind function
     *
     * @description
     * Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for
     * `fn`). You can supply optional `args` that are prebound to the function. This feature is also
     * known as [partial application](http://en.wikipedia.org/wiki/Partial_application), as
     * distinguished from [function currying](http://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application).
     *
     * @param {Object} self Context which `fn` should be evaluated in.
     * @param {function()} fn Function to be bound.
     * @param {...*} args Optional arguments to be prebound to the `fn` function call.
     * @returns {function()} Function that wraps the `fn` with all the specified bindings.
     */
    /* jshint +W101 */
    function bind(self, fn) {
      var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
      if (isFunction(fn) && !(fn instanceof RegExp)) {
        return curryArgs.length
          ? function() {
              return arguments.length
                ? fn.apply(self, concat(curryArgs, arguments, 0))
                : fn.apply(self, curryArgs);
            }
          : function() {
              return arguments.length
                ? fn.apply(self, arguments)
                : fn.call(self);
            };
      } else {
        // in IE, native methods are not functions so they cannot be bound (note: they don't need to be)
        return fn;
      }
    }


