function solve(array){

    let sum = 0;
    let inverseSum = 0;
    let str = '';
    for (let i = 0; i < array.length; i++) {

        let num = array[i];
        sum += num;
        inverseSum += (1/num);
        str += num.toString();
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}

solve([1, 2, 3]);