import React from "react";
import MainSection from "../MainSection";
import { hireDeveloperData, hireDeveloperData1 } from "../../utils/data";
import { HireDeveloperCard, HireDeveloperCard1 } from "../../UI/Cards";
import { ScheduleBtn } from "../../UI/ScheduleBtn";
import WCTechilab from "../WCTechilab";
import OurExperties from "../OurExperties";
import CTA from "../CTA";
import Testimonial from "../Testimonial";
import Button from "../../UI/Button";

const HireADeveloper = () => {
    return (<>
        <MainSection

            title={<>Hire a Dedicated <span className="text-logoGreen"> Software Engineer </span>in your <span className="text-logoGreen">time zone</span></>}
            Mddescription={<>Techilab provides a seamless integration of software experts, facilitating the rapid expansion of engineering teams by a factor of 10.
            </>}
            Smdescription={<>Techilab provides a seamless integration of software experts, facilitating the rapid expansion of engineering teams by a factor of 10.
            </>}
        />
        <div className="bg-lightSky py-16">
            <div className="container mx-auto space-y-10">
                <div className=" space-y-5">
                    <h1 className="text-5xl text-logoBlue font-semibold">We Will Help You!</h1>
                    <p className="text-2xl text-logoBlue">Hard-tp -fill tech positions are no longer an issue!</p>
                </div>
                <div className="flex justify-between">
                    {hireDeveloperData.map((item) => (
                        <HireDeveloperCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Add section here */}
        <div className="container mx-auto mt-36">
            <div className="flex">
                <div className="flex flex-col space-y-10 w-1/3 pr-5">
                    <div><h1 className="text-5xl font-semibold text-logoBlue">How Techilab Dedicated Team Works</h1></div>
                    <div><p className="text-2xl text-logoGreen">We'll seamlessly integrate software experts, enabling you to quickly increase your development capabilities.</p></div>
                    <div><Button title={"Talk To Us"} /></div>
                </div>
                <div className="flex w-[64%] flex-wrap gap-3">
                    {
                        hireDeveloperData1.map((item) => (
                            <HireDeveloperCard1 key={item.id}
                                title={item.title}
                                description={item.description}
                                img={item.img} />
                        ))
                    }
                </div>
            </div>

        </div>

        <div className="container mx-auto my-20">
            <div className="flex flex-col space-y-24">
                <div className="border border-logoBlue border-opacity-60" />
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center">
                    <h1 className="text-2xl md:text-4xl text-logoBlue font-semibold ">Launching an online marketplace in one of these<br /> industries? You can benefit from our experience
                    </h1>
                    <div>
                        <ScheduleBtn />
                    </div>
                </div>
                <div className="border border-logoBlue border-opacity-60" />
            </div>
        </div>
        <WCTechilab />
        <OurExperties />
        <CTA />

        {/* Add Section Here */}
        <Testimonial />

    </>);
}

export default HireADeveloper;