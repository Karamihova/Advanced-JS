function solve(input){

    input.sort((a, b) => {return a - b});
    let elementCount = Math.ceil(input.length / 2);
    let biggestHalf = [];
    for (let i = 0; i < elementCount; i++) {
        
        let element = input.pop();
        biggestHalf.push(element);
        
    }

    biggestHalf.reverse();
    return biggestHalf;
}

solve([4, 7, 2, 5]);