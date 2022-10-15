function sumTable() {
    let priceElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let pricesArr = Array.from(priceElements);
    pricesArr.pop();
    let sum = 0;
    for (const price of pricesArr) {
        sum += Number(price.textContent);
    }

    let sumEl = document.getElementById('sum');
    sumEl.textContent = sum;
}