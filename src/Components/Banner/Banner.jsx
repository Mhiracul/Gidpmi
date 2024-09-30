import React from "react";
import hero from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Banner = () => {
  return (
    <div
      className="w-full bg-white h-full font-quicksand relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="py-20 ">
        <div className="flex md:flex-row justify-center items-center  text-white flex-col ">
          <div className="container relative px-10  py-20 mx-auto ">
            <div className="flex items-center flex-col">
              <p className="md:text-4xl py-3 uppercase text-xl leading-7 font-semibold">
                WELCOME TO{" "}
              </p>
              <h1 className="text-white md:leading-[70px] font-mont text-center leading-8 md:text-7xl text-xl font-extrabold">
                GOD'S INTERVENTION DELIVERANCE PROPHETIC MINISTRY
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
