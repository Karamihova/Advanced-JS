function solve(array){

    array.sort(function(a, b){
        return a.length - b.length || a.localeCompare(b);
    })

    array.forEach(element => {
        console.log(element);
    });
}

solve(['alpha', 
'beta', 
'gamma']
);