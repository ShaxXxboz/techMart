import React from "react";
import Typography from "@material-ui/core/Typography";
import ProductList from "../product-list";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "2em",
    marginBottom: "2em",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        The coolest shop
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <Typography variant="h5" className={classes.heading}>
        Popular
      </Typography>
      <ProductList />
    </>
  );
};

export default HomePage;
