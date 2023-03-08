import React from 'react';
import { Card } from 'flowbite-react';
import {FaFacebookF, FaLinkedinIn , FaInstagram, FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal } from 'react-icons/fa/index';
import {SiAmericanexpress} from 'react-icons/si/index';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai/index';
import {FcCustomerSupport} from 'react-icons/fc/index';

function Footer() {

  return (
    <>
        <Card className='rounded-none mt-20 footer pb-10' >
            <div className=" mx-auto px-0 lg:px-5 w-4/5  container">
                <div className='flex justify-between items-center  mb-10 ' >
                    <div>
                        <img src="/assets/images/ic-white-logo.svg" className='w-32 bg-white p-3 py-2 rounded' />
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-white	 mr-3 p-2 cursor-pointer rounded-full'>
                            <FcCustomerSupport className='text-3xl   text-white' />
                        </div>
                        <span className='text-white'>24 / 7 Support</span>
                    </div>
                   
                </div>
                <hr />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
                    <div className='flex flex-col leading-8'>
                        <span className='text-white'>Ask a Doctor Online</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                    </div>
                    <div className='flex flex-col leading-8'>
                        <span className='text-white'>Ask a Doctor Online</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                    </div>
                    <div className='flex flex-col leading-8 mt-5 lg:mt-0 md:mt-0'>
                        <span className='text-white'>Ask a Doctor Online</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                    </div>
                    <div className='flex flex-col leading-8 mt-5 lg:mt-0 md:mt-0'>
                        <span className='text-white'>Ask a Doctor Online</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                        <span className='text-white'>Phone a Doctor</span>
                    </div>
                </div>

                <p className='mt-10 text-white text-2xl'>SPECIALTIES WE COVER</p>
                <div className='mt-8 text-slate-300 flex flex-wrap'>
                    <h5 className='text-slate-300 pr-4'>Obstetrics and Gynecology</h5>
                    <h5 className='text-slate-300 pr-4'> Dermatology</h5>
                    <h5 className='text-slate-300 pr-4'>Internal Medicine </h5>
                    <h5 className='text-slate-300 pr-4'>Endocrinology  </h5>
                    <h5 className='text-slate-300 pr-4'>Nephrology</h5>
                    <h5 className='text-slate-300 pr-4'>Diabetology</h5>
                    <h5 className='text-slate-300 pr-4'>Allergy Specialist</h5>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mt-10">
                    <Card >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div>
                    <p className='text-white mt-8 tracking-wide	'>
                       <b>Disclaimer:</b>  No content published on this website is intended to be a substitute for professional medical diagnosis, advice or treatment by a trained physician. Seek advice from your physician or other qualified healthcare providers with questions you may have regarding your symptoms and medical condition for a complete medical diagnosis. Do not delay or disregard seeking professional medical advice because of something you have read on this website. Read our Editorial Process to know how we create content for health articles and queries.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  mt-10">
                    <div>
                        <h5 className="text-white text-2xl">
                            PAYMENTS ACCEPTED
                        </h5>
                        <div className='flex mt-5 items-center'>
                            <FaCcVisa className='text-5xl cursor-pointer mr-3 text-white' />
                            <FaCcMastercard className='text-5xl cursor-pointer mr-3 text-white' />
                            <FaCcDiscover className='text-5xl cursor-pointer mr-3 text-white' />
                            <SiAmericanexpress className='text-5xl cursor-pointer mr-3 text-white' />
                            <FaCcPaypal className='text-5xl cursor-pointer mr-3 text-white' />
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <h5 className="text-white text-sm">
                            Follow Us
                        </h5>
                        <div className='flex mt-5 items-center'>
                            <div className='bg-blue-700	 mr-3 p-3 cursor-pointer rounded-full'>
                                    <FaFacebookF className='text-l   text-white' />
                            </div>
                            <div className='bg-blue-400 mr-3 p-3 cursor-pointer rounded-full'>
                                    <AiOutlineTwitter className='text-l  text-white' />
                            </div>
                            <div className='bg-sky-700		 mr-3 p-3 cursor-pointer rounded-full'>
                                    <FaLinkedinIn className='text-l  text-white' />
                            </div>
                            <div className='bg-pink-600	 mr-3 p-3 cursor-pointer rounded-full'>
                                    <FaInstagram className='text-l  text-white' />
                            </div><div className='bg-red-600 cursor-pointer	 mr-3 p-3 rounded-full'>
                                    <AiFillYoutube className='text-l   text-white' />
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='mt-10'>
                        <p className='text-white  tracking-wide	text-center'>
                            Copyright © 2023, iCliniq - All Rights Reserved
                        </p>
                </div>
            </div>
        </Card>
    </>
  )
}

export default Footer