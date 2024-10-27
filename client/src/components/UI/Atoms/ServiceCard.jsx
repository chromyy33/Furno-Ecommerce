function ServiceCard({ serviceData }) {
  const { icon: IconComponent, text, subtext } = serviceData; // Destructure icon as IconComponent

  return (
    <div className="bg-beige px-4 py-8 h-[12rem] rounded-md shadow-sm border flex flex-col  ">
      <span className="">
        {<IconComponent size={36} className='xsm:w-[50px] h-[50px]' strokeWidth={1} />}
      </span>
      <h6 className="font-semibold mt-auto mb-1 text-lg">{text}</h6>
      <p className="tracking-normal font-medium text-greyLogo text-sm max-w-[10ch] xsm:max-w-[initial]">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
