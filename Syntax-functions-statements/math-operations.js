function solve(a, b, operator){

    let result = 0;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
             break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
        default:
            break;
    }

    console.log(result);
}

solve(5, 2, '**');