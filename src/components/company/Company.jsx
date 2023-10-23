import { ScheduleBtn } from "../../UI/ScheduleBtn";
import QuoteBtn from "../../UI/QuoteBtn";
import Banner from '../../../img/banner.png';
import { MdDone } from 'react-icons/md';
import { Card, Card2 } from "../../UI/Cards";
import { data4, data5, data1 } from "../../utils/data";
import Bg from '../../../img/bg-5.jpg'
import Testimonials from "../Testimonials";
import CTA from "../CTA";
import GreenBtn from "../../UI/GreenBtn";
import BusinessModel from "../BusinessModel";
import IndustryExpertise from "../IndustryExpertise";
import OurExperties from "../OurExperties";
import BuildForYou from "../BuildForYou";

const Company = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row ">
                <div className="flex flex-col space-y-5 md:w-2/4 md:mt-32 2xl:mt-44 ">
                    <div>
                        <h1 className="text-4xl leading-tight font-semibold mt-16 md:mt-0 md:text-6xl">
                            We Build<br />
                            Agile <span className="text-logoGreen">Software</span> <br />
                            Development Teams
                        </h1>
                    </div>
                    <div className="md:hidden" >
                        <p>Empower your business to succeed with experienced development teams

                            and technical leadership, perfect for non-technical founders starting out

                            and trusted by businesses of up to 1,000 employees in size.</p>
                    </div>
                    <div className=" hidden md:block  md:text-lg">
                        <p>Empower your business to succeed with experienced development teams <br />

                            and technical leadership, perfect for non-technical founders starting out <br />

                            and trusted by businesses of up to 1,000 employees in size.</p>
                    </div>
                    <div className="flex space-x-8 mx-auto md:mx-0">
                        <ScheduleBtn />
                        <QuoteBtn title={'Get a Quote'} />
                    </div>
                </div>
                <div className="mt-6  object-contain md:w-2/4 md:ml-24 " >
                    <img src={Banner} alt="" />
                </div>
            </div>
            {/* Bar under hero */}
            <div className=" container mx-auto">
                <div className=" flex flex-col border-none h-auto shadow-lg mt-12 w-11/12 mx-auto items-center justify-between px-5 md:mt-24 md:flex-row md:h-110">
                    <span className=" flex flex-col items-center space-x-1 md:flex-row  ">
                        <MdDone size={32} />
                        <h1 className=" font-bold  text-2xl">Data Science and AI</h1>
                    </span>
                    <span className=" flex flex-col items-center space-x-1 md:flex-row">
                        <MdDone size={32} />
                        <h1 className=" font-bold  text-2xl">Blockchain Development</h1>
                    </span>
                    <span className=" flex flex-col items-center space-x-1 md:flex-row">
                        <MdDone size={32} />
                        <h1 className=" font-bold  text-2xl">Information Security</h1>
                    </span>
                </div>
            </div>
            {/* Third section */}
            <div className="bg-dusty">
                <div className="container mx-auto  pb-16 mt-20 md:mt-32">
                    <div className="flex flex-col space-y-10">
                        <div>
                            <h1 className="text-4xl text-center font-semibold mt-10 md:text-left md:text-5xl">How to start working with the Techilab</h1>
                        </div>
                        <div className="flex flex-col align-items-center w-11/12 space-x-5 mx-auto md:flex-row ">
                            {data1.map((item) => (
                                <Card key={item.id} img={item.img} title={item.title} description={item.description} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Fourth Section */}

            <BusinessModel />

            {/* Fifth Section */}

            < div className=" bg-cover bg-fixed  mt-24" style={{ backgroundImage: `url(${Bg})` }}  >
                <div className="bg-overBlue bg-opacity-90 py-20">
                    <div className="w-11/12 mx-auto">
                        <div className="flex flex-col  ">
                            <div className="mb-14">
                                <h1 className="text-4xl font-semibold text-white text-center md:text-left"> What Sets Us Apart?</h1>
                            </div>
                            <div className="flex flex-col space-y-5 items-center text-center md:text-left md:items-start md:flex-row md:justify-between">
                                <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-10">
                                    <div className="flex flex-col">
                                        <span className="text-6xl text-logoGreen font-bold ">9+</span>
                                        <span className="text-2xl text-white font-light ">Years in the software <br />development market</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-6xl text-logoGreen font-bold ">200+</span>
                                        <span className="text-2xl text-white font-light ">Successfully compeleted projects <br />development market</span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:ml-32 ">
                                    <span className="text-xl text-white font-bold ">Feel free to contact us!</span>
                                    <span className="text-lg text-logoGreen font-bold ">info@techilab.com</span>
                                </div>
                            </div>
                            <div className="flex flex-col align-items-center space-y-5 md:space-y-0 md:flex-row mt-20 md:justify-between">
                                <div className=" flex flex-col items-center md:items-start space-y-3">
                                    <div>
                                        <GreenBtn title={'Explore more'} />
                                    </div>
                                    <div>
                                        <GreenBtn title={'Get quote'} />
                                    </div>
                                </div>
                                <div className="flex flex-col text-center space-y-5 md:space-y-0">
                                    <span className="text-6xl text-logoGreen font-bold ">10+</span>
                                    <span className="text-2xl text-white font-light ">Industries</span>
                                </div>
                                <div className="flex flex-col text-center space-y-5 md:space-y-0">
                                    <span className="text-6xl text-logoGreen font-bold ">110+</span>
                                    <span className="text-2xl text-white font-light ">Specialists</span>
                                </div>
                                <div className="flex flex-col items-center space-y-5 md:space-y-0 md:items-start">
                                    <span className="text-6xl text-logoGreen font-bold ">60+</span>
                                    <span className="text-2xl hidden text-white font-light md:block ">of our partners and <br />clients work with us <br />for over three years</span>
                                    <span className="text-2xl text-white font-light text-center md:hidden ">of our partners and clients work with us for over three years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Sixth Section  */}

            <OurExperties />

            {/* Seventh Section */}

            < div className=" bg-lightSky" >
                <div className="container mx-auto pt-10 pb-14">
                    <div className="w-11/12 mx-auto items-center">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-semibold mb-10">Why Should You Choose Techilab?</h1>
                        </div>
                        <div className="flex flex-col space-y-5 md:mb-10 md:space-y-0 md:flex-row md:space-x-5 justify-center ">
                            {data4.map((item) => (
                                <Card2 key={item.id} img={item.img} title={item.title} description={item.description} />
                            ))}
                        </div>
                        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 justify-center mt-5 ">
                            {data5.map((item) => (
                                <Card2 key={item.id} img={item.img} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            {/* Eighth Section */}
            <BuildForYou />
            <div className="container mx-auto mt-24">
                <div className="w-11/12 mx-auto">
                    <h1 className=" text-3xl md:text-4xl text-center md:text-left text-logoBlue font-semibold">Testimonials</h1>
                </div>
            </div>
            <Testimonials />
            <IndustryExpertise />
            <CTA />
        </>);
}
export default Company;