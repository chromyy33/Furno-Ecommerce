import { X } from "lucide-react";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function CartMenu({ isCartOpen, setIsCartOpen }) {
  const iconSize = 24;
  // Sync overflow: hidden with isOpen
  useEffect(() => {
    if (isCartOpen) {
      // Add overflow: hidden to body when isCartOpen is true
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when isCartOpen is false
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = ""; // Ensure the style is removed when component unmounts
    };
  }, [isCartOpen]); // Effect will run whenever isCartOpen changes
  return (
    <div
      className={`z-10 cart-menu fixed inset-0 
        ${
          isCartOpen
            ? "translate-x-[0%] opacity-100"
            : "translate-x-[100%] opacity-0"
        }`}
    >
      <div
        onClick={() => setIsCartOpen(!isCartOpen)}
        className={`overlay fixed bg-black2/10 w-screen inset-0 h-screen smooth ${
          isCartOpen ? "opacity-100 block" : "opacity-0 hidden "
        }`}
      ></div>
      <ul
        className={` absolute bg-white w-[95%] h-[100vh] sm:w-[30rem] top-0 gap-8 px-6 pt-6 transition-all ease-in duration-200 ${
          isCartOpen ? "right-[0] opacity-100" : "right-[-100%] opacity-0"
        } `}
      >
        <li className="flex justify-between items-center w-full pb-5">
          <Link
            to="/"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          >
            <div className="logo font-semibold text-[1.5rem] ">Cart</div>
          </Link>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            onClick={() => {
              setIsCartOpen(false);
            }}
            aria-label="Close banner"
          >
            <X size={iconSize} className="text-greyLogo" aria-hidden="true" />
          </Button>
        </li>
        <div className="overflow-y-scroll h-[70%] scrollbar-hide flex flex-col gap-8 ">
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />

          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
          <CartItem isWishItem={false} additionalStyles="xl:mx-[initial]" />
        </div>
        <li className="mt-auto cart-footer pb-5 flex flex-col gap-3 absolute w-full bottom-0 left-0 px-8 bg-white pt-3 border-t">
          <div className="subtotal flex justify-between border-b pb-2 ">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold ">$99.00</span>
          </div>
          <div className="total flex justify-between ">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg ">$99.00</span>
          </div>
          <Button
            radius="none"
            size="lg"
            className="bg-black2 capitalize text-white rounded-[4px] tracking-wide"
          >
            Checkout
          </Button>
          <a
            href="#"
            className="text-center font-semibold border-b w-fit mx-auto border-black/80 hover "
          >
            View Cart
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CartMenu;
