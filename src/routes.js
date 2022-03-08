import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Common/Layout";

import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Faq from "./components/Faq";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
