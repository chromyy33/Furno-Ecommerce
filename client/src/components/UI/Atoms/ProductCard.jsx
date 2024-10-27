import { Button } from "@nextui-org/react";
import HorizontalBadge from "./HorizontalBadge";
import { Heart } from "lucide-react";
function ProductCard() {
  return (
    <div className="relative product-card smooth ">
      <div className="bg-beige flex flex-col group border rounded-md px-4 shadow-sm py-4 h-[20rem] ">
        <img
          src="sofa.png"
          alt=""
          className="product-img w-[9rem] object-contain mx-auto mt-[5rem]"
        />
        <Button className="bg-black2 capitalize text-white rounded-[4px] hidden group-hover:block  tracking-wide mt-auto w-[95%] mx-auto">
          Add to cart
        </Button>
      </div>
      <div className="info flex flex-col pb-9">
        <p className="mt-2">Rating</p>
        <p className="title font-semibold">Loveseat Sofa</p>
        <div className="price flex gap-2 items-center ">
          <span className="font-medium text-sm ">$19.99</span>
          <span className="font-medium text-sm text-greyLogo line-through decoration-greyLogo/70">
            $24.99
          </span>
        </div>
      </div>
      <div className="badges absolute top-0 flex justify-between w-full px-4 py-4">
        <div className="flex flex-col gap-1">
          <HorizontalBadge discount content="-20%" />
          <HorizontalBadge newArrival content="new" />
        </div>

        <Button
          isIconOnly
          className="bg-white"
          radius="full"
          variant="shadow"
          size="sm"
        >
          <Heart className="text-greyLogo" size={16} />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
