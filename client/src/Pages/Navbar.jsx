import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { openModal } from "../Features/modalSlice"


const Navbar = () => {
   const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarClose, setNavbarClose ] = useState(false)

  return (
    <div className="sticky top-10 md:top-12 z-10 w-full flex-no-wrap bg-primary md:flex md:flex-start">
      <div className="p-4 md:p-8 justify-items-between-items-center items-center ">
        <Link to="/">
          <h1 className="font-harlow font-bold text-brand-blue leading-3 text-center m-7 md:pb-6 md:m-auto text-2xl md:text-3xl lg:text-4xl text-wrap-mode: nowrap;">
            NATASHA LILY ROSE
          </h1>
        </Link>
        <div className="">
          <ul className="font-neues text-md tracking-wider text-brand-blue hidden md:flex flex-row justify-start items-center text-center gap-12">
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="list-none text-center curser-pointer hover:text-brand-brown">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <button
            className="md:hidden absolute top-6 left-0
            pt-4 pl-4"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu />
          </button>
          <ul
            className={`static md:hidden top-19 left-0 w-full bg-primary flex flex-col items-left font-semibold text-md leading-8 tracking-wide transform transition-transform pl-5 ${
              navbarOpen ? "opacity-100" : "opacity-0 hidden"
            } `}
            style={{ transition: "transform 0.2s ease, opacity 0.2s ease" }}
          >
            <button
              className="absolute top-2 right-4"
              onClick={() => setNavbarOpen(false)}
            >
              <IoCloseOutline />
            </button>
            <li className="font-neues text-brand-blue list-none text-left curser-pointer hover:text-brand-brown">
              <Link to="/shop" onClick={() => setNavbarOpen(false)}>
                SHOP
              </Link>
            </li>
            <li className="font-neues text-brand-blue list-none text-left curser-pointer hover:text-brand-brown">
              <Link to="/about" onClick={() => setNavbarOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="font-neues text-brand-blue list-none text-left curser-pointer hover:text-brand-brown">
              <Link to="/contact" onClick={() => setNavbarOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="absolute top-9 right-4 text-md md:text-lg md:top-12 md:right-12 text-brand-blue tracking-wide md:tracking-widest">
          <button onClick={() => dispatch(openModal())}>
            <div className="flex items-center font-neues font-bold">
              <FaBagShopping />
              <div className="">({cartItems.length})</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
