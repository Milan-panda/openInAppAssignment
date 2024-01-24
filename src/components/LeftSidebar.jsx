import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import { menuItems } from "../constants/MenuBarLinks";
import { useState } from "react";

const LeftSidebar = () => {
  const [activePage, setActivePage] = useState("Upload")

  return (
    <nav className="hidden md:flex">
      <div>
        <div className="p-10 w-full flex justify-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" />
            <span className="text-[#030229] text-[24px] font-[600]">Base</span>
          </Link>
        </div>

        {/* Menu */}
        <div>
          <ul className="pl-6 flex flex-col gap-5">
            {menuItems.map((item) => (
              <Link to={item.route} key={item.label}>
                <li className="flex gap-2 items-center py-2">
                  <img className="w-[24px] h-[24px]" src={item.svg} alt="" />
                  <p className={" text-[16px] font-[600] " + (activePage==item.label ? "text-[#605BFF]" : "text-[#9A9AA9]")}>{item.label}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LeftSidebar;
