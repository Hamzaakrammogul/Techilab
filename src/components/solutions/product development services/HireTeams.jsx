import { HireTeamsCard, HireTeamsCard1 } from "../../../UI/Cards";
import { hireTeams, hireTeamsData, hireTeamsData1, hireTeamsData2, hireTeamsFAQ } from "../../../utils/data";
import Testimonial from "../../Testimonial"
import MainSection from "../../MainSection";
import OurExperties from "../../OurExperties";
import BuildForYou from "../../BuildForYou";
import WCTechilab from "../../WCTechilab";
import CTA from "../../CTA";
import FAQDisclosure from '../../FAQDisclosure';

const HireTeams = () => {
    return (<>
        <MainSection

            title={<>Hire a Dedicated <span className="text-logoGreen"> Agile Team </span> For Your Next Product</>}
            Mddescription={<>Take your idea to users’ screens. Delegate software creation to a dependable product development services partner and dedicate your resources to business-related activities.
            </>}
            Smdescription={<>Take your idea to users’ screens. Delegate software creation to a dependable product development services partner and dedicate your resources to business-related activities.
            </>}
        />
        <div className="container mx-auto">
            <div className="flex flex-col space-y-16">
                <div><h1 className="text-5xl text-logoBlue font-semibold">What we <span className="text-logoGreen">do </span> ?</h1></div>
                <div className="flex flex-wrap gap-4">
                    {hireTeams.map((item) => (
                        <HireTeamsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>

        <Testimonial />

        <div className=" bg-lightGreen py-20 mt-36">
            <div className="container mx-auto" >
                <div className="flex flex-col space-y-16">
                    <div>
                        <h1 className="text-5xl text-logoBlue font-semibold">How Techilab Product Strategy Can Help?</h1>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 ">
                        {hireTeamsData.map((item) => (
                            <div className="flex flex-col md:w-1/3 items-center text-center justify-center">
                                <div className="w-16 h-16 overflow-hidden "> <img src={item.img} alt="" className="" /></div>
                                <h1 className="text-xl font-semibold text-logoBlue px-16">{item.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <OurExperties />
        <BuildForYou />
        <div className=" bg-dusty py-20 mt-36">
            <div className="container mx-auto" >
                <div className="flex flex-col space-y-16">
                    <div>
                        <h1 className="text-5xl text-logoBlue font-semibold">How to start working with the <br />Techilab product development team</h1>
                    </div>
                    <div className="flex">
                        {hireTeamsData1.map((item) => (
                            <div className="flex flex-col w-1/4 space-y-4 ">
                                <div className="w-16 h-16 overflow-hidden "> <img src={item.img} alt="" className="" /></div>
                                <h1 className="text-xl font-semibold text-logoBlue ">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <WCTechilab />
        <div className="container mx-auto flex flex-col space-y-5 mt-32">
            <div><h1 className="text-5xl text-logoBlue font-semibold">What's next ?</h1></div>
            <div className="flex flex-wrap justify-between">
                {hireTeamsData2.map((item) => (
                    <HireTeamsCard1
                        key={item.id}
                        subTitle={item.subTitle}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
        <CTA />

        <div className="container mx-auto space-y-16">
            <div className="text-center"><h1 className="text-5xl text-logoBlue font-semibold">Frequently Asked Questions</h1></div>
            <div> {
                hireTeamsFAQ.map((item) => (
                    <FAQDisclosure
                        key={item.id}
                        answer={item.answer}
                        question={item.question}
                    />
                ))
            }</div>
        </div>
    </>);
}

export default HireTeams;