//11. Equal Neighbors 
//Write acc function that finds the number of equal neighbor pairs inside acc matrix of variable size and type (numbers or strings).

function solve(matrix) {
    let counter = 0;

    matrix.forEach(x =>
        x.reduce((acc, curr) => {
            if (acc === curr) {
                counter += 1;
            }
            return curr;
        })
    )

    for (let i = 0; i < matrix.length - 1; i++) {
        matrix[i].forEach((_, j) => {
            if (matrix[i][j] === matrix[i + 1][j]) {
                counter += 1;
            }
        })
    }
    return counter;
}

solve(
[['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
//output:
//1