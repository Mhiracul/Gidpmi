import React from "react";
import logo from "../../assets/my-logo.png";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { LuDot } from "react-icons/lu";

import { PiPhoneCall } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowLeft,
  MdOutlineArrowOutward,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#04123F] font-outfit text-white py-8">
      <div className="container mx-auto lg:px-20 md:px-10 px-10">
        {/* First Footer Section */}

        {/* Second Footer Section */}
        <div className="flex w-full flex-col md:flex-row md:items-center items-center justify-between">
          <div className=" mb-8 flex flex-col lg:items-start items-center md:mb-0">
            <div className="footer-logo mb-4">
              <a href="">
                <img src={logo} alt="Kacha" className="w-28" />
              </a>
            </div>
            <p
              className="mb-4 max-w-xs  font-extralight text-sm"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Follow us on our social media pages
            </p>
            <div className="social-icons">
              <ul className="flex space-x-4">
                <li className="border border-[#f5b754] rounded-full p-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white"
                  >
                    <FaFacebookF />{" "}
                  </a>
                </li>
                <li className="border border-[#f5b754] rounded-full p-4">
                  <a
                    href="https://www.instagram.com/kacha_autos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  hover:text-white"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="border border-[#f5b754] rounded-full p-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white"
                  >
                    <FaTiktok />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul
              className=" font-extralight flex flex-col lg:items-end items-center  text-sm"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Gallery
                </a>
              </li>
              <li>
                <a href="" className="hover:underline   gap-[0.4px]">
                  Locate Us
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Counselling
                </a>
              </li>
            </ul>
          </div>
          <div className=" mb-8 md:mb-0 flex flex-col lg:items-end items-center">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul
              className=" font-extralight  flex flex-col lg:items-end items-center text-sm"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  About the Ministry
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  About the Minister
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Programs & Event
                </a>
              </li>

              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className=" mb-8 md:mb-0 flex flex-col lg:items-end items-center">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul
              className=" font-extralight  flex flex-col lg:items-end items-center text-sm"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Share Testimony
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Prayer Request
                </a>
              </li>
              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Chlild Dedication
                </a>
              </li>

              <li>
                <a href="" className="hover:underline  gap-[0.4px]">
                  Online Giving
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t text-center border-[#282828] pt-4">
          <div className="text-center text-sm font-light">
            <p className="mb-0 text-[#d8d8d8] ">
              ©2024{" "}
              <a href="/" className="hover:underline  text-[#d8d8d8]">
                God's Intervention Deliverance Prophetic Ministry
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
