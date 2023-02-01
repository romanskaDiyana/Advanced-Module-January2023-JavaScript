function solve() {
  const firstOptElement = document.createElement("option");
  const secondOptElement = document.createElement("option");

  firstOptElement.value = "binary";
  firstOptElement.innerHTML = "Binary";

  secondOptElement.value = "hexadecimal";
  secondOptElement.innerHTML = "HexaDecimal";

  const menuToElement = document.getElementById("selectMenuTo");
  menuToElement.appendChild(firstOptElement);
  menuToElement.appendChild(secondOptElement);

  const button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", () => {
    const numberInput = document.getElementById("input");

    const outputResult = document.getElementById("result");
    if (menuToElement.value === "binary") {
      outputResult.value = Number(numberInput.value).toString(2);
    } else if (menuToElement.value === "hexadecimal")
      outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
  });
}
