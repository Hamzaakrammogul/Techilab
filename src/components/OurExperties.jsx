import React from 'react';
import TechBtn from '../UI/TechBtn';
import { techdata } from '../utils/data';

const OurExperties = () => {
    return (
        < div className="container mx-auto mt-5 md:p-24" >
            <div className="flex flex-col md:space-x-5 items-center justify-center md:flex-row">
                <div>
                    <h1 className=" text-4xl xl:text-5xl font-semibold">Our <br /> Experties</h1>
                </div>
                <div>
                    {techdata.map((item, index) => (
                        <TechBtn key={index} title={item} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default OurExperties;