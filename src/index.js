import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { getAllProducts, loadCart } from "./actions";
import "./index.css";
import App from "./containers/App";

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());
store.dispatch(loadCart());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
