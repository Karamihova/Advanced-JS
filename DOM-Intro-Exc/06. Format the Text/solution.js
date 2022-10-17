function solve() {
  let inputEl = document.getElementById('input').value;
  let outputDivEl = document.getElementById('output');

  let textArr = inputEl.split('.').filter(s => s !== '');

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    outputDivEl.appendChild(p);
  }
}