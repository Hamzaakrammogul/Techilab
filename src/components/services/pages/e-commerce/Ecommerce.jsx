import { EcommerceCard1, EcommerceCard2 } from "../../../../UI/Cards";
import { ecommerData2, ecommerceData, ecommerceData1, ecommerceData3, ecommerceData4 } from "../../../../utils/data";
import MainSection from "../../../MainSection";
import desktop from '../../../../../img/105.jpg'
import WCTechilab from "../../../WCTechilab";
import CTA from "../../../CTA";
import Testimonial from "../../../Testimonial";

const Ecommerce = () => {
    return (
        <>
            <div className="container mx-auto">
                <MainSection
                    title={<>Accelerating<br />
                        <span className="text-logoGreen">Digital Commerce </span>Transformation</>}
                    Mddescription={<>We empower enterprise-grade capabilities and deliver conversion-focused experiences.</>}
                    Smdescription={<>We empower enterprise-grade capabilities and deliver conversion-focused experiences.</>}
                />

                <div className=" bg-dusty md:h-111 p-5 ">
                    <div className="flex flex-col md:flex-row items-center justify-between ">
                        {ecommerceData.map((item) => (
                            <div key={item.id} className="items-center flex justify-center">
                                <img className="w-[150px] " src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-lightSky mt-32">
                <div className="container mx-auto flex flex-col md:flex-row p-1 py-16 md:p-16 gap-5">
                    {
                        ecommerceData1.map((item) => (
                            <EcommerceCard1 key={item.id} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>
            <div className="container mx-auto mt-16">
                <div className="flex flex-wrap gap-2">
                    {ecommerData2.map((item) => (
                        <EcommerceCard2 key={item.id} title={item.title} description={item.description} img={item.img} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-32">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 flex flex-col space-y-5">
                        <h1 className="text-logoBlue text-3xl md:text-5xl font-semibold">Internal e-commerce software</h1>
                        <p className="text-logoBlue text-xl">
                            E-commerce requires two-end technical solutions. On one end, there is the user interface with the ability to browse, buy and pay for the products or services. The software on the other end is responsible for everything that remains behind the scenes - starting with order processing and up to delivery to the customer.
                        </p>
                    </div>
                    <div className="1/2">
                        <img className="w-[600px]" src={desktop} alt="desktop-image" />
                    </div>
                </div>


                <div className="flex flex-col space-y-16">
                    <div><h1 className="text-4xl md:text-5xl text-logoBlue font-semibold">Build with Techilab</h1></div>
                    <div className="flex flex-wrap gap-2">
                        {ecommerceData3.map((item) => (
                            <EcommerceCard2 key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                    </div>
                </div>


                <div className="flex flex-col space-y-16 mt-36">
                    <div><h1 className="text-4xl md:text-5xl text-logoBlue font-semibold">Why choose Techilab to build your<br />
                        <span className="text-logoGreen">  E-commerce store</span></h1></div>
                    <div className="flex flex-wrap gap-2">
                        {ecommerceData4.map((item) => (
                            <EcommerceCard2 key={item.id} title={item.title} description={item.description} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>

            <WCTechilab />
            <Testimonial />
            <CTA />
        </>
    );
}

export default Ecommerce;