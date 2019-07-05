/**
 * Products in an array
 */
const products = [
  {
    name: "Sledgehammer",
    price: 125.76
  },
  {
    name: "Axe",
    price: 190.51
  },
  {
    name: "Bandsaw",
    price: 562.14
  },
  {
    name: "Chisel",
    price: 13.9
  },
  {
    name: "Hacksaw",
    price: 19.45
  }
];

const cartState = {
  addedIds: JSON.parse(localStorage.getItem('react-addedIds')),
  quantityById: JSON.parse(localStorage.getItem('react-quantity'))
};

const TIMEOUT = 100;

export default {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(products), timeout || TIMEOUT),
  getCart: (cb, timeout) =>
    setTimeout(() => cb(cartState), timeout || TIMEOUT)
};
