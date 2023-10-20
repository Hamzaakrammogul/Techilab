

export const Card = ({ img, title, description }) => {
    return (
        <div className="flex flex-col items-center space-y-3  md:w-1/4 md:items-start ">
            <div className="w-44 h-32 mt-2 md:mt-0">
                <img className="w-44 h-32" src={img} alt="" />
            </div>
            <div>
                <h1 className="text-lg font-semibold md:text-xl ">{title}</h1>
            </div>
            <div>
                <p className="leading-tight text-center md:text-left">{description}</p>
            </div>
        </div>
    );
};

export const Card1 = ({ img, title, description }) => {
    return (
        <div className="flex flex-col w-full md:w-2/4 md:mr-7 bg-dusty ">
            <div>
                <img src={img} alt="" className="h-[250px] w-full" />
            </div>
            <div className="mt-5 space-y-5" >
                <div>
                    <h1 className="text-lg text-center font-semibold md:text-2xl ">{title}</h1>
                </div>
                <div>
                    <p className="leading-tight text-center md:text-left">{description}</p>
                </div>
            </div>

        </div>
    );
};

export const Card2 = ({ img, title, description }) => {
    return (
        <div className="bg-white w-full md:w-2/5 px-2">
            <div className="flex flex-col space-y-5 py-10">
                <div className="w-24">
                    <img src={img} alt="" className="w-24 h-24" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{title}</h1>
                </div>
                <div>
                    <p className="text-md font-semibold">{description}</p>
                </div>
            </div>
        </div>
    );
};


export const Card3 = ({ img, pretitle, aftertitle }) => {
    return (
        <div className="bg-dusty w-full space-x-10 py-20 md:w-2/5 h-111 flex flex-row items-center justify-center">
            <div className="w-28">
                <img src={img} alt="" className="w-24 " />
            </div>
            <div>
                <h1 className="text-2xl text-logoBlue md:text-3xl">
                    {pretitle}<br /> {aftertitle}
                </h1>
            </div>
        </div>
    );
};

export const Card4 = ({ img, title, description }) => {
    return (
        <div className="bg-dusty md:w-1/2 border-t-0 border-r border-l border-b flex flex-col items-center justify-center space-y-3 mb-1 md:mb-0">
            <div><img src={img} alt="" className="w-24 md:w-32 " /></div>
            <div><h1 className=" text-2xl md:text-3xl text-center text-logoBlue">{title}</h1></div>
            <div><p className="text-center text-sm md:text-md">{description}</p></div>
        </div>
    )
};

export const AboutCard1 = ({ title, description }) => {

    return (

        <div className=" flex flex-col w-full rounded-2xl border-2 border-logoBlue space-y-5 md:w-1/2 md:px-10 py-5 bg-darkSky">
            <div><h1 className="text-4xl text-logoBlue text-center font-semibold">{title}</h1></div>
            <div><p className="text-xl text-logoBlue text-center leading-tight">{description}</p></div>
        </div>

    );
};

export const AboutCard2 = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-1/3 flex flex-col p-5 md:p-10 md:mr-5 space-y-5 mt-1 md:mt-10">
            <div className="w-32 h-28 "><img src={img} alt="" className="w-24 h-24 " /></div>
            <div><h1 className="text-4xl 2xl:text-5xl text-logoBlue font-semibold ">{title}</h1></div>
            <div><p className="text-xl text-logoBlue font-normal">{description}</p></div>
        </div>

    );
};

export const AboutCard3 = ({ title, description }) => {
    return (
        <div className="bg-whity flex flex-col w-[400px] 2xl:w-[500px] px-5 py-10  space-y-5 ">
            <div><h1 className="text-4xl font-semibold text-logoBlue">{title}</h1></div>
            <div><p className="text-xl font-light leading-tight">{description}</p></div>
        </div>
    );
};

export const WCTechilabCard = ({ img, title, description }) => {
    return (
        <div className="bg-whity flex flex-col md:w-[400px] 2xl:w-[450px] px-5 py-10 space-y-5">
            <div className="w-28 h-28 overflow-hidden"><img className="w-24 " src={img} alt="" /></div>
            <div className="text-3xl font-semibold text-logoBlue">{title}</div>
            <div><p className="text-xl text-logoBlue font-light">{description}</p></div>
        </div>
    );
};

export const GalleryCard = ({ img }) => {
    return (
        <div className="conatiner mx-auto ">
            <img className="w-[320px] h-[250px] 2xl:w-[380px] transition duration-300 hover:scale-110" src={img} alt="" />
        </div>
    );
};


export const ServiceCard = ({ img, title, description }) => {
    return (
        <div className="flex flex-col m-1 md:m-0 md:w-1/4 border-2 border-logoGreen space-y-10 rounded-xl">
            <div><img src={img} alt="" className="w-24 h-24" /></div>
            <div><h1 className="text-3xl px-2 text-logoBlue font-semibold">{title}</h1></div>
            <div><p className=" text-lg px-2 text-logoBlue">{description}</p></div>
        </div>
    )
};

export const BlockchainCard = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-[32%] flex flex-col p-5 md:p-10 space-y-5 mt-1 md:mt-10">
            <div className="w-32 h-28 "><img src={img} alt="" className="w-20 h-20 " /></div>
            <div><h1 className="text-4xl  text-logoBlue font-semibold ">{title}</h1></div>
            <div><p className="text-xl text-logoBlue font-normal">{description}</p></div>
        </div>

    );
};

