import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core';
import Product from './Product';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
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

class ProductList extends React.Component {


    render() {
        console.log("ProductList", this.props)
        const { classes } = this.props;

        return (
            <Grid container spacing={1} fl>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Grid>

        )
    }
}
export default withStyles(styles)(ProductList)