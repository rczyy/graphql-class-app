import { Link } from "react-router-dom";
import { NavbarEndDesktop } from "../components/Navbar/NavbarEndDesktop";
import { NavbarEndMobile } from "../components/Navbar/NavbarEndMobile";

interface NavbarProps {}

export const Navbar = (_: NavbarProps): JSX.Element => {
  return (
    <header className="fixed w-full shadow">
      <nav className="navbar bg-white max-w-7xl m-auto p-4 relative">
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl text-blue-600 font-black hover:text-blue-700"
          >
            class
          </Link>
        </div>
        <NavbarEndDesktop />
        <NavbarEndMobile />
      </nav>
    </header>
  );
};
