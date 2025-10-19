import React from "react";

function Cart() {
  return (
    <div className="div cart-page-container">
      <h1 className="cart-title">Your Cart</h1>
      <p className="cart-empty-message">Your cart is currently empty.</p>
      <button className="continue-shopping-button">Continue Shopping</button>
      <button className="checkout-button">Checkout</button>
      <div className="cart-items-list"></div>
    </div>
  );
}

export default Cart;
