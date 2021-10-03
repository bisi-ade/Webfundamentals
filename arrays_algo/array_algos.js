// var sum = 0;
// for (var num = 1; num <= 5; num++){
    // sum = sum + num;
    // console.log(" Num: "+num+ ", Sum: "+sum);

    // console.log(`Num: ${num}, Sum: ${sum}`);
}

// Print each array value and the sum so far


function printSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        console.log(`Num ${arr[i]} Sum ${sum}`);
    }

    return sum;

}

printSum([6,3,5,1,2,4])


// Multiply each value in the array by its array position

function abc(arr) {

    var y = [];
    for (var i = 0; i < arr.length; i++) {
        y[i] = arr[i]*i;
    
        // console.log(y);

    }
    return y;
}
console.log(abc([6,3,5,1,2,4]));
