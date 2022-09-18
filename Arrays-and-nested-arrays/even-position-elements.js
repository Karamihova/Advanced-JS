function solve(input){
    let str = '';
    for (let i = 0; i < input.length; i += 2) {
        let element = input[i];
        str += element + ' ';
        
    }

    console.log(str);
}

solve(['20', '30', '40', '50', '60']);