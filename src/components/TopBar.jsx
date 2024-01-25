import notification from "../assets/notification.svg";
import HamburgerMenu from "../assets/hamburger-menu.svg";
import Close from "../assets/cross.svg";
import avatar from "../assets/avatar.png";
import Logo from "../assets/logo/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import { menuItems } from "../constants/MenuBarLinks";

const TopBar = ({showNavbar, triggerClick}) => {
  const [activePage, setActivePage] = useState("Upload");

  const handleClick=()=>{
    if (triggerClick) {
      triggerClick();
    }
  }

  return (
    <>
      <nav className={(!showNavbar && "hidden") + " absolute bg-white w-screen h-screen"}>
        <div>
          <div className="px-10 py-5 w-full flex justify-between">
            <Link to="/" className="flex gap-2 items-center">
              <img src={Logo} alt="Logo" />
              <span className="text-[#030229] text-[24px] font-[600]">
                Base
              </span>
            </Link>
            <img onClick={handleClick} src={Close} alt="" />
          </div>

          {/* Menu */}
          <div>
            <ul className="pl-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <Link to={item.route} key={item.label}>
                  <li onClick={handleClick} className="flex gap-2 items-center py-2">
                    <img className="w-[24px] h-[24px]" src={item.svg} alt="" />
                    <p
                      className={
                        " text-[16px] font-[600] " +
                        (activePage == item.label
                          ? "text-[#605BFF]"
                          : "text-[#9A9AA9]")
                      }
                    >
                      {item.label}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex justify-between w-full h-fit p-5 md:hidden">
        <div>
          <div className="w-full flex justify-center gap-4">
            <img onClick={handleClick} src={HamburgerMenu} alt="" />
            <Link to="/" className="flex gap-2 items-center">
              <img className="w-10 h-10" src={Logo} alt="Logo" />
              <span className="text-[#030229] text-[24px] font-[600]">
                Base
              </span>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img className="w-6" src={notification} alt="" />

          <img className="rounded-full w-10 h-10" src={avatar} alt="" />
        </div>
      </div>
    </>
  );
};

export default TopBar;
