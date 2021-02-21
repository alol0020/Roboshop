
export default class ShoppingBasket {

    constructor() {
        this.products = [];
        this.totalPrice = 0;
        this.GetProducts = this.GetProducts.bind(this);
        this.AddProduct = this.AddProduct.bind(this);
        this.RemoveProduct = this.RemoveProduct.bind(this);
        this.GetTotalPrice = this.GetTotalPrice.bind(this);
        this.GetNumberOf = this.GetNumberOf.bind(this);
    }
    GetProducts() {
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
        return this.products.filter(prod => prod.id == product.id).length;
    }

    GetTotalNumber() {
        return this.products.length;
    }


}

