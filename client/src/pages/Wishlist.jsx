import CartItem from "../components/UI/Atoms/CartItem";
import PageImage from "../components/UI/Atoms/PageImage";
function Wishlist() {
  return (
    <div className="px-8">
      <PageImage
        src={
          "https://www.ikea.com/ext/ingkadam/m/7cccfe731c9f2176/original/PH200293.jpg?f=sg"
        }
        title={'Wishlist'}
        subheading={'Everything you always wanted to buy.'}
      />
      <div className="list max-width mx-auto">
        <h2 className="mt-7 mb-12 text-xl font-semibold border-b border-t py-4">
          Your Wishlist
        </h2>
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
