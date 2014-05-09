if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;

      function countDown(){
        console.log(start++);

        if(start <= end){
          timeout = setTimeout(countDown, 100);
        }
      }
      countDown();

      return {
        cancel : function(){
          timeout && clearTimeout(timeout);
        }
      };
    }
  };
});