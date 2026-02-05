import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/example" className="hover:text-blue-400">
            Example
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
