// find if permutation of string includes palindrome

const isPalindrome = s => {
    let countArr = new Array(128).fill(0);

    // for (let i = 0; i < 128; i++) {
    //     countArr[i] = 0;
    // }

    for (let j = 0; j < s.length; j++) {
        if (s[j] != ' ') {
            let index = s.charCodeAt(j);
            console.log(index);
            countArr[index]++;
        }
    }

    let uniqueEncountered = false;

    for (let k = 0; k < 128; k++) {
        if (countArr[k] % 2 == 1) {
            if (uniqueEncountered == true) {
                return false;
            } else {
                uniqueEncountered = true;
            }
        }
    }

    return true;
}

let s = ""; // true
let s1 = "aba"; // true
let s2 = "ab ba"; // true
let s3 = "abc ccba"; // true
let s4 = "abcc cbap"; // false

console.log(isPalindrome(s));
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
console.log(isPalindrome(s4));
