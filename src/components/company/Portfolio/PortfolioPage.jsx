import React from 'react'
import { Portfolio, Portfolio1, Portfolio2, Portfolio3 } from '../../Portfolio';
import Testimonials from '../../Testimonials';
import CTA from '../../CTA';
import Testimonial from '../../Testimonial';

const PortfolioPage = () => {
    return (
        <div className='container mx-auto '>
            <div><h1 className='text-6xl text-center mt-20 mb-10 text-logoBlue font-semibold'>Portfolio</h1></div>
            <Portfolio />
            <Portfolio1 />
            <Portfolio2 />
            <Portfolio3 />
            <Testimonial />
            <CTA />

        </div>
    )
}

export default PortfolioPage;