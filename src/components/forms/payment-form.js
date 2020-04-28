import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formInputChanged } from "../../actions";
import { Typography, Grid, TextField, Button } from "@material-ui/core";

const PaymentForm = ({ handleBack, handleNext, buttonStyles }) => {
  const { buttons, button } = buttonStyles;
  const dispatch = useDispatch();
  const { nameOnCard, cardNumber, expiryDate, cvv } = useSelector(
    (state) => state.formData
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="nameOnCard"
              label="Name on card"
              fullWidth
              defaultValue={nameOnCard}
              onChange={(e) =>
                dispatch(formInputChanged("nameOnCard", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              defaultValue={cardNumber}
              onChange={(e) =>
                dispatch(formInputChanged("cardNumber", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expiryDate"
              label="Expiry date"
              fullWidth
              defaultValue={expiryDate}
              onChange={(e) =>
                dispatch(formInputChanged("expiryDate", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              defaultValue={cvv}
              onChange={(e) =>
                dispatch(formInputChanged("cvv", e.target.value))
              }
            />
          </Grid>
        </Grid>
        <div className={buttons}>
          <Button onClick={handleBack} className={button}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={button}
          >
            Next
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PaymentForm;
