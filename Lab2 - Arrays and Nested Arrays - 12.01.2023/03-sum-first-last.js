//03. Sum First Last
//Write a function that calculates and returns the sum of the first and the last elements in an array.

function sum(arr){
    return Number(arr.pop()) + Number(arr.shift());
}

sum(['20', '30', '40']);
//output:
//60