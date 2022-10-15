function calc() {
    firstNumElement = document.getElementById('num1').value;
    secondNumElement = document.getElementById('num2').value;

    let num1 = Number(firstNumElement);
    let num2 = Number(secondNumElement);
    let sum = num1 + num2;

    let sumElement = document.getElementById('sum');
    sumElement.value = sum;
}
