import React from "react";
import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import productBanner from "../../pictures/Products/Products-Banner.jpg";
export default function Products() {
  return (
    <div>
      <Header />
      <div className="relative ">
        <img
          src={productBanner}
          className="h-[85vh] w-full object-fill"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black  opacity-70 z-10 px-40 gap-4 overflow-hidden">
          <div className="h-[80%] w-10 bg-amber-700" data-aos="fade-down"></div>
          <div className="flex flex-col gap-3 w-[100%]" data-aos="fade-left">
            <h1 className="text-amber-700 text-6xl font-bold z-100 uppercase ">
              Our
            </h1>
            <span className="text-white text-6xl font-bold z-100 uppercase">
              Products
            </span>
            <span className="text-white text-4xl font-bold z-100 uppercase">
              WELDWELL ENGINEERING COMPANY
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
