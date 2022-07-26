import { Link } from "react-router-dom";
import { NavbarEndDesktop } from "../components/NavbarEndDesktop";
import { NavbarEndMobile } from "../components/NavbarEndMobile";

interface NavbarProps {}

export const Navbar = (_: NavbarProps): JSX.Element => {
  return (
    <header className="fixed w-full shadow">
      <nav className="navbar bg-white max-w-7xl m-auto p-4 relative">
        <Link to="/" className="navbar-start text-2xl text-blue-600 font-black">
          class
        </Link>
        <NavbarEndDesktop />
        <NavbarEndMobile />
      </nav>
    </header>
  );
};
