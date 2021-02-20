import { GetRandomProduct } from "../Mock/MockApi";
import ShoppingBasket from "./ShoppingBasket";


//tom varukorg är tom
test('Shoppingbasket empty is empty', async () => {
    let shoppingbasket = new ShoppingBasket();

    expect(Array.isArray(shoppingbasket.getProducts())).toBeTruthy(); //Är array
    expect(shoppingbasket.getProducts().length == 0).toBeTruthy();    //Är tom
    expect(shoppingbasket.getTotalPrice()).toBe(0); //Totalpris är 0
});




//lägg till en produkt
test('Shoppingbasket add one', async () => {
    let shoppingbasket = new ShoppingBasket();
    let product = GetRandomProduct();
    shoppingbasket.addProduct(product);

    expect(shoppingbasket.getProducts().length).toBe(1);    //En produkt
    expect(shoppingbasket.getTotalPrice()).toBe(product.price); //Totalpris är produktens pris
});

//lägg till flera produkter 

test('Shoppingbasket add many', async () => {
    let shoppingbasket = new ShoppingBasket();
    let products = [GetRandomProduct(), GetRandomProduct(), GetRandomProduct()];
    let expectedTotalPrice = products[0].price + products[1].price + products[2].price;

    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.addProduct(product);
    }

    expect(shoppingbasket.getProducts().length).toBe(products.length);    //samma antal
    for (let prod of shoppingbasket.getProducts()) {
        expect(products.find(p => p.id == prod.id) != null).toBeTruthy();    //produkten från kundvagnen återfinns i listan med produkter vi stoppade in
    }
    expect(shoppingbasket.getTotalPrice()).toBe(expectedTotalPrice); //Totalpris stämmer
});

//ta bort produkt
test('Shoppingbasket remove one', async () => {
    let shoppingbasket = new ShoppingBasket();
    let products = [GetRandomProduct(), GetRandomProduct(), GetRandomProduct()];


    //lägg till produkter i korgen
    for (let product of products) {
        shoppingbasket.addProduct(product);
    }
    let removedProduct = products[2];

    shoppingbasket.removeProduct(removedProduct);

    let expectedTotalPrice = products[0].price + products[1].price;
    let expectedNumberOfProducts = 2;


    expect(shoppingbasket.getProducts().length).toBe(expectedNumberOfProducts);    //rätt antal

    for (let prod of shoppingbasket.getProducts()) {
        expect(products.find(p => p.id == prod.id) != null).toBeTruthy();    //produkten från kundvagnen återfinns i listan med produkter vi stoppade in
    }
    expect(shoppingbasket.getProducts().find(prod => prod.id == removedProduct.id) == null).toBeTruthy(); //den borttagna produkten finns inte

    expect(shoppingbasket.getTotalPrice()).toBe(expectedTotalPrice); //Totalpris stämmer
});


//går inte att ta bort mer produkter som inte finns

