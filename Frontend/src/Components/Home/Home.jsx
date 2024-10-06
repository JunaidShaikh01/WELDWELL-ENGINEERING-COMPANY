import React from "react";
import Header from "../Utils/Header";
import homeBanner from "../../pictures/Home/home-banner.jpg";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices.jsx";
import OurStrength from "./OurStrength.jsx";
import OurCustomers from "./OurCustomers.jsx";
import OurCustomersMain from "./OurCustomersMain.jsx";
import Footer from "../Utils/Footer.jsx";
export default function Home() {
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
          <motion.div
            className="h-[80%] w-10 bg-amber-800"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5 }}
          ></motion.div>
          <motion.div
            className="flex flex-col gap-7 w-[100%]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <h1 className="text-amber-700 text-9xl font-bold z-100 ">We</h1>
            <span className="text-white text-5xl font-bold z-100">
              Are the best Manufacturar Of
            </span>
            <span className="text-white text-7xl font-bold z-100">
              Welding Machine
            </span>
          </motion.div>
        </div>
      </div>
      <AboutUs />
      <OurServices />
      <OurStrength />
      <OurCustomers />
      <OurCustomersMain style={{ background: "white" }} />
      <Footer />
    </div>
  );
}
