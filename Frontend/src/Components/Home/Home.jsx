import React, { useEffect } from "react";
import Header from "../Utils/Header";
import homeBanner from "../../pictures/Home/home-banner.jpg";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices.jsx";
import OurStrength from "./OurStrength.jsx";
import OurCustomers from "./OurCustomers.jsx";
import OurCustomersMain from "./OurCustomersMain.jsx";
import Footer from "../Utils/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="bg-black">
      <Header />

      {/* Responsive Banner Section */}
      <div className="relative ">
        <img
          src={homeBanner}
          className="h-[60vh] sm:h-[70vh] lg:h-[85vh] w-full object-cover"
          alt="Banner"
        />

        {/* Banner Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-start bg-black opacity-70 z-10 px-6 sm:px-12 md:px-20 lg:px-40 gap-4">
          <div
            className="h-[50%] sm:h-[70%] lg:h-[80%] w-4 sm:w-6 lg:w-10 bg-amber-800"
            data-aos="fade-down"
          ></div>

          <div
            className="flex flex-col gap-2 sm:gap-4 lg:gap-6 w-full max-w-2xl"
            data-aos="fade-left"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-amber-700 font-bold">
              We
            </h1>
            <span className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
              Are the Best Manufacturer Of
            </span>
            <span className="text-white text-xl sm:text-3xl md:text-5xl font-bold">
              Welding Machines
            </span>
          </div>
        </div>
      </div>

      <AboutUs />
      <OurServices />
      <OurStrength />
      <OurCustomers />
      <OurCustomersMain />

      <Footer />
    </div>
  );
}
