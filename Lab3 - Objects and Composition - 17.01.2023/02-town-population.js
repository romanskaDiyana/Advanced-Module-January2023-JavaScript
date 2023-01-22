//02. Town Population
//You have been tasked to create a registry for different towns and their population.

function solve(input) {
  const result = {};

  for (const line of input) {
    const [name, population] = line.split(" <-> ");

    if (name in result == false) result[name] = 0;

    result[name] += Number(population);
  }

  console.log(
    Object.entries(result)
      .map(([name, population]) => `${name} : ${population}`)
      .join("\n")
  );
}

solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
//output:
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
