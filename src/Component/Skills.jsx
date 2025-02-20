import MarqueeIcons from "../Utilities/MarqueIcons"
import { motion } from "framer-motion"


const Skills = ({IntoPage}) => {
    return(
        <div ref={IntoPage} className="h-56 p-4 w-full justify-center relative flex items-center m-auto flex-col flex">
            <div className='w-full flex justify-center md:ml-8 mt-4 text-white'>
                <motion.h1 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:'easeInOut'}}
                viewport={{amount: 0.2}}
                className='text-5xl'>Skills</motion.h1>
            </div>
            <motion.div 
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:'easeInOut'}}
            viewport={{amount: 0.8}}
            className="w-full flex items-center justify-center m-auto">
                <MarqueeIcons/>
            </motion.div>
        </div>
    )
}

export default Skills
