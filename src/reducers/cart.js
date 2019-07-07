import { ADD_TO_CART, RECEIVE_CART, REMOVE_ITEM } from "../actions/types";

const initialState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      if (typeof Storage !== "undefined") {
        localStorage.setItem(
          "react-addedIds",
          JSON.stringify([...state, action.productId])
        );
      }
      return [...state, action.productId];
    case RECEIVE_CART:
      return action.cartState.addedIds;
    case REMOVE_ITEM:
      state.splice(action.index, 1);
      if (typeof Storage !== "undefined") {
        localStorage.setItem("react-addedIds", JSON.stringify(state));
      }
      return state;
    default:
      // return JSON.parse(localStorage.getItem('react-addedIds'));
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      if (typeof Storage !== "undefined") {
        localStorage.setItem(
          "react-quantity",
          JSON.stringify({ ...state, [productId]: (state[productId] || 0) + 1 })
        );
      }
      return { ...state, [productId]: (state[productId] || 0) + 1 };
    case RECEIVE_CART:
      return action.cartState.quantityById;
    case REMOVE_ITEM:
      delete state[action.id];
      if (typeof Storage !== "undefined") {
        localStorage.setItem("react-quantity", JSON.stringify(state));
      }
      return state;
    default:
      // return JSON.parse(localStorage.getItem('react-quantity'));
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;

const cart = (state = initialState, action) => {
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action)
  };
};

export default cart;
