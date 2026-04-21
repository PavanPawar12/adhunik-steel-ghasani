import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import GallerySection from "../pages/GallerySection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
