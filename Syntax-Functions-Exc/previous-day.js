function solve(year, month, day){

    const currDate = new Date(year, month, day);
    const previousDate = new Date(currDate);
    previousDate.setDate(previousDate.getDate() - 1);
    
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()}-${previousDate.getDate()}`);
}

solve(2016, 1, 1);