//04. Rotate Array
//Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 

function solve(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4'], 2);
//output:
//3 4 1 2
