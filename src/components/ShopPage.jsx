import { useEffect } from "react";
// import { getProducts } from "../api";
import { ItemCard } from "../components/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Features/ProductsSlice";

function ShopPage() {
  const { items: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading products.</div>;
  }

  return (
    <div className="shop-content">
      <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-4 md-p-5 lg:grid-cols-3">
        {products.map((product) => {
          return <ItemCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
