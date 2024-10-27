import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between p-4 bg-white my-6 px-4 sm:px-8">
       {/* Navigation Links */}
       <nav className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `text-sm sm:text-base lg:text-lg ${isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}`
        }
          end
        >
          
        <img 
          src="images/Dev_loo.jpeg" 
          alt="Truck Dispatch Logo" 
          className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" // Responsive height adjustments
        />
       </NavLink>
       </nav>
      <button onClick={()=>{
        navigate('/contact')
      }} className="bg-blue-800 text-white py-2 px-4 text-sm sm:text-base lg:text-lg rounded-3xl">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
