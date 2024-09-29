import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdOutlineSupervisorAccount, MdEventAvailable, MdEventBusy, MdLocalDining } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosExit } from "react-icons/io";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 " onClick={toggleSidebar}></div>}

      <div className={`fixed top-0 left-0 mt-14 bg-white h-full p-6 shadow-lg w-[357px] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-[357px] `}>
        <div className="mb-8 bg-[#FAA057] w-[219px] h-[59px] text-white flex items-center justify-center">
          <p className="text-xl font-semibold">Dietsnap.fit</p>
        </div>
        <div className="mb-8 bg-[#FAA057] rounded-md w-[219px] h-[59px] text-white flex items-center justify-center">
          <button className='font-medium flex items-center gap-2'> <FaPlus />
            Add new entry
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <Link to="/dashboard" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <MdDashboard />
            Dashboard
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <RiAccountCircleFill />
            My Profile
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <MdOutlineSupervisorAccount />
            My Client
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <TbReportAnalytics />
            Report
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <MdEventAvailable />
            My Diet Plans
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <MdEventBusy />
            Create Diet Plan
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <BsChatLeftTextFill />
            Chat
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <MdLocalDining />
            Search Food
          </Link>

          <Link to="" className='flex gap-4 text-[#767575] items-center hover:text-[#F8B546] p-2 rounded'>
            <IoMdSettings />
            Settings
          </Link>
        </div>
        <Link to='/' className="mb-8 bg-[#FAA057] rounded-md w-[219px] h-[59px] text-white flex items-center justify-center mt-2">
          <button className='font-medium flex items-center gap-2'>
            Back to FitSnap Website
            <IoIosExit className='text-2xl' />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
