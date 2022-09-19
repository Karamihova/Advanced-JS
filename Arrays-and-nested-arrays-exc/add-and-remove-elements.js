function solve(commands){

    let currEl = 1;
    let array = [];
    
    for (let i = 0; i < commands.length; i++) {
        
        let command = commands[i];
        if(command === 'add'){
            array.push(currEl);
        } else if(command === 'remove'){
            array.pop();
        }
        
        currEl++;
    }

    if(array.length > 0){
        array.forEach(x => console.log(x));
    } else{
        console.log('Empty')
    }
}

solve(['remove', 
'remove', 
'remove']
);