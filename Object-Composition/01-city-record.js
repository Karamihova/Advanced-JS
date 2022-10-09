function solve(name, population, treasury){
    var city = {};
    city.name = name;
    city.treasury = treasury;
    city.population = population;

    return city;
}

console.log(solve('Tortuga',
7000,
15000
));