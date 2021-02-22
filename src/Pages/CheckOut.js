import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import react from "react";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Urls } from "../Routes/Routes";


const styles = (theme) => ({

    left: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
    },
    right: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        alignItems: "flex-end",
        flexDirection: "column",
        display: "flex",
    },

});



class CheckOut extends react.Component {



    render() {

        const { classes, shop } = this.props;
        const uniqueProducts = shop.shoppingBasket.GetProducts().filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
        return (
            <div>
                <Typography gutterBottom variant="h6">Varukorg</Typography>
                <Grid container spacing={2} wrap="wrap" justify="flex-start">
                    <Grid item xs={12} lg={8} >
                        {uniqueProducts.length == 0 && <Paper className={classes.left}>
                            <Typography gutterBottom variant="h6">Här var det tommt...</Typography>
                        </Paper>}
                        {uniqueProducts.map(product => (<CheckoutProduct key={product.id} product={product} shop={shop} />))}
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Paper className={classes.right} >
                            <Typography gutterBottom variant="h4">Sammanfattning</Typography>
                            <Typography gutterBottom variant="h6">Totalt {shop.shoppingBasket.GetTotalPrice()} kr</Typography>
                            <Typography gutterBottom variant="h6">Frakt 0 kr</Typography>
                            <Typography gutterBottom variant="h5">Totalpris {shop.shoppingBasket.GetTotalPrice()} kr</Typography>
                            <Button variant="contained" color="secondary"
                                disabled={shop.shoppingBasket.GetTotalNumber() == 0}
                                onClick={() => this.props.history.push(Urls.confirm)}>Lägg order</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )

    }
}

export default withStyles(styles)(CheckOut)