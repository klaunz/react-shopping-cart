import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsContainer from '../containers/ProductsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Shopping Cart Example</h2>
      </header>
      <section className="App-section">
        <ProductsContainer />
      </section>
    </div>
  );
}

export default App;
