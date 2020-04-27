import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CartItemsTable from "../cart-items-table";

const useStyles = makeStyles({
  heading: {
    marginBottom: "1em",
  },
});

const CartPage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.heading}>
        Your Cart
      </Typography>
      <CartItemsTable />
    </>
  );
};

export default CartPage;
