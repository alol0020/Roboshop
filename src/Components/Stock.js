import { Typography } from "@material-ui/core";
import react from "react";


export default class Stock extends react.Component {

    render() {
        const inStock = this.props.value;
        return (
            <div >
                <Typography variant="subtitle2">{inStock}</Typography>


            </div>
        )
    }
}
