//06. Sum Table
//Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".

function sumTable() {
  let table = document.querySelectorAll("table tr");
  let sum = 0;

  for (let i = 1; i < table.length; i++) {
    let columns = table[i].children;
    let currency = columns[columns.length - 1].textContent;
    sum += Number(currency);
  }

  document.getElementById("sum").textContent = sum;
}
