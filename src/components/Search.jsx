import { Button, Card, Input, CardBody } from "@nextui-org/react";
import { X, Search as SearchIcon } from "lucide-react";
import { useEffect } from "react";
import SearchItem from "./UI/SearchItem";
function Search({ isSearchOpen, setIsSearchOpen }) {
  // Sync overflow: hidden with isOpen
  useEffect(() => {
    if (isSearchOpen) {
      // Add overflow: hidden to body when isOpen is true
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when isOpen is false
      document.body.style.overflow = "";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = ""; // Ensure the style is removed when component unmounts
    };
  }, [isSearchOpen]); // Effect will run whenever isOpen changes
  return (
    <>
      <div
        className={`fixed h-[80vh] w-screen z-[20] bg-white overflow-hidden inset-0 smooth duration-500 ${
          isSearchOpen
            ? "translate-y-[0%] opacity-100"
            : "translate-y-[-100%] opacity-0"
        }`}
      >
        <Button
          className="bg-transparent absolute z-[1]  right-2 top-10 sm:right-10 hover:bg-beige"
          isIconOnly
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <X size={24} className="text-greyLogo" />
        </Button>
        <div className=" h-[85%] w-full absolute bottom-0 ">
          <div className="items-center mx-auto w-[fit-content] ">
            <span className="flex items-center mb-2  ">
              <SearchIcon className="text-black mr-2 lg:w-[28px] lg:h-[28px]" />
              <h1 className="text-[1.5rem] font-medium text-black lg:text-[28px]">Search</h1>
            </span>
            <Input
              type="text"
              isClearable
              radius="sm"
              className="search-input w-[20rem] xsm:w-[25rem] sm:w-[30rem] font-semibold"
              size="lg"
              classNames={{
                inputWrapper:'border'
              }}
              variant="bordered"
              placeholder="Search for an item..."
            />
            <Card radius="sm" className="mt-1 w-[full] mx-auto border " shadow="none">
              <CardBody className="p-0 pb-3">
                <ul className="search-history flex flex-col">
                  <li className="font-medium flex items-center px-3 text-greyLogo pt-3 pb-1">Popular Searches</li>
                  <SearchItem trending/>
                  <SearchItem trending/>
                  <li className="font-medium flex items-center px-3 text-greyLogo pt-3 mt-3 pb-1">Discover More</li>
                  <SearchItem discover/>
                  <SearchItem discover/>
                </ul>


              </CardBody>
            </Card>

          </div>
        </div>
      </div>
      <div
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className={`overlay fixed bg-black2/10 w-screen inset-0 h-screen z-[10] ${
          isSearchOpen ? "opacity-100 block" : "opacity-0 hidden "
        }`}
      ></div>
    </>
  );
}

export { Search };
