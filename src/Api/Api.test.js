import { GetAllProducts } from "./Api";



test('GetAppProducts returns array', async () => {
    let res = await GetAllProducts()

    expect(Array.isArray(res)).toBeTruthy();
});


test('GetAppProducts items have properties', async () => {

    let products = await GetAllProducts();
    const expectedProperties = ["id", "name", "description", "price", "inStock", "image"];
    for (let product of products) {
        for (let property of expectedProperties) {
            expect(property in product).toBeTruthy();
        }
    }

});

