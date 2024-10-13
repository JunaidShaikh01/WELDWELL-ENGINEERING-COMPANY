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
      <div className="relative">
        <img
          src={homeBanner}
          className="h-[60vh] sm:h-[70vh] lg:h-[85vh] w-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black opacity-70 z-10 px-6 sm:px-20 md:px-32 lg:px-40 gap-4">
          <div
            className="h-[60%] sm:h-[80%] w-5 sm:w-10 bg-amber-800"
            data-aos="fade-down"
          ></div>
          <div
            className="flex flex-col gap-3 sm:gap-7 w-full"
            data-aos="fade-left"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-700 font-bold">
              We
            </h1>
            <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
              Are the Best Manufacturer Of
            </span>
            <span className="text-white text-3xl sm:text-5xl md:text-7xl font-bold">
              Welding Machine
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Components */}
      <AboutUs />
      <OurServices />
      <OurStrength />
      <OurCustomers />
      <OurCustomersMain />

      <Footer />
    </div>
  );
}
