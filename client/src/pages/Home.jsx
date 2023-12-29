import Navbar from "../components/Navbar"
import '../index.css';
import myphoto from '../assets/myphoto.jpg'
import resume from '../assets/resume-qr.png'
import notif_icon from '../assets/images/notification_icon.svg'
import list_icon from '../assets/images/list_icon.svg'
import upload_icon from '../assets/images/upload_icon.svg'
import js_cert from '../assets/images/js_cert.png'


import { useEffect, useState } from "react";
export const Home = () => {
    const [onScroll, setScroll] = useState(false)
    
    useEffect(() => {
        const main = document.getElementById('main-container');
      
        const handleScroll = () => {
          setScroll(main.scrollTop > 1);
        };
        main.addEventListener('scroll', handleScroll);
      
        return () => {
          main.removeEventListener('scroll', handleScroll);
        };
      }, []);
   
    return (
    <div className={`gap-1 h-full md:h-screen bg-secondary dark:bg-black  `}>
        <Navbar/>
        <div className={`w-full h-auto m-auto grid grid-cols-1 grid-flow-row md:w-98 md:h-inherit md:grid-cols-4 gap-4 md:gap-10`}>
            <div className={`grid grid-rows-3 m-auto h-full w-full md:w-98 gap-4 row-start-2 md:col-span-1 md:row-start-1 lg:gap-2`}>
                <div className="w-96 h-full md:row-span-2 mx-auto shadow-lg dark:bg-gray-600/30 rounded-md">
                2
               </div>
               <div className="hidden md:block row-span-1 shadow-lg dark:bg-gray-600/30 rounded-md">
                    <h1 className="text-center font-bold text-2xl sm:text-sm p-2 dark:text-dark">LOGIN</h1>
                    <form className={`grid grid-rows-3 gap-2 place-items-center`}>
                        <div className="w-4/5 h-10 sm:h-8 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden">
                            <input type="text" placeholder="Username" className="w-full h-full px-5 outline-none shadow"/>
                        </div>
                        <div className="w-4/5 h-10 sm:h-8 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden">
                            <input type="password" placeholder="Password" name="" id="" className="w-full h-full px-5 outline-none"/>
                        </div>
                        <button className="w-4/5 h-10 sm:h-8 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden text-white bg-primary font-bold uppercase ease-in-out duration-150 border-1 border-transparent hover:bg-secondary hover:text-light hover:border-primary">
                            Login
                        </button>
                    </form>
               </div>
            </div>
            <div id="main-container" className="col-span-2 grid gap-4 sm:gap-2 grid-cols-1 grid-flow-row justify-items-center overflow-y-scroll custom-scrollbar">
                 {/* <div className="w-96 flex flex-col gap-2 justify-around  shadow-lg md:w-4/5 h-auto py-5 col-span-1 dark:bg-gray-600/30 dark:shadow-sm rounded-lg">
                   <button className="w-11/12 m-auto h-10 max-h-max px-5 bg-white rounded-xl outline-none text-left shadow-sm active:bg-gray-300">
                    Create a post...
                    </button>
                   <div className="h-6 max-h-max flex items-center justify-around">
                        <div className="relative">
                            <input type="file" accept="jpg/png/jpeg" id="upload_photo" className="hidden" />
                            <label htmlFor="upload_photo" className="absolute w-5 cursor-pointer hover:scale-105 ease-in duration-150">
                                <img src={upload_icon} alt="Upload Icon" />
                            </label>
                        </div>
                        <div className="relative">
                            <input type="file" accept="jpg/png/jpeg" id="upload_photo" className="hidden" />
                            <label htmlFor="upload_photo" className="absolute w-5 cursor-pointer hover:scale-105 ease-in duration-150">
                                <img src={upload_icon} alt="Upload Icon" />
                            </label>
                        </div>
                        <div className="relative">
                            <input type="file" accept="jpg/png/jpeg" id="upload_photo" className="hidden" />
                            <label htmlFor="upload_photo" className="absolute w-5 cursor-pointer hover:scale-105 ease-in duration-150">
                                <img src={upload_icon} alt="Upload Icon" />
                            </label>
                        </div>
                   </div>
                </div> */}
                <div className="w-96 grid grid-cols-2 shadow-lg md:w-4/5 md:h-full h-auto py-5 lg:col-span-1 dark:bg-gray-600/30 dark:shadow-sm rounded-lg">
                    <div className="grid justify-items-center">
                        <img src={myphoto} alt="" className="rounded-md object-cover w-4/5 h-full"/>
                    </div>
                    <div className="grid justify-items-center">
                        <div className="text-center font-sans h-full w-full">
                            <a href="" download className="grid justify-items-center"><img src={resume} alt="" className="hover:scale-90 ease-in-out duration-150 object-cover rounded-lg w-4/5" /></a>
                            <p className="text-sm md:text-base font-bold text-light dark:text-dark mt-3">Joselle E. Callora</p>
                            <a href="mailto:josellecallora08@gmail.com" className="text-sm md:text-base text:light dark:text-dark hover:underline">josellecallora08@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="h-80 w-96 md:w-4/5 rounded-lg shadow-lg dark:shadow-sm  dark:bg-gray-600/30">
                    <div className="h-full grid md:grid-cols-3 md:gap-4 m-auto w-5/6">
                        <div className="md:col-span-1 grid justify-items-center m-auto">
                            <h1 className="dark:text-dark font-bold text-lg">Javascript Essentials</h1>
                        </div>
                        <figure className="md:col-span-2 bg-white-300 w-full h-auto mb-auto grid justify-items-center">
                            <img src={js_cert} alt="Javascript Essentials" className="h-full w-full contain" />
                        </figure>
                    </div>
                </div>
                {/* The divs containers will be components */}
                <div className="h-70 w-96 md:w-4/5 rounded-lg shadow-lg dark:shadow-sm  dark:bg-gray-600/30">
                    
                </div>
            </div>
            <div className={`hidden md:grid grid-rows-5 sm:gap-2 h-full items-start `}>
               <div className=" w-full h-full row-span-3 shadow-lg dark:bg-gray-600/30 rounded-md">
                    <div className="shadow-md rounded-md overflow-hidden my-5 mx-auto w-4/5 h-10">
                        <input type="search" name="" id="searchbar" placeholder="Search..." className="outline-none px-3 w-full h-full"/>
                    </div>
                    <div className="w-4/5 mx-auto">
                        <h1 className="flex text-xs sm:text-sm gap-2 font-sans font-bold uppercase underline dark:text-dark">
                            <img src={notif_icon} className="color-red" alt="" />
                            Updates
                        </h1>
                        <div className="flex flex-col gap-2 mt-2">
                            {/* The anchor tanks will be components */}
                            <a href="">
                                <p className="flex text-xs sm:text-sm gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>         
                            <a href="">
                                <p className="flex text-xs sm:text-sm gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>   
                            <a href="">
                                <p className="flex text-xs sm:text-sm gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>  
                            <a href="">
                                <p className="flex text-xs sm:text-sm gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>                 
                        </div>
                    </div>
                </div>
                <div className="w-full h-full row-span-2 shadow-lg dark:bg-gray-600/30 rounded-md">
                2
               </div>
            </div>
        </div>
    </div>
  )
}
