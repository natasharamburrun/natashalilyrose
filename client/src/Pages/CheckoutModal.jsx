import React from 'react'
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { closeModal } from "../Features/modalSlice";


function CheckoutModal() {
  const dispatch = useDispatch();
  const {
    items: cartItems, totalPrice,
  } = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal?.isOpen ?? false);
  
  const onClose = () => {
      dispatch(closeModal());
    };

  const handleRemoveItem = (_id) => {
    dispatch({ type: "cart/removeFromCart", payload: _id });
  };


  console.log({ cartItems, totalPrice });
  return (
    <ReactModal
      isOpen={isOpen}
      onClose={closeModal}
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-end"
      className="relative bg-white rounded-lg shadow-lg w-[95%] max-w-2xl max-h-[80vh] overflow-hidden outline-none h-full"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-lg font-semibold">Your Cart</h3>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex justify-between p-12 font-neues text-brand-blue text-xl text-nowrap text-center pb-4">
          <h2 className="p-4">Your cart is currently empty.</h2>
        </div>
      ) : (
        <div className="flex flex-col max-h-[calc(80vh-64px)]">
          <div className="overflow-auto p-4 space-y-4">
            {cartItems.map((item) => (
              <div className="font-harlow text-brand-blue" key={item._id}>
                <div className="cart-items-summary">
                  <div className="text-center">
                    <div className="flex justify-self-center items-center border-b border-gray-300 w-full">
                      <div className="flex items-center gap-4 py-3">
                        <div className="">
                          <img
                            className="h-42 w-42 p-6 object-center"
                            src={item.image}
                            alt="Product"
                            width="150"
                            height="150"
                          />
                          <button
                            onClick={() => handleRemoveItem(item._id)}
                            className="pb-4 underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="text-wrap text-left">
                          <p className="max-w-lg ">{item.productName}</p>
                          <p>Quantity: {item.quantity}</p>
                          <p>£{item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky bottom-0 bg-white pt-4 -mx-4 px-4 border-t">
            <div className="">
              <div className="font-harlow text-brand-blue py-12 text-2xl text-end">{`SubTotal Price: £${totalPrice}`}</div>
              <Link to="/cart" onClick={onClose} className="mr-4">
                CHECKOUT
              </Link>
              <button
                className=""
                onClick={onClose}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      )}
    </ReactModal>
  );
}

export default CheckoutModal
