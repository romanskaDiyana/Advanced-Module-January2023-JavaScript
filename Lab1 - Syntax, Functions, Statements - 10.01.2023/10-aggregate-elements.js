function aggregate(numbers) {

    let sumOfNumbers = [numbers.reduce((a, b) => a + b, 0)];
    let inverseSum = [numbers.reduce((a, b) => a + 1 / b, 0)];
    let concatNumbers = [numbers.join("")];

    console.log(`${sumOfNumbers}`);
    console.log(`${inverseSum}`);
    console.log(`${concatNumbers}`);

}