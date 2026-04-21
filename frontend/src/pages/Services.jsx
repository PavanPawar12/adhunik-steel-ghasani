import image1 from "../assets/adhunic_assets/image1.jpeg";
import image2 from "../assets/adhunic_assets/image2.jpeg";
import image3 from "../assets/adhunic_assets/image3.jpeg";

import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <ServiceCard image={image1} title="all card" />
      <ServiceCard image={image2} title="card1" />
      <ServiceCard image={image3} title="card2" />
      
    </div>
  );
};

export default Services;