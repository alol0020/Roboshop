import react from "react";
import { Redirect } from "react-router-dom";
import ProductDetailed from "../Components/ProductDetailed";
import { Urls } from "../Routes/Routes";


export default class ProductInfo extends react.Component {


    render() {
        const product = this.props.location.state?.product;

        if (product) {
            return <ProductDetailed product={product} shop={this.props.shop}/>
        }
        else {
            //Sidan kunde inte hittas
            return <Redirect to={Urls.main} />
        }
    }
}
