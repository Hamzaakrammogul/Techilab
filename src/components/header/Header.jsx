import { Fragment, useState } from 'react';
import logo from '../../../img/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenuOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

    const [value, setValue] = useState(false);

    const onClickHandler = () => {
        if (value === false) {
            setValue(true)
        } else {
            setValue(false)
        }
    };

    return (
        <Fragment>


            <div className={`w-auto h-100 border ${!value ? 'sticky z-10' : 'static'}  shadow  top-0 bg-white `}>
                <HamburgerMenu onClick={onClickHandler} value={value} />
                <div className=' container flex flex-row items-center justify-between mx-auto md:flex-row'>
                    <div>
                        <NavLink to={'/'}><img src={logo} width={80} alt='' /></NavLink>
                    </div>
                    <div className='md:hidden'>
                        <IoMenuOutline onClick={onClickHandler} size={32} />
                    </div>

                    {/* Desktop */}
                    <div className='hidden md:flex space-x-6 items-center'>
                        <ul className='flex space-x-6'>
                            <div>
                                <li ><div className='peer px-2 flex items-center cursor-pointer font-semibold'> <NavLink to={'/'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Company</NavLink> <IoIosArrowDown /></div>
                                    <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[250px] flex-col  bg-whity ">
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/aboutus"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>About us </NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={"/portfolio"} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Portfolio </NavLink></p>

                                    </div>
                                </li>
                            </div>
                            <div>
                                <li ><div className='peer px-2 flex items-center cursor-pointer font-semibold'><NavLink to={'/services'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Services</NavLink> <IoIosArrowDown /></div>
                                    <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[250px] flex-col bg-whity ">
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/blockchain'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Blockchain</NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/cybersecurity'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Cyber Security</NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/datascience'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Data Science</NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/e-commerce'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>E-commerce</NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/onlinemarketplaces'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Online Market Places</NavLink></p>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li ><div className='peer px-2 flex items-center cursor-pointer font-semibold'>Solutions <IoIosArrowDown /></div>
                                    <div className=" absolute hidden transition-all duration-300 rounded-md shadow-xl border border-gray-300 peer-hover:flex hover:flex w-[300px] flex-col bg-whity ">
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'> <NavLink to={'/product-development-services'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Product Development Services </NavLink></p>
                                        <p className='flex justify-center py-5 text-lg font-semibold px-2 cursor-pointer hover:text-logoGreen'><NavLink to={'/hire-a-developer'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Hire a dedicated developer</NavLink></p>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li className='px-2 flex items-center cursor-pointer font-semibold'><NavLink to={'/contact-us'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Contact us</NavLink> </li>
                            </div>

                        </ul>
                        <button className='rounded-full border-2 py-3 px-3 border-logoGreen font-medium transition duration-300 hover:scale-110'><NavLink to={'/hire-a-developer'} className={({ isActive }) => isActive ? "text-logoGreen" : ''}>Hire a developer</NavLink></button>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Header;