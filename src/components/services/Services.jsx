import { ServiceCard } from "../../UI/Cards";
import { serviceData, serviceData1 } from "../../utils/data";
import CTA from "../CTA";
import IndustryExpertise from "../IndustryExpertise";
import MainSection from "../MainSection";
import OCFramework from "../OCFramework";
import OurExperties from "../OurExperties";
import Testimonial from "../Testimonial";
import WCTechilab from "../WCTechilab";

const Services = () => {
    return (
        <>

            <MainSection
                title={<><span className="text-logoBlue">As an all-around</span> <span className="text-logoGreen">Software engineering company,</span> <span className="text-logoBlue">we <br /> can help you at any stage of development</span></>}
                Mddescription={<>Whether you're creating your product from scratch, modernizing it, or continuously improving it, we have the required expertise for your business.</>}
                Smdescription={<>Whether you're creating your product from scratch, modernizing it, or continuously improving it, we have the required expertise for your business.</>}
            />
            {/* second section */}
            <div className="bg-lightSky py-24">
                <div className="container mx-auto space-y-10">
                    <div><h1 className="text-3xl text-center md:text-left md:text-6xl text-logoBlue font-semibold">Services we offer</h1></div>
                    <div className="flex flex-col md:flex-row md:gap-1">
                        {serviceData.map((item) => (
                            <ServiceCard key={item.id} img={item.img} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Third Section */}

            <div className="container mx-auto mt-28 md:mt-32 mb-32">
                <div className="flex flex-col space-y-10">
                    <div><h1 className="text-3xl md:text-5xl text-logoBlue text-center md:text-left font-semibold">What Sets Us Apart?</h1></div>
                    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row">
                        {serviceData1.map((item) => (<div key={item.id} className="text-center md:text-left md:w-1/4 flex flex-col">
                            <span className="text-4xl text-center text-logoGreen font-bold">{item.title}</span>
                            <span className="text-xl text-center md:text-2xl text-logoBlue ">{item.description}</span>
                        </div>))}
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <OCFramework />
            {/* Fifth section */}
            <OurExperties />
            {/* Sixth Section  */}
            <IndustryExpertise />
            {/* Seventh section */}
            <WCTechilab />
            {/* Eighth section */}
            <Testimonial />
            {/* Ninth section */}
            <CTA />

        </>
    );
}

export default Services;