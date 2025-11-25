import { useEffect } from "react";
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
      <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-3 md:p-3 lg:grid-cols-4 justify-items-center">
        {products.map((product) => {
          return <ItemCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
