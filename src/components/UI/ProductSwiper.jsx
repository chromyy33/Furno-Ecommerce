import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "./ProductCard";
export default () => {
  const [perView, setPerView] = useState(1); // Default slidesPerView

  const cardWidth = 260; // Define the width of a card (can be dynamic or fixed)

  // Function to calculate the number of slides per view
  const calculateSlidesPerView = () => {
    const bodyWidth = window.innerWidth; // Get the width of the viewport
    const newPerView = bodyWidth / cardWidth; // Calculate how many slides fit
    setPerView(newPerView); // Update state with the rounded value
  };
  useEffect(() => {
    calculateSlidesPerView(); // Calculate initially
    window.addEventListener("resize", calculateSlidesPerView); // Update on resize

    return () => {
      window.removeEventListener("resize", calculateSlidesPerView); // Cleanup on unmount
    };
  }, []);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      navigation
      slidesPerView={perView}
      scrollbar
      onResize={() => {
        const perView = bodyWidth / cardWidth;
        return perView;
      }}
      className="mb-12"
    >
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
