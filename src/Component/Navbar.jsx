import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = ({dataRef}) => {
const Mobile = useMediaQuery({ maxWidth: 768 })
const [isOpen, setIsOpen] = useState(false)

const ScrollIntoPage = (ref) => {
    dataRef[ref]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false)
}

    return(
        <nav className="relative text-white md:w-[50%] w-full h-16 flex flex-row justify-around items-center m-auto">
            { Mobile && 
            (
                <button className="md:hidden absolute right-5 top-5 block" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <List size={32}/>}
                </button> 
            )
            }
            <motion.div 
            initial={Mobile ? { opacity: 0, y: -50 } : {opacity: 1, y:0}}
            animate={Mobile ? { opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 } : null}
            transition={{ duration: 0.3 }}
            className={`flex md:relative absolute top-[60px] md:right-0 md:top-0 right-0 z-10 md:flex-row md:w-full rounded bg-white md:bg-transparent w-28 md:p-0 md:h-full h-36 md:text-lg text-xs md:text-white text-black items-center md:justify-around justify-between m-auto md:flex ${isOpen ? 'flex flex-col' :  'hidden'}`}>
            <button onClick={() => ScrollIntoPage('home')} className="transition-all duration-300 md:hover:scale-110 md:hover:bg-transparent hover:bg-[--background] hover:text-white md:w-max md:h-max h-8 w-full">Home</button>
            <button onClick={() => ScrollIntoPage('about')}className="transition-all duration-300 md:hover:scale-110 md:hover:bg-transparent hover:bg-[--background] hover:text-white md:w-max md:h-max h-8 w-full">About</button>
            <button onClick={() => ScrollIntoPage('skills')} className= "transition-all duration-300 md:hover:scale-110 md:hover:bg-transparent hover:bg-[--background] hover:text-white md:w-max md:h-max h-8 w-full">Skills</button>
            <button onClick={() => ScrollIntoPage('contact')} className="transition-all duration-300 md:hover:scale-110 md:hover:bg-transparent hover:bg-[--background] hover:text-white md:w-max md:h-max h-8 w-full">Contact</button>    
            <button onClick={() => ScrollIntoPage('project')} className="transition-all duration-300 md:hover:scale-110 md:hover:bg-transparent hover:bg-[--background] hover:text-white md:w-max md:h-max h-8 w-full">Project</button>
            </motion.div>
        </nav>
    )
}

export default Navbar