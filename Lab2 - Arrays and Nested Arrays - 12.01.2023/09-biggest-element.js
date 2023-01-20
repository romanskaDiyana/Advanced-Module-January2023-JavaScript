//09. Biggest Element
//Write acc function that finds the biggest element inside acc matrix.

function biggestElement(matrix) {
 
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
            row => row.forEach(
                col => biggestNum = Math.max(biggestNum, col)));
    return biggestNum;
}
 
 
biggestElement([
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]
);

//output:
//33