import { Typography } from "@material-ui/core";
import react from "react";


export default class Stock extends react.Component {

    render() {
        const inStock = this.props.value;
        const color = inStock == 0 ? "red" : inStock < 10 ? "yellow" : "green";
        return (
            <div style={{ display: "flex", alignItems: "center" }} >
                <div style={{ margin: "5px", width: "10px", height: "10px", backgroundColor: color }} />
                <Typography variant="subtitle1">Lager {inStock} st</Typography>

            </div>
        )
    }
}
