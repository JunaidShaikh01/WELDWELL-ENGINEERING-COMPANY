import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";

export default function App() {
  const Router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return <RouterProvider router={Router} />;
}
