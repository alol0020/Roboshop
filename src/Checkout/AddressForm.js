import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Leveransadress
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Förnamn"
            fullWidth
            autoComplete="given-name"
            value={props.adress.firstName}
            onChange={(event)=>props.updateProps("adress","firstName",event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Efternamn"
            fullWidth
            autoComplete="family-name"
            value={props.adress.lastName}
            onChange={(event)=>props.updateProps("adress","lastName",event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Adress"
            fullWidth
            autoComplete="shipping address-line1"
            value={props.adress.adress1}
            onChange={(event)=>props.updateProps("adress","adress1",event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address forts."
            fullWidth
            autoComplete="shipping address-line2"
            value={props.adress.adress2}
            onChange={(event)=>props.updateProps("adress","adress2",event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Stad"
            fullWidth
            autoComplete="shipping address-level2"
            value={props.adress.city}
            onChange={(event)=>props.updateProps("adress","city",event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postkod"
            fullWidth
            autoComplete="shipping postal-code"
            value={props.adress.postcode}
            onChange={(event)=>props.updateProps("adress","postcode",event.target.value)}
          />
        </Grid>
       
       
      </Grid>
    </React.Fragment>
  );
}