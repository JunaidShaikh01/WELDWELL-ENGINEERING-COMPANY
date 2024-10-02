// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <div
//       className="sticky flex justify-between items-center h-[15vh] px-3 md:px-4 lg:px-8
//       top-0 shadow-md bg-[#2b2c2e] z-50"
//     >
//       <div className="logoSection flex flex-col items-start bg-[#2b2c2e]">
//         <p className="bg-[#2b2c2e]">Logo</p>
//         <h2 className="font-sm text-lg  md:text-2xl  text-gray-500 bg-[#2b2c2e]">
//           Bharat Mechanical Solutions
//         </h2>
//       </div>
//       <div className="gap-6 flex font-semibold text-xl text-white bg-[#2b2c2e]">
//         <Link
//           className="hover:text-zinc-600 transform duration-300  ease-in-out font-oswald bg-[#2b2c2e]"
//           to="/"
//         >
//           Home
//         </Link>
//         <Link
//           className="hover:text-zinc-600 transform duration-300 ease-in-out font-oswald bg-[#2b2c2e]"
//           to="/about"
//         >
//           About
//         </Link>
//         <Link
//           className="hover:text-zinc-600 transform duration-300 ease-in-out font-oswald bg-[#2b2c2e]"
//           to="/products"
//         >
//           Products
//         </Link>

//         <Link
//           className="hover:text-zinc-600 transform duration-300 ease-in-out font-oswald bg-[#2b2c2e]"
//           to="/contact"
//         >
//           Contact
//         </Link>
//       </div>
//       {/* {isMemuOpen && (
//         <div className="fixed top-0 right-0   w-full  h-full bg-black   text-white text-3xl  z-50">
//           <div className="flex justify-between items-center h-[18vh] mt-4 px-8">
//             <div className="w-[70%]">
//               <img src={logobg} alt="logo" />
//             </div>
//             <button className=" text-white">
//               <FontAwesomeIcon icon={faTimes} className="text-white" />
//             </button>
//           </div>

//           <div className="flex w-full h-[60%] justify-center items-center">
//             <div className="flex  flex-col  gap-4 mb-8 items-center">
//               <Link to="/" className="mb-4 hover:text-[#df6553]">
//                 Home
//               </Link>
//               <Link to="/about" className="mb-4 hover:text-[#df6553]">
//                 About
//               </Link>
//               <Link to="/products" className="mb-4 hover:text-[#df6553]">
//                 Products
//               </Link>
//               <Link to="/resources" className="mb-4 hover:text-[#df6553]">
//                 Resources
//               </Link>

//               <Link to="/contact" className="mb-4 hover:text-[#df6553]">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// }

import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

export default function Header() {
  // Get the current location from react-router-dom
  const location = useLocation();

  return (
    <div
      className="sticky flex justify-between items-center h-[15vh] px-3 md:px-4 lg:px-8 
      top-0 shadow-md bg-[#2b2c2e] z-50"
    >
      <div className="logoSection flex flex-col items-start bg-[#2b2c2e]">
        <p className="bg-[#2b2c2e]">Logo</p>
        <h2 className="font-sm text-lg md:text-2xl text-white bg-[#2b2c2e]">
          WELDWELL ENGINEERING COMPANY
        </h2>
      </div>
      <div className="gap-6 flex font-semibold text-xl text-white bg-[#2b2c2e]">
        {/* Highlight the link if the current path matches the link's route */}
        <Link
          to="/"
          className={` font-oswald transition-colors duration-300 ease-in-out bg-[#2b2c2e] ${
            location.pathname === "/" ? "text-[#ce9233]" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/about" ? "text-[#ce9233]" : "text-white"
          }  transition-colors duration-300 ease-in-out font-oswald bg-[#2b2c2e]`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${
            location.pathname === "/products" ? "text-[#ce9233]" : "text-white"
          }  transform duration-300 ease-in-out font-oswald bg-[#2b2c2e]`}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={`${
            location.pathname === "/contact" ? "text-[#ce9233]" : "text-white"
          }  transform duration-300 ease-in-out font-oswald bg-[#2b2c2e]`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
