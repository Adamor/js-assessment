// Create a native javascript function that adds a class to an element.

// Three Ways:

// As pure Native JS:

document.getElementById("myelement").className = " myclass"; 
// pitfalls Doesn't add to any number of nodes like Jquery
// Overwrites existing class definition


// As a replacement for JQuery addClass:

function addClass(node, class) {
  if (!node.length) node = [node]; 
  for (var n = 0, m = node.length; n < m; n++) {
    if ((" " + node[n].className + " ").indexOf(" "+class+" ") >= 0) {
      node.className += " " + class;
    }
  }
}
// apply myclass to all nodes
addClass(document.getElementById("myelement"), "myclass");   


// As a modern browser:

document.getElementById("myelement").classList.add("myclass");
// Not supported  by IE9 natively but there are polyfill scrims available 

// Create a function that compares 2 objects. (deepEqual) 

myObj1 = {data: "Mydate", data2: "MyName"}
myObj2 = {data: "Mydate", data2: "MyName"}

function compare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(compare(myObj1, myObj2));

function compareKeys(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

// How to check if a form is empty?

function validateForm(){
 var x  = document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  return false;
  }
}

// Replace all subarrays in an original array which match a given array, replace using another array. For example, we have:
// original array: "aaabbc"
// findarray: "bb"
// replaceArray: "ee"
// After running your function, it should be "aaaeec";

// Write an algorithm that returns T or F in finding a substring in a string

var s = "Awesome String";
function(str, sub){
  if(str.indexOf(sub) > -1){
    console.log("This substring is here");
  }
}


// Implement a function to determine if a DOM element is the descendant of another one or not.

var checkParent = function(parent, element){
if (document.getElementById("element").parentNode === parent){
console.log("Yep, that's my parent");
}
else{
return false;
}
}

// Implement an object class that inherited from a previous object.

function Construct(param1, param2, param3){
 this.param1 = paramValue;
 this.param2 = paramValue;
 this.param3= paramValue;
};

var newObject = new Construct(param1, param2, param3);

// Powers 

var myPow = function(a,b){
    var thisPow = Math.pow(a, b);
    alert(thisPow);
}

myPow(4,3);
// Problem 1: Write a method that takes in some String and outputs true if it is a number, false if not

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(isNumber("1043"));
