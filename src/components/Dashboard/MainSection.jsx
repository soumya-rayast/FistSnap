import React from 'react';
import { MdLocalFireDepartment } from "react-icons/md";
import { GiChickenLeg } from "react-icons/gi";
import { FaAppleWhole } from "react-icons/fa6";
import { PiHamburgerFill } from "react-icons/pi";

const MainSection = () => {
    return (
        <div className='lg:mx-96 flex flex-col px-4'>
            <div className='xl:flex gap-4 mt-20'>
                {[
                    { icon: <MdLocalFireDepartment className='text-[#FACD57] text-2xl' />, title: '1,930', subtitle: 'Avg. Calories' },
                    { icon: <GiChickenLeg className='text-[#FA8157] text-2xl' />, title: '1,930', subtitle: 'Avg. Proteins' },
                    { icon: <FaAppleWhole className='text-[#AF5A3D] text-2xl' />, title: '1,930', subtitle: 'Avg. Carbs' },
                    { icon: <PiHamburgerFill className='text-[#3D73AF] text-2xl' />, title: '1,930', subtitle: 'Avg. Fats' },
                ].map((card, index) => (
                    <div key={index} className='w-full sm:w-[250px] h-[162px] rounded-md shadow-lg bg-white flex items-center justify-center gap-2 mb-4'>
                        <div className='w-[77px] h-[77px] flex items-center justify-center bg-[#e7f2fd]'>
                            {card.icon}
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-2xl'>{card.title}</p>
                            <p className='text-[#767575]'>{card.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='md:flex gap-4 mt-5 flex-wrap'>
                <div className='flex-1 bg-white h-[280px] rounded-md shadow-lg mb-4'>
                    <h1 className='text-2xl p-2'>Body Weight</h1>
                </div>
                <div className='w-full md:w-[300px] h-[280px] bg-white rounded-md shadow-lg mb-4'>
                    <h1 className='text-2xl p-2'>Body Fat</h1>
                </div>
            </div>

            <div className='md:flex gap-4 mt-5 flex-wrap'>
                <div className='flex-1 bg-white h-[280px] rounded-md shadow-lg mb-4'>
                    <h1 className='text-2xl p-2'>Food Entries</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 p-2 bg-[#F8F4EE]'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className='flex items-center justify-center  rounded-md h-20'>
                                Column {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[300px] h-[280px] bg-white rounded-md shadow-lg mb-4'>
                    <h1 className='text-2xl p-2'>Miles Walked</h1>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
