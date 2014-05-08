if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      setTimeOut(function(){
      var numbers = 0;
      for(i=start; i <= end; i++){
        numbers++
      }
       return numbers;
       console.log(numbers);
    }, 1000);
    }
  };
});