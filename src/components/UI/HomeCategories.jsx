import  HomeCategory  from "../HomeCategory";

function HomeCategories() {
  const homeCategoriesData = [
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
  ];
  return (
    <div className="category-grid py-8 hero:py-12 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 md:max-h-[65rem]">
      {homeCategoriesData.map((category, index) => {
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
  );
}

export default HomeCategories;
