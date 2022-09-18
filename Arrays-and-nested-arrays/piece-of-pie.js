function solve(input, startPie, endPie){

    let startIndex = input.indexOf(startPie);
    let endIndex = input.indexOf(endPie);

    let newArr = input.slice(startIndex, endIndex + 1);

    return newArr;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);