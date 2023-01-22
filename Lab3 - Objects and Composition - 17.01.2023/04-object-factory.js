//04. Object Factory
//Create acc function that can compose objects by copying functions from acc given library of functions.

function solve(library, orders) {
  return orders.reduce((acc, curr) => {
    const myObj = {};
    myObj.name = curr.template.name;
    curr.parts.forEach((x) => {
      myObj[x] = library[x];
    });
    acc.push(myObj);
    return acc;
  }, []);
}