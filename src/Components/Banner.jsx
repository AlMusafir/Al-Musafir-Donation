import React from 'react';
import backImg from '../assets/Clothing.png'; // Import your background image

const Banner = () => {
    return (
        <div className="relative h-screen flex justify-center items-center">
            <div className="absolute inset-0">
                <img className="object-cover w-full h-full" src={backImg} alt="Background" style={{ opacity: '0.2' }} />
            </div>
            <div className="text-center z-10">
                <h1 className="text-5xl font-bold mb-8">I Grow By Helping People In Need</h1>
                <div className="flex justify-center">
                    <input type="text" className="border border-gray-300 px-3 py-2 rounded-md mr-2" placeholder="Search here..." />
                    <button className="bg-red-500 text-white px-3 py-2 rounded-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
