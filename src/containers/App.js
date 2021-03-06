import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductsContainer from "../containers/ProductsContainer";
import CartContainer from "../containers/CartContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">VR-FrontendTest-v1.1</h2>
      </header>
      <section className="App-section">
        <ProductsContainer />
        <CartContainer />
      </section>
    </div>
  );
}

export default App;
