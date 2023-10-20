import React from 'react'
import { industryData } from '../utils/data'
import { Card4 } from '../UI/Cards'
const IndustryExpertise = () => {
    return (
        <div className="container mx-auto mt-14">
            <div className=" flex flex-col w-11/12 mx-auto space-y-10">
                <div className="text-center md:text-left text-3xl md:text-5xl text-logoBlue font-semibold ">
                    <h1>Industry expertise</h1>
                </div>
                <div className="flex flex-col md:flex-wrap justify-center md:flex-row">
                    {industryData.map((item) => (
                        <Card4 key={item.id} img={item.img} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndustryExpertise