// import image1 from "../assets/adhunic_assets/image1.jpeg";
// import image2 from "../assets/adhunic_assets/image2.jpeg";
// import image3 from "../assets/adhunic_assets/image3.jpeg";
// import image4 from "../assets/adhunic_assets/image4.jpeg";
// import image5 from "../assets/adhunic_assets/image5.jpeg";

// import ServiceCard from "../components/ServiceCard.jsx";

// const Services = () => {
//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
//       <ServiceCard image={image1} title="all card" />
//       <ServiceCard image={image2} title="card1" />
//       <ServiceCard image={image3} title="card2" />
//       <ServiceCard image={image4} title="card2" />
//       <ServiceCard image={image5} title="card2" />
      
//     </div>
//   );
// };

// export default Services;


import { useState } from "react";

import image1 from "../assets/adhunic_assets/image1.jpeg";
import image2 from "../assets/adhunic_assets/image2.jpeg";
import image3 from "../assets/adhunic_assets/image3.jpeg";
import image4 from "../assets/adhunic_assets/image4.jpeg";
import image5 from "../assets/adhunic_assets/image5.jpeg";

import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { img: image1, title: "" },
    { img: image2, title: "card 1" },
    { img: image3, title: "card 2" },
    { img: image4, title: "" },
    { img: image5, title: "" },
  ];

  return (
    <div className="p-6">
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div key={index} onClick={() => setSelectedImage(item.img)}>
            <ServiceCard image={item.img} title={item.title} />
          </div>
        ))}
      </div>

      {/* 🔥 Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full px-4">
            
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;