import { Outlet } from "react-router-dom";

import LoginLogo from "../assets/logo/login-logo.png";
import github from "../assets/socialMedia/github.svg";
import twitter from "../assets/socialMedia/twitter.svg";
import linkedin from "../assets/socialMedia/linkedin.svg";
import discord from "../assets/socialMedia/discord.svg";

const AuthLayout = () => {
  return (
    <>
      <div className="authLayout hidden sm:flex flex-col justify-between py-10 px-8">
        <div>
          <img className="w-[80px] h-[80px]" src={LoginLogo} alt="logo" />
        </div>
        <div className="text-center">
          <h1 className="uppercase text-[72px] font-bold leading-normal text-white font-[Montserrat]">
            base
          </h1>
        </div>
        <div className="flex gap-2 justify-center">
          <img src={github} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>

      <section className="flex items-center authLayout-OutletSection">
        <div className="bg-[#605BFF] flex sm:hidden w-full py-6 pl-4">
          <div className="flex gap-2 items-center">
            <img className="w-[25px] h-[25px]" src={LoginLogo} alt="" />
            <span className="text-[#FAFAFB] text-[20px] font-semibold">Base</span>
          </div>
        </div>  
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
