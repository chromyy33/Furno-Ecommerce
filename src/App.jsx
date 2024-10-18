import Banner from "./components/Banner";

import Nav from "./components/Nav";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Home from "./pages/Home.jsx";

import { useState } from "react";

function App() {
  const iconSize = 16;
  const navigate = useNavigate();
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const bannerText = "30% of storewide-Limited time!";

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <main>
        <div className="fixed top-0 w-full bg-white z-10">
          <Banner
            promotionText={bannerText}
            isBannerOpen={isBannerOpen}
            setIsBannerOpen={setIsBannerOpen}
          />
          <Nav />
        </div>
        <section
          className={`content-start  ${
            isBannerOpen ? "mt-[128px]" : "mt-[80px]"
          } px-8`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <section className="h-screen bg-red-50">p2</section>
      </main>
    </NextUIProvider>
  );
}
export default App;
