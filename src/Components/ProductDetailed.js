
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
import { Link } from 'react-router-dom';
import Stock from './Stock';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        maxWidth: "90%",
    },
    infoSection: {
        display: "flex",
        justifyContent: "space-between",
    },
    infoTexts: {
        maxWidth: "80%",
    },
    image: {
        width: 256,
        height: 256,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

});

class ProductDetailed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elevation: 1 }
    }

    onMouseOver = () => this.setState({ elevation: 5 });
    onMouseOut = () => this.setState({ elevation: 1 });


    render() {
        const { classes, product } = this.props;

        return (
            <Paper className={classes.paper} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
                <Grid item >
                    <Grid container spacing={2}>
                        <Grid item>
                            <div className={classes.image}>
                                <img className={classes.img} src={product.image || imagePlaceholder} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm container className={classes.infoSection}>
                            <Grid item xs container direction="column" spacing={2} className={classes.infoTexts}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" gutterBottom>{product.description}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{product.price} kr</Typography>
                                <Stock value={product.inStock} />

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Paper>
        )
    }
}
export default withStyles(styles)(ProductDetailed)