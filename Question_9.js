// Given an integer array, return all possible subsets (the power set).

let arr = [1,2];
let subset =[];
let result = [];
function powerSet(arr, subset, result){
    if(arr.length === 0){
        result.push(subset);
        return;
    }
    
}
powerSet(arr, subset, result);
console.log(result);
