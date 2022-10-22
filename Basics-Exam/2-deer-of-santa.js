function solve(input){
    let daysSantaMissing = Number(input.shift());
    let leftFoodKg = Number(input.shift());
    let foodPerDayDeer1 = Number(input.shift());
    let foodPerDayDeer2 = Number(input.shift());
    let foodPerDayDeer3 = Number(input.shift());

    let neededFood = (foodPerDayDeer1 + foodPerDayDeer2 + foodPerDayDeer3) * daysSantaMissing;
    let foodDifference = Math.abs(neededFood - leftFoodKg);
    if(leftFoodKg >= neededFood){
        console.log(`${Math.floor(foodDifference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodDifference)} more kilos of food are needed.`);
    }
}

solve(["5",
"10",
"2.1",
"0.8",
"11"]);

