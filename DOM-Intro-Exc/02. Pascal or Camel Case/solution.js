function solve() {
  let textEl = document.getElementById('text');
  let text = textEl.value;
  let typeOfTextEl = document.getElementById('naming-convention');
  let namingConvention = typeOfTextEl.value;

  let result = '';
  let textArr = text.split(' ');

  if (namingConvention === 'Pascal Case' || namingConvention === 'Camel Case') {
    //"secOND eXamPLE", "Pascal Case" => SecondExample

    for (let i = 0; i < textArr.length; i++) {

      let word = textArr[i];

      for (let j = 0; j < word.length; j++) {
        let char = word[j];

        if (j === 0) {
          char = char.toUpperCase();
        } else {
          char = char.toLowerCase();
        }

        result += char;
      }
    }

    if(namingConvention === 'Camel Case'){
      let camelResult = '';
      for (let i = 0; i < result.length; i++) {
        let char = result[i];
        if(i === 0){
          char = char.toLowerCase();
        }

        camelResult += char;
      }

      result = camelResult;
    }
  } else {
    result = 'Error!';
  }

  let resultEl = document.getElementById('result');
  resultEl.textContent = result;
}