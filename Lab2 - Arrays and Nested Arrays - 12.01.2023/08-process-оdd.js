//08. You are given an array of numbers. 
//Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.

const solve = arr => 
arr.filter((x, i) => i % 2 == 1)
.map(x => x * 2)
.reverse()
.join(' ');

solve([10, 15, 20, 25]);
//output:
//50 30
