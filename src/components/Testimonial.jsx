import React from 'react'
import Testimonials from './Testimonials'

const Testimonial = () => {
    return (
        <div className="container mx-auto mt-40">
            <div className="w-11/12 mx-auto">
                <h1 className=" text-3xl md:text-4xl text-center md:text-left text-logoBlue font-semibold">Testimonials</h1>
            </div>
            <Testimonials />
        </div>

    )
}

export default Testimonial