import React from 'react';
import img1 from '../assets/image_1.png';
import img2 from '../assets/image_2.png';
import img3 from '../assets/image_3.png';
import video from '../assets/video_1.mp4';

const SecondPart = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-10 px-4'>

            <div className='flex flex-col justify-center items-center text-center mb-8'>
                <h1 className='text-[32px] md:text-[48px] lg:text-[60px] font-semibold'>WHY CHOOSE FITSNAP</h1>
                <p className='text-[18px] md:text-[22px] lg:text-[24px]'>GET REALTIME UPDATE WITH AI</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center '>
                <img src={img1} alt="Individual Needs" className='w-full md:w-[666px] h-auto md:h-[514px]' />
                <div className='bg-[#7D8DC7] w-full md:w-[666px] h-auto md:h-[514px] flex flex-col items-start justify-center px-4 md:pl-10 py-4'>
                    <h1 className='text-[28px] md:text-[40px] lg:text-[60px] text-white'>Enhanced Focus on Individual Needs</h1>
                    <p className='text-white text-[16px] md:text-[20px] lg:text-[24px]'>FitSnap: Ditch bad form, embrace perfect workouts. AI analyzes your moves in real-time for flawless fitness.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full md:w-[666px] h-auto md:h-[514px]"
                ></video>
                <div className='bg-[#5E9ED7] w-full md:w-[666px] h-auto md:h-[514px] flex flex-col items-start justify-center px-4 md:pl-10 py-4'>
                    <h1 className='text-[28px] md:text-[40px] lg:text-[60px] text-white'>Data-driven Insights</h1>
                    <p className='text-white text-[16px] md:text-[20px] lg:text-[24px]'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                <img src={img2} alt="Efficient Workouts" className='w-full md:w-[666px] h-auto md:h-[514px]' />
                <div className='bg-[#C46DA0] w-full md:w-[666px] h-auto md:h-[514px] flex flex-col items-start justify-center px-4 md:pl-10 py-4'>
                    <h1 className='text-[28px] md:text-[40px] lg:text-[60px] text-white'>Efficient Workouts</h1>
                    <p className='text-white text-[16px] md:text-[20px] lg:text-[24px]'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
                <img src={img3} alt="Preventing Injuries" className='w-full md:w-[666px] h-auto md:h-[514px]' />
                <div className='bg-[#69996A] w-full md:w-[666px] h-auto md:h-[514px] flex flex-col items-start justify-center px-4 md:pl-10 py-4'>
                    <h1 className='text-[28px] md:text-[40px] lg:text-[60px] text-white'>Preventing Injuries</h1>
                    <p className='text-white text-[16px] md:text-[20px] lg:text-[24px]'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
        </div>
    );
}

export default SecondPart;
