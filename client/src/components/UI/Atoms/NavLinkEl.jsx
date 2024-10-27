
import { Badge } from "@nextui-org/badge";
import { NavLink } from "react-router-dom";
import CustomBadge from "./CustomBadge";
function NavLinkEl({
  name = "Link",
  to = "/",
  onClick,
  additionalStyles = "",
  icon = "",
  isBadge = false,
}) {
  return (
    <NavLink
      className={
        ({ isActive }) =>
          isActive
            ? "text-black2 font-semibold md:border-b-2 md:border-green " // Active link style
            : "font-semibold md:text-greyLogo hover:text-green" // Default style
      }
      to={to} // Link to the home page
      onClick={onClick}
    >
      <li
        className={`border-b-1 pb-4 md:pb-0 border-greyLight md:border-0 flex justify-between md:block cursor-pointer smooth ${additionalStyles} `}
      >
        <span className="capitalize">{name}</span>
        <span className="text-black flex items-center gap-2" size={20}>
          {icon}
          {isBadge && <CustomBadge value={3} />}
        </span>
      </li>
    </NavLink>
  );
}

export default NavLinkEl;
