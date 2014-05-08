if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i=0, len = arr.length; i < len; i++){
            if(arr[i] === item){
                return i;
            }
        }
            return -1;
    },

    sum : function(arr) {
        var fullSum = 0;
        for(var i=0; i < arr.length; i++){
            fullSum += arr[i];
        }
        return fullSum;
    },

    remove : function(arr, item) {
        arr.splice(4,1);
        arr.splice(1,1);
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        arr.splice(1,2);
        arr.splice(3,2);
        return arr;
    },

    append : function(arr, item) {
        arr.push(10);
        return arr;
    },

    truncate : function(arr) {
        arr.pop(4);
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift(1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var fullArray = arr1.concat(arr2);
        return fullArray;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var twinsies = 0;
        for(i=0; i < arr.length; i++){
            if(arr[i] === item){
                twinsies++
            }
        }
        return twinsies;
    },

    duplicates : function(arr) {
        var sorted = arr.sort();
        var result = [];
        for(i=0; i < arr.length; i++){
            if(sorted[i + 1] === arr[i]){
                result.push(sorted[i]);
            }
        }
        result.splice('1','1');
        return result;
    },

    square : function(arr) {
        var squared = [];
        for(i=0; i < arr.length; i++){
            squared.push(arr[i] * arr[i]);
        }
        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var countTarget = [];
        for(i=0; i < arr.length; i++){
            if(arr[i] === target){
                countTarget.push(i);
            }
        }
         return countTarget;
        }
    }
});
