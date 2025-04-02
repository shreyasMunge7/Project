import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SummarAI
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:flex-row flex-col items-center p-4 md:p-0 transition-all ${
            isOpen ? "top-14" : "-top-60"
          }`}
        >
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/summarize" className="text-gray-700 hover:text-blue-500">
              Summarize
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
