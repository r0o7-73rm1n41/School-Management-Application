// app/contact/page.tsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          You can contact us at support@example.com or use the form below.
        </p>
        {/* More contact content */}
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

export default ContactUs;
