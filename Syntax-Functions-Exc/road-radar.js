function solve(currSpeed, area){

    let allowedSpeed = 0;
    switch (area) {
        case 'motorway':
            allowedSpeed = 130;
            break;
        case 'interstate':
            allowedSpeed = 90;
            break;
        case 'city':
            allowedSpeed = 50;
            break;
        case 'residential':
            allowedSpeed = 20;
            break;
        default:
            break;
    }

    if(currSpeed <= allowedSpeed){
        console.log(`Driving ${currSpeed} km/h in a ${allowedSpeed} zone`)
    } else{

        let difference = currSpeed - allowedSpeed;
        let status = '';
        if(difference <= 20){
            status = 'speeding';
        } else if(difference <= 40){
            status = 'excessive speeding';
        } else{
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
    }
}

solve(21, 'residential');