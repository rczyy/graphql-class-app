import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

interface NavbarEndMobileProps {}

export const NavbarEndMobile = (_: NavbarEndMobileProps): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar-end md:hidden">
      <label className="swap swap-rotate text-2xl">
        <input type="checkbox" onChange={() => setOpenMenu(!openMenu)} />
        <FiMenu className="swap-off" />
        <FiX className="swap-on" />
      </label>
      <ul
        className={`menu bg-white w-36 font-semibold rounded-box border shadow absolute -z-10 transition-all ${
          openMenu ? "top-full translate-y-2" : "-top-10"
        }`}
      >
        <li className="transition hover:bg-zinc-100">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-zinc-400 hover:text-black"
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className="transition hover:bg-zinc-100">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-zinc-400 hover:text-black"
            }
          >
            Get Started
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
