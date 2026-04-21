const Contact = () => {
  return (
    <div className="py-10 px-4 min-h-screen bg-white">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        संपर्क करा
      </h2>

      <p className="text-center text-gray-600 mb-8">
        अधिक माहितीसाठी आमच्याशी संपर्क साधा
      </p>

      {/* Contact Box */}
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md text-center">
        
        <h3 className="text-xl font-semibold mb-4">
          आधुनिक स्टील घासणी
        </h3>

        <p className="mb-2">📍चिंचळा,तालुका वडवाणी,जिल्हा बीड, महाराष्ट्र</p>

        <p className="mb-2">⏰ वेळ: सकाळी 7 ते संध्याकाळी 10</p>

        {/* Call */}
        <a
          href="tel:9730074760"
          className="block bg-yellow-500 text-black py-2 rounded-lg mt-4"
        >
          📞 कॉल करा
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919730074760"
          target="_blank"
          rel="noreferrer"
          className="block bg-green-600 text-white py-2 rounded-lg mt-3"
        >
          💬 WhatsApp करा
        </a>

      </div>

    </div>
  );
};

export default Contact;