import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-black text-white p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center'>
            {/* Left Section - About */}
            <div className='flex-1 mb-10 lg:mb-0 lg:pr-8'>
                <img src={logo} alt="Logo" className='w-[150px] h-[150px]' />
                <p className='mb-4'>
                    Be the first to test the first AI personal trainer, ever! Keep up to
                    date with the launch, new workouts, and further details by joining
                    our mailing list.
                </p>
                <div className='flex gap-4'>
                    <FaFacebookF className='hover:text-blue-500 cursor-pointer' />
                    <FaYoutube className='hover:text-red-500 cursor-pointer' />
                    <FaInstagram className='hover:text-pink-500 cursor-pointer' />
                    <FaLinkedinIn className='hover:text-blue-700 cursor-pointer' />
                </div>
            </div>

            {/* Middle Section - App Download and Contact */}
            <div className='flex-1 mb-10 lg:mb-0 lg:px-8'>
                <div className='mb-6'>
                    <h2 className='text-xl font-semibold'>Download the App</h2>
                    <p className='mt-2'>Android - Google Play Store</p>
                    <p>iOS - Apple App Store</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>Contact</h2>
                    <p className='mb-1'>Etiam consequat sem ullamcorper, euismod metus sit</p>
                    <p className='font-bold'>+91 0000000000</p>
                </div>
            </div>

            {/* Right Section - Company Info */}
            <div className='flex-1 lg:pl-8'>
                <h2 className='text-xl font-semibold mb-4'>Company</h2>
                <p className='mb-2'>About Us</p>
                <p className='mb-2'>Terms & Conditions</p>
                <p className='mb-2'>Privacy Policy</p>
                <p className='mb-2'>Community Guidelines</p>
            </div>
        </div>
    );
};

export default Footer;
