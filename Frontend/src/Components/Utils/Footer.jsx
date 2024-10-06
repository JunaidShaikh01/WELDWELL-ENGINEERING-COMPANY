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
    <div className="bg-[#2b2c2e]">
      <div className=" flex justify-evenly">
        <div className="w-[30vw] ">
          <div className="  uppercase mt-20">
            <h1
              className="text-2xl font-extrabold text-[#ce9233]"
              style={{ letterSpacing: "0.1em" }}
            >
              WELDWELL ENGINEERING COMPANY
            </h1>
          </div>
          <div className="mt-2 font-bold text-lg">
            <p className="text-white">
              Established since 1989, Welding and Iron works has become one of
              the most respected structural, miscellaneous, and ornamental steel
              fabricators serving the Southern California multi-unit,
              commercial, and residential
            </p>
            <div className="flex text-white  gap-10 mt-2">
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
        <div>
          <div className="  uppercase mt-20">
            <h1
              className="text-2xl font-extrabold text-[#ce9233]"
              style={{ letterSpacing: "0.1em" }}
            >
              Contact Us
            </h1>
          </div>
          <div className="w-[30vw] mt-4">
            <p className="border-t border-[#ce9233] mt-8 "></p>
            <div className="flex items-center gap-4 mt-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#ce9233] text-lg "
              />
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, nostrum.
              </p>
            </div>
            <p className="border-t border-[#ce9233] mt-4"></p>
            <div className="flex items-center gap-4 mt-4 ">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#ce9233] text-lg "
              />
              <p className="text-lg text-white">7878787878</p>
            </div>
            <p className="border-t border-[#ce9233] mt-4"></p>
            <div className="flex items-center gap-4 mt-4 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#ce9233] text-lg "
              />
              <p className="text-lg text-white">abc@gmail.com</p>
            </div>
            <p className="border-t border-[#ce9233] mt-4"></p>
          </div>
        </div>
        <div className="w-[25vw]">
          <div className="  uppercase mt-20">
            <h1
              className="text-2xl font-extrabold text-[#ce9233]"
              style={{ letterSpacing: "0.1em" }}
            >
              Subscribe Us
            </h1>
          </div>
          <div className="text-lg font-bold text-white mt-8">
            <p>Stay updated with our latest news. We promise not to spam!</p>

            <input
              type="email"
              name="email"
              id=""
              className="bg-transparent border border-[#ce9233] font-medium pl-4 py-2 mt-4"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
      </div>
      <div className="copyRight selfInformation text-white h-[12vh] mt-6 ">
        <div className="selfInformation flex items-center justify-center gap-3 uppercase text-base">
          <p>Created By Junaid</p>
          <span>|</span>{" "}
          <p>
            <a
              href="https://x.com/Junaid__046"
              target="_blank"
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
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className=" hover:text-[#ce9233] transition duration-200"
              />
            </a>
          </p>
        </div>
        <div className="copyRight  flex items-center justify-center gap-3 mt-2  ">
          <FontAwesomeIcon icon={faCopyright} />
          <p>WELDWELL ENGINEERING COMPANY</p>
        </div>
      </div>
    </div>
  );
}
