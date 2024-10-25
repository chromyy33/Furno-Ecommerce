function Overlay({ isOpen, additionalStyles = "" ,onClick}) {
  return (
    isOpen && (
      <div
        className={`absolute w-screen h-screen bg-black2/30 inset-0 md:hidden ${additionalStyles}`}
        onClick={onClick}
      ></div>
    )
  );
}

export default Overlay;
