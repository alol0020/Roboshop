import react from "react"; import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Urls } from "../Routes/Routes";


export default class Navbar extends react.Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props)
        return (
            <AppBar position="static">
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to={Urls.main} >
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to={Urls.checkout} >
                        <Button color="inherit">Cart</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        )
    }
}
