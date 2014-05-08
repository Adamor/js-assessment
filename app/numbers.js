if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {
        return parseInt(str, 10);
    },

    convertToBinary: function(num) {
        return num.toString(2);
    },

    multiply: function(a, b) {
        return (a * 10 + b * 10) / 10; 
    }
  };
});

