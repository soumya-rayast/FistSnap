import React from 'react';
import { FaYoutube } from "react-icons/fa";

const ThirdPart = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-10'>
            {/* Title and Subtitle */}
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='text-[40px] md:text-[60px] lg:text-[70px] text-center'>LOREM IPSUM</h1>
                <p className='text-[18px] md:text-[22px] lg:text-[24px] text-center px-4'>
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.
                </p>
            </div>
            
            {/* Blue Section with YouTube Video */}
            <div className='bg-[#5E9ED7] w-full h-auto lg:h-[616px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10'>
                
                {/* Text Section */}
                <div className='mb-6 lg:mb-0'>
                    <p className='uppercase  text-[32px] md:text-[50px] lg:text-[70px] px-6 md:px-20 lg:pl-20 lg:pr-28  text-center lg:text-left '>
                        Lorem ipsum dolor sit amet,
                    </p>
                </div>
                
                {/* YouTube Video Section */}
                <div className='flex justify-center items-center'>
                    <div className='w-full max-w-[600px] h-auto bg-white flex flex-col items-center justify-center rounded-md'>
                        <iframe
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/xqvCmoLULNY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-md p-4'
                        ></iframe>
                        <div className='w-full text-left p-4'>
                            <h1 className='text-lg font-semibold'>Exercise Tutorial - Squat</h1>
                            <p className='text-sm text-gray-600 flex gap-2 items-center '>
                                <FaYoutube className='text-red-500' />YouTube
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdPart;
