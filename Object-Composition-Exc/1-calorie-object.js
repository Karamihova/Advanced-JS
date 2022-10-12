function solve(array) {

    let object = {};

    for (let i = 0; i < array.length; i += 2) {
        let name = array[i];
        let calories = array[i + 1];
        object[name] = Number(calories);
    }

    console.log(object);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);