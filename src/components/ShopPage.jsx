import { useState, useEffect } from "react";
import { getProducts } from "../api";
import { ItemCard } from "../components/ItemCard";

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadAllStock() {
      const data = await getProducts();
      setProducts(data);
    }
    loadAllStock();
  }, []);

  return (
    <div className="shop-content">
      <div className="shop-items">
        {products.map((product) => {
          return <ItemCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
