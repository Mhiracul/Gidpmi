import React from "react";
import who from "../../assets/who.jpeg";
const About = () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto lg:px-0 px-5 py-20">
        <div className="flex lg:flex-row flex-col items-center gap-10">
          <div className="grid grid-cols-3 gap-2 lg:w-[50%] w-full">
            <img src={who} alt="" />
            <img src={who} alt="" />
            <img src={who} alt="" />
          </div>

          <div className="lg:w-1/2 w-full font-mont text-[#150E1F] ">
            <h1 className="font-mont mb-5 font-bold text-3xl capitalize text-black">
              Who We Are
            </h1>

            <p className="  text-[#150E1F] text-sm">
              {" "}
              God's Intervention Deliverance Prophetic Ministry, as we are now
              known as, didn’t always use to be called this, but was called
              Green Life Deliverance Prophetic Ministry.
            </p>

            <p className="py-4  text-[#150E1F] text-sm">
              On the 25th of December 2020, God’s servant Evangelist Nkiru Obum,
              gathered a handful of young men and women in her living room,
              somewhere in Lagos and shared the vision and assignment, God had
              entrusted to Her, with the name, God's Intervention Deliverance
              Prophetic Ministry
            </p>

            <p className="  text-[#150E1F] text-sm">
              And on the 4th of January 2019, the altar of God's Intervention
              Deliverance Prophetic Ministry was raised for 7 nights, with the
              program tagged, ‘7 Nights of Wonders’ at Gbagada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
