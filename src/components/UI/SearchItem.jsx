import { img } from "framer-motion/client";
import { TrendingUp, History } from "lucide-react";

function SearchItem({ trending = false, history = false, discover = false }) {
  const trendingSearches = [
    "modern sofa sets",
    "ergonomic office chairs",
    "wooden dining tables",
    "sectional couches",
    "bedroom furniture sets",
    "minimalist coffee tables",
    "recliner chairs",
    "compact storage solutions",
    "outdoor patio furniture",
  ];

  return (
    <li className="flex items-center gap-3 border-b-1 h-[3.7rem] hover:bg-beige px-3 smooth  ">
      {history && <History size={20} className="text-greyLogo" />}
      {trending && <TrendingUp size={20} className="text-greyLogo" />}
      {discover && (
        <img
          src="https://www.ikea.com/ca/en/images/products/sektion-maximera-base-cabinet-with-3-drawers-white-enkoeping-white-wood-effect__1072837_pe855380_s5.jpg?f=xl"
          className="w-[2.4rem] h-[2.4rem] object-cover border-1.5 p-[5px] rounded-md"
        />
      )}
      <div className="info flex flex-col gap-[4px] ">
        <a href='products' className="font-medium capitalize leading-[1]">modern sofa sets</a>
        {discover&&<p className="font-medium text-sm text-green leading-[1]">in Bedroom</p>}
      </div>
    </li>
  );
}

export default SearchItem;
