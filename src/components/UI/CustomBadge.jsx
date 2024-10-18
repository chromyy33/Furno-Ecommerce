function CustomBadge({
  colorBg = "bg-black2",
  colorText = "text-white",
  additionalStyles = "",
  value = 0,
}) {
  return (
    <span
      className={` badge cart-items flex items-center justify-center ${colorBg} ${colorText} rounded-full w-2 h-2 p-3 text-xsm font-semibold`}
    >
      {value}
    </span>
  );
}

export default CustomBadge;
