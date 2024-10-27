import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 10 * 1024 * 1024) { // 10 MB
      setError("Total file size exceeds 10 MB. Please upload smaller files.");
      return;
    }

    setError(""); // Clear error message
    setFiles(selectedFiles);
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles(files.filter(file => file.name !== fileToRemove.name));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center bg-cover bg-center py-16 rounded-2xl mx-4" style={{ backgroundImage: "url('/images/bg-contact.jpeg')" }}>
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-lg text-white mt-2">
          Get the routes, loads, and support you need to keep your trucks moving and your business growing. Leave the logistics to us!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-12">
        <div className="flex flex-col gap-4">
          {/* Call Us Section */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300 flex flex-col items-start">
            <i className="fas fa-phone-alt text-blue-500 mb-4 text-2xl"></i>
            <h2 className="text-xl font-semibold mb-1">Call Us</h2>
            <p className="text-blue-500">
              <a href="tel:+14013233555">+1 (401) 323-3555</a>
            </p>
          </div>

          {/* Email Section */}
<div className="bg-white shadow-md p-4 sm:p-6 rounded-lg border border-gray-300 flex flex-col items-start">
  <i className="fas fa-envelope text-blue-500 mb-3 text-3xl sm:text-2xl"></i>
  <h2 className="text-lg sm:text-xl font-semibold mb-1">Email</h2>
  <p className="text-blue-500 text-sm sm:text-base">
    <a href="mailto:saferoutedispatch@gmail.com" className="break-words">saferoutedispatch@gmail.com</a>
  </p>
</div>

        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
            </div>
            <input type="email" placeholder="Email" className="border p-2 rounded w-full mt-4" />
            <input type="tel" placeholder="Phone number" className="border p-2 rounded w-full mt-4" />
            <textarea placeholder="Write your query..." className="border p-2 rounded w-full mt-4" rows="3"></textarea>
            
            <label className="flex items-center mt-4">
              <span className="mr-2">Upload Files</span>
              <input 
                type="file" 
                multiple 
                onChange={handleFileChange} 
                className="border p-2 rounded w-full mt-4" 
              />
            </label>

            {/* Display Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Show Uploaded Files */}
            <div className="mt-4">
              <h3 className="font-semibold">Uploaded Files:</h3>
              <ul>
                {files.map((file, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(file)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 w-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
