import react from "react";
import { Button, Grid, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Urls } from "../Routes/Routes";
import logo from "../Assets/Images/Logo.png"
import logoSmall from "../Assets/Images/Logo_small.png"
import { withStyles } from "@material-ui/styles";
import { Home, ShoppingBasket, ShoppingCart } from "@material-ui/icons";

const styles = (theme) => ({

    bar: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center"


    },
    link: {
        display: "flex",
        // alignItems: "flex-end",
        textDecoration: "none",
        flexDirection: "column",
        color: "grey",
        position: "relative",
        marginTop: "30px"
    },
    image: {
        display: "flex",
        flex: 1,
        overflow: "hidden",
        position: "relative",
        height: "25vw",
        maxHeight: "200px"

    },
    img: {
        margin: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    basketOverlay: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: "20px",
        height: "40px",
        width: "40px",
        top: 0,
        right: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    basketContent: {
        color: "white",
        padding: "10px",
    },


});

class Navbar extends react.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {

        const { classes, shop } = this.props;
        // const numberOfProducts = shop.shoppingBasket.GetTotalNumber()<=99? shop.shoppingBasket.GetTotalNumber():"99+";
        const numberOfProducts = 60;
        return (
            <div className={classes.bar}>
                <Link to={Urls.main} className={classes.link} >
                    {/* <Button variant="contained" color="primary">Hem</Button> */}
                    <Home style={{ fontSize: 60, marginRight: "10px" }} />
                    <p style={{ marginTop: "0px", paddingTop: "0px" }}>Hem</p>
                </Link>
                <div className={classes.image}>
                    <Link to={Urls.main} style={{ cursor: "default" }}>
                        {this.state.width > 600 && <img src={logo} className={classes.img} />}
                        {this.state.width <= 600 && <img src={logoSmall} className={classes.img} />}
                    </Link>
                </div>
                <Link to={Urls.checkout} className={classes.link}>
                    <ShoppingCart style={{ fontSize: 60, marginRight: "10px" }} />
                    {/* <Button variant="contained" color="primary">Varukorg</Button> */}
                    <p style={{ marginTop: "0px", paddingTop: "0px" }}>Varukorg</p>
                    <div className={classes.basketOverlay}>
                        <p className={classes.basketContent}>{numberOfProducts}</p>
                    </div>
                </Link>
            </div>
        )
    }
}



export default withStyles(styles)(Navbar);