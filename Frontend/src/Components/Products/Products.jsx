import React from "react";
import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import productBanner from "../../pictures/Products/Products-Banner.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import cardsData from "./data";
export default function Products() {
  return (
    <div>
      <Header />
      <div className="relative ">
        <img
          src={productBanner}
          className="h-[85vh] w-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black  opacity-70 z-10 px-40 gap-4 overflow-hidden">
          <div className="h-[80%] w-10 bg-amber-700" data-aos="fade-down"></div>
          <div className="flex flex-col gap-3 w-[100%]" data-aos="fade-left">
            <h1 className="text-amber-700 text-6xl font-bold z-100 uppercase ">
              Our
            </h1>
            <span className="text-white text-6xl font-bold z-100 uppercase">
              Products
            </span>
            <span className="text-white text-4xl font-bold z-100 uppercase">
              WELDWELL ENGINEERING COMPANY
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-10 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={product.image} // Use product.image from data.js
                alt={product.title} // Use product title as alt text
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
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
}
