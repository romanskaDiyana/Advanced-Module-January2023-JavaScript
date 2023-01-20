//01. Print an Array with a Given Delimiter
//The input comes as two parameters – an array of strings and a string.

function solve(array, delimiter) {
    console.log(array.join(delimiter));
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
//output:
//One-Two-Three-Four-Five