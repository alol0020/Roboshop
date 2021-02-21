import { GetRandomProduct } from "../Mock/MockApi";
import ShoppingBasket from "./ShoppingBasket";


//tom varukorg är tom
test('Shoppingbasket empty is empty', async () => {
    let shoppingbasket = new ShoppingBasket();

    expect(Array.isArray(shoppingbasket.getProducts())).toBeTruthy(); //Är array
    expect(shoppingbasket.getProducts().length == 0).toBeTruthy();    //Är tom
    expect(shoppingbasket.GetTotalPrice()).toBe(0); //Totalpris är 0
});




//lägg till en produkt
test('Shoppingbasket add one', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product = GetRandomProduct();
    shoppingbasket.AddProduct(product);

    expect(shoppingbasket.getProducts().length).toBe(1);    //En produkt
    expect(shoppingbasket.GetTotalPrice()).toBe(product.price); //Totalpris är produktens pris
});

//lägg till flera produkter 

test('Shoppingbasket add many', async () => {
    let shoppingbasket = new ShoppingBasket();
    let products = [GetRandomProduct(), GetRandomProduct(), GetRandomProduct()];
    let expectedTotalPrice = products[0].price + products[1].price + products[2].price;

    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.AddProduct(product);
    }

    expect(shoppingbasket.getProducts().length).toBe(products.length);    //samma antal
    for (let prod of shoppingbasket.getProducts()) {
        expect(products.find(p => p.id == prod.id) != null).toBeTruthy();    //produkten från kundvagnen återfinns i listan med produkter vi stoppade in
    }
    expect(shoppingbasket.GetTotalPrice()).toBe(expectedTotalPrice); //Totalpris stämmer
});

//ta bort produkt, 2 stycken av två olika produkter i korgen
test('Shoppingbasket remove one', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product1 = GetRandomProduct();
    let product2 = GetRandomProduct();
    let products = [product2, product1, product2, product1];
    let expectedProducts = products.slice(0, 3);

    let initialValue = 0;
    let expectedTotalPrice = expectedProducts.reduce(function (total, currentValue) {
        return total + currentValue.price;
    }, initialValue);
    let expectedNumberOfProducts = expectedProducts.length;


    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.AddProduct(product);
    }

    shoppingbasket.RemoveProduct(product1);



    expect(shoppingbasket.getProducts().length).toBe(expectedNumberOfProducts);    //rätt antal

    //Förväntar oss att korgen innehåller rätt produkter
    let basketProducts = shoppingbasket.getProducts();
    for (let prod of expectedProducts) {
        expect(basketProducts.find(p => p.id == prod.id) != null).toBeTruthy();
    }

    expect(shoppingbasket.GetTotalPrice()).toBe(expectedTotalPrice); //Totalpris stämmer
});


//Det ska inte gå att ta bort podukter som inte finns
test('Shoppingbasket remove item that is not in basket', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product1 = GetRandomProduct();
    let product2 = GetRandomProduct();
    let products = [product1, product1];

    let initialValue = 0;
    let expectedTotalPrice = products.reduce(function (total, currentValue) {
        return total + currentValue.price;
    }, initialValue);


    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.AddProduct(product);
    }

    shoppingbasket.RemoveProduct(product2);



    expect(shoppingbasket.getProducts().length).toBe(2);    //rätt antal

    //Förväntar oss att korgen innehåller rätt produkter
    let basketProducts = shoppingbasket.getProducts();
    for (let prod of products) {
        expect(basketProducts.find(p => p.id == prod.id) != null).toBeTruthy();
    }

    expect(shoppingbasket.GetTotalPrice()).toBe(expectedTotalPrice); //Totalpris stämmer
});






test('Shoppingbasket get number of a specific product', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product1 = GetRandomProduct();
    let product2 = GetRandomProduct();

    let product3 = GetRandomProduct(); //en produkt som inte läggs till

    let products = [product2, product2, product2, product1, product1];


    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.AddProduct(product);
    }


    expect(shoppingbasket.GetNumberOf(product1)).toBe(2);
    expect(shoppingbasket.GetNumberOf(product2)).toBe(3);
    expect(shoppingbasket.GetNumberOf(product3)).toBe(0);
});


test('Shoppingbasket get total number of products', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product1 = GetRandomProduct();
    let product2 = GetRandomProduct();
    let product3 = GetRandomProduct(); 

    let products = [product2, product2, product2, product1, product1, product3];


    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.AddProduct(product);
    }


   
    expect(shoppingbasket.GetTotalNumber()).toBe(products.length);
});