function solve(a){

    let type = typeof(a);
    if( type === 'number'){
        let area = Math.PI * a * a;
        console.log(area.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

solve('name');