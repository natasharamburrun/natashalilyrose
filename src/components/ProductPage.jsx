// import { getProduct } from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../Features/SingleProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item: product } = useSelector((state) => state.singleProduct);

  useEffect(() => {
    if (id && id !== product.id) {
      dispatch(fetchItemById(id));
    }
  }, [id, product.id, dispatch]);

  return (
    <div>
      <div className="shop-content">
        <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-4 md-p-5 lg:grid-cols-2">
          <div>
            <img src={product.image} alt={`Image of ${product.productName}`} />
          </div>
          <div>
            <h2 className="font-neues font-bold text-brand-blue leading-3 text-1xl md:text-2xl">
              {product.productName}
            </h2>
            <p className="font-neues font-bold text-brand-blue leading-3 text-md">
              {product.productDescription}
            </p>
            <p className="font-neues font-light text-brand-blue leading-3 text-3xl my-3">
              £{product.price}
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
