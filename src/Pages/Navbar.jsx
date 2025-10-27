import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="sticky top-10 md:top-12 z-10 w-full flex-no-wrap bg-primary md:flex md:flex-start">
      <div className="p-4 md:p-8 justify-items-between-items-center items-center ">
        <Link to="/">
          <h1 className="font-harlow font-bold text-brand-blue leading-3 text-center m-7 md:pb-6 md:m-auto text-2xl md:text-3xl lg:text-4xl text-wrap-mode: nowrap;">
            NATASHA LILY ROSE
          </h1>
        </Link>
        <div className="">
          <ul className="font-neues text-lg tracking-wider text-brand-blue hidden md:flex flex-row justify-start items-center text-center gap-12">
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/about">About</Link>
            </li>
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <i
            className="bx bx-menu md:hidden block curser-pointer absolute top-6 left-0 pt-4 pl-4"
            onClick={() => setNavbarOpen(!navbarOpen)}
          ></i>
          <div
            className={`static md:hidden top-19 left-0 w-full bg-primary flex flex-col items-center font-semibold text-lg leading-8 tracking-wide transform transition-transform ${
              navbarOpen ? "opacity-100" : "opacity-0 hidden"
            } `}
            style={{ transition: "transform 0.2s ease, opacity 0.2s ease" }}
          >
            <li className="font-neues text-brand-blue list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="font-neues text-brand-blue list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/about">About</Link>
            </li>
            <li className="font-neues text-brand-blue list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-9 right-4 text-md md:text-lg md:top-12 md:right-12 text-brand-blue tracking-wide md:tracking-widest">
          <Link to="/cart">
            <div className="flex items-center font-neues font-bold">
              <i className="bx  bx-shopping-bag"></i>
              <div className="">({cartItems.length})</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
