import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center bg-black text-white p-10 lg:p-20'>
            {/* Left Section */}
            <div className='flex flex-col justify-center items-start lg:w-1/2 lg:pl-20 mb-10 lg:mb-0 lg:pr-24'>
                <h1 className='text-[30px] font-bold mb-4'>
                    Want to install FitSnap AI Camera in your GYM? Please submit your details below.
                </h1>
                <h2 className='text-xl lg:text-2xl font-bold mb-4'>
                    Want to install FitSnap AI Camera in your GYM? 
                </h2>
                <p className='text-lg mb-2'>
                    Please submit your details below.
                </p>
            </div>

            {/* Right Section - Form */}
            <div className='w-full lg:w-1/2'>
                <form className='space-y-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="gym-name" className='mb-2'>Name of Gym</label>
                        <input id="gym-name" type="text" className='bg-black border-b-2 border-white text-white p-2 outline-none focus:border-blue-500' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="location" className='mb-2'>Location</label>
                        <input id="location" type="text" className='bg-black border-b-2 border-white text-white p-2 outline-none focus:border-blue-500' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="your-name" className='mb-2'>Your Name</label>
                        <input id="your-name" type="text" className='bg-black border-b-2 border-white text-white p-2 outline-none focus:border-blue-500' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="contact" className='mb-2'>Contact</label>
                        <input id="contact" type="text" className='bg-black border-b-2 border-white text-white p-2 outline-none focus:border-blue-500' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='mb-2'>Email</label>
                        <input id="email" type="email" className='bg-black border-b-2 border-white text-white p-2 outline-none focus:border-blue-500' />
                    </div>
                    <button 
                        type="submit" 
                        className='bg-white text-black px-6 py-2 mt-4 rounded-md transition-all'>
                        Contact Us
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
