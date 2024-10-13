import React, { useEffect } from "react";
import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import contactUs from "../../pictures/ConatactUs/Contact-us.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
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
          src={contactUs}
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-700 font-bold uppercase">
              Contact
            </h1>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
              Us
            </span>
            <span className="text-white text-xl sm:text-2xl md:text-4xl font-bold uppercase">
              WELDWELL ENGINEERING COMPANY
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex px-4 mt-16 gap-8 overflow-hidden">
        <div className="map w-[65%] bg-yellow-200 mb-8" data-aos="fade-right">
          <iframe
            title="Weldwell Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.344160830025!2d72.997748!3d21.572485099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023630ccc0761%3A0x19de34708e497614!2sWeldwell%20Engineering%20Company!5e0!3m2!1sen!2sin!4v1728210768293!5m2!1sen!2sin"
            width="100%" // Full width of the parent div
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="adress text-white w-[35%]" data-aos="fade-left">
          <h1 className="capitalize text-2xl font-bold text-[#ce9233]">
            Contact for help
          </h1>
          <h1 className="uppercase  font-extrabold text-6xl mt-4">
            Get in tuch with us
          </h1>
          <p className="text-lg font-thin mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vitae!
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex flex-col mt-6" data-aos="fade-left">
            <div className="flex gap-4 items-center" data-aos="fade-left">
              <div className="bg-[#ce9233] h-20 w-20 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Call Anytime</h1>
                <p className="text-base font-semibold text-[#797672]">
                  +91 9879708224
                </p>
                <p className="text-base font-semibold text-[#797672]">
                  +91 9909557874
                </p>
              </div>
            </div>
            <p className=" border-t border-gray-800 mt-6 mb-6"></p>
            <div className="flex gap-4 items-center" data-aos="fade-left">
              <div className="bg-[#ce9233] h-20 w-20 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Write email</h1>
                <p className="text-base font-semibold text-[#797672]">
                  weldwellengg@yahoo.com
                </p>
              </div>
            </div>
            <p className=" border-t border-gray-800 mt-6 mb-6"></p>
            <div className="flex gap-4 items-center" data-aos="fade-left">
              <div className="bg-[#ce9233] h-20 w-20 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Visit Us</h1>
                <p className="text-base font-semibold text-[#797672]">
                  201/16, G.I.D.C, Estate, Panoli
                </p>
                <p className="text-base font-semibold text-[#797672]">
                  Nr.Tema India, Tel.Ankleshwar. Dist.Bharuch, Gujrat
                </p>
              </div>
            </div>
            <p className=" border-t border-gray-800 mt-6 mb-6"></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
