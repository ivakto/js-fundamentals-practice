function calculatePrice(product, quantity) {

    let totalPrice = quantity * priceProduct();
    console.log(totalPrice.toFixed(2)); 

    function priceProduct() {
        let price = 0;
        if (product === 'coffee') {
            price = 1.50;
        }
        else if (product === 'water') {
            price = 1.00;
        }
        else if (product === 'coke') {
            price = 1.40;
        }
        else if (product === 'snacks') {
            price = 2.00;
        }
        return price;
    }
}

calculatePrice("water", 5);