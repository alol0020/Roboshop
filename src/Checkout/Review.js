import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const paymentDetails = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: props.payment.name },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-xxxx' },
    { name: 'Expiry date', detail: props.payment.date },
  ];
  const uniqueProducts = props.shop.shoppingBasket.GetProducts().filter((product, idx, prodtucts) => prodtucts.indexOf(product) === idx);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sammanfattning
      </Typography>
      <List disablePadding>
        {uniqueProducts.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={props.shop.shoppingBasket.GetNumberOf(product) + " st á " + product.price + " kr"} />
            <Typography variant="body2">{product.price * props.shop.shoppingBasket.GetNumberOf(product)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.shop.shoppingBasket.GetTotalPrice()} kr
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Fraktadress
          </Typography>
          <Typography gutterBottom>{(Object.values(props.adress)).filter(x => x != "").join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Betalningsdetaljer
          </Typography>
          <Grid container>
            {paymentDetails.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}