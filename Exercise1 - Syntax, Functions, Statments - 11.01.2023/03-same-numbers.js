//03. Same Numbers
//Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.

function sameNumber(number) {
    let array = String(number).split('').map(x => Number(x));
    let isSame = array.filter(x => x !== array[0]).length ? false : true;
    let sumOfNumbers = array.reduce((acc, num) => acc + num);

    console.log(isSame);
    console.log(sumOfNumbers);
}


sameNumber(2222222);
//output:
//true
//14