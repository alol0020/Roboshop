import react from "react";
import { Route, Switch } from "react-router-dom";
import CheckOut from "../Pages/CheckOut";
import ProductInfo from "../Pages/ProductInfo";
import Main from "../Pages/Main";


export default class Routes extends react.Component {

    render() {
        return (
            <Switch>
                <Route path={Urls.productInfo} render={(props) => (<ProductInfo {...props} {...this.props.childprops} />)} />
                <Route path={Urls.checkout} render={(props) => (<CheckOut {...props} {...this.props.childprops} />)} />
                <Route path={Urls.main} render={(props) => (<Main {...props} {...this.props.childprops} />)} />

            </Switch>
        );
    }
}

export const Urls = {
    main: "/",
    productInfo: "/product/",
    checkout: "/checkout/",
}