import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core';
import ProductList from '../Components/ProductList';

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

class Main extends React.Component {


    render() {
        console.log("main", this.props)
        const { classes } = this.props;

        return (
            <div>
                <h1>Robotar</h1>
               <ProductList shop={this.props.shop}/>
            </div>


        )
    }
}
export default withStyles(styles)(Main)