import Footer from "../Pages/Footer";
import bannerimage1 from "../assets/images/3ring-homepage-banner.jpg";
import bannerimage2 from "../assets/images/rings-homepage-banner.jpg";
import bannerimage3 from "../assets/images/chain-homepage-banner.jpg";

function HomePage() {
  return (
    <div>
      <div className="w-screen bg-primary">
        <div className="flex flex-col md:flex-row justify-self-center lg:justify-center pb-6 md:pb-8">
          <h3 className="font-harlow font-medium flex flex-row justify-center text-blue-950  text-nowrap text-xl lg:text-5xl md:pr-8">
            <span className="font-margo text-xxl font-light pr-3 md:pr-5 pt-0.5 lg:pt-1">
              Shop
            </span>
            Collection
          </h3>
          <a
            href="/shop"
            className="flex flex-row relative top-1 justify-center h-fit self-left text-white text-center w-24 bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue focus:outline-none dark:focus:ring-blue-800 font-neues "
            alt="call to action button to take you to the shop page"
          >
            SHOP
          </a>
        </div>
        <div className="flex flex-row lg:max-w-3xl xl:max-w-5xl justify-self-center mx-6 md:mx-38">
          <div className="p-1 md:p-4 w-sm h-160px">
            <img
              className="border-2 md:border-4 border-white"
              src={bannerimage1}
              alt="A photo of the business owner working in her studio"
            />
          </div>
          <div className="p-1 md:p-4 w-sm h-200px">
            <img
              className="border-2 md:border-4 border-white"
              src={bannerimage2}
              alt="A photo of the business owner working in her studio"
            />
          </div>
          <div className="p-1 md:p-4 w-sm h-200px">
            <img
              className="border-2 md:border-4 border-white"
              src={bannerimage3}
              alt="A photo of the business owner working in her studio"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-12 md:p-8">
          <p
            className=" font-harlow
            font-medium
            flex
            flex-row
            justify-left
            text-blue-950
            text-xl
            lg:text-3xl"
          >
            Welcome to Natasha Lily Rose
          </p>
          <p
            className=" font-neues
            font-medium
            flex
            flex-row
            justify-left
            text-blue-950
            text-lg
            lg:text-2xl"
          >
            A handmade jewellery brand dedicated to creating timeless pieces.
          </p>
        </div>
      </div>
      <div className="h-screen w-screen bg-tertiary flex flex-col p-6 justify-center">
        <p className="font-neues text-md leading-8 md:text-2xl tracking-wide font-semibold text-blue-950 text-center content-center mb-1 py-[2rem] lg:p-16">
          Natasha Lily Rose is a handmade jewellery brand dedicated to creating
          timeless pieces in sterling silver, gold, and precious gemstones.
          Every design blends elegance and sentiment, crafted with care to
          become meaningful treasures that can be worn daily and one day passed
          down through generations. With an eye for detail and a love for
          storytelling through jewellery, Natasha creates heirloom-quality
          pieces that celebrate life’s moments and empower those who wear them.
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
