import react from "react"; import { AppBar, IconButton, Toolbar, Typography, Button, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Urls } from "../Routes/Routes";
import logo from "../Assets/Images/Logo.png"

export default class Navbar extends react.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="navbar">
                <Link to={Urls.main} >
                    <Button variant="contained" color="primary">Home</Button>
                </Link>
                <img src={logo}/>
                <Link to={Urls.checkout} >
                    <Button variant="contained" color="primary">Cart</Button>
                </Link>
            </div>
        )
    }
}
