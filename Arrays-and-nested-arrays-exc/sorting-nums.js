function solve(array){

    array.sort((a, b) => {return a - b});
    let sortedArray = [];
    sortedArray.length = array.length;
    for (let i = 0; i < sortedArray.length - 1; i += 2) {
        let smallest = array.shift();
        let biggest = array.pop();

        sortedArray[i] = smallest;
        sortedArray[i + 1] = biggest;
        
    }

    return sortedArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);