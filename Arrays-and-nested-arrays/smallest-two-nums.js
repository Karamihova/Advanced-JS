function solve(input){
 
    let firstSmallest = Math.min(...input);
    let indexOfSmallest = input.indexOf(firstSmallest);
    input.splice(indexOfSmallest, 1);
    let secondSmallest = Math.min(...input);

    console.log(`${firstSmallest} ${secondSmallest}`);
}

solve([30, 15, 50, 5]);