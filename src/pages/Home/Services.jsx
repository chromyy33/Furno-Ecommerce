import {
  Truck,
  Banknote,
  LockKeyhole,
  Phone,
  Mail,
  Store,
  MessageSquareDot
} from "lucide-react";
import ServiceCard from "../../components/UI/Atoms/ServiceCard";
function Services({ isContactInfo=false }) {
  const servicesData = [
    {
      text: "Free Shipping",
      subtext: "On orders above $200",
      icon: Truck,
    },
    {
      text: "Money back",
      subtext: "30 days guarantee",
      icon: Banknote,
    },
    {
      text: "Secure Payments",
      subtext: "Secured by Stripe",
      icon: LockKeyhole,
    },
    {
      text: "Support",
      subtext: "Phone and Email Support",
      icon: Phone,
    },
  ];
  const contactData = [
    {
      text: "Address",
      subtext: "New Delhi,India",
      icon: Store,
    },
    {
      text: "Contact Us",
      subtext: "Phone and Email Support",
      icon: Phone,
    },
    {
      text: "Email",
      subtext: "customer@3legant.com",
      icon:Mail,
    },
    {
      text: "Socials",
      subtext: "@3legantFinds",
      icon:MessageSquareDot,
    },
   
  ];
  const passedData=isContactInfo?contactData:servicesData

  return (
    <div className="services grid grid-cols-2 grid-rows-2 pb-12 gap-3  md:grid-cols-4 md:gap-6 md:grid-rows-1">
      {passedData.map((serviceData, index) => {
        return <ServiceCard key={index} serviceData={serviceData} />;
      })}
    </div>
  );
}

export default Services;
