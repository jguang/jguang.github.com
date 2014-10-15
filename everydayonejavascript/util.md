#util

##isType

    function isType( o, type ){
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

