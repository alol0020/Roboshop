
//Note: Continue nice example from 
// https://material-ui.com/components/grid/#ComplexGrid.js
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button, withStyles } from '@material-ui/core';
import imagePlaceholder from "../Assets/Images/placeholder.png"
import { Urls } from '../Routes/Routes';
import { Link } from 'react-router-dom';
import Stock from './Stock';
import Product from './Product';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        maxWidth: "90%",
    },
    infoSection: {
        display: "flex",
        justifyContent: "space-between",
    },
    infoTexts: {
        maxWidth: "80%",
    },
    image: {
        width: 256,
        height: 256,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

});

class ProductDetailed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elevation: 1 }
    }

    onMouseOver = () => this.setState({ elevation: 5 });
    onMouseOut = () => this.setState({ elevation: 1 });


    render() {
        const { classes, product } = this.props;

        return (
            <Product product={product} classes={classes} >
                <Button variant="contained" color="secondary">Köp</Button>
            </Product>
        )
    }
}
export default withStyles(styles)(ProductDetailed)