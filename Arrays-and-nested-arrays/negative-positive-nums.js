function solve(input){
    let array = [];

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if(element < 0){
            array.unshift(element);
        } else{
            array.push(element);
        }
        
    }

    array.forEach(el => console.log(el));
}

solve([3, -2, 0, -1]);