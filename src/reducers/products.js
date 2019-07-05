import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS, ADD_TO_CART } from "../actions/types";

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state
      };
    default:
      return state;
  }
};

const getProductById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.map(product => {
          return product;
        })
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product, index) => index);
    default:
      return state;
  }
};

export default combineReducers({
  getProductById,
  visibleIds
});

export const getProduct = (state, id) => state.getProductById[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
