import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Register from "./Register.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-yellow-400" : "hover:text-yellow-400";

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* 🔥 Logo (Updated Brand Style) */}
        <Link to="/" onClick={handleCloseMenu} className="flex flex-col leading-tight">
          
          {/* Marathi Main Name */}
          <h1 className="text-xl md:text-2xl font-extrabold text-yellow-400 tracking-wide">
            सह्याद्री स्टील घासणी
          </h1>

          {/* English Subtitle */}
          <span className="text-[10px] md:text-xs text-gray-300 tracking-widest">
            STAINLESS STEEL SCRUBBER
          </span>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              मुख्यपान
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkStyle}>
              सेवा
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={navLinkStyle}>
              गॅलरी
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              संपर्क
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <NavLink to="/register" className=" hidden md:block bg-green-500 px-4 py-2 rounded-2xl font-bold">
          Register/login
        </NavLink>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3 text-lg">
          
          <NavLink to="/" onClick={handleCloseMenu} className="block border-b pb-2">
            मुख्यपान
          </NavLink>

          <NavLink to="/services" onClick={handleCloseMenu} className="block border-b pb-2">
            सेवा
          </NavLink>

          <NavLink to="/gallery" onClick={handleCloseMenu} className="block border-b pb-2">
            गॅलरी
          </NavLink>

          <NavLink to="/contact" onClick={handleCloseMenu} className="block border-b pb-2">
            संपर्क
          </NavLink>

          {/* Authentication */}
          <NavLink to="/register">
          Register/login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;