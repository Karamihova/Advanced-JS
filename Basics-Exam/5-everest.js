function solve(input){

    let climbedMeters = 5364;
    let daysToClimb = 1;
    let peakMeters = 8848;
    let hasClimbed = false;

    while(true){

        let firstLine = input.shift();
        if(firstLine === 'END'){
            break;
        }

        let stayTheNight = firstLine;
        let meters = Number(input.shift());

        if(stayTheNight === 'Yes'){
            daysToClimb++;
        } 

        if(daysToClimb > 5){
            break;
        }

        climbedMeters += meters;

        if(climbedMeters >= peakMeters){
            hasClimbed = true;
            break;
        }
    }

    if(hasClimbed){
        console.log(`Goal reached for ${daysToClimb} days!`);
    } else{
        console.log('Failed!');
        console.log(climbedMeters);
    }
}

solve(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])
;
