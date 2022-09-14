function solve(a, b, c){
    let lengthSum = a.length + b.length + c.length;
    let averageLengthSum = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageLengthSum);
}

solve('chocolate', 'ice cream', 'cake');