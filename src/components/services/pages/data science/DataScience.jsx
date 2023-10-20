import Button from "../../../../UI/Button";
import { BlockchainCard, BlockchainCard1, BlockchainCard2 } from "../../../../UI/Cards";
import { ScheduleBtn } from "../../../../UI/ScheduleBtn";
import { dataScience1, dataScience2, dataScience3, dataScienceFAQ } from "../../../../utils/data";
import MainSection from "../../../MainSection";
import azure from '../../../../assets/azure.svg';
import aws from '../../../../assets/aws.svg';
import panda from '../../../../assets/pandas.svg';
import django from '../../../../assets/django.svg';
import keras from '../../../../assets/keras.svg';
import matplotlib from '../../../../assets/matplotlib.svg';
import theano from '../../../../assets/theano.svg';
import piotly from '../../../../assets/piotly.svg';
import WCTechilab from "../../../WCTechilab";
import Testimonial from "../../../Testimonial";
import CTA from "../../../CTA";
import FAQDisclosure from '../../../FAQDisclosure';


const DataScience = () => {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <MainSection
                        title={<>Unleash The Power of<br /><span className="text-logoGreen">Data Decomratization</span></>}
                        Mddescription={<>A steady stream of insights is all that you need for better decision-making.</>}
                        Smdescription={<>A steady stream of insights is all that you need for better decision-making.</>}
                    />
                </div>

                <div className="flex flex-col mt-56">
                    <div className="text-5xl text-logoBlue font-semibold">
                        <h1>Drive progress through the fusion of<span className="text-logoGreen">data and AI </span> </h1>
                    </div>
                    <div className="flex flex-wrap space-x-2">
                        {dataScience1.map((item) => (
                            <BlockchainCard key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                        <div className="bg-dusty md:w-[32%] flex flex-col justify-center p-5 md:p-10 space-y-5 mt-1 md:mt-10">
                            <div><h1 className="text-2xl  text-logoBlue font-semibold ">Ready To Get Started?</h1></div>
                            <div><p className="text-xl">Enable smarter decision-making with AI and data science.</p></div>
                            <ScheduleBtn />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-lightGreen p-10 mt-16 space-y-10">
                    <div><h1 className="text-5xl text-logoBlue font-semibold">Our Data<br />
                        Science & AI Services</h1></div>
                    <div className="flex flex-wrap">
                        {dataScience2.map((item) => (
                            <BlockchainCard1 key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Button title={'Hire a Data Science & AI Developer'} />
                    </div>
                </div>

                {/* Add missing section herer */}
                <div className="flex flex-col space-y-10 mt-32 mb-36 ">
                    <div className="flex flex-col space-y-5">
                        <p className="text-xl text-logoBlue font-semibold">Our Process</p>
                        <h1 className="text-5xl text-logoBlue font-semibold">Filter The Clutter</h1>
                        <h2 className="text-4xl text-logoBlue">Enable data product-marketing</h2>
                    </div>

                    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between">
                        {dataScience3.map((item) => (
                            <div key={item.id} className="flexw-1-5">
                                <div className="flex flex-col items-center">
                                    <img className="w-[100px]" src={item.img} alt="" />
                                    <p className="text-lg font-semibold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-14 mt-24 mb-36">
                    <div><h1 className="text-4xl text-logoBlue font-semibold">Our Tech Stack</h1></div>
                    <div className="flex flex-wrap space-y-10">
                        <BlockchainCard2 img={azure} />
                        <BlockchainCard2 img={aws} />
                        <BlockchainCard2 img={panda} />
                        <BlockchainCard2 img={matplotlib} />
                        <BlockchainCard2 img={theano} />
                        <BlockchainCard2 img={django} />
                        <BlockchainCard2 img={piotly} />
                        <BlockchainCard2 img={keras} />
                    </div>
                </div>
            </div>

            <WCTechilab />
            <Testimonial />
            <CTA />
            <div className='container mx-auto flex flex-col'>
                <div className='mb-24'><h1 className='text-5xl font-semibold text-logoBlue'>Frequently Asked Questions</h1></div>
                {dataScienceFAQ.map((item) => (
                    <FAQDisclosure key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
        </>
    );
}
export default DataScience;