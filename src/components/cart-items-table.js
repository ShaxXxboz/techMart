import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CartItemsTable = () => {
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.shoppingCart);

  console.log(cartItems);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Product</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Total Price</TableCell>
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
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartItemsTable;
