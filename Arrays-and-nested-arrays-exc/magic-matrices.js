function solve(matrix){
    let sums = [];
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currArr = matrix[row];
        for (let col = 0; col < currArr.length; col++) {
            const element = matrix[row][col];
            sum += element;
        }

        sums.push(sum);
        sum = 0;
        
    }

    for (let col = 0; col < matrix.length; col++) {
        
        for (let row = 0; row < matrix.length; row++) {
            const element = matrix[row][col];
            sum += element;
        }

        sums.push(sum);
        sum = 0;
        
    }

    let areEqual = true;
    for (let i = 0; i < sums.length; i++) {

        let el = sums[i];
        if(el !== sums[0]){
            areEqual = false;
            break;
        }
        
    }

    console.log(areEqual);

}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );