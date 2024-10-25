import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import SocialIconItem from "./UI/Atoms/SocialIconItem";
function SocialIcons({ additionalStyles = "" }) {
  return (
    <div className={`flex group ${additionalStyles}`}>
      <SocialIconItem>
        <Instagram />
      </SocialIconItem>
      <SocialIconItem>
        <Facebook />
      </SocialIconItem>

      <SocialIconItem>
        <Twitter />
      </SocialIconItem>
    </div>
  );
}

export default SocialIcons;
