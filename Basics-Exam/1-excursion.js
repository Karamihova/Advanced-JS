function solve(input){

    let peopleCount = Number(input.shift());
    let nightsCount = Number(input.shift());
    let transportCards = Number(input.shift());
    let museumTickets = Number(input.shift());

    let singlePersonPrice = (nightsCount * 20) + (transportCards * 1.6) + (museumTickets * 6);
    let totalSum = singlePersonPrice * peopleCount;
    totalSum += totalSum * 25 / 100;

    console.log(totalSum.toFixed(2));
}

solve((["20",
"14",
"30",
"6"])
);