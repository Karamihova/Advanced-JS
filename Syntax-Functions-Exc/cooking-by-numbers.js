function solve(num, op1, op2, op3, op4, op5){

    let operations = [op1, op2, op3, op4, op5];
    for (let i = 0; i < operations.length; i++) {
        
        let operation = operations[i];
        switch (operation) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 20 / 100;
                break;
            default:
                break;
        }

        console.log(num);
        
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');