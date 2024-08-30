import React from 'react';
import { BannerList } from '../constants'
import { certificate } from '../assets';

const Banner = () => (
    <section id="banner" className='p-6'>
        <div className='flex flex-row items-center bg-gray-500 rounded-lg p-4 h-auto w-full'>
            <div className='flex-shrink-0'>
                <img src={certificate} alt="course" className='h-16 w-16 rounded bg-dimWhite p-3' />
            </div>
            <div className='ml-4 text-white flex flex-col'>
                <h3 className='text-white text-2xl font-bold'>80+</h3>
                <span className='text-lg'>Certified Partners</span>
            </div>
        </div>
    </section>
);

export default Banner;
