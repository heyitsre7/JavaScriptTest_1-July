// Given a string, find the length of the longest substring without repeating characters.


let str = "abcba";

function substring(str) {
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let Index = str.indexOf(str[i], start);
    if (Index !== i) {
      start = Index + 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
}

console.log(substring(str));