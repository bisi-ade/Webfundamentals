// // Is Palindrome

// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" 
// could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) 
// the letters are the same from front and back.

// Create a function that returns a boolean 
// whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: 
// if given "Dud" or "oho!", return false.

function is_Palindrome(str) {
    if (!str.length) return false;
    else {
        var middle = Math.floor(str.length / 2);
        for (var i = 0; i < middle; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

console.log("isPalindrome('Able was i')", is_Palindrome("ere i saw Elba"))
console.log("isPalindrome('racecar')", is_Palindrome("racecar"))
