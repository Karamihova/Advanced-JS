function solve(namingConvention){

    let textArr = ['keep', 'going'];
    let result = '';
    let finalResult = '';
    for (let i = 0; i < textArr.length; i++) {

        let word = textArr[i];
  
        for (let j = 0; j < word.length; j++) {
          let char = word[j];
          if(j === 0){
            char = char.toUpperCase();
          } else{
            char = char.toLowerCase();
          }
  
          result += char;
        }
    }

    

    if(namingConvention === 'Camel Case'){
        let lower = result[0];
        lower = lower.toLowerCase();
        

        for (let i = 0; i < result.length; i++) {
            let char = result[i];
            if(i === 0){
                char = char.toLowerCase();
            }
            
            finalResult += char;
        }
      }

      console.log(finalResult);
}

solve('Camel Case');