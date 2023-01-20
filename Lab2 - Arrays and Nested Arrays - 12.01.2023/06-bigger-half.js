//06. Bigger Half
//You are given an array of numbers. Write a JS function that sorts the array in 
//ascending order and returns a new array, containing only the second half of the input.

function biggerHalf(array) {

    array.sort((a, b) => a - b);
    let startIndex = Math.floor(array.length / 2);
    const resultArray = [];
    
    //const resultArray = array.splice(startIndex, array.length);
    for (let i = startIndex; i < array.length; i++) {
        resultArray.push(array[i]);
    }
    
    return resultArray;
}

biggerHalf([4, 7, 2, 5]);
//output:
//[5, 7]