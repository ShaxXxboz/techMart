import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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

const Review = ({ handleBack, handleNext, buttonStyles }) => {
  const classes = useStyles();
  const { buttons, button } = buttonStyles;
  const { cartItems, orderTotal } = useSelector((state) => state.shoppingCart);

  const { fullName, address, city, zip } = useSelector(
    (state) => state.formData
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map(({ title, count, total }, idx) => (
          <ListItem className={classes.listItem} key={idx}>
            <ListItemText primary={`${title} | x${count}`} />
            <Typography variant="body2">${total}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${orderTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{fullName}</Typography>
          <Typography gutterBottom>{address}</Typography>
          <Typography gutterBottom>
            {city} {zip}
          </Typography>
        </Grid>
      </Grid>
      <div className={buttons}>
        <Button onClick={handleBack} className={button}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={button}
        >
          Confirm Order
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Review;
