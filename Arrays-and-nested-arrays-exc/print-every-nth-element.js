function solve(array, n){

    let newArr = [];
    for (let i = 0; i < array.length; i += n) {
        let currEl = array[i];
        newArr.push(currEl);
    }

    return newArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);