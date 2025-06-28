import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="font-inter flex items-center justify-between w-full h-24 px-4 sm:px-10 md:px-20 py-4">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => 
            `text-sm sm:text-base lg:text-lg ${isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}`
          }
          end
        >
          <img 
            src="images/Dev_loo.png" 
            alt="Truck Dispatch Logo" 
            className="h-10 sm:h-12 w-auto" // Responsive height
          />
        </NavLink>
      </nav>
      
      <button
        onClick={() => navigate('/contact')}
        className="bg-customBlue text-white text-sm sm:text-base rounded-[32px] h-[47px] w-[135px] px-4 sm:px-6 lg:px-4 font-semibold"
      >
        Contact Us
      </button>
    </header>
  );
};

export default Header;
