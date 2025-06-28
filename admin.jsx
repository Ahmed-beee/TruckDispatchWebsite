import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    token: "",
    phoneNumber: "",
    email: "",
    address: "",
    receiverEmail: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.token) newErrors.token = "Token is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    else if (!/^\+?\d{10,15}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Enter a valid phone number.";
    
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address.";

    if (!formData.address) newErrors.address = "Address is required.";
    
    if (!formData.receiverEmail) newErrors.receiverEmail = "Receiver email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.receiverEmail)) newErrors.receiverEmail = "Enter a valid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Add form submission logic here
      console.log("Form submitted successfully");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-inter container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">ADMIN</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
        
        {/* Token Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="token">Token</label>
          <input
            type="text"
            name="token"
            value={formData.token}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {errors.token && <p className="text-red-500 text-sm">{errors.token}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Receiver Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="receiverEmail">Receiver Email</label>
          <input
            type="email"
            name="receiverEmail"
            value={formData.receiverEmail}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          {errors.receiverEmail && <p className="text-red-500 text-sm">{errors.receiverEmail}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-800 text-white rounded-[32px] p-2 w-full mt-4">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
