import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
function SocialIconItem({ children }) {
  return (
    <Link>
      <Button
        className="smooth bg-transparent text-inherit group hover:invert"
        isIconOnly
      >
        {children}
      </Button>
    </Link>
  );
}

export default SocialIconItem;
