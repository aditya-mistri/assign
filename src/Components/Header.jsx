import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import logoBlue from '../assets/images/logo_blue.png';

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { IoIosMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className='bg-orange-500 p-5 w-full relative'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="Logo" className='w-[150px] md:w-[200px]' />
          <nav className='hidden md:block'>
            <ul className='flex gap-4 lg:gap-8'>
              <li className='hover:text-gray-200 cursor-pointer'>Innovations</li>
              <li className='hover:text-gray-200 cursor-pointer'>Business Services</li>
              <li className='hover:text-gray-200 cursor-pointer'>Financial Services</li>
              <li className='hover:text-gray-200 cursor-pointer'>Bootcamp</li>
            </ul>
          </nav>
          <button onClick={toggleSideMenu} className="text-2xl z-50 hover:text-gray-200">
            {isSideMenuOpen ? <IoMdClose /> : <IoIosMenu />}
          </button>
        </div>
      </header>

      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <img src={logoBlue} alt="Logo" className='w-[100px]' />
            <button onClick={toggleSideMenu} className="text-2xl z-50 text-orange-500 hover:text-orange-700">
              {isSideMenuOpen ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`fixed top-0 right-0 lg:w-1/4 h-full bg-white transform transition-transform duration-300 ease-in-out ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-[60] overflow-y-auto`}>
        <div className="p-5">
          <img src={logoBlue} alt="Logo" className='w-[150px] mb-10' />
          <nav>
            <ul className='flex flex-col gap-6'>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Innovations</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Business Services</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Financial Services</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Bootcamp</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>About</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Contact Us</li>
              <li className='hover:text-orange-500 cursor-pointer text-lg'>Blogs</li>
            </ul>
            
              <div className="flex gap-4 mt-6 ">
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaLinkedin size={30} />
                <FaTwitter size={30} />
              </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[55]" onClick={toggleSideMenu}></div>
      )}
    </>
  )
}

export default Header;
