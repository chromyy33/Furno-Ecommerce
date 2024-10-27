function PageImage({ src = "", title = "", subheading = "" }) {
  return (
    <div className="wishlist-img max-width mx-auto relative flex items-center h-[18rem] justify-center xsm:h-[initial]">
      <img src={src} alt="" className="object-cover h-full max-h-[24rem] w-full" />

      <div className="bg-black2/30 backdrop-blur-sm rounded-md border border-white/30 text-center shadow-lg flex flex-col justify-center px-2 absolute w-[70%] max-w-[40rem] h-[40%] max-h-[10rem]">
        <h2 className=" font-semibold text-white text-lg sm:text-[24px] lg:text-[34px] mb-3">
          {title}
        </h2>
        <p className="text-white font-medium text-sm sm:text-base md:text-xl tracking-wide">
          {subheading}
        </p>
      </div>
    </div>
  );
}

export default PageImage;
