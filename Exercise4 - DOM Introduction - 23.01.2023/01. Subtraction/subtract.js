function subtract() {
  const firstInput = document.getElementById("firstNumber").value;
  const secondInput = document.getElementById("secondNumber").value;

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = Number(firstInput) - Number(secondInput);
}
