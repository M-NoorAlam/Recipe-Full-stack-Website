import React, { useState, useCallback } from 'react';

import Hambur from '../assets/Hambur.svg';
import HamburClose from '../assets/HamburClose.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  // Determine active page based on URL
  const getActivePage = () => {
    if (location.pathname.includes('recipes')) return 'recipes';
    if (location.pathname.includes('shareRecipes')) return 'shareRecipes';
    if (location.pathname.includes('contactUs')) return 'contactUs';
    return 'home';
  };

  const [isActive, setIsActive] = useState(getActivePage());

  // Navigation and active state handler
  const handleNavigation = useCallback((page, path) => {
    setIsActive(page); // Update active state
    navigate(path); // Navigate to the selected path
  }, [navigate]);

  // Toggle hamburger menu
  const handleHamburgerToggle = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <div className="header">

      <div className="navbar flex justify-between items-center mx-5 my-1">
        <div className="logo">
          <h1 className="font-rightcious font-semibold md:text-2xl sm:text-xl">
            NUTRITION MAPPER
          </h1>
        </div>

        <div className="nav">
          <nav>
            <ul className="sm:flex gap-x-6 font-inter font-semibold sm:text-[12px] md:text-[15px] hidden">
              <li
                className={`cursor-pointer ${
                  isActive === 'home' ? 'text-[#DB8A89] underline' : ''
                }`}
                onClick={() => handleNavigation('home', '/home')}
              >
                Home
              </li>
              <li
                className={`cursor-pointer ${
                  isActive === 'recipes' ? 'text-[#DB8A89] underline' : ''
                }`}
                onClick={() => handleNavigation('recipes', '/recipes')}
              >
                Recipes
              </li>
              <li
                className={`cursor-pointer ${
                  isActive === 'shareRecipes' ? 'text-[#DB8A89] underline' : ''
                }`}
                onClick={() => handleNavigation('shareRecipes', '/shareRecipes')}
              >
                Share Recipe
              </li>
              <li
                className={`cursor-pointer ${
                  isActive === 'contactUs' ? 'text-[#DB8A89] underline' : ''
                }`}
                onClick={() => handleNavigation('contactUs', '/contactUs')}
              >
                Contact Us
              </li>
            </ul>
          </nav>
        </div>

        {!hamburgerToggle ? (
          <div className="hamburger relative">
            <img
              src={Hambur}
              onClick={handleHamburgerToggle}
              className="sm:hidden mx-5 block"
              alt="Open Menu"
            />
          </div>
        ) : (
          <div>
            <img
              src={HamburClose}
              className="sm:hidden mx-5 block"
              onClick={handleHamburgerToggle}
              alt="Close Menu"
            />
            <div className="nav text-sm font-inter sm:hidden absolute z-0 bg-white/95 w-[50%] h-[30%] px-3 py-2">
              <nav>
                <ul className="flex flex-col">
                  <li
                    className={`cursor-pointer ${
                      isActive === 'home' ? 'text-[#DB8A89] underline' : ''
                    }`}
                    onClick={() => handleNavigation('home', '/home')}
                  >
                    Home
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isActive === 'recipes' ? 'text-[#DB8A89] underline' : ''
                    }`}
                    onClick={() => handleNavigation('recipes', '/recipes')}
                  >
                    Recipes
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isActive === 'shareRecipes' ? 'text-[#DB8A89] underline' : ''
                    }`}
                    onClick={() => handleNavigation('shareRecipes', '/shareRecipes')}
                  >
                    Share Recipe
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isActive === 'contactUs' ? 'text-[#DB8A89] underline' : ''
                    }`}
                    onClick={() => handleNavigation('contactUs', '/contactUs')}
                  >
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
