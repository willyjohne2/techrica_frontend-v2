import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {useState} from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
return (
  <header className="flex justify-between items-center fixed w-full bg-slate-950/98 backdrop:blur-2xl right-0 left-0 p-4 z-50">
    <Link to="/" className="">
      <img
        src="./techrica-logo.png"
        alt="TechRica Logo"
        className="max-w-[3em] h-auto"
      />
    </Link>

    <nav  className="hidden md:block">
      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
    {
      isOpen && <nav className="absolute top-full w-full block md:hidden bg-slate-950 p-4 shadow-lg">
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    }
    <div onClick={toggleMenu} className="text-2xl cursor-pointer md:hidden">
      <FaBars size={20} />
    </div>
  </header>
);
};

export default Navbar;
