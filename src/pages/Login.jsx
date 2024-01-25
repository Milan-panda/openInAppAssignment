import Google from "../assets/google-icon.svg";
import Apple from "../assets/apple-icon.svg";
import github from "../assets/socialMediaMobile/github.svg";
import twitter from "../assets/socialMediaMobile/twitter.svg";
import linkedin from "../assets/socialMediaMobile/linkedin.svg";
import discord from "../assets/socialMediaMobile/discord.svg";

const Login = () => {
  return (
    <div className="w-auto flex flex-col gap-5 pt-4 sm:pl-5  ">
      <div>
        <h1 className="text-[36px] font-bold font-[Montserrat]">Sign In</h1>
        <span className="text-[16px] font-normal font-[Lato]">
          Sign in to your account
        </span>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex gap-4 bg-white px-4 py-2 rounded-lg">
          <img src={Google} alt="" />
          <span className="text-[#858585] text-sm font-normal">
            Sign in with Google
          </span>
        </div>
        <div className="flex gap-4 bg-white px-4 py-2 rounded-lg">
          <img src={Apple} alt="" />
          <span className="text-[#858585] text-sm font-normal">
            Sign in with Apple
          </span>
        </div>
      </div>
      <div>
        <form className="bg-white p-8 rounded-[20px] flex flex-col gap-[20px]">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[16px] font-normal">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#F5F5F5] rounded-[10px] p-2 focus:bg-[#EAEAEA] outline-none border-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[16px] font-normal">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[#F5F5F5] rounded-[10px] p-2 focus:bg-[#EAEAEA] outline-none border-none"
            />
          </div>
          <div>
            <a href="#" className="text-[#346BD4] text-[16px] font-normal">
              Forgot Password?
            </a>
          </div>
          <div className="bg-[#605BFF] rounded-xl text-center py-3">
            <button type="submit" className="text-white text-[16px] font-bold">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <p className="text-[#858585] text-[16px] font-normal">
          Don't have an account?{" "}
          <a href="/" className="text-[#346BD4]">
            Register here
          </a>
        </p>
      </div>

      <div>
        <div className="sm:hidden flex gap-4 justify-center pb-6">
          <img src={github} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
