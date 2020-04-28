import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,
} from "../actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  orderTotal: {
    marginTop: "1em",
    textAlign: "right",
  },
});

const CartItemsTable = () => {
  const classes = useStyles();
  const { cartItems, orderTotal } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Product</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(({ id, title, count, total }, idx) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell>{title}</TableCell>
                <TableCell align="right">{count}</TableCell>
                <TableCell align="right">${total}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => dispatch(productAddedToCart(id))}
                  >
                    <AddCircleIcon />
                  </IconButton>
                  <IconButton
                    color="default"
                    onClick={() => dispatch(productRemovedFromCart(id))}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => dispatch(allProductsRemovedFromCart(id))}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" className={classes.orderTotal}>
        Total: ${orderTotal}
      </Typography>
    </>
  );
};

export default CartItemsTable;
