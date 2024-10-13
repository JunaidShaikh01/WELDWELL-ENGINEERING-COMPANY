import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  faCopyright,
  faEnvelope,
  faLocationDot,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#2b2c2e] py-10">
      <div className="flex flex-col md:flex-row md:justify-evenly px-4 md:px-8">
        {/* Company Info Section */}
        <div className="w-full md:w-[30vw] mb-8 flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h1
              className="text-2xl font-extrabold text-[#ce9233] uppercase mt-4"
              style={{ letterSpacing: "0.1em" }}
            >
              WELDWELL ENGINEERING COMPANY
            </h1>
            <p className="text-white mt-2 font-bold text-lg">
              Established since 1989, Welding and Iron works has become one of
              the most respected structural, miscellaneous, and ornamental steel
              fabricators serving the Southern California multi-unit,
              commercial, and residential.
            </p>
            <div className="flex text-white gap-6 mt-2 justify-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-[#ce9233] transition duration-200"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-[#ce9233] transition duration-200"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-[#ce9233] transition duration-200"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:text-[#ce9233] transition duration-200"
              />
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-[30vw] mb-8 flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-extrabold text-[#ce9233] uppercase mt-4">
              Contact Us
            </h1>
            <div className="mt-4">
              <p className="border-t border-[#ce9233] mt-8"></p>
              <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#ce9233] text-2xl"
                />
                <div>
                  <p className="text-lg text-white">
                    201/16, G.I.D.C, Estate, Panoli
                  </p>
                  <p className="text-lg text-white">
                    Nr.Tema India, Tel.Ankleshwar. Dist.Bharuch, Gujarat, India
                  </p>
                </div>
              </div>
              <p className="border-t border-[#ce9233] mt-4"></p>
              <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#ce9233] text-lg"
                />
                <div>
                  <p className="text-lg text-white">+91 9879708224</p>
                  <p className="text-lg text-white">+91 9909557874</p>
                </div>
              </div>
              <p className="border-t border-[#ce9233] mt-4"></p>
              <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#ce9233] text-lg"
                />
                <p className="text-lg text-white">weldwellengg@yahoo.com</p>
              </div>
              <p className="border-t border-[#ce9233] mt-4"></p>
            </div>
          </div>
        </div>

        {/* Subscribe Us Section */}
        <div className="w-full md:w-[25vw] mb-8 flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-extrabold text-[#ce9233] uppercase mt-4">
              Subscribe Us
            </h1>
            <p className="text-lg font-bold text-white mt-4">
              Stay updated with our latest news. We promise not to spam!
            </p>
            <input
              type="email"
              name="email"
              className="bg-transparent border border-[#ce9233] font-medium pl-4 py-2 mt-4 w-full"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
      </div>

      {/* Copyright and Self Information */}
      <div className="selfInformation  text-white h-[12vh] mt-6">
        <div className="flex items-center justify-center gap-3 uppercase text-base">
          <p>Created By Junaid</p>
          <span>|</span>
          <p>
            <a
              href="https://x.com/Junaid__046"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer mr-2"
            >
              <FontAwesomeIcon
                icon={faX}
                className="hover:text-[#ce9233] transition duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/junaid-shaikh01/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-[#ce9233] transition duration-200"
              />
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <FontAwesomeIcon icon={faCopyright} />
          <p>WELDWELL ENGINEERING COMPANY</p>
        </div>
      </div>
    </div>
  );
}
