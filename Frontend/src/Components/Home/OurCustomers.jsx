import React, { useState, useEffect, useRef } from "react";
import OurCustomersBanner from "../../pictures/Home/OurCustomer/OurCustomer-bannner.jpg";
import NumberCounter from "../Utils/NumberCounter";
// import NumberCounter from "./NumberCounter";

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
      className="bg-fixed bg-cover bg-center min-h-screen relative "
      style={{ backgroundImage: `url(${OurCustomersBanner})` }}
    >
      <div className="absolute inset-0 opacity-70 bg-black z-10 text-white flex flex-col items-end justify-center">
        <div className="pr-10 w-[50%]">
          <h1 className="text-6xl font-extrabold">
            <span className="text-[#ce9233]">OUR</span> ACHIEVEMENTS
          </h1>
          <p className="text-2xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quia debitis in quis adipisci pariatur reiciendis deleniti quisquam
            praesentium amet.
          </p>
          <div className="flex space-x-6 mt-8">
            {isVisible && (
              <>
                <div className="text-white  border-4 border-[#ce9233] p-8">
                  <NumberCounter targetNumber={500} duration={3000} />
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Happy
                  </p>
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Client
                  </p>
                </div>
                <div className="text-white  border-4 border-[#ce9233] p-8">
                  <NumberCounter targetNumber={1200} duration={3000} />
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Projects{" "}
                  </p>
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Completed
                  </p>
                </div>
                <div className="text-white border-4 border-[#ce9233] p-8">
                  <NumberCounter targetNumber={50} duration={3000} />
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Years of
                  </p>
                  <p className="text-center mt-2 text-2xl font-semibold">
                    Experience
                  </p>
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
