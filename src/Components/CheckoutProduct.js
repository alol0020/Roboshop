
//Note: Continue nice example from 
// https://material-ui.com/components/grid/#ComplexGrid.js
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core';
import imagePlaceholder from "../Assets/Images/placeholder.png"
import { Urls } from '../Routes/Routes';
import { roboShopTheme } from '../Theme';
import Stock from './Stock';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class CheckoutProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reload: false }
    }
    add(product) {
        const { shop } = this.props;
        if (shop.products.find(p => p.id == product.id).inStock - shop.shoppingBasket.GetNumberOf(product) > 0) {
            shop.shoppingBasket.AddProduct(product);
            this.setState({ reload: !this.state.reload });
        }
    }

    remove(product) {
        const { shop } = this.props;
        if (shop.shoppingBasket.GetNumberOf(product) > 1) {
            shop.shoppingBasket.RemoveProduct(product);
            this.setState({ reload: !this.state.reload });
        }
    }


    render() {
        const { classes, product, children, shop } = this.props;

        const count = shop.shoppingBasket.GetNumberOf(product);
        console.log(this.props)
        return (
            <Paper className={classes.paper} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
                <Grid item >
                    <Grid container spacing={2}>
                        <Grid item>
                            <div className={classes.image}>
                                <img className={classes.img} src={product.image || imagePlaceholder} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">{product.name}</Typography>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100px" }}>
                                    <AddCircle fontSize="large" onClick={() => this.add(product)} />
                                    <Typography gutterBottom variant="h6">{count}</Typography>
                                    <RemoveCircle fontSize="large" onClick={() => this.remove(product)} />
                                </div>
                            </Grid>
                            <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                                <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                    <Typography variant="subtitle1">{count * product.price} kr</Typography>
                                    <Stock value={product.inStock - shop.shoppingBasket.GetNumberOf(product)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
export default withStyles(styles)(CheckoutProduct)