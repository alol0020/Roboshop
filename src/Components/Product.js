
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

const styles = (theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
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

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elevation: 1 }
    }

    onMouseOver = () => this.props.enableHover && this.setState({ elevation: 5 });
    onMouseOut = () => this.props.enableHover && this.setState({ elevation: 1 });


    render() {
        const { classes, product, children, shop } = this.props;
        return (

            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >

                        <Grid container spacing={2}>
                            <Grid item>
                                <div className={classes.image}>
                                    <img className={classes.img} src={product.image || imagePlaceholder} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" gutterBottom>{product.description}</Typography>
                                </Grid>
                                <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                                    <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                        <Typography variant="subtitle1">{product.price} kr</Typography>
                                        <Stock value={product.inStock - shop.shoppingBasket.GetNumberOf(product)} />
                                    </Grid>
                                    <Grid item >
                                        {children}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Product)