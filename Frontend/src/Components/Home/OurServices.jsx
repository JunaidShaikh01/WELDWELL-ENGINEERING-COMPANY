import React, { useEffect } from "react";
import AboutHomeBanner1 from "../../pictures/Home/About/About-Home-banner-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative overflow-scroll"
      style={{ backgroundImage: `url(${AboutHomeBanner1})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white flex flex-col items-center justify-center px-4 py-10 sm:py-20">
        {/* Title Section */}
        <div
          className="text-center uppercase mb-10 px-4"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">
            Our <span className="text-[#ce9233]">Services</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold">
            WELDWELL ENGINEERING COMPANY
          </p>
          <p className="border-b border-[#ce9233] mt-4 w-1/2 mx-auto"></p>
        </div>

        {/* Service Items Section */}
        <div
          className="flex flex-wrap gap-10 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
          data-aos="zoom-in"
        >
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="flex items-center flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                ARC <span className="text-[#ce9233]">Welding</span> Rectifier
              </h1>
              <p className="font-semibold">
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
