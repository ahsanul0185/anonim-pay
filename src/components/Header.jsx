import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    link: "",
  },
  {
    name: "Order List",
    link: "orders",
  },
  {
    name: "Address List",
    link: "address-list",
  },
];

const Header = () => {
  return (
    <header>
      <div className="bg-primary py-3 px-8">
        <img className="w-44" src={logo} alt="" />
      </div>

      <nav className="text-black flex items-center gap-6 md:gap-10 py-5 px-8">
        {navItems.map((item, idx) => (
          <NavLink
            to={item.link}
            key={idx}
            className="relative text-sm md:text-base"
          >
            <p className="font-bold">{item.name}</p>
            <span className="block absolute -bottom-1 md:-bottom-2 h-0.5 md:h-1 w-[80%] left-1/2 -translate-x-1/2 rounded-full"></span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
