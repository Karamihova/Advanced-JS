function solve(array){

    let cities = [];

    for (let i = 0; i < array.length; i++) {
        let currLine = array[i].split(' <-> ');
        let city = {};
        let name = currLine[0];
        let population = currLine[1];

        if(cities.includes(x => x.name === name)){
            let currCity =cities.find(x => x.name === name);
            currCity.population += population;
        } else{
            city.name = name;
            city.population = population;
            cities.push(city);
        }
        
    }

    for (let i = 0; i < cities.length; i++) {
        
        let city = cities[i];
        console.log(`${city.name} : ${city.population}`)
        
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);