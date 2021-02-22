import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { Paper, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Urls } from '../Routes/Routes';

const styles = (theme) => ({
    link: {
        cursor: "pointer",
        textDecoration: "none",

    },
    empty: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
    },
});





class ProductList extends React.Component {


    render() {
        const { classes, shop } = this.props;

        return (
            <Grid container spacing={1} >

                {shop.products.length == 0 &&

                    <Grid item xs={12} > <Paper className={classes.empty}>
                        <Typography gutterBottom variant="h6">Här var det tommt...</Typography>
                    </Paper>
                    </Grid>}
                {shop.products.map(product => (
                    <Grid item xs={12} md={6}  key={product.id}>
                        <Link to={{ pathname: Urls.productInfo + "" + product.name.replace(" ", "_"), state: { product } }} className={classes.link}>
                            <Product enableHover={true} product={product} key={product.id} shop={shop} />
                        </Link>
                    </Grid>
                ))}
            </Grid>

        )
    }
}
export default withStyles(styles)(ProductList)