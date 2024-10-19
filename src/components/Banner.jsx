import { Button } from "@nextui-org/react";
import { TicketPercent, X } from "lucide-react";
import { useEffect } from "react";
import LinkBtn from "./UI/LinkBtn";
function Banner({
  promotionText = "Default Text",
  linkText = "Shop Now",
  isBannerOpen,
  setIsBannerOpen,
}) {
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
        <div className=" sm:block hidden">
          
          <LinkBtn color="#377DFF" />
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
