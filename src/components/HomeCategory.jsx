import { Card, CardBody, CardHeader } from "@nextui-org/react";
import LinkBtn from "./UI/LinkBtn";
function HomeCategory({ category, additionalStyles }) {
  const { name, url } = category;
  return (
    <Card shadow="none" radius="sm" className={`bg-beige px-5 border py-4 ${additionalStyles} `}>
      <CardHeader className="z-[initial]">
        <div className="title">
          <h4 className="font-medium md:mb-2 md:flex-grow">{name}</h4>
          <LinkBtn to={`/${name}`} />
        </div>
      </CardHeader>
      <CardBody className=" w-[12rem] mx-auto  xsm:w-[14rem] sm:w-full max-w-[20rem] overflow-y-hidden">
        <img
          className="md:mt-auto md:mb-auto md:self-center object-contain "
          src={url}
          alt="image"
        />
      </CardBody>
    </Card>
  );
}

export default HomeCategory;
