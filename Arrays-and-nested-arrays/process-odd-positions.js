function solve(input){

    let oddPositionElements = [];
    for (let i = 1; i < input.length; i += 2) {
       let currEl = input[i];
        oddPositionElements.push(currEl);
    }

    let doubledElements = oddPositionElements.map(x => x *= 2);
    doubledElements.reverse();

    return doubledElements;
}

solve([10, 15, 20, 25]);