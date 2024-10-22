import { Button } from "@nextui-org/react";
import { Plus, Trash2, Minus, Heart } from "lucide-react";
import HorizontalBadge from "./UI/HorizontalBadge";
function CartItem({ isWishItem = true, additionalStyles = "" }) {
  return (
    <li
      className={`flex justify-between gap-3 border-b-1 pb-6 max-width  ${additionalStyles}`}
    >
      <div className="left w-[96px] h-[120px] xsm:h-[96px] xsm:w-[80px] p-1 border-1 rounded-md">
        <img
          src="https://www.ikea.com/ca/en/images/products/bekvaem-stepladder-3-steps-black__0987797_pe819440_s5.jpg?f=xl"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="right w-full">
        <div className="info flex justify-between items-center">
          <div className="title flex flex-col items-start xsm:flex-row gap-1 xsm:items-center">
            <a href="products">
              <p className="font-semibold">Computer Table</p>
            </a>
            <HorizontalBadge discount content="-20%" />
          </div>

          <div className="price flex flex-col items-center xsm:flex-row xsm:gap-2">
            <span className="font-semibold">$19.99</span>
            <span className="font-semibold text-greyLogo line-through decoration-greyLogo/70">
              $24.99
            </span>
          </div>
        </div>
        <div className="color text-sm flex justify-between items-center mt-1">
          <p className="font-medium text-greyLogo">Color: Black</p>

          {!isWishItem ? (
            <Trash2
              size={20}
              className="text-greyLogo cursor-pointer hover:opacity-70"
            ></Trash2>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-end justify-between">
          {!isWishItem ? (
            <div className="quantity-btn flex items-center gap-1 border-1 w-fit rounded-md mt-4">
              <>
                <Button isIconOnly size="sm" className="btn-hover">
                  <Minus size={16} className="text-black2"></Minus>
                </Button>

                <span className="quantity font-medium">2</span>

                <Button isIconOnly size="sm" className="btn-hover">
                  <Plus size={16} className="text-black2"></Plus>
                </Button>
              </>
            </div>
          ) : (
            <Button
              radius="none"
              size="sm"
              className="bg-black2 capitalize text-white rounded-[4px] tracking-wide mt-4"
            >
              Add to cart
            </Button>
          )}
          {isWishItem ? (
            <p className=" block text-sm font-semibold text-black p-0 bg-transparent h-fit leading-[inherit] min-w-fit hover:opacity-80 cursor-pointer smooth">
              Remove
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
