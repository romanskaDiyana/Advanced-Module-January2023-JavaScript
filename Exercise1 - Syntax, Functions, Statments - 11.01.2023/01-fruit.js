//01. Fruit 
//Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams,
//and another number for the price per kilogram.

function fruit(fruitType, weight, pricePerKg) {
    const toKg = weight / 1000;
    console.log(`I need $${(toKg * pricePerKg).toFixed(2)} to buy ${toKg.toFixed(2)} kilograms ${fruitType}.`);

}

fruit('orange', 2500, 1.80);
//output:
//I need $4.50 to buy 2.50 kilograms orange.