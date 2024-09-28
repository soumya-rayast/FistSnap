import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import Sidebar from './Sidebar'; // Import Sidebar

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <nav className='flex justify-between items-center p-4'>
          {/* Menu Icon */}
          <IoMenu className='text-2xl cursor-pointer lg:hidden' onClick={toggleSidebar} />

          {/* Search and Notification Section */}
          <div className='flex items-end  space-x-4'>
            <div className='relative flex items-center'>
              <IoIosSearch className='absolute left-2 text-gray-400' />
              <input
                type="text"
                placeholder='Search client by name'
                className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            {/* Notification Bell */}
            <FaBell className='text-xl cursor-pointer' />
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Navbar;
