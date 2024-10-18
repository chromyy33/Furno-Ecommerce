import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
function SocialIcons({ additionalStyles }) {
  const linksStyling = "hover:opacity-70 transition-all ease duration-150";
  return (
    <div className={`flex  ${additionalStyles}`}>
      <Link>
        <Button
          className="bg-transparent hover:bg-beige text-black"
          isIconOnly
        >
          <Instagram />
        </Button>
      </Link>
      <Link>
        <Button className="bg-transparent hover:bg-beige text-black" isIconOnly>
          <Facebook />
        </Button>
      </Link>
      <Link>
        <Button className="bg-transparent hover:bg-beige text-black" isIconOnly>
          <Twitter />
        </Button>
      </Link>
    </div>
  );
}

export default SocialIcons;
