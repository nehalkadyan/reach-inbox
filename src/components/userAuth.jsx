import React from "react";
import logo from "../assets/reach_inbox_logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const UserAuth = ({ title, subtitle, btnText, btnCaption, handleClick }) => {
  return (
    <div className="bg-mainBG h-screen flex flex-col items-center justify-between">
      <div className="p-2.5 flex justify-center border-b border-b-Border1 w-full">
        <img className="w-40 h-8" src={logo} alt="logo" />
      </div>

      <div className="pt-6 px-10 pb-10 bg-gradient-to-r from-darkGray1 to-darkGray2 rounded-md border border-Border1">
        <form className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 items-center">
            <h4 className="text-xl font-semibold leading-8 text-white font-sans">
              {title}
            </h4>

            <div
              onClick={() => handleClick()}
              className="flex justify-center h-12 border w-96 rounded border-lightBorder items-center py-2 px-4 gap-3 cursor-pointer"
            >
              <div>
                <FcGoogle className="w-4 h-5" />
              </div>
              <button className="text-base  text-lightGray text0 leading-7 font-normal font-sans">
                {subtitle} with Google
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button className="py-3.5 bg-gradient-to-r from-customBlue1 to-customBlue2 rounded text-sm px-9 font-sans text-white">
              {btnText}
            </button>

            <div className="font-sans text-alreadyHaveAnAccount font-normal text-base">
              {btnCaption}{" "}
              <Link
                to={subtitle === "Sign Up" ? "/login" : "/register"}
                className="text-signIn text- cursor-pointer font-sans"
              >
                {subtitle === "Sign Up" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="py-5 w-full text-center">
        <p className="text-xs leading-4 font-sans text-copyright">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UserAuth;
