// import { getProduct } from "../api";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../Features/SingleProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";


function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item: product, error } = useSelector((state) => state.singleProduct);

 useEffect(() => {
   if (id && id !== product.id) {
     dispatch(fetchItemById(id));
   }
 }, [id, dispatch]);


 if (error) {
   return <div>Error: {error}</div>;
 }

 if (!product) {
   return <div>Loading product...</div>;
 }

  return (
    <div>
      <div className="md:w-screen md:h-screen bg-primary">
        <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-4 md-p-8 lg:grid-cols-2">
          <div>
            <LazyLoadImage
              src={product.image}
              className="w-80 flex justify-self-center"
              alt={`Image of ${product.productName}`}
            />
          </div>
          <div className="p-8 md:p-1">
            <h2 className="font-neues font-bold text-brand-blue text-2xl md:text-2xl tracking-wider mb-6">
              {product.productName}
            </h2>
            <p className="font-neues text-brand-blue text-md mb-12">
              <span className="font-bold text-lg">Description:</span>
              <br></br>
              {product.productDescription}
            </p>
            <p className="font-neues font-light text-brand-blue text-1xl my-3">
              £{product.price}
            </p>
            <p className="font-neues font-light text-brand-blue text-1xl my-3">
              Size: {product.size}
            </p>
            <p className="font-neues font-light text-brand-blue text-1xl my-3">
              <span className="font-bold text-lg">Availability:</span>
              <br></br>
              In Stock ready to ship
            </p>
            <button
              className="font-neues flex flex-row justify-center self-center text-white text-center w-24 bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap"
              alt="call to action button to take you to the cart page"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
