//03. City Taxes
//This task is an extension of Problem 1, you may use your solution from that task as a base.


function cityTaxes(name, population, treasury) {
  let cityObj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
        cityObj.treasury += cityObj.taxRate * cityObj.population;
    },
    applyGrowth(percentage) {
        cityObj.population += Math.floor(cityObj.population * percentage / 100);
    },
    applyRecession(percentage) {
        cityObj.treasury -= Math.ceil(cityObj.treasury * percentage / 100);
    }
    
  };

  return cityObj;
}