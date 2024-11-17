import React, { useEffect } from "react";
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
export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="relative ">
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
                  {product.title} {/* Display product title */}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {/* You can add a product description here */}
                  This is a description for {product.title}.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button className="border border-[#ce9233] text-[#ce9233] text-lg shadow-lg py-2 px-4 rounded transition-all duration-300 hover:bg-[#ce9233] hover:text-white cursor-pointer">
                View More
              </button>
            </CardActions>
          </Card>
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
}
