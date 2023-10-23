import React from "react";
import Calendly from "../../calendly/Calendly";
import Maps from "../../Maps/Maps";

const ContactUs = () => {
    return (<>
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row mt-32">
                <div className="flex flex-col  md:w-1/2">

                    <div className="flex flex-col space-y-10">
                        <h1 className="text-6xl text-logoBlue font-semibold">Contact Us</h1>
                        <p className="text-2xl text-logoBlue font-semibold">Describe your product idea and we will
                            <br /> start working on it within 24 hours.
                        </p>
                    </div>

                    <div className="flex mt-10">
                        <form className="flex flex-col outline-none w-11/12">

                            <label className="text-lg text-logoBlue font-semibold mb-2" htmlFor="choose">How can we help you?</label>
                            <select className="appearance-none outline-none bg-dusty px-2 text-logoBlue h-14 border border-logoBlue mb-5 rounded-md" id="choose">
                                <option>Mobile App Development </option>
                                <option>Enterprises Software Development</option>
                                <option>Web Development </option>
                                <option>Dedicated Teams </option>
                                <option>IT Consulting </option>
                                <option>Internet Of Things </option>
                                <option>Blockchain</option>
                                <option>Augmented Reality</option>
                                <option>Artifical Intelligence</option>
                                <option>Cloud Computing</option>
                                <option>Fintech</option>
                                <option>Other</option>
                            </select>

                            <label className="text-lg text-logoBlue font-semibold mb-2" htmlFor="name">First Name</label>
                            <input type="text" id="name" className="appearance-none outline-none bg-dusty px-2 text-logoBlue h-14 border border-logoBlue mb-5 rounded-md" />

                            <label className="text-lg text-logoBlue font-semibold mb-2" htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" className="appearance-none outline-none bg-dusty px-2 text-logoBlue h-14 border border-logoBlue mb-5 rounded-md" />

                            <label className="text-lg text-logoBlue font-semibold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" className="appearance-none outline-none bg-dusty px-2 text-logoBlue h-14 border border-logoBlue mb-5 rounded-md" />

                            <label className="text-lg text-logoBlue font-semibold mb-2" htmlFor="description" >Project Description</label>
                            <textarea id="description" type="textarea" className="appearance-none  outline-none bg-dusty px-2 text-logoBlue h-40 border border-logoBlue mb-5 rounded-md" />

                            <label className="flex items-center gap-1">
                                <input type="checkbox" className="left-0  border border-logoBlue w-5 h-5" />
                                <span className="font-bold text-logoBlue text-lg">Check here to subscribed for updates.</span>
                            </label>

                            <div>
                                <button type="submit" className="border border-logoBlue py-3 px-4 mt-5 bg-darkDusty text-white text-xl font-bold">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col mx-auto md:mx-0" >
                    <div className=" md:w-1/2 absolute h-[700px] overflow-y-auto overflow-x-hidden "><Calendly /></div>
                    <div className="flex flex-col  space-y-3  mt-[750px]">
                        <h1 className="text-2xl text-logoBlue font-semibold">A52 Gulberg 3 Lahore Pakistan</h1>
                        <h1 className="text-2xl text-logoBlue font-semibold">Info@techilab.com</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Maps />
            </div>
        </div>
    </>);
}
export default ContactUs;