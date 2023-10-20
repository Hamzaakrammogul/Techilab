import logo from '../../../img/logo.png';
import Button from '../../UI/Button';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import pasha from '../../../img/30.png';
import fbr from '../../../img/31.png';
import pseb from '../../../img/32.jpg';
import pk from '../../../img/33.png';


const Footer = () => {
    return (
        <>
            <div className="bg-dusty mt-10">
                <div className=" container flex flex-col mx-auto md:flex-row  pt-10  ">
                    <div className='flex flex-col items-center md:items-start md:w-1/5'>
                        <div className='mx-4 mb-2'>
                            <img src={logo} alt='' width={110} />
                        </div>
                        <div>
                            <Button title="Let's connect" />
                        </div>
                        <div className='flex flex-row  space-x-6'>
                            <FaFacebookF size={30} className='mt-5 text-logoGreen' />
                            <FaLinkedinIn size={30} className='mt-5 text-logoGreen' />
                            <BsInstagram size={30} className='mt-5 text-logoGreen' />
                        </div>
                        <div className='mt-5'>
                            <p className='leading-none'>A58 Gulberg 3, Lahore <br /> Pakistan </p>
                            <p className='mt-5'> Info@techilab.com</p>
                        </div>
                        <div className='flex md:flex-col space-y-1'>
                            <div className='flex items-center space-x-2'>
                                <div className='w-24'> <img src={pasha} alt='' /></div>
                                <div className='w-24'> <img src={fbr} alt='' /></div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-24'> <img src={pseb} alt='' /></div>
                                <div className='w-16 ml-5'> <img src={pk} alt='' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-3 md:mt-0 md:w-4/5'>
                        <div className='mb-12'>
                            <h1 className='font-medium text-3xl text-center'>Web And Mobile App Development Company</h1>
                        </div>

                        <div>
                            <div className='flex justify-between space-x-2'>
                                <div>
                                    <h1 className='font-semibold'>Technologies</h1>
                                    <ul>
                                        <li className='mt-2 mb-2'>Angular</li>
                                        <li className='mt-2 mb-2'>React</li>
                                        <li className='mt-2 mb-2'>Ionic</li>
                                        <li className='mt-2 mb-2'>React Native</li>
                                        <li className='mt-2 mb-2'>Node</li>
                                        <li className='mt-2 mb-2'>Vue</li>
                                    </ul>
                                </div>
                                <div >
                                    <h1 className='font-semibold'>Services</h1>
                                    <ul>
                                        <li className='mt-2 mb-2'>Blockchain</li>
                                        <li className='mt-2 mb-2'>Data-Science</li>
                                        <li className='mt-2 mb-2'>Cyber Security</li>
                                        <li className='mt-2 mb-2'>E-commerce</li>
                                        <li className='mt-2 mb-2'>Online marketPlaces</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Industries</h1>
                                    <ul>
                                        <li className='mt-2 mb-2'>Marketing & advertising</li>
                                        <li className='mt-2 mb-2'>Real estate</li>
                                        <li className='mt-2 mb-2'>Logistics</li>
                                        <li className='mt-2 mb-2'>Health care</li>
                                        <li className='mt-2 mb-2'>Travel and hospitality</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='font-semibold'>Solutions</h1>
                                    <ul>
                                        <li className='mt-2 mb-2'>Product development services</li>
                                        <li className='mt-2 mb-2'>Hire a dedicated developer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center bg-logoBlue'>
                <p className='text-white p-2 '> &#169;2023 Techilab, All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;