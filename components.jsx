// src/components/Components.jsx
import React from 'react';

// Hero Component
const Hero = () => {
  return (
    <section 
      className="relative h-56 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center px-4 sm:px-8 lg:px-10 rounded-3xl mx-4 sm:mx-8" 
      style={{ backgroundImage: `url('/images/bg-main.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Drive Success with Professional Truck Dispatching Services</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">Get 24/7 help, loads, assistance, safety, and service while keeping your trucks moving and earning</p>
        <button className="mt-4 bg-white text-blue-700 font-medium py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg">Get Started Today</button>
      </div>
    </section>
  );
};




// Statistics Component
const Statistics = () => {
  return (
    <section className="py-12 bg-black-700 text-center my-10 " >
      <h2 className="text-3xl font-semibold mb-6">Why Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">15,000+</p>
          <p className="mt-2">Loads Booked</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">$8,000+</p>
          <p className="mt-2">Weekly Gross Revenue</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-600">$3.0+</p>
          <p className="mt-2">Per Mile</p>
        </div>
      </div>
    </section>
  );
};

// Service Overview Component
const ServiceOverview = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4 border-2 px-10 rounded-2xl my-2 mx-8 ">
      <div className="w-full md:w-1/2 p-4">
        <img 
          src="/images/Truck-image.jpeg" 
          alt="Truck" 
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h3 className="text-2xl font-bold mb-4">Professional Truck Dispatch Solutions for Owner Operators</h3>
        <p>
          At Safe Route Inc, we’re committed to making dispatching simple and profitable for owner-operators. Our services cover everything from load management and rate negotiations to optimizing your routes for maximum efficiency. With us as your dispatch partner, you’ll experience seamless logistics, allowing you to stay focused on the road while we handle the details that drive your success.
        </p>
      </div>
    </section>
  );
};

// Service Types Component
const ServiceTypes = () => {
  const services = [
    { name: 'Dry Van', image: '/images/DryVan.jpeg' },
    { name: 'Flatbed/Stepdeck', image: '/images/FlatBed.jpeg' },
    { name: 'Reefer', image: '/images/Reefer.jpeg' },
  ];

  return (
    <section className="py-12 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Who can work with Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service) => (
          <div key={service.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-48 md:h-56 object-cover"  
            />
            <p className="py-4 font-semibold">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
//

  
  

// Additional Info Component
const AdditionalInfo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 my-8 rounded-2xl border-2 mx-8">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h3 className="text-2xl font-bold mb-4">Best Reliable Dispatch Services for Trucking Companies</h3>
        <p>
          Whether you’re a small business or a large enterprise, our dispatching services are designed to help you focus on what you do best while we handle the logistics. From load scheduling and tracking to communication with brokers, we’re committed to ensuring smooth operations every step of the way. We charge the most-competitive rates compared to the market because we aim to benefit the carriers as much as we benefit ourselves.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img 
          src="/images/additional-truck.jpeg" 
          alt="Additional Info Truck" 
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </section>
  );
};



    const SafeRouteFamily = () => {
      const items = [
          'MC Certificate',
          'W9 Form',
          'Insurance Certificate',
          'Notice of Assignment',
      ];
  
      const TickIcon = () => (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" // Adjust size as needed
              height="24" // Adjust size as needed
              fill="currentColor"
              className="text-blue-500 mr-2"
              viewBox="0 0 16 16"
          >
              <circle cx="8" cy="8" r="8" fill="blue" /> {/* Blue circle */}
              <path d="M12.3 5.9a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.5 1.5 4.3-4.3a.5.5 0 0 1 .7 0z" fill="white" /> {/* White check mark */}
          </svg>
      );
  
      return (
          <div className="bg-indigo-50 flex items-center justify-center px-20 py-10">
              <div className='text-center'>
                  <h1 className="text-3xl font-bold mb-10">Become a part of Safe Route Family by sharing</h1>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {items.map((item) => (
                          <div key={item} className="bg-gray-50 p-8 rounded-lg shadow-md mb-10 pt-14 pb-14">
                              <div className="flex items-center justify-center mb-4">
                                  <TickIcon /> {/* Add the TickIcon here */}
                              </div>
                              <p className="text-lg font-semibold break-words">{item}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      );
  };



// Main Component
const Components = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <ServiceOverview />
      <ServiceTypes />
      <AdditionalInfo />
      <SafeRouteFamily/>
      
    </div>
  );
};

export default Components;
