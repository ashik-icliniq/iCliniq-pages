import React , {useState, useEffect} from 'react';
import { ImSearch } from 'react-icons/im';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import {HiMenu} from 'react-icons/hi';
import Sidebar from './Sidebar';
import * as CONSTANTS from '../../constants';


export default function Header() {
    const [stickyClass, setStickyClass] = useState<String>('navbar');
    const [sidebarTrigger, setSidebarTrigger] = useState<Boolean>(false);
    const closeSidebar = () => {
        setSidebarTrigger(prev => !prev)
    }

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    console.log('heloo')

    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 5 ? setStickyClass('navbar-scroll') : setStickyClass('navbar');
        }
    };

    return (
        <>
            <Sidebar sidebarOpen={sidebarTrigger} closeSidebar={closeSidebar} />
            <div className={`${stickyClass} lg:flex md:flex  justify-between items-center`}>
            <div className='flex  lg:flex items-center justify-between w-full lg:w-auto '>
                <img src="/assets/images/ic-white-logo.svg" className='white-logo' />
                <div className={stickyClass === 'navbar-scroll' ? 'nav-menu-scroll  hidden lg:flex items-center' : 'nav-menu  hidden lg:flex items-center'}> 
                    {CONSTANTS.NAV_MENU.map((options) => {
                        return (

                            typeof options === 'object' ?
                            Object.keys(options).map ((result) => {
                                return (
                                    <>
                                        <span className="flex more-menu">{result} <MdOutlineArrowDropDown className="ml-2 text-xl" /></span>
                                        <div className='hover-menu'>
                                            <div>
                                                {options[result].map ( (hiddenMenu) => {
                                                    return (
                                                        <span>
                                                            {hiddenMenu}
                                                        </span>
                                                    )
                                                })} 
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            :
                            <span>{options}</span>
                        )
                    })}
                
                    <span><ImSearch  /></span>
                </div>
                <div className=" block lg:hidden"><HiMenu onClick={() => setSidebarTrigger(prev => !prev)} className={`text-3xl	${stickyClass === 'navbar-scroll' ? 'text-black' : 'text-white'}  `}/></div>
            </div>
            <div className='hidden sm-hidden lg:flex items-center'>
                <span>
                    Login / Signup
                </span>
                {stickyClass === 'navbar-scroll' && <button className='free-consult'>Free Consultation</button>}
            </div>
        </div>
        </>
        
    )
}

