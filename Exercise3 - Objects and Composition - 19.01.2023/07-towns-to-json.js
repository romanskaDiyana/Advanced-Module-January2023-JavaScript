//07. Towns to JSON
//You're tasked to create and print a JSON from a text table.

function solve(arr) {
  const towns = [];
  for (let i = 1; i < arr.length; i++) {
    const tokens = arr[i].split(/\s*\|s*/g);
    const town = tokens[1].trim();
    const latitude = Number(tokens[2]).toFixed(2);
    const longitude = Number(tokens[3]).toFixed(2);

    const currObj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };

    towns.push(currObj);
  }

  console.log(JSON.stringify(towns));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
//output:
// [
//   { Town: "Sofia", Latitude: 42.7, Longitude: 23.32 },
//   { Town: "Beijing", Latitude: 39.91, Longitude: 116.36 },
// ];
