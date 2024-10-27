import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsPrivacy = () => {
  return (
    <div className="container mx-auto p-6">
 {/* Privacy Policy Section */}
 <header className="text-center bg-gray-200 py-16">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-lg">
          Welcome to Saferoutedispatch.us. By accessing or using our website and services, you
          agree to these Terms of Service ("Terms"). Safe Route not only offers top-tier dispatch
          services but also supports truckers and optimizes operations nationwide. You are
          responsible for providing accurate information and complying with all relevant laws. Our
          agreement outlines specific payment terms and deadlines, ensuring clarity and transparency
          in all transactions.
        </p>
      </header>

      {/* Privacy Policy Section */}
      <section className="text-center bg-gray-200 py-16">
        <h2 className="text-3xl font-bold">Privacy Policy</h2>
        <p className="mt-2 text-lg">
          At Saferoutedispatch.us, we are dedicated to safeguarding your privacy. This Privacy
          Policy outlines how we collect, use, disclose, and protect your personal information
          when you access our website or utilize our services. We do not share mobile data with
          affiliates or third parties for marketing or promotional purposes. Any opt-in information
          and consent related to text messaging are kept strictly confidential, and no third-party
          access will be granted to this data.
        </p>
      </section>
 </div>
  );
};

export default TermsPrivacy;
