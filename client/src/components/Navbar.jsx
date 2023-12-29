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

    
    
  return (
    <div className={`h-20 dark:bg-black`}>
        <div className="flex items-center justify-between w-11/12 sm:w-98 m-auto h-full">
            <div className="">
                <h1 className="font-bold dark:text-dark text-light text-2xl sm:text-4xl">SojDev</h1>
            </div>
            <nav className={`fixed h-full top-20 left-0 text-center w-full sm:m-auto sm:w-auto sm:static duration-150 ${Menu ? `translate-x-full` : `translate-x-none`}`}>
                <ul className="flex h-full flex-col items-center justify-center gap-5 bg-white sm:bg-transparent sm:flex sm:flex-row sm:gap-20 dark:text-dark text-light font-sans font-bold">
                    <li>
                        <Link>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-5 sm:block">
                <button className={`flex items-center rounded-3xl shrink w-14 h-6 sm:w-16 sm:h-8 bg-white shadow-black shadow-inner`} onClick={handleChange}>
                    <div className={`w-4 h-4 sm:w-6 sm:h-6 m-2 transition duration-50 ease-in-out rounded-full border-black-80 shadow border  ${isThemeDark ? 'translate-x-6 bg-primary ' : 'bg-yellow-500 '}`}>
                    </div>
                </button>
                <div className={`w-12 h-12 sm:hidden active:rotate-90 duration-100`} onClick={handleNav}>
                    <button>
                        <img src={Menu ? burger_menu : close_menu} alt="" />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar