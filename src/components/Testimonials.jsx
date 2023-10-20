import React from 'react'
import { testimonailsData } from '../utils/data';
import { Navigation, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            // spaceBetween={}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
        >
            {testimonailsData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='container mx-auto'>

                        <div className='w-11/12 mx-auto'>
                            <div className='flex flex-col items-center text-center justify-center space-y-5'>
                                <div> <img src={item.img} alt='' className='rounded-full w-34 h-36' /></div>
                                <div><p className='text-md md:text-xl font-light'>{item.description}</p></div>
                                <div className='text-center'><h1 className='text-2xl text-logoGreen font-semibold'>{item.name}</h1>
                                    <h1 className='text-xl text-logoGreen font-semibold'>{item.title}</h1></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}


export default Testimonials;