//01. Calorie Object
//Write a function that composes an object by given properties. The input comes as an array of strings.

function solve(arr) {
  return arr.reduce((acc, curr, index) => {
    if (index % 2 === 0) acc[curr] = Number(arr[index + 1]);
    return acc;
  }, {});

  //   let myObject = {};

  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 === 0) myObject[arr[i]] = Number(arr[i + 1]);
  //   }

  //   return myObject;
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
//output:{ Yoghurt: 48, Rise: 138, Apple: 52 }
