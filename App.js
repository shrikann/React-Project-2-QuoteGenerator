import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from "./Quote";
import Home1 from "./Home1";
import Layout from "./Layout";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
          <Route index element={<Home1/>} />
          <Route path="quote" element={<Quote/>} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    

  );
}

export default App;