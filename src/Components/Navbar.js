import react from "react";
import { Button, Grid, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Urls } from "../Routes/Routes";
import logo from "../Assets/Images/Logo.png"
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({

    bar: {
        display: "flex",
        flexDirection: "row",
        flex: 1,      

    },
    link: {

        display: "flex",
        alignItems: "flex-end",
    },
    image: {
        display: "flex",
        flex: 1,
        overflow: "hidden",
        position: "relative",
        height:"25vw",
        maxHeight:"200px"
        
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
    }


});

class Navbar extends react.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const { classes } = this.props;
        return (
                <div className={classes.bar}>
                    <div className={classes.link}>
                        <Link to={Urls.main} >
                            <Button variant="contained" color="primary">Hem</Button>
                        </Link>
                    </div>
                    <div className={classes.image}>
                        <Link to={Urls.main} style={{ cursor: "default" }}>
                            <img src={logo} className={classes.img} />
                        </Link>
                    </div>

                    <div className={classes.link}>
                        <Link to={Urls.checkout} >
                            <Button variant="contained" color="primary">Kundvagn</Button>
                        </Link>

                    </div>
                </div>
        )
    }
}



export default withStyles(styles)(Navbar);