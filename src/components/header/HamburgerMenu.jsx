import React from 'react';
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
                        <div className='flex place-content-end mt-10 text-logoGreen'> <RxCross2 size={28} onClick={props.onClick} /></div>
                        <li >
                            <div className='peer px-2 flex items-center justify-between cursor-pointer font-semibold'>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>
                                    <div className='flex items-center'>Company </div>
                                </NavLink>
                                <div className='ml-10 px-3 rounded-xl border border-logoBlue'><IoIosArrowDown /></div>
                            </div>
                            <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[250px] flex-col  bg-whity ">
                                <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/aboutus"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>About us </NavLink></p>
                                <div onClick={props.onClick} className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Portfolio </NavLink></div>
                            </div>
                        </li>

                        <li>Service <IoIosArrowDown size={20} /> </li>
                        <li>Solutions <IoIosArrowDown size={20} /> </li>
                        <li>Contact us <IoIosArrowDown size={20} /> </li>
                        <li>Hire a Developer <IoIosArrowDown size={20} /></li>
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