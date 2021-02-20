
export default class ShoppingBasket {

    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
    getProducts() {        
        return this.products;
    }

    addProduct(product) { 
        this.totalPrice+=product.price;
        this.products.push(product);
    }
    removeProduct() { }

    getTotalPrice() {
       return this.totalPrice;
     }


}

