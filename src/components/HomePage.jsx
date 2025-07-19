import image from "../assets/images/AdobeStock_image2.jpeg";

function HomePage() {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="h-screen w-screen opacity-70" style={styles}>
        <div className="h-full w-full flex flex-col px-[4rem] justify-center">
          <h3 className="flex flex-row justify-center text-blue-950 p-8 text-nowrap text-xl lg:text-2xl">
            Shop The Collection
          </h3>
          <a
            href="/shop"
            className="flex flex-row justify-center self-center text-white text-center w-24 bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
