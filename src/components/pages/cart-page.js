import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CartItemsTable from "../cart-items-table";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  heading: {
    marginBottom: "1em",
  },
  checkoutButton: {
    float: "right",
    marginTop: "1em",
    marginBottom: "2em",
  },
});

const CartPage = () => {
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <Typography variant="h5" className={classes.heading}>
        Your Cart
      </Typography>
      <CartItemsTable />
      {/* If cart is empty dont display checkout Button */}
      {cartItems.length ? (
        <Button
          variant="outlined"
          component={Link}
          to={"/checkout"}
          className={classes.checkoutButton}
          color="primary"
        >
          Checkout
        </Button>
      ) : null}
    </>
  );
};

export default CartPage;
