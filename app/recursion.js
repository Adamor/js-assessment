if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var result = [];

      for(dirName in data){
        result.push(dirName);
      }
      return result;
    },

    permute: function(arr) {

    }
  };
});
