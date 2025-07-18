import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/branding/logo-small-final-packaging_Blue.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // const openMenu = () => {
  //   setNavbarOpen(!navbarOpen);
  // };
  return (
    <div className="sticky top-0 flex-no-wrap z-10">
      <div className="p-8 justify-items-between-items-center items-center bg-white">
        <Link to="/">
          <img
            src={logo}
            className="hidden md:flex justify-self-center w-16 h-15"
            alt="logo"
          />
          <div className="font-harlow text-blue-950 leading-3 text-center m-7 text-xl lg:text-2xl     text-wrap-mode: nowrap;">
            <h1>NATASHA LILY ROSE</h1>
          </div>
        </Link>
        <div className="">
          <ul className="font-harlow text-blue-950 hidden md:flex flex-row justify-center items-center text-center gap-12">
            <li className="list-none text-center curser-pointer">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="list-none text-center curser-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="list-none text-center curser-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <i
            className="bx bx-menu md:hidden block curser-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          ></i>
          <div
            className={`absolute md:hidden top-19 left-0 w-full bg-white flex flex-col items-center font-semibold text-lg transform transition-transform ${
              navbarOpen ? "opacity-100" : "opacity-0 hidden"
            } `}
            style={{ transition: "transform 0.2s ease, opacity 0.2s ease" }}
          >
            <li className="font-harlow text-blue-950 list-none text-center curser-pointer">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="font-harlow text-blue-950 list-none text-center curser-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="font-harlow text-blue-950 list-none text-center curser-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
