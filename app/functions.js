if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arg){
            return str + ", " + arg;
        };
    },

    makeClosures : function(arr, fn) {
      var myArray = [];

      var makeFn = function(val) {
        return function() { return fn(val); };
      };

      for (var i = 0, len = arr.length; i < len; i++) {
        myArray.push(makeFn(arr[i]));
      }

      return myArray;
    },

    partial : function(fn, str1, str2) {
        
    },

    useArguments : function() {
        
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
