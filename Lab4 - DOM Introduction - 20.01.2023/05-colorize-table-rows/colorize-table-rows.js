//05. Colorize Table Rows
//Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.

function colorize() {
  let rows = document.querySelectorAll("table tr");

  let index = 0;
  for (const row of rows) {
    index++;
    if (index % 2 === 0) row.style.background = "teal";
  }
}
