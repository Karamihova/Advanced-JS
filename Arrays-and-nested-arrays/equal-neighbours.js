function solve(matrix){

    let pairs = 0;
    for (let row = 0; row < matrix.length; row++) {
        
        let currArr = matrix[row];
        for (let col = 0; col < currArr.length; col++) {
            let currEl = matrix[row][col];

            //left col - 1
            if(isInBorders(row, col - 1, matrix)){
                if(currEl === matrix[row][col - 1]){
                    pairs++;
                }
            }
            //right col + 1
            if(isInBorders(row, col + 1, matrix)){
                if(currEl === matrix[row][col + 1]){
                    pairs++;
                }
            }
            //up row - 1
            if(isInBorders(row - 1, col, matrix)){
                if(currEl === matrix[row - 1][col]){
                    pairs++;
                }
            }
            //down row + 1
            if(isInBorders(row + 1, col, matrix)){
                if(currEl === matrix[row + 1][col]){
                    pairs++;
                }
            }
            
        }
        
    }

    console.log(pairs / 2);

    function isInBorders(row, col, matrix){
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]

);