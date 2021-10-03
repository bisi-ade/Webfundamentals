// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false.

function parensValid(str){
    var arr = [];
    for(var i=0; i<str.length; i++){
        switch(str[i]) {
        case "(":
            arr.push(str[i]);   
            break;
        case ")":
            if (arr[arr.length-1] === "("){
                arr.pop();
            } else {
                return false;
            }
            break;
        default:
            continue;
        }
    }
    return true;
}
console.log(`parensValid("y(3(p)p(3)r)s")`);
console.log(parensValid("y(3(p)p(3)r)s"));
console.log(`parensValid("n)0(t(0)k")`);
console.log(parensValid("n)0(t(0)k"));