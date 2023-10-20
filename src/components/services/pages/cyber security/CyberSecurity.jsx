import { BlockchainCard, BlockchainCard2 } from "../../../../UI/Cards";
import { cyberSecurity1, cyberSecurity2, cyberSecurityFAQ, partnersData } from "../../../../utils/data";
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


const CyberSecurity = () => {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <MainSection
                        title={<>Protect Your Sensitive Data & Stay Steps<br /> Ahead of<span className="text-logoGreen">Cyber Attacks</span></>}
                        Mddescription={<>From proactive planning to crisis management, we will secure your digital assets. </>}
                        Smdescription={<>From proactive planning to crisis management, we will secure your digital assets.</>}
                    />
                </div>

                <div className="flex flex-col space-y-10 mt-56">
                    <div className="text-5xl text-logoBlue font-semibold">
                        <h1>Secure your <span className="text-logoGreen">business</span>  and protect your <span className="text-logoGreen">data</span>  With <br />Techilab </h1>
                    </div>
                    <div className="flex flex-wrap space-x-2">
                        {cyberSecurity1.map((item) => (
                            <BlockchainCard key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col bg-lightGreen p-10 mt-16 space-y-10">
                    <div><h1 className="text-5xl text-logoBlue font-semibold">We Can Help You</h1></div>
                    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row items-center justify-between">
                        {cyberSecurity2.map((item) => (
                            <div key={item.id} className="flex">
                                <div className="flex  flex-col items-center">
                                    <img className="w-[100px] h-[125px]" src={item.img} alt="" />
                                    <p className="text-xl text-center font-semibold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col mt-36 space-y-16  ">
                    <div>
                        <h1 className="text-5xl text-logoBlue font-semibold">Our Partners</h1>
                    </div>
                    <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-center md:justify-between mt-10">
                        {partnersData.map((item) => (
                            <img className="w-[150px]" key={item.id} src={item.img} alt="" />
                        ))}
                    </div>
                </div>
            </div>

            <WCTechilab />

            <div className="container mx-auto flex flex-col space-y-14 mt-24 mb-36">
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
            <Testimonial />
            <CTA />
            <div className='container mx-auto flex flex-col'>
                <div className='mb-24'><h1 className='text-5xl font-semibold text-logoBlue'>Frequently Asked Questions</h1></div>
                {cyberSecurityFAQ.map((item) => (
                    <FAQDisclosure key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
        </>
    );
}
export default CyberSecurity;