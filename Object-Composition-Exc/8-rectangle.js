function rectangle(width, height, color){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    color = capitalizeFirstLetter(color);

    return{
        width: width,
        height: height,
        color: color,
        calcArea(){
            return width * height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
