//07. Sorting Numbers
//Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

function solve(arr) {
  let resultArr = [];
  arr.sort((a, b) => a - b);

  while (arr.length !== 0) {
    resultArr.push(arr.shift());
    resultArr.push(arr.pop());
  }

  return resultArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//output:
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
