import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
  console.log("Cart Items:", cartItems, tempItems, totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (_id) => {
    dispatch({ type: "cart/removeFromCart", payload: _id });
  };

  const handleUpdateQuantity = (_id, quantity) => {
    dispatch({
      type: "cart/updateTempItemQuantity",
      payload: { _id, quantity },
    });
  };

  const handleApplyUpdates = () => {
    tempItems.forEach((item) => {
      dispatch({
        type: "cart/applyTempUpdates",
        payload: { _id: item._id },
      });
    });
  };

  return (
    <div className="cart-page-container">
      {cartItems.length === 0 ? (
        <div className="cart-empty-message-container">
          <h2 className="cart-empty-message">Your cart is currently empty.</h2>
          <Link to="/shop" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <h1 className="cart-title">Your Cart</h1>
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart-items-summary">
                <p>{item.productName}</p>
                <img src={item.image} alt="Product" />
                <p>Price: £{item.price}</p>
              </div>
              <div className="cart-items-quantity">
                <input
                  type="number"
                  min="1"
                  value={
                    tempItems.find((tempItem) => tempItem._id === item._id)
                      ?.quantity || item.quantity
                  }
                  onChange={(e) =>
                    handleUpdateQuantity(item._id, parseInt(e.target.value))
                  }
                />
                <button
                  onClick={handleApplyUpdates}
                  className="update-quantity-button"
                >
                  Update
                </button>
              </div>
              <div className="cart-page-remove-item">
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="remove-item-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="Cart-total">{`Total Price: £${totalPrice}`}</div>

          <Link className="checkout-button">Checkout</Link>
          <div className="cart-items-list"></div>
        </div>
      )}
    </div>
  );
}

export default Cart;
