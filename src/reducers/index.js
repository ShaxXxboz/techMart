import updateShoppingCart from "./shopping-cart";
import updateProductList from "./product-list";
import updateCategories from "./categories";

const reducer = (state, action) => {
  return {
    productList: updateProductList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    categoriesList: updateCategories(state, action),
  };
};

export default reducer;
