// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

let str = "({[]}})";
let arr = [];
let open = ['(', '{', '['];
let close = [')', '}', ']'];
let valid = true;
for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
        arr.push(str[i]);
        } 
    else if (close.includes(str[i])) {
        if (arr.length === 0) {
            valid = false;
            break;
        }
        let last = arr.pop();
        if (last === '(' && str[i] !== ')') {
            valid = false;
            break;
        }
        if (last === '{' && str[i] !== '}') {
            valid = false;
            break;
        }
        if (last === '[' && str[i] !== ']') {
            valid = false;
            break;
        }
    }
}
console.log(valid);