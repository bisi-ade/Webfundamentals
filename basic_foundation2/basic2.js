// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].


function bigsize(arr) {
    for (var i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
var y = [-3,4,5,-1];
console.log(bigsize(y));

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowhighvalue(arr) {
    var lowest = arr[0];
    var highest = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < lowest){
            lowest = arr[i];
        }
        if (arr[i] > highest){
            highest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}
var y = [-3,4,5,-1];
console.log(lowhighvalue(y));

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(arr) {

    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++) {
      
    if(arr[i] % 2 !==0) {
        return arr[i];
        }
    }
}
  
var y = [-3,4,5,-1];
console.log(printReturn(y));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {

    for (var i=0;i<arr.length;i++) {
      arr[i] = arr[i]*2;
    }
    return arr;
  }
  
  var y = [-3,4,5,-1];
  console.log(double(y));

//   Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr) {

    for (var i = 0; i < arr.length/2; i++) {
      
        var temp = arr[i];
     
        arr[i] =  arr[arr.length-1 - i]; 
     
        arr[arr.length-1 - i] = temp;
    }
  
    return arr;
  }
  
  var y = [-3,4,5,-1];
  console.log(reverseArray(y));