if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      fn = "Yo, ";
      obj = "Rebecca!";
      return fn + obj;
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = 'What\'s up';
    },

    iterate : function(obj) {
    
  var ret = [];

      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          ret.push(prop + ': ' + obj[prop]);
        }
      }

      return ret;
    }
  };
});
