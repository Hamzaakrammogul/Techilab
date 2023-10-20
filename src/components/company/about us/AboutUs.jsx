import { AboutCard1, AboutCard2, AboutCard3 } from "../../../UI/Cards";
import QuoteBtn from "../../../UI/QuoteBtn";
import { aboutData, aboutData2, aboutData3, coreData, disclosureData } from "../../../utils/data";
import Disclose from "../../Disclosure";
import img from '../../../../img/37.jpg';
import { Portfolio, Portfolio1 } from "../../Portfolio";
import Button from "../../../UI/Button";
import Bilal from '../../../../img/bilal.jpg';
import WCTechilab from "../../WCTechilab";
import CTA from "../../CTA";
import Gallery from "../../Gallery";
import MainSection from "../../MainSection";


const AboutUs = () => {
    return (
        <>
            {/* First Section */}

            <MainSection title={<><span className="text-logoBlue">Helping businesses build, and scale through </span><br />
                <span className="text-logoGreen">technology and software</span> </>}
                Mddescription={<>We anticipate your need and offer tailored solutions designed to solve your a particular problem in the<br />
                    most efficient way possible</>}
                Smdescription={<>We anticipate your need and offer tailored solutions designed to solve your a particular problem in the
                    most efficient way possible</>}
            />

            {/* Second Section */}

            <div className="container mx-auto">
                <div className="flex flex-col space-y-10">
                    <div>
                        <h1 className="text-3xl text-center md:text-left md:text-5xl text-logoBlue font-semibold">About Us </h1>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
                        <div className=" text-lg text-center px-2 md:text-left md:text-2xl md:w-1/2 text-logoBlue font-light md:px-10">
                            <p>Techilab is a leading software development company located in Lahore, Pakistan. We are committed to develop innovative software solutions for leading enterprises in the world, helping them grow their businesses using latest technology solutions.</p>
                        </div>
                        <div className=" text-lg text-center px-2 md:text-left md:text-2xl md:w-1/2 text-logoBlue font-light md:px-10">
                            <p>Techilab specialists have experience working with businesses of various sizes operating in many industries.We know that no two cases are the same, which is why our solutions are tailored to handle each client's specific task</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section */}

            <div className="flex flex-col md:flex-row container mx-auto space-y-2 md:space-y-0 md:space-x-10 md:px-10 px-1 mt-10">
                {aboutData.map((item) => (<AboutCard1
                    key={item.id}
                    title={item.title}
                    description={item.description} />))}
            </div>

            {/* Fourth Section */}

            <div className="container mx-auto mt-24 ">
                <div className="flex flex-col">
                    <div><h1 className="text-3xl text-center md:text-left md:text-5xl text-logoBlue  font-semibold ">Problems We'll Help You Solve</h1></div>
                    <div className="flex flex-col md:flex-row ">{aboutData2.map((item) => (<AboutCard2 key={item.id} title={item.title} img={item.img} description={item.description} />))}</div>
                </div>
            </div>

            {/* Fifth Section */}

            <div className="container mx-auto mt-32 bg-dusty py-5">
                <div className="flex flex-col">
                    <div><h1 className="text-3xl text-center md:text-left md:text-5xl text-logoBlue font-semibold">Corporate culture</h1></div>
                    <div className="flex flex-col md:flex-row">

                        {/* left div */}

                        <div className=" mt-10 md:w-1/2  md:mt-24">
                            {disclosureData.map((item) => (
                                <Disclose key={item.id} title={item.title} description={item.description} />
                            ))}
                        </div>

                        {/* right div */}

                        <div className="flex flex-col md:w-1/2">
                            <div><img src={img} alt="" className="w-[600px]" /></div>
                            <div><p className="text-logoBlue text-lg text-center md:text-left">
                                We don’t just recruit skilled professionals but also cut the diamonds ourselves. In the last several years, we’ve held internships for frontend and backend developers, quality assurance engineers, and lead generation managers. Candidates who successfully complete our internships start working on projects together with their experienced peers.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sixth Section */}

            <div className="container mx-auto mt-28 md:mt-32 mb-32">
                <div className="flex flex-col space-y-10">
                    <div><h1 className="text-3xl md:text-5xl text-logoBlue text-center md:text-left font-semibold">What Sets Us Apart?</h1></div>
                    <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row">
                        {aboutData3.map((item) => (<div key={item.id} className="text-center md:text-left md:w-1/4 flex flex-col">
                            <span className="text-6xl text-logoGreen font-bold">{item.title}</span>
                            <span className="text-xl md:text-3xl text-logoBlue ">{item.description}</span>
                        </div>))}
                    </div>
                </div>
            </div>

            {/* Sixth Section */}

            <div className="hidden md:block">
                <Portfolio />
                <Portfolio1 />
            </div>

            {/* Seventh Section */}
            <div className="bg-darkSky py-10 md:p-10 mt-24">
                <div className="container mx-auto space-y-10">
                    <div>
                        <h1 className="text-5xl font-semibold text-logoBlue">Our Core Values</h1>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {coreData.map((item) => (
                            <AboutCard3 key={item.id} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Eighth section */}
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">

                    {/* left side */}
                    <div className="md:w-1/2 space-y-5 mt-32">
                        <h1 className="text-3xl font-semibold text-logoBlue md:text-5xl text-left">Message from the Founder</h1>
                        <div className="space-y-10 md:px-10 2xl:px-16">
                            <p className="text-xl text-left md:text-2xl text-logoBlue font-light">We value our customers and provide the services way beyond the limits. Plus, we have a great company culture that helps us retain the top talent and is always available for our customers.</p>

                            <p className="text-xl text-left md:text-2xl text-logoBlue font-light ">Our team has significant experience with Blockchain, AI & DataScience, JavaScript, Magento, shopify and wordpress, the leading platform for building online platforms. We help our clients build communication with their customers using digital channels and achieve top results in their online business.</p>

                            <p className="text-xl text-left md:text-2xl text-logoBlue font-light ">
                                Our biggest success is not our story but the story of our clients, the story of how we delivered on our promises and contributed to their business growth.
                            </p>

                            <h1 className="text-3xl md:text-5xl text-logoBlue font-bold">Bilal Iqbal</h1>
                            <div className="flex space-x-1 ">
                                <Button title={"Let's Talk"} />
                                <QuoteBtn title={"Hire a Developer"} />
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="md:w-1/2 mt-5 md:mt-24">
                        <img className="w-[600px]" src={Bilal} alt="" />
                    </div>
                </div>
            </div>

            {/* Ninth Section */}
            <WCTechilab />
            {/* tenth section */}
            <CTA />
            {/* Tenth section */}
            <Gallery />

        </>
    );
}
export default AboutUs;