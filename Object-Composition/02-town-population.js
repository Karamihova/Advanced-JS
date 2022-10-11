function solve(input){
    let townPopulationRegistry = {};
    for (const line of input) {
        let [city, population] = line.split(' <-> ');
        population = Number(population);

        if(townPopulationRegistry[city]){
            townPopulationRegistry[city] += population;
        } else{
            townPopulationRegistry[city] = population;
        }
    }

    for (const city in townPopulationRegistry) {
        console.log(`${city} : ${townPopulationRegistry[city]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);