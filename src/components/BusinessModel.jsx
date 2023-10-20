import React from 'react'
import { data2 } from '../utils/data';
import { Card1 } from '../UI/Cards';
import { ScheduleBtn } from '../UI/ScheduleBtn';

const BusinessModel = () => {
    return (

        <div className="container mx-auto mt-40">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 space-y-2 md:ml-10 md:space-y-9">
                    <h1 className="hidden md:block text-5xl font-bold ">Which <span className="text-logoGreen">Business<br /> Model</span> Suits Your <br /> Vision?</h1>

                    <h1 className="text-3xl text-center md:hidden font-semibold">Which <span className="text-logoGreen">Business Model</span> Suits Your Vision?</h1>

                    <p className="hidden md:block text-3xl font-light">Empower your business with<br /> Techilab's  tailored team <br /> engagement models.</p>

                    <p className="text-lg text-center font-light md:hidden">Empower your business with Techilab's tailored team engagement models.</p>
                    <div className="flex justify-center md:justify-normal">
                        <ScheduleBtn />
                    </div>
                </div>
                <div className=" flex flex-col mt-2 mx-3 space-y-5 md:space-y-0 md:mt-0 md:mx-0 md:flex-row md:w-2/3 ">
                    {data2.map((item) => (
                        <Card1 key={item.id} img={item.img} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col bg-dusty w-11/12 mx-auto h-110 mt-4 items-center justify-between px-5 py-5 md:flex-row">
                <span className="text-lg md:text-2xl font-semibold">No Long-term commitments</span>
                <span className=" hidden w-1 h-10 bg-black border md:block "></span>
                <span className="text-lg md:text-2xl font-semibold">NDA/Confidentially friendly</span>
                <span className=" hidden w-1 h-10 bg-black border md:block "></span>
                <span className="text-lg md:text-2xl font-semibold ">Full intellectual property rights</span>
            </div>
        </div>
    );
};

export default BusinessModel