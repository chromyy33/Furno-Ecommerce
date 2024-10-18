import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { MoveRight, TicketPercent, X } from "lucide-react";
import {useEffect } from "react";
function Banner({ promotionText = "Default Text", linkText = "Shop Now" ,isBannerOpen,setIsBannerOpen}) {

  const iconSize = 16;

  // Announce banner state changes for screen readers
  useEffect(() => {
    if (!isBannerOpen) {
      const banner = document.getElementById("banner");
      if (banner) banner.setAttribute("aria-hidden", "true");
    }
  }, [isBannerOpen]);

  return (
    <div
      id="banner"
      className={`flex bg-beige py-2 px-1 ${!isBannerOpen ? "hidden" : ""}`}
      aria-label="Promotional banner"
      aria-live="polite"
      role="region"
    >
      <div className="flex text-black w-full justify-center gap-1 text-xsm items-center xsm:gap-3 xsm:text-base">
        {/* TicketPercent icon with aria-hidden since it's decorative */}
        <TicketPercent aria-hidden="true" className="w-[18px] xsm:w-[20px]" />
        <p className="font-semibold">{promotionText}</p>

        <div className="border-b border-blue ">
          {/* Link is focusable and includes accessible text */}
          <Link
            href="#"
            className="text-blue font-semibold text-[12px] xsm:text-base"
            aria-label={`${linkText} - promotional offer`}
          >
            {linkText}
            {/* MoveRight icon with aria-hidden */}
            <MoveRight size={iconSize}  className="ml-2 text-blue" aria-hidden="true" />
          </Link>
        </div>
      </div>
      {/* Close button with accessible aria-label */}
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="justify-self-end"
        aria-label="Close banner"
        onPress={() => setIsBannerOpen(false)} // Close the banner on button click
      >
        <X size={iconSize} aria-hidden="true" />
      </Button>
    </div>
  );
}

export default Banner;
