import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import ReactDOM from 'react-dom';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Backdrop = (props) => {
    return (
        <Transition show={props.value}>
            <Transition.Child
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-700 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
                as='div' >
                <div className='flex absolute z-50 w-full md:hidden top-0  h-screen bg-logoGreen bg-opacity-20  ' />
            </Transition.Child>
        </Transition>
    );
}

const HamMenu = (props) => {

    useEffect(() => (
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    ), [props.value])

    return (
        <Transition show={props.value}>
            <Transition.Child
                enter='transition ease-in-out duration-700 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
                as='div' >

                <div className='flex w-11/12 top-0 h-screen md:hidden bg-whity absolute z-50 -mt-3 '>
                    <ul className='flex w-full text-lg font-semibold  flex-col space-y-5  '>
                        <div onClick={props.onClick} className='flex place-content-end mt-10 text-logoGreen'> <RxCross2 size={28} /></div>
                        <li >
                            <div className='peer px-2 flex items-center justify-between cursor-pointer font-semibold'>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div className='flex items-center'>Company </div>
                                </NavLink>
                                <div className='ml-10 px-3 rounded-xl border border-logoBlue'><IoIosArrowDown /></div>
                            </div>
                            <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[250px] flex-col  bg-whity ">
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/aboutus"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>About us </NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Portfolio </NavLink></div>
                            </div>
                        </li>

                        <li>
                            <div className='peer px-2 flex items-center justify-between cursor-pointer font-semibold'>
                                <NavLink to={'/services'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div className='flex items-center'>Services </div>
                                </NavLink>
                                <div className='ml-10 px-3 rounded-xl border border-logoBlue'><IoIosArrowDown /></div>
                            </div>
                            <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[250px] flex-col bg-whity ">
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/blockchain'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Blockchain</NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/cybersecurity'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Cyber Security</NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/datascience'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Data Science</NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/e-commerce'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>E-commerce</NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/onlinemarketplaces'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Online Market Places</NavLink></div>
                            </div>
                        </li>
                        <li>
                            <div className='peer px-2 flex items-center justify-between cursor-pointer font-semibold'>
                                <NavLink to={'/solutions'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div className='flex items-center'>Solutions </div>
                                </NavLink>
                                <div className='ml-10 px-3 rounded-xl border border-logoBlue'><IoIosArrowDown /></div>
                            </div>
                            <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[300px] flex-col bg-whity ">
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'> <NavLink to={'/product-development-services'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Product Development Services </NavLink></div>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/hire-a-developer'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Hire a dedicated developer</NavLink></div>
                            </div>
                        </li>
                        <li>
                            <div className='peer px-2 flex items-center justify-between cursor-pointer font-semibold'>
                                <NavLink to={'/contact-us'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div onClick={props.onClick} className='flex items-center'>Contact us </div>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className='peer flex cursor-pointer mx-2 font-semibold rounded-full border-2 py-3 px-3 border-logoGreen  transition duration-300 hover:scale-105'>
                                <NavLink to={'/hire-a-developer'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div onClick={props.onClick} className='flex ml-24'>Hire A Developer</div>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </Transition.Child>
        </Transition>
    );
}

const HamburgerMenu = (props) => {

    props.value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    return (
        <>
            {ReactDOM.createPortal(<Backdrop value={props.value} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<HamMenu onClick={props.onClick} value={props.value} />, document.getElementById('menu-root'))}
        </>
    );
}

export default HamburgerMenu;