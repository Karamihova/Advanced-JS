function solve(totalSteps, stepDistance, speed){
    
    let distanceInMeters = totalSteps * stepDistance;
    let distanceInKm = distanceInMeters / 1000;
    let timeInH = distanceInKm / speed;
    let timeInMins = timeInH * 60;
    let extraTime = Math.trunc(distanceInMeters / 500);
    timeInMins += extraTime;
    

    let seconds = Math.ceil(timeInMins * 60);
    let hours = Math.trunc(seconds / 3600);
    seconds -= hours * 3600;
    let minutes = Math.trunc(seconds / 60);
    seconds -= minutes * 60;

    if(hours < 10){
        hours = `0${hours}`;
    }

    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    if(seconds < 10){
        seconds = `0${seconds};`
    }
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(2564, 0.70, 5.5);