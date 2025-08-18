import { Link } from "react-router-dom";

export function ItemCard({ product }) {
  return (
    <div className="justify-center m-10 p-3 max-w-xs bg-white">
      <Link to={`/shop/${product._id}`} className="">
        <img
          className="h-28 w-83 flex justify-self-center"
          src={product.image}
        ></img>
        <section>
          <h3 className="font-bold text-2xl">{product.productName}</h3>
          <p className="text-md">{product.productDescription}</p>
          <h3 className="font-light text-3xl my-3">{product.price}</h3>
        </section>
      </Link>
    </div>
  );
}
