// Write a function to generate the first n numbers in the Fibonacci sequence.

let n = 2;

function generateFibonacciNum(n){
    let fibNum = [0,1];
    for(let i = 2; i <= n; i++){
        fibNum.push (fibNum[i-1] + fibNum[i-2]);
        }
        return fibNum;
}

console.log(generateFibonacciNum(n));

