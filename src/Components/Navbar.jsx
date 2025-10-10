import React from "react";
import navLogoImg from "../assets/logo.png";
import { Github, Home, AppWindow, Download } from "lucide-react"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "All Apps Page", path: "/all-apps-page", icon: <AppWindow className="w-4 h-4" /> },
    { name: "Installation", path: "/installation", icon: <Download className="w-4 h-4" /> },
  ];

  return (
    <div className="navbar bg-base-100 max-w-[1300px] mx-auto sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-1 transition ${
                      isActive
                        ? "text-[#753DE7] border-b-2 border-[#753DE7]"
                        : "text-black hover:text-gray-700"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex gap-3 w-10 h-10 items-center">
          <img src={navLogoImg} alt="Logo" />
          <NavLink
            to="/"
            className="text-xl text-[#753DE7] font-bold tracking-wide"
          >
            HERO.IO
          </NavLink>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 transition ${
                    isActive
                      ? "text-[#753DE7] border-b-2 border-[#753DE7]"
                      : "text-black hover:text-gray-700"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar Button */}
      <div className="navbar-end flex items-center">
        <a
          href="https://github.com/sakhawat236hossain?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white font-bold px-6 py-2 rounded-lg 
                     bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     hover:from-[#632EE3]/90 hover:to-[#9F62F2]/90
                     transition duration-300"
        >
          <Github className="w-5 h-5" /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
