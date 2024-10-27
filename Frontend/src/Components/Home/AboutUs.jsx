import React, { useEffect } from "react";
import AboutHomeBanner1 from "../../pictures/Home/About/About-Home-banner-1.jpg";
import AboutHomeBanner2 from "../../pictures/Home/About/About-Home-banner-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="h-auto  lg:h-[100vh] w-full py-8 px-4 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-16 lg:px-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center justify-center overflow-hidden">
      {/* Image Section */}
      <div
        className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80%] w-full lg:w-[50%] relative"
        data-aos="fade-right"
      >
        {/* Adjusted background color for better visibility */}
        <div className="absolute top-0 left-0 h-full w-full bg-gray-800 opacity-30 z-[1]"></div>

        {/* Ensure z-index values do not overlap unintendedly */}
        <img
          className="absolute top-0 left-0 h-full w-full shadow-2xl object-cover z-[2] lg:z-[5]" // Increase z-index on large screens
          src={AboutHomeBanner2}
          alt="About Home Banner 2"
        />
        
        {/* Fixed overlapping by adjusting translate values on larger screens */}
        <img
          className="absolute top-3 sm:top-5 md:top-8 left-3 sm:left-5 md:left-8 h-full w-full object-cover z-[3] lg:z-[6] lg:transform-none" // Remove `transform` on large screens
          src={AboutHomeBanner1}
          alt="About Home Banner 1"
        />
      </div>

      {/* Text Section */}
      <div
        className="flex flex-col text-white w-full lg:w-[50%] gap-4 text-center lg:text-left z-10"
        data-aos="fade-left"
      >
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-[#ce9233] text-4xl sm:text-5xl md:text-6xl font-bold">
            ABOUT
          </h1>
          <p className="font-bold text-2xl sm:text-3xl">WELLWELD</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            exercitationem corporis dolorum eveniet libero autem a asperiores
            aliquid commodi molestias?
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            exercitationem corporis dolorum eveniet libero autem a asperiores
            aliquid commodi molestias?
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            WHY <span className="text-[#ce9233]">CHOOSE US</span>
          </h1>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p className="text-sm sm:text-base md:text-lg">
                Superior precise quality welds
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p className="text-sm sm:text-base md:text-lg">
                Welds can be made with little or no filler
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p className="text-sm sm:text-base md:text-lg">
                Precise control of welding variables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
