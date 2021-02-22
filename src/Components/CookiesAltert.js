import { Typography } from "@material-ui/core";
import react from "react";


export default class CookiesAltert extends react.Component {

    render() {
        const inStock = this.props.value;
        const color = inStock == 0 ? "red" : inStock < 10 ? "yellow" : "green";
        return (
            <div style={{ position: "absolute", bottom: "0px", left: "0px", right: "0px", height: "50px", display: "flex", alignItems: "center" }} >

                <Typography variant="subtitle1">A {inStock} st</Typography>

            </div>
        )
    }
}
