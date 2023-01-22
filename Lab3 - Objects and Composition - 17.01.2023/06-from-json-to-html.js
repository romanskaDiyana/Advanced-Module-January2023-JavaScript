//06. From JSON to HTML Table
//You’re tasked with creating an HTML table of students and their scores.

function solve(dataAsJason) {
  const data = JSON.parse(dataAsJason);
  const escapeChar = (ch) =>
    `${ch}`
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  const makeRow = (tag, data) =>
    `<tr>${data.map((x) => `<${tag}>${escapeChar(x)}</${tag}>`).join("")}</tr>`;

  return `<table>
${makeRow("th", Object.keys(data[0]))}
${data.map((x) => makeRow("td", Object.values(x))).join("\n")}
</table>`;
}

solve(
`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

//output:
//<table>
//<tr><th>Name</th><th>Score</th></tr>
//<tr><td>Stamat</td><td>5.5</td></tr>
//<tr><td>Rumen</td><td>6</td></tr>
//</table>
