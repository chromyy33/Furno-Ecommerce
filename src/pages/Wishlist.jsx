import CartItem from "../components/CartItem";

function Wishlist() {
  return (
    <div className="px-8">
      <div className="wishlist-img max-width mx-auto relative flex items-center h-[18rem] justify-center xsm:h-[initial]">
        <img
          src="https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg"
          alt=""
          className="object-cover h-full"
        />

        <div className="bg-black2/30 backdrop-blur-sm rounded-md border border-white/30 text-center shadow-lg flex flex-col justify-center px-2 absolute w-[70%] max-w-[40rem] h-[40%] max-h-[10rem]">
          <h2 className=" font-semibold text-white text-lg sm:text-[24px] lg:text-[34px] mb-3">
            WishList
          </h2>
          <p className="text-white font-medium text-sm sm:text-base md:text-xl tracking-wide">
            Time to buy the items you always wished for.
          </p>
        </div>
      </div>
      <div className="list max-width mx-auto">
      <h2 className="mt-7 mb-12 text-xl font-semibold border-b border-t py-4">Your Wishlist</h2>
      <ul className="flex flex-col gap-8">
        <CartItem isWishItem={false} />
        <CartItem />
        <CartItem />

      </ul>
      </div>
    </div>
  );
}

export default Wishlist;
