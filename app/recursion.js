if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var result = [];

      for(data in dirName){
        result.push(data);
      }
      return result;
    },

    permute: function(arr) {

    }
  };
});
