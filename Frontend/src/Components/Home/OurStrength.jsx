import React, { useEffect } from "react";
import OutStrength1 from "../../pictures/Home/OurStrength/OurStrength-banner-1.jpg";
import OutStrength2 from "../../pictures/Home/OurStrength/OurStrength-banner-2.jpg";
import OutStrength3 from "../../pictures/Home/OurStrength/OurStrength-banner-3.jpg";
import OutStrength4 from "../../pictures/Home/OurStrength/OurStrength-banner-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function OurStrength() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <div className="text-white text-center uppercase mt-20">
        <h1 className=" text-6xl z-100 mb-2 font-extrabold">
          Our <span className="text-[#ce9233]">Strength</span>{" "}
        </h1>
        <p className="text-xl font-bold " style={{ letterSpacing: "0.1em" }}>
          WELDWELL ENGINEERING COMPANY
        </p>
      </div>
      <div className="flex  w-[100%] px-40 mt-10">
        <div className="  text-white w-[50%]" data-aos="fade-right">
          <div className="flex ">
            <div className="w-[20vw] bg-[#2b2c2e] flex flex-col items-center justify-center text-center">
              <h1 className="bg-[#2b2c2e] text-2xl font-extrabold">
                <span className="text-[#ce9233] bg-[#2b2c2e]">Our</span>{" "}
                Strength
              </h1>
              <p className="bg-[#2b2c2e] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                saepe.
              </p>
            </div>
            <img src={OutStrength1} className="w-[20vw] h-[20vw]" />
          </div>
        </div>
        <div className=" text-white w-[50%]" data-aos="fade-left">
          <div className="flex ">
            <div className="w-[20vw] bg-[#ce9233] flex flex-col items-center justify-center text-center">
              <h1 className="bg-[#ce9233] text-2xl font-extrabold">
                <span className="text-[#2b2c2e] bg-[#ce9233]">Our</span>{" "}
                Strength
              </h1>
              <p className="bg-[#ce9233] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nulla.
              </p>
            </div>
            <img src={OutStrength2} className="w-[20vw] h-[20vw]" />
          </div>
        </div>
      </div>
      <div className="flex w-[100%]  px-40 ">
        <div className="w-[50%] text-white" data-aos="fade-right">
          <div className="flex  ">
            <img src={OutStrength3} className="w-[20vw] h-[20vw]" />
            <div className="w-[20vw] bg-[#2b2c2e] flex flex-col items-center justify-center text-center">
              <h1 className="bg-[#2b2c2e] text-2xl font-extrabold">
                <span className="text-[#ce9233] bg-[#2b2c2e]">Our</span>{" "}
                Strength
              </h1>
              <p className="bg-[#2b2c2e] px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                incidunt?
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] " data-aos="fade-left">
          <img src={OutStrength4} className="h-[20vw]" />
        </div>
      </div>
    </div>
  );
}
