import {
  Heart,
  Menu,
  ShoppingCart,
  X,
  Search as SearchIcon,
} from "lucide-react";
import NavLinkEl from "./NavLinkEl";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import CustomBadge from "./UI/CustomBadge";
import SocialIcons from "./UI/SocialIcons";
import { Search } from "./Search";
import CartMenu from "./CartMenu";

function Nav() {
  const iconSize = 24;
  const [isOpen, setIsOpen] = useState(false); //menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); //search
  const [isCartOpen, setIsCartOpen] = useState(false); //cart

  // Sync overflow: hidden with isOpen
  useEffect(() => {
    if (isOpen) {
      // Add overflow: hidden to body when isOpen is true
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when isOpen is false
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = ""; // Ensure the style is removed when component unmounts
    };
  }, [isOpen]); // Effect will run whenever isOpen changes
  return (
    <nav className="nav flex px-8 justify-between h-[5rem] max-width box-content mx-auto ">
      {/* Left Section: Menu button and Logo */}
      <div className="left flex gap-1 items-center">
        <button
          className="md:hidden"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Menu className="text-black2" size={iconSize} />
        </button>
        <Link to="/">
          <div className="logo font-semibold text-[20px] sm:text-[24px] lg:text-[30px]">
            3legant<span className="text-greyLogo">.</span>
          </div>
        </Link>
      </div>
      {/* Center Section: Navigation Links */}
      <div className="z-10">
        <Overlay additionalStyles="" isOpen={isOpen} />
        <ul
          className={` md:flex md:gap-[2rem] flex flex-col absolute bg-white w-[95%] h-[100vh]  md:opacity-100 inset-0  gap-6 px-6 pt-6 md:items-center transition-all ease-in duration-200 ${
            isOpen ? "left-[0] opacity-100" : "left-[-100%] opacity-0"
          } md:w-auto md:h-auto md:flex-row md:left-[50%] md:translate-x-[-50%] md:bg-transparent md:inset-[initial]`}
        >
          <li className="md:hidden flex justify-between items-center w-full pb-5">
            <Link
              to="/"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className="logo font-semibold text-[1.5rem] ">
                3legant<span className="text-greyLogo">.</span>
              </div>
            </Link>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              onClick={() => {
                setIsOpen(false);
              }}
              aria-label="Close banner"
            >
              <X size={iconSize} className="text-greyLogo" aria-hidden="true" />
            </Button>
          </li>
          <NavLinkEl
            name="home"
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <NavLinkEl
            name="shop"
            to="/shop"
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <NavLinkEl
            name="products"
            to="/products"
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <NavLinkEl
            name="contact Us"
            to="/contact"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <NavLinkEl
            name="Wishlists"
            to="/wishlist"
            icon={<Heart />}
            additionalStyles={`md:hidden`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            isBadge={true}
          />
          <li className="mt-auto pb-8">
            <SocialIcons additionalStyles="md:hidden gap-4" />
          </li>
        </ul>
      </div>

      {/* Right Section: Icons (Search, Wishlist, Cart) */}
      <div className="right flex items-center">
        <Button
          className="btn-hover"
          isIconOnly
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <button className="">
            <SearchIcon size={24} />
          </button>
        </Button>

        <Button className="btn-hover md:flex hidden" isIconOnly>
          <button className="">
            <Heart size={iconSize} />
          </button>
        </Button>
        <Button className="btn-hover" isIconOnly>
          <button className="cart-btn flex gap-1 items-center">
            <ShoppingCart
              size={iconSize}
              onClick={() => {
                setIsCartOpen(!isCartOpen);
              }}
            />
          </button>
        </Button>
        <CustomBadge additionalStyles="ml-[-4px]" />
      </div>

      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <CartMenu isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </nav>
  );
}

export default Nav;
