import Button from "../../../../UI/Button";
import { BlockchainCard, BlockchainCard1, BlockchainCard2, BlockchainCard3 } from "../../../../UI/Cards";
import { ScheduleBtn } from "../../../../UI/ScheduleBtn";
import { BlockchianFAQ, blockchainData, blockchainData1, blockchainData3 } from "../../../../utils/data";
import MainSection from "../../../MainSection";
import azure from '../../../../assets/azure.svg';
import aws from '../../../../assets/aws.svg';
import bigchain from '../../../../assets/bigchain.svg';
import dapphub from '../../../../assets/dapphub-rc-logo.svg';
import ledger from '../../../../assets/hyperledger.svg';
import ipfs from '../../../../assets/ipfs.svg';
import solidity from '../../../../assets/solidity.svg';
import web3 from '../../../../assets/web3.svg';
import Bg from '../../../../../img/background.jpg';
import WCTechilab from "../../../WCTechilab";
import Testimonial from "../../../Testimonial";
import CTA from "../../../CTA";
import FAQDisclosure from '../../../FAQDisclosure';
const Blockchain = () => {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <MainSection
                        title={<>We build cutting-edge <span className="text-logoGreen">Blockchain</span> based software products</>}
                        Mddescription={<>Join hundreds of passionate entrepreneurs making their mark in Web 3.0 with Techilab
                        </>}
                        Smdescription={<>Join hundreds of passionate entrepreneurs making their mark in Web 3.0 with Techilab
                        </>}
                    />
                </div>

                <div className="flex flex-col mt-56">
                    <div className="text-5xl text-logoBlue font-semibold">
                        <h1>Benefits Of Our <br /> <span className="text-logoGreen">Blockchain Services </span> </h1>
                    </div>
                    <div className="flex flex-wrap space-x-2">
                        {blockchainData.map((item) => (
                            <BlockchainCard key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                        <div className="bg-dusty md:w-[32%] flex flex-col justify-center p-5 md:p-10 space-y-5 mt-1 md:mt-10">
                            <div><h1 className="text-2xl  text-logoBlue font-semibold ">Unleash the Benefits of Decentralization with Blockchain.</h1></div>
                            <ScheduleBtn />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-lightGreen p-10 mt-16 space-y-10">
                    <div><h1 className="text-5xl text-logoBlue font-semibold">Blockchain<br />
                        Development Services</h1></div>
                    <div className="flex flex-wrap">
                        {blockchainData1.map((item) => (
                            <BlockchainCard1 key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Button title={'Hire a Blockchain Developer'} />
                    </div>

                </div>

                <div className="flex flex-col space-y-14 mt-24">
                    <div><h1 className="text-4xl text-logoBlue font-semibold">Our Tech Stack</h1></div>
                    <div className="flex flex-wrap space-y-10">
                        <BlockchainCard2 img={azure} />
                        <BlockchainCard2 img={aws} />
                        <BlockchainCard2 img={bigchain} />
                        <BlockchainCard2 img={ledger} />
                        <BlockchainCard2 img={ipfs} />
                        <BlockchainCard2 img={web3} />
                        <BlockchainCard2 img={dapphub} />
                        <BlockchainCard2 img={solidity} />
                    </div>
                </div>
            </div>

            < div className=" bg-cover bg-fixed  mt-24" style={{ backgroundImage: `url(${Bg})` }}  >
                <div className="bg-overBlue bg-opacity-90 py-20">
                    <div className="container mx-auto flex flex-col">
                        <div>
                            <h1 className="text-5xl text-whity font-semibold">
                                Our Custom Blockchain<br />
                                Development Solutions</h1>
                        </div>
                        <div className="flex flex-col md:flex-row mt-16">
                            {
                                blockchainData3.map((item) => (
                                    <BlockchainCard3 key={item.id} title={item.title} description={item.description} img={item.img} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <WCTechilab />
            <Testimonial />
            <CTA />
            <div className='container mx-auto flex flex-col'>
                <div className='mb-24'><h1 className='text-5xl font-semibold text-logoBlue'>Frequently Asked Questions</h1></div>
                {BlockchianFAQ.map((item) => (
                    <FAQDisclosure key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
        </>
    );
}
export default Blockchain;