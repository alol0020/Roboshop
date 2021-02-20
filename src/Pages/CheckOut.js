import react from "react";


export default class CheckOut extends react.Component {

    render() {

        const { classes, product, shop } = this.props;
        console.log(this.props)
        console.log(shop)
        console.log(shop.shoppingBasket)
        return (
            <div>
                <p>Varukorg:</p>
                {shop.shoppingBasket.GetProducts().map(p => <p>Produkt: {p.name}, {p.price}</p>)

                }

            </div>
        )

    }
}
