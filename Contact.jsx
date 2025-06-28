import React, { useState } from "react";

const countryCodes = [
  { code: "+1", name: "US" },
  { code: "+44", name: "UK" },
  { code: "+91", name: "IN" },
  // Add more country codes as needed
];

const ContactUs = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 10 * 1024 * 1024) {
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
    <div className="font-inter container mx-auto p-6">
      {/* Background Image Section */}
      <div
        className="relative text-center bg-cover bg-center py-10 md:py-20 rounded-2xl mx-2 md:mx-12"
        style={{
          backgroundImage: "url('/images/bg-contact.jpeg')",
          height: '320px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
        <h1 className="text-3xl md:text-6xl font-semibold text-white relative">Contact Us</h1>
        <p className="text-base md:text-2xl text-white mt-2 relative mx-2 md:mx-8">
          Get the routes, loads, and support you need to keep your trucks moving and your business growing. Leave the logistics to us!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-4 md:mx-12">
        <div className="flex flex-col gap-4">
          {/* Call Us Section */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300 flex flex-col items-start">
            <img src="images/Frame_2.png" alt="Call Us" className="mb-4 w-16 h-16" />
            <h2 className="text-2xl font-semibold mb-1">Call Us</h2>
            <p className="text-customBlue">
              <a href="tel:+14013233555">+1 (401) 323-3555</a>
            </p>
          </div>

          {/* Email Section */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300 flex flex-col items-start">
            <img src="images/Frame_3.png" alt="Email" className="mb-4 w-16 h-16" />
            <h2 className="text-2xl font-semibold mb-1">Email</h2>
            <p className="text-customBlue text-base md:text-lg">
              <a href="mailto:saferoutedispatch@gmail.com" className="break-words">saferoutedispatch@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-md p-6 md:p-8 rounded-lg border border-gray-300">
  <h2 className="text-[32px] font-semibold mb-4">Send us a Message</h2>
  <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First Name"
        className="border p-2 rounded-[12px] w-full"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border p-2 rounded-[12px] w-full"
      />
    </div>
    <input
      type="email"
      placeholder="Email"
      className="border p-2 rounded-[12px] w-full mt-4"
    />
    <div className="border p-2 rounded-[12px] w-full mt-4 flex items-center">
      <select
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="bg-transparent outline-none text-gray-500 font-medium mr-2"
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code} className="text-gray-700">
            {country.name} ({country.code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="outline-none w-full text-gray-700 placeholder-gray-400"
      />
    </div>

    <textarea
      placeholder="Write your query..."
      className="border p-2 rounded-[12px] w-full mt-4"
      rows="3"
    ></textarea>

    {/* File Upload Field */}
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      className="border p-2 rounded w-full mt-4 cursor-pointer hidden"
      id="file-upload"
    />
    <label
      htmlFor="file-upload"
      className="bg-zinc-200 border p-2 rounded-[12px] w-full mt-4 cursor-pointer flex items-center justify-center"
    >
      <span className="text-gray-600 text-center">+ Attach Files</span>
      <span className="text-grey-600">{files.length > 0 ? `${files.length} file(s) selected` : ""}</span>
    </label>
    {error && <p className="text-red-500">{error}</p>}

    <div className="mt-4">
      {files.length > 0 && (
        <>
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
        </>
      )}
    </div>

    {/* Button Container */}
    <div className="flex justify-center mt-4 md:justify-end">
      <button type="submit" className="bg-customBlue text-white rounded-full p-2 w-32">Send</button>
    </div>
  </form>
</div>
</div>
</div>

  );
};

export default ContactUs;
