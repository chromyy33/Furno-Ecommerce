import LinkBtn from "./UI/LinkBtn";

function Sale() {
  return (
    <div className="sale mb-12 sm:flex sm:h-[80vw] max-h-[750px]">
      <img
        className="h-[24rem] sm:w-[50%] sm:h-full object-cover"
        src="https://www.ikea.com/images/link-to-a-stylish-living-room-with-a-calm-atmosphere-image-o-264870f86d199f60239c2d721c8f31b3.jpg?f=4xl"
        alt=""
      />

      <div className="h-[24rem] sale-info px-8 lg:px-10 sm:h-[100%] flex flex-col sm:w-[50%] bg-beige justify-center">
        <div>
          <p className="text-blue text-sm uppercase font-semibold mb-4 ">
            Sale upto 35% off
          </p>
          <h4 className="mb-4">
            HUNDREDS of <br /> New exciting prices !
          </h4>
          <p className="mb-8 font-medium w-[100%] max-w-[400px]">
            It’s more affordable than ever to give every room in your home a
            stylish makeover.
          </p>
        </div>
        <LinkBtn to="/products"></LinkBtn>
      </div>
    </div>
  );
}

export default Sale;
