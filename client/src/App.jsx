import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BSPestControlSite from "./BSPestControlSite";


import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BSPestControlSite />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
         <Route path="/blog/:slug" element={<BlogPostPage />} />

        <Route path="*" element={<BSPestControlSite />} />
      </Routes>
    </BrowserRouter>
  );
}