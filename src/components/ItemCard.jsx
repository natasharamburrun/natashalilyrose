import { Link } from "react-router-dom";

export function ItemCard({ product }) {
  return (
    <div className="item-card">
      <Link to={`/shop/${product._id}`} className="item-card-content">
        <div className="card-image">
          <img className="card-product-image" src={product.image}></img>
        </div>
        <h3>{product.productName}</h3>
        <h3>{product.productDescription}</h3>
        <h3>{product.price}</h3>
      </Link>
    </div>
  );
}
