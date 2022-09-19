function solve(array){
    array.sort((a, b) => a.localeCompare(b));
    let n = 1;
    array.forEach(element => {
        console.log(`${n}.${element}`);
        n++;
    });
}

solve(["John", "Bob", "Christina", "Ema"]);