function solve(object){

    let car = {};
    let engine = {};
    let carriage = {};

    car.model = object.model;

    let power = 0;
    let volume = 0;

    if(object.power <= 90){
        power = 90;
        volume = 1800;
    } else if(object.power <= 120){
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    engine.power = power;
    engine.volume = volume;
    car.engine = engine;

    carriage.type = object.carriage;
    carriage.color = object.color;
    car.carriage = carriage;

    let wheel = object.wheelsize;
    if(wheel % 2 === 0){
        wheel -= 1;
    }

    let wheels = [wheel, wheel, wheel, wheel];
    car.wheels = wheels;

    return car;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);