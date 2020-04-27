import React from "react";
import ProductList from "../product-list";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "2em",
    marginBottom: "2em",
  },
});

const ProductsPage = ({ categoryId, heading }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.heading}>
        {heading}
      </Typography>
      <ProductList categoryId={categoryId} />
    </>
  );
};

export default ProductsPage;
