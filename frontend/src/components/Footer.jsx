import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            सह्याद्री स्टील घासणी
          </h2>
          <p className="text-sm">
            आम्ही सर्व प्रकारच्या स्टील वस्तूंना धार लावण्याची सेवा देतो.
            दुकानदारांसाठी विश्वासार्ह आणि वेळेवर सेवा.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">जलद लिंक</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                मुख्यपान
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-yellow-400">
                सेवा
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-yellow-400">
                गॅलरी
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                संपर्क
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">संपर्क</h3>
          <p className="text-sm mb-2">📍चिंचाळा,तालुका वडवणी, जि.बीड महाराष्ट्र(431144)</p>

          <a
            href="tel:9876543210"
            className="block hover:text-yellow-400 text-sm"
          >
            📞 9730074760,7038939331
          </a>

          <a
            href="https://wa.me/919730074760"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-yellow-400 text-sm mt-2"
          >
            💬 WhatsApp करा
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 सह्याद्री स्टील घासणी | सर्व हक्क राखीव
      </div>
    </footer>
  );
};

export default Footer;
