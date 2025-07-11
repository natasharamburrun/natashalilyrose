import image from "../assets/images/AdobeStock_image2.jpeg";

function HomePage() {
  return (
    <div className="">
      <div className="">
        <img className="w-full" src={image}></img>
        <div className="p-20 text-center">
          <h3 className="hero-intro">Shop the collection</h3>
          <a
            href="/shop"
            className="button primary-button"
            alt="call to action button to take you to the shop page"
          >
            SHOP
          </a>
        </div>
      </div>
      <div className="about-wrapper">
        <p className="about-business">
          Natasha Lily Rose creates timeless, classic and handmade jewellery
          that carries sentimental value and can be passed down through
          generations as cherished heirlooms.
        </p>
        <a
          href="/about"
          className="button secondary-button"
          alt="call to action button to take you to the about page"
        >
          Brand ethos
        </a>
      </div>
    </div>
  );
}

export default HomePage;
