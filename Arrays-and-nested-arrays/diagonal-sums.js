function solve(matrix){

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        
        mainDiagonalSum += Number(matrix[row][row]);
        
    }

    let n = 1;
    for (let row = 0; row < matrix.length; row++) {
        
        let currArr = matrix[row];
        secondaryDiagonalSum += Number(matrix[row][currArr.length - n]);
        n++;
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );