// app/terms/page.tsx
import React from "react";

const TermsConditions = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg mb-4">
          These Terms and Conditions govern the use of our website and services.
        </p>
        {/* More terms content */}
      </div>
      <footer className="text-center text-white text-sm py-4 bg-gray-800">
        <div className="flex justify-center gap-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;
