import React, {useEffect} from "react";
import { Link, useLocation, Location, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNavbar } from "../scripts/common";

const Header: React.FC = () => {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const exit = () => {
    logout();
    navigate('/login');
  };

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  useEffect(() => {
    const darkModeEnabled = document.body.classList.contains('dark');
    (document.querySelector('.theme-controller') as HTMLInputElement).checked = darkModeEnabled;
  }, []);

  return (
    <header className="w-[calc(100%-80px)] md:w-full fixed top-0 left-[80px] md:left-0 h-[90px] bg-[#F5F5F5] dark:bg-dark justify-center items-center px-[50px] pt-[25px] md:px-[20px]">
      <nav className="w-full h-full px-[40px] md:px-[20px] py-[4px] flex items-center justify-between border-[1px] border-main bg-[#364F6B3e] rounded-md dark:border-[rgba(255,255,255,0.75)] dark:bg-[#1C384C]">
        <div className="flex items-center">
          <button onClick={showNavbar} className="hidden md:block text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "bars"]}/></button>
        </div>
        <div className="flex gap-[34px] md:gap-[20px] items-center justify-end">
          {/* darkmode toggle */}
          <label className="swap swap-rotate cursor-pointer px-[2px]">
            <input type="checkbox" onChange={handleDarkModeToggle} className="theme-controller" />
            <FontAwesomeIcon className="swap-off text-[1.5rem] px-[4px] text-main hover:text-second dark:text-white dark:hover:text-second" icon={["fas", "moon"]}/>
            <FontAwesomeIcon className="swap-on text-[1.5rem] px-[4px] text-main hover:text-second dark:text-white dark:hover:text-second" icon={["fas", "sun"]} />
          </label>
          {/* settings button */}
          <button className="text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "gear"]}/></button>
          {/* logout button */}
          <button onClick={exit} className="text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "arrow-right-from-bracket"]}/></button>
        </div>
      </nav>
    </header>
  );
};
                                                                                            
export default Header;
