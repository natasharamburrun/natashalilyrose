import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

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

  const handlePayment = async () => {
    try {
      const res = await fetch(`${API_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Failed to create checkout session", data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-screen bg-primary min-h-screen p-8">
      <h2 className="font-neues text-brand-blue text-4xl text-nowrap text-center pb-16">
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="font-neues text-brand-blue text-xl text-nowrap text-center pb-4">
          <h2 className="p-4">Your cart is currently empty.</h2>
          <Link
            to="/shop"
            className="font-neues flex flex-row justify-center self-center text-white text-center bg-brand-blue hover:bg-brand-blue-900 focus:ring-4 focus:ring-brand-blue-300 font-medium text-md px-5 py-3 dark:bg-brand-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap justify-self-center w-60 md:w-96 mb-4"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="font-neues text-brand-blue" key={item._id}>
              <div className="cart-items-summary">
                <div className="text-center ">
                  {/* // Mobile View */}
                  <div className="md:hidden flex justify-self-center items-center border-b border-gray-300">
                    <div className="cart-items-summary">
                      <div className="">
                        <p className="text-left">Item:</p>
                        <img
                          className="h-42 w-42 p-6 object-center"
                          src={item.image}
                          alt="Product"
                        />
                        <p className="max-w-lg text-wrap text-center">
                          {item.productName}
                        </p>
                        <button
                          onClick={() => handleRemoveItem(item._id)}
                          className="pb-4 underline"
                        >
                          Remove
                        </button>
                        <p>£{item.price}</p>

                        <div className="text-center">
                          <input
                            className="text-center w-8 m-4 border border-gray-300 rounded"
                            type="number"
                            min="1"
                            value={
                              tempItems.find(
                                (tempItem) => tempItem._id === item._id
                              )?.quantity || item.quantity
                            }
                            onChange={(e) =>
                              handleUpdateQuantity(
                                item._id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            onClick={() => handleApplyUpdates(item._id)}
                            className="underline text-left"
                          >
                            Update
                          </button>
                        </div>
                        <div>
                          <span>Total:</span>
                          {`£${item.price * (item.quantity || 1)}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* // Desktop View */}
                  <table className="table-fixed hidden md:table border-separate border-spacing-2 empty-cells-hidden mx-auto my-auto w-full border-b border-gray-300 pb-4">
                    <thead>
                      <tr className="text-center font-extrabold">
                        <th>Item:</th>
                        <th>Description</th>
                        <th>Price:</th>
                        <th>Quantity:</th>
                        <th>Total:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300 font-neues">
                        <td className="w-32 p-4">
                          <img
                            className="justify-self-center p-12 md:p-0 md:w-32 object-center"
                            src={item.image}
                            alt="Product"
                          />
                        </td>
                        <td className="text-left">
                          <p className="w-lg text-wrap text-left">
                            {item.productName}
                          </p>
                          <button
                            onClick={() => handleRemoveItem(item._id)}
                            className="underline text-left"
                          >
                            Remove
                          </button>
                        </td>
                        <td className="text-center">£{item.price}</td>
                        <td>
                          <input
                            className="text-center w-8 m-4 border border-gray-300 rounded"
                            type="number"
                            min="1"
                            value={
                              tempItems.find(
                                (tempItem) => tempItem._id === item._id
                              )?.quantity || item.quantity
                            }
                            onChange={(e) =>
                              handleUpdateQuantity(
                                item._id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            onClick={() => handleApplyUpdates(item._id)}
                            className="underline text-left"
                          >
                            Update
                          </button>
                        </td>
                        <td className="text-center">{`£${
                          item.price * (item.quantity || 1)
                        }`}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="font-neues text-brand-blue py-12 text-2xl text-end pr-5">{`Subtotal  £${totalPrice}`}</div>

            <button
              onClick={handlePayment}
              className="font-neues flex flex-row justify-center self-center text-white text-center bg-brand-black focus:ring-4 focus:ring-brand-white-300 font-medium text-md px-5 py-3 text-nowrap mb-4 mr-4 text-nowrap w-60 md:justify-self-end mb-4"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
