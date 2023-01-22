//06. Store Catalogue
//You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order.

function solve(arr) {
  let catalogue = {};

  for (const line of arr) {
    let [product, price] = line.split(" : ");
    let firstLetter = product[0];
    if (!catalogue.hasOwnProperty(firstLetter)) {
      catalogue[firstLetter] = {};
    }
    catalogue[firstLetter][product] = price;
  }

  let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (const key of sorted) {
    console.log(key);
    let sortedProduct = Object.keys(catalogue[key]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProduct) {
      console.log(`  ${product}: ${catalogue[key][product]}`);
    }
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

//output:
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
