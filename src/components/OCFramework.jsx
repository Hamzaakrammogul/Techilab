import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';


const OCFramework = () => {

    const CardOc = ({ description }) => {
        return (
            <div className='w-[400px] 2xl:w-[500px] rounded-lg border-2 border-logoGreen'>
                <div className='flex justify-center'>
                    <p className='text-2xl text-logoBlue text-center text-semibold py-10 2xl:text-3xl 2xl:py-14'>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='container mx-auto mt-32'>
            <div className='flex flex-col'>
                {/* 1st div */}
                <div className='flex space-x-10 2xl:space-x-5'>
                    <CardOc description={"Define business goals and objectives"} />
                    <div className='2xl:py-10'><h1 className='text-6xl font-semibold '><span className='text-logoBlue'>OUR</span> <span className='text-logoGreen'>COLLABORATION FRAMEWORK</span></h1></div>
                </div>
                <div className='w-1/3 flex justify-center mt-1 '>
                    <BsArrowDown size={32} />
                </div>
                {/* 2nd div */}
                <div className='flex justify-center space-x-1'>
                    <CardOc description={"Elicit product functional and non-functional requirements"} />
                    <div className='py-10 2xl:pt-20'><BsArrowRight size={32} /></div>
                    <CardOc description={"Design a cost-effective custom technical solution"} />
                    <div className='py-10 2xl:pt-20'><BsArrowRight size={32} /></div>
                    <CardOc description={"Develop the software and user experience"} />


                </div>
                <div className=' flex place-content-end'>
                    <div className='w-1/3 flex justify-center mt-1 '>
                        <BsArrowDown size={32} />
                    </div>
                </div>

                {/* 3rd div */}
                <div className='flex place-content-end '>
                    <CardOc description={<>Ensure a successful product <br />launch</>} />
                    <div className='pt-14 2xl:pt-20'><BsArrowLeft size={32} /></div>
                    <CardOc description={"Develop the software and user experience"} />
                </div>
                {/* 4th div */}
                <div className='flex place-content-center '>
                    <BsArrowDown size={32} />
                </div>
                <div className='flex place-content-center'>
                    <CardOc description={<>Maintain and improve the <br /> product</>} />

                </div>

            </div>
        </div>
    );
}

export default OCFramework