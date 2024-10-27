import { Form } from "react-router-dom";
import Sale from "../Home/Sale";
import Services from "../Home/Services";
import { Button, Input, Textarea } from "@nextui-org/react";

function Contact() {
  return (
    <div className="mx-auto max-width px-8 pt-10">
      <h3 className="pb-6 md:w-[50%]">
        We believe in sustainable decor. We’re passionate about life at home.
      </h3>
      <p className="font-medium pb-10 md:w-[70%]">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
      <Sale isContactInfo />
      <Services isContactInfo />
      <div className="flex flex-col md:grid  grid-cols-2 gap-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9695626435887!2d77.21406518727319!3d28.63067432143461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd363ae86c37%3A0x32422089d4931b51!2sPalika%20Bazar%20Underground%20Shopping%20Complex!5e0!3m2!1sen!2sca!4v1729989487933!5m2!1sen!2sca"
          className="w-full h-[22rem] pb-6 md:order-1"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4 pb-24"
        >
          <Input
            type="text"
            variant="bordered"
            label="FULLNAME"
            labelPlacement="outside"
            placeholder="Your Name"
            radius="none"
            classNames={{
              inputWrapper: ["border", "rounded-[6px]"],
            }}
          />
          <Input
            type="email"
            radius="none"
            required
            variant="bordered"
            label="EMAIL ADDRESS"
            labelPlacement="outside"
            placeholder="Your Email"
            classNames={{
              inputWrapper: ["border", "rounded-[6px]"],
            }}
          ></Input>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-2">
              MESSAGE
            </label>
            <textarea
              type="email"
              required
              variant="bordered"
              label="MESSAGE"
              labelPlacement="outside"
              placeholder="Your Message"
              radius="none"
              name="message"
              id="message"
              className="border px-3 py-3 rounded-[6px] h-36 focus:outline shadow-sm"
            ></textarea>
          </div>
          <Button
            type="submit"
            radius="sm"
            className="bg-black text-white w-[15rem] mx-auto"
          >
            Send Message
          </Button>
        </form>
      </div>
      <Services />
    </div>
  );
}

export default Contact;
