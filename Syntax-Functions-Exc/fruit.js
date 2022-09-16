function solve(fruit, grams, pricePerKg){

    let kilos = grams / 1000;
    let sum = kilos * pricePerKg;
    console.log(`I need $${sum.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);