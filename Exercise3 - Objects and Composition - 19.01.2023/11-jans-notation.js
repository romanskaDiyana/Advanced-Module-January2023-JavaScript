//11. Jan's Notation *
//Write a program that parses a series of instructions written in postfix notation and executes them (postfix means the operator is written after the operands).

function solve(arr) {
  const operands = [];
  const operations = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (typeof number === "number") {
      operands.push(number);
    } else {
      if (operands.length < 2) {
        return "Error: not enough operands!";
      }
      operands.push(operations[number](operands.pop(), operands.pop()));
    }
  }
  if (operands.length != 1) {
    return "Error: too many operands!";
  }

  return operands[0];
}

solve([3, 4, "+"]);

//output:
//7
