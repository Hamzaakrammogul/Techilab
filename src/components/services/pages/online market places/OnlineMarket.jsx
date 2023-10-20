import React from "react";
import MainSection from '../../../MainSection';
import { MarketplaceCard, MarketplaceCard1 } from "../../../../UI/Cards";
import { marketplaceData, marketplaceData1 } from "../../../../utils/data";
import IndustryExpertise from "../../../IndustryExpertise";
import Button from '../../../../UI/Button';
import WCTechilab from '../../../WCTechilab';
import Testimonial from '../../../Testimonial';
import CTA from '../../../CTA';
const OnlineMarket = () => {
    return (<>
        <MainSection
            title={<>Market Place<br />
                <span className="text-logoGreen">Software Development </span></>}
            Mddescription={<>At Techilab, we have developed multiple<br />
                peer-to-peer platforms for various industries</>}
            Smdescription={<>At Techilab, we have developed multiple<br />
                peer-to-peer platforms for various industries</>}
        />
        <div className="container mx-auto">
            <div className="flex flex-col mt-56 space-y-10">
                <div className="text-3xl md:text-5xl text-logoBlue font-semibold">
                    <h1>Marketplace development <br />services we deliver</h1>
                </div>
                <div className="flex flex-wrap space-x-2">
                    {marketplaceData.map((item) => (
                        <MarketplaceCard key={item.id} title={item.title} description={item.description} img={item.img} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col mt-56 space-y-10">
                <div className="text-3xl md:text-5xl text-logoBlue font-semibold">
                    <h1>As a marketplace development company,<br />we can help you with</h1>
                </div>
                <div className="flex flex-wrap gap-5">
                    {marketplaceData1.map((item) => (
                        <MarketplaceCard1 key={item.id} title={item.title} description={item.description} img={item.img} />
                    ))}
                </div>
            </div>
        </div>
        <IndustryExpertise />

        <div className="container mx-auto my-20">

            <div className="flex flex-col space-y-24">
                <div className="border border-logoBlue border-opacity-60" />
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center">
                    <h1 className="text-2xl md:text-4xl text-logoBlue font-semibold ">Launching an online marketplace in one of these<br /> industries? You can benefit from our experience</h1>
                    <div>
                        <Button title={"Talk To Us"} />
                    </div>
                </div>
                <div className="border border-logoBlue border-opacity-60" />
            </div>

        </div>

        <WCTechilab />
        <Testimonial />
        <CTA />
    </>);
}

export default OnlineMarket;