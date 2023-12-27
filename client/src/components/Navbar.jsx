import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { toggleTheme } from "../features/theme/themeSlice";

const Navbar = () => { 
    // const [isTheme, setTheme] = useState("light")
    
    // const handleChange = () => {
    //     // Toggle the theme state
    //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      
    //     // Get the updated theme value from state
    //     const currentTheme = isTheme === "light" ? "dark" : "light";
      
    //     // Update localStorage and apply the theme to the DOM
    //     localStorage.setItem('theme', currentTheme);
    //     document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    //   };
    const dispatch = useDispatch();
    const isThemeDark = useSelector((state) => state.theme === 'dark');
  
    const handleChange = () => {
      // Dispatch the toggleTheme action
      dispatch(toggleTheme());
    };
   
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isThemeDark);
      }, [isThemeDark]);
    
  return (
    <div className={`h-20 dark:bg-black`}>
        <div className="flex items-center justify-between w-98 m-auto h-full">
            <div className="">
                <h1 className="font-bold dark:text-dark text-light text-4xl">SojDev</h1>
            </div>
            <nav>
                <ul className="flex gap-20 dark:text-dark text-light font-sans font-bold">
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
            <div>
                <button className={`flex items-center rounded-3xl shrink w-16 h-8 bg-white shadow-black shadow-inner`} onClick={handleChange}>
                    <div className={`w-6 h-6 m-2 transition duration-50 ease-in-out rounded-full border-black-80 shadow border  ${isThemeDark ? 'translate-x-6 bg-primary ' : 'bg-yellow-500 '}`}>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar