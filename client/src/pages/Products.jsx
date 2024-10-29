import ProductCard from "../components/UI/Atoms/ProductCard";
import PageImage from "../components/UI/Atoms/PageImage";
import { Button, Select, SelectItem } from "@nextui-org/react";

function Products() {
  const categories = [
    "Living Room",
    "Bathroom",
    "Bedroom",
    "Outdoors",
    "Dining",
  ];
  const filters = [
    "Price(High to Low)",
    "Price(Low to High)",
    "Popularity",
    "Rating",
  ];
  const price = ["$0-$50", "$50-$100", "$100-$140", "$150-$200", "$200+"];
  return (
    <div className="max-width mx-auto px-8 ">
      <PageImage
        src="https://www.ikea.com/ext/ingkadam/m/4e9d91fe42193dd8/original/PH200269.jpg?f=m"
        title="Products"
        subheading="Let’s design the place you always imagined."
      />

      <div className="flex flex-col hero:flex-row sm:items-center justify-between pt-14">
        <div className="flex flex-col xsm:flex-row gap-4 mb-2">
          <Select
            classNames={{
              trigger: ["border"],
            }}
            label="Categories"
            labelPlacement="outside"
            className="room  xsm:w-[12rem]"
            variant="bordered"
            placeholder="All Rooms"
          >
            {categories.map((filter) => {
              return <SelectItem className="bold">{filter}</SelectItem>;
            })}
          </Select>
          <Select
            classNames={{
              trigger: ["border"],
            }}
            className="rooms xsm:w-[12rem] "
            label="Price"
            labelPlacement="outside"
            variant="bordered"
            placeholder="Price"
          >
            {price.map((filter) => {
              return <SelectItem className="bold">{filter}</SelectItem>;
            })}
          </Select>
        </div>
        <Select
          classNames={{
            trigger: ["border-b"],
          }}
          className="filters mx-auto hero:m-0 xsm:w-[12rem]"
          variant="underlined"
          placeholder="Sort by"
        >
          {filters.map((filter) => {
            return <SelectItem>{filter}</SelectItem>;
          })}
        </Select>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 md:grid-flow-row-4 pt-10 gap-x-6 ">
        {Array.from({ length: 10 }).map((product) => {
          return <ProductCard />;
        })}
      </div>
      <Button
        className="block mx-auto text-black/2 mb-24 font-medium w-[8rem]"
        radius="full"
        variant="bordered"
      >
        Show More
      </Button>
    </div>
  );
}

export default Products;
