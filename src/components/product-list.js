import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./product-card";
import { apiServiceContext } from "./contexts";

const ProductList = ({ categoryId = undefined }) => {
  const apiService = useContext(apiServiceContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);

  useEffect(() => {
    fetchData(apiService, dispatch, "products");
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product, idx) => {
        if (categoryId !== undefined && categoryId !== product.category) {
          return null;
        }
        return (
          <Grid key={idx} item md={3} xs={12}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
