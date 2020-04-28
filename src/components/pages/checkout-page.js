import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import { AddressForm, PaymentForm, Review } from "../forms";
import Typography from "@material-ui/core/Typography";
import { apiServiceContext } from "../contexts";
import { formSubmitted } from "../../actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

const getStepContent = (step, handleBack, handleNext, buttonStyles) => {
  switch (step) {
    case 0:
      return (
        <AddressForm handleNext={handleNext} buttonStyles={buttonStyles} />
      );
    case 1:
      return (
        <PaymentForm
          handleBack={handleBack}
          handleNext={handleNext}
          buttonStyles={buttonStyles}
        />
      );
    case 2:
      return (
        <Review
          handleBack={handleBack}
          handleNext={handleNext}
          buttonStyles={buttonStyles}
        />
      );
    default:
      throw new Error("Unknown step");
  }
};

const CheckoutPage = () => {
  const { paper, stepper, buttons, button } = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const apiService = useContext(apiServiceContext);
  const { cartItems } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      //Send data when the form is filled
      formSubmitted(apiService, dispatch, cartItems);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  /* If cart is empty  */
  if (cartItems.length === 0 && activeStep !== steps.length) {
    return (
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Nothing to checkout. Select some products first
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <Paper className={paper}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. You can track it with any postal
                service once we ship it.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, handleBack, handleNext, {
                buttons,
                button,
              })}
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </React.Fragment>
  );
};

export default CheckoutPage;
