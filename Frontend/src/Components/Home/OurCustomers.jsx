import React, { useState, useEffect, useRef } from "react";
import OurCustomersBanner from "../../pictures/Home/OurCustomer/OurCustomer-bannner.jpg";
import NumberCounter from "../Utils/NumberCounter";

function OurCustomers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen md:h-[40vh`] flex items-center flex-col md:flex-row  bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${OurCustomersBanner})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white flex flex-col lg:flex-row items-center justify-center px-4 py-10 sm:py-20">
        {/* Heading Section */}
        <div className="text-center lg:text-start uppercase mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Our <span className="text-[#ce9233]">Achievements</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold">
            WELDWELL ENGINEERING COMPANY
          </p>
          <p className="text-lg sm:text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quia debitis in quis adipisci pariatur reiciendis deleniti quisquam
            praesentium amet.
          </p>
        </div>

        {/* Number Counter Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          {isVisible && (
            <>
              <div className="text-white border-4 border-[#ce9233] p-6 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-auto flex flex-col items-center ">
                <NumberCounter
                  targetNumber={500}
                  duration={3000}
                  fontSize="text-4xl md:text-5xl"
                />
                <p className="text-lg md:text-xl font-semibold mt-2">Happy</p>
                <p className="text-lg md:text-xl font-semibold">Clients</p>
              </div>
              <div className="text-white border-4 border-[#ce9233] p-6 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-auto flex flex-col items-center">
                <NumberCounter
                  targetNumber={1200}
                  duration={3000}
                  fontSize="text-4xl md:text-5xl"
                />
                <p className="text-lg md:text-xl font-semibold mt-2">Projects</p>
                <p className="text-lg md:text-xl font-semibold">Completed</p>
              </div>
              <div className="text-white border-4 border-[#ce9233] p-6 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-auto flex flex-col items-center text-center">
                <NumberCounter
                  targetNumber={50}
                  duration={3000}
                  fontSize="text-4xl md:text-5xl"
                />
                <p className="text-lg md:text-xl font-semibold mt-2">Years of</p>
                <p className="text-lg md:text-xl font-semibold">Experience</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;
