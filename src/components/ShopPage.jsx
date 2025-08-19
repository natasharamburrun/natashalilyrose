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
      <div className="bg-primary md:grid md:grid-cols-2 md:gap-4 md-p-5 lg:grid-cols-3">
        {products.map((product) => {
          return <ItemCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
