//07. Extract Parenthesis
//Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).

function extract(content) {
  const parenthesis = document.getElementById(content).textContent;
  const pattern = /\(([^)]+)\)/g;

  let result = [];

  let match = pattern.exec(parenthesis);
  while (match) {
    result.push(match[1]);
    match = pattern.exec(parenthesis);
  }
  return result.join("; ");
}
