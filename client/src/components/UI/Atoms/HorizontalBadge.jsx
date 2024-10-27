
function HorizontalBadge({
  newArrival = false,
  discount = false,
  content = "content",
  additionalStyles,
}) {
  return (
    <span
      className={`${discount ? "bg-green text-white " : ""} ${
        newArrival ? "bg-white text-black" : ""
      } uppercase text-[12px] flex items-center font-medium px-[8px] rounded-[4px] h-[1.2rem] text-center tracking-[.5px]`}
    >
      {content}
    </span>
  );
}

export default HorizontalBadge;
