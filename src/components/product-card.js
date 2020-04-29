import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { productAddedToCart } from "../actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  cardActionArea: {
    overflow: "hidden",
  },
  media: {
    height: "15em",
  },
  productTitle: {
    height: "3em",
    overflow: "hidden",
    fontSize: "1.5em",
  },
  productPrice: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { id, title, price, image } = product;
  const dispatch = useDispatch();

  return (
    <Card className={classes.productCard}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.productTitle}>
          <Typography gutterBottom variant="body1">
            {title}
          </Typography>
        </CardContent>
        <CardContent className={classes.productPrice}>
          <Typography gutterBottom variant="body2">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(productAddedToCart(id));
          }}
        >
          Add To Cart
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
