// import { getProduct } from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../Features/SingleProductSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useSelector((state) => console.log(state));
  const { item: product, status } = useSelector((state) => state.singleProduct);

  useEffect(() => {
    if (status === "idle" && id && id !== product.id) {
      dispatch(fetchItemById(id));
    }
  }, [id, product.id, dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading products.</div>;
  }

  return (
    <div>
      <div className="shop-content">
        <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-4 md-p-5 lg:grid-cols-2">
          <div>
            <h1>{product.productName}</h1>
            <p>{product.productDescription}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
          <div>
            <img src={product.image} alt={`Image of ${product.productName}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
