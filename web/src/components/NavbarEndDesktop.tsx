import { Link, NavLink } from "react-router-dom";

interface NavbarEndDesktopProps {}

export const NavbarEndDesktop = (_: NavbarEndDesktopProps): JSX.Element => {
  return (
    <div className="navbar-end font-bold gap-8 hidden md:flex">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-black"
            : "text-zinc-400 transition-colors hover:text-black"
        }
      >
        Sign In
      </NavLink>
      <Link to="/register">
        <button className="btn bg-blue-600 text-white normal-case border-0 hover:bg-blue-500">
          Get Started
        </button>
      </Link>
    </div>
  );
};
