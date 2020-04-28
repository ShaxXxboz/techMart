import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formInputChanged } from "../../actions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddressForm = ({ handleNext, buttonStyles }) => {
  const { button, buttons } = buttonStyles;
  const dispatch = useDispatch();
  const { fullName, address, city, zip } = useSelector(
    (state) => state.formData
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="fullName"
              label="Full name"
              defaultValue={fullName}
              fullWidth
              onChange={(e) =>
                dispatch(formInputChanged("fullName", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              label="Address line"
              fullWidth
              defaultValue={address}
              onChange={(e) =>
                dispatch(formInputChanged("address", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              label="City"
              fullWidth
              defaultValue={city}
              onChange={(e) =>
                dispatch(formInputChanged("city", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              label="Zip / Postal code"
              fullWidth
              defaultValue={zip}
              onChange={(e) =>
                dispatch(formInputChanged("zip", e.target.value))
              }
            />
          </Grid>
        </Grid>
        <div className={buttons}>
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

export default AddressForm;
