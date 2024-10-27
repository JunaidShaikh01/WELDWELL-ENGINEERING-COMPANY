import React, { useEffect } from "react";
import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import AboutBanner from "../../pictures/AboutUs/AboutUs-Banner.jpg";
import AboutHomeBanner1 from "../../pictures/Home/About/About-Home-banner-1.jpg";
import AboutHomeBanner2 from "../../pictures/Home/About/About-Home-banner-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />

      {/* Banner Section */}
      <div className="relative">
        <img
          src={AboutBanner}
          className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-full object-cover" // Adjusted heights for responsive
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black opacity-70 z-10 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <div
            className="h-[40%] sm:h-[50%] md:h-[60%] lg:h-[80%] w-3 sm:w-5 md:w-8 lg:w-10 bg-amber-800"
            data-aos="fade-down"
          ></div>
          <div
            className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full"
            data-aos="fade-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-700 font-bold uppercase">
              About
            </h1>
            <span className="text-white text-lg sm:text-2xl md:text-3xl font-bold uppercase">
              Us
            </span>
            <span className="text-white text-md sm:text-lg md:text-2xl font-bold uppercase">
              WELDWELL ENGINEERING COMPANY
            </span>
          </div>
        </div>
      </div>

      {/* About Story Section */}
      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16">
        <div
          className="h-[50vh] md:h-[60vh] w-full md:w-[50%] relative"
          data-aos="fade-right"
        >
          <img
            className="absolute top-0 right-0 h-full w-full shadow-2xl object-cover"
            src={AboutHomeBanner2}
            alt="About Home Banner 2"
          />
          <img
            className="absolute top-2 sm:top-3 md:top-5 right-2 sm:right-3 md:right-5 h-full w-full object-cover"
            src={AboutHomeBanner1}
            alt="About Home Banner 1"
          />
        </div>
        <div
          className="text-white w-full md:w-[50%] gap-4 flex flex-col text-center md:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-[#ce9233] text-3xl sm:text-4xl md:text-5xl font-bold">
            OUR <span className="text-white">STORY</span>
          </h1>
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
      </div>

      {/* Background Section */}
      {/* Background section with responsive adjustments */}
      <div
        className="bg-fixed bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(${AboutHomeBanner1})` }}
      >
        {/* Dark overlay with padding adjustments */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-10 md:px-16 lg:px-20 h-full max-h-full overflow-y-auto">
          {/* Title section */}
          <div
            className="text-center text-white mb-6 uppercase underline-offset-1"
            data-aos="zoom-in"
          >
            {/* Title with responsive font sizes and shadow */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              About <span className="text-[#ce9233]">US</span>
            </h1>

            {/* Company name with responsive font sizes */}
            <p
              className="text-base sm:text-lg md:text-xl font-bold drop-shadow-lg"
              style={{ letterSpacing: "0.1em" }}
            >
              WELDWELL ENGINEERING COMPANY
            </p>

            {/* Responsive margin on the border element */}
            <p className="border-b border-[#ce9233] mt-4 sm:mt-6 md:mt-8"></p>
          </div>

          {/* Description text with improved overflow and shadow for readability */}
          <div
            className="text-base sm:text-lg md:text-xl font-semibold text-center px-4 max-h-full sm:max-h-full overflow-y-auto"
            data-aos="zoom-in"
          >
            {/* Main description with shadow */}
            <p className="text-md text-gray-400 sm:text-xl md:text-2xl md:font-semibold leading-relaxed drop-shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore praesentium dolorem fugit est qui error quas facere saepe
              at, numquam quia, perferendis rem ullam provident voluptatibus
              facilis. Veniam, accusamus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias dolore praesentium dolorem fugit est qui
              error quas facere saepe at, numquam quia, perferendis rem ullam
              provident voluptatibus facilis. Veniam, accusamus!
            </p>
          </div>
        </div>
      </div>

      {/* Our Plans Section */}
      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16">
        <div
          className="text-white w-full md:w-[50%] gap-4 flex flex-col text-center md:text-right"
          data-aos="fade-right"
        >
          <h1 className="text-[#ce9233] text-3xl sm:text-4xl md:text-5xl font-bold">
            OUR <span className="text-white">PLANS</span>
          </h1>
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
        <div
          className="h-[50vh] md:h-[60vh] w-full md:w-[50%] relative"
          data-aos="fade-left"
        >
          <img
            className="absolute top-0 left-0 h-full w-full shadow-2xl object-cover"
            src={AboutHomeBanner2}
            alt="About Home Banner 2"
          />
          <img
            className="absolute top-2 sm:top-3 md:top-5 left-2 sm:left-3 md:left-5 h-full w-full object-cover"
            src={AboutHomeBanner1}
            alt="About Home Banner 1"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
