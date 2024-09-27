import React from 'react';
import heroVideo from "../assets/Hero_video_1.mp4";

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover opacity-95"
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-35"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold italic">
                        Fitsnap for GYM
                    </h1>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl font-semibold">
                        Welcome to the next generation of fitness! At FitSnap, we are thrilled to introduce the power of Artificial Intelligence (AI) to revolutionize your gym experience.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className='flex flex-col md:flex-row items-center justify-center md:space-x-20 space-y-8 md:space-y-0 mt-10 font-semibold mb-10 px-4'>
                <div className='flex flex-col items-center md:items-end justify-center'>
                    <p className='text-2xl md:text-3xl lg:text-4xl mb-4'>50+</p>
                    <p className='capitalize text-base md:text-lg lg:text-xl'>gym enrolled</p>
                </div>
                <div className='flex flex-col items-center md:items-end justify-center'>
                    <p className='text-2xl md:text-3xl lg:text-4xl mb-4'>250+</p>
                    <p className='capitalize text-base md:text-lg lg:text-xl'>users enroll</p>
                </div>
                <div className='flex flex-col items-center md:items-end justify-center'>
                    <p className='text-2xl md:text-3xl lg:text-4xl mb-4'>60+</p>
                    <p className='capitalize text-base md:text-lg lg:text-xl'>workout sessions</p>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
