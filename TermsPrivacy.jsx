import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsPrivacy = () => {
  return (
    <div className="font-inter min-h-screen bg-zinc-100 px-[16px] sm:px-[40px] lg:px-[80px] py-[40px] sm:py-[80px]">
      <main className="flex-grow w-full max-w-[840px] mx-auto rounded-[16px] gap-[20px] sm:gap-[40px]">
        <div className="max-w-3xl w-full rounded-lg p-4 sm:p-8 text-left">
          <header className="mb-6 sm:mb-8">
            <h1 className="text-[24px] sm:text-[40px] font-bold text-black-600 pt-4 sm:pt-8">Terms of Service</h1>
            <p className="mt-4 text-sm sm:text-[20px] text-gray-700">
              Welcome to Saferoutedispatch.us. By accessing or using our website and services, you
              agree to these Terms of Service ("Terms"). Safe Route not only offers top-tier dispatch
              services but also supports truckers and optimizes operations nationwide. You are
              responsible for providing accurate information and complying with all relevant laws. Our
              agreement outlines specific payment terms and deadlines, ensuring clarity and transparency
              in all transactions.
            </p>
          </header>

          <section>
            <h2 className="text-[24px] sm:text-[40px] font-bold text-black-600">Privacy Policy</h2>
            <p className="mt-4 text-sm sm:text-[20px] text-gray-700">
              At Saferoutedispatch.us, we are dedicated to safeguarding your privacy. This Privacy
              Policy outlines how we collect, use, disclose, and protect your personal information
              when you access our website or utilize our services. We do not share mobile data with
              affiliates or third parties for marketing or promotional purposes. Any opt-in information
              and consent related to text messaging are kept strictly confidential, and no third-party
              access will be granted to this data.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsPrivacy;
