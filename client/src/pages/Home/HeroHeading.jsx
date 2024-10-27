function HeroHeading() {

  return (
    <div className="hero-heading py-8 hero:py-12 sm:flex justify-between flex flex-col gap-3 hero:flex-row hero:items-center">
      <h1 className="flex flex-col">
        <span>
          Simply Unique<span className="text-greyLogo">/</span>
        </span>
        <span>
          Simply Better<span className="text-greyLogo">.</span>
        </span>
      </h1>

      <h6 className="font-medium leading-[1.4] hero:w-[30ch]">
        <span className="font-semibold">3legant</span> is gift and decoration
        store based in Delhi, India. Est. since 2024
      </h6>
    </div>
  );
}

export default HeroHeading;
