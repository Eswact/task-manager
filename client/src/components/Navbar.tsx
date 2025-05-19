import React from "react";
import { Link, useLocation, Location } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeNavbar } from "../scripts/common";

const Navbar: React.FC = () => {
  const location: Location = useLocation();
  return (
    <aside id="asideBar" className="z-20 fixed flex flex-col gap-[28px] overflow-hidden left-0 top-0 h-full py-[34px] w-[80px] md:w-0 hover:w-[248px] md:hover:w-0 transition-all bg-main shadow-[0_2px_3px_3px] shadow-main-shadow  md:shadow-none dark:bg-[#1C384C]">
      {/* logo */}
      <div className="flex items-center gap-[12px] p-[12px]">
        <img className="rounded-lg bg-white h-[56px] w-[56px]" src="/logo.png" alt="logo" />
        <h1 className="text-[26px] font-bold block p-[6px] text-white">TaskNexus</h1>
      </div>
      {/* navigation links */}
      <ul className="flex flex-col items-start justify-start gap-[2px] py-[20px] font-semibold">
        <li className="flex justify-start items-center w-full">
          <Link title="Home" className={`w-full h-full flex items-center gap-[20px] px-[18px] py-[12px] cursor-pointer text-white transition-all hover:bg-second`} to="/" onClick={closeNavbar}>
            <span className={`p-[8px] w-[44px] border-box flex justify-center items-center ${location.pathname === "/" ? "bg-second rounded-lg" : ""}`}>
              <FontAwesomeIcon className="min-w-[30px] flex justify-center items-center text-[26px]" icon={["fas", "home"]}/>
            </span>
            <span className="text-[1.5rem]">Home</span>
          </Link>
        </li>
        <li className="flex justify-start items-center w-full">
          <Link title="Tasks" className={`w-full h-full flex items-center gap-[20px] px-[18px] py-[12px] cursor-pointer text-white transition-all hover:bg-second`} to="/tasks" onClick={closeNavbar}>
            <span className={`p-[8px] w-[44px] border-box flex justify-center items-center ${location.pathname === "/tasks" ? "bg-second rounded-lg" : ""}`}>
              <FontAwesomeIcon className="min-w-[30px] flex justify-center items-center text-[26px]" icon={["fas", "calendar-check"]}/>
            </span>
            <span className="text-[1.5rem]">Tasks</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
                                                                                            
export default Navbar;