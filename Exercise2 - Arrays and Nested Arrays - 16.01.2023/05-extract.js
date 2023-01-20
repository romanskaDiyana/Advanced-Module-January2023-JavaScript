//05. Extract Increasing Subset from Array
//Write a function that extracts only those numbers that form a non-decreasing subset.

function solve(numbers) {
    let biggestNum = numbers.shift();
    const finalResult = [biggestNum];

    for (const number of numbers) {
        if (number >= biggestNum) {
            biggestNum = number;
            finalResult.push(biggestNum);
        }
    }
    return finalResult;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//output:
//[1, 3, 8, 10, 12, 24]
