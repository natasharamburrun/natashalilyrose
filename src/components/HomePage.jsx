import image from "../assets/images/AdobeStock_image2.jpeg";
import Footer from "../Pages/Footer";

function HomePage() {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "700px",
  };

  return (
    <div>
      <div className="h-screen w-screen opacity-70" style={styles}>
        <div className="h-full w-full flex flex-col px-[4rem] md:px-[6rem] justify-center">
          <h3 className="font-harlow font-medium flex flex-row justify-left text-blue-950 pb-8 text-nowrap text-xl lg:text-3xl">
            Shop The Collection
          </h3>
          <a
            href="/shop"
            className="flex flex-row justify-center self-left text-white text-center w-24 bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-neues"
            alt="call to action button to take you to the shop page"
          >
            SHOP
          </a>
        </div>
      </div>
      <div className="h-screen w-screen bg-primary flex flex-col px-[4rem] justify-center">
        <p className="font-neues text-lg leading-8 md:text-4xl tracking-wide font-semibold text-blue-950 text-center content-center mb-1 py-[2rem] lg:p-16">
          Natasha Lily Rose creates timeless, classic, handmade jewellery that
          carries sentimental value and can be passed down through generations
          as cherished heirlooms.
        </p>
        <a
          href="/about"
          className="font-neues flex flex-row justify-center self-center text-white text-center w-24 bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-nowrap"
          alt="call to action button to take you to the about page"
        >
          ABOUT
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
