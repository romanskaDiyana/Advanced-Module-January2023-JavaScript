//01. City Record
//You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.

function solve(name, population, treasury) {
  let cityObj = {
    name,
    population,
    treasury,
  };

  return cityObj;
}

solve("Tortuga", 7000, 15000);
//output:
//{
// name: 'Tortuga',
// population: 7000,
// treasury: 15000
//}
