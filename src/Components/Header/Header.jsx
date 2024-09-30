import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { PiPhoneCallLight } from "react-icons/pi";
import logo from "../../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showCarsDropdown, setShowCarsDropdown] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="md:py-8 py-4 md:px-20 px-5">
      <header className="w-full font-quicksand rounded-2xl bg-[#fff] text-black">
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
          {/* Logo */}
          <div className="flex text-[#000]">
            <img className="md:w-16 w-14 rounded-full" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium items-center">
            <Link to="/" className="hover:text-[#f5b754] font-bold">
              Home
            </Link>
            <Link to="/" className="hover:text-[#f5b754] ">
              About
            </Link>
            <Link to="/" className="hover:text-[#f5b754] ">
              Services
            </Link>

            {/* Cars Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setShowCarsDropdown(!showCarsDropdown)}
                className="flex items-center hover:text-[#f5b754] "
              >
                E-Church <RiArrowDropDownLine className="ml-1" />
              </button>
              {showCarsDropdown && (
                <div className="absolute left-0 mt-2 bg-[#fff] z-20 text-black min-w-48 p-4 rounded-md shadow-lg">
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Share Testimony
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Prayer Request
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Online Counselling
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Child Dedication
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-[#f5b754] ">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden" onClick={handleClick}>
            {nav ? <FaTimes color="#000" /> : <FaBars color="#000" />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-1/2 z-[99999] bg-[#fff] transition-transform transform duration-300 ease-in-out ${
            nav ? "translate-y-16 " : "-translate-y-full"
          }`}
        >
          <ul className="text-black container mx-auto  px-16 text-sm font-light py-4">
            <li>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-2">
                Services
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowCarsDropdown(!showCarsDropdown)}
                className="py-2 flex justify-between items-center w-full"
              >
                E-Church <RiArrowDropDownLine color="#000" />
              </button>
              {showCarsDropdown && (
                <div className="bg-[#222] text-white px-4 py-2">
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Share Testimony
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Prayer Request
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Online Counselling
                  </Link>
                  <Link to="/" className="block py-1 hover:text-[#f5b754]">
                    Child Dedication
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/contact" className="block py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
