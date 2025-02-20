import { useMediaQuery } from 'react-responsive'
import Github from '../../Assets/SkillsAssets/github.png'
import { motion } from 'framer-motion'
import { useState } from 'react'



const ProjectComp = ({Title, Img, Desc, Link, LinkProject, id, LinkRepo, delay}) => {
const Mobile = useMediaQuery({ maxWidth: 768})
const [viewDetails, setViewDetails] = useState(false)
    
    return(
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeInOut', delay: delay}}
        viewport={{amount: 'some'}}
        onMouseEnter={() => setViewDetails(true)}
        onClick={() => setViewDetails(true)}
        onMouseLeave={() => setViewDetails(false)}
        className={`relative transform transition-all duration-500 text-white md:p-4 p-2 md:w-[380px] md:h-[400px] w-full h-24 ${Mobile ? 'hover:h-[300px]' : ''} bg-[linear-gradient(to_bottom_right,var(--background)_60%,white_300%)] rounded-md shadow-[0px_0px_10px_-8px_white] flex m-auto`} id={id}>
            <div className="w-full flex flex-col md:p-2 items-center">
                <div className="w-full flex flex-row justify-between p-2 items-center">
                    <h1 className="md:text-2xl text-lg font-semibold">{Title}</h1>
                    <img src={Img} className="rounded-full" width={50} height={50} />
                </div>
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={Mobile ? viewDetails ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 } : { opacity: 1, height: "auto" }}
                transition={{ duration: .3 }} 
                className={`relative w-full  h-full flex flex-col justify-between overflow-hidden`}>
                        <div className="w-[80%] text-justify md:p-4 px-2 h-full flex flex-col justify-between">
                               <h2 className=" text-md">Description : </h2>
                                <p className="italic text-[10px]  md:my-4 mt-2">{Desc}</p>
                                <a href={Link} className='italic text-sm text-sky-300 md:mt-4 mt-2'>{LinkProject}</a>
                            <a href={LinkRepo} >
                                <img src={Github} className='md:mt-4 mt-2' width={Mobile ? 20 : 30} height={Mobile ? 20 : 30}/>
                            </a>
                        </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ProjectComp