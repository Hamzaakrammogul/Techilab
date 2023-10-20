import React from 'react'
import { Navigation, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { porfolioData, porfolioData1, porfolioData2, porfolioData3 } from '../utils/data';

export const Portfolio = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
        >
            {porfolioData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='container mx-auto '>
                        <div className='flex'>
                            <div className='mx-auto '><img src={item.img} alt='' className='w-[400px]' /></div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}

export const Portfolio1 = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
        >
            {porfolioData1.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='container mx-auto'>
                        <div className='flex'>
                            <div className='mx-auto '><img src={item.img} alt='' className='w-[400px]' /></div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}

export const Portfolio2 = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 3500,
                disableOnInteraction: false
            }}
        >
            {porfolioData2.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='container mx-auto'>
                        <div className='flex'>
                            <div className='mx-auto '><img src={item.img} alt='' className='w-[400px]' /></div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}

export const Portfolio3 = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 4500,
                disableOnInteraction: false
            }}
        >
            {porfolioData3.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='container mx-auto'>
                        <div className='flex'>
                            <div className='mx-auto '><img src={item.img} alt='' className='w-[400px]' /></div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}