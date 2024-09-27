import React from 'react';
import { SiTicktick } from "react-icons/si";

const FifthPart = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 py-10'>

            <h1 className='text-[40px] md:text-[80px] italic mb-6 text-center uppercase'>
                Revolutionize Your Gym
            </h1>


            <div className='flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-[1100px]'>


                <div className='space-y-4 border border-[#13118F] p-6 rounded-md w-full lg:w-1/2'>
                    {[
                        "24*7 AI Trainer",
                        "Unlimited Access",
                        "150+ Exercises",
                        "Customized Plans",
                        "Advanced AI Camera",
                        "Voice Feedback",
                        "Complete Plans",
                        "Real-Time Feedback",
                        "Rep Counter",
                        "Saved Workout Videos",
                        "Activity History",
                        "Voice Commands"
                    ].map((feature, index) => (
                        <div key={index} className='flex justify-between items-center'>
                            <p className='text-base md:text-lg'>{feature}</p>
                            <SiTicktick className='text-[#13118F] text-lg md:text-xl' />
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-full lg:w-1/2 text-left space-y-4'>
                    <p className='text-sm md:text-base font-semibold'>
                        To benefit from all the features of FitSnap, the ideal tablet should feature 8GB RAM and an immersive 11-inch screen for a balance of performance and display quality.
                    </p>
                    <button className='text-blue-700 rounded-full border-[1px] border-blue-700 px-4 py-2 transition duration-300 hover:bg-blue-700 hover:text-white'>
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FifthPart;
