import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import phone_banner from "../src/Components/Assets/phone-banner.png";
import tablet_banner from "../src/Components/Assets/tablet-banner.png";
import laptop_banner from "../src/Components/Assets/laptop-banner.png";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/phone"
            element={<ShopCategory banner={phone_banner} category="phone" />}
          />
          <Route
            path="/laptop"
            element={<ShopCategory banner={laptop_banner} category="laptop" />}
          />
          <Route
            path="/tablet"
            element={<ShopCategory banner={tablet_banner} category="tablet" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
