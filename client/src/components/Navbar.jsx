import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { toggleTheme } from "../features/theme/themeSlice";
import burger_menu from '../assets/images/burger-menu.svg'
import close_menu from '../assets/images/close-icon.svg'
const Navbar = () => { 
    const [Menu, setMenu] = useState(true)
    const dispatch = useDispatch();
    const isThemeDark = useSelector((state) => state.theme === 'dark');
  
    const handleChange = () => {
      // Dispatch the toggleTheme action
      dispatch(toggleTheme());
    };
   
    const handleNav = () => {
        setMenu((prevState) => !prevState)
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isThemeDark);
      }, [isThemeDark]);

    const navigations = [
        {
            name:'Home',
            path:'/',
        },
        {
            name:'Portfolio',
            path:'/portfolio',
        },
        {
            name:'About',
            path:'/about ',
        },
        {
            name:'Contact',
            path:'/contact',
        }
    ]
    
    
  return (
    <div className={`h-20 dark:bg-black shadow-md`}>
        <div className="flex items-center justify-between md:w-11/12 w-80 xl:w-98 m-auto h-full">
            <div className="">
                <h1 className="font-bold dark:text-dark text-light text-2xl sm:text-4xl xl:text-4xl">SojDev</h1>
            </div>
            <nav className={`fixed h-full w-full top-20 left-0 text-center sm:m-auto sm:w-0 sm:static duration-150 ${Menu ? `translate-x-full` : `translate-x-none`}`}>
                <ul className="flex h-full flex-col items-center justify-center gap-5 bg-primary dark:bg-secondary sm:bg-transparent sm:flex sm:flex-row sm:gap-20 font-sans font-bold text-dark md:text-light dark:text-dark">
                    {
                        navigations.map((index,key) => (
                            <li key={key}>
                                <Link to={index.path}>{index.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="flex items-center gap-5 sm:block">
                <button className={`flex items-center rounded-3xl shrink w-16 h-8 bg-white shadow-black shadow-inner`} onClick={handleChange}>
                    <div className={`w-6 h-6 m-2 transition duration-50 ease-in-out rounded-full border-black-80 shadow border  ${isThemeDark ? 'translate-x-6 bg-primary ' : 'bg-yellow-500 '}`}>
                    </div>
                </button>
                <div className={`w-12 h-12 sm:hidden active:rotate-90 duration-100`} onClick={handleNav}>
                    <button>
                        <img src={burger_menu} alt="" />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar