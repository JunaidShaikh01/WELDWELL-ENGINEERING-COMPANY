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
    <div>
      <Header />
      <div className="relative ">
        <img
          src={AboutBanner}
          className="h-[85vh] w-full object-fill"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black  opacity-70 z-10 px-40 gap-4 overflow-hidden">
          <div className="h-[80%] w-10 bg-amber-700" data-aos="fade-down"></div>
          <div className="flex flex-col gap-3 w-[100%]" data-aos="fade-left">
            <h1 className="text-amber-700 text-6xl font-bold z-100 uppercase ">
              About
            </h1>
            <span className="text-white text-6xl font-bold z-100 uppercase">
              Us
            </span>
            <span className="text-white text-4xl font-bold z-100 uppercase">
              WELDWELL ENGINEERING COMPANY
            </span>
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-full py-10 px-10 flex gap-10  items-center justify-center overflow-hidden">
        <div className="h-[80%] w-[50%] relative" data-aos="fade-right">
          <img
            className="absolute top-0 right-0 h-full w-full shadow-2xl object-cover"
            src={AboutHomeBanner2}
            alt="About Home Banner 2"
          />
          <img
            className="absolute  top-5 right-5 h-full w-full object-cover "
            src={AboutHomeBanner1}
            alt="About Home Banner 1"
          />
        </div>
        <div
          className="flex flex-col text-white w-[50%] gap-4"
          data-aos="fade-left"
        >
          <div className="flex ">
            <h1 className="text-[#ce9233] text-6xl font-bold">
              OUR <span className="text-white">STORY</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              exercitationem corporis dolorum eveniet libero autem a asperiores
              aliquid commodi molestias?
            </p>
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              exercitationem corporis dolorum eveniet libero autem a asperiores
              aliquid commodi molestias?
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-fixed bg-cover bg-center min-h-screen relative "
        style={{ backgroundImage: `url(${AboutHomeBanner1})` }}
      >
        <div className="absolute inset-0 bg-black  opacity-70 z-10 text-white flex flex-col items-center justify-center">
          <div
            className="text-center text-white mb-6 uppercase z-100 underline-offset-1"
            data-aos="zoom-in"
          >
            <h1 className=" text-6xl z-100 mb-5 font-extrabold">
              About <span className="text-[#ce9233]">US</span>{" "}
            </h1>
            <p
              className="text-xl font-bold "
              style={{ letterSpacing: "0.1em" }}
            >
              WELDWELL ENGINEERING COMPANY
            </p>
            <p className="border-b border-[#ce9233]  mt-8"></p>
          </div>
          <div className="flex  px-12" data-aos="zoom-in">
            <p className="text-2xl font-semibold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolore praesentium dolorem fugit est qui error quas facere saepe
              at, numquam quia, perferendis rem ullam provident voluptatibus
              facilis. Veniam, accusamus!
            </p>
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-full py-10 px-10 flex gap-10  items-center justify-center overflow-hidden">
        <div
          className="flex flex-col text-white w-[50%] gap-4"
          data-aos="fade-right"
        >
          <div className="flex justify-end ">
            <h1 className="text-[#ce9233] text-end text-6xl font-bold">
              OUR <span className="text-white">PLANS</span>
            </h1>
          </div>
          <div className="flex flex-col  gap-4">
            <p className="text-xl text-end text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              exercitationem corporis dolorum eveniet libero autem a asperiores
              aliquid commodi molestias?
            </p>
            <p className="text-xl text-end text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              exercitationem corporis dolorum eveniet libero autem a asperiores
              aliquid commodi molestias?
            </p>
          </div>
        </div>
        <div className="h-[80%] w-[50%] relative" data-aos="fade-left">
          <img
            className="absolute top-0 left-0 h-full w-full shadow-2xl object-cover"
            src={AboutHomeBanner2}
            alt="About Home Banner 2"
          />
          <img
            className="absolute top-5 left-5 h-full w-full object-cover "
            src={AboutHomeBanner1}
            alt="About Home Banner 1"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
