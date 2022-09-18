function solve(matrix){

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        
        let rowArr = matrix[row];
        for (let col = 0; col < rowArr.length; col++) {
            const element = matrix[row][col];
            if(element > biggest){
                biggest = element;
            }
        }
        
    }

    console.log(biggest);
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );