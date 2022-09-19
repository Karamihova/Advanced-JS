function solve(array){

    let biggest = Number.MIN_SAFE_INTEGER;
    let filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element > biggest){
            filteredArr.push(element);
            biggest = element;
        }
    }

    return filteredArr;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );