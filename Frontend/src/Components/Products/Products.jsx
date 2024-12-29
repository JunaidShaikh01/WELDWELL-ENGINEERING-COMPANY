import React, { useState, useEffect } from "react";
import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import productBanner from "../../pictures/Products/Products-Banner.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import cardsData from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <Header />
      <div className={isModalOpen ? "blur-sm" : ""}>
        <div className="relative">
          <img
            src={productBanner}
            className="h-[60vh] sm:h-[70vh] lg:h-[85vh] w-full object-cover"
            alt="Banner"
          />
          <div className="absolute inset-0 flex items-center justify-start bg-black opacity-80 z-10 px-6 sm:px-20 md:px-32 lg:px-40 gap-4">
            <div
              className="h-[60%] sm:h-[80%] w-5 sm:w-10 bg-amber-800"
              data-aos="fade-down"
            ></div>
            <div
              className="flex flex-col gap-3 sm:gap-7 w-full"
              data-aos="fade-left"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-amber-700 z-30 font-bold uppercase">
                Our
              </h1>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
                Products
              </span>
              <span className="text-white text-xl sm:text-2xl md:text-4xl font-bold uppercase">
                WELDWELL ENGINEERING COMPANY
              </span>
            </div>
          </div>
        </div>
        <div
          className="px-4 sm:px-8 md:px-10 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {cardsData.map((product) => (
            <Card key={product.id} sx={{ maxWidth: 345 }} data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This is a description for {product.title}.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button
                  className="border border-[#ce9233] text-[#ce9233] text-lg shadow-lg py-2 px-4 rounded transition-all duration-300 hover:bg-[#ce9233] hover:text-white cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  View More
                </button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-[#2b2c2e] bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black rounded-lg p-2 lg:p-6 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[70%] relative h-[80vh] sm:h-[80vh]"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute text-[#ce9233]  top-0 right-2 sm:top-2 sm:right-2 text-lg sm:text-2xl "
                onClick={closeModal}
              >
                ✖
              </motion.button>

              {/* Image Section */}
              <div className="flex w-full  h-full flex-col sm:flex-row items-center gap-2 lg:gap-5 mt-2 sm:mt-0 ">
                <div className="flex justify-center w-full sm:w-1/2 pt-2.5">
                  <img
                    src={selectedProduct?.image}
                    className="h-[75%] w-[80vw] sm:h-[70vh] sm:w-[40vw] rounded-lg object-cover "
                    alt=""
                  />
                </div>
                {/* Details Section */}
                <div className="flex h-[35%] flex-col-reverse  lg:flex-col justify-between  w-full sm:w-1/2 gap-2 lg:gap-4 ">
                  <div className="titleSection  px-4 sm:px-0">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-1 lg:mb-4 text-white text-left">
                      {selectedProduct?.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                      {selectedProduct?.description ||
                        "More details coming soon!"}
                    </p>
                    {/* <p className="hidden sm:block text-white text-sm sm:text-base"> */}
                    <p className="text-white h-[18vh]  text-sm sm:text-base  sm:h-full overflow-hidden overflow-y-auto">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas similique adipisci omnis veniam nisi natus, neque
                      nostrum quasi dicta perferendis placeat aspernatur aliquam
                      illo tempore impedit recusandae in voluptate cum
                      reprehenderit ex eveniet quos ratione? Aut excepturi,
                      labore voluptatibus eligendi minima corrupti rem
                      quibusdam, voluptate, fugit magnam corporis beatae cumque.
                    </p>
                  </div>
                  {/* Extra Image Section */}
                  <div className="extraImageDivision flex  justify-start flex-wrap gap-2 px-4 sm:px-0 mt-3 SM:mt-0">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        key={index}
                        src={selectedProduct?.image}
                        className="h-[7vh]  sm:h-[13vh] w-[10vw] sm:w-auto rounded-md object-cover"
                        alt={`Extra image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
