const ServiceCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;