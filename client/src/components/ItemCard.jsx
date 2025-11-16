import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


export function ItemCard({ product }) {
  return (
    <div className="justify-center m-10 p-3 max-w-sm bg-white">
      <Link to={`/product/${product._id}`} className="">
        < LazyLoadImage
          className="h-sm w-sm md:max-h-xl md:w-xl flex justify-self-center"
          src={product.image}
        />
        <section>
          <h2 className="font-neues font-bold text-brand-blue text-1xl md:text-2xl">
            {product.productName}
          </h2>
          <h3 className="font-neues font-light text-brand-blue text-1xl md:text-2xl my-3">
            £{product.price}
          </h3>
        </section>
      </Link>
    </div>
  );
}
