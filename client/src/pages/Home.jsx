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
    <div className={`w-full h-screen bg-secondary dark:bg-black`}>
        <Navbar/>
        <div className="w-80 m-auto md:w-full h-inherit grid md:grid-cols-5 gap-2 md:gap-10">
            <div className="grid grid-rows-4 gap-2">
                <div className="row-span-3  shadow-md">1</div>
                <div className=" shadow-md">2</div>
            </div>
            <div className="row-start-1 md:row-start-auto md:col-span-3 shadow-md">2nd column</div>
            <div className="shadow-md">3</div>
        </div>
    </div>
  )
}
