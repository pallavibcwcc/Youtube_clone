import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import profile from "../assets/profile.png";
const Navbar = () => {
  return (
    <div className="text-white flex px-14 h-14 justify-between items-center bg-[#212121] opacity-95 sticky">
      <div className="flex gap-5 items-center text-2xl text-white">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <IoLogoYoutube className="text-2xl text-red-700" />
          <span>Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-between  gap-5 items-center rounded-3xl">
        <form>
          <div className="flex bg-zinc-900">
            <div className="flex gap-5 items-center pr-5 color-white">
              <input
                className="flex bg-zinc-900 focus:outline-none border-none"
                placeholder="search"
                type="text"
              />
            </div>
            <button>
              {" "}
              <FaSearch className="h-5 w-13 flex items-center" />
            </button>
          </div>
        </form>
<h1>pall</h1>
        <div className=" text-xl p-3 rounded-full bg-zinc-900">
          <FaMicrophone />
        </div>
      </div>

      <div className="flex  gap-5 items-center text-xl ">
        <span className='flex bg-zinc-900 focus:outline-none border-none rounded-3xl"'>
          {" "}
          <FaPlus />
          Create{" "}
        </span>

        <div className="relative ">
          <FaBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            2+
          </span>
        </div>
        <img src={profile} alt="error" className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
};
export default Navbar;
