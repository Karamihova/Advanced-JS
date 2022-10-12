function solve(array){

    let products = [];

    for (let i = 0; i < array.length; i++) {
        let [town, productName, productPrice] = array[i].split(' | ');
        productPrice = Number(productPrice);

        if(products.some(x => x.name === productName)){

            let product = products.find(x => x.name === productName);

            if(product !== undefined){
                if(product.price > productPrice){
                    product.price = productPrice;
                    product.town = town;
                }
            }
            
        } else{
            let product = {};
            product.name = productName;
            product.price = productPrice;
            product.town = town;

            products.push(product);
        }
        
    }

    for (const product of products) {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);