import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import GallerySection from "../pages/GallerySection";
import Register from "../components/Register";
import Login from "../components/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default AppRoutes;
