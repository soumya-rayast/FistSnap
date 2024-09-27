import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between items-center bg-white bg-opacity-30 fixed w-full p-4 h-[83px] z-50'>
      {/* Logo */}
      <img src={logo} alt="Logo" className='w-[188px]' />
      
      {/* Desktop Menu */}
      <div className='hidden md:flex justify-between items-center space-x-6 text-[25px]'>
        <a href="" className='text-[#13118F] font-normal'>Lorem Ipsum</a>
        <a href="" className='text-black font-normal'>Lorem Ipsum</a>
        <a href="" className='text-black font-normal'>Lorem Ipsum</a>
        <a href="" className='text-black font-normal'>Lorem Ipsum</a>
      </div>
      
      {/* Contact Us Button */}
      <button className='hidden md:block p-2 text-xl px-4 border-2 gap-[10px] border-[#13118F] text-[#13118F] rounded-3xl w-[171px] h-[48px]'>
        Contact Us
      </button>

      {/* Mobile Menu Button (Hamburger) */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-3xl'>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[83px] left-0 w-full bg-white bg-opacity-60 p-4 flex flex-col items-center space-y-4 md:hidden'>
          <a href="" className='text-[#13118F] font-normal'>Lorem Ipsum</a>
          <a href="" className='text-black font-normal'>Lorem Ipsum</a>
          <a href="" className='text-black font-normal'>Lorem Ipsum</a>
          <a href="" className='text-black font-normal'>Lorem Ipsum</a>
          <button className='p-2 text-xl px-4 border-2 gap-[10px] border-[#13118F] text-[#13118F] rounded-3xl w-[171px] h-[48px]'>
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
