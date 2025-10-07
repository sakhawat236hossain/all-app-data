import React, { useState } from "react";
import navLogoImg from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Apps", "Installation"];

  return (
    <div className="navbar bg-base-100  max-w-[1300px] mx-auto sticky top-0 z-50">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setActive(link)}
                  className={`px-2 py-1 transition ${
                    active === link
                      ? "text-[#753DE7] border-b-2 border-[#753DE7]"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 w-10 h-10">
          <img src={navLogoImg} alt="" />
          <a className="text-xl text-[#753DE7]">HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setActive(link)}
                className={`px-2 py-1 transition ${
                  active === link
                    ? "text-[#753DE7] border-b-2 border-[#753DE7]"
                    : "text-black hover:text-gray-700"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
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
