const dataRequested = (model) => {
  return {
    type:
      model === "products"
        ? "FETCH_PRODUCTS_REQUEST"
        : "FETCH_CATEGORIES_REQUEST",
  };
};

const dataLoaded = (data, model) => {
  return {
    type:
      model === "products"
        ? "FETCH_PRODUCTS_SUCCESS"
        : "FETCH_CATEGORIES_SUCCESS",
    payload: data,
  };
};

const dataError = (error, model) => {
  return {
    type:
      model === "products"
        ? "FETCH_PRODUCTS_FAILURE"
        : "FETCH_CATEGORIES_FAILURE",
    payload: error,
  };
};

const productAddedToCart = (productId) => {
  return {
    type: "PRODUCT_ADDED_TO_CART",
    payload: productId,
  };
};

const productRemovedFromCart = (productId) => {
  return {
    type: "PRODUCT_REMOVED_FROM_CART",
    payload: productId,
  };
};

const allProductsRemovedFromCart = (productId) => {
  return {
    type: "ALL_PRODUCTS_REMOVED_FROM_CART",
    payload: productId,
  };
};

const fetchData = (apiService, dispatch, model) => {
  dispatch(dataRequested(model));
  apiService
    .getModelData(model)
    .then((data) => dispatch(dataLoaded(data, model)))
    .catch((err) => dispatch(dataError(err, model)));
};

export {
  dataRequested,
  dataLoaded,
  dataError,
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,
  fetchData,
};
