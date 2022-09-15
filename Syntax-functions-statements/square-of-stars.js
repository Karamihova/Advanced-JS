function solve(n = 5){

    for (let row = 0; row < n; row++) {
        
        let str = '';
        for (let col = 0; col < n; col++) {
            str += '* ';
        }
        
        console.log(str);
    }
}

solve();