function sumFromNtoM(n, m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);
    let sumOfNumbers = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        sumOfNumbers += i;
    }

    console.log(sumOfNumbers);
}


