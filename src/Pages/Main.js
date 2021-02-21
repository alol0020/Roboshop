import React from 'react';
import { withStyles } from '@material-ui/core';
import ProductList from '../Components/ProductList';

const styles = {
    root: {    
      padding: '0 30px',
    },
  };

  
class Main extends React.Component {


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>Robotar</h1>
               <ProductList shop={this.props.shop}/>
            </div>


        )
    }
}
export default withStyles(styles)(Main)