export const BlockchainCard1 = ({ img, title, description }) => {
    return (
        <div className="flex flex-col pt-5 m-1 md:m-0 md:w-1/4 space-y-10 ">
            <div><img src={img} alt="" className="w-24 h-24" /></div>
            <div><h1 className="text-2xl px-2 text-logoBlue font-semibold">{title}</h1></div>
            <div><p className=" text-lg px-2 text-logoGreen">{description}</p></div>
        </div>
    )
};

export const BlockchainCard2 = ({ img }) => {
    return (
        <div className="flex w-full md:w-[25%] justify-center">
            <img src={img} alt="" />
        </div>
    )
};

export const BlockchainCard3 = ({ title, description, img }) => {
    return (
        <div className="flex flex-col pt-5 m-1 md:m-0 md:w-1/3 space-y-10">
            <div><img src={img} alt="" className="w-24 h-24" /></div>
            <div><h1 className="text-2xl px-2 text-whity font-semibold">{title}</h1></div>
            <div><p className=" text-lg px-2 text-logoGreen">{description}</p></div>
        </div>
    )
};

export const EcommerceCard = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-[1/2] flex flex-col p-5 md:p-10 space-y-5 mt-1 md:mt-10">
            <div className="w-32 h-28 "><img src={img} alt="" className="w-20 h-20 " /></div>
            <div><h1 className="text-4xl  text-logoBlue font-semibold ">{title}</h1></div>
            <div><p className="text-xl text-logoBlue font-normal">{description}</p></div>
        </div>

    );
}

export const EcommerceCard1 = ({ title, description }) => {

    return (

        <div className=" flex flex-col rounded-2xl border-2 border-logoBlue space-y-5 md:w-1/2 md:px-10 py-5 bg-whity">
            <div><h1 className="text-4xl text-logoBlue text-center font-semibold">{title}</h1></div>
            <div><p className="text-xl text-logoBlue text-center leading-tight">{description}</p></div>
        </div>

    );
}

export const EcommerceCard2 = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-[49%] flex flex-col p-5 md:p-5 space-y-5 mt-1 md:mt-5">
            <div className="w-28 "><img src={img} alt="" className="w-16 h-16 " /></div>
            <div><h1 className="text-3xl  text-logoBlue font-semibold ">{title}</h1></div>
            <div><p className="text-lg text-logoBlue font-normal">{description}</p></div>
        </div>
    );
}

export const MarketplaceCard = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-[32%] flex flex-col p-5 md:p-10 space-y-5 mt-1 md:mt-10">
            <div className="w-32 h-28 "><img src={img} alt="" className="w-20 h-20 " /></div>
            <div><h1 className="text-2xl md:text-4xl  text-logoBlue font-semibold ">{title}</h1></div>
            <div><p className="text-xl text-logoBlue font-normal">{description}</p></div>
        </div>

    );
}

export const MarketplaceCard1 = ({ img, title, description }) => {
    return (

        <div className="bg-dusty md:w-[49%] flex gap-5 p-5 md:p-10 space-y-5 mt-1 md:mt-10">
            <div className="w-1/5 flex "><img src={img} alt="" className="w-20 h-20 " /></div>
            <div className="w-4/5 flex flex-col space-y-10">
                <div><h1 className="text-2xl md:text-4xl  text-logoBlue font-semibold ">{title}</h1></div>
                <div><p className="text-xl text-logoBlue font-normal">{description}</p></div>
            </div>
        </div>

    );
}

export const HireTeamsCard = ({ img, title, description }) => {
    return (
        <div className="bg-dusty flex flex-col pt-5 m-1 md:m-0 md:w-[32%] space-y-10 ">
            <div className="ml-4"><img src={img} alt="" className="w-16 h-16" /></div>
            <div className="ml-4"><h1 className="text-2xl px-2 text-logoBlue font-semibold">{title}</h1></div>
            <div className="ml-4"><p className=" text-lg px-2 text-logoBlue">{description}</p></div>
        </div>
    )
}

export const HireTeamsCard1 = ({ subTitle, title, description }) => {

    return (

        <div className=" flex flex-col rounded-2xl border-2 border-logoBlue space-y-5 md:w-[32%] px-5 py-5 bg-lightGreen">
            <div><h1 className="text-2xl text-logoBlue">{subTitle}</h1></div>
            <div><h1 className="text-4xl text-logoBlue font-semibold">{title}</h1></div>
            <div><p className="text-xl text-logoBlue leading-tight">{description}</p></div>
        </div>

    );
}

export const HireDeveloperCard = ({ img, title, description }) => {
    return (
        <div className="bg-whity flex flex-col pt-5 m-1 md:m-0 md:w-[24%] space-y-10 ">
            <div className="ml-4"><img src={img} alt="" className="w-16 h-16" /></div>
            <div className="ml-4"><h1 className="text-xl px-2 text-logoBlue font-bold">{title}</h1></div>
            <div className="ml-4"><p className=" text-lg px-2 text-logoBlue">{description}</p></div>
        </div>
    )
}

export const HireDeveloperCard1 = ({ img, title, description }) => {
    return (
        <div className=" flex flex-col py-10 m-1 md:m-0 md:w-[48%] space-y-10 border border-logoBlue rounded-3xl ">
            <div className="ml-4 w-16 h-16 overflow-hidden"><img src={img} alt="" className="w-16 h-16" /></div>
            <div className="ml-4"><h1 className="text-3xl px-2 text-logoBlue font-bold">{title}</h1></div>
            <div className="ml-4"><p className=" text-2xl px-2 text-logoGreen">{description}</p></div>
        </div>
    )
}