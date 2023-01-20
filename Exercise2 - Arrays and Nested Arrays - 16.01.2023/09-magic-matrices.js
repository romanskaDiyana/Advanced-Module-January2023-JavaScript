//09. Magic Matrices
//Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.

function solve(matrix) {
  let sumOfRows = 0;
  let sumOfCols = 0;

  for (let i = 0; i < matrix.length; i++) {
    let currArray = matrix[i].join("");

    for (let j = 0; j < currArray.length; j++) {
      sumOfRows += Number(currArray[j]);
      sumOfCols += Number(currArray[0]);
    }
  }

  if (sumOfRows === sumOfCols) {
    console.log("true");
  } else {
    console.log("false");
  }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
//output:
//true
