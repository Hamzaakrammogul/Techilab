import React from 'react';
import { data6a, data6b, data6c } from '../utils/data';
import { Card3 } from '../UI/Cards';

const BuildForYou = () => {
    return (

        < div className="container mx-auto mt-20" >
            <div className="flex flex-col w-11/12 mx-auto">
                <div className="mb-7">
                    <h1 className="text-4xl font-semibold">We can build for you</h1>
                </div>
                <div className="space-y-2">
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 ">
                        {
                            data6a.map((item) => (
                                <Card3 key={item.id} img={item.img} pretitle={item.pretitle} aftertitle={item.aftertitle} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row  md:space-x-2 ">
                        {
                            data6b.map((item) => (
                                <Card3 key={item.id} img={item.img} pretitle={item.pretitle} aftertitle={item.aftertitle} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row  md:space-x-2 ">
                        {
                            data6c.map((item) => (
                                <Card3 key={item.id} img={item.img} pretitle={item.pretitle} aftertitle={item.aftertitle} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}

export default BuildForYou;