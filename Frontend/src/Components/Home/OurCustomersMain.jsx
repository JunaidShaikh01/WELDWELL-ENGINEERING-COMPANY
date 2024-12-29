import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import "swiper/css/autoplay";
import ourCustomer1 from "../../pictures/Home/OurCustomer/Cunstruction-Cumpanies.jpg";
import ourCustomer2 from "../../pictures/Home/OurCustomer/Car-Manufcaturing.jpg";
import ourCustomer3 from "../../pictures/Home/OurCustomer/Electrical-Part.jpg";
import ourCustomer4 from "../../pictures/Home/OurCustomer/Ship-Building.jpg";
import ourCustomer5 from "../../pictures/Home/OurCustomer/Steel-Manufacturing.jpg";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function OurCustomersMain() {
  return (
    <div className="swiper-container-wrapper">
      <div className="text-white text-center uppercase mt-10 md:mt-20">
        <h1 className="text-4xl md:text-6xl z-100 mb-2 font-extrabold">
          Our <span className="text-[#ce9233]">CUSTOMERS</span>
        </h1>
        <p className="text-lg md:text-xl font-bold" style={{ letterSpacing: "0.1em" }}>
          WELDWELL ENGINEERING COMPANY
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[70vh] md:h-[90vh]"
      >
        <SwiperSlide>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img src={ourCustomer1} alt="Construction Companies" className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#ce9233] gap-2 h-[20vh] flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                <span className="text-[#2b2c2e]">Construction</span> <span className="text-white">Companies</span> 
              </h1>
              <p className="text-lg  md:text-md text-center text-[#343537]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, distinctio.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img src={ourCustomer2} alt="Car Manufacturer" className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 gap-2 bg-[#2b2c2e] h-[20vh] flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                <span className="text-[#ce9233]">Car</span>  Manufacturer
              </h1>
              <p className="text-lg md:text-md text-center text-[#b8832e]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aut!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img src={ourCustomer3} alt="Electrical Manufacturing" className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#ce9233] gap-2 h-[20vh] flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                <span className="text-[#2b2c2e]">Electronics</span> <span className="text-white">Manufacturing</span> 
              </h1>
              <p className="text-lg px-4 md:text-md text-center text-[#343537]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempora?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img src={ourCustomer4} alt="Ship Building" className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#2b2c2e] gap-2 h-[20vh] flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-center ">
                <span className="text-[#ce9233]">Ship</span> Building
              </h1>
              <p className="text-lg md:text-md text-center text-[#b8832e]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, impedit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img src={ourCustomer5} alt="Steel Manufacturing" className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#ce9233] gap-2 h-[20vh] flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                <span className="text-[#2b2c2e]">Steel</span>  <span className="text-white">Manufacturing</span>
              </h1>
              <p className="text-lg md:text-md text-center text-[#343537]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iusto.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurCustomersMain;
