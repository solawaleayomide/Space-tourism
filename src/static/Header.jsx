import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-10 text-white p-10 flex items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/">
          <img src="/assets/shared/logo.svg" alt="Logo" />
        </NavLink>

        <div className="md:hidden" onClick={toggleMenu}>
          <img
            src={
              isMenuOpen
                ? "/assets/shared/icon-close.svg"
                : "/assets/shared/icon-hamburger.svg"
            }
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[50%] flex flex-col backdrop-blur bg-opacity-80 text-white z-1000 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end pt-[3.3rem] pr-[2.5rem]">
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close Menu"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <NavLinks className="gap-10 pt-[7rem]" closeMenu={closeMenu} />
      </div>

      <div className="hidden md:block">
        <NavLinks />
      </div>
    </header>
  );
}

// eslint-disable-next-line react/prop-types
function NavLinks({ className, closeMenu }) {
  const getClassName = (isActive) => {
    return isActive ? "flex gap-2 border-b-2 border-white" : "flex gap-2";
  };

  return (
    <ul
      className={`flex gap-5 bg-white bg-opacity-20 list-none py-5 pl-16 pr-5 font-barlowCondensed text-[0.9rem] ${className}`}
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => getClassName(isActive)}
          onClick={closeMenu}
        >
          <span className="font-bold">00</span> HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive }) => getClassName(isActive)}
          onClick={closeMenu}
        >
          <span className="font-bold">01</span> DESTINATION
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew"
          className={({ isActive }) => getClassName(isActive)}
          onClick={closeMenu}
        >
          <span className="font-bold">02</span> CREW
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/technology"
          className={({ isActive }) => getClassName(isActive)}
          onClick={closeMenu}
        >
          <span className="font-bold">03</span> TECHNOLOGY
        </NavLink>
      </li>
    </ul>
  );
}
