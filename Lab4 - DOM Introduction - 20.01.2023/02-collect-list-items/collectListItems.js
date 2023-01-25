//02. Collect List Items
//Write a JS function that scans a given HTML list and appends all collected list items’ text to a textarea on the same page when the user clicks on a button.

function extractText() {
  const list = document.getElementById("items");
  const items = Array.from(list.children);

  const result = items.map((li) => li.textContent).join("\n");

  const output = document.getElementById("result");
  output.value = result;
}
