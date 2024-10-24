import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

function BottomNav() {
  const linksData = ["Home", "Shop", "Product", "Blog", "Contact Us"];
  return (
    <div className=" bg-black">
        <div className=" max-width  mx-auto footer h-[40rem] md:h-[16rem] b text-white px-8  flex flex-col justify-center md:py-20">
      <div className="top flex flex-col items-center justify-center md:flex-row md:justify-between md:pb-12 md:border-b md:border-greyLogo">
        <div className="logobotom flex flex-col items-center md:flex-row md:gap-8">
          <Link to="/">
            <div className=" w-fit logo font-semibold text-[20px] sm:text-[24px] lg:text-[30px] border-b-1 pb-4 border-greyLogo md:border-0 md:pb-0 md:pr-8 md:border-r">
              3legant<span className="text-greyLogo">.</span>
            </div>
          </Link>
          <p className="text-sm md:pt-0 pt-4">Home and Furniture Store</p>
        </div>
        <ul className="flex flex-col text-sm py-10 gap-8 text-center border-b border-greyLogo w-full md:flex-row md:border-0 md:justify-center md:w-auto md:p-0">
          {linksData.map((link) => (
            <Link to={link.toLowerCase()} className="link-hover smooth">
              {link}
            </Link>
          ))}
        </ul>
      </div>

      <div className=" bottom flex flex-col md:flex-row-reverse items-center md:justify-between md:pt-4">
        <SocialIcons additionalStyles="text-white pt-6 pb-8 md:p-0" />
        <div className="flex flex-col md:flex-row-reverse md:gap-7">
          <div className="flex text-sm gap-7 pb-7 md:pb-0">
            <a
              href="https://www2.hm.com/en_ca/customer-service/legal-and-privacy/privacy-link.html?srsltid=AfmBOorW0ZyuFUWAA4tkhdKWNpqR7xaipyBNGxleQno5j41d3CnneThz"
              className="link-hover"
            >
              Privacy Policy
            </a>
            <a
              href="https://www2.hm.com/en_ca/customer-service/legal-and-privacy/terms-and-conditions.html?srsltid=AfmBOooGsS6VdMgmzOxbZU-5YcXRsZId8ZerEZOyOq43rFYKJAW1IFv6"
              className="link-hover"
            >
              Terms of User
            </a>
          </div>
          <p className="text-sm ">{`Copyright © ${new Date().getFullYear()} 3legant. All rights reserved`}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BottomNav;
