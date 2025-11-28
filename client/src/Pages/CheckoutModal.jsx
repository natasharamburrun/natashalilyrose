import React from 'react'
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
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

  return (
    <ReactModal
      isOpen={isOpen}
      onClose={closeModal}
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center md:justify-end top-20 lg:top-10"
      className="relative bg-white shadow-md w-[95%] max-w-lg max-h-[90vh] overflow-hidden outline-none h-full"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-neues text-brand-blue text-md md:text-lg font-semibold">Your Basket</h3>
        <button onClick={onClose}>
          <IoCloseOutline />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex justify-between p-12 font-neues text-brand-blue text-md md:text-lg text-nowrap text-center pb-4">
          <h2 className="p-1">Your cart is currently empty.</h2>
        </div>
      ) : (
        <div className="flex flex-col max-h-[calc(80vh-64px)]">
          <div className="overflow-auto p-4 space-y-4">
            {cartItems.map((item) => (
              <div className="font-harlow text-brand-blue" key={item._id}>
                <div className="cart-items-summary">
                  <div className="text-center">
                    <div className="flex justify-self-center items-center w-full">
                      <div className="flex items-center gap-3 py-3">
                        <div className="">
                          <img
                            className="p-1 object-center"
                            src={item.image}
                            alt="Product"
                            width="96"
                            height="96"
                          />
                        </div>
                        <div className="font-neues text-brand-blue text-wrap text-left text-sm">
                          <p className="max-w-lg ">{item.productName}</p>
                          <p>QTY: {item.quantity}</p>
                          <p>£{item.price}</p>
                          <button
                            onClick={() => handleRemoveItem(item._id)}
                            className="pb-4 underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky bottom-0 bg-white pt-4 px-4 border-t">
            <div className="text-center">
              <div className="font-neues text-brand-blue py-12 text-md font-semibold text-end">{`SUBTOTAL £${totalPrice}`}</div>
              <Link
                to="/cart"
                onClick={onClose}
                className="font-neues flex flex-row justify-center self-center text-white text-center bg-brand-black focus:ring-4 focus:ring-brand-white-300 font-medium text-md px-5 py-3 text-nowrap w-full md:w-38 mb-4 mr-4"
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      )}
    </ReactModal>
  );
}

export default CheckoutModal
