import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link className="block p-[10px] cursor-pointer" to="/">Home</Link>
        </li>
        <li>
          <Link className="block p-[10px] cursor-pointer" to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};
                                                                                            
export default Navbar;
