import React from 'react';
import { Card } from 'flowbite-react';

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
                        <div className='bg-violet-400		h-8 w-8 text-center mr-3 pt-1 cursor-pointer rounded-full'>
                            <i className="	fa fa-headphones text-l cursor-pointer  text-white"></i>                            
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

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-10">
                <Card>
                    <h5 className="mb-2 text-3xl font-bold text-center text-gray-900 dark:text-white">
                        Get us through the app
                    </h5>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <a
                        href="#"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                        <svg
                            className="mr-3 h-7 w-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="apple"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            />
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">
                            Download on the
                            </div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            Mac App Store
                            </div>
                        </div>
                        </a>
                        <a
                        href="#"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                        <svg
                            className="mr-3 h-7 w-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google-play"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                            fill="currentColor"
                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            />
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">
                            Get in on
                            </div>
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            Google Play
                            </div>
                        </div>
                        </a>
                    </div>
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
                            <i className="fa fa-cc-mastercard text-4xl cursor-pointer mr-3 text-white"></i>                            
                            <i className="fa fa-cc-amex text-4xl cursor-pointer mr-3 text-white"></i>                           
                            <i className="fa fa-cc-visa text-4xl cursor-pointer mr-3 text-white"></i>                           
                            <i className="fa fa-cc-discover text-4xl cursor-pointer mr-3 text-white"></i>                           
                            <i className="fa fa-cc-paypal text-4xl cursor-pointer mr-3 text-white"></i>                           
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <h5 className="text-white text-sm">
                            Follow Us
                        </h5>
                        <div className='flex mt-5 items-center'>
                            <div className='bg-blue-700	 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full'>
                                <i className="fa fa-facebook-f text-m  text-white cursor-pointer"></i> 
                            </div>
                            <div className='bg-violet-600	 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full'>
                                <i className="fa fa-instagram text-m  text-white cursor-pointer"></i> 
                            </div>
                            <div className='bg-cyan-400		 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full'>
                                <i className="fa fa-twitter text-m  text-white cursor-pointer"></i> 
                            </div>
                            <div className='bg-pink-800		 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full'>
                                <i className="fa fa-linkedin text-m  text-white cursor-pointer"></i> 
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