import { combineReducers } from "redux";
import shop from "../api/shop";
import products, * as fromProducts from "./products";
import cart, * as fromCart from "./cart";

export default combineReducers({
  cart,
  products
});

/**
 * cart
 */
const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getLineTotal = (state, id) => {
  const price = getProduct(state, id).price
  const quantity = getQuantity(state, id)
  return (price * quantity).toFixed(2)
}

export const getCartProducts = state => 
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
    lineTotal: getLineTotal(state, id)
  }));
