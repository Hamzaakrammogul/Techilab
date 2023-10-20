import React from 'react'
import { WCTData } from '../utils/data'
import { WCTechilabCard } from '../UI/Cards'

const WCTechilab = () => {
    return (
        <div className='bg-lightSky mt-24 md:py-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col space-y-5 md:space-y-10'>
                    <div><h1 className='text-3xl text-center md:text-left md:text-5xl font-semibold text-logoBlue'>Why Should You Choose Techilab?</h1></div>
                    <div className='flex flex-wrap gap-1 2xl:gap-9 px-2 md:px-9 2xl:justify-between'>
                        {WCTData.map((item) => (
                            <WCTechilabCard key={item.id} img={item.img} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WCTechilab