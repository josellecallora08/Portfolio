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
    
    // useEffect(() => {
    //     const main = document.getElementById('main-container');
      
    //     const handleScroll = () => {
    //       setScroll(main.scrollTop > 1);
    //     };
    //     main.addEventListener('scroll', handleScroll);
      
    //     return () => {
    //       main.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
   
    return (
    <div className={`w-full h-screen md:h-screen bg-secondary dark:bg-black`}>
        <Navbar/>
        <div className="w-80 m-auto md:w-full h-inherit grid md:grid-cols-5 gap-2 md:gap-10">
            <div className="grid md:grid-rows-4 gap-2">
                <div className="md:row-span-3 shadow-md">1</div>
                <div className="h-fit shadow-md">
                    <h1 className="text-center mt-2 md:mt-0 font-bold">LOGIN</h1>
                    <form className="grid gap-2 p-5 md:p-0">
                        <div className="w-4/5 m-auto ">
                            <input type="text" className="w-full rounded-md outline-none px-2 py-1"/>
                        </div>
                        <div className="w-4/5 m-auto">
                            <input type="password" name="" id="" className="w-full rounded-md outline-none px-2 py-1" />
                        </div>
                        <div className="w-4/5 h-3/5 m-auto">
                            <button className="w-full bg-gray-600/30 rounded-md shadow-md px-2 py-1 duration-150 hover:bg-slate-400">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row-start-1 md:row-start-auto md:col-span-3 shadow-md">2nd column</div>
            <div className="grid md:grid-rows-5 gap-2 md:shadow-md">
                <div className="row-span-2 md:shadow-md">1</div>
                <div className="row-span-3 h-full md:shadow-md">
                    <h1 className="text-center p-2">Certifications</h1>
                    <div className="w-4/5 md:max-h-72 grid gap-2 h-full m-auto md:overflow-auto custom-scrollbar">
                        <div className="w-full h-full  m-auto">
                            <img src={js_cert} className="object-contain w-full h-full" alt="" />
                        </div>
                        <div className="w-full h-full  m-auto">
                            <img src={js_cert} className="object-contain w-full h-full" alt="" />
                        </div>
                        <div className="w-full h-full  m-auto">
                            <img src={js_cert} className="object-contain w-full h-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
