import React from "react";
import { Link, useLocation, Location } from "react-router-dom";

const Navbar: React.FC = () => {
  const location: Location = useLocation();

  return (
    <nav className="w-full border-b-[1px] border-main-shadow py-[6px] px-[12px] flex items-center justify-between">
      <div className="flex items-center gap-[100px]">
        <h1 className="text-[26px] font-bold block p-[6px] text-main">TaskMG</h1>
        <ul className="flex items-center justify-start gap-[34px] text-[18px] font-semibold">
          <li>
            <Link className={`block p-[10px] cursor-pointer ${location.pathname === "/" ? "text-second" : "text-main-shadow"}`} to="/">Home</Link>
          </li>
          <li>
            <Link className={`block p-[10px] cursor-pointer ${location.pathname === "/tasks" ? "text-second" : "text-main-shadow"}`} to="/tasks">Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-second shadow-md shadow-second-shadow text-white font-bold px-[12px] py-[6px] rounded-md">Test</button>
      </div>
    </nav>
  );
};
                                                                                            
export default Navbar;
