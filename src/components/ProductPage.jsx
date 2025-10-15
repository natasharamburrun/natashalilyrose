import { getProduct } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      <div className="shop-content">
        <div className="bg-primary p-3 md:grid md:grid-cols-2 md:gap-4 md-p-5 lg:grid-cols-3">
          <h1>{product.productName}</h1>
          <p>{product.productDescription}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={`Image of ${product.productName}`} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
