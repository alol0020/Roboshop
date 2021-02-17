import react from "react";
import { Route, Switch } from "react-router-dom";
import CheckOut from "../Pages/CheckOut";
import ProductInfo from "../Pages/ProductInfo";
import Main from "../Pages/Main";


export default class Routes extends react.Component {

    render() {
        return (
            <Switch>
                <Route path={Urls.productInfo} component={ProductInfo} />
                <Route path={Urls.checkout} component={CheckOut} />
                <Route path={Urls.main} component={Main} />
            </Switch>
        );
    }
}

export const Urls = {
    main: "/",
    productInfo: "/product/",
    checkout: "/checkout/",
}