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
    <div className="h-[100vh] w-full py-10 px-10 flex gap-10  items-center justify-center overflow-hidden">
      <div className="h-[80%] w-[50%] relative" data-aos="fade-right">
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
      <div
        className="flex flex-col text-white w-[50%] gap-4"
        data-aos="fade-left"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-[#ce9233] text-6xl font-bold">ABOUT</h1>
          <p className="font-bold text-3xl">WELLWELD</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            exercitationem corporis dolorum eveniet libero autem a asperiores
            aliquid commodi molestias?
          </p>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            exercitationem corporis dolorum eveniet libero autem a asperiores
            aliquid commodi molestias?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            WHY <span className="text-[#ce9233] ">CHOOSE US</span>
          </h1>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p>Superior precise quality welds</p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p>Welds can be made with little or no filler</p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#ce9233]"
              />
              <p>Precise control of welding variables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
