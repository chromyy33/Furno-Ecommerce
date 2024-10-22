import { Truck, Banknote, LockKeyhole, Phone } from "lucide-react";
import ServiceCard from "./ServiceCard";

function Services() {
  const servicesData = [
    {
      text: "Free Shipping",
      subtext: "On orders above $200",
      icon: Truck, // You can use an actual icon component here if needed
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

  return (
    <div className="services grid grid-cols-2 grid-rows-2 pb-12 gap-3  md:grid-cols-4 md:gap-6 md:grid-rows-1">
      {servicesData.map((serviceData, index) => {
        return <ServiceCard key={index} serviceData={serviceData} />;
      })}
    </div>
  );
}

export default Services;
