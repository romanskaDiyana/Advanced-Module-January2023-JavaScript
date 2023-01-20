//02. Last K Numbers Sequence
//You are given two integers n and k. Write acc JS function that generates and return the following sequence.

function solve(n, k) {
    const array = [1];
    for (let i = 1; i < n; i++) {
        array.push(array.slice(-k).reduce((acc, curr) => acc + curr, 0));
    }
    return array;
}

solve(6, 3);
//output:
//[1, 1, 2, 4, 7, 13]