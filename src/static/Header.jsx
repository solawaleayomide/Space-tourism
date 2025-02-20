import { NavLink } from "react-router-dom";

export function Header() {
  const getClassName = (isActive) => {
    return isActive
      ? "flex flex-row gap-2 border-b-2 border-white"
      : "flex flex-row gap-2";
  };

  return (
    <header className="relative z-10 text-white p-10 flex flex-row items-center justify-between">
      <div>
        <NavLink to="/">
          <img src="/assets/shared/logo.svg" />
        </NavLink>
      </div>

      <div className="hidden md:flex flex-row gap-8 list-none bg-white bg-opacity-20 py-5 pl-20 pr-5 font-barlowCondensed text-[0.9rem]">
        <li>
          <NavLink to="/" className={({ isActive }) => getClassName(isActive)}>
            <span className="font-bold">00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) => getClassName(isActive)}
          >
            <span className="font-bold">01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            className={({ isActive }) => getClassName(isActive)}
          >
            <span className="font-bold">02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            className={({ isActive }) => getClassName(isActive)}
          >
            <span className="font-bold">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </div>
    </header>
  );
}
