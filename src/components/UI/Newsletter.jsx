import { Input } from "@nextui-org/react";
import { Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

function Newsletter() {
  return (
    <div className="newsletter flex flex-col bg-beige h-[28rem] md:h-[28rem] bg-right mt-10 justify-center">
      <div className="bg-none h-full md:bg-[url('footer.png')] bg-cover bg-no-repeat flex items-center ">
        <div className="md:bg-white/30 md:backdrop-blur-sm rounded-md md:border md:border-greyLogo/30 text-center md:shadow-lg mx-auto flex flex-col justify-center px-8 max-w-[40rem] h-[55%] md:w-[30rem] lg:w-[40%]">
          <div className=" h-full flex flex-col  justify-center text-center max-w-[26rem] mx-auto">
            <h4 className="mb-2">Join Our Newsletter</h4>
            <p className="font-medium mb-8">
              Sign up for deals, new products and promotions
            </p>
            <NewsletterForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
