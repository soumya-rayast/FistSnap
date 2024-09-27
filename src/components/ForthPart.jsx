import React from 'react';
import testimonial from '../assets/testimonial.jpg';
import img4 from '../assets/image_4.png';

const ForthPart = () => {
    return (
        <>
            <div className='p-4 sm:p-8 lg:p-10'>
                <div className='flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-10'>
                    <h1 className='text-[40px] sm:text-[50px] font-semibold lg:text-[70px] uppercase text-center mb-5'>
                        What Our Clients Say About Us
                    </h1>
                </div>
                <div className='flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:gap-10'>
                    {/* Testimonial 1 */}
                    <div className='w-full sm:w-[450px] h-auto border border-[#13118F] p-5 flex flex-col items-start space-y-40'>
                        <h2 className='text-base sm:text-lg  mb-0  text-[#333333]'>
                            I LOVE FitSnap! It helps me train for my daily exercise, offering a wide range of categories that fit my needs.
                        </h2>
                        <div className='flex justify-center items-center gap-2 mt-6 sm:mt-auto'>
                            <img
                                src={testimonial}
                                alt="Client"
                                className='rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover my-2'
                            />
                            <p className='text-sm text-black mb-0'>
                                Riya Awasthi
                            </p>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className='w-full sm:w-[450px] h-auto border border-[#13118F] p-5 flex flex-col items-start space-y-40'>
                        <h2 className='text-base sm:text-lg  mb-0  text-[#333333]'>
                            I LOVE FitSnap! It helps me train for my daily exercise, offering a wide range of categories that fit my needs.
                        </h2>
                        <div className='flex justify-center items-center gap-2 mt-6 sm:mt-auto'>
                            <img
                                src={testimonial}
                                alt="Client"
                                className='rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover my-2'
                            />
                            <p className='text-sm text-black mb-0'>
                                Riya Awasthi
                            </p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className='w-full sm:w-[450px] h-auto border border-[#13118F] p-5 flex flex-col items-start space-y-40'>
                        <h2 className='text-base sm:text-lg  mb-0  text-[#333333]'>
                            I LOVE FitSnap! It helps me train for my daily exercise, offering a wide range of categories that fit my needs.
                        </h2>
                        <div className='flex justify-center items-center gap-2 mt-6 sm:mt-auto'>
                            <img
                                src={testimonial}
                                alt="Client"
                                className='rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover my-2'
                            />
                            <p className='text-sm text-black mb-0'>
                                Riya Awasthi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-center text-[40px] sm:text-[50px] lg:text-[70px] uppercase mb-6'>
                    Things You Need
                </p>
                <div className='relative'>
                    <img 
                        src={img4} 
                        alt="Things you need" 
                        className='relative z-10 w-full h-[400px] sm:h-[600px] lg:h-[900px] bg-white opacity-50' 
                    />
                </div>
            </div>
        </>
    );
}

export default ForthPart;
