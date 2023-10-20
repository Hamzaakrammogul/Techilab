import React from 'react';
import { VscArrowSmallRight } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const CTA = () => {
    return (
        <div className='container mx-auto mt-32 mb-32 '>
            <div className='flex flex-col w-11/12 h-112 justify-center bg-cardSky rounded-3xl mx-auto'>
                <div className=' ml-1 md:ml-10 '>
                    <h1 className='text-3xl md:text-4xl text-logoBlue text-center md:text-start font-semibold'>Build a Dedicated Team Now</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='md:text-xl text-center md:text-start md:ml-10 text-logoBlue'>
                        <p className='hidden md:block'>Transform your software development process with our <br /> dedicated teams. More efficiency, more success.</p>
                        <p className='md:hidden'>Transform your software development process with our dedicated teams. More efficiency, more success.</p>
                    </div>
                    <div className='mx-auto md:mx-0'>
                        <button className='flex  items-center bg-logoBlue rounded-md mr-5 text-white text-lg py-2 px-6 hover:bg-black '> <NavLink to={'/talk-to-us'}>Talk to us </NavLink>  <VscArrowSmallRight className='mt-1' size={24} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA