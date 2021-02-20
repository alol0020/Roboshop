
export default class ShoppingBasket {

    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
    getProducts() {
        return this.products;
    }

    addProduct(product) {
        this.totalPrice += product.price;
        this.products.push(product);
    }
    removeProduct(productToBeRemoved) {

        let idx = this.products.indexOf(this.products.find(prod => prod.id == productToBeRemoved.id));
        if (idx > -1) {
            this.products.splice(idx, 1);
            this.totalPrice -= productToBeRemoved.price;
        }

    }

    getTotalPrice() {
        return this.totalPrice;
    }


}

