function solve(num){

    let str = num.toString();
    let isSame = true;

    for (let i = 0; i < str.length - 1; i++) {
        
        let el = str[i];
        let nextEl = str[i + 1];
        if(el !== nextEl){
            isSame = false;
            break;
        }
    }

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let currNum = Number(str[i]);
        sum += currNum;
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222);