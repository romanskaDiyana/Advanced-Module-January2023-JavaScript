//03. Sum Numbers
//Write a JS function that reads two numbers from input fields in a web page and puts their sum in another field when the user clicks on a button.

function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const result = Number(num1) + Number(num2);
    document.getElementById('sum').value = result;
}
