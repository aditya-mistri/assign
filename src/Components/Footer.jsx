import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-400 font-sans mt-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-black">Company</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Innovations</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Business Services</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Financial Services</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Lejhro Recruiter</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">About</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Blogs</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">Programs</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Lejhro Bootcamp</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">Support</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Contact</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Terms And service</p>
              <p className="text-black transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Privacy Terms</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 hover:cursor-pointer">
            <p className="font-semibold text-black">Connect with us</p>
            <div className="flex gap-4">
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaLinkedin size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
        </div>

        <p className="font-sans mt-10 p-8 text-start md:text-center text-black">© 2024 Lejhro Company Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
