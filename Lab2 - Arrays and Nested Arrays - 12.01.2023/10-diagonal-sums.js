//10. Diagonal Sums
//A square matrix of numbers comes as an array of arrays, each array holding numbers. Write a function that finds the sum at the main and the secondary diagonals.

function solve(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(mainDiagonal,secondaryDiagonal);
}

solve([[20, 40],
[10, 60]]);
//output:80 50
