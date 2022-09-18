function solve(n, k){

    let sequence = [];
    sequence.length = n;
    sequence[0] = 1;

    for (let i = 1; i < sequence.length; i++) {
        
        let sumPrevious = 0;
        for (let j = 1; j <= k; j++) {
            let previousIndex = i - j;
            if(previousIndex < 0){
                break;
            }
            
            sumPrevious += sequence[previousIndex];
        }

        sequence[i] = sumPrevious;
        
    }

    return sequence;
   
}

solve(6, 3);