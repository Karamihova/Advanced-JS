function solve(input){
    let days = Number(input.shift());
    let roomType = input.shift();
    let rating = input.shift();

    let nights = days - 1;
    let discountPercentage = 0;
    let pricePerNight = 0;

    if(roomType === 'apartment'){

        pricePerNight = 25;
        if(nights < 10){
            discountPercentage = 30;
        } else if (nights >= 10 && nights <= 15){
            discountPercentage = 35;

        } else if(nights > 15){
            discountPercentage = 50;
        }

    } else if(roomType === 'president apartment'){

        pricePerNight = 35;
        if(nights < 10){
            discountPercentage = 10;
        } else if (nights >= 10 && nights <= 15){
            discountPercentage = 15;

        } else if(nights > 15){
            discountPercentage = 20;
        }
    } else if(roomType === 'room for one person'){
        pricePerNight = 18;
    }

    let totalSum = nights * pricePerNight;
    if(discountPercentage > 0){
        totalSum -= totalSum * discountPercentage / 100;
    }

    if(rating === 'positive'){
        totalSum += totalSum * 25 / 100;
    } else if(rating === 'negative'){
        totalSum -= totalSum * 10 / 100;        
    }

    console.log(totalSum.toFixed(2));
    
}

solve(["14",
"apartment",
"positive"])
;