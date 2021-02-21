
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
    }

    render() {
        const { classes, product, children, shop } = this.props;

        const count = shop.shoppingBasket.GetNumberOf(product);
        return (
            <Paper className={classes.paper} >
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
                                    <RemoveCircle fontSize="large" onClick={() => shop.RemoveFromBasket(product)} />
                                    <Typography gutterBottom variant="h6">{count}</Typography>
                                    <AddCircle fontSize="large" onClick={() => shop.AddToBasket(product)} />
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