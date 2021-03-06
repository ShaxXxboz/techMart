const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (product, item = {}, quantity) => {
  const { id = product.id, count = 0, title = product.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * product.price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const {
    productList: { products },
    shoppingCart: { cartItems, orderTotal },
  } = state;

  const product = products.find(({ id }) => id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);
  const updatedShoppingCart = {
    orderTotal: orderTotal + product.price * quantity,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
  sessionStorage.setItem("cartItems", JSON.stringify(updatedShoppingCart));
  return updatedShoppingCart;
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    const storage = sessionStorage.getItem("cartItems");
    if (storage) {
      return JSON.parse(storage);
    }
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "PRODUCT_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "PRODUCT_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_PRODUCTS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    case "CART_CLEARED":
      return {
        cartItems: [],
        orderTotal: 0,
      };
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
