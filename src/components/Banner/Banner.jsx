import React from 'react';
import  bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='text-center bg-purple-500 text-white rounded-xl p-20 space-y-10'>
            <h1 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
            <p className='text-base max-w-3xl mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='btn rounded-full '> Shop Now</button>
            
            <img className='rounded-xl' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;