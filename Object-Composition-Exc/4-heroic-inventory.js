function solve(array) {

    let objects = [];
    for (let i = 0; i < array.length; i++) {
        let [name, level, items] = array[i].split(' / ');
        let currObj = {};
        currObj.name = name;
        currObj.level = Number(level);
        items = items.split(', ');
        currObj.items = items;

        objects.push(currObj);
    }

    let json = JSON.stringify(objects);
    console.log(json);
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);