function subtract() {
    let firstEl = document.getElementById('firstNumber');
    let secondEl = document.getElementById('secondNumber');

    let firstNum = Number(firstEl.value);
    let secondNum = Number(secondEl.value);

    let result = firstNum - secondNum;
    let resultEl = document.getElementById('result');
    resultEl.textContent = result;
}