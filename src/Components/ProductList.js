import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';


class ProductList extends React.Component {


    render() {
        return (
            <Grid container spacing={1}  >
                {this.props.shop.products.map(product => <Product product={product} key={product.id}/>)}
            </Grid>

        )
    }
}
export default ProductList