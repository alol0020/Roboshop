import react from "react";
import { Redirect } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import { Urls } from "../Routes/Routes";

class ConfirmationPage extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            properties: {
                adress: {
                    firstName: "",
                    lastName: "",
                    adress1: "",
                    adress2: "",
                    postcode: "",
                    city: "",
                },
                payment: {
                    name: "",
                    cardNumber: "",
                    date: "",
                    cvv: "",
                }
            }
        }
        this.updateProps = this.updateProps.bind(this);
    }

    updateProps(key1, key2, value) {
        let properties = this.state.properties;

        let entity = properties[key1];
        entity[key2] = value;
        this.setState({ properties })

    }

    render() {
        const { classes, product, shop } = this.props;
        if (shop.shoppingBasket.GetTotalNumber() < 1) {
            return <Redirect to={{ pathname: Urls.main }} />;
        }
        return (
            <Checkout SetStep={(step) => this.setState({ step })} step={this.state.step} history={this.props.history} shop={this.props.shop} adress={this.state.properties.adress} payment={this.state.properties.payment} updateProps={this.updateProps} />
        )

    }
}

export default ConfirmationPage