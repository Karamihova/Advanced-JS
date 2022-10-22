function solve(input){
 let n = Number(input);
 let sum = 0;
 let product = 0;
 let number = '';
 let isOver = false;

 for (let a = 1; a <= 9; a++) {

    if(isOver){
        break;
    }

    for (let b = 9; b >= a; b--) {

        if(isOver){
            break;
        }
        
        for (let c = 0; c <= 9; c++) {

            if(isOver){
                break;
            }

            for (let d = 9; d >= c; d--) {
                sum = a + b + c + d;
                product = a * b * c * d;
                
                if(sum === product && (n % 10 === 5)){
                    number = `${a}${b}${c}${d}`;
                    isOver = true;
                    break;
                }

                if(Math.floor(product / sum) === 3 && (n % 3 === 0)){
                    number = `${d}${c}${b}${a}`;
                    isOver = true;
                    break;
                }
            }
            
        }
        
    }
    
 }

 if(number === ''){
    console.log("Nothing found");
 } else{
    console.log(number);
 }
}

solve(["123"]);