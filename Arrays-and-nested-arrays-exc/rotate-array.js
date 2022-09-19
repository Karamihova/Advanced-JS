function solve(array, n){

    for (let i = 0; i < n; i++) {
        let el = array.pop();
        array.unshift(el);
        
    }

    console.log(array.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);