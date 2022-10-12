function solve(array){

    let sortedArr = array.sort((a, b) => a.localeCompare(b));
    let currCharacter = '';
    for (let i = 0; i < sortedArr.length; i++) {

        let currLine = sortedArr[i].split(' : ');
        if(currCharacter !== currLine[0][0]){
            currCharacter = currLine[0][0];
            console.log(currCharacter);
        }
        
        console.log(`${currLine[0]}: ${currLine[1]}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);