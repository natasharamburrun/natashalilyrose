import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
  useSelector((state) => console.log("Cart State:", state));
  const dispatch = useDispatch();

  const handleRemoveItem = (_id) => {
    dispatch({ type: "cart/removeFromCart", payload: _id });
  };

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <div className="cart-items-summary">
            <p>{item.productName}</p>
            <img src={item.image} alt="Product" />
            <p>Price: £{item.price}</p>
          </div>
          <div className="cart-items-quantity">
            <input type="number" min="1" defaultValue={item.quantity} />
            <p>Quantity: {item.quantity}</p>
            <button className="update-quantity-button">Update Quantity</button>
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="remove-item-button"
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
      {cartItems.length === 0 && (
        <p className="cart-empty-message">Your cart is currently empty.</p>
      )}
      <div className="Cart-total">{`Total Price: £${totalPrice}`}</div>
      <Link to="/" className="continue-shopping-button">
        Continue Shopping
      </Link>
      <Link className="checkout-button">Checkout</Link>
      <div className="cart-items-list"></div>
    </div>
  );
}

export default Cart;
