import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control menu
  const location = useLocation();

  const handleLinkClick = (path) => {
    // Close the menu
    setIsOpen(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center h-[15vh] px-3 md:px-4 lg:px-8 shadow-md bg-[#2b2c2e]">
      {/* Logo Section */}
      <div className="logoSection flex flex-col items-start">
        <p>Logo</p>
        <h2 className="text-lg md:text-2xl text-white">
          WELDWELL ENGINEERING COMPANY
        </h2>
      </div>

      {/* Burger Icon for small screens */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          {/* Burger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Links for large screens */}
      <div className="hidden md:flex gap-6 font-semibold text-xl text-white">
        {["/", "/about", "/products", "/contact"].map((path, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            <Link
              to={path}
              className={`${
                location.pathname === path ? "text-[#ce9233]" : "text-white"
              } transition-colors duration-300 ease-in-out font-oswald`}
              onClick={() => handleLinkClick(path)} // Scroll to top on click
            >
              {path === "/"
                ? "Home"
                : path.charAt(1).toUpperCase() + path.slice(2)}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Background overlay with closing animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)} // Close the menu when the overlay is clicked
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Animated Burger Menu for small/medium screens */}
      <motion.div
        className="fixed top-0 right-0 w-[75%] h-full bg-[#2b2c2e] p-6 z-40 md:hidden"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        initial="closed"
      >
        {/* Close Button */}
        <motion.button
          onClick={() => setIsOpen(false)}
          className="text-white mb-4"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>

        {/* Links */}
        <div className="flex flex-col gap-6 text-xl text-white">
          {["/", "/about", "/products", "/contact"].map((path, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              <Link
                to={path}
                className={`${
                  location.pathname === path ? "text-[#ce9233]" : "text-white"
                } transition-colors duration-300 ease-in-out font-oswald`}
                onClick={() => handleLinkClick(path)} // Scroll to top on click
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
