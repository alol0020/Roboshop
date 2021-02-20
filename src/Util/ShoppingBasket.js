
export default class ShoppingBasket {

    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
    getProducts() {
        return this.products;
    }

    AddProduct(product) {
        this.totalPrice += product.price;
        this.products.push(product);
    }
    RemoveProduct(productToBeRemoved) {

        let idx = this.products.indexOf(this.products.find(prod => prod.id == productToBeRemoved.id));
        if (idx > -1) {
            this.products.splice(idx, 1);
            this.totalPrice -= productToBeRemoved.price;
        }

    }

    GetTotalPrice() {
        return this.totalPrice;
    }
    GetNumberOf(product) {


        return this.products.filter(prod=>prod.id==product.id).length
    }


}

