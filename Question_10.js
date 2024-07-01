// Write a function to check if a given string is a palindrome.

let str = "nayan";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str === rev) {
    console.log("palindrome");
} 
else {
    console.log("not palindrome");
}


