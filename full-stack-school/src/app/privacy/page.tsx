import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg mb-4">
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you use our services. By accessing or using
          our website, you agree to the collection and use of information in
          accordance with this policy.
        </p>
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and other details when you sign up or interact with our
          website.
        </p>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p>
          We use your information to provide, maintain, and improve our
          services. We may also use your information to communicate with you and
          send you updates.
        </p>

        <h2 className="text-xl font-semibold">3. Data Security</h2>
        <p>
          We take appropriate security measures to protect your personal data
          from unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-xl font-semibold">4. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information at any time. If you have any concerns about your privacy,
          please contact us.
        </p>
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

export default PrivacyPolicy;
