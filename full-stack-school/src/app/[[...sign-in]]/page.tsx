"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing the Facebook and Instagram icons

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex flex-col justify-between bg-login">
      {/* Login form */}
      <div className="flex items-center justify-center flex-grow">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-transparent p-12 rounded-md shadow-2xl flex flex-col gap-2 border border-white/20"
          >
            <h1 className="text-xl font-bold flex items-center gap-2 text-white">
              <Image src="/logo.png" alt="" width={24} height={24} />
              SchooLama
            </h1>
            <h2 className="text-gray-200">Sign in to your account</h2>
            <Clerk.GlobalError className="text-sm text-red-400" />
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-300">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="p-2 rounded-md bg-transparent text-white ring-1 ring-gray-300 placeholder:text-white/70"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-300">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="p-2 rounded-md bg-transparent text-white ring-1 ring-gray-300 placeholder:text-white/70"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px] hover:bg-blue-600 transition"
            >
              Sign In
            </SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>

      {/* Footer */}
      <footer className="text-center text-white text-xs py-4 bg-black bg-opacity-70">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 items-center">
          <span>123 Education St, Learning City, 45678</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex justify-center mt-2 gap-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-500"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-600"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-pink-500"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;