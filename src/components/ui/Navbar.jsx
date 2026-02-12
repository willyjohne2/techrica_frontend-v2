import { Link } from "react-router-dom";
import logo from "../../assets/techrica-logo.png"
const Navbar = () => {

return (
  <header className="flex justify-between items-center fixed w-full bg-slate-950/98 backdrop:blur-2xl right-0 left-0 p-4 z-50">
    <Link to="/" className="">
      <img src={logo} alt="" className="max-w-[5em] h-auto" />
    </Link>

    <nav>
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
  </header>
);
};

export default Navbar;
