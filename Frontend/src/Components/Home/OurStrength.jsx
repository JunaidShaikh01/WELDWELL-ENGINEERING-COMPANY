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
      duration: 2500, // Animation duration
      offset: 100,    // Offset value for triggering animations
      once: true,     // Animation runs only once
    });
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-40 overflow-hidden"> {/* Prevent overflow */}
      {/* Title Section */}
      <div className="text-white text-center uppercase mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl z-100 mb-2 font-extrabold">
          Our <span className="text-[#ce9233]">Strength</span>
        </h1>
        <p className="text-xl font-bold" style={{ letterSpacing: "0.1em" }}>
          WELDWELL ENGINEERING COMPANY
        </p>
      </div>

      {/* Strength Items Section */}
      <div className="flex flex-col md:flex-row mt-10 gap-4 md:gap-0">
        {/* Item 1 */}
        <div className="flex w-full  md:w-1/2 text-white" data-aos="fade-right">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col items-center w-full justify-center text-center md:w-1/2 bg-[#2b2c2e] p-4">
              <h1 className="text-2xl font-extrabold">
                <span className="text-[#ce9233]">Our</span> Strength
              </h1>
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                saepe.
              </p>
            </div>
            <img src={OutStrength1} className="w-full md:w-1/2 h-auto" alt="Strength 1" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex w-full md:w-1/2 text-white" data-aos="fade-left">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col items-center justify-center text-center  w-full md:w-1/2 bg-[#ce9233] p-4">
              <h1 className="text-2xl font-extrabold">
                <span className="text-[#2b2c2e]">Our</span> Strength
              </h1>
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nulla.
              </p>
            </div>
            <img src={OutStrength2} className="w-full md:w-1/2 h-auto" alt="Strength 2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-2 md:mt-0 md:flex-row gap-4 md:gap-0">
        {/* Item 3 */}
        <div className="flex w-full md:w-1/2 text-white" data-aos="fade-right">
          <div className="flex w-full flex-col md:flex-row">
            <img src={OutStrength3} className="w-full md:w-1/2 h-auto" alt="Strength 3" />
            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 bg-[#2b2c2e] p-4">
              <h1 className="text-2xl font-extrabold">
                <span className="text-[#ce9233]">Our</span> Strength
              </h1>
              <p className="px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                incidunt?
              </p>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex w-full md:w-1/2" data-aos="fade-left">
          <img src={OutStrength4} className="w-full h-auto" alt="Strength 4" />
        </div>
      </div>
    </div>
  );
}
