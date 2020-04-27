const updateProductList = (state, action) => {
  if (state === undefined) {
    return {
      products: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        products: [],
        loading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.productList;
  }
};

export default updateProductList;
