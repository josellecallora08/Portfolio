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
    <div className={`gap-1 h-screen bg-secondary dark:bg-black  `}>
        <Navbar/>
        <div className={`w-98 m-auto grid grid-cols-4 h-inherit gap-20`}>
            <div className={` col-span-1 grid grid-cols-1 grid-rows-4 gap-4`}>
                <div className="w-full h-full col-span-1 row-span-3 shadow-lg dark:bg-gray-600/30 rounded-md">
                2
               </div>
               <div className="w-full h-full col-span-1 row-span-1 shadow-lg dark:bg-gray-600/30 rounded-md">
                    <h1 className="text-center font-bold text-2xl p-2 dark:text-dark">LOGIN</h1>
                    <form className={`grid grid-cols-1 grid-rows-3 gap-2 place-items-center`}>
                        <div className="w-4/5 h-10 col-span-1 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden">
                            <input type="text" placeholder="Username" className="w-full h-full px-5 outline-none shadow"/>
                        </div>
                        <div className="w-4/5 h-10 col-span-1 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden">
                            <input type="password" placeholder="Password" name="" id="" className="w-full h-full px-5 outline-none"/>
                        </div>
                        <button className="w-4/5 h-10 col-span-1 row-span-1 mx-auto shadow-sm rounded-sm overflow-hidden text-white bg-primary font-bold uppercase ease-in-out duration-150 border-2 border-transparent hover:bg-secondary hover:text-light hover:border-primary">
                            Login
                        </button>
                    </form>
               </div>
            </div>
            <div id="main-container" className="col-span-2 grid gap-4 grid-cols-1 grid-flow-row justify-items-center overflow-y-scroll custom-scrollbar">
                 {/* <div className="flex flex-col gap-2 justify-around  shadow-lg w-4/5 h-auto py-5 col-span-1 dark:bg-gray-600/30 dark:shadow-sm rounded-lg">
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
                   <div>
                   </div>
                </div> */}
                <div className="flex justify-around  shadow-lg w-4/5 h-auto py-5 col-span-1 dark:bg-gray-600/30 dark:shadow-sm rounded-lg">
                    <div className="flex items-center justify-center w-full h-100 overflow-hidden">
                        <img src={myphoto} alt="" className=" rounded-md object-cover w-4/5 h-full"/>
                    </div>
                    <div className="flex justify-center items-center  w-full h-100">
                        <div className="text-center font-sans">
                            <a href="" download><img src={resume} alt="" className="hover:scale-105 ease-in-out duration-150 object-cover rounded-lg w-full h-full" /></a>
                            <p className="font-bold text-light dark:text-dark mt-3">Joselle E. Callora</p>
                            <a href="mailto:josellecallora08@gmail.com" className="text:light dark:text-dark hover:underline">josellecallora08@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="h-80 w-4/5 rounded-lg shadow-lg dark:shadow-sm  dark:bg-gray-600/30">
                    <div className="h-full grid grid-cols-3 gap-4 m-auto w-5/6">
                        <div className="col-span-1  m-auto">
                            <h1 className="dark:text-dark font-bold text-lg">Javascript Essentials</h1>
                        </div>
                        <figure className="col-span-2 bg-white-300 w-full h-4/5 m-auto flex items-center justify-center">
                            <img src={js_cert} alt="Javascript Essentials" className="h-full w-full contain" />
                        </figure>
                    </div>
                </div>
                {/* The divs containers will be components */}
                <div className="h-80 w-4/5 rounded-lg shadow-lg dark:shadow-sm  dark:bg-gray-600/30">
                    
                </div>
            </div>
            <div className={`grid grid-cols-1 grid-rows-5 gap-4 h-full items-start `}>
               <div className="w-full h-full col-span-1 row-span-2 shadow-lg dark:bg-gray-600/30 rounded-md">
                    <div className="shadow-md rounded-md overflow-hidden my-5 mx-auto w-4/5 h-10">
                        <input type="search" name="" id="searchbar" placeholder="Search..." className="outline-none px-3 w-full h-full"/>
                    </div>
                    <div className="w-4/5 mx-auto">
                        <h1 className="flex gap-2 font-sans font-bold uppercase underline dark:text-dark">
                            <img src={notif_icon} className="color-red" alt="" />
                            Updates
                        </h1>
                        <div className="flex flex-col gap-2 mt-2">
                            {/* The anchor tanks will be components */}
                            <a href="">
                                <p className="flex gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>
                            <a href="">
                                <p className="flex gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                    </p>
                            </a>
                            <a href="">
                                <p className="flex gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>
                            <a href="">
                                <p className="flex gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>
                            <a href="">
                                <p className="flex gap-2 ml-5 hover:translate-x-2 dark:text-dark">
                                    <img src={list_icon} alt="" />
                                    Uploaded MERN Stack Project
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full col-span-1 row-span-3 shadow-lg dark:bg-gray-600/30 rounded-md">
                2
               </div>
            </div>
        </div>
    </div>
  )
}
