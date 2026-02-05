import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Example from "./pages/Example";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
