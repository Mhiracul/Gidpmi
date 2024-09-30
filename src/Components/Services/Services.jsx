import React from "react";
import kneel from "../../assets/kneel.png";
const Services = () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto md:px-0 px-5 py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-mont text-center text-[150E1F]">
              Our Services
            </h1>
            <div className="bg-[#000] w-20 h-[0.9px]"></div>
          </div>
          <h1 className="font-mont text-center max-w-md  text-black leading-8 md:text-4xl text-xl font-extrabold">
            Keeping our church running smoothly
          </h1>
        </div>

        <div className="md:grid-cols-2 grid-cols-1 mt-10 gap-4 grid">
          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  Mondays: Hour of Mercy
                </h1>
                <p className="md:text-lg text-xs text-[#808080] font-light">
                  6AM - 7AM
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  Tuesdays: Counselling
                </h1>
                <p className="md:text-lg text-xs text-[#808080] font-light">
                  9AM - 12 Noon
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  Wednesday: Mountain of Solutions
                </h1>

                <p className="md:text-lg text-xs text-[#808080] font-light">
                  9AM - 12 Noon
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  2nd week of every month - <br /> harvest and Feast of Miracles
                </h1>
                <p className="md:text-lg text-xs text-[#808080] font-light">
                  Wednesday - Friday: 11PM - 2AM
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  Sundays: Prophetic Service
                </h1>
                <p className="md:text-lg text-xs text-[#808080] font-light">
                  6AM - 7AM
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#ccc] rounded-md ">
            <div className="flex gap-4 px-4 py-4 items-center">
              <div className="w-[25%]">
                <img
                  className="rounded-md max-w-[100%] h-auto"
                  src={kneel}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold font-mont text-sm md:text-xl">
                  Sunday School/Celebration Service
                </h1>
                <p className="md:text-lg text-xs text-[#808080] font-light">
                  8AM - 11AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
