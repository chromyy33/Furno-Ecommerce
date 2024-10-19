import { Link } from "@nextui-org/link";
import { MoveRight } from "lucide-react";

function LinkBtn({ linkText = "Shop Now", color = "#343839", to = "#" }) {
  const iconSize = 16;

  return (
    <div style={{ borderBottom: `1px solid ${color}`,width:'fit-content' }}>
      {/* Link is focusable and includes accessible text */}
      <Link
        href={to}
        className="font-semibold text-[12px] xsm:text-base"
        style={{ color }} // Dynamic text color
        aria-label={`${linkText} - promotional offer`}
      >
        {linkText}
        {/* MoveRight icon with aria-hidden */}
        <MoveRight
          size={iconSize}
          className="ml-2"
          style={{ color }} // Dynamic icon color
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export default LinkBtn;
