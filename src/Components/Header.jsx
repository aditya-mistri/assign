import React, { useState } from "react";
import logo from '../assets/images/logo.png'

const Header = () => {

  return (
    <nav className='flex justify-between items-center bg-orange-500 p-5 w-full '>
      <img src={logo} className='w-[250px]' />

      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:cursor-pointer hover:text-gray-500'>Innovative solutions</li>
        <li className='hover:cursor-pointer hover:text-gray-500'>Buisness Services </li>
        <li className='hover:cursor-pointer hover:text-gray-500'>Financial Services</li>
        <li className='hover:cursor-pointer hover:text-gray-500'>Bootcamp</li>
      </ul>

      <RiMenu3Fill className='ml-50' />

    </nav >
  );
};

export default Header;

