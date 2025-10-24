import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
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

  const handleApplyUpdates = (_id) => {
    dispatch({
      type: "cart/applyTempUpdates",
      payload: { _id },
    });
  };

  return (
    <div className="w-screen bg-primary min-h-screen p-8">
      {cartItems.length === 0 ? (
        <div className="font-harlow text-brand-blue text-xl text-nowrap text-center pb-4">
          <h2 className="font-harlow text-brand-blue text-2xl text-nowrap text-center pb-4">
            Shopping Cart
          </h2>
          <h2 className="cart-empty-message">Your cart is currently empty.</h2>
          <Link
            to="/shop"
            className="font-neues flex flex-row justify-center self-center text-white text-center  bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap justify-self-center w-60 md:w-96 mb-4"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="font-harlow text-brand-blue" key={item._id}>
              <div className="cart-items-summary">
                <div className="text-center">
                  <p className="text-left">Item:</p>
                  <img
                    className="justify-items-center p-12 md:p-0 md:h-32 md:w-32 object-center"
                    src={item.image}
                    alt="Product"
                  />
                  <p className="pb-4">{item.productName}</p>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="pb-4 underline"
                  >
                    Remove
                  </button>
                  <p>£{item.price}</p>
                </div>
                <div className="text-center">
                  <input
                  className="w-32 m-4"
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

                  <div className="font-harlow text-brand-blue py-8 text-end">{`Total Price: £${totalPrice}`}</div>
                  <button
                    onClick={() => handleApplyUpdates(item._id)}
                    className="font-neues flex flex-row justify-center self-center text-white text-center  bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap w-full md:w-24 mb-4"
                  >
                    Update
                  </button>
                  <button className="font-neues flex flex-row justify-center self-center text-white text-center bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap w-full md:w-24 mb-4">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
