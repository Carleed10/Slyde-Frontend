import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CgMenu } from "react-icons/cg";
import { navigationLinks } from "./constants";
import TemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";

const Navbar = ({ onContactClick }) => {
  const [showDrawer, setshowDrawer] = useState(false);

  return (
    <div
      className="px-4 bg-[white] shadow-md text-[black] md:px-0 fixed top-0 w-full h-[13vh] sm:h-[13vh] flex items-center justify-center z-50"
    >
      <div className="w-full lg:w-[85%] md:px-4 lg:px-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[250px] md:w-[250px] cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex  items-center lg:gap-8 lg:gap-12 hidden lg:flex">
            {navigationLinks.map((data) => (
              <Link
                key={data.title}
                to={data.path}
                className="font-[400] cursor-pointer hover:text-[rgb(59,130,246)] transition-all duration-300"
              >
                {data.title}
              </Link>
            ))}
          </ul>

          {/* Menu Icon for Mobile */}
          <div
            onClick={() => setshowDrawer(true)}
            className="lg:hidden text-white lg:text-black p-2 rounded-md"
          >
            <CgMenu color="black" size={24} />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <TemporaryDrawer
        onClose={() => setshowDrawer(!showDrawer)}
        open={showDrawer}
      />
    </div>
  );
};

export default Navbar;
