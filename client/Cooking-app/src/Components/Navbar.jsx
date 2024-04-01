import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { UserContext } from "../UserContext";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [avatar, setAvatar] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const logOutUser = async (e) => {
    e.preventDefault;
    await axios.post("/logout", {});
    navigate("/login");
    await user(null);
  };

  return (
    <div className="py-10 pl-5 md:flex md:flex-row items-center md:h-[119px] md:px-10 bg-[#FFF5E1] z-[100]">
      <div className="text-2xl font-bold font-pacifico">
        Family<span className=" font-bold text-[#FF642F]">Kitchen</span>
      </div>

      <div
        className={`bg-[#FFF5E1] md:flex flex-col md:flex-row items-center w-full justify-between px-5 md:mx-10 md:z-auto absolute left-0 md:static md:translate-y-0 transition-all duration-300 ease-in ${
          menu ? "translate-y-[-300px]" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 font-semibold mt-5 md:mt-0 z-[1] md:pl-[410px] ">
          <Link
            className="transition-all duration-200 ease-in hover:text-[#FF642F]"
            to="/"
          >
            Homepage
          </Link>
          <Link
            className="transition-all duration-200 ease-in hover:text-[#FF642F]"
            to="/recipes"
          >
            Recipes
          </Link>
          <Link
            className="transition-all duration-200 ease-in hover:text-[#FF642F]"
            to="/cookingtips"
          >
            Cooking Tips
          </Link>
          <Link
            className="transition-all duration-200 ease-in hover:text-[#FF642F]"
            to="/aboutus"
          >
            About Us
          </Link>
        </div>
        <div className="md:flex flex-col items-center">
          {!!user ? (
            <div
              onClick={() => setAvatar(!avatar)}
              className="mt-10 md:mt-0 text-4xl text-[#000000] pb-5 md:pb-0 cursor-pointer "
            >
              <MdAccountCircle />
            </div>
          ) : (
            <div
              onClick={() => setAvatar(!avatar)}
              className="mt-10 md:mt-0 text-4xl text-[#FF642F] pb-5 md:pb-0 cursor-pointer "
            >
              <MdAccountCircle />
            </div>
          )}
          <div
            className={`absolute flex flex-col items-center justify-center text-lg font-semibold w-[125px] h-auto bg-white p-5 gap-4 rounded-2xl top-56 left-2 md:left-auto md:top-10 transition-all duration-300 ease-in ${
              avatar ? "hidden" : "opacity-100"
            }`}
          >
            {!!user ? (
              <Link
                to="/addrecipe"
                className="hover:text-[#FF642F] transition-all duration-200 "
              >
                Post
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:text-[#FF642F] transition-all duration-200 "
              >
                Log In
              </Link>
            )}
            {!!user ? (
              <button
                onClick={logOutUser}
                className="hover:text-[#FF642F] transition-all duration-200 "
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="hover:text-[#FF642F] transition-all duration-200 "
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className="absolute right-10 top-10 text-2xl md:hidden"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <RxHamburgerMenu /> : <RxCross2 />}
      </div>
    </div>
  );
};

export default Navbar;
