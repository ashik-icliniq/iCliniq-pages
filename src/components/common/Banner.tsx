import React , { useState } from "react";
import * as CONSTANTS from '../../constants';

const BannerMenu = () => {

    const menuOptions = CONSTANTS.BANNER_MENU_OPTION;
    const [bannerMenu, setBannerMenu] = useState<String>(menuOptions[0])
    const activeHandler = (options: String) => {
        setBannerMenu(options)
    }
  
    return (
        <div className='banner-menu hidden lg:flex flex-wrap'>
            {
                menuOptions.map((options) => 
                    {
                        return (
                            <span className={`${bannerMenu === options ? 'banner-menu-active' : ''}`} key={options} onClick={(event: React.MouseEvent<HTMLElement>) => {
                                activeHandler(options as String)
                               }}>{options}</span>
                        )
                    }   
                )
            }
        </div>
    )
}

function Banner() {
  return (
    <>
    <BannerMenu />
    <div className='banner'>
        <div className='banner-search block md:flex justify-around w-9/12 lg:w-7/12 items-center	'>
            <select className=" w-full  md:w-2/5	h-10 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                <option selected value="">Select an option ---</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <input className=" mt-3 md:mt-0 w-full  md:w-1/3	 h-10  block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type='text' placeholder='Search' />
            <button className="h-10 mt-3 md:mt-0 ">Search</button>
        </div>
    </div>
    </>
  )
}

export default Banner