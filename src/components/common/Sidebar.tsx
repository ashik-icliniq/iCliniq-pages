// import React, {useState, useEffect} from "react";
// // import {AiOutlineCloseCircle} from 'react-icons/ai/index'
// import * as CONSTANTS from '../../constants'



// interface SideBarProps {
//     sidebarOpen: Boolean,
//     closeSidebar() : void
// }

// export default function Sidebar ({sidebarOpen, closeSidebar}: SideBarProps){

//     const []  = CONSTANTS.NAV_MENU;
//     const [bannerMenu, setBannerMenu] = useState<String>(CONSTANTS.BANNER_MENU_OPTION[0])
//     const [navMenu, setNavMenu] = useState<any>({})

//     const activeHandler = (e: any , options: String) => {
//         setBannerMenu(options)
//     }

//     useEffect(() => {
//         {CONSTANTS.NAV_MENU.map((options) => {
//             typeof options === 'object' &&
//                 Object.keys(options).map ((result) => {
//                     setNavMenu({...navMenu , [result] : false })
//                 })
//         })}
    
//       }, []);

//       const expandMenu = (result) => {
//         setNavMenu({...navMenu , [result] : !navMenu[result] })
//       }
    
//       console.log(navMenu)

  
//     return (
//         <>
//             <div className={`sidebar-bg ${sidebarOpen ? 'block' : 'hidden'}`}></div>
//             <div className={`sidebar ${!sidebarOpen && 'sidebar-move-aside'}`}>
//                 {/* <AiOutlineCloseCircle onClick={closeSidebar} className="text-3xl float-right m-5 cursor-pointer "/> */}
//                 <div className="sidebar-nav-content">
//                 {CONSTANTS.NAV_MENU.map((options) => {
//                         return (

//                             typeof options === 'object' ?
//                             Object.keys(options).map ((result) => {
//                                 return (
//                                     <>
//                                         <div onClick={() => expandMenu(result)} className="flex items-center more-menu">{result} 
//                                         {/* <MdOutlineArrowDropDown className="ml-2 text-2xl" /> */}
//                                         </div>
//                                         <div className={`nav-object-sidebar ${navMenu[result] ? 'block' : 'hidden' }`} >
//                                             <div>
                                                
//                                                 {options[result].map ( (hiddenMenu) => {
//                                                     return (
//                                                         <div>
//                                                             {hiddenMenu}
//                                                         </div>
//                                                     )
//                                                 })} 
//                                             </div>
//                                         </div>
//                                     </>
//                                 )
//                             })
//                             :
//                             <div>{options}</div>
//                         )
//                 })}
//                 </div>
//                 <div className="flex mx-5 items-center justify-start flex-wrap">
//                     {
//                         CONSTANTS.BANNER_MENU_OPTION.map((options) => {
//                             return (
//                                 <button onClick={(event: React.MouseEvent<HTMLElement>) => {
//                                     activeHandler((event.target as any), options as String)
//                                    }} className={`${bannerMenu === options ? 'sidebar-pills-active rounded-full text-white sidebar-pills' : 'rounded-full text-white sidebar-pills'}`}>{options}</button>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }