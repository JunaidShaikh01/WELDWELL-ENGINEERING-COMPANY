import React, { useState, useEffect, useRef } from "react";
import OurCustomersBanner from "../../pictures/Home/OurCustomer/OurCustomer-bannner.jpg";
import NumberCounter from "../Utils/NumberCounter";

function OurCustomers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger counter animation when visible
        }
      },
      {
        root: null, // null means the viewport
        threshold: 0.2, // Trigger when 20% of the section is visible
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
      ref={sectionRef} // Attach ref to the section
      className="bg-fixed bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${OurCustomersBanner})` }}
    >
      <div className="absolute inset-0 opacity-70 bg-black z-10 text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl p-4 text-center overflow-scroll">
          <div className="text-white text-center uppercase mt-20">
            <h1 className="text-2xl sm:text-5xl md:text-6xl z-100 mb-2 font-extrabold">
              Our <span className="text-[#ce9233]">Achivemnets </span>
            </h1>
            <p className="text-xl font-bold" style={{ letterSpacing: "0.1em" }}>
              WELDWELL ENGINEERING COMPANY
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quia debitis in quis adipisci pariatur reiciendis deleniti quisquam
            praesentium amet.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mt-8">
            {isVisible && (
              <>
                <div className="text-white border-4 border-[#ce9233] p-4 md:p-6 flex flex-col items-center">
                  <NumberCounter
                    targetNumber={500}
                    duration={3000}
                    fontSize="text-4xl md:text-5xl"
                  />
                  <p className="text-lg md:text-xl font-semibold mt-2">Happy</p>
                  <p className="text-lg md:text-xl font-semibold">Client</p>
                </div>
                <div className="text-white border-4 border-[#ce9233] p-4 md:p-6 flex flex-col items-center">
                  <NumberCounter
                    targetNumber={1200}
                    duration={3000}
                    fontSize="text-4xl md:text-5xl"
                  />
                  <p className="text-lg md:text-xl font-semibold mt-2">
                    Projects
                  </p>
                  <p className="text-lg md:text-xl font-semibold">Completed</p>
                </div>
                <div className="text-white border-4 border-[#ce9233] p-4 md:p-6 flex flex-col items-center">
                  <NumberCounter
                    targetNumber={50}
                    duration={3000}
                    fontSize="text-4xl md:text-5xl"
                  />
                  <p className="text-lg md:text-xl font-semibold mt-2">
                    Years of
                  </p>
                  <p className="text-lg md:text-xl font-semibold">Experience</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;
