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
      <div className="relative">
        <img
          src={homeBanner}
          className="h-[85vh] w-full object-fill"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black  opacity-70 z-10 px-40 gap-4 ">
          <div className="h-[80%] w-10 bg-amber-800" data-aos="fade-down"></div>
          <div className="flex flex-col gap-7 w-[100%]" data-aos="fade-left">
            <h1 className="text-amber-700 text-9xl font-bold z-100 ">We</h1>
            <span className="text-white text-5xl font-bold z-100">
              Are the best Manufacturar Of
            </span>
            <span className="text-white text-7xl font-bold z-100">
              Welding Machine
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
