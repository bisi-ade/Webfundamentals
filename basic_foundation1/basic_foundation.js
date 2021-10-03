

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function abc() {
    var num = [];
    for (var i = 1; i <= 255; i++){
        num.push (i);

    }
    return num;
    
    
}

console.log(abc());


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function abc () {
    var sum = 0;
    for( i =0; i <= 1000; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(abc());


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function abc () {
    var sum = 0;
    for( i =0; i <= 5000; i++) {
        if(i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array.

function abc(arr) {
    var max_num = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (max_num < arr[i]) {
            max_num = arr[i]
        }
    }
    return max_num;
}
console.log(abc([-3,3,5,7]));


