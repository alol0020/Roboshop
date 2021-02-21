import react from "react";
import CheckoutProduct from "../Components/CheckoutProduct";

export default class CheckOut extends react.Component {




    render() {

        const { classes, product, shop } = this.props;
        // console.log(this.props)
        // console.log(shop)
        // console.log(shop.shoppingBasket)

        const uniqueProducts = shop.shoppingBasket.GetProducts().filter((product, idx, prodtucts) => prodtucts.indexOf(product) === idx);

        return (
            <div>
                <p>Varukorg:</p>
                {/* {uniqueProducts.map(product => {
                    const count = shop.shoppingBasket.GetNumberOf(product);
                    return (<p>{product.name} {count} á {product.price} kr styck totalt  {product.price * count} kr</p>);
                } */}
                {uniqueProducts.map(product => (<CheckoutProduct key={product.id} product={product} shop={shop} />))}

            </div>
        )

    }
}
