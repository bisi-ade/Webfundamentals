// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.

function fib(N) {
    if(N === 0) {
        return 0;
    }
    else if(N === 1) {
        return 1;
    }
    else {
        return fib(N-2) + fib(N-1);
    }
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(10));


// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
var sum = 0;
for (var i = 0; i <= num; i++) {
    sum = sum +i;
}
console.log(sum);
return sum;
}
sigma(5);
sigma(3);

// 2 Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(N) {
    var M = 1;
    for(var i = 1; i <= N; i++) {
        M = M*i;
    }
    console.log(M);
    return M;

}
factorial(4);
factorial(5);

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null

function nth2last (arr,y) {
    if (y > arr.length) {
        return"null";
    }
    else {
        return arr[arr.length -y]
    }
}
console.log(nth2last([5,2,3,6,4,9,7],3));
