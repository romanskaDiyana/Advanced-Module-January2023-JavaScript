//08. Sort an Array by 2 Criteria
//Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

function solve(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(arr.join('\n'));
}

solve(["alpha", "beta", "gamma"]);
//output:
//beta
//alpha
//gamma
