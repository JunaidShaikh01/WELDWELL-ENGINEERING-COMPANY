import React, { useEffect } from "react";
import AboutHomeBanner1 from "../../pictures/Home/About/About-Home-banner-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative "
      style={{ backgroundImage: `url(${AboutHomeBanner1})` }}
    >
      <div className="absolute inset-0 bg-black  opacity-70 z-10 text-white flex flex-col items-center justify-center">
        <div
          className="text-center text-white mb-20 uppercase z-100 underline-offset-1"
          data-aos="zoom-in"
        >
          <h1 className=" text-6xl z-100 mb-5 font-extrabold">
            Our <span className="text-[#ce9233]">services</span>{" "}
          </h1>
          <p className="text-xl font-bold " style={{ letterSpacing: "0.1em" }}>
            WELDWELL ENGINEERING COMPANY
          </p>
          <p className="border-b border-[#ce9233]  mt-4"></p>
        </div>
        <div
          className="flex flex-wrap  gap-x-20 gap-y-10 items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
          <div className="flex items-center flex-col w-1/4">
            <h1 className="text-center text-3xl font-bold">
              ARC <span className="text-[#ce9233] ">Welding</span> Rectifire
            </h1>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, cumque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
