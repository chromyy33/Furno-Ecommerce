import HeroSwiper from "../components/HeroSwiper";
import HomeCategory from "../components/HomeCategory";
function Home() {
  const data = {
    homeCategories: [
      {
        name: "Living Room",
        url: "living.png",
      },
      {
        name: "Bedroom",
        url: "bedroom.png",
      },
      {
        name: "Kitchen",
        url: "kitchen.png",
      },
    ],
  };

  const { homeCategories } = data;
  return (
    <div className="max-width mx-auto">
      <HeroSwiper />

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
      <div className="category-grid py-8 hero:py-12 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4">
        {homeCategories.map((category, index) => {
          return (
            <HomeCategory
              category={category}
              key={index}
              additionalStyles={
                index === 0 ? "md:row-span-2 md:flex md:flex-col" : ""
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
