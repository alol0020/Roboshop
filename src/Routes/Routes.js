import react from "react";
import { Route, Switch } from "react-router-dom";
import CheckOut from "../Pages/CheckOut";
import ProductInfo from "../Pages/ProductInfo";
import Main from "../Pages/Main";
import AppliedRoute from "./AppliedRoute";
import ConfirmationPage from "../Pages/ConfirmationPage";


export default class Routes extends react.Component {

    render() {
        return (
            <Switch>
                <AppliedRoute component={ProductInfo} path={Urls.productInfo} props = {this.props.childprops}/>
                <AppliedRoute component={CheckOut} path={Urls.checkout} props = {this.props.childprops}/>
                <AppliedRoute component={ConfirmationPage} path={Urls.confirm} props = {this.props.childprops}/>
                <AppliedRoute component={Main} path={Urls.main} props = {this.props.childprops}/>
            </Switch>
        );
    }
}

export const Urls = {
    main: "/",
    productInfo: "/product/",
    checkout: "/checkout/",
    confirm: "/confirm/",
}