import react from "react";
 import {  Button, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Urls } from "../Routes/Routes";
import logo from "../Assets/Images/Logo.png"

export default class Navbar extends react.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="navbar" >
                <Link to={Urls.main} >
                    <Button variant="contained" color="primary">Hem</Button>
                </Link>
                <Link to={Urls.main} style={{cursor:"default"}}>
                    <img src={logo} />
                </Link>
                <Link to={Urls.checkout} >
                    <Button variant="contained" color="primary">Kundvagn</Button>
                </Link>
            </div>
        )
    }
}
