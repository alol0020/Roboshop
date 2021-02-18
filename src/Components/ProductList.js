import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Urls } from '../Routes/Routes';

const styles = (theme) => ({
    link: {
        cursor: "pointer",
        textDecoration: "none",

    },
});

class ProductList extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={1}  >
                {this.props.shop.products.map(product => (
                    <Link to={{ pathname: Urls.productInfo + "" + product.name.replace(" ", "_"), state: { product } }} className={classes.link}>
                        <Product product={product} key={product.id} />
                    </Link>
                ))}
            </Grid>

        )
    }
}
export default withStyles(styles)(ProductList)