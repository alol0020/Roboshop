
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

    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        maxWidth: "90%",
    },

    image: {
        width: 300,
        height: 300,
    },

});

class ProductDetailed extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { classes, product, shop } = this.props;
         console.log(product.inStock , shop.shoppingBasket.GetNumberOf(product));
        return (
            <Product enableHover={false}  product={product} classes={classes} shop={shop} >
                <Button variant="contained" color="secondary" 
                disabled={product.inStock<= shop.shoppingBasket.GetNumberOf(product) || product.instock==0}
                onClick={() => shop.AddToBasket(product)}>Köp</Button>
            </Product>
        )
    }
}
export default withStyles(styles)(ProductDetailed)