import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoPng from "../../assets/img/imgbin_logo-letter-font-png.png"

const Header = () => {
  const [header, setHeader] = useState(false);

  const changeLayoutHeader = () => {
    if (window.scrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLayoutHeader);
    return () => window.removeEventListener("scroll", changeLayoutHeader);
  }, []);

  const topHeader = document.getElementById("#header");

  const handleTopHeader = () => {
    topHeader.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };

  const logoHeader = document.getElementById("#logo");
  const handleLogoHeader = () => {
    logoHeader.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };

  return (
    <div
      className={`xl:container px-10 flex justify-between py-4 fixed w-full z-50
            ${
              header
                ? "bg-white border-b-2 border-gray-200 transition  duration-500"
                : " transition duration-500"
            }
        
        `}
    >
      <div
        id="logo"
        onClick={handleLogoHeader}
        className="text-red-400 w-1/4 cursor-pointer"
      >
        <img className="xl:w-1/6 md:w-1/4 w-3/5" src={logoPng} alt="logo" />
      </div>
      <div className="lg:hidden">
        <FontAwesomeIcon className="mt-3" fontSize={24} icon={faBars} />
      </div>
      <div className="mt-2 hidden lg:block ">
        <div>
          <ul
            style={{ color: "#003134a6" }}
            className="flex font-medium text-lg"
          >
            <li
              id="header"
              onClick={handleTopHeader}
              className="mx-8 cursor-pointer"
            >
              Home
            </li>
            <li className="mx-8 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="mx-8 cursor-pointer">
              <a href="#resume">Resume</a>
            </li>
            <li className="mx-8 cursor-pointer">
              <a href="#skill">Skill</a>
            </li>
            <li className="mx-8 cursor-pointer">
              <a href="#project">Project</a>
            </li>
            <li className="mx-8 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
