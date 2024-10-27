import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 sm:py-8">
      <div className='px-4'>
        <img 
          src="images/Dev_loo.jpeg" 
          alt="Truck Dispatch Logo" 
          className="h-10 w-auto sm:h-12 md:h-10 lg:h-12 mb-4" 
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-start"> 
        <div className="flex flex-col items-start"> 
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope text-blue-500 mr-2 text-lg sm:text-xl"></i>
            <p className="text-sm sm:text-base text-left">Contact Us: safetrouteservice@gmail.com</p>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-phone-alt text-blue-500 mr-2 text-lg sm:text-xl"></i>
            <p className="text-sm sm:text-base text-left">+1 302-123-4565</p>
          </div>
        </div>
        <div className="flex flex-col items-start mt-4 sm:mt-0"> 
          <p className="text-sm sm:text-lg text-right">555 Safe Route Rd, Ste 456</p>
          <p className="text-sm sm:text-lg text-right">Plano, TX 75024</p>
        </div>
      </div>
      {/* Terms and Privacy Links */}
      <div className="text-center mt-4">
        <Link to="/terms-privacy" className="text-blue-500 hover:underline mx-2">Terms of Service</Link>
        <span>|</span>
        <Link to="/terms-privacy" className="text-blue-500 hover:underline mx-2">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
