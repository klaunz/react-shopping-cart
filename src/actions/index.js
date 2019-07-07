import shop from "../api/shop";
import * as types from "./types";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const receiveCart = cartState => ({
  type: types.RECEIVE_CART,
  cartState
});

export const loadCart = () => dispatch => {
  shop.getCart(cartState => {
    dispatch(receiveCart(cartState));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = productId => (dispatch, getState) => {
  dispatch(addToCartUnsafe(productId));
};

export const removeLineItem = (index, id) => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM,
    index,
    id
  })
};
