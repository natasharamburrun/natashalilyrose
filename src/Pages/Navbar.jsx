import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/branding/logo-small-final-packaging_Blue.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // const openMenu = () => {
  //   setNavbarOpen(!navbarOpen);
  // };
  return (
    <div className="sticky top-0 flex-no-wrap z-10 bg-primary">
      <div className="p-4 justify-items-between-items-center items-center">
        <Link to="/">
          <img
            src={logo}
            className="hidden md:flex justify-self-center w-16 h-15"
            alt="logo"
          />
          <div className="font-harlow text-brand-blue leading-3 text-center m-7 text-xl lg:text-4xl text-wrap-mode: nowrap;">
            <h1>NATASHA LILY ROSE</h1>
          </div>
        </Link>
        <div className="">
          <ul className="font-neues text-lg tracking-wider text-brand-blue hidden md:flex flex-row justify-center items-center text-center gap-12">
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
    </div>
  );
};

export default Navbar;
