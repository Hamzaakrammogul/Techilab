import React from 'react';
import { ScheduleBtn } from '../UI/ScheduleBtn';
import QuoteBtn from '../UI/QuoteBtn';

const MainSection = ({ title, Mddescription, Smdescription }) => {
    return (

        <div className="container mx-auto my-24 md:my-36 ">
            <div className="flex flex-col space-y-5 md:space-y-10">
                <div>
                    <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-logoBlue leading-tight">{title}</h1>
                </div>
                <div>
                    <p className="hidden md:block text-lg md:text-2xl text-logoBlue leading-tight font-semibold">{Mddescription}
                    </p>
                    <p className="md:hidden text-lg md:text-2xl text-logoBlue leading-tight font-light md:font-semibold">{Smdescription}
                    </p>
                </div>
                <div className="flex gap-5">
                    <ScheduleBtn />
                    <QuoteBtn title={'Get a quote'} />
                </div>
            </div>
        </div>
    )
}

export default MainSection