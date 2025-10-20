import { Link } from "react-router-dom";

export function ItemCard({ product }) {
  return (
    <div className="justify-center m-10 p-3 max-w-sm bg-white">
      <Link to={`/product/${product._id}`} className="">
        <img
          className="h-sm w-sm md:max-h-xl md:w-xl flex justify-self-center"
          src={product.image}
        ></img>
        <section>
          <h2 className="font-neues font-bold text-brand-blue leading-3 text-1xl md:text-2xl">
            {product.productName}
          </h2>
          <p className="font-neues font-bold text-brand-blue leading-3 text-md">
            {product.productDescription}
          </p>
          <h3 className="font-neues font-light text-brand-blue leading-3 text-3xl my-3">
            {product.price}
          </h3>
        </section>
      </Link>
    </div>
  );
}
