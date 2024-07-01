// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

let arr = [4,2,7,8,3];
let target = 10;

function sum (arr,target){
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        let diff = target - num;
        if (diff in obj){
            return [obj[diff],i];
        }
        obj[num] = i;
    }
}
console.log(sum(arr,target));