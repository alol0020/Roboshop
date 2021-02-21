import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Betalning
      </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Namn på kort" 
                    fullWidth autoComplete="cc-name"
                        value={props.payment.name}
                        onChange={(event) => props.updateProps("payment", "name", event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Kortnummer"
                        fullWidth
                        autoComplete="cc-number"
                        value={props.payment.cardNumber}
                        onChange={(event) => props.updateProps("payment", "cardNumber", event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Datum" 
                    fullWidth autoComplete="cc-exp"                     
                    value={props.payment.date}
                    onChange={(event) => props.updateProps("payment", "date", event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        value={props.payment.cvv}
                        onChange={(event) => props.updateProps("payment", "cvv", event.target.value)}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}