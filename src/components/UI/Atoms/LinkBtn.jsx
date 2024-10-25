import { Link } from "@nextui-org/link";
import { MoveLeft, MoveRight } from "lucide-react";

function LinkBtn({
  linkText = "Shop Now",
  color = "#343839",
  to = "#",
  onClick,
  type = "link",
}) {
  const iconSize = 16;

  return (
    <div style={{ borderBottom: `1px solid ${color}`, width: "fit-content" }}>
      {/* Link is focusable and includes accessible text */}
      <Link
        href={to}
        onClick={onClick}
        className="font-semibold text-[12px] xsm:text-[14px]"
        style={{ color }} // Dynamic text color
        aria-label={`${linkText} - promotional offer`}
      >
        <MoveLeft
          size={iconSize}
          className={`mr-2 ${type !== "back" ? "hidden" : ""}`}
          style={{ color }} // Dynamic icon color
          aria-hidden="true"
        />
        {linkText}
        <MoveRight
          size={iconSize}
          className={`ml-2 ${type === "back" ? "hidden" : ""}`}
          style={{ color }} // Dynamic icon color
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export default LinkBtn;
