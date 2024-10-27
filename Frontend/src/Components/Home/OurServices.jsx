import React, { useEffect } from "react";
import AboutHomeBanner1 from "../../pictures/Home/About/About-Home-banner-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative overflow-y-auto "
      style={{ backgroundImage: `url(${AboutHomeBanner1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-10 text-white flex flex-col items-center justify-center">
        {/* Title Section */}
        <div
          className="text-center text-white mb-20 uppercase z-100 underline-offset-1 "
          data-aos="zoom-in"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl z-100 mb-5 font-extrabold">
            Our <span className="text-[#ce9233]">services</span>
          </h1>
          <p className="text-xl font-bold" style={{ letterSpacing: "0.1em" }}>
            WELDWELL ENGINEERING COMPANY
          </p>
          <p className="border-b border-[#ce9233] mt-4"></p>
        </div>

        {/* Service Items Section */}
        <div
          className="flex flex-wrap gap-10 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
          data-aos="zoom-in"
        >
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="flex items-center flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <h1 className="text-center text-2xl sm:text-3xl font-bold">
                ARC <span className="text-[#ce9233]">Welding</span> Rectifier
              </h1>
              <p className="text-center font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates, cumque.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